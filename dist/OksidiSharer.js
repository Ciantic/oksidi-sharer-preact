!function(){"use strict";function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function t(e){return(t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function r(e,t,l){return(r=o()?Reflect.construct:function(e,t,o){var r=[null];r.push.apply(r,t);var l=new(Function.bind.apply(e,r));return o&&n(l,o.prototype),l}).apply(null,arguments)}function l(e){var o="function"==typeof Map?new Map:void 0;return(l=function(e){if(null===e||(l=e,-1===Function.toString.call(l).indexOf("[native code]")))return e;var l;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==o){if(o.has(e))return o.get(e);o.set(e,i)}function i(){return r(e,arguments,t(this).constructor)}return i.prototype=Object.create(e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),n(i,e)})(e)}function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?i(e):t}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],o=!0,r=!1,l=void 0;try{for(var i,c=e[Symbol.iterator]();!(o=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);o=!0);}catch(e){r=!0,l=e}finally{try{o||null==c.return||c.return()}finally{if(r)throw l}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var _,s,f,p,h,d,v={},m=[],y=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function g(e,t){for(var n in t)e[n]=t[n];return e}function b(e){var t=e.parentNode;t&&t.removeChild(e)}function w(e,t,n){var o,r=arguments,l={};for(o in t)"key"!==o&&"ref"!==o&&(l[o]=t[o]);if(arguments.length>3)for(n=[n],o=3;o<arguments.length;o++)n.push(r[o]);if(null!=n&&(l.children=n),"function"==typeof e&&null!=e.defaultProps)for(o in e.defaultProps)void 0===l[o]&&(l[o]=e.defaultProps[o]);return k(e,l,t&&t.key,t&&t.ref,null)}function k(e,t,n,o,r){var l={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:r};return null==r&&(l.__v=l),_.vnode&&_.vnode(l),l}function x(e){return e.children}function S(e,t){this.props=e,this.context=t}function L(e,t){if(null==t)return e.__?L(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?L(e):null}function C(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return C(e)}}function z(e){(!e.__d&&(e.__d=!0)&&s.push(e)&&!f++||h!==_.debounceRendering)&&((h=_.debounceRendering)||p)(E)}function E(){for(var e;f=s.length;)e=s.sort((function(e,t){return e.__v.__b-t.__v.__b})),s=[],e.some((function(e){var t,n,o,r,l,i,c;e.__d&&(i=(l=(t=e).__v).__e,(c=t.__P)&&(n=[],(o=g({},l)).__v=o,r=O(c,l,o,t.__n,void 0!==c.ownerSVGElement,null,n,null==i?L(l):i),H(n,l),r!=i&&C(l)))}))}function T(e,t,n,o,r,l,i,c,a,u){var _,s,f,p,h,d,y,g,w,S=o&&o.__k||m,C=S.length;for(a==v&&(a=null!=i?i[0]:C?L(o,0):null),n.__k=[],_=0;_<t.length;_++)if(null!=(p=n.__k[_]=null==(p=t[_])||"boolean"==typeof p?null:"string"==typeof p||"number"==typeof p?k(null,p,null,null,p):Array.isArray(p)?k(x,{children:p},null,null,null):null!=p.__e||null!=p.__c?k(p.type,p.props,p.key,null,p.__v):p)){if(p.__=n,p.__b=n.__b+1,null===(f=S[_])||f&&p.key==f.key&&p.type===f.type)S[_]=void 0;else for(s=0;s<C;s++){if((f=S[s])&&p.key==f.key&&p.type===f.type){S[s]=void 0;break}f=null}if(h=O(e,p,f=f||v,r,l,i,c,a,u),(s=p.ref)&&f.ref!=s&&(g||(g=[]),f.ref&&g.push(f.ref,null,p),g.push(s,p.__c||h,p)),null!=h){if(null==y&&(y=h),w=void 0,void 0!==p.__d)w=p.__d,p.__d=void 0;else if(i==f||h!=a||null==h.parentNode){e:if(null==a||a.parentNode!==e)e.appendChild(h),w=null;else{for(d=a,s=0;(d=d.nextSibling)&&s<C;s+=2)if(d==h)break e;e.insertBefore(h,a),w=a}"option"==n.type&&(e.value="")}a=void 0!==w?w:h.nextSibling,"function"==typeof n.type&&(n.__d=a)}else a&&f.__e==a&&a.parentNode!=e&&(a=L(f))}if(n.__e=y,null!=i&&"function"!=typeof n.type)for(_=i.length;_--;)null!=i[_]&&b(i[_]);for(_=C;_--;)null!=S[_]&&U(S[_],S[_]);if(g)for(_=0;_<g.length;_++)R(g[_],g[++_],g[++_])}function P(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]="number"==typeof n&&!1===y.test(t)?n+"px":null==n?"":n}function A(e,t,n,o,r){var l,i,c,a,u;if(r?"className"===t&&(t="class"):"class"===t&&(t="className"),"style"===t)if(l=e.style,"string"==typeof n)l.cssText=n;else{if("string"==typeof o&&(l.cssText="",o=null),o)for(a in o)n&&a in n||P(l,a,"");if(n)for(u in n)o&&n[u]===o[u]||P(l,u,n[u])}else"o"===t[0]&&"n"===t[1]?(i=t!==(t=t.replace(/Capture$/,"")),c=t.toLowerCase(),t=(c in e?c:t).slice(2),n?(o||e.addEventListener(t,M,i),(e.l||(e.l={}))[t]=n):e.removeEventListener(t,M,i)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&"size"!==t&&!r&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/^xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,n))}function M(e){this.l[e.type](_.event?_.event(e):e)}function O(e,t,n,o,r,l,i,c,a){var u,s,f,p,h,d,v,m,y,b,w,k=t.type;if(void 0!==t.constructor)return null;(u=_.__b)&&u(t);try{e:if("function"==typeof k){if(m=t.props,y=(u=k.contextType)&&o[u.__c],b=u?y?y.props.value:u.__:o,n.__c?v=(s=t.__c=n.__c).__=s.__E:("prototype"in k&&k.prototype.render?t.__c=s=new k(m,b):(t.__c=s=new S(m,b),s.constructor=k,s.render=D),y&&y.sub(s),s.props=m,s.state||(s.state={}),s.context=b,s.__n=o,f=s.__d=!0,s.__h=[]),null==s.__s&&(s.__s=s.state),null!=k.getDerivedStateFromProps&&(s.__s==s.state&&(s.__s=g({},s.__s)),g(s.__s,k.getDerivedStateFromProps(m,s.__s))),p=s.props,h=s.state,f)null==k.getDerivedStateFromProps&&null!=s.componentWillMount&&s.componentWillMount(),null!=s.componentDidMount&&s.__h.push(s.componentDidMount);else{if(null==k.getDerivedStateFromProps&&m!==p&&null!=s.componentWillReceiveProps&&s.componentWillReceiveProps(m,b),!s.__e&&null!=s.shouldComponentUpdate&&!1===s.shouldComponentUpdate(m,s.__s,b)||t.__v===n.__v){for(s.props=m,s.state=s.__s,t.__v!==n.__v&&(s.__d=!1),s.__v=t,t.__e=n.__e,t.__k=n.__k,s.__h.length&&i.push(s),u=0;u<t.__k.length;u++)t.__k[u]&&(t.__k[u].__=t);break e}null!=s.componentWillUpdate&&s.componentWillUpdate(m,s.__s,b),null!=s.componentDidUpdate&&s.__h.push((function(){s.componentDidUpdate(p,h,d)}))}s.context=b,s.props=m,s.state=s.__s,(u=_.__r)&&u(t),s.__d=!1,s.__v=t,s.__P=e,u=s.render(s.props,s.state,s.context),null!=s.getChildContext&&(o=g(g({},o),s.getChildContext())),f||null==s.getSnapshotBeforeUpdate||(d=s.getSnapshotBeforeUpdate(p,h)),w=null!=u&&u.type==x&&null==u.key?u.props.children:u,T(e,Array.isArray(w)?w:[w],t,n,o,r,l,i,c,a),s.base=t.__e,s.__h.length&&i.push(s),v&&(s.__E=s.__=null),s.__e=!1}else null==l&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=j(n.__e,t,n,o,r,l,i,a);(u=_.diffed)&&u(t)}catch(e){t.__v=null,_.__e(e,t,n)}return t.__e}function H(e,t){_.__c&&_.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){_.__e(e,t.__v)}}))}function j(e,t,n,o,r,l,i,c){var a,u,_,s,f,p=n.props,h=t.props;if(r="svg"===t.type||r,null!=l)for(a=0;a<l.length;a++)if(null!=(u=l[a])&&((null===t.type?3===u.nodeType:u.localName===t.type)||e==u)){e=u,l[a]=null;break}if(null==e){if(null===t.type)return document.createTextNode(h);e=r?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,h.is&&{is:h.is}),l=null,c=!1}if(null===t.type)p!==h&&e.data!=h&&(e.data=h);else{if(null!=l&&(l=m.slice.call(e.childNodes)),_=(p=n.props||v).dangerouslySetInnerHTML,s=h.dangerouslySetInnerHTML,!c){if(null!=l)for(p={},f=0;f<e.attributes.length;f++)p[e.attributes[f].name]=e.attributes[f].value;(s||_)&&(s&&_&&s.__html==_.__html||(e.innerHTML=s&&s.__html||""))}(function(e,t,n,o,r){var l;for(l in n)"children"===l||"key"===l||l in t||A(e,l,null,n[l],o);for(l in t)r&&"function"!=typeof t[l]||"children"===l||"key"===l||"value"===l||"checked"===l||n[l]===t[l]||A(e,l,t[l],n[l],o)})(e,h,p,r,c),s?t.__k=[]:(a=t.props.children,T(e,Array.isArray(a)?a:[a],t,n,o,"foreignObject"!==t.type&&r,l,i,v,c)),c||("value"in h&&void 0!==(a=h.value)&&a!==e.value&&A(e,"value",a,p.value,!1),"checked"in h&&void 0!==(a=h.checked)&&a!==e.checked&&A(e,"checked",a,p.checked,!1))}return e}function R(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){_.__e(e,n)}}function U(e,t,n){var o,r,l;if(_.unmount&&_.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||R(o,null,t)),n||"function"==typeof e.type||(n=null!=(r=e.__e)),e.__e=e.__d=void 0,null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){_.__e(e,t)}o.base=o.__P=null}if(o=e.__k)for(l=0;l<o.length;l++)o[l]&&U(o[l],t,n);null!=r&&b(r)}function D(e,t,n){return this.constructor(e,n)}function N(e,t,n){var o,r,l;_.__&&_.__(e,t),r=(o=n===d)?null:n&&n.__k||t.__k,e=w(x,null,[e]),l=[],O(t,(o?t:n||t).__k=e,r||v,v,void 0!==t.ownerSVGElement,n&&!o?[n]:r?null:t.childNodes.length?m.slice.call(t.childNodes):null,l,n||v,o),H(l,e)}_={__e:function(e,t){for(var n,o;t=t.__;)if((n=t.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(o=!0,n.setState(n.constructor.getDerivedStateFromError(e))),null!=n.componentDidCatch&&(o=!0,n.componentDidCatch(e)),o)return z(n.__E=n)}catch(t){e=t}throw e}},S.prototype.setState=function(e,t){var n;n=this.__s!==this.state?this.__s:this.__s=g({},this.state),"function"==typeof e&&(e=e(n,this.props)),e&&g(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),z(this))},S.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),z(this))},S.prototype.render=x,s=[],f=0,p="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,d=v;var F,X,I,B=0,W=[],$=_.__r,Z=_.diffed,q=_.__c,V=_.unmount;function G(e,t){_.__h&&_.__h(X,e,B||t),B=0;var n=X.__H||(X.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function J(e){return B=1,function(e,t,n){var o=G(F++,2);return o.t=e,o.__c||(o.__c=X,o.__=[n?n(t):ee(void 0,t),function(e){var t=o.t(o.__[0],e);o.__[0]!==t&&(o.__[0]=t,o.__c.setState({}))}]),o.__}(ee,e)}function K(){W.some((function(e){if(e.__P)try{e.__H.__h.forEach(Q),e.__H.__h.forEach(Y),e.__H.__h=[]}catch(t){return e.__H.__h=[],_.__e(t,e.__v),!0}})),W=[]}function Q(e){"function"==typeof e.u&&e.u()}function Y(e){e.u=e.__()}function ee(e,t){return"function"==typeof t?t(e):t}_.__r=function(e){$&&$(e),F=0;var t=(X=e.__c).__H;t&&(t.__h.forEach(Q),t.__h.forEach(Y),t.__h=[])},_.diffed=function(e){Z&&Z(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(1!==W.push(t)&&I===_.requestAnimationFrame||((I=_.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(o),cancelAnimationFrame(t),setTimeout(e)},o=setTimeout(n,100);"undefined"!=typeof window&&(t=requestAnimationFrame(n))})(K))},_.__c=function(e,t){t.some((function(e){try{e.__h.forEach(Q),e.__h=e.__h.filter((function(e){return!e.__||Y(e)}))}catch(n){t.some((function(e){e.__h&&(e.__h=[])})),t=[],_.__e(n,e.__v)}})),q&&q(e,t)},_.unmount=function(e){V&&V(e);var t=e.__c;if(t&&t.__H)try{t.__H.__.forEach(Q)}catch(e){_.__e(e,t.__v)}};var te={textShare:{fi:"Jaa",en:"Share"},textCopy:{fi:"Kopiotu leikepöydälle",en:"Copied to clipboard"}},ne={locale:"",shareUrl:window.location.href,shareTitle:document.title,useFacebook:!0,useTwitter:!0,useWhatsapp:!0,useLink:!0,useEmail:!0,useLinkedin:!1,opener:!0,openerSvg:"",closingSvg:"",textShare:"",textCopy:"",css:""},oe=function(e){var t=Object.assign({},ne,e),n=function(e){return"fi"===e?"fi":"en"}(t.locale||document.documentElement.lang),o=t.textShare||te.textShare[n],r=t.textCopy||te.textCopy[n],l=a(J(!t.opener),2),i=l[0],c=l[1],u=a(J(!t.opener),2),_=u[0],s=u[1],f=a(J(!t.opener),2),p=f[0],h=f[1],d=a(J(!1),2),v=d[0],m=d[1],y=encodeURIComponent(t.shareUrl),g=encodeURIComponent(t.shareTitle),b="https://www.facebook.com/sharer.php?u=".concat(y),k="https://twitter.com/intent/tweet?text=".concat(g,"&url=").concat(y),x="https://www.linkedin.com/shareArticle?mini=true&url=".concat(y,"&title=").concat(g,"&summary=&source=LinkedIn"),S="whatsapp://send?text=".concat(y),L="mailto:?subject=".concat(g,"&body=").concat(y),C=t.openerSvg?w("span",{dangerouslySetInnerHTML:{__html:t.openerSvg}}):w("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 25"},w("path",{d:"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-6 17c1.513-6.587 7-7.778 7-7.78v-2.222l5 4.425-5 4.464v-2.223c0 .001-3.78-.114-7 3.334z"})),z=t.closingSvg?w("span",{dangerouslySetInnerHTML:{__html:t.closingSvg}}):w("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 25"},w("path",{d:"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z"}));return w("div",null,w("style",null,'.sharer{color:var(--color,#000);line-height:var(--opener-icon-size,1.5em);position:relative}.title{margin:0 .2em 0 .33em}.opener{text-decoration:none;color:var(--color,#000);transition:color .25s;padding-right:.8em}.opener,.opener svg{display:inline-block}.opener svg{transition:fill .25s;width:var(--opener-icon-size,1.5em);height:var(--opener-icon-size,1.5em);fill:var(--color,#000);vertical-align:middle;position:relative;top:-.08em}@media (hover:hover){.opener:hover{color:var(--hover-color,grey)}.opener:hover svg{fill:var(--hover-color,grey)}}.choices{list-style:none;padding:0;margin:0;display:inline-block;position:relative;top:-.1em}.choices>li{display:inline-block;transition:transform .2s,opacity .2s;opacity:0}.choices>li:first-child{transform:translateX(-1em)}.choices>li:nth-child(2){transform:translateX(-2em)}.choices>li:nth-child(3){transform:translateX(-3em)}.choices>li:nth-child(4){transform:translateX(-4em)}.choices>li:nth-child(5){transform:translateX(-5em)}.choices>li:nth-child(6){transform:translateX(-6em)}.choices>li:nth-child(7){transform:translateX(-7em)}.choices>li:nth-child(8){transform:translateX(-8em)}.choices>li:nth-child(9){transform:translateX(-9em)}.choices>li:nth-child(10){transform:translateX(-10em)}.choices>li:nth-child(11){transform:translateX(-11em)}.choices a{display:block;padding:0 .35em}@media (hover:hover){.choices a:hover svg{fill:var(--hover-color,grey)}}.choices li:first-child a{padding-left:0}.choices li:last-child a{padding-right:0}.choices svg{width:var(--icon-size,1.2em);height:var(--icon-size,1.2em);display:inline-block;vertical-align:middle;transition:fill .25s;fill:var(--color,#000)}.choices.shown>li{transform:translateX(0);opacity:1}.copy-tip{line-height:1.2;padding:.4em;font:var(--tooltip-font,80% sans-serif);text-transform:var(--tooltip-text-transform,uppercase);background:var(--tooltip-background-color,var(--color,#000));color:var(--tooltip-color,#fff);text-align:center;left:-3.5em;right:-3.5em;bottom:100%}.copy-tip,.copy-tip:before{position:absolute;display:block}.copy-tip:before{content:"";left:50%;width:0;height:0;top:100%;transform:translateX(-50%);border:.5em solid transparent;border-top:.5em solid var(--tooltip-background-color,var(--color,#000))}'," ",t.css),w("div",{class:"sharer"},t.opener&&w("a",{href:"#share",class:"opener",onClick:function(e){e.preventDefault(),i?(h(!1),setTimeout((function(){c((function(e){return s(e),e}))}),250)):(s(!0),setTimeout((function(){h(!0)}),70)),c(!i)}},i&&_?z:C,w("span",{class:"title"},o)),_&&w("ul",{class:"choices ".concat(p?"shown":"hidden")},t.useFacebook&&w("li",null,w("a",{href:b,target:"_blank"},w("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 35 35"},w("path",{d:"M34.1,17.1C34.1,7.6,26.5,0,17.1,0S0,7.6,0,17.1c0,8.5,6.2,15.6,14.4,16.9V22h-4.3v-4.9h4.3v-3.8c0-4.3,2.5-6.6,6.4-6.6 c1.9,0,3.8,0.3,3.8,0.3v4.2h-2.2c-2.1,0-2.8,1.3-2.8,2.7v3.2h4.7L23.7,22h-4v11.9C27.9,32.6,34.1,25.6,34.1,17.1z"})))),t.useTwitter&&w("li",null,w("a",{href:k,target:"_blank"},w("svg",{viewBox:"0 0 1250 1250",xmlns:"http://www.w3.org/2000/svg"},w("path",{d:"M 739.163 531.099 L 1185.89 11.815 L 1080.03 11.815 L 692.137 462.702 L 382.328 11.815 L 25 11.815 L 493.492 693.636 L 25 1238.185 L 130.866 1238.185 L 540.491 762.033 L 867.672 1238.185 L 1225 1238.185 L 739.137 531.099 L 739.163 531.099 Z M 594.165 699.643 L 546.697 631.749 L 169.011 91.509 L 331.615 91.509 L 636.412 527.5 L 683.88 595.394 L 1080.08 1162.115 L 917.476 1162.115 L 594.165 699.669 L 594.165 699.643 Z"})))),t.useLinkedin&&w("li",null,w("a",{href:x,target:"_blank"},w("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},w("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})))),t.useWhatsapp&&w("li",null,w("a",{href:S,target:"_blank"},w("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},w("path",{d:"M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"})))),t.useLink&&w("li",null,w("a",{href:"#copy-link-to-clipboard",onClick:function(e){var n,o,r;e.preventDefault(),n=t.shareUrl,o=e.currentTarget,(r=document.createElement("textarea")).value=n,o.appendChild(r),r.select(),document.execCommand("copy"),o.removeChild(r),m(!0),setTimeout((function(){m(!1)}),1500)},target:"_blank"},v&&w("div",{class:"copy-tip"},r),w("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},w("path",{d:"M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"})))),t.useEmail&&w("li",null,w("a",{href:L,target:"_blank"},w("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},w("path",{d:"M19 9.062s-5.188-.333-7 1.938c2-4.896 7-5.938 7-5.938v-2l5 4-5 4.019v-2.019zm-18.974 14.938h23.947l-11.973-11.607-11.974 11.607zm1.673-14l10.291-7.488 3.053 2.218c.712-.459 1.391-.805 1.953-1.054l-5.006-3.637-11.99 8.725v12.476l7.352-7.127-5.653-4.113zm15.753 4.892l6.548 6.348v-11.612l-6.548 5.264z"})))))))};customElements.define("oksidi-sharer",function(r){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}(p,r);var l,a,u,_,s,f=(l=p,a=o(),function(){var e,n=t(l);if(a){var o=t(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return c(this,e)});function p(){var e,t,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),e=f.call(this),t=i(e),o=void 0,(n="attachRoot")in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o,e.attachRoot=e.attachShadow({mode:"open"}),e}return u=p,(_=[{key:"connectedCallback",value:function(){for(var e={},t=0,n=Object.keys(ne);t<n.length;t++){var o=n[t],r=ne[o],l=o.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase(),i=this.attributes.getNamedItem(l);if(i)if("string"==typeof r)e[o]=""+i.value;else if("boolean"==typeof r){var c=r;"false"===i.value||"0"===i.value?c=!1:"true"!==i.value&&"1"!==i.value||(c=!0),e[o]=c}}N(w(oe,e,[]),this.attachRoot)}},{key:"detachedCallback",value:function(){N(null,this.attachRoot)}}])&&e(u.prototype,_),s&&e(u,s),p}(l(HTMLElement)),{})}();
