(()=>{"use strict";var e={705:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(a[s]=!0)}for(var o=0;o<e.length;o++){var c=[].concat(e[o]);r&&a[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},28:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(705),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,".container {\n  max-width: 600px;\n}\n\n.app {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n}\n\n.my-preloader {\n  display: none;\n  z-index: 100;\n  margin: 40px;\n}\n\n.my-preloader.active {\n  display: inline-block;\n}\n\n.card-p {\n  overflow: hidden;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  display: -webkit-box;\n}\n\n.pagination {\n  padding: 0 0 64px;\n}\n",""]);const i=a},379:(e,t,n)=>{var r,a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function s(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function o(e,t){for(var n={},r=[],a=0;a<e.length;a++){var o=e[a],c=t.base?o[0]+t.base:o[0],d=n[c]||0,l="".concat(c," ").concat(d);n[c]=d+1;var u=s(l),p={css:o[1],media:o[2],sourceMap:o[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:l,updater:f(p,t),references:1}),r.push(l)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var s=a(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var d,l=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function u(e,t,n,r){var a=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(t,a);else{var i=document.createTextNode(a),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function p(e,t,n){var r=n.css,a=n.media,i=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,m=0;function f(e,t){var n,r,a;if(t.singleton){var i=m++;n=h||(h=c(t)),r=u.bind(null,n,i,!1),a=u.bind(null,n,i,!0)}else n=c(t),r=p.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=o(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var a=s(n[r]);i[a].references--}for(var c=o(e,t),d=0;d<n.length;d++){var l=s(n[d]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}n=c}}}}},t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),r=n(28);t()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;class a{constructor(e){this.message=e}showError(){const e=document.createElement("p");return e.classList.add("red-text"),e.innerText=`Ошибка: ${this.message}`,e}}class i{constructor(e,t,n,r=!1){this.title=e,this.body=t,this.id=n,this.isCard=r}_goBack(){return window.history.length<=2?"../":"javascript:history.back()"}createHTML(){const e=document.createElement("li");e.classList.add("card","horizontal");const t=document.createElement("div");t.classList.add("card-stacked");const n=document.createElement("div");let r;n.classList.add("card-content"),r=this.isCard?document.createElement("span"):document.createElement("h1"),r.classList.add("card-title"),r.innerText=this.title;const a=document.createElement("p");this.isCard&&a.classList.add("card-p"),a.innerText=this.body,n.append(r),n.append(a);const i=document.createElement("div");i.classList.add("card-action");const s=document.createElement("a");return s.classList.add("blue-text"),this.isCard?(s.href=`./post/?id=${this.id}`,s.innerText="Read"):(s.href=this._goBack(),s.innerText="Back"),i.append(s),t.append(n),t.append(i),e.append(t),e}}class s{constructor(e,t,n,r){this.author=e,this.body=t,this.createdAt=n,this.id=r}createHTML(){const e=document.createElement("li");e.classList.add("collection-item");const t=document.createElement("span");t.classList.add("title","grey-text"),t.innerText=this.author;const n=document.createElement("span");n.classList.add("title","grey-text"),n.innerText=` | ${this.createdAt}`;const r=document.createElement("p");return r.innerText=this.body,e.append(t),e.append(n),e.append(r),e}}const o=new class{constructor(){this.spinner=document.getElementById("spinner")}turnOn(){this.spinner.classList.add("active")}turnOff(){this.spinner.classList.remove("active")}},c=new URLSearchParams(window.location.search),d=class{static createHTML(){const e=document.createElement("ul");return e.classList.add("collection"),e}}.createHTML();class l{constructor(e){this.root=e,this.postId=c.get("id")}static formatDate(e){return new Date(e).toLocaleString()}async render(){try{o.turnOn();const{data:e}=await async function(e){const t=await fetch(`https://gorest.co.in/public-api/posts/${e}`);return await t.json()}(this.postId);this.root.append(new i(e.title,e.body,e.id).createHTML());const{commentsData:t}=await async function(e){const t=await fetch(`https://gorest.co.in/public-api/posts/${e}/comments`);return{commentsData:await t.json()}}(this.postId);if(e&&t&&o.turnOff(),t.data.length>0)this.root.append(d),t.data.map((e=>d.append(new s(e.name,e.body,l.formatDate(e.created_at),e.id).createHTML())));else{const e=document.createElement("span");e.classList.add("grey-text"),e.innerText="Комментариев пока нет...",this.root.append(e)}}catch(e){o.turnOff(),this.root.append(new a(String(e)).showError())}}}const u=document.getElementById("blog-post");new l(u).render().then()})()})();