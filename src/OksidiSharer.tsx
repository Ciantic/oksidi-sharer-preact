import { h, render } from "preact";
import { useState } from "preact/hooks";
import type { FunctionComponent } from "preact";
import style from "./OksidiSharer.scss";

const copyToClipboard = (str: string, element: HTMLElement) => {
    var el = document.createElement("textarea");
    el.value = str;
    element.appendChild(el);
    el.select();
    document.execCommand("copy");
    element.removeChild(el);
};

const getLocale = (locale: string): "fi" | "en" => {
    if (locale === "fi") {
        return "fi";
    } else {
        return "en";
    }
};
const TRANSLATIONS = {
    textShare: {
        fi: "Jaa",
        en: "Share",
    },
    textCopy: {
        fi: "Kopiotu leikepöydälle",
        en: "Copied to clipboard",
    },
    copyToClipboard: {
        fi: "Kopioi leikepöydälle",
        en: "Copy to clipboard",
    },
    shareToEmail: {
        fi: "Jaa sähköpostilla",
        en: "Share via email",
    },
};
const DEFAULT_PROPS = {
    locale: "",
    shareUrl: window.location.href,
    shareTitle: document.title,
    useFacebook: true,
    useTwitter: true,
    useWhatsapp: true,
    useLink: true,
    useEmail: true,
    useLinkedin: false,
    opener: true,
    openerSvg: "",
    closingSvg: "",
    textShare: "",
    textCopy: "",
    css: "",
};

const OksidiSharer: FunctionComponent<Partial<typeof DEFAULT_PROPS>> = (propsGiven) => {
    const props = Object.assign({}, DEFAULT_PROPS, propsGiven);
    const locale = getLocale(props.locale || document.documentElement.lang);
    const textShare = props.textShare || TRANSLATIONS.textShare[locale];
    const textCopy = props.textCopy || TRANSLATIONS.textCopy[locale];
    const [isOpen, setIsOpen] = useState(!props.opener);
    const [isOpenAnim, setIsOpenAnim] = useState(!props.opener);
    const [isOpenAnim2, setIsOpenAnim2] = useState(!props.opener);
    const [showCopyToClipboardTooltip, setShowCopyToClipboardTooltip] = useState(false);

    const urlUE = encodeURIComponent(props.shareUrl);
    const titleUE = encodeURIComponent(props.shareTitle);
    const facebookSharingUrl = `https://www.facebook.com/sharer.php?u=${urlUE}`;
    const twitterSharingUrl = `https://twitter.com/intent/tweet?text=${titleUE}&url=${urlUE}`;
    const linkedInSharingUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${urlUE}&title=${titleUE}&summary=&source=LinkedIn`;
    const whatsAppSharingUrl = `whatsapp://send?text=${urlUE}`;
    const mailSharingUrl = `mailto:?subject=${titleUE}&body=${urlUE}`;

    const openerSvg = props.openerSvg ? (
        <span dangerouslySetInnerHTML={{ __html: props.openerSvg }}></span>
    ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" aria-hidden>
            <path
                d={
                    "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-6 17c1.513-6.587 7-7.778 7-7.78v-2.222l5 4.425-5 4.464v-2.223c0 .001-3.78-.114-7 3.334z"
                }
            />
        </svg>
    );

    const closingSvg = props.closingSvg ? (
        <span dangerouslySetInnerHTML={{ __html: props.closingSvg }}></span>
    ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" aria-hidden>
            <path
                d={
                    "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z"
                }
            />
        </svg>
    );

    // Note, following code intentionally is lazy about "cleaning up" the timeouts etc.

    const onClickToggle = (e: MouseEvent) => {
        e.preventDefault();

        // Note, because (p)react has asynchronous state handling, the following
        // is a bit more complicated than in synchronous state handling
        if (!isOpen) {
            setIsOpenAnim(true);
            setTimeout(() => {
                setIsOpenAnim2(true);
            }, 70);
        } else {
            setIsOpenAnim2(false);
            setTimeout(() => {
                // Setting isOpenAnim = isOpen, requires to re-use the old value
                // of isOpen, which is only accessible during set timeout with a
                // setIsOpen.
                setIsOpen((isOpen) => {
                    setIsOpenAnim(isOpen);
                    return isOpen;
                });
            }, 250);
        }
        setIsOpen(!isOpen);
    };

    const onClickCopyToClipboard = (e: MouseEvent) => {
        e.preventDefault();

        copyToClipboard(props.shareUrl, e.currentTarget as HTMLElement);

        setShowCopyToClipboardTooltip(true);
        setTimeout(() => {
            setShowCopyToClipboardTooltip(false);
        }, 1500);
    };

    return (
        <div>
            <style>
                {style} {props.css}
            </style>
            <div class="sharer">
                {props.opener && (
                    <a
                        href="#share"
                        class="opener"
                        onClick={onClickToggle}
                        aria-role="button"
                        aria-expanded={isOpen}
                        aria-controls="share-content"
                    >
                        {!isOpen || !isOpenAnim ? openerSvg : closingSvg}

                        <span class="title">{textShare}</span>
                    </a>
                )}
                <span className="share-buttons" id="share-content">
                    {isOpenAnim && (
                        <ul class={`choices ${isOpenAnim2 ? "shown" : "hidden"}`}>
                            {props.useFacebook && (
                                <li>
                                    <a
                                        href={facebookSharingUrl}
                                        target="_blank"
                                        aria-label="Facebook"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 35 35"
                                            aria-hidden
                                        >
                                            <path
                                                d={
                                                    "M34.1,17.1C34.1,7.6,26.5,0,17.1,0S0,7.6,0,17.1c0,8.5,6.2,15.6,14.4,16.9V22h-4.3v-4.9h4.3v-3.8c0-4.3,2.5-6.6,6.4-6.6 c1.9,0,3.8,0.3,3.8,0.3v4.2h-2.2c-2.1,0-2.8,1.3-2.8,2.7v3.2h4.7L23.7,22h-4v11.9C27.9,32.6,34.1,25.6,34.1,17.1z"
                                                }
                                            />
                                        </svg>
                                    </a>
                                </li>
                            )}

                            {props.useTwitter && (
                                <li>
                                    <a
                                        href={twitterSharingUrl}
                                        target="_blank"
                                        aria-label="Twitter"
                                    >
                                        <svg
                                            viewBox="0 0 1250 1250"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden
                                        >
                                            <path d="M 739.163 531.099 L 1185.89 11.815 L 1080.03 11.815 L 692.137 462.702 L 382.328 11.815 L 25 11.815 L 493.492 693.636 L 25 1238.185 L 130.866 1238.185 L 540.491 762.033 L 867.672 1238.185 L 1225 1238.185 L 739.137 531.099 L 739.163 531.099 Z M 594.165 699.643 L 546.697 631.749 L 169.011 91.509 L 331.615 91.509 L 636.412 527.5 L 683.88 595.394 L 1080.08 1162.115 L 917.476 1162.115 L 594.165 699.669 L 594.165 699.643 Z"></path>
                                        </svg>
                                    </a>
                                </li>
                            )}

                            {props.useLinkedin && (
                                <li>
                                    <a
                                        href={linkedInSharingUrl}
                                        target="_blank"
                                        aria-label="LinkedIn"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            aria-hidden
                                        >
                                            <path
                                                d={
                                                    "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                                                }
                                            />
                                        </svg>
                                    </a>
                                </li>
                            )}

                            {props.useWhatsapp && (
                                <li>
                                    <a
                                        href={whatsAppSharingUrl}
                                        target="_blank"
                                        aria-label="WhatsApp"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            aria-hidden
                                        >
                                            <path
                                                d={
                                                    "M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
                                                }
                                            />
                                        </svg>
                                    </a>
                                </li>
                            )}

                            {props.useLink && (
                                <li>
                                    <a
                                        href="#copy-link-to-clipboard"
                                        onClick={onClickCopyToClipboard}
                                        target="_blank"
                                        aria-label={TRANSLATIONS.copyToClipboard[locale]}
                                        aria-role="button"
                                    >
                                        <div
                                            className="copy-announcer"
                                            aria-live="polite"
                                            aria-atomic="true"
                                        >
                                            {showCopyToClipboardTooltip && (
                                                <div class="copy-tip">{textCopy}</div>
                                            )}
                                        </div>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            aria-hidden
                                        >
                                            <path
                                                d={
                                                    "M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"
                                                }
                                            />
                                        </svg>
                                    </a>
                                </li>
                            )}

                            {props.useEmail && (
                                <li>
                                    <a
                                        href={mailSharingUrl}
                                        target="_blank"
                                        aria-label={TRANSLATIONS.shareToEmail[locale]}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            aria-hidden
                                        >
                                            <path
                                                d={
                                                    "M19 9.062s-5.188-.333-7 1.938c2-4.896 7-5.938 7-5.938v-2l5 4-5 4.019v-2.019zm-18.974 14.938h23.947l-11.973-11.607-11.974 11.607zm1.673-14l10.291-7.488 3.053 2.218c.712-.459 1.391-.805 1.953-1.054l-5.006-3.637-11.99 8.725v12.476l7.352-7.127-5.653-4.113zm15.753 4.892l6.548 6.348v-11.612l-6.548 5.264z"
                                                }
                                            />
                                        </svg>
                                    </a>
                                </li>
                            )}
                        </ul>
                    )}
                </span>
            </div>
        </div>
    );
};

customElements.define(
    "oksidi-sharer",
    class extends HTMLElement {
        private attachRoot: HTMLElement | ShadowRoot;
        constructor() {
            super();
            this.attachRoot = this.attachShadow({ mode: "open" });
        }

        connectedCallback() {
            // Converts web component share-url to shareUrl for preact.
            // It also does a simple value type conversion.
            const props: Partial<typeof DEFAULT_PROPS> = {};
            for (const propertyName of Object.keys(DEFAULT_PROPS)) {
                const defaultValue = (DEFAULT_PROPS as any)[propertyName];
                const kebabName = propertyName
                    .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2")
                    .toLowerCase();

                // User given attribute in the component
                const attr = this.attributes.getNamedItem(kebabName);
                if (attr) {
                    if (typeof defaultValue === "string") {
                        (props as any)[propertyName] = "" + attr.value;
                    } else if (typeof defaultValue === "boolean") {
                        let value = defaultValue;
                        if (attr.value === "false" || attr.value === "0") {
                            value = false;
                        } else if (attr.value === "true" || attr.value === "1") {
                            value = true;
                        }
                        (props as any)[propertyName] = value;
                    } /* else if (typeof defaultValue === "number") {
                        props[propertyName] = +attr.value;
                    }*/
                }
            }
            render(h(OksidiSharer, props, []), this.attachRoot);
        }

        detachedCallback() {
            render(null, this.attachRoot);
        }
    },
    {}
);

// This makes it recgonized by the JSX parts:
declare global {
    namespace preact.createElement.JSX {
        interface IntrinsicElements {
            "oksidi-sharer": { "share-url": string };
        }
    }
}
