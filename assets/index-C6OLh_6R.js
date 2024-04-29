var Ue=Object.defineProperty;var We=(b,t,e)=>t in b?Ue(b,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):b[t]=e;var te=(b,t,e)=>(We(b,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const u of r)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function e(r){const u={};return r.integrity&&(u.integrity=r.integrity),r.referrerPolicy&&(u.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?u.credentials="include":r.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function n(r){if(r.ep)return;r.ep=!0;const u=e(r);fetch(r.href,u)}})();/*!
* reveal.js 5.0.4
* https://revealjs.com
* MIT licensed
*
* Copyright (C) 2011-2024 Hakim El Hattab, https://hakim.se
*/const Mt=(b,t)=>{for(let e in t)b[e]=t[e];return b},q=(b,t)=>Array.from(b.querySelectorAll(t)),ee=(b,t,e)=>{e?b.classList.add(t):b.classList.remove(t)},It=b=>{if(typeof b=="string"){if(b==="null")return null;if(b==="true")return!0;if(b==="false")return!1;if(b.match(/^-?[\d\.]+$/))return parseFloat(b)}return b},Lt=(b,t)=>{b.style.transform=t},jt=(b,t)=>{let e=b.matches||b.matchesSelector||b.msMatchesSelector;return!(!e||!e.call(b,t))},lt=(b,t)=>{if(typeof b.closest=="function")return b.closest(t);for(;b;){if(jt(b,t))return b;b=b.parentNode}return null},se=b=>{let t=document.createElement("style");return t.type="text/css",b&&b.length>0&&(t.styleSheet?t.styleSheet.cssText=b:t.appendChild(document.createTextNode(b))),document.head.appendChild(t),t},Re=()=>{let b={};location.search.replace(/[A-Z0-9]+?=([\w\.%-]*)/gi,t=>{b[t.split("=").shift()]=t.split("=").pop()});for(let t in b){let e=b[t];b[t]=It(unescape(e))}return b.dependencies!==void 0&&delete b.dependencies,b},je={mp4:"video/mp4",m4a:"video/mp4",ogv:"video/ogg",mpeg:"video/mpeg",webm:"video/webm"},Me=navigator.userAgent,zt=/(iphone|ipod|ipad|android)/gi.test(Me)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,ze=/android/gi.test(Me);var Ve=function(b){if(b){var t=function(w){return[].slice.call(w)},e=3,n=[],r=null,u="requestAnimationFrame"in b?function(){b.cancelAnimationFrame(r),r=b.requestAnimationFrame(function(){return p(n.filter(function(w){return w.dirty&&w.active}))})}:function(){},d=function(w){return function(){n.forEach(function(_){return _.dirty=w}),u()}},p=function(w){w.filter(function(R){return!R.styleComputed}).forEach(function(R){R.styleComputed=E(R)}),w.filter(L).forEach(f);var _=w.filter(v);_.forEach(I),_.forEach(function(R){f(R),h(R)}),_.forEach(c)},h=function(w){return w.dirty=0},I=function(w){w.availableWidth=w.element.parentNode.clientWidth,w.currentWidth=w.element.scrollWidth,w.previousFontSize=w.currentFontSize,w.currentFontSize=Math.min(Math.max(w.minSize,w.availableWidth/w.currentWidth*w.previousFontSize),w.maxSize),w.whiteSpace=w.multiLine&&w.currentFontSize===w.minSize?"normal":"nowrap"},v=function(w){return w.dirty!==2||w.dirty===2&&w.element.parentNode.clientWidth!==w.availableWidth},E=function(w){var _=b.getComputedStyle(w.element,null);return w.currentFontSize=parseFloat(_.getPropertyValue("font-size")),w.display=_.getPropertyValue("display"),w.whiteSpace=_.getPropertyValue("white-space"),!0},L=function(w){var _=!1;return!w.preStyleTestCompleted&&(/inline-/.test(w.display)||(_=!0,w.display="inline-block"),w.whiteSpace!=="nowrap"&&(_=!0,w.whiteSpace="nowrap"),w.preStyleTestCompleted=!0,_)},f=function(w){w.element.style.whiteSpace=w.whiteSpace,w.element.style.display=w.display,w.element.style.fontSize=w.currentFontSize+"px"},c=function(w){w.element.dispatchEvent(new CustomEvent("fit",{detail:{oldValue:w.previousFontSize,newValue:w.currentFontSize,scaleFactor:w.currentFontSize/w.previousFontSize}}))},$=function(w,_){return function(){w.dirty=_,w.active&&u()}},X=function(w){return function(){n=n.filter(function(_){return _.element!==w.element}),w.observeMutations&&w.observer.disconnect(),w.element.style.whiteSpace=w.originalStyle.whiteSpace,w.element.style.display=w.originalStyle.display,w.element.style.fontSize=w.originalStyle.fontSize}},st=function(w){return function(){w.active||(w.active=!0,u())}},at=function(w){return function(){return w.active=!1}},rt=function(w){w.observeMutations&&(w.observer=new MutationObserver($(w,1)),w.observer.observe(w.element,w.observeMutations))},U={minSize:16,maxSize:512,multiLine:!0,observeMutations:"MutationObserver"in b&&{subtree:!0,childList:!0,characterData:!0}},J=null,V=function(){b.clearTimeout(J),J=b.setTimeout(d(2),H.observeWindowDelay)},dt=["resize","orientationchange"];return Object.defineProperty(H,"observeWindow",{set:function(w){var _="".concat(w?"add":"remove","EventListener");dt.forEach(function(R){b[_](R,V)})}}),H.observeWindow=!0,H.observeWindowDelay=100,H.fitAll=d(e),H}function W(w,_){var R=Object.assign({},U,_),T=w.map(function(ct){var it=Object.assign({},R,{element:ct,active:!0});return function(K){K.originalStyle={whiteSpace:K.element.style.whiteSpace,display:K.element.style.display,fontSize:K.element.style.fontSize},rt(K),K.newbie=!0,K.dirty=!0,n.push(K)}(it),{element:ct,fit:$(it,e),unfreeze:st(it),freeze:at(it),unsubscribe:X(it)}});return u(),T}function H(w){var _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return typeof w=="string"?W(t(document.querySelectorAll(w)),_):W([w],_)[0]}}(typeof window>"u"?null:window);class Ke{constructor(t){this.Reveal=t,this.startEmbeddedIframe=this.startEmbeddedIframe.bind(this)}shouldPreload(t){if(this.Reveal.isScrollView())return!0;let e=this.Reveal.getConfig().preloadIframes;return typeof e!="boolean"&&(e=t.hasAttribute("data-preload")),e}load(t,e={}){t.style.display=this.Reveal.getConfig().display,q(t,"img[data-src], video[data-src], audio[data-src], iframe[data-src]").forEach(r=>{(r.tagName!=="IFRAME"||this.shouldPreload(r))&&(r.setAttribute("src",r.getAttribute("data-src")),r.setAttribute("data-lazy-loaded",""),r.removeAttribute("data-src"))}),q(t,"video, audio").forEach(r=>{let u=0;q(r,"source[data-src]").forEach(d=>{d.setAttribute("src",d.getAttribute("data-src")),d.removeAttribute("data-src"),d.setAttribute("data-lazy-loaded",""),u+=1}),zt&&r.tagName==="VIDEO"&&r.setAttribute("playsinline",""),u>0&&r.load()});let n=t.slideBackgroundElement;if(n){n.style.display="block";let r=t.slideBackgroundContentElement,u=t.getAttribute("data-background-iframe");if(n.hasAttribute("data-loaded")===!1){n.setAttribute("data-loaded","true");let p=t.getAttribute("data-background-image"),h=t.getAttribute("data-background-video"),I=t.hasAttribute("data-background-video-loop"),v=t.hasAttribute("data-background-video-muted");if(p)/^data:/.test(p.trim())?r.style.backgroundImage=`url(${p.trim()})`:r.style.backgroundImage=p.split(",").map(E=>`url(${((L="")=>encodeURI(L).replace(/%5B/g,"[").replace(/%5D/g,"]").replace(/[!'()*]/g,f=>`%${f.charCodeAt(0).toString(16).toUpperCase()}`))(decodeURI(E.trim()))})`).join(",");else if(h&&!this.Reveal.isSpeakerNotes()){let E=document.createElement("video");I&&E.setAttribute("loop",""),v&&(E.muted=!0),zt&&(E.muted=!0,E.setAttribute("playsinline","")),h.split(",").forEach(L=>{const f=document.createElement("source");f.setAttribute("src",L);let c=(($="")=>je[$.split(".").pop()])(L);c&&f.setAttribute("type",c),E.appendChild(f)}),r.appendChild(E)}else if(u&&e.excludeIframes!==!0){let E=document.createElement("iframe");E.setAttribute("allowfullscreen",""),E.setAttribute("mozallowfullscreen",""),E.setAttribute("webkitallowfullscreen",""),E.setAttribute("allow","autoplay"),E.setAttribute("data-src",u),E.style.width="100%",E.style.height="100%",E.style.maxHeight="100%",E.style.maxWidth="100%",r.appendChild(E)}}let d=r.querySelector("iframe[data-src]");d&&this.shouldPreload(n)&&!/autoplay=(1|true|yes)/gi.test(u)&&d.getAttribute("src")!==u&&d.setAttribute("src",u)}this.layout(t)}layout(t){Array.from(t.querySelectorAll(".r-fit-text")).forEach(e=>{Ve(e,{minSize:24,maxSize:.8*this.Reveal.getConfig().height,observeMutations:!1,observeWindow:!1})})}unload(t){t.style.display="none";let e=this.Reveal.getSlideBackground(t);e&&(e.style.display="none",q(e,"iframe[src]").forEach(n=>{n.removeAttribute("src")})),q(t,"video[data-lazy-loaded][src], audio[data-lazy-loaded][src], iframe[data-lazy-loaded][src]").forEach(n=>{n.setAttribute("data-src",n.getAttribute("src")),n.removeAttribute("src")}),q(t,"video[data-lazy-loaded] source[src], audio source[src]").forEach(n=>{n.setAttribute("data-src",n.getAttribute("src")),n.removeAttribute("src")})}formatEmbeddedContent(){let t=(e,n,r)=>{q(this.Reveal.getSlidesElement(),"iframe["+e+'*="'+n+'"]').forEach(u=>{let d=u.getAttribute(e);d&&d.indexOf(r)===-1&&u.setAttribute(e,d+(/\?/.test(d)?"&":"?")+r)})};t("src","youtube.com/embed/","enablejsapi=1"),t("data-src","youtube.com/embed/","enablejsapi=1"),t("src","player.vimeo.com/","api=1"),t("data-src","player.vimeo.com/","api=1")}startEmbeddedContent(t){t&&!this.Reveal.isSpeakerNotes()&&(q(t,'img[src$=".gif"]').forEach(e=>{e.setAttribute("src",e.getAttribute("src"))}),q(t,"video, audio").forEach(e=>{if(lt(e,".fragment")&&!lt(e,".fragment.visible"))return;let n=this.Reveal.getConfig().autoPlayMedia;if(typeof n!="boolean"&&(n=e.hasAttribute("data-autoplay")||!!lt(e,".slide-background")),n&&typeof e.play=="function")if(e.readyState>1)this.startEmbeddedMedia({target:e});else if(zt){let r=e.play();r&&typeof r.catch=="function"&&e.controls===!1&&r.catch(()=>{e.controls=!0,e.addEventListener("play",()=>{e.controls=!1})})}else e.removeEventListener("loadeddata",this.startEmbeddedMedia),e.addEventListener("loadeddata",this.startEmbeddedMedia)}),q(t,"iframe[src]").forEach(e=>{lt(e,".fragment")&&!lt(e,".fragment.visible")||this.startEmbeddedIframe({target:e})}),q(t,"iframe[data-src]").forEach(e=>{lt(e,".fragment")&&!lt(e,".fragment.visible")||e.getAttribute("src")!==e.getAttribute("data-src")&&(e.removeEventListener("load",this.startEmbeddedIframe),e.addEventListener("load",this.startEmbeddedIframe),e.setAttribute("src",e.getAttribute("data-src")))}))}startEmbeddedMedia(t){let e=!!lt(t.target,"html"),n=!!lt(t.target,".present");e&&n&&(t.target.currentTime=0,t.target.play()),t.target.removeEventListener("loadeddata",this.startEmbeddedMedia)}startEmbeddedIframe(t){let e=t.target;if(e&&e.contentWindow){let n=!!lt(t.target,"html"),r=!!lt(t.target,".present");if(n&&r){let u=this.Reveal.getConfig().autoPlayMedia;typeof u!="boolean"&&(u=e.hasAttribute("data-autoplay")||!!lt(e,".slide-background")),/youtube\.com\/embed\//.test(e.getAttribute("src"))&&u?e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*"):/player\.vimeo\.com\//.test(e.getAttribute("src"))&&u?e.contentWindow.postMessage('{"method":"play"}',"*"):e.contentWindow.postMessage("slide:start","*")}}}stopEmbeddedContent(t,e={}){e=Mt({unloadIframes:!0},e),t&&t.parentNode&&(q(t,"video, audio").forEach(n=>{n.hasAttribute("data-ignore")||typeof n.pause!="function"||(n.setAttribute("data-paused-by-reveal",""),n.pause())}),q(t,"iframe").forEach(n=>{n.contentWindow&&n.contentWindow.postMessage("slide:stop","*"),n.removeEventListener("load",this.startEmbeddedIframe)}),q(t,'iframe[src*="youtube.com/embed/"]').forEach(n=>{!n.hasAttribute("data-ignore")&&n.contentWindow&&typeof n.contentWindow.postMessage=="function"&&n.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")}),q(t,'iframe[src*="player.vimeo.com/"]').forEach(n=>{!n.hasAttribute("data-ignore")&&n.contentWindow&&typeof n.contentWindow.postMessage=="function"&&n.contentWindow.postMessage('{"method":"pause"}',"*")}),e.unloadIframes===!0&&q(t,"iframe[data-src]").forEach(n=>{n.setAttribute("src","about:blank"),n.removeAttribute("src")}))}}const Ct=".slides section",At=".slides>section",Le=".slides>section.present>section",Xe=/registerPlugin|registerKeyboardShortcut|addKeyBinding|addEventListener|showPreview/,Te=/fade-(down|up|right|left|out|in-then-out|in-then-semi-out)|semi-fade-out|current-visible|shrink|grow/;class Ye{constructor(t){this.Reveal=t}render(){this.element=document.createElement("div"),this.element.className="slide-number",this.Reveal.getRevealElement().appendChild(this.element)}configure(t,e){let n="none";t.slideNumber&&!this.Reveal.isPrintView()&&(t.showSlideNumber==="all"||t.showSlideNumber==="speaker"&&this.Reveal.isSpeakerNotes())&&(n="block"),this.element.style.display=n}update(){this.Reveal.getConfig().slideNumber&&this.element&&(this.element.innerHTML=this.getSlideNumber())}getSlideNumber(t=this.Reveal.getCurrentSlide()){let e,n=this.Reveal.getConfig(),r="h.v";if(typeof n.slideNumber=="function")e=n.slideNumber(t);else{typeof n.slideNumber=="string"&&(r=n.slideNumber),/c/.test(r)||this.Reveal.getHorizontalSlides().length!==1||(r="c");let d=t&&t.dataset.visibility==="uncounted"?0:1;switch(e=[],r){case"c":e.push(this.Reveal.getSlidePastCount(t)+d);break;case"c/t":e.push(this.Reveal.getSlidePastCount(t)+d,"/",this.Reveal.getTotalSlides());break;default:let p=this.Reveal.getIndices(t);e.push(p.h+d);let h=r==="h/v"?"/":".";this.Reveal.isVerticalSlide(t)&&e.push(h,p.v+1)}}let u="#"+this.Reveal.location.getHash(t);return this.formatNumber(e[0],e[1],e[2],u)}formatNumber(t,e,n,r="#"+this.Reveal.location.getHash()){return typeof n!="number"||isNaN(n)?`<a href="${r}">
					<span class="slide-number-a">${t}</span>
					</a>`:`<a href="${r}">
					<span class="slide-number-a">${t}</span>
					<span class="slide-number-delimiter">${e}</span>
					<span class="slide-number-b">${n}</span>
					</a>`}destroy(){this.element.remove()}}class Ze{constructor(t){this.Reveal=t,this.onInput=this.onInput.bind(this),this.onBlur=this.onBlur.bind(this),this.onKeyDown=this.onKeyDown.bind(this)}render(){this.element=document.createElement("div"),this.element.className="jump-to-slide",this.jumpInput=document.createElement("input"),this.jumpInput.type="text",this.jumpInput.className="jump-to-slide-input",this.jumpInput.placeholder="Jump to slide",this.jumpInput.addEventListener("input",this.onInput),this.jumpInput.addEventListener("keydown",this.onKeyDown),this.jumpInput.addEventListener("blur",this.onBlur),this.element.appendChild(this.jumpInput)}show(){this.indicesOnShow=this.Reveal.getIndices(),this.Reveal.getRevealElement().appendChild(this.element),this.jumpInput.focus()}hide(){this.isVisible()&&(this.element.remove(),this.jumpInput.value="",clearTimeout(this.jumpTimeout),delete this.jumpTimeout)}isVisible(){return!!this.element.parentNode}jump(){clearTimeout(this.jumpTimeout),delete this.jumpTimeout;let t,e=this.jumpInput.value.trim("");if(/^\d+$/.test(e)){const n=this.Reveal.getConfig().slideNumber;if(n==="c"||n==="c/t"){const r=this.Reveal.getSlides()[parseInt(e,10)-1];r&&(t=this.Reveal.getIndices(r))}}return t||(/^\d+\.\d+$/.test(e)&&(e=e.replace(".","/")),t=this.Reveal.location.getIndicesFromHash(e,{oneBasedIndex:!0})),!t&&/\S+/i.test(e)&&e.length>1&&(t=this.search(e)),t&&e!==""?(this.Reveal.slide(t.h,t.v,t.f),!0):(this.Reveal.slide(this.indicesOnShow.h,this.indicesOnShow.v,this.indicesOnShow.f),!1)}jumpAfter(t){clearTimeout(this.jumpTimeout),this.jumpTimeout=setTimeout(()=>this.jump(),t)}search(t){const e=new RegExp("\\b"+t.trim()+"\\b","i"),n=this.Reveal.getSlides().find(r=>e.test(r.innerText));return n?this.Reveal.getIndices(n):null}cancel(){this.Reveal.slide(this.indicesOnShow.h,this.indicesOnShow.v,this.indicesOnShow.f),this.hide()}confirm(){this.jump(),this.hide()}destroy(){this.jumpInput.removeEventListener("input",this.onInput),this.jumpInput.removeEventListener("keydown",this.onKeyDown),this.jumpInput.removeEventListener("blur",this.onBlur),this.element.remove()}onKeyDown(t){t.keyCode===13?this.confirm():t.keyCode===27&&(this.cancel(),t.stopImmediatePropagation())}onInput(t){this.jumpAfter(200)}onBlur(){setTimeout(()=>this.hide(),1)}}const ne=b=>{let t=b.match(/^#([0-9a-f]{3})$/i);if(t&&t[1])return t=t[1],{r:17*parseInt(t.charAt(0),16),g:17*parseInt(t.charAt(1),16),b:17*parseInt(t.charAt(2),16)};let e=b.match(/^#([0-9a-f]{6})$/i);if(e&&e[1])return e=e[1],{r:parseInt(e.slice(0,2),16),g:parseInt(e.slice(2,4),16),b:parseInt(e.slice(4,6),16)};let n=b.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);if(n)return{r:parseInt(n[1],10),g:parseInt(n[2],10),b:parseInt(n[3],10)};let r=b.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\,\s*([\d]+|[\d]*.[\d]+)\s*\)$/i);return r?{r:parseInt(r[1],10),g:parseInt(r[2],10),b:parseInt(r[3],10),a:parseFloat(r[4])}:null};class Je{constructor(t){this.Reveal=t}render(){this.element=document.createElement("div"),this.element.className="backgrounds",this.Reveal.getRevealElement().appendChild(this.element)}create(){this.element.innerHTML="",this.element.classList.add("no-transition"),this.Reveal.getHorizontalSlides().forEach(t=>{let e=this.createBackground(t,this.element);q(t,"section").forEach(n=>{this.createBackground(n,e),e.classList.add("stack")})}),this.Reveal.getConfig().parallaxBackgroundImage?(this.element.style.backgroundImage='url("'+this.Reveal.getConfig().parallaxBackgroundImage+'")',this.element.style.backgroundSize=this.Reveal.getConfig().parallaxBackgroundSize,this.element.style.backgroundRepeat=this.Reveal.getConfig().parallaxBackgroundRepeat,this.element.style.backgroundPosition=this.Reveal.getConfig().parallaxBackgroundPosition,setTimeout(()=>{this.Reveal.getRevealElement().classList.add("has-parallax-background")},1)):(this.element.style.backgroundImage="",this.Reveal.getRevealElement().classList.remove("has-parallax-background"))}createBackground(t,e){let n=document.createElement("div");n.className="slide-background "+t.className.replace(/present|past|future/,"");let r=document.createElement("div");return r.className="slide-background-content",n.appendChild(r),e.appendChild(n),t.slideBackgroundElement=n,t.slideBackgroundContentElement=r,this.sync(t),n}sync(t){const e=t.slideBackgroundElement,n=t.slideBackgroundContentElement,r={background:t.getAttribute("data-background"),backgroundSize:t.getAttribute("data-background-size"),backgroundImage:t.getAttribute("data-background-image"),backgroundVideo:t.getAttribute("data-background-video"),backgroundIframe:t.getAttribute("data-background-iframe"),backgroundColor:t.getAttribute("data-background-color"),backgroundGradient:t.getAttribute("data-background-gradient"),backgroundRepeat:t.getAttribute("data-background-repeat"),backgroundPosition:t.getAttribute("data-background-position"),backgroundTransition:t.getAttribute("data-background-transition"),backgroundOpacity:t.getAttribute("data-background-opacity")},u=t.hasAttribute("data-preload");t.classList.remove("has-dark-background"),t.classList.remove("has-light-background"),e.removeAttribute("data-loaded"),e.removeAttribute("data-background-hash"),e.removeAttribute("data-background-size"),e.removeAttribute("data-background-transition"),e.style.backgroundColor="",n.style.backgroundSize="",n.style.backgroundRepeat="",n.style.backgroundPosition="",n.style.backgroundImage="",n.style.opacity="",n.innerHTML="",r.background&&(/^(http|file|\/\/)/gi.test(r.background)||/\.(svg|png|jpg|jpeg|gif|bmp|webp)([?#\s]|$)/gi.test(r.background)?t.setAttribute("data-background-image",r.background):e.style.background=r.background),(r.background||r.backgroundColor||r.backgroundGradient||r.backgroundImage||r.backgroundVideo||r.backgroundIframe)&&e.setAttribute("data-background-hash",r.background+r.backgroundSize+r.backgroundImage+r.backgroundVideo+r.backgroundIframe+r.backgroundColor+r.backgroundGradient+r.backgroundRepeat+r.backgroundPosition+r.backgroundTransition+r.backgroundOpacity),r.backgroundSize&&e.setAttribute("data-background-size",r.backgroundSize),r.backgroundColor&&(e.style.backgroundColor=r.backgroundColor),r.backgroundGradient&&(e.style.backgroundImage=r.backgroundGradient),r.backgroundTransition&&e.setAttribute("data-background-transition",r.backgroundTransition),u&&e.setAttribute("data-preload",""),r.backgroundSize&&(n.style.backgroundSize=r.backgroundSize),r.backgroundRepeat&&(n.style.backgroundRepeat=r.backgroundRepeat),r.backgroundPosition&&(n.style.backgroundPosition=r.backgroundPosition),r.backgroundOpacity&&(n.style.opacity=r.backgroundOpacity);const d=this.getContrastClass(t);typeof d=="string"&&t.classList.add(d)}getContrastClass(t){const e=t.slideBackgroundElement;let n=t.getAttribute("data-background-color");if(!n||!ne(n)){let u=window.getComputedStyle(e);u&&u.backgroundColor&&(n=u.backgroundColor)}if(n){const u=ne(n);if(u&&u.a!==0)return typeof(r=n)=="string"&&(r=ne(r)),(r?(299*r.r+587*r.g+114*r.b)/1e3:null)<128?"has-dark-background":"has-light-background"}var r;return null}bubbleSlideContrastClassToElement(t,e){["has-light-background","has-dark-background"].forEach(n=>{t.classList.contains(n)?e.classList.add(n):e.classList.remove(n)},this)}update(t=!1){let e=this.Reveal.getCurrentSlide(),n=this.Reveal.getIndices(),r=null,u=this.Reveal.getConfig().rtl?"future":"past",d=this.Reveal.getConfig().rtl?"past":"future";if(Array.from(this.element.childNodes).forEach((p,h)=>{p.classList.remove("past","present","future"),h<n.h?p.classList.add(u):h>n.h?p.classList.add(d):(p.classList.add("present"),r=p),(t||h===n.h)&&q(p,".slide-background").forEach((I,v)=>{I.classList.remove("past","present","future");const E=typeof n.v=="number"?n.v:0;v<E?I.classList.add("past"):v>E?I.classList.add("future"):(I.classList.add("present"),h===n.h&&(r=I))})}),this.previousBackground&&this.Reveal.slideContent.stopEmbeddedContent(this.previousBackground,{unloadIframes:!this.Reveal.slideContent.shouldPreload(this.previousBackground)}),r){this.Reveal.slideContent.startEmbeddedContent(r);let p=r.querySelector(".slide-background-content");if(p){let v=p.style.backgroundImage||"";/\.gif/i.test(v)&&(p.style.backgroundImage="",window.getComputedStyle(p).opacity,p.style.backgroundImage=v)}let h=this.previousBackground?this.previousBackground.getAttribute("data-background-hash"):null,I=r.getAttribute("data-background-hash");I&&I===h&&r!==this.previousBackground&&this.element.classList.add("no-transition"),this.previousBackground=r}e&&this.bubbleSlideContrastClassToElement(e,this.Reveal.getRevealElement()),setTimeout(()=>{this.element.classList.remove("no-transition")},1)}updateParallax(){let t=this.Reveal.getIndices();if(this.Reveal.getConfig().parallaxBackgroundImage){let e,n,r=this.Reveal.getHorizontalSlides(),u=this.Reveal.getVerticalSlides(),d=this.element.style.backgroundSize.split(" ");d.length===1?e=n=parseInt(d[0],10):(e=parseInt(d[0],10),n=parseInt(d[1],10));let p,h,I=this.element.offsetWidth,v=r.length;p=typeof this.Reveal.getConfig().parallaxBackgroundHorizontal=="number"?this.Reveal.getConfig().parallaxBackgroundHorizontal:v>1?(e-I)/(v-1):0,h=p*t.h*-1;let E,L,f=this.element.offsetHeight,c=u.length;E=typeof this.Reveal.getConfig().parallaxBackgroundVertical=="number"?this.Reveal.getConfig().parallaxBackgroundVertical:(n-f)/(c-1),L=c>0?E*t.v:0,this.element.style.backgroundPosition=h+"px "+-L+"px"}}destroy(){this.element.remove()}}let Ce=0;class Qe{constructor(t){this.Reveal=t}run(t,e){this.reset();let n=this.Reveal.getSlides(),r=n.indexOf(e),u=n.indexOf(t);if(t.hasAttribute("data-auto-animate")&&e.hasAttribute("data-auto-animate")&&t.getAttribute("data-auto-animate-id")===e.getAttribute("data-auto-animate-id")&&!(r>u?e:t).hasAttribute("data-auto-animate-restart")){this.autoAnimateStyleSheet=this.autoAnimateStyleSheet||se();let d=this.getAutoAnimateOptions(e);t.dataset.autoAnimate="pending",e.dataset.autoAnimate="pending",d.slideDirection=r>u?"forward":"backward";let p=t.style.display==="none";p&&(t.style.display=this.Reveal.getConfig().display);let h=this.getAutoAnimatableElements(t,e).map(I=>this.autoAnimateElements(I.from,I.to,I.options||{},d,Ce++));if(p&&(t.style.display="none"),e.dataset.autoAnimateUnmatched!=="false"&&this.Reveal.getConfig().autoAnimateUnmatched===!0){let I=.8*d.duration,v=.2*d.duration;this.getUnmatchedAutoAnimateElements(e).forEach(E=>{let L=this.getAutoAnimateOptions(E,d),f="unmatched";L.duration===d.duration&&L.delay===d.delay||(f="unmatched-"+Ce++,h.push(`[data-auto-animate="running"] [data-auto-animate-target="${f}"] { transition: opacity ${L.duration}s ease ${L.delay}s; }`)),E.dataset.autoAnimateTarget=f},this),h.push(`[data-auto-animate="running"] [data-auto-animate-target="unmatched"] { transition: opacity ${I}s ease ${v}s; }`)}this.autoAnimateStyleSheet.innerHTML=h.join(""),requestAnimationFrame(()=>{this.autoAnimateStyleSheet&&(getComputedStyle(this.autoAnimateStyleSheet).fontWeight,e.dataset.autoAnimate="running")}),this.Reveal.dispatchEvent({type:"autoanimate",data:{fromSlide:t,toSlide:e,sheet:this.autoAnimateStyleSheet}})}}reset(){q(this.Reveal.getRevealElement(),'[data-auto-animate]:not([data-auto-animate=""])').forEach(t=>{t.dataset.autoAnimate=""}),q(this.Reveal.getRevealElement(),"[data-auto-animate-target]").forEach(t=>{delete t.dataset.autoAnimateTarget}),this.autoAnimateStyleSheet&&this.autoAnimateStyleSheet.parentNode&&(this.autoAnimateStyleSheet.parentNode.removeChild(this.autoAnimateStyleSheet),this.autoAnimateStyleSheet=null)}autoAnimateElements(t,e,n,r,u){t.dataset.autoAnimateTarget="",e.dataset.autoAnimateTarget=u;let d=this.getAutoAnimateOptions(e,r);n.delay!==void 0&&(d.delay=n.delay),n.duration!==void 0&&(d.duration=n.duration),n.easing!==void 0&&(d.easing=n.easing);let p=this.getAutoAnimatableProperties("from",t,n),h=this.getAutoAnimatableProperties("to",e,n);if(e.classList.contains("fragment")&&(delete h.styles.opacity,t.classList.contains("fragment"))&&(t.className.match(Te)||[""])[0]===(e.className.match(Te)||[""])[0]&&r.slideDirection==="forward"&&e.classList.add("visible","disabled"),n.translate!==!1||n.scale!==!1){let E=this.Reveal.getScale(),L={x:(p.x-h.x)/E,y:(p.y-h.y)/E,scaleX:p.width/h.width,scaleY:p.height/h.height};L.x=Math.round(1e3*L.x)/1e3,L.y=Math.round(1e3*L.y)/1e3,L.scaleX=Math.round(1e3*L.scaleX)/1e3,L.scaleX=Math.round(1e3*L.scaleX)/1e3;let f=n.translate!==!1&&(L.x!==0||L.y!==0),c=n.scale!==!1&&(L.scaleX!==0||L.scaleY!==0);if(f||c){let $=[];f&&$.push(`translate(${L.x}px, ${L.y}px)`),c&&$.push(`scale(${L.scaleX}, ${L.scaleY})`),p.styles.transform=$.join(" "),p.styles["transform-origin"]="top left",h.styles.transform="none"}}for(let E in h.styles){const L=h.styles[E],f=p.styles[E];L===f?delete h.styles[E]:(L.explicitValue===!0&&(h.styles[E]=L.value),f.explicitValue===!0&&(p.styles[E]=f.value))}let I="",v=Object.keys(h.styles);return v.length>0&&(p.styles.transition="none",h.styles.transition=`all ${d.duration}s ${d.easing} ${d.delay}s`,h.styles["transition-property"]=v.join(", "),h.styles["will-change"]=v.join(", "),I='[data-auto-animate-target="'+u+'"] {'+Object.keys(p.styles).map(E=>E+": "+p.styles[E]+" !important;").join("")+'}[data-auto-animate="running"] [data-auto-animate-target="'+u+'"] {'+Object.keys(h.styles).map(E=>E+": "+h.styles[E]+" !important;").join("")+"}"),I}getAutoAnimateOptions(t,e){let n={easing:this.Reveal.getConfig().autoAnimateEasing,duration:this.Reveal.getConfig().autoAnimateDuration,delay:0};if(n=Mt(n,e),t.parentNode){let r=lt(t.parentNode,"[data-auto-animate-target]");r&&(n=this.getAutoAnimateOptions(r,n))}return t.dataset.autoAnimateEasing&&(n.easing=t.dataset.autoAnimateEasing),t.dataset.autoAnimateDuration&&(n.duration=parseFloat(t.dataset.autoAnimateDuration)),t.dataset.autoAnimateDelay&&(n.delay=parseFloat(t.dataset.autoAnimateDelay)),n}getAutoAnimatableProperties(t,e,n){let r=this.Reveal.getConfig(),u={styles:[]};if(n.translate!==!1||n.scale!==!1){let p;if(typeof n.measure=="function")p=n.measure(e);else if(r.center)p=e.getBoundingClientRect();else{let h=this.Reveal.getScale();p={x:e.offsetLeft*h,y:e.offsetTop*h,width:e.offsetWidth*h,height:e.offsetHeight*h}}u.x=p.x,u.y=p.y,u.width=p.width,u.height=p.height}const d=getComputedStyle(e);return(n.styles||r.autoAnimateStyles).forEach(p=>{let h;typeof p=="string"&&(p={property:p}),p.from!==void 0&&t==="from"?h={value:p.from,explicitValue:!0}:p.to!==void 0&&t==="to"?h={value:p.to,explicitValue:!0}:(p.property==="line-height"&&(h=parseFloat(d["line-height"])/parseFloat(d["font-size"])),isNaN(h)&&(h=d[p.property])),h!==""&&(u.styles[p.property]=h)}),u}getAutoAnimatableElements(t,e){let n=(typeof this.Reveal.getConfig().autoAnimateMatcher=="function"?this.Reveal.getConfig().autoAnimateMatcher:this.getAutoAnimatePairs).call(this,t,e),r=[];return n.filter((u,d)=>{if(r.indexOf(u.to)===-1)return r.push(u.to),!0})}getAutoAnimatePairs(t,e){let n=[];const r="h1, h2, h3, h4, h5, h6, p, li";return this.findAutoAnimateMatches(n,t,e,"[data-id]",u=>u.nodeName+":::"+u.getAttribute("data-id")),this.findAutoAnimateMatches(n,t,e,r,u=>u.nodeName+":::"+u.innerText),this.findAutoAnimateMatches(n,t,e,"img, video, iframe",u=>u.nodeName+":::"+(u.getAttribute("src")||u.getAttribute("data-src"))),this.findAutoAnimateMatches(n,t,e,"pre",u=>u.nodeName+":::"+u.innerText),n.forEach(u=>{jt(u.from,r)?u.options={scale:!1}:jt(u.from,"pre")&&(u.options={scale:!1,styles:["width","height"]},this.findAutoAnimateMatches(n,u.from,u.to,".hljs .hljs-ln-code",d=>d.textContent,{scale:!1,styles:[],measure:this.getLocalBoundingBox.bind(this)}),this.findAutoAnimateMatches(n,u.from,u.to,".hljs .hljs-ln-numbers[data-line-number]",d=>d.getAttribute("data-line-number"),{scale:!1,styles:["width"],measure:this.getLocalBoundingBox.bind(this)}))},this),n}getLocalBoundingBox(t){const e=this.Reveal.getScale();return{x:Math.round(t.offsetLeft*e*100)/100,y:Math.round(t.offsetTop*e*100)/100,width:Math.round(t.offsetWidth*e*100)/100,height:Math.round(t.offsetHeight*e*100)/100}}findAutoAnimateMatches(t,e,n,r,u,d){let p={},h={};[].slice.call(e.querySelectorAll(r)).forEach((I,v)=>{const E=u(I);typeof E=="string"&&E.length&&(p[E]=p[E]||[],p[E].push(I))}),[].slice.call(n.querySelectorAll(r)).forEach((I,v)=>{const E=u(I);let L;if(h[E]=h[E]||[],h[E].push(I),p[E]){const f=h[E].length-1,c=p[E].length-1;p[E][f]?(L=p[E][f],p[E][f]=null):p[E][c]&&(L=p[E][c],p[E][c]=null)}L&&t.push({from:L,to:I,options:d})})}getUnmatchedAutoAnimateElements(t){return[].slice.call(t.children).reduce((e,n)=>{const r=n.querySelector("[data-auto-animate-target]");return n.hasAttribute("data-auto-animate-target")||r||e.push(n),n.querySelector("[data-auto-animate-target]")&&(e=e.concat(this.getUnmatchedAutoAnimateElements(n))),e},[])}}class Ge{constructor(t){this.Reveal=t,this.active=!1,this.activatedCallbacks=[],this.onScroll=this.onScroll.bind(this)}activate(){if(this.active)return;const t=this.Reveal.getState();this.active=!0,this.slideHTMLBeforeActivation=this.Reveal.getSlidesElement().innerHTML;const e=q(this.Reveal.getRevealElement(),At),n=q(this.Reveal.getRevealElement(),".backgrounds>.slide-background");let r;this.viewportElement.classList.add("loading-scroll-mode","reveal-scroll");const u=window.getComputedStyle(this.viewportElement);u&&u.background&&(r=u.background);const d=[],p=e[0].parentNode;let h;const I=(v,E,L,f)=>{let c;if(h&&this.Reveal.shouldAutoAnimateBetween(h,v))c=document.createElement("div"),c.className="scroll-page-content scroll-auto-animate-page",c.style.display="none",h.closest(".scroll-page-content").parentNode.appendChild(c);else{const $=document.createElement("div");if($.className="scroll-page",d.push($),f&&n.length>E){const st=n[E],at=window.getComputedStyle(st);at&&at.background?$.style.background=at.background:r&&($.style.background=r)}else r&&($.style.background=r);const X=document.createElement("div");X.className="scroll-page-sticky",$.appendChild(X),c=document.createElement("div"),c.className="scroll-page-content",X.appendChild(c)}c.appendChild(v),v.classList.remove("past","future"),v.setAttribute("data-index-h",E),v.setAttribute("data-index-v",L),v.slideBackgroundElement&&(v.slideBackgroundElement.remove("past","future"),c.insertBefore(v.slideBackgroundElement,v)),h=v};e.forEach((v,E)=>{this.Reveal.isVerticalStack(v)?v.querySelectorAll("section").forEach((L,f)=>{I(L,E,f,!0)}):I(v,E,0)},this),this.createProgressBar(),q(this.Reveal.getRevealElement(),".stack").forEach(v=>v.remove()),d.forEach(v=>p.appendChild(v)),this.Reveal.slideContent.layout(this.Reveal.getSlidesElement()),this.Reveal.layout(),this.Reveal.setState(t),this.activatedCallbacks.forEach(v=>v()),this.activatedCallbacks=[],this.restoreScrollPosition(),this.viewportElement.classList.remove("loading-scroll-mode"),this.viewportElement.addEventListener("scroll",this.onScroll,{passive:!0})}deactivate(){if(!this.active)return;const t=this.Reveal.getState();this.active=!1,this.viewportElement.removeEventListener("scroll",this.onScroll),this.viewportElement.classList.remove("reveal-scroll"),this.removeProgressBar(),this.Reveal.getSlidesElement().innerHTML=this.slideHTMLBeforeActivation,this.Reveal.sync(),this.Reveal.setState(t),this.slideHTMLBeforeActivation=null}toggle(t){typeof t=="boolean"?t?this.activate():this.deactivate():this.isActive()?this.deactivate():this.activate()}isActive(){return this.active}createProgressBar(){this.progressBar=document.createElement("div"),this.progressBar.className="scrollbar",this.progressBarInner=document.createElement("div"),this.progressBarInner.className="scrollbar-inner",this.progressBar.appendChild(this.progressBarInner),this.progressBarPlayhead=document.createElement("div"),this.progressBarPlayhead.className="scrollbar-playhead",this.progressBarInner.appendChild(this.progressBarPlayhead),this.viewportElement.insertBefore(this.progressBar,this.viewportElement.firstChild);const t=n=>{let r=(n.clientY-this.progressBarInner.getBoundingClientRect().top)/this.progressBarHeight;r=Math.max(Math.min(r,1),0),this.viewportElement.scrollTop=r*(this.viewportElement.scrollHeight-this.viewportElement.offsetHeight)},e=n=>{this.draggingProgressBar=!1,this.showProgressBar(),document.removeEventListener("mousemove",t),document.removeEventListener("mouseup",e)};this.progressBarInner.addEventListener("mousedown",n=>{n.preventDefault(),this.draggingProgressBar=!0,document.addEventListener("mousemove",t),document.addEventListener("mouseup",e),t(n)})}removeProgressBar(){this.progressBar&&(this.progressBar.remove(),this.progressBar=null)}layout(){this.isActive()&&(this.syncPages(),this.syncScrollPosition())}syncPages(){const t=this.Reveal.getConfig(),e=this.Reveal.getComputedSlideSize(window.innerWidth,window.innerHeight),n=this.Reveal.getScale(),r=t.scrollLayout==="compact",u=this.viewportElement.offsetHeight,d=e.height*n,p=r?d:u;this.scrollTriggerHeight=r?d:u,this.viewportElement.style.setProperty("--page-height",p+"px"),this.viewportElement.style.scrollSnapType=typeof t.scrollSnap=="string"?`y ${t.scrollSnap}`:"",this.slideTriggers=[];const h=Array.from(this.Reveal.getRevealElement().querySelectorAll(".scroll-page"));this.pages=h.map(I=>{const v=this.createPage({pageElement:I,slideElement:I.querySelector("section"),stickyElement:I.querySelector(".scroll-page-sticky"),contentElement:I.querySelector(".scroll-page-content"),backgroundElement:I.querySelector(".slide-background"),autoAnimateElements:I.querySelectorAll(".scroll-auto-animate-page"),autoAnimatePages:[]});v.pageElement.style.setProperty("--slide-height",t.center===!0?"auto":e.height+"px"),this.slideTriggers.push({page:v,activate:()=>this.activatePage(v),deactivate:()=>this.deactivatePage(v)}),this.createFragmentTriggersForPage(v),v.autoAnimateElements.length>0&&this.createAutoAnimateTriggersForPage(v);let E=Math.max(v.scrollTriggers.length-1,0);E+=v.autoAnimatePages.reduce((L,f)=>L+Math.max(f.scrollTriggers.length-1,0),v.autoAnimatePages.length),v.pageElement.querySelectorAll(".scroll-snap-point").forEach(L=>L.remove());for(let L=0;L<E+1;L++){const f=document.createElement("div");f.className="scroll-snap-point",f.style.height=this.scrollTriggerHeight+"px",f.style.scrollSnapAlign=r?"center":"start",v.pageElement.appendChild(f),L===0&&(f.style.marginTop=-this.scrollTriggerHeight+"px")}return r&&v.scrollTriggers.length>0?(v.pageHeight=u,v.pageElement.style.setProperty("--page-height",u+"px")):(v.pageHeight=p,v.pageElement.style.removeProperty("--page-height")),v.scrollPadding=this.scrollTriggerHeight*E,v.totalHeight=v.pageHeight+v.scrollPadding,v.pageElement.style.setProperty("--page-scroll-padding",v.scrollPadding+"px"),E>0?(v.stickyElement.style.position="sticky",v.stickyElement.style.top=Math.max((u-v.pageHeight)/2,0)+"px"):(v.stickyElement.style.position="relative",v.pageElement.style.scrollSnapAlign=v.pageHeight<u?"center":"start"),v}),this.setTriggerRanges(),this.viewportElement.setAttribute("data-scrollbar",t.scrollProgress),t.scrollProgress&&this.totalScrollTriggerCount>1?(this.progressBar||this.createProgressBar(),this.syncProgressBar()):this.removeProgressBar()}setTriggerRanges(){this.totalScrollTriggerCount=this.slideTriggers.reduce((e,n)=>e+Math.max(n.page.scrollTriggers.length,1),0);let t=0;this.slideTriggers.forEach((e,n)=>{e.range=[t,t+Math.max(e.page.scrollTriggers.length,1)/this.totalScrollTriggerCount];const r=(e.range[1]-e.range[0])/e.page.scrollTriggers.length;e.page.scrollTriggers.forEach((u,d)=>{u.range=[t+d*r,t+(d+1)*r]}),t=e.range[1]})}createFragmentTriggersForPage(t,e){e=e||t.slideElement;const n=this.Reveal.fragments.sort(e.querySelectorAll(".fragment"),!0);return n.length&&(t.fragments=this.Reveal.fragments.sort(e.querySelectorAll(".fragment:not(.disabled)")),t.scrollTriggers.push({activate:()=>{this.Reveal.fragments.update(-1,t.fragments,e)}}),n.forEach((r,u)=>{t.scrollTriggers.push({activate:()=>{this.Reveal.fragments.update(u,t.fragments,e)}})})),t.scrollTriggers.length}createAutoAnimateTriggersForPage(t){t.autoAnimateElements.length>0&&this.slideTriggers.push(...Array.from(t.autoAnimateElements).map((e,n)=>{let r=this.createPage({slideElement:e.querySelector("section"),contentElement:e,backgroundElement:e.querySelector(".slide-background")});return this.createFragmentTriggersForPage(r,r.slideElement),t.autoAnimatePages.push(r),{page:r,activate:()=>this.activatePage(r),deactivate:()=>this.deactivatePage(r)}}))}createPage(t){return t.scrollTriggers=[],t.indexh=parseInt(t.slideElement.getAttribute("data-index-h"),10),t.indexv=parseInt(t.slideElement.getAttribute("data-index-v"),10),t}syncProgressBar(){this.progressBarInner.querySelectorAll(".scrollbar-slide").forEach(d=>d.remove());const t=this.viewportElement.scrollHeight,e=this.viewportElement.offsetHeight,n=e/t;this.progressBarHeight=this.progressBarInner.offsetHeight,this.playheadHeight=Math.max(n*this.progressBarHeight,8),this.progressBarScrollableHeight=this.progressBarHeight-this.playheadHeight;const r=e/t*this.progressBarHeight,u=Math.min(r/8,4);this.progressBarPlayhead.style.height=this.playheadHeight-u+"px",r>6?this.slideTriggers.forEach(d=>{const{page:p}=d;p.progressBarSlide=document.createElement("div"),p.progressBarSlide.className="scrollbar-slide",p.progressBarSlide.style.top=d.range[0]*this.progressBarHeight+"px",p.progressBarSlide.style.height=(d.range[1]-d.range[0])*this.progressBarHeight-u+"px",p.progressBarSlide.classList.toggle("has-triggers",p.scrollTriggers.length>0),this.progressBarInner.appendChild(p.progressBarSlide),p.scrollTriggerElements=p.scrollTriggers.map((h,I)=>{const v=document.createElement("div");return v.className="scrollbar-trigger",v.style.top=(h.range[0]-d.range[0])*this.progressBarHeight+"px",v.style.height=(h.range[1]-h.range[0])*this.progressBarHeight-u+"px",p.progressBarSlide.appendChild(v),I===0&&(v.style.display="none"),v})}):this.pages.forEach(d=>d.progressBarSlide=null)}syncScrollPosition(){const t=this.viewportElement.offsetHeight,e=t/this.viewportElement.scrollHeight,n=this.viewportElement.scrollTop,r=this.viewportElement.scrollHeight-t,u=Math.max(Math.min(n/r,1),0),d=Math.max(Math.min((n+t/2)/this.viewportElement.scrollHeight,1),0);let p;this.slideTriggers.forEach(h=>{const{page:I}=h;u>=h.range[0]-2*e&&u<=h.range[1]+2*e&&!I.loaded?(I.loaded=!0,this.Reveal.slideContent.load(I.slideElement)):I.loaded&&(I.loaded=!1,this.Reveal.slideContent.unload(I.slideElement)),u>=h.range[0]&&u<=h.range[1]?(this.activateTrigger(h),p=h.page):h.active&&this.deactivateTrigger(h)}),p&&p.scrollTriggers.forEach(h=>{d>=h.range[0]&&d<=h.range[1]?this.activateTrigger(h):h.active&&this.deactivateTrigger(h)}),this.setProgressBarValue(n/(this.viewportElement.scrollHeight-t))}setProgressBarValue(t){this.progressBar&&(this.progressBarPlayhead.style.transform=`translateY(${t*this.progressBarScrollableHeight}px)`,this.getAllPages().filter(e=>e.progressBarSlide).forEach(e=>{e.progressBarSlide.classList.toggle("active",e.active===!0),e.scrollTriggers.forEach((n,r)=>{e.scrollTriggerElements[r].classList.toggle("active",e.active===!0&&n.active===!0)})}),this.showProgressBar())}showProgressBar(){this.progressBar.classList.add("visible"),clearTimeout(this.hideProgressBarTimeout),this.Reveal.getConfig().scrollProgress!=="auto"||this.draggingProgressBar||(this.hideProgressBarTimeout=setTimeout(()=>{this.progressBar&&this.progressBar.classList.remove("visible")},500))}prev(){this.viewportElement.scrollTop-=this.scrollTriggerHeight}next(){this.viewportElement.scrollTop+=this.scrollTriggerHeight}scrollToSlide(t){if(this.active){const e=this.getScrollTriggerBySlide(t);e&&(this.viewportElement.scrollTop=e.range[0]*(this.viewportElement.scrollHeight-this.viewportElement.offsetHeight))}else this.activatedCallbacks.push(()=>this.scrollToSlide(t))}storeScrollPosition(){clearTimeout(this.storeScrollPositionTimeout),this.storeScrollPositionTimeout=setTimeout(()=>{sessionStorage.setItem("reveal-scroll-top",this.viewportElement.scrollTop),sessionStorage.setItem("reveal-scroll-origin",location.origin+location.pathname),this.storeScrollPositionTimeout=null},50)}restoreScrollPosition(){const t=sessionStorage.getItem("reveal-scroll-top"),e=sessionStorage.getItem("reveal-scroll-origin");t&&e===location.origin+location.pathname&&(this.viewportElement.scrollTop=parseInt(t,10))}activatePage(t){if(!t.active){t.active=!0;const{slideElement:e,backgroundElement:n,contentElement:r,indexh:u,indexv:d}=t;r.style.display="block",e.classList.add("present"),n&&n.classList.add("present"),this.Reveal.setCurrentScrollPage(e,u,d),this.Reveal.backgrounds.bubbleSlideContrastClassToElement(e,this.viewportElement),Array.from(r.parentNode.querySelectorAll(".scroll-page-content")).forEach(p=>{p!==r&&(p.style.display="none")})}}deactivatePage(t){t.active&&(t.active=!1,t.slideElement&&t.slideElement.classList.remove("present"),t.backgroundElement&&t.backgroundElement.classList.remove("present"))}activateTrigger(t){t.active||(t.active=!0,t.activate())}deactivateTrigger(t){t.active&&(t.active=!1,t.deactivate&&t.deactivate())}getSlideByIndices(t,e){const n=this.getAllPages().find(r=>r.indexh===t&&r.indexv===e);return n?n.slideElement:null}getScrollTriggerBySlide(t){return this.slideTriggers.find(e=>e.page.slideElement===t)}getAllPages(){return this.pages.flatMap(t=>[t,...t.autoAnimatePages||[]])}onScroll(){this.syncScrollPosition(),this.storeScrollPosition()}get viewportElement(){return this.Reveal.getViewportElement()}}class tn{constructor(t){this.Reveal=t}async activate(){const t=this.Reveal.getConfig(),e=q(this.Reveal.getRevealElement(),Ct),n=t.slideNumber&&/all|print/i.test(t.showSlideNumber),r=this.Reveal.getComputedSlideSize(window.innerWidth,window.innerHeight),u=Math.floor(r.width*(1+t.margin)),d=Math.floor(r.height*(1+t.margin)),p=r.width,h=r.height;await new Promise(requestAnimationFrame),se("@page{size:"+u+"px "+d+"px; margin: 0px;}"),se(".reveal section>img, .reveal section>video, .reveal section>iframe{max-width: "+p+"px; max-height:"+h+"px}"),document.documentElement.classList.add("reveal-print","print-pdf"),document.body.style.width=u+"px",document.body.style.height=d+"px";const I=this.Reveal.getViewportElement();let v;if(I){const $=window.getComputedStyle(I);$&&$.background&&(v=$.background)}await new Promise(requestAnimationFrame),this.Reveal.layoutSlideContents(p,h),await new Promise(requestAnimationFrame);const E=e.map($=>$.scrollHeight),L=[],f=e[0].parentNode;let c=1;e.forEach(function($,X){if($.classList.contains("stack")===!1){let st=(u-p)/2,at=(d-h)/2;const rt=E[X];let U=Math.max(Math.ceil(rt/d),1);U=Math.min(U,t.pdfMaxPagesPerSlide),(U===1&&t.center||$.classList.contains("center"))&&(at=Math.max((d-rt)/2,0));const J=document.createElement("div");if(L.push(J),J.className="pdf-page",J.style.height=(d+t.pdfPageHeightOffset)*U+"px",v&&(J.style.background=v),J.appendChild($),$.style.left=st+"px",$.style.top=at+"px",$.style.width=p+"px",this.Reveal.slideContent.layout($),$.slideBackgroundElement&&J.insertBefore($.slideBackgroundElement,$),t.showNotes){const V=this.Reveal.getSlideNotes($);if(V){const W=typeof t.showNotes=="string"?t.showNotes:"inline",H=document.createElement("div");H.classList.add("speaker-notes"),H.classList.add("speaker-notes-pdf"),H.setAttribute("data-layout",W),H.innerHTML=V,W==="separate-page"?L.push(H):(H.style.left="8px",H.style.bottom="8px",H.style.width=u-2*8+"px",J.appendChild(H))}}if(n){const V=document.createElement("div");V.classList.add("slide-number"),V.classList.add("slide-number-pdf"),V.innerHTML=c++,J.appendChild(V)}if(t.pdfSeparateFragments){const V=this.Reveal.fragments.sort(J.querySelectorAll(".fragment"),!0);let dt;V.forEach(function(W,H){dt&&dt.forEach(function(_){_.classList.remove("current-fragment")}),W.forEach(function(_){_.classList.add("visible","current-fragment")},this);const w=J.cloneNode(!0);if(n){const _=H+1;w.querySelector(".slide-number-pdf").innerHTML+="."+_}L.push(w),dt=W},this),V.forEach(function(W){W.forEach(function(H){H.classList.remove("visible","current-fragment")})})}else q(J,".fragment:not(.fade-out)").forEach(function(V){V.classList.add("visible")})}},this),await new Promise(requestAnimationFrame),L.forEach($=>f.appendChild($)),this.Reveal.slideContent.layout(this.Reveal.getSlidesElement()),this.Reveal.dispatchEvent({type:"pdf-ready"}),I.classList.remove("loading-scroll-mode")}isActive(){return this.Reveal.getConfig().view==="print"}}class en{constructor(t){this.Reveal=t}configure(t,e){t.fragments===!1?this.disable():e.fragments===!1&&this.enable()}disable(){q(this.Reveal.getSlidesElement(),".fragment").forEach(t=>{t.classList.add("visible"),t.classList.remove("current-fragment")})}enable(){q(this.Reveal.getSlidesElement(),".fragment").forEach(t=>{t.classList.remove("visible"),t.classList.remove("current-fragment")})}availableRoutes(){let t=this.Reveal.getCurrentSlide();if(t&&this.Reveal.getConfig().fragments){let e=t.querySelectorAll(".fragment:not(.disabled)"),n=t.querySelectorAll(".fragment:not(.disabled):not(.visible)");return{prev:e.length-n.length>0,next:!!n.length}}return{prev:!1,next:!1}}sort(t,e=!1){t=Array.from(t);let n=[],r=[],u=[];t.forEach(p=>{if(p.hasAttribute("data-fragment-index")){let h=parseInt(p.getAttribute("data-fragment-index"),10);n[h]||(n[h]=[]),n[h].push(p)}else r.push([p])}),n=n.concat(r);let d=0;return n.forEach(p=>{p.forEach(h=>{u.push(h),h.setAttribute("data-fragment-index",d)}),d++}),e===!0?n:u}sortAll(){this.Reveal.getHorizontalSlides().forEach(t=>{let e=q(t,"section");e.forEach((n,r)=>{this.sort(n.querySelectorAll(".fragment"))},this),e.length===0&&this.sort(t.querySelectorAll(".fragment"))})}update(t,e,n=this.Reveal.getCurrentSlide()){let r={shown:[],hidden:[]};if(n&&this.Reveal.getConfig().fragments&&(e=e||this.sort(n.querySelectorAll(".fragment"))).length){let u=0;if(typeof t!="number"){let d=this.sort(n.querySelectorAll(".fragment.visible")).pop();d&&(t=parseInt(d.getAttribute("data-fragment-index")||0,10))}Array.from(e).forEach((d,p)=>{if(d.hasAttribute("data-fragment-index")&&(p=parseInt(d.getAttribute("data-fragment-index"),10)),u=Math.max(u,p),p<=t){let h=d.classList.contains("visible");d.classList.add("visible"),d.classList.remove("current-fragment"),p===t&&(this.Reveal.announceStatus(this.Reveal.getStatusText(d)),d.classList.add("current-fragment"),this.Reveal.slideContent.startEmbeddedContent(d)),h||(r.shown.push(d),this.Reveal.dispatchEvent({target:d,type:"visible",bubbles:!1}))}else{let h=d.classList.contains("visible");d.classList.remove("visible"),d.classList.remove("current-fragment"),h&&(this.Reveal.slideContent.stopEmbeddedContent(d),r.hidden.push(d),this.Reveal.dispatchEvent({target:d,type:"hidden",bubbles:!1}))}}),t=typeof t=="number"?t:-1,t=Math.max(Math.min(t,u),-1),n.setAttribute("data-fragment",t)}return r.hidden.length&&this.Reveal.dispatchEvent({type:"fragmenthidden",data:{fragment:r.hidden[0],fragments:r.hidden}}),r.shown.length&&this.Reveal.dispatchEvent({type:"fragmentshown",data:{fragment:r.shown[0],fragments:r.shown}}),r}sync(t=this.Reveal.getCurrentSlide()){return this.sort(t.querySelectorAll(".fragment"))}goto(t,e=0){let n=this.Reveal.getCurrentSlide();if(n&&this.Reveal.getConfig().fragments){let r=this.sort(n.querySelectorAll(".fragment:not(.disabled)"));if(r.length){if(typeof t!="number"){let d=this.sort(n.querySelectorAll(".fragment:not(.disabled).visible")).pop();t=d?parseInt(d.getAttribute("data-fragment-index")||0,10):-1}t+=e;let u=this.update(t,r);return this.Reveal.controls.update(),this.Reveal.progress.update(),this.Reveal.getConfig().fragmentInURL&&this.Reveal.location.writeURL(),!(!u.shown.length&&!u.hidden.length)}}return!1}next(){return this.goto(null,1)}prev(){return this.goto(null,-1)}}class nn{constructor(t){this.Reveal=t,this.active=!1,this.onSlideClicked=this.onSlideClicked.bind(this)}activate(){if(this.Reveal.getConfig().overview&&!this.Reveal.isScrollView()&&!this.isActive()){this.active=!0,this.Reveal.getRevealElement().classList.add("overview"),this.Reveal.cancelAutoSlide(),this.Reveal.getSlidesElement().appendChild(this.Reveal.getBackgroundsElement()),q(this.Reveal.getRevealElement(),Ct).forEach(r=>{r.classList.contains("stack")||r.addEventListener("click",this.onSlideClicked,!0)});const t=70,e=this.Reveal.getComputedSlideSize();this.overviewSlideWidth=e.width+t,this.overviewSlideHeight=e.height+t,this.Reveal.getConfig().rtl&&(this.overviewSlideWidth=-this.overviewSlideWidth),this.Reveal.updateSlidesVisibility(),this.layout(),this.update(),this.Reveal.layout();const n=this.Reveal.getIndices();this.Reveal.dispatchEvent({type:"overviewshown",data:{indexh:n.h,indexv:n.v,currentSlide:this.Reveal.getCurrentSlide()}})}}layout(){this.Reveal.getHorizontalSlides().forEach((t,e)=>{t.setAttribute("data-index-h",e),Lt(t,"translate3d("+e*this.overviewSlideWidth+"px, 0, 0)"),t.classList.contains("stack")&&q(t,"section").forEach((n,r)=>{n.setAttribute("data-index-h",e),n.setAttribute("data-index-v",r),Lt(n,"translate3d(0, "+r*this.overviewSlideHeight+"px, 0)")})}),Array.from(this.Reveal.getBackgroundsElement().childNodes).forEach((t,e)=>{Lt(t,"translate3d("+e*this.overviewSlideWidth+"px, 0, 0)"),q(t,".slide-background").forEach((n,r)=>{Lt(n,"translate3d(0, "+r*this.overviewSlideHeight+"px, 0)")})})}update(){const t=Math.min(window.innerWidth,window.innerHeight),e=Math.max(t/5,150)/t,n=this.Reveal.getIndices();this.Reveal.transformSlides({overview:["scale("+e+")","translateX("+-n.h*this.overviewSlideWidth+"px)","translateY("+-n.v*this.overviewSlideHeight+"px)"].join(" ")})}deactivate(){if(this.Reveal.getConfig().overview){this.active=!1,this.Reveal.getRevealElement().classList.remove("overview"),this.Reveal.getRevealElement().classList.add("overview-deactivating"),setTimeout(()=>{this.Reveal.getRevealElement().classList.remove("overview-deactivating")},1),this.Reveal.getRevealElement().appendChild(this.Reveal.getBackgroundsElement()),q(this.Reveal.getRevealElement(),Ct).forEach(e=>{Lt(e,""),e.removeEventListener("click",this.onSlideClicked,!0)}),q(this.Reveal.getBackgroundsElement(),".slide-background").forEach(e=>{Lt(e,"")}),this.Reveal.transformSlides({overview:""});const t=this.Reveal.getIndices();this.Reveal.slide(t.h,t.v),this.Reveal.layout(),this.Reveal.cueAutoSlide(),this.Reveal.dispatchEvent({type:"overviewhidden",data:{indexh:t.h,indexv:t.v,currentSlide:this.Reveal.getCurrentSlide()}})}}toggle(t){typeof t=="boolean"?t?this.activate():this.deactivate():this.isActive()?this.deactivate():this.activate()}isActive(){return this.active}onSlideClicked(t){if(this.isActive()){t.preventDefault();let e=t.target;for(;e&&!e.nodeName.match(/section/gi);)e=e.parentNode;if(e&&!e.classList.contains("disabled")&&(this.deactivate(),e.nodeName.match(/section/gi))){let n=parseInt(e.getAttribute("data-index-h"),10),r=parseInt(e.getAttribute("data-index-v"),10);this.Reveal.slide(n,r)}}}}class sn{constructor(t){this.Reveal=t,this.shortcuts={},this.bindings={},this.onDocumentKeyDown=this.onDocumentKeyDown.bind(this)}configure(t,e){t.navigationMode==="linear"?(this.shortcuts["&#8594;  ,  &#8595;  ,  SPACE  ,  N  ,  L  ,  J"]="Next slide",this.shortcuts["&#8592;  ,  &#8593;  ,  P  ,  H  ,  K"]="Previous slide"):(this.shortcuts["N  ,  SPACE"]="Next slide",this.shortcuts["P  ,  Shift SPACE"]="Previous slide",this.shortcuts["&#8592;  ,  H"]="Navigate left",this.shortcuts["&#8594;  ,  L"]="Navigate right",this.shortcuts["&#8593;  ,  K"]="Navigate up",this.shortcuts["&#8595;  ,  J"]="Navigate down"),this.shortcuts["Alt + &#8592;/&#8593/&#8594;/&#8595;"]="Navigate without fragments",this.shortcuts["Shift + &#8592;/&#8593/&#8594;/&#8595;"]="Jump to first/last slide",this.shortcuts["B  ,  ."]="Pause",this.shortcuts.F="Fullscreen",this.shortcuts.G="Jump to slide",this.shortcuts["ESC, O"]="Slide overview"}bind(){document.addEventListener("keydown",this.onDocumentKeyDown,!1)}unbind(){document.removeEventListener("keydown",this.onDocumentKeyDown,!1)}addKeyBinding(t,e){typeof t=="object"&&t.keyCode?this.bindings[t.keyCode]={callback:e,key:t.key,description:t.description}:this.bindings[t]={callback:e,key:null,description:null}}removeKeyBinding(t){delete this.bindings[t]}triggerKey(t){this.onDocumentKeyDown({keyCode:t})}registerKeyboardShortcut(t,e){this.shortcuts[t]=e}getShortcuts(){return this.shortcuts}getBindings(){return this.bindings}onDocumentKeyDown(t){let e=this.Reveal.getConfig();if(typeof e.keyboardCondition=="function"&&e.keyboardCondition(t)===!1||e.keyboardCondition==="focused"&&!this.Reveal.isFocused())return!0;let n=t.keyCode,r=!this.Reveal.isAutoSliding();this.Reveal.onUserInput(t);let u=document.activeElement&&document.activeElement.isContentEditable===!0,d=document.activeElement&&document.activeElement.tagName&&/input|textarea/i.test(document.activeElement.tagName),p=document.activeElement&&document.activeElement.className&&/speaker-notes/i.test(document.activeElement.className),h=!([32,37,38,39,40,78,80,191].indexOf(t.keyCode)!==-1&&t.shiftKey||t.altKey)&&(t.shiftKey||t.altKey||t.ctrlKey||t.metaKey);if(u||d||p||h)return;let I,v=[66,86,190,191,112];if(typeof e.keyboard=="object")for(I in e.keyboard)e.keyboard[I]==="togglePause"&&v.push(parseInt(I,10));if(this.Reveal.isPaused()&&v.indexOf(n)===-1)return!1;let E=e.navigationMode==="linear"||!this.Reveal.hasHorizontalSlides()||!this.Reveal.hasVerticalSlides(),L=!1;if(typeof e.keyboard=="object"){for(I in e.keyboard)if(parseInt(I,10)===n){let f=e.keyboard[I];typeof f=="function"?f.apply(null,[t]):typeof f=="string"&&typeof this.Reveal[f]=="function"&&this.Reveal[f].call(),L=!0}}if(L===!1){for(I in this.bindings)if(parseInt(I,10)===n){let f=this.bindings[I].callback;typeof f=="function"?f.apply(null,[t]):typeof f=="string"&&typeof this.Reveal[f]=="function"&&this.Reveal[f].call(),L=!0}}L===!1&&(L=!0,n===80||n===33?this.Reveal.prev({skipFragments:t.altKey}):n===78||n===34?this.Reveal.next({skipFragments:t.altKey}):n===72||n===37?t.shiftKey?this.Reveal.slide(0):!this.Reveal.overview.isActive()&&E?this.Reveal.prev({skipFragments:t.altKey}):this.Reveal.left({skipFragments:t.altKey}):n===76||n===39?t.shiftKey?this.Reveal.slide(this.Reveal.getHorizontalSlides().length-1):!this.Reveal.overview.isActive()&&E?this.Reveal.next({skipFragments:t.altKey}):this.Reveal.right({skipFragments:t.altKey}):n===75||n===38?t.shiftKey?this.Reveal.slide(void 0,0):!this.Reveal.overview.isActive()&&E?this.Reveal.prev({skipFragments:t.altKey}):this.Reveal.up({skipFragments:t.altKey}):n===74||n===40?t.shiftKey?this.Reveal.slide(void 0,Number.MAX_VALUE):!this.Reveal.overview.isActive()&&E?this.Reveal.next({skipFragments:t.altKey}):this.Reveal.down({skipFragments:t.altKey}):n===36?this.Reveal.slide(0):n===35?this.Reveal.slide(this.Reveal.getHorizontalSlides().length-1):n===32?(this.Reveal.overview.isActive()&&this.Reveal.overview.deactivate(),t.shiftKey?this.Reveal.prev({skipFragments:t.altKey}):this.Reveal.next({skipFragments:t.altKey})):[58,59,66,86,190].includes(n)||n===191&&!t.shiftKey?this.Reveal.togglePause():n===70?(f=>{let c=(f=f||document.documentElement).requestFullscreen||f.webkitRequestFullscreen||f.webkitRequestFullScreen||f.mozRequestFullScreen||f.msRequestFullscreen;c&&c.apply(f)})(e.embedded?this.Reveal.getViewportElement():document.documentElement):n===65?e.autoSlideStoppable&&this.Reveal.toggleAutoSlide(r):n===71?e.jumpToSlide&&this.Reveal.toggleJumpToSlide():n===191&&t.shiftKey||n===112?this.Reveal.toggleHelp():L=!1),L?t.preventDefault&&t.preventDefault():n!==27&&n!==79||(this.Reveal.closeOverlay()===!1&&this.Reveal.overview.toggle(),t.preventDefault&&t.preventDefault()),this.Reveal.cueAutoSlide()}}class an{constructor(t){te(this,"MAX_REPLACE_STATE_FREQUENCY",1e3);this.Reveal=t,this.writeURLTimeout=0,this.replaceStateTimestamp=0,this.onWindowHashChange=this.onWindowHashChange.bind(this)}bind(){window.addEventListener("hashchange",this.onWindowHashChange,!1)}unbind(){window.removeEventListener("hashchange",this.onWindowHashChange,!1)}getIndicesFromHash(t=window.location.hash,e={}){let n=t.replace(/^#\/?/,""),r=n.split("/");if(/^[0-9]*$/.test(r[0])||!n.length){const u=this.Reveal.getConfig();let d,p=u.hashOneBasedIndex||e.oneBasedIndex?1:0,h=parseInt(r[0],10)-p||0,I=parseInt(r[1],10)-p||0;return u.fragmentInURL&&(d=parseInt(r[2],10),isNaN(d)&&(d=void 0)),{h,v:I,f:d}}{let u,d;/\/[-\d]+$/g.test(n)&&(d=parseInt(n.split("/").pop(),10),d=isNaN(d)?void 0:d,n=n.split("/").shift());try{u=document.getElementById(decodeURIComponent(n)).closest(".slides section")}catch{}if(u)return{...this.Reveal.getIndices(u),f:d}}return null}readURL(){const t=this.Reveal.getIndices(),e=this.getIndicesFromHash();e?e.h===t.h&&e.v===t.v&&e.f===void 0||this.Reveal.slide(e.h,e.v,e.f):this.Reveal.slide(t.h||0,t.v||0)}writeURL(t){let e=this.Reveal.getConfig(),n=this.Reveal.getCurrentSlide();if(clearTimeout(this.writeURLTimeout),typeof t=="number")this.writeURLTimeout=setTimeout(this.writeURL,t);else if(n){let r=this.getHash();e.history?window.location.hash=r:e.hash&&(r==="/"?this.debouncedReplaceState(window.location.pathname+window.location.search):this.debouncedReplaceState("#"+r))}}replaceState(t){window.history.replaceState(null,null,t),this.replaceStateTimestamp=Date.now()}debouncedReplaceState(t){clearTimeout(this.replaceStateTimeout),Date.now()-this.replaceStateTimestamp>this.MAX_REPLACE_STATE_FREQUENCY?this.replaceState(t):this.replaceStateTimeout=setTimeout(()=>this.replaceState(t),this.MAX_REPLACE_STATE_FREQUENCY)}getHash(t){let e="/",n=t||this.Reveal.getCurrentSlide(),r=n?n.getAttribute("id"):null;r&&(r=encodeURIComponent(r));let u=this.Reveal.getIndices(t);if(this.Reveal.getConfig().fragmentInURL||(u.f=void 0),typeof r=="string"&&r.length)e="/"+r,u.f>=0&&(e+="/"+u.f);else{let d=this.Reveal.getConfig().hashOneBasedIndex?1:0;(u.h>0||u.v>0||u.f>=0)&&(e+=u.h+d),(u.v>0||u.f>=0)&&(e+="/"+(u.v+d)),u.f>=0&&(e+="/"+u.f)}return e}onWindowHashChange(t){this.readURL()}}class rn{constructor(t){this.Reveal=t,this.onNavigateLeftClicked=this.onNavigateLeftClicked.bind(this),this.onNavigateRightClicked=this.onNavigateRightClicked.bind(this),this.onNavigateUpClicked=this.onNavigateUpClicked.bind(this),this.onNavigateDownClicked=this.onNavigateDownClicked.bind(this),this.onNavigatePrevClicked=this.onNavigatePrevClicked.bind(this),this.onNavigateNextClicked=this.onNavigateNextClicked.bind(this)}render(){const t=this.Reveal.getConfig().rtl,e=this.Reveal.getRevealElement();this.element=document.createElement("aside"),this.element.className="controls",this.element.innerHTML=`<button class="navigate-left" aria-label="${t?"next slide":"previous slide"}"><div class="controls-arrow"></div></button>
			<button class="navigate-right" aria-label="${t?"previous slide":"next slide"}"><div class="controls-arrow"></div></button>
			<button class="navigate-up" aria-label="above slide"><div class="controls-arrow"></div></button>
			<button class="navigate-down" aria-label="below slide"><div class="controls-arrow"></div></button>`,this.Reveal.getRevealElement().appendChild(this.element),this.controlsLeft=q(e,".navigate-left"),this.controlsRight=q(e,".navigate-right"),this.controlsUp=q(e,".navigate-up"),this.controlsDown=q(e,".navigate-down"),this.controlsPrev=q(e,".navigate-prev"),this.controlsNext=q(e,".navigate-next"),this.controlsRightArrow=this.element.querySelector(".navigate-right"),this.controlsLeftArrow=this.element.querySelector(".navigate-left"),this.controlsDownArrow=this.element.querySelector(".navigate-down")}configure(t,e){this.element.style.display=t.controls?"block":"none",this.element.setAttribute("data-controls-layout",t.controlsLayout),this.element.setAttribute("data-controls-back-arrows",t.controlsBackArrows)}bind(){let t=["touchstart","click"];ze&&(t=["touchstart"]),t.forEach(e=>{this.controlsLeft.forEach(n=>n.addEventListener(e,this.onNavigateLeftClicked,!1)),this.controlsRight.forEach(n=>n.addEventListener(e,this.onNavigateRightClicked,!1)),this.controlsUp.forEach(n=>n.addEventListener(e,this.onNavigateUpClicked,!1)),this.controlsDown.forEach(n=>n.addEventListener(e,this.onNavigateDownClicked,!1)),this.controlsPrev.forEach(n=>n.addEventListener(e,this.onNavigatePrevClicked,!1)),this.controlsNext.forEach(n=>n.addEventListener(e,this.onNavigateNextClicked,!1))})}unbind(){["touchstart","click"].forEach(t=>{this.controlsLeft.forEach(e=>e.removeEventListener(t,this.onNavigateLeftClicked,!1)),this.controlsRight.forEach(e=>e.removeEventListener(t,this.onNavigateRightClicked,!1)),this.controlsUp.forEach(e=>e.removeEventListener(t,this.onNavigateUpClicked,!1)),this.controlsDown.forEach(e=>e.removeEventListener(t,this.onNavigateDownClicked,!1)),this.controlsPrev.forEach(e=>e.removeEventListener(t,this.onNavigatePrevClicked,!1)),this.controlsNext.forEach(e=>e.removeEventListener(t,this.onNavigateNextClicked,!1))})}update(){let t=this.Reveal.availableRoutes();[...this.controlsLeft,...this.controlsRight,...this.controlsUp,...this.controlsDown,...this.controlsPrev,...this.controlsNext].forEach(n=>{n.classList.remove("enabled","fragmented"),n.setAttribute("disabled","disabled")}),t.left&&this.controlsLeft.forEach(n=>{n.classList.add("enabled"),n.removeAttribute("disabled")}),t.right&&this.controlsRight.forEach(n=>{n.classList.add("enabled"),n.removeAttribute("disabled")}),t.up&&this.controlsUp.forEach(n=>{n.classList.add("enabled"),n.removeAttribute("disabled")}),t.down&&this.controlsDown.forEach(n=>{n.classList.add("enabled"),n.removeAttribute("disabled")}),(t.left||t.up)&&this.controlsPrev.forEach(n=>{n.classList.add("enabled"),n.removeAttribute("disabled")}),(t.right||t.down)&&this.controlsNext.forEach(n=>{n.classList.add("enabled"),n.removeAttribute("disabled")});let e=this.Reveal.getCurrentSlide();if(e){let n=this.Reveal.fragments.availableRoutes();n.prev&&this.controlsPrev.forEach(r=>{r.classList.add("fragmented","enabled"),r.removeAttribute("disabled")}),n.next&&this.controlsNext.forEach(r=>{r.classList.add("fragmented","enabled"),r.removeAttribute("disabled")}),this.Reveal.isVerticalSlide(e)?(n.prev&&this.controlsUp.forEach(r=>{r.classList.add("fragmented","enabled"),r.removeAttribute("disabled")}),n.next&&this.controlsDown.forEach(r=>{r.classList.add("fragmented","enabled"),r.removeAttribute("disabled")})):(n.prev&&this.controlsLeft.forEach(r=>{r.classList.add("fragmented","enabled"),r.removeAttribute("disabled")}),n.next&&this.controlsRight.forEach(r=>{r.classList.add("fragmented","enabled"),r.removeAttribute("disabled")}))}if(this.Reveal.getConfig().controlsTutorial){let n=this.Reveal.getIndices();!this.Reveal.hasNavigatedVertically()&&t.down?this.controlsDownArrow.classList.add("highlight"):(this.controlsDownArrow.classList.remove("highlight"),this.Reveal.getConfig().rtl?!this.Reveal.hasNavigatedHorizontally()&&t.left&&n.v===0?this.controlsLeftArrow.classList.add("highlight"):this.controlsLeftArrow.classList.remove("highlight"):!this.Reveal.hasNavigatedHorizontally()&&t.right&&n.v===0?this.controlsRightArrow.classList.add("highlight"):this.controlsRightArrow.classList.remove("highlight"))}}destroy(){this.unbind(),this.element.remove()}onNavigateLeftClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.getConfig().navigationMode==="linear"?this.Reveal.prev():this.Reveal.left()}onNavigateRightClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.getConfig().navigationMode==="linear"?this.Reveal.next():this.Reveal.right()}onNavigateUpClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.up()}onNavigateDownClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.down()}onNavigatePrevClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.prev()}onNavigateNextClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.next()}}class on{constructor(t){this.Reveal=t,this.onProgressClicked=this.onProgressClicked.bind(this)}render(){this.element=document.createElement("div"),this.element.className="progress",this.Reveal.getRevealElement().appendChild(this.element),this.bar=document.createElement("span"),this.element.appendChild(this.bar)}configure(t,e){this.element.style.display=t.progress?"block":"none"}bind(){this.Reveal.getConfig().progress&&this.element&&this.element.addEventListener("click",this.onProgressClicked,!1)}unbind(){this.Reveal.getConfig().progress&&this.element&&this.element.removeEventListener("click",this.onProgressClicked,!1)}update(){if(this.Reveal.getConfig().progress&&this.bar){let t=this.Reveal.getProgress();this.Reveal.getTotalSlides()<2&&(t=0),this.bar.style.transform="scaleX("+t+")"}}getMaxWidth(){return this.Reveal.getRevealElement().offsetWidth}onProgressClicked(t){this.Reveal.onUserInput(t),t.preventDefault();let e=this.Reveal.getSlides(),n=e.length,r=Math.floor(t.clientX/this.getMaxWidth()*n);this.Reveal.getConfig().rtl&&(r=n-r);let u=this.Reveal.getIndices(e[r]);this.Reveal.slide(u.h,u.v)}destroy(){this.element.remove()}}class ln{constructor(t){this.Reveal=t,this.lastMouseWheelStep=0,this.cursorHidden=!1,this.cursorInactiveTimeout=0,this.onDocumentCursorActive=this.onDocumentCursorActive.bind(this),this.onDocumentMouseScroll=this.onDocumentMouseScroll.bind(this)}configure(t,e){t.mouseWheel?document.addEventListener("wheel",this.onDocumentMouseScroll,!1):document.removeEventListener("wheel",this.onDocumentMouseScroll,!1),t.hideInactiveCursor?(document.addEventListener("mousemove",this.onDocumentCursorActive,!1),document.addEventListener("mousedown",this.onDocumentCursorActive,!1)):(this.showCursor(),document.removeEventListener("mousemove",this.onDocumentCursorActive,!1),document.removeEventListener("mousedown",this.onDocumentCursorActive,!1))}showCursor(){this.cursorHidden&&(this.cursorHidden=!1,this.Reveal.getRevealElement().style.cursor="")}hideCursor(){this.cursorHidden===!1&&(this.cursorHidden=!0,this.Reveal.getRevealElement().style.cursor="none")}destroy(){this.showCursor(),document.removeEventListener("wheel",this.onDocumentMouseScroll,!1),document.removeEventListener("mousemove",this.onDocumentCursorActive,!1),document.removeEventListener("mousedown",this.onDocumentCursorActive,!1)}onDocumentCursorActive(t){this.showCursor(),clearTimeout(this.cursorInactiveTimeout),this.cursorInactiveTimeout=setTimeout(this.hideCursor.bind(this),this.Reveal.getConfig().hideCursorTime)}onDocumentMouseScroll(t){if(Date.now()-this.lastMouseWheelStep>1e3){this.lastMouseWheelStep=Date.now();let e=t.detail||-t.wheelDelta;e>0?this.Reveal.next():e<0&&this.Reveal.prev()}}}const Pe=(b,t)=>{const e=document.createElement("script");e.type="text/javascript",e.async=!1,e.defer=!1,e.src=b,typeof t=="function"&&(e.onload=e.onreadystatechange=r=>{(r.type==="load"||/loaded|complete/.test(e.readyState))&&(e.onload=e.onreadystatechange=e.onerror=null,t())},e.onerror=r=>{e.onload=e.onreadystatechange=e.onerror=null,t(new Error("Failed loading script: "+e.src+`
`+r))});const n=document.querySelector("head");n.insertBefore(e,n.lastChild)};class cn{constructor(t){this.Reveal=t,this.state="idle",this.registeredPlugins={},this.asyncDependencies=[]}load(t,e){return this.state="loading",t.forEach(this.registerPlugin.bind(this)),new Promise(n=>{let r=[],u=0;if(e.forEach(d=>{d.condition&&!d.condition()||(d.async?this.asyncDependencies.push(d):r.push(d))}),r.length){u=r.length;const d=p=>{p&&typeof p.callback=="function"&&p.callback(),--u==0&&this.initPlugins().then(n)};r.forEach(p=>{typeof p.id=="string"?(this.registerPlugin(p),d(p)):typeof p.src=="string"?Pe(p.src,()=>d(p)):(console.warn("Unrecognized plugin format",p),d())})}else this.initPlugins().then(n)})}initPlugins(){return new Promise(t=>{let e=Object.values(this.registeredPlugins),n=e.length;if(n===0)this.loadAsync().then(t);else{let r,u=()=>{--n==0?this.loadAsync().then(t):r()},d=0;r=()=>{let p=e[d++];if(typeof p.init=="function"){let h=p.init(this.Reveal);h&&typeof h.then=="function"?h.then(u):u()}else u()},r()}})}loadAsync(){return this.state="loaded",this.asyncDependencies.length&&this.asyncDependencies.forEach(t=>{Pe(t.src,t.callback)}),Promise.resolve()}registerPlugin(t){arguments.length===2&&typeof arguments[0]=="string"?(t=arguments[1]).id=arguments[0]:typeof t=="function"&&(t=t());let e=t.id;typeof e!="string"?console.warn("Unrecognized plugin format; can't find plugin.id",t):this.registeredPlugins[e]===void 0?(this.registeredPlugins[e]=t,this.state==="loaded"&&typeof t.init=="function"&&t.init(this.Reveal)):console.warn('reveal.js: "'+e+'" plugin has already been registered')}hasPlugin(t){return!!this.registeredPlugins[t]}getPlugin(t){return this.registeredPlugins[t]}getRegisteredPlugins(){return this.registeredPlugins}destroy(){Object.values(this.registeredPlugins).forEach(t=>{typeof t.destroy=="function"&&t.destroy()}),this.registeredPlugins={},this.asyncDependencies=[]}}class dn{constructor(t){this.Reveal=t,this.touchStartX=0,this.touchStartY=0,this.touchStartCount=0,this.touchCaptured=!1,this.onPointerDown=this.onPointerDown.bind(this),this.onPointerMove=this.onPointerMove.bind(this),this.onPointerUp=this.onPointerUp.bind(this),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchMove=this.onTouchMove.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this)}bind(){let t=this.Reveal.getRevealElement();"onpointerdown"in window?(t.addEventListener("pointerdown",this.onPointerDown,!1),t.addEventListener("pointermove",this.onPointerMove,!1),t.addEventListener("pointerup",this.onPointerUp,!1)):window.navigator.msPointerEnabled?(t.addEventListener("MSPointerDown",this.onPointerDown,!1),t.addEventListener("MSPointerMove",this.onPointerMove,!1),t.addEventListener("MSPointerUp",this.onPointerUp,!1)):(t.addEventListener("touchstart",this.onTouchStart,!1),t.addEventListener("touchmove",this.onTouchMove,!1),t.addEventListener("touchend",this.onTouchEnd,!1))}unbind(){let t=this.Reveal.getRevealElement();t.removeEventListener("pointerdown",this.onPointerDown,!1),t.removeEventListener("pointermove",this.onPointerMove,!1),t.removeEventListener("pointerup",this.onPointerUp,!1),t.removeEventListener("MSPointerDown",this.onPointerDown,!1),t.removeEventListener("MSPointerMove",this.onPointerMove,!1),t.removeEventListener("MSPointerUp",this.onPointerUp,!1),t.removeEventListener("touchstart",this.onTouchStart,!1),t.removeEventListener("touchmove",this.onTouchMove,!1),t.removeEventListener("touchend",this.onTouchEnd,!1)}isSwipePrevented(t){if(jt(t,"video, audio"))return!0;for(;t&&typeof t.hasAttribute=="function";){if(t.hasAttribute("data-prevent-swipe"))return!0;t=t.parentNode}return!1}onTouchStart(t){if(this.isSwipePrevented(t.target))return!0;this.touchStartX=t.touches[0].clientX,this.touchStartY=t.touches[0].clientY,this.touchStartCount=t.touches.length}onTouchMove(t){if(this.isSwipePrevented(t.target))return!0;let e=this.Reveal.getConfig();if(this.touchCaptured)ze&&t.preventDefault();else{this.Reveal.onUserInput(t);let n=t.touches[0].clientX,r=t.touches[0].clientY;if(t.touches.length===1&&this.touchStartCount!==2){let u=this.Reveal.availableRoutes({includeFragments:!0}),d=n-this.touchStartX,p=r-this.touchStartY;d>40&&Math.abs(d)>Math.abs(p)?(this.touchCaptured=!0,e.navigationMode==="linear"?e.rtl?this.Reveal.next():this.Reveal.prev():this.Reveal.left()):d<-40&&Math.abs(d)>Math.abs(p)?(this.touchCaptured=!0,e.navigationMode==="linear"?e.rtl?this.Reveal.prev():this.Reveal.next():this.Reveal.right()):p>40&&u.up?(this.touchCaptured=!0,e.navigationMode==="linear"?this.Reveal.prev():this.Reveal.up()):p<-40&&u.down&&(this.touchCaptured=!0,e.navigationMode==="linear"?this.Reveal.next():this.Reveal.down()),e.embedded?(this.touchCaptured||this.Reveal.isVerticalSlide())&&t.preventDefault():t.preventDefault()}}}onTouchEnd(t){this.touchCaptured=!1}onPointerDown(t){t.pointerType!==t.MSPOINTER_TYPE_TOUCH&&t.pointerType!=="touch"||(t.touches=[{clientX:t.clientX,clientY:t.clientY}],this.onTouchStart(t))}onPointerMove(t){t.pointerType!==t.MSPOINTER_TYPE_TOUCH&&t.pointerType!=="touch"||(t.touches=[{clientX:t.clientX,clientY:t.clientY}],this.onTouchMove(t))}onPointerUp(t){t.pointerType!==t.MSPOINTER_TYPE_TOUCH&&t.pointerType!=="touch"||(t.touches=[{clientX:t.clientX,clientY:t.clientY}],this.onTouchEnd(t))}}const ie="focus",Ne="blur";class hn{constructor(t){this.Reveal=t,this.onRevealPointerDown=this.onRevealPointerDown.bind(this),this.onDocumentPointerDown=this.onDocumentPointerDown.bind(this)}configure(t,e){t.embedded?this.blur():(this.focus(),this.unbind())}bind(){this.Reveal.getConfig().embedded&&this.Reveal.getRevealElement().addEventListener("pointerdown",this.onRevealPointerDown,!1)}unbind(){this.Reveal.getRevealElement().removeEventListener("pointerdown",this.onRevealPointerDown,!1),document.removeEventListener("pointerdown",this.onDocumentPointerDown,!1)}focus(){this.state!==ie&&(this.Reveal.getRevealElement().classList.add("focused"),document.addEventListener("pointerdown",this.onDocumentPointerDown,!1)),this.state=ie}blur(){this.state!==Ne&&(this.Reveal.getRevealElement().classList.remove("focused"),document.removeEventListener("pointerdown",this.onDocumentPointerDown,!1)),this.state=Ne}isFocused(){return this.state===ie}destroy(){this.Reveal.getRevealElement().classList.remove("focused")}onRevealPointerDown(t){this.focus()}onDocumentPointerDown(t){let e=lt(t.target,".reveal");e&&e===this.Reveal.getRevealElement()||this.blur()}}class un{constructor(t){this.Reveal=t}render(){this.element=document.createElement("div"),this.element.className="speaker-notes",this.element.setAttribute("data-prevent-swipe",""),this.element.setAttribute("tabindex","0"),this.Reveal.getRevealElement().appendChild(this.element)}configure(t,e){t.showNotes&&this.element.setAttribute("data-layout",typeof t.showNotes=="string"?t.showNotes:"inline")}update(){this.Reveal.getConfig().showNotes&&this.element&&this.Reveal.getCurrentSlide()&&!this.Reveal.isScrollView()&&!this.Reveal.isPrintView()&&(this.element.innerHTML=this.getSlideNotes()||'<span class="notes-placeholder">No notes on this slide.</span>')}updateVisibility(){this.Reveal.getConfig().showNotes&&this.hasNotes()&&!this.Reveal.isScrollView()&&!this.Reveal.isPrintView()?this.Reveal.getRevealElement().classList.add("show-notes"):this.Reveal.getRevealElement().classList.remove("show-notes")}hasNotes(){return this.Reveal.getSlidesElement().querySelectorAll("[data-notes], aside.notes").length>0}isSpeakerNotesWindow(){return!!window.location.search.match(/receiver/gi)}getSlideNotes(t=this.Reveal.getCurrentSlide()){if(t.hasAttribute("data-notes"))return t.getAttribute("data-notes");let e=t.querySelectorAll("aside.notes");return e?Array.from(e).map(n=>n.innerHTML).join(`
`):null}destroy(){this.element.remove()}}class gn{constructor(t,e){this.diameter=100,this.diameter2=this.diameter/2,this.thickness=6,this.playing=!1,this.progress=0,this.progressOffset=1,this.container=t,this.progressCheck=e,this.canvas=document.createElement("canvas"),this.canvas.className="playback",this.canvas.width=this.diameter,this.canvas.height=this.diameter,this.canvas.style.width=this.diameter2+"px",this.canvas.style.height=this.diameter2+"px",this.context=this.canvas.getContext("2d"),this.container.appendChild(this.canvas),this.render()}setPlaying(t){const e=this.playing;this.playing=t,!e&&this.playing?this.animate():this.render()}animate(){const t=this.progress;this.progress=this.progressCheck(),t>.8&&this.progress<.2&&(this.progressOffset=this.progress),this.render(),this.playing&&requestAnimationFrame(this.animate.bind(this))}render(){let t=this.playing?this.progress:0,e=this.diameter2-this.thickness,n=this.diameter2,r=this.diameter2,u=28;this.progressOffset+=.1*(1-this.progressOffset);const d=-Math.PI/2+t*(2*Math.PI),p=-Math.PI/2+this.progressOffset*(2*Math.PI);this.context.save(),this.context.clearRect(0,0,this.diameter,this.diameter),this.context.beginPath(),this.context.arc(n,r,e+4,0,2*Math.PI,!1),this.context.fillStyle="rgba( 0, 0, 0, 0.4 )",this.context.fill(),this.context.beginPath(),this.context.arc(n,r,e,0,2*Math.PI,!1),this.context.lineWidth=this.thickness,this.context.strokeStyle="rgba( 255, 255, 255, 0.2 )",this.context.stroke(),this.playing&&(this.context.beginPath(),this.context.arc(n,r,e,p,d,!1),this.context.lineWidth=this.thickness,this.context.strokeStyle="#fff",this.context.stroke()),this.context.translate(n-14,r-14),this.playing?(this.context.fillStyle="#fff",this.context.fillRect(0,0,10,u),this.context.fillRect(18,0,10,u)):(this.context.beginPath(),this.context.translate(4,0),this.context.moveTo(0,0),this.context.lineTo(24,14),this.context.lineTo(0,u),this.context.fillStyle="#fff",this.context.fill()),this.context.restore()}on(t,e){this.canvas.addEventListener(t,e,!1)}off(t,e){this.canvas.removeEventListener(t,e,!1)}destroy(){this.playing=!1,this.canvas.parentNode&&this.container.removeChild(this.canvas)}}var pn={width:960,height:700,margin:.04,minScale:.2,maxScale:2,controls:!0,controlsTutorial:!0,controlsLayout:"bottom-right",controlsBackArrows:"faded",progress:!0,slideNumber:!1,showSlideNumber:"all",hashOneBasedIndex:!1,hash:!1,respondToHashChanges:!0,jumpToSlide:!0,history:!1,keyboard:!0,keyboardCondition:null,disableLayout:!1,overview:!0,center:!0,touch:!0,loop:!1,rtl:!1,navigationMode:"default",shuffle:!1,fragments:!0,fragmentInURL:!0,embedded:!1,help:!0,pause:!0,showNotes:!1,showHiddenSlides:!1,autoPlayMedia:null,preloadIframes:null,autoAnimate:!0,autoAnimateMatcher:null,autoAnimateEasing:"ease",autoAnimateDuration:1,autoAnimateUnmatched:!0,autoAnimateStyles:["opacity","color","background-color","padding","font-size","line-height","letter-spacing","border-width","border-color","border-radius","outline","outline-offset"],autoSlide:0,autoSlideStoppable:!0,autoSlideMethod:null,defaultTiming:null,mouseWheel:!1,previewLinks:!1,postMessage:!0,postMessageEvents:!1,focusBodyOnPageVisibilityChange:!0,transition:"slide",transitionSpeed:"default",backgroundTransition:"fade",parallaxBackgroundImage:"",parallaxBackgroundSize:"",parallaxBackgroundRepeat:"",parallaxBackgroundPosition:"",parallaxBackgroundHorizontal:null,parallaxBackgroundVertical:null,view:null,scrollLayout:"full",scrollSnap:"mandatory",scrollProgress:"auto",scrollActivationWidth:435,pdfMaxPagesPerSlide:Number.POSITIVE_INFINITY,pdfSeparateFragments:!0,pdfPageHeightOffset:-1,viewDistance:3,mobileViewDistance:2,display:"block",hideInactiveCursor:!0,hideCursorTime:5e3,sortFragmentsOnSync:!0,dependencies:[],plugins:[]};const Be="5.0.5";function _e(b,t){arguments.length<2&&(t=arguments[0],b=document.querySelector(".reveal"));const e={};let n,r,u,d,p,h={},I=!1,v={hasNavigatedHorizontally:!1,hasNavigatedVertically:!1},E=[],L=1,f={layout:"",overview:""},c={},$="idle",X=0,st=0,at=-1,rt=!1,U=new Ke(e),J=new Ye(e),V=new Ze(e),dt=new Qe(e),W=new Je(e),H=new Ge(e),w=new tn(e),_=new en(e),R=new nn(e),T=new sn(e),ct=new an(e),it=new rn(e),K=new on(e),Pt=new ln(e),ht=new cn(e),vt=new hn(e),pt=new dn(e),ot=new un(e);function Ht(){I=!0,h.showHiddenSlides||q(c.wrapper,'section[data-visibility="hidden"]').forEach(l=>{const g=l.parentNode;g.childElementCount===1&&/section/i.test(g.nodeName)?g.remove():l.remove()}),function(){c.slides.classList.add("no-transition"),zt?c.wrapper.classList.add("no-hover"):c.wrapper.classList.remove("no-hover"),W.render(),J.render(),V.render(),it.render(),K.render(),ot.render(),c.pauseOverlay=((l,g,S,A="")=>{let C=l.querySelectorAll("."+S);for(let j=0;j<C.length;j++){let Z=C[j];if(Z.parentNode===l)return Z}let F=document.createElement(g);return F.className=S,F.innerHTML=A,l.appendChild(F),F})(c.wrapper,"div","pause-overlay",h.controls?'<button class="resume-button">Resume presentation</button>':null),c.statusElement=function(){let l=c.wrapper.querySelector(".aria-status");return l||(l=document.createElement("div"),l.style.position="absolute",l.style.height="1px",l.style.width="1px",l.style.overflow="hidden",l.style.clip="rect( 1px, 1px, 1px, 1px )",l.classList.add("aria-status"),l.setAttribute("aria-live","polite"),l.setAttribute("aria-atomic","true"),c.wrapper.appendChild(l)),l}(),c.wrapper.setAttribute("role","application")}(),h.postMessage&&window.addEventListener("message",be,!1),setInterval(()=>{(!H.isActive()&&c.wrapper.scrollTop!==0||c.wrapper.scrollLeft!==0)&&(c.wrapper.scrollTop=0,c.wrapper.scrollLeft=0)},1e3),document.addEventListener("fullscreenchange",Ut),document.addEventListener("webkitfullscreenchange",Ut),Et().forEach(l=>{q(l,"section").forEach((g,S)=>{S>0&&(g.classList.remove("present"),g.classList.remove("past"),g.classList.add("future"),g.setAttribute("aria-hidden","true"))})}),a(),W.update(!0),function(){const l=h.view==="print",g=h.view==="scroll"||h.view==="reader";(l||g)&&(l?i():pt.unbind(),c.viewport.classList.add("loading-scroll-mode"),l?document.readyState==="complete"?w.activate():window.addEventListener("load",()=>w.activate()):H.activate())}(),ct.readURL(),setTimeout(()=>{c.slides.classList.remove("no-transition"),c.wrapper.classList.add("ready"),m({type:"ready",data:{indexh:n,indexv:r,currentSlide:d}})},1)}function D(l){c.statusElement.textContent=l}function B(l){let g="";if(l.nodeType===3)g+=l.textContent;else if(l.nodeType===1){let S=l.getAttribute("aria-hidden"),A=window.getComputedStyle(l).display==="none";S==="true"||A||Array.from(l.childNodes).forEach(C=>{g+=B(C)})}return g=g.trim(),g===""?"":g+" "}function a(l){const g={...h};if(typeof l=="object"&&Mt(h,l),e.isReady()===!1)return;const S=c.wrapper.querySelectorAll(Ct).length;c.wrapper.classList.remove(g.transition),c.wrapper.classList.add(h.transition),c.wrapper.setAttribute("data-transition-speed",h.transitionSpeed),c.wrapper.setAttribute("data-background-transition",h.backgroundTransition),c.viewport.style.setProperty("--slide-width",typeof h.width=="string"?h.width:h.width+"px"),c.viewport.style.setProperty("--slide-height",typeof h.height=="string"?h.height:h.height+"px"),h.shuffle&&Kt(),ee(c.wrapper,"embedded",h.embedded),ee(c.wrapper,"rtl",h.rtl),ee(c.wrapper,"center",h.center),h.pause===!1&&_t(),h.previewLinks?(z(),P("[data-preview-link=false]")):(P(),z("[data-preview-link]:not([data-preview-link=false])")),dt.reset(),p&&(p.destroy(),p=null),S>1&&h.autoSlide&&h.autoSlideStoppable&&(p=new gn(c.wrapper,()=>Math.min(Math.max((Date.now()-at)/X,0),1)),p.on("click",Oe),rt=!1),h.navigationMode!=="default"?c.wrapper.setAttribute("data-navigation-mode",h.navigationMode):c.wrapper.removeAttribute("data-navigation-mode"),ot.configure(h,g),vt.configure(h,g),Pt.configure(h,g),it.configure(h,g),K.configure(h,g),T.configure(h,g),_.configure(h,g),J.configure(h,g),re()}function s(){window.addEventListener("resize",Se,!1),h.touch&&pt.bind(),h.keyboard&&T.bind(),h.progress&&K.bind(),h.respondToHashChanges&&ct.bind(),it.bind(),vt.bind(),c.slides.addEventListener("click",ke,!1),c.slides.addEventListener("transitionend",we,!1),c.pauseOverlay.addEventListener("click",_t,!1),h.focusBodyOnPageVisibilityChange&&document.addEventListener("visibilitychange",xe,!1)}function i(){pt.unbind(),vt.unbind(),T.unbind(),it.unbind(),K.unbind(),ct.unbind(),window.removeEventListener("resize",Se,!1),c.slides.removeEventListener("click",ke,!1),c.slides.removeEventListener("transitionend",we,!1),c.pauseOverlay.removeEventListener("click",_t,!1)}function o(l,g,S){b.addEventListener(l,g,S)}function k(l,g,S){b.removeEventListener(l,g,S)}function y(l){typeof l.layout=="string"&&(f.layout=l.layout),typeof l.overview=="string"&&(f.overview=l.overview),f.layout?Lt(c.slides,f.layout+" "+f.overview):Lt(c.slides,f.overview)}function m({target:l=c.wrapper,type:g,data:S,bubbles:A=!0}){let C=document.createEvent("HTMLEvents",1,2);return C.initEvent(g,A,!0),Mt(C,S),l.dispatchEvent(C),l===c.wrapper&&N(g),C}function x(l){m({type:"slidechanged",data:{indexh:n,indexv:r,previousSlide:u,currentSlide:d,origin:l}})}function N(l,g){if(h.postMessageEvents&&window.parent!==window.self){let S={namespace:"reveal",eventName:l,state:ve()};Mt(S,g),window.parent.postMessage(JSON.stringify(S),"*")}}function z(l="a"){Array.from(c.wrapper.querySelectorAll(l)).forEach(g=>{/^(http|www)/gi.test(g.getAttribute("href"))&&g.addEventListener("click",Ee,!1)})}function P(l="a"){Array.from(c.wrapper.querySelectorAll(l)).forEach(g=>{/^(http|www)/gi.test(g.getAttribute("href"))&&g.removeEventListener("click",Ee,!1)})}function M(l){tt(),c.overlay=document.createElement("div"),c.overlay.classList.add("overlay"),c.overlay.classList.add("overlay-preview"),c.wrapper.appendChild(c.overlay),c.overlay.innerHTML=`<header>
				<a class="close" href="#"><span class="icon"></span></a>
				<a class="external" href="${l}" target="_blank"><span class="icon"></span></a>
			</header>
			<div class="spinner"></div>
			<div class="viewport">
				<iframe src="${l}"></iframe>
				<small class="viewport-inner">
					<span class="x-frame-error">Unable to load iframe. This is likely due to the site's policy (x-frame-options).</span>
				</small>
			</div>`,c.overlay.querySelector("iframe").addEventListener("load",g=>{c.overlay.classList.add("loaded")},!1),c.overlay.querySelector(".close").addEventListener("click",g=>{tt(),g.preventDefault()},!1),c.overlay.querySelector(".external").addEventListener("click",g=>{tt()},!1)}function Y(){if(h.help){tt(),c.overlay=document.createElement("div"),c.overlay.classList.add("overlay"),c.overlay.classList.add("overlay-help"),c.wrapper.appendChild(c.overlay);let l='<p class="title">Keyboard Shortcuts</p><br/>',g=T.getShortcuts(),S=T.getBindings();l+="<table><th>KEY</th><th>ACTION</th>";for(let A in g)l+=`<tr><td>${A}</td><td>${g[A]}</td></tr>`;for(let A in S)S[A].key&&S[A].description&&(l+=`<tr><td>${S[A].key}</td><td>${S[A].description}</td></tr>`);l+="</table>",c.overlay.innerHTML=`
				<header>
					<a class="close" href="#"><span class="icon"></span></a>
				</header>
				<div class="viewport">
					<div class="viewport-inner">${l}</div>
				</div>
			`,c.overlay.querySelector(".close").addEventListener("click",A=>{tt(),A.preventDefault()},!1)}}function tt(){return!!c.overlay&&(c.overlay.parentNode.removeChild(c.overlay),c.overlay=null,!0)}function et(){if(c.wrapper&&!w.isActive()){const l=c.viewport.offsetWidth,g=c.viewport.offsetHeight;if(!h.disableLayout){zt&&!h.embedded&&document.documentElement.style.setProperty("--vh",.01*window.innerHeight+"px");const S=H.isActive()?O(l,g):O(),A=L;mt(h.width,h.height),c.slides.style.width=S.width+"px",c.slides.style.height=S.height+"px",L=Math.min(S.presentationWidth/S.width,S.presentationHeight/S.height),L=Math.max(L,h.minScale),L=Math.min(L,h.maxScale),L===1||H.isActive()?(c.slides.style.zoom="",c.slides.style.left="",c.slides.style.top="",c.slides.style.bottom="",c.slides.style.right="",y({layout:""})):(c.slides.style.zoom="",c.slides.style.left="50%",c.slides.style.top="50%",c.slides.style.bottom="auto",c.slides.style.right="auto",y({layout:"translate(-50%, -50%) scale("+L+")"}));const C=Array.from(c.wrapper.querySelectorAll(Ct));for(let F=0,j=C.length;F<j;F++){const Z=C[F];Z.style.display!=="none"&&(h.center||Z.classList.contains("center")?Z.classList.contains("stack")?Z.style.top=0:Z.style.top=Math.max((S.height-Z.scrollHeight)/2,0)+"px":Z.style.top="")}A!==L&&m({type:"resize",data:{oldScale:A,scale:L,size:S}})}(function(){if(c.wrapper&&!h.disableLayout&&!w.isActive()&&typeof h.scrollActivationWidth=="number"&&h.view!=="scroll"){const S=O();S.presentationWidth>0&&S.presentationWidth<=h.scrollActivationWidth?H.isActive()||(W.create(),H.activate()):H.isActive()&&H.deactivate()}})(),c.viewport.style.setProperty("--slide-scale",L),c.viewport.style.setProperty("--viewport-width",l+"px"),c.viewport.style.setProperty("--viewport-height",g+"px"),H.layout(),K.update(),W.updateParallax(),R.isActive()&&R.update()}}function mt(l,g){q(c.slides,"section > .stretch, section > .r-stretch").forEach(S=>{let A=((C,F=0)=>{if(C){let j,Z=C.style.height;return C.style.height="0px",C.parentNode.style.height="auto",j=F-C.parentNode.offsetHeight,C.style.height=Z+"px",C.parentNode.style.removeProperty("height"),j}return F})(S,g);if(/(img|video)/gi.test(S.nodeName)){const C=S.naturalWidth||S.videoWidth,F=S.naturalHeight||S.videoHeight,j=Math.min(l/C,A/F);S.style.width=C*j+"px",S.style.height=F*j+"px"}else S.style.width=l+"px",S.style.height=A+"px"})}function O(l,g){let S=h.width,A=h.height;h.disableLayout&&(S=c.slides.offsetWidth,A=c.slides.offsetHeight);const C={width:S,height:A,presentationWidth:l||c.wrapper.offsetWidth,presentationHeight:g||c.wrapper.offsetHeight};return C.presentationWidth-=C.presentationWidth*h.margin,C.presentationHeight-=C.presentationHeight*h.margin,typeof C.width=="string"&&/%$/.test(C.width)&&(C.width=parseInt(C.width,10)/100*C.presentationWidth),typeof C.height=="string"&&/%$/.test(C.height)&&(C.height=parseInt(C.height,10)/100*C.presentationHeight),C}function St(l,g){typeof l=="object"&&typeof l.setAttribute=="function"&&l.setAttribute("data-previous-indexv",g||0)}function xt(l){if(typeof l=="object"&&typeof l.setAttribute=="function"&&l.classList.contains("stack")){const g=l.hasAttribute("data-start-indexv")?"data-start-indexv":"data-previous-indexv";return parseInt(l.getAttribute(g)||0,10)}return 0}function nt(l=d){return l&&l.parentNode&&!!l.parentNode.nodeName.match(/section/i)}function ft(){return!(!d||!nt(d))&&!d.nextElementSibling}function G(){return n===0&&r===0}function bt(){return!!d&&!d.nextElementSibling&&(!nt(d)||!d.parentNode.nextElementSibling)}function Bt(){if(h.pause){const l=c.wrapper.classList.contains("paused");Dt(),c.wrapper.classList.add("paused"),l===!1&&m({type:"paused"})}}function _t(){const l=c.wrapper.classList.contains("paused");c.wrapper.classList.remove("paused"),Nt(),l&&m({type:"resumed"})}function ae(l){typeof l=="boolean"?l?Bt():_t():$t()?_t():Bt()}function $t(){return c.wrapper.classList.contains("paused")}function yt(l,g,S,A){if(m({type:"beforeslidechange",data:{indexh:l===void 0?n:l,indexv:g===void 0?r:g,origin:A}}).defaultPrevented)return;u=d;const C=c.wrapper.querySelectorAll(At);if(H.isActive()){const gt=H.getSlideByIndices(l,g);return void(gt&&H.scrollToSlide(gt))}if(C.length===0)return;g!==void 0||R.isActive()||(g=xt(C[l])),u&&u.parentNode&&u.parentNode.classList.contains("stack")&&St(u.parentNode,r);const F=E.concat();E.length=0;let j=n||0,Z=r||0;n=oe(At,l===void 0?n:l),r=oe(Le,g===void 0?r:g);let kt=n!==j||r!==Z;kt||(u=null);let Tt=C[n];d=Tt.querySelectorAll("section")[r]||Tt;let Q=!1;kt&&u&&d&&!R.isActive()&&($="running",Q=Vt(u,d,j,Z),Q&&c.slides.classList.add("disable-slide-transitions")),Xt(),et(),R.isActive()&&R.update(),S!==void 0&&_.goto(S),u&&u!==d&&(u.classList.remove("present"),u.setAttribute("aria-hidden","true"),G()&&setTimeout(()=>{q(c.wrapper,At+".stack").forEach(gt=>{St(gt,0)})},0));t:for(let gt=0,Fe=E.length;gt<Fe;gt++){for(let Wt=0;Wt<F.length;Wt++)if(F[Wt]===E[gt]){F.splice(Wt,1);continue t}c.viewport.classList.add(E[gt]),m({type:E[gt]})}for(;F.length;)c.viewport.classList.remove(F.pop());kt&&x(A),!kt&&u||(U.stopEmbeddedContent(u),U.startEmbeddedContent(d)),requestAnimationFrame(()=>{D(B(d))}),K.update(),it.update(),ot.update(),W.update(),W.updateParallax(),J.update(),_.update(),ct.writeURL(),Nt(),Q&&(setTimeout(()=>{c.slides.classList.remove("disable-slide-transitions")},0),h.autoAnimate&&dt.run(u,d))}function Vt(l,g,S,A){return l.hasAttribute("data-auto-animate")&&g.hasAttribute("data-auto-animate")&&l.getAttribute("data-auto-animate-id")===g.getAttribute("data-auto-animate-id")&&!(n>S||r>A?g:l).hasAttribute("data-auto-animate-restart")}function re(){i(),s(),et(),X=h.autoSlide,Nt(),W.create(),ct.writeURL(),h.sortFragmentsOnSync===!0&&_.sortAll(),it.update(),K.update(),Xt(),ot.update(),ot.updateVisibility(),W.update(!0),J.update(),U.formatEmbeddedContent(),h.autoPlayMedia===!1?U.stopEmbeddedContent(d,{unloadIframes:!1}):U.startEmbeddedContent(d),R.isActive()&&R.layout()}function Kt(l=Et()){l.forEach((g,S)=>{let A=l[Math.floor(Math.random()*l.length)];A.parentNode===g.parentNode&&g.parentNode.insertBefore(g,A);let C=g.querySelectorAll("section");C.length&&Kt(C)})}function oe(l,g){let S=q(c.wrapper,l),A=S.length,C=H.isActive()||w.isActive(),F=!1,j=!1;if(A){h.loop&&(g>=A&&(F=!0),(g%=A)<0&&(g=A+g,j=!0)),g=Math.max(Math.min(g,A-1),0);for(let ut=0;ut<A;ut++){let Q=S[ut],gt=h.rtl&&!nt(Q);Q.classList.remove("past"),Q.classList.remove("present"),Q.classList.remove("future"),Q.setAttribute("hidden",""),Q.setAttribute("aria-hidden","true"),Q.querySelector("section")&&Q.classList.add("stack"),C?Q.classList.add("present"):ut<g?(Q.classList.add(gt?"future":"past"),h.fragments&&le(Q)):ut>g?(Q.classList.add(gt?"past":"future"),h.fragments&&ce(Q)):ut===g&&h.fragments&&(F?ce(Q):j&&le(Q))}let Z=S[g],kt=Z.classList.contains("present");Z.classList.add("present"),Z.removeAttribute("hidden"),Z.removeAttribute("aria-hidden"),kt||m({target:Z,type:"visible",bubbles:!1});let Tt=Z.getAttribute("data-state");Tt&&(E=E.concat(Tt.split(" ")))}else g=0;return g}function le(l){q(l,".fragment").forEach(g=>{g.classList.add("visible"),g.classList.remove("current-fragment")})}function ce(l){q(l,".fragment.visible").forEach(g=>{g.classList.remove("visible","current-fragment")})}function Xt(){let l,g,S=Et(),A=S.length;if(A&&n!==void 0){let C=R.isActive()?10:h.viewDistance;zt&&(C=R.isActive()?6:h.mobileViewDistance),w.isActive()&&(C=Number.MAX_VALUE);for(let F=0;F<A;F++){let j=S[F],Z=q(j,"section"),kt=Z.length;if(l=Math.abs((n||0)-F)||0,h.loop&&(l=Math.abs(((n||0)-F)%(A-C))||0),l<C?U.load(j):U.unload(j),kt){let Tt=xt(j);for(let ut=0;ut<kt;ut++){let Q=Z[ut];g=Math.abs(F===(n||0)?(r||0)-ut:ut-Tt),l+g<C?U.load(Q):U.unload(Q)}}}pe()?c.wrapper.classList.add("has-vertical-slides"):c.wrapper.classList.remove("has-vertical-slides"),ge()?c.wrapper.classList.add("has-horizontal-slides"):c.wrapper.classList.remove("has-horizontal-slides")}}function wt({includeFragments:l=!1}={}){let g=c.wrapper.querySelectorAll(At),S=c.wrapper.querySelectorAll(Le),A={left:n>0,right:n<g.length-1,up:r>0,down:r<S.length-1};if(h.loop&&(g.length>1&&(A.left=!0,A.right=!0),S.length>1&&(A.up=!0,A.down=!0)),g.length>1&&h.navigationMode==="linear"&&(A.right=A.right||A.down,A.left=A.left||A.up),l===!0){let C=_.availableRoutes();A.left=A.left||C.prev,A.up=A.up||C.prev,A.down=A.down||C.next,A.right=A.right||C.next}if(h.rtl){let C=A.left;A.left=A.right,A.right=C}return A}function de(l=d){let g=Et(),S=0;t:for(let A=0;A<g.length;A++){let C=g[A],F=C.querySelectorAll("section");for(let j=0;j<F.length;j++){if(F[j]===l)break t;F[j].dataset.visibility!=="uncounted"&&S++}if(C===l)break;C.classList.contains("stack")===!1&&C.dataset.visibility!=="uncounted"&&S++}return S}function he(l){let g,S=n,A=r;if(l)if(H.isActive())S=parseInt(l.getAttribute("data-index-h"),10),l.getAttribute("data-index-v")&&(A=parseInt(l.getAttribute("data-index-v"),10));else{let C=nt(l),F=C?l.parentNode:l,j=Et();S=Math.max(j.indexOf(F),0),A=void 0,C&&(A=Math.max(q(l.parentNode,"section").indexOf(l),0))}if(!l&&d&&d.querySelectorAll(".fragment").length>0){let C=d.querySelector(".current-fragment");g=C&&C.hasAttribute("data-fragment-index")?parseInt(C.getAttribute("data-fragment-index"),10):d.querySelectorAll(".fragment.visible").length-1}return{h:S,v:A,f:g}}function Yt(){return q(c.wrapper,Ct+':not(.stack):not([data-visibility="uncounted"])')}function Et(){return q(c.wrapper,At)}function ue(){return q(c.wrapper,".slides>section>section")}function ge(){return Et().length>1}function pe(){return ue().length>1}function me(){return Yt().length}function fe(l,g){let S=Et()[l],A=S&&S.querySelectorAll("section");return A&&A.length&&typeof g=="number"?A?A[g]:void 0:S}function ve(){let l=he();return{indexh:l.h,indexv:l.v,indexf:l.f,paused:$t(),overview:R.isActive()}}function Nt(){if(Dt(),d&&h.autoSlide!==!1){let l=d.querySelector(".current-fragment[data-autoslide]"),g=l?l.getAttribute("data-autoslide"):null,S=d.parentNode?d.parentNode.getAttribute("data-autoslide"):null,A=d.getAttribute("data-autoslide");g?X=parseInt(g,10):A?X=parseInt(A,10):S?X=parseInt(S,10):(X=h.autoSlide,d.querySelectorAll(".fragment").length===0&&q(d,"video, audio").forEach(C=>{C.hasAttribute("data-autoplay")&&X&&1e3*C.duration/C.playbackRate>X&&(X=1e3*C.duration/C.playbackRate+1e3)})),!X||rt||$t()||R.isActive()||bt()&&!_.availableRoutes().next&&h.loop!==!0||(st=setTimeout(()=>{typeof h.autoSlideMethod=="function"?h.autoSlideMethod():Gt(),Nt()},X),at=Date.now()),p&&p.setPlaying(st!==-1)}}function Dt(){clearTimeout(st),st=-1}function qt(){X&&!rt&&(rt=!0,m({type:"autoslidepaused"}),clearTimeout(st),p&&p.setPlaying(!1))}function Ot(){X&&rt&&(rt=!1,m({type:"autoslideresumed"}),Nt())}function Ft({skipFragments:l=!1}={}){if(v.hasNavigatedHorizontally=!0,H.isActive())return H.prev();h.rtl?(R.isActive()||l||_.next()===!1)&&wt().left&&yt(n+1,h.navigationMode==="grid"?r:void 0):(R.isActive()||l||_.prev()===!1)&&wt().left&&yt(n-1,h.navigationMode==="grid"?r:void 0)}function Zt({skipFragments:l=!1}={}){if(v.hasNavigatedHorizontally=!0,H.isActive())return H.next();h.rtl?(R.isActive()||l||_.prev()===!1)&&wt().right&&yt(n-1,h.navigationMode==="grid"?r:void 0):(R.isActive()||l||_.next()===!1)&&wt().right&&yt(n+1,h.navigationMode==="grid"?r:void 0)}function Jt({skipFragments:l=!1}={}){if(H.isActive())return H.prev();(R.isActive()||l||_.prev()===!1)&&wt().up&&yt(n,r-1)}function Qt({skipFragments:l=!1}={}){if(v.hasNavigatedVertically=!0,H.isActive())return H.next();(R.isActive()||l||_.next()===!1)&&wt().down&&yt(n,r+1)}function ye({skipFragments:l=!1}={}){if(H.isActive())return H.prev();if(l||_.prev()===!1)if(wt().up)Jt({skipFragments:l});else{let g;if(g=h.rtl?q(c.wrapper,At+".future").pop():q(c.wrapper,At+".past").pop(),g&&g.classList.contains("stack")){let S=g.querySelectorAll("section").length-1||void 0;yt(n-1,S)}else Ft({skipFragments:l})}}function Gt({skipFragments:l=!1}={}){if(v.hasNavigatedHorizontally=!0,v.hasNavigatedVertically=!0,H.isActive())return H.next();if(l||_.next()===!1){let g=wt();g.down&&g.right&&h.loop&&ft()&&(g.down=!1),g.down?Qt({skipFragments:l}):h.rtl?Ft({skipFragments:l}):Zt({skipFragments:l})}}function be(l){let g=l.data;if(typeof g=="string"&&g.charAt(0)==="{"&&g.charAt(g.length-1)==="}"&&(g=JSON.parse(g),g.method&&typeof e[g.method]=="function"))if(Xe.test(g.method)===!1){const S=e[g.method].apply(e,g.args);N("callback",{method:g.method,result:S})}else console.warn('reveal.js: "'+g.method+'" is is blacklisted from the postMessage API')}function we(l){$==="running"&&/section/gi.test(l.target.nodeName)&&($="idle",m({type:"slidetransitionend",data:{indexh:n,indexv:r,previousSlide:u,currentSlide:d}}))}function ke(l){const g=lt(l.target,'a[href^="#"]');if(g){const S=g.getAttribute("href"),A=ct.getIndicesFromHash(S);A&&(e.slide(A.h,A.v,A.f),l.preventDefault())}}function Se(l){et()}function xe(l){document.hidden===!1&&document.activeElement!==document.body&&(typeof document.activeElement.blur=="function"&&document.activeElement.blur(),document.body.focus())}function Ut(l){(document.fullscreenElement||document.webkitFullscreenElement)===c.wrapper&&(l.stopImmediatePropagation(),setTimeout(()=>{e.layout(),e.focus.focus()},1))}function Ee(l){if(l.currentTarget&&l.currentTarget.hasAttribute("href")){let g=l.currentTarget.getAttribute("href");g&&(M(g),l.preventDefault())}}function Oe(l){bt()&&h.loop===!1?(yt(0,0),Ot()):rt?Ot():qt()}const Ae={VERSION:Be,initialize:function(l){if(!b)throw'Unable to find presentation root (<div class="reveal">).';if(c.wrapper=b,c.slides=b.querySelector(".slides"),!c.slides)throw'Unable to find slides container (<div class="slides">).';return h={...pn,...h,...t,...l,...Re()},/print-pdf/gi.test(window.location.search)&&(h.view="print"),function(){h.embedded===!0?c.viewport=lt(b,".reveal-viewport")||b:(c.viewport=document.body,document.documentElement.classList.add("reveal-full-page")),c.viewport.classList.add("reveal-viewport")}(),window.addEventListener("load",et,!1),ht.load(h.plugins,h.dependencies).then(Ht),new Promise(g=>e.on("ready",g))},configure:a,destroy:function(){i(),Dt(),P(),ot.destroy(),vt.destroy(),ht.destroy(),Pt.destroy(),it.destroy(),K.destroy(),W.destroy(),J.destroy(),V.destroy(),document.removeEventListener("fullscreenchange",Ut),document.removeEventListener("webkitfullscreenchange",Ut),document.removeEventListener("visibilitychange",xe,!1),window.removeEventListener("message",be,!1),window.removeEventListener("load",et,!1),c.pauseOverlay&&c.pauseOverlay.remove(),c.statusElement&&c.statusElement.remove(),document.documentElement.classList.remove("reveal-full-page"),c.wrapper.classList.remove("ready","center","has-horizontal-slides","has-vertical-slides"),c.wrapper.removeAttribute("data-transition-speed"),c.wrapper.removeAttribute("data-background-transition"),c.viewport.classList.remove("reveal-viewport"),c.viewport.style.removeProperty("--slide-width"),c.viewport.style.removeProperty("--slide-height"),c.slides.style.removeProperty("width"),c.slides.style.removeProperty("height"),c.slides.style.removeProperty("zoom"),c.slides.style.removeProperty("left"),c.slides.style.removeProperty("top"),c.slides.style.removeProperty("bottom"),c.slides.style.removeProperty("right"),c.slides.style.removeProperty("transform"),Array.from(c.wrapper.querySelectorAll(Ct)).forEach(l=>{l.style.removeProperty("display"),l.style.removeProperty("top"),l.removeAttribute("hidden"),l.removeAttribute("aria-hidden")})},sync:re,syncSlide:function(l=d){W.sync(l),_.sync(l),U.load(l),W.update(),ot.update()},syncFragments:_.sync.bind(_),slide:yt,left:Ft,right:Zt,up:Jt,down:Qt,prev:ye,next:Gt,navigateLeft:Ft,navigateRight:Zt,navigateUp:Jt,navigateDown:Qt,navigatePrev:ye,navigateNext:Gt,navigateFragment:_.goto.bind(_),prevFragment:_.prev.bind(_),nextFragment:_.next.bind(_),on:o,off:k,addEventListener:o,removeEventListener:k,layout:et,shuffle:Kt,availableRoutes:wt,availableFragments:_.availableRoutes.bind(_),toggleHelp:function(l){typeof l=="boolean"?l?Y():tt():c.overlay?tt():Y()},toggleOverview:R.toggle.bind(R),toggleScrollView:H.toggle.bind(H),togglePause:ae,toggleAutoSlide:function(l){typeof l=="boolean"?l?Ot():qt():rt?Ot():qt()},toggleJumpToSlide:function(l){typeof l=="boolean"?l?V.show():V.hide():V.isVisible()?V.hide():V.show()},isFirstSlide:G,isLastSlide:bt,isLastVerticalSlide:ft,isVerticalSlide:nt,isVerticalStack:function(l=d){return l.classList.contains(".stack")||l.querySelector("section")!==null},isPaused:$t,isAutoSliding:function(){return!(!X||rt)},isSpeakerNotes:ot.isSpeakerNotesWindow.bind(ot),isOverview:R.isActive.bind(R),isFocused:vt.isFocused.bind(vt),isScrollView:H.isActive.bind(H),isPrintView:w.isActive.bind(w),isReady:()=>I,loadSlide:U.load.bind(U),unloadSlide:U.unload.bind(U),startEmbeddedContent:()=>U.startEmbeddedContent(d),stopEmbeddedContent:()=>U.stopEmbeddedContent(d,{unloadIframes:!1}),showPreview:M,hidePreview:tt,addEventListeners:s,removeEventListeners:i,dispatchEvent:m,getState:ve,setState:function(l){if(typeof l=="object"){yt(It(l.indexh),It(l.indexv),It(l.indexf));let g=It(l.paused),S=It(l.overview);typeof g=="boolean"&&g!==$t()&&ae(g),typeof S=="boolean"&&S!==R.isActive()&&R.toggle(S)}},getProgress:function(){let l=me(),g=de();if(d){let S=d.querySelectorAll(".fragment");S.length>0&&(g+=d.querySelectorAll(".fragment.visible").length/S.length*.9)}return Math.min(g/(l-1),1)},getIndices:he,getSlidesAttributes:function(){return Yt().map(l=>{let g={};for(let S=0;S<l.attributes.length;S++){let A=l.attributes[S];g[A.name]=A.value}return g})},getSlidePastCount:de,getTotalSlides:me,getSlide:fe,getPreviousSlide:()=>u,getCurrentSlide:()=>d,getSlideBackground:function(l,g){let S=typeof l=="number"?fe(l,g):l;if(S)return S.slideBackgroundElement},getSlideNotes:ot.getSlideNotes.bind(ot),getSlides:Yt,getHorizontalSlides:Et,getVerticalSlides:ue,hasHorizontalSlides:ge,hasVerticalSlides:pe,hasNavigatedHorizontally:()=>v.hasNavigatedHorizontally,hasNavigatedVertically:()=>v.hasNavigatedVertically,shouldAutoAnimateBetween:Vt,addKeyBinding:T.addKeyBinding.bind(T),removeKeyBinding:T.removeKeyBinding.bind(T),triggerKey:T.triggerKey.bind(T),registerKeyboardShortcut:T.registerKeyboardShortcut.bind(T),getComputedSlideSize:O,setCurrentScrollPage:function(l,g,S){let A=n||0;n=g,r=S;const C=d!==l;u=d,d=l,d&&u&&h.autoAnimate&&Vt(u,d,A,r)&&dt.run(u,d),C&&(u&&(U.stopEmbeddedContent(u),U.stopEmbeddedContent(u.slideBackgroundElement)),U.startEmbeddedContent(d),U.startEmbeddedContent(d.slideBackgroundElement)),requestAnimationFrame(()=>{D(B(d))}),x()},getScale:()=>L,getConfig:()=>h,getQueryHash:Re,getSlidePath:ct.getHash.bind(ct),getRevealElement:()=>b,getSlidesElement:()=>c.slides,getViewportElement:()=>c.viewport,getBackgroundsElement:()=>W.element,registerPlugin:ht.registerPlugin.bind(ht),hasPlugin:ht.hasPlugin.bind(ht),getPlugin:ht.getPlugin.bind(ht),getPlugins:ht.getRegisteredPlugins.bind(ht)};return Mt(e,{...Ae,announceStatus:D,getStatusText:B,focus:vt,scroll:H,progress:K,controls:it,location:ct,overview:R,fragments:_,backgrounds:W,slideContent:U,slideNumber:J,onUserInput:function(l){h.autoSlideStoppable&&qt()},closeOverlay:tt,updateSlidesVisibility:Xt,layoutSlideContents:mt,transformSlides:y,cueAutoSlide:Nt,cancelAutoSlide:Dt}),Ae}let Rt=_e,Ie=[];Rt.initialize=b=>(Object.assign(Rt,new _e(document.querySelector(".reveal"),b)),Ie.map(t=>t(Rt)),Rt.initialize()),["configure","on","off","addEventListener","removeEventListener","registerPlugin"].forEach(b=>{Rt[b]=(...t)=>{Ie.push(e=>e[b].call(null,...t))}}),Rt.isReady=()=>!1,Rt.VERSION=Be;var $e=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function He(b){return b&&b.__esModule&&Object.prototype.hasOwnProperty.call(b,"default")?b.default:b}var De={exports:{}};(function(b,t){(function(e,n){b.exports=n()})($e,function(){function e(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let n={async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1};const r=/[&<>"']/,u=new RegExp(r.source,"g"),d=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,p=new RegExp(d.source,"g"),h={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},I=B=>h[B];function v(B,a){if(a){if(r.test(B))return B.replace(u,I)}else if(d.test(B))return B.replace(p,I);return B}const E=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function L(B){return B.replace(E,(a,s)=>(s=s.toLowerCase())==="colon"?":":s.charAt(0)==="#"?s.charAt(1)==="x"?String.fromCharCode(parseInt(s.substring(2),16)):String.fromCharCode(+s.substring(1)):"")}const f=/(^|[^\[])\^/g;function c(B,a){B=typeof B=="string"?B:B.source,a=a||"";const s={replace:(i,o)=>(o=(o=o.source||o).replace(f,"$1"),B=B.replace(i,o),s),getRegex:()=>new RegExp(B,a)};return s}const $=/[^\w:]/g,X=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function st(B,a,s){if(B){let i;try{i=decodeURIComponent(L(s)).replace($,"").toLowerCase()}catch{return null}if(i.indexOf("javascript:")===0||i.indexOf("vbscript:")===0||i.indexOf("data:")===0)return null}a&&!X.test(s)&&(s=function(i,o){at[" "+i]||(rt.test(i)?at[" "+i]=i+"/":at[" "+i]=W(i,"/",!0)),i=at[" "+i];const k=i.indexOf(":")===-1;return o.substring(0,2)==="//"?k?o:i.replace(U,"$1")+o:o.charAt(0)==="/"?k?o:i.replace(J,"$1")+o:i+o}(a,s));try{s=encodeURI(s).replace(/%25/g,"%")}catch{return null}return s}const at={},rt=/^[^:]+:\/*[^/]*$/,U=/^([^:]+:)[\s\S]*$/,J=/^([^:]+:\/*[^/]*)[\s\S]*$/,V={exec:function(){}};function dt(B,a){const s=B.replace(/\|/g,(o,k,y)=>{let m=!1,x=k;for(;--x>=0&&y[x]==="\\";)m=!m;return m?"|":" |"}).split(/ \|/);let i=0;if(s[0].trim()||s.shift(),s.length>0&&!s[s.length-1].trim()&&s.pop(),s.length>a)s.splice(a);else for(;s.length<a;)s.push("");for(;i<s.length;i++)s[i]=s[i].trim().replace(/\\\|/g,"|");return s}function W(B,a,s){const i=B.length;if(i===0)return"";let o=0;for(;o<i;){const k=B.charAt(i-o-1);if(k!==a||s){if(k===a||!s)break;o++}else o++}return B.slice(0,i-o)}function H(B,a){if(a<1)return"";let s="";for(;a>1;)1&a&&(s+=B),a>>=1,B+=B;return s+B}function w(B,a,s,i){const o=a.href,k=a.title?v(a.title):null,y=B[1].replace(/\\([\[\]])/g,"$1");if(B[0].charAt(0)!=="!"){i.state.inLink=!0;const m={type:"link",raw:s,href:o,title:k,text:y,tokens:i.inlineTokens(y)};return i.state.inLink=!1,m}return{type:"image",raw:s,href:o,title:k,text:v(y)}}class _{constructor(a){this.options=a||n}space(a){const s=this.rules.block.newline.exec(a);if(s&&s[0].length>0)return{type:"space",raw:s[0]}}code(a){const s=this.rules.block.code.exec(a);if(s){const i=s[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:s[0],codeBlockStyle:"indented",text:this.options.pedantic?i:W(i,`
`)}}}fences(a){const s=this.rules.block.fences.exec(a);if(s){const i=s[0],o=function(k,y){const m=k.match(/^(\s+)(?:```)/);if(m===null)return y;const x=m[1];return y.split(`
`).map(N=>{const z=N.match(/^\s+/);if(z===null)return N;const[P]=z;return P.length>=x.length?N.slice(x.length):N}).join(`
`)}(i,s[3]||"");return{type:"code",raw:i,lang:s[2]?s[2].trim().replace(this.rules.inline._escapes,"$1"):s[2],text:o}}}heading(a){const s=this.rules.block.heading.exec(a);if(s){let i=s[2].trim();if(/#$/.test(i)){const o=W(i,"#");this.options.pedantic?i=o.trim():o&&!/ $/.test(o)||(i=o.trim())}return{type:"heading",raw:s[0],depth:s[1].length,text:i,tokens:this.lexer.inline(i)}}}hr(a){const s=this.rules.block.hr.exec(a);if(s)return{type:"hr",raw:s[0]}}blockquote(a){const s=this.rules.block.blockquote.exec(a);if(s){const i=s[0].replace(/^ *>[ \t]?/gm,""),o=this.lexer.state.top;this.lexer.state.top=!0;const k=this.lexer.blockTokens(i);return this.lexer.state.top=o,{type:"blockquote",raw:s[0],tokens:k,text:i}}}list(a){let s=this.rules.block.list.exec(a);if(s){let i,o,k,y,m,x,N,z,P,M,Y,tt,et=s[1].trim();const mt=et.length>1,O={type:"list",raw:"",ordered:mt,start:mt?+et.slice(0,-1):"",loose:!1,items:[]};et=mt?`\\d{1,9}\\${et.slice(-1)}`:`\\${et}`,this.options.pedantic&&(et=mt?et:"[*+-]");const St=new RegExp(`^( {0,3}${et})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;a&&(tt=!1,s=St.exec(a))&&!this.rules.block.hr.test(a);){if(i=s[0],a=a.substring(i.length),z=s[2].split(`
`,1)[0].replace(/^\t+/,nt=>" ".repeat(3*nt.length)),P=a.split(`
`,1)[0],this.options.pedantic?(y=2,Y=z.trimLeft()):(y=s[2].search(/[^ ]/),y=y>4?1:y,Y=z.slice(y),y+=s[1].length),x=!1,!z&&/^ *$/.test(P)&&(i+=P+`
`,a=a.substring(P.length+1),tt=!0),!tt){const nt=new RegExp(`^ {0,${Math.min(3,y-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),ft=new RegExp(`^ {0,${Math.min(3,y-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),G=new RegExp(`^ {0,${Math.min(3,y-1)}}(?:\`\`\`|~~~)`),bt=new RegExp(`^ {0,${Math.min(3,y-1)}}#`);for(;a&&(M=a.split(`
`,1)[0],P=M,this.options.pedantic&&(P=P.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!G.test(P))&&!bt.test(P)&&!nt.test(P)&&!ft.test(a);){if(P.search(/[^ ]/)>=y||!P.trim())Y+=`
`+P.slice(y);else{if(x||z.search(/[^ ]/)>=4||G.test(z)||bt.test(z)||ft.test(z))break;Y+=`
`+P}x||P.trim()||(x=!0),i+=M+`
`,a=a.substring(M.length+1),z=P.slice(y)}}O.loose||(N?O.loose=!0:/\n *\n *$/.test(i)&&(N=!0)),this.options.gfm&&(o=/^\[[ xX]\] /.exec(Y),o&&(k=o[0]!=="[ ] ",Y=Y.replace(/^\[[ xX]\] +/,""))),O.items.push({type:"list_item",raw:i,task:!!o,checked:k,loose:!1,text:Y}),O.raw+=i}O.items[O.items.length-1].raw=i.trimRight(),O.items[O.items.length-1].text=Y.trimRight(),O.raw=O.raw.trimRight();const xt=O.items.length;for(m=0;m<xt;m++)if(this.lexer.state.top=!1,O.items[m].tokens=this.lexer.blockTokens(O.items[m].text,[]),!O.loose){const nt=O.items[m].tokens.filter(G=>G.type==="space"),ft=nt.length>0&&nt.some(G=>/\n.*\n/.test(G.raw));O.loose=ft}if(O.loose)for(m=0;m<xt;m++)O.items[m].loose=!0;return O}}html(a){const s=this.rules.block.html.exec(a);if(s){const i={type:"html",raw:s[0],pre:!this.options.sanitizer&&(s[1]==="pre"||s[1]==="script"||s[1]==="style"),text:s[0]};if(this.options.sanitize){const o=this.options.sanitizer?this.options.sanitizer(s[0]):v(s[0]);i.type="paragraph",i.text=o,i.tokens=this.lexer.inline(o)}return i}}def(a){const s=this.rules.block.def.exec(a);if(s){const i=s[1].toLowerCase().replace(/\s+/g," "),o=s[2]?s[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",k=s[3]?s[3].substring(1,s[3].length-1).replace(this.rules.inline._escapes,"$1"):s[3];return{type:"def",tag:i,raw:s[0],href:o,title:k}}}table(a){const s=this.rules.block.table.exec(a);if(s){const i={type:"table",header:dt(s[1]).map(o=>({text:o})),align:s[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:s[3]&&s[3].trim()?s[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(i.header.length===i.align.length){i.raw=s[0];let o,k,y,m,x=i.align.length;for(o=0;o<x;o++)/^ *-+: *$/.test(i.align[o])?i.align[o]="right":/^ *:-+: *$/.test(i.align[o])?i.align[o]="center":/^ *:-+ *$/.test(i.align[o])?i.align[o]="left":i.align[o]=null;for(x=i.rows.length,o=0;o<x;o++)i.rows[o]=dt(i.rows[o],i.header.length).map(N=>({text:N}));for(x=i.header.length,k=0;k<x;k++)i.header[k].tokens=this.lexer.inline(i.header[k].text);for(x=i.rows.length,k=0;k<x;k++)for(m=i.rows[k],y=0;y<m.length;y++)m[y].tokens=this.lexer.inline(m[y].text);return i}}}lheading(a){const s=this.rules.block.lheading.exec(a);if(s)return{type:"heading",raw:s[0],depth:s[2].charAt(0)==="="?1:2,text:s[1],tokens:this.lexer.inline(s[1])}}paragraph(a){const s=this.rules.block.paragraph.exec(a);if(s){const i=s[1].charAt(s[1].length-1)===`
`?s[1].slice(0,-1):s[1];return{type:"paragraph",raw:s[0],text:i,tokens:this.lexer.inline(i)}}}text(a){const s=this.rules.block.text.exec(a);if(s)return{type:"text",raw:s[0],text:s[0],tokens:this.lexer.inline(s[0])}}escape(a){const s=this.rules.inline.escape.exec(a);if(s)return{type:"escape",raw:s[0],text:v(s[1])}}tag(a){const s=this.rules.inline.tag.exec(a);if(s)return!this.lexer.state.inLink&&/^<a /i.test(s[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(s[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(s[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(s[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:s[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(s[0]):v(s[0]):s[0]}}link(a){const s=this.rules.inline.link.exec(a);if(s){const i=s[2].trim();if(!this.options.pedantic&&/^</.test(i)){if(!/>$/.test(i))return;const y=W(i.slice(0,-1),"\\");if((i.length-y.length)%2==0)return}else{const y=function(m,x){if(m.indexOf(x[1])===-1)return-1;const N=m.length;let z=0,P=0;for(;P<N;P++)if(m[P]==="\\")P++;else if(m[P]===x[0])z++;else if(m[P]===x[1]&&(z--,z<0))return P;return-1}(s[2],"()");if(y>-1){const m=(s[0].indexOf("!")===0?5:4)+s[1].length+y;s[2]=s[2].substring(0,y),s[0]=s[0].substring(0,m).trim(),s[3]=""}}let o=s[2],k="";if(this.options.pedantic){const y=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(o);y&&(o=y[1],k=y[3])}else k=s[3]?s[3].slice(1,-1):"";return o=o.trim(),/^</.test(o)&&(o=this.options.pedantic&&!/>$/.test(i)?o.slice(1):o.slice(1,-1)),w(s,{href:o&&o.replace(this.rules.inline._escapes,"$1"),title:k&&k.replace(this.rules.inline._escapes,"$1")},s[0],this.lexer)}}reflink(a,s){let i;if((i=this.rules.inline.reflink.exec(a))||(i=this.rules.inline.nolink.exec(a))){let o=(i[2]||i[1]).replace(/\s+/g," ");if(o=s[o.toLowerCase()],!o){const k=i[0].charAt(0);return{type:"text",raw:k,text:k}}return w(i,o,i[0],this.lexer)}}emStrong(a,s,i=""){let o=this.rules.inline.emStrong.lDelim.exec(a);if(!o||o[3]&&i.match(/[\p{L}\p{N}]/u))return;const k=o[1]||o[2]||"";if(!k||k&&(i===""||this.rules.inline.punctuation.exec(i))){const y=o[0].length-1;let m,x,N=y,z=0;const P=o[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(P.lastIndex=0,s=s.slice(-1*a.length+y);(o=P.exec(s))!=null;){if(m=o[1]||o[2]||o[3]||o[4]||o[5]||o[6],!m)continue;if(x=m.length,o[3]||o[4]){N+=x;continue}if((o[5]||o[6])&&y%3&&!((y+x)%3)){z+=x;continue}if(N-=x,N>0)continue;x=Math.min(x,x+N+z);const M=a.slice(0,y+o.index+(o[0].length-m.length)+x);if(Math.min(y,x)%2){const tt=M.slice(1,-1);return{type:"em",raw:M,text:tt,tokens:this.lexer.inlineTokens(tt)}}const Y=M.slice(2,-2);return{type:"strong",raw:M,text:Y,tokens:this.lexer.inlineTokens(Y)}}}}codespan(a){const s=this.rules.inline.code.exec(a);if(s){let i=s[2].replace(/\n/g," ");const o=/[^ ]/.test(i),k=/^ /.test(i)&&/ $/.test(i);return o&&k&&(i=i.substring(1,i.length-1)),i=v(i,!0),{type:"codespan",raw:s[0],text:i}}}br(a){const s=this.rules.inline.br.exec(a);if(s)return{type:"br",raw:s[0]}}del(a){const s=this.rules.inline.del.exec(a);if(s)return{type:"del",raw:s[0],text:s[2],tokens:this.lexer.inlineTokens(s[2])}}autolink(a,s){const i=this.rules.inline.autolink.exec(a);if(i){let o,k;return i[2]==="@"?(o=v(this.options.mangle?s(i[1]):i[1]),k="mailto:"+o):(o=v(i[1]),k=o),{type:"link",raw:i[0],text:o,href:k,tokens:[{type:"text",raw:o,text:o}]}}}url(a,s){let i;if(i=this.rules.inline.url.exec(a)){let o,k;if(i[2]==="@")o=v(this.options.mangle?s(i[0]):i[0]),k="mailto:"+o;else{let y;do y=i[0],i[0]=this.rules.inline._backpedal.exec(i[0])[0];while(y!==i[0]);o=v(i[0]),k=i[1]==="www."?"http://"+i[0]:i[0]}return{type:"link",raw:i[0],text:o,href:k,tokens:[{type:"text",raw:o,text:o}]}}}inlineText(a,s){const i=this.rules.inline.text.exec(a);if(i){let o;return o=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):v(i[0]):i[0]:v(this.options.smartypants?s(i[0]):i[0]),{type:"text",raw:i[0],text:o}}}}const R={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:V,lheading:/^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\.|[^\[\]\\])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};R.def=c(R.def).replace("label",R._label).replace("title",R._title).getRegex(),R.bullet=/(?:[*+-]|\d{1,9}[.)])/,R.listItemStart=c(/^( *)(bull) */).replace("bull",R.bullet).getRegex(),R.list=c(R.list).replace(/bull/g,R.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+R.def.source+")").getRegex(),R._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",R._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,R.html=c(R.html,"i").replace("comment",R._comment).replace("tag",R._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),R.paragraph=c(R._paragraph).replace("hr",R.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",R._tag).getRegex(),R.blockquote=c(R.blockquote).replace("paragraph",R.paragraph).getRegex(),R.normal={...R},R.gfm={...R.normal,table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"},R.gfm.table=c(R.gfm.table).replace("hr",R.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",R._tag).getRegex(),R.gfm.paragraph=c(R._paragraph).replace("hr",R.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",R.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",R._tag).getRegex(),R.pedantic={...R.normal,html:c(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",R._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:V,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:c(R.normal._paragraph).replace("hr",R.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",R.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const T={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:V,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,rDelimUnd:/^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:V,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};function ct(B){return B.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function it(B){let a,s,i="";const o=B.length;for(a=0;a<o;a++)s=B.charCodeAt(a),Math.random()>.5&&(s="x"+s.toString(16)),i+="&#"+s+";";return i}T._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",T.punctuation=c(T.punctuation).replace(/punctuation/g,T._punctuation).getRegex(),T.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,T.escapedEmSt=/(?:^|[^\\])(?:\\\\)*\\[*_]/g,T._comment=c(R._comment).replace("(?:-->|$)","-->").getRegex(),T.emStrong.lDelim=c(T.emStrong.lDelim).replace(/punct/g,T._punctuation).getRegex(),T.emStrong.rDelimAst=c(T.emStrong.rDelimAst,"g").replace(/punct/g,T._punctuation).getRegex(),T.emStrong.rDelimUnd=c(T.emStrong.rDelimUnd,"g").replace(/punct/g,T._punctuation).getRegex(),T._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,T._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,T._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,T.autolink=c(T.autolink).replace("scheme",T._scheme).replace("email",T._email).getRegex(),T._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,T.tag=c(T.tag).replace("comment",T._comment).replace("attribute",T._attribute).getRegex(),T._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,T._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,T._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,T.link=c(T.link).replace("label",T._label).replace("href",T._href).replace("title",T._title).getRegex(),T.reflink=c(T.reflink).replace("label",T._label).replace("ref",R._label).getRegex(),T.nolink=c(T.nolink).replace("ref",R._label).getRegex(),T.reflinkSearch=c(T.reflinkSearch,"g").replace("reflink",T.reflink).replace("nolink",T.nolink).getRegex(),T.normal={...T},T.pedantic={...T.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:c(/^!?\[(label)\]\((.*?)\)/).replace("label",T._label).getRegex(),reflink:c(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",T._label).getRegex()},T.gfm={...T.normal,escape:c(T.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},T.gfm.url=c(T.gfm.url,"i").replace("email",T.gfm._extended_email).getRegex(),T.breaks={...T.gfm,br:c(T.br).replace("{2,}","*").getRegex(),text:c(T.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};class K{constructor(a){this.tokens=[],this.tokens.links=Object.create(null),this.options=a||n,this.options.tokenizer=this.options.tokenizer||new _,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const s={block:R.normal,inline:T.normal};this.options.pedantic?(s.block=R.pedantic,s.inline=T.pedantic):this.options.gfm&&(s.block=R.gfm,this.options.breaks?s.inline=T.breaks:s.inline=T.gfm),this.tokenizer.rules=s}static get rules(){return{block:R,inline:T}}static lex(a,s){return new K(s).lex(a)}static lexInline(a,s){return new K(s).inlineTokens(a)}lex(a){let s;for(a=a.replace(/\r\n|\r/g,`
`),this.blockTokens(a,this.tokens);s=this.inlineQueue.shift();)this.inlineTokens(s.src,s.tokens);return this.tokens}blockTokens(a,s=[]){let i,o,k,y;for(a=this.options.pedantic?a.replace(/\t/g,"    ").replace(/^ +$/gm,""):a.replace(/^( *)(\t+)/gm,(m,x,N)=>x+"    ".repeat(N.length));a;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(m=>!!(i=m.call({lexer:this},a,s))&&(a=a.substring(i.raw.length),s.push(i),!0))))if(i=this.tokenizer.space(a))a=a.substring(i.raw.length),i.raw.length===1&&s.length>0?s[s.length-1].raw+=`
`:s.push(i);else if(i=this.tokenizer.code(a))a=a.substring(i.raw.length),o=s[s.length-1],!o||o.type!=="paragraph"&&o.type!=="text"?s.push(i):(o.raw+=`
`+i.raw,o.text+=`
`+i.text,this.inlineQueue[this.inlineQueue.length-1].src=o.text);else if(i=this.tokenizer.fences(a))a=a.substring(i.raw.length),s.push(i);else if(i=this.tokenizer.heading(a))a=a.substring(i.raw.length),s.push(i);else if(i=this.tokenizer.hr(a))a=a.substring(i.raw.length),s.push(i);else if(i=this.tokenizer.blockquote(a))a=a.substring(i.raw.length),s.push(i);else if(i=this.tokenizer.list(a))a=a.substring(i.raw.length),s.push(i);else if(i=this.tokenizer.html(a))a=a.substring(i.raw.length),s.push(i);else if(i=this.tokenizer.def(a))a=a.substring(i.raw.length),o=s[s.length-1],!o||o.type!=="paragraph"&&o.type!=="text"?this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title}):(o.raw+=`
`+i.raw,o.text+=`
`+i.raw,this.inlineQueue[this.inlineQueue.length-1].src=o.text);else if(i=this.tokenizer.table(a))a=a.substring(i.raw.length),s.push(i);else if(i=this.tokenizer.lheading(a))a=a.substring(i.raw.length),s.push(i);else{if(k=a,this.options.extensions&&this.options.extensions.startBlock){let m=1/0;const x=a.slice(1);let N;this.options.extensions.startBlock.forEach(function(z){N=z.call({lexer:this},x),typeof N=="number"&&N>=0&&(m=Math.min(m,N))}),m<1/0&&m>=0&&(k=a.substring(0,m+1))}if(this.state.top&&(i=this.tokenizer.paragraph(k)))o=s[s.length-1],y&&o.type==="paragraph"?(o.raw+=`
`+i.raw,o.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):s.push(i),y=k.length!==a.length,a=a.substring(i.raw.length);else if(i=this.tokenizer.text(a))a=a.substring(i.raw.length),o=s[s.length-1],o&&o.type==="text"?(o.raw+=`
`+i.raw,o.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):s.push(i);else if(a){const m="Infinite loop on byte: "+a.charCodeAt(0);if(this.options.silent){console.error(m);break}throw new Error(m)}}return this.state.top=!0,s}inline(a,s=[]){return this.inlineQueue.push({src:a,tokens:s}),s}inlineTokens(a,s=[]){let i,o,k,y,m,x,N=a;if(this.tokens.links){const z=Object.keys(this.tokens.links);if(z.length>0)for(;(y=this.tokenizer.rules.inline.reflinkSearch.exec(N))!=null;)z.includes(y[0].slice(y[0].lastIndexOf("[")+1,-1))&&(N=N.slice(0,y.index)+"["+H("a",y[0].length-2)+"]"+N.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(y=this.tokenizer.rules.inline.blockSkip.exec(N))!=null;)N=N.slice(0,y.index)+"["+H("a",y[0].length-2)+"]"+N.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(y=this.tokenizer.rules.inline.escapedEmSt.exec(N))!=null;)N=N.slice(0,y.index+y[0].length-2)+"++"+N.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex),this.tokenizer.rules.inline.escapedEmSt.lastIndex--;for(;a;)if(m||(x=""),m=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(z=>!!(i=z.call({lexer:this},a,s))&&(a=a.substring(i.raw.length),s.push(i),!0))))if(i=this.tokenizer.escape(a))a=a.substring(i.raw.length),s.push(i);else if(i=this.tokenizer.tag(a))a=a.substring(i.raw.length),o=s[s.length-1],o&&i.type==="text"&&o.type==="text"?(o.raw+=i.raw,o.text+=i.text):s.push(i);else if(i=this.tokenizer.link(a))a=a.substring(i.raw.length),s.push(i);else if(i=this.tokenizer.reflink(a,this.tokens.links))a=a.substring(i.raw.length),o=s[s.length-1],o&&i.type==="text"&&o.type==="text"?(o.raw+=i.raw,o.text+=i.text):s.push(i);else if(i=this.tokenizer.emStrong(a,N,x))a=a.substring(i.raw.length),s.push(i);else if(i=this.tokenizer.codespan(a))a=a.substring(i.raw.length),s.push(i);else if(i=this.tokenizer.br(a))a=a.substring(i.raw.length),s.push(i);else if(i=this.tokenizer.del(a))a=a.substring(i.raw.length),s.push(i);else if(i=this.tokenizer.autolink(a,it))a=a.substring(i.raw.length),s.push(i);else if(this.state.inLink||!(i=this.tokenizer.url(a,it))){if(k=a,this.options.extensions&&this.options.extensions.startInline){let z=1/0;const P=a.slice(1);let M;this.options.extensions.startInline.forEach(function(Y){M=Y.call({lexer:this},P),typeof M=="number"&&M>=0&&(z=Math.min(z,M))}),z<1/0&&z>=0&&(k=a.substring(0,z+1))}if(i=this.tokenizer.inlineText(k,ct))a=a.substring(i.raw.length),i.raw.slice(-1)!=="_"&&(x=i.raw.slice(-1)),m=!0,o=s[s.length-1],o&&o.type==="text"?(o.raw+=i.raw,o.text+=i.text):s.push(i);else if(a){const z="Infinite loop on byte: "+a.charCodeAt(0);if(this.options.silent){console.error(z);break}throw new Error(z)}}else a=a.substring(i.raw.length),s.push(i);return s}}class Pt{constructor(a){this.options=a||n}code(a,s,i){const o=(s||"").match(/\S*/)[0];if(this.options.highlight){const k=this.options.highlight(a,o);k!=null&&k!==a&&(i=!0,a=k)}return a=a.replace(/\n$/,"")+`
`,o?'<pre><code class="'+this.options.langPrefix+v(o)+'">'+(i?a:v(a,!0))+`</code></pre>
`:"<pre><code>"+(i?a:v(a,!0))+`</code></pre>
`}blockquote(a){return`<blockquote>
${a}</blockquote>
`}html(a){return a}heading(a,s,i,o){return this.options.headerIds?`<h${s} id="${this.options.headerPrefix+o.slug(i)}">${a}</h${s}>
`:`<h${s}>${a}</h${s}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(a,s,i){const o=s?"ol":"ul";return"<"+o+(s&&i!==1?' start="'+i+'"':"")+`>
`+a+"</"+o+`>
`}listitem(a){return`<li>${a}</li>
`}checkbox(a){return"<input "+(a?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(a){return`<p>${a}</p>
`}table(a,s){return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+a+`</thead>
`+s+`</table>
`}tablerow(a){return`<tr>
${a}</tr>
`}tablecell(a,s){const i=s.header?"th":"td";return(s.align?`<${i} align="${s.align}">`:`<${i}>`)+a+`</${i}>
`}strong(a){return`<strong>${a}</strong>`}em(a){return`<em>${a}</em>`}codespan(a){return`<code>${a}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(a){return`<del>${a}</del>`}link(a,s,i){if((a=st(this.options.sanitize,this.options.baseUrl,a))===null)return i;let o='<a href="'+a+'"';return s&&(o+=' title="'+s+'"'),o+=">"+i+"</a>",o}image(a,s,i){if((a=st(this.options.sanitize,this.options.baseUrl,a))===null)return i;let o=`<img src="${a}" alt="${i}"`;return s&&(o+=` title="${s}"`),o+=this.options.xhtml?"/>":">",o}text(a){return a}}class ht{strong(a){return a}em(a){return a}codespan(a){return a}del(a){return a}html(a){return a}text(a){return a}link(a,s,i){return""+i}image(a,s,i){return""+i}br(){return""}}class vt{constructor(){this.seen={}}serialize(a){return a.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(a,s){let i=a,o=0;if(this.seen.hasOwnProperty(i)){o=this.seen[a];do o++,i=a+"-"+o;while(this.seen.hasOwnProperty(i))}return s||(this.seen[a]=o,this.seen[i]=0),i}slug(a,s={}){const i=this.serialize(a);return this.getNextSafeSlug(i,s.dryrun)}}class pt{constructor(a){this.options=a||n,this.options.renderer=this.options.renderer||new Pt,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new ht,this.slugger=new vt}static parse(a,s){return new pt(s).parse(a)}static parseInline(a,s){return new pt(s).parseInline(a)}parse(a,s=!0){let i,o,k,y,m,x,N,z,P,M,Y,tt,et,mt,O,St,xt,nt,ft,G="";const bt=a.length;for(i=0;i<bt;i++)if(M=a[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[M.type]&&(ft=this.options.extensions.renderers[M.type].call({parser:this},M),ft!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(M.type)))G+=ft||"";else switch(M.type){case"space":continue;case"hr":G+=this.renderer.hr();continue;case"heading":G+=this.renderer.heading(this.parseInline(M.tokens),M.depth,L(this.parseInline(M.tokens,this.textRenderer)),this.slugger);continue;case"code":G+=this.renderer.code(M.text,M.lang,M.escaped);continue;case"table":for(z="",N="",y=M.header.length,o=0;o<y;o++)N+=this.renderer.tablecell(this.parseInline(M.header[o].tokens),{header:!0,align:M.align[o]});for(z+=this.renderer.tablerow(N),P="",y=M.rows.length,o=0;o<y;o++){for(x=M.rows[o],N="",m=x.length,k=0;k<m;k++)N+=this.renderer.tablecell(this.parseInline(x[k].tokens),{header:!1,align:M.align[k]});P+=this.renderer.tablerow(N)}G+=this.renderer.table(z,P);continue;case"blockquote":P=this.parse(M.tokens),G+=this.renderer.blockquote(P);continue;case"list":for(Y=M.ordered,tt=M.start,et=M.loose,y=M.items.length,P="",o=0;o<y;o++)O=M.items[o],St=O.checked,xt=O.task,mt="",O.task&&(nt=this.renderer.checkbox(St),et?O.tokens.length>0&&O.tokens[0].type==="paragraph"?(O.tokens[0].text=nt+" "+O.tokens[0].text,O.tokens[0].tokens&&O.tokens[0].tokens.length>0&&O.tokens[0].tokens[0].type==="text"&&(O.tokens[0].tokens[0].text=nt+" "+O.tokens[0].tokens[0].text)):O.tokens.unshift({type:"text",text:nt}):mt+=nt),mt+=this.parse(O.tokens,et),P+=this.renderer.listitem(mt,xt,St);G+=this.renderer.list(P,Y,tt);continue;case"html":G+=this.renderer.html(M.text);continue;case"paragraph":G+=this.renderer.paragraph(this.parseInline(M.tokens));continue;case"text":for(P=M.tokens?this.parseInline(M.tokens):M.text;i+1<bt&&a[i+1].type==="text";)M=a[++i],P+=`
`+(M.tokens?this.parseInline(M.tokens):M.text);G+=s?this.renderer.paragraph(P):P;continue;default:{const Bt='Token with "'+M.type+'" type was not found.';if(this.options.silent)return void console.error(Bt);throw new Error(Bt)}}return G}parseInline(a,s){s=s||this.renderer;let i,o,k,y="";const m=a.length;for(i=0;i<m;i++)if(o=a[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]&&(k=this.options.extensions.renderers[o.type].call({parser:this},o),k!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)))y+=k||"";else switch(o.type){case"escape":case"text":y+=s.text(o.text);break;case"html":y+=s.html(o.text);break;case"link":y+=s.link(o.href,o.title,this.parseInline(o.tokens,s));break;case"image":y+=s.image(o.href,o.title,o.text);break;case"strong":y+=s.strong(this.parseInline(o.tokens,s));break;case"em":y+=s.em(this.parseInline(o.tokens,s));break;case"codespan":y+=s.codespan(o.text);break;case"br":y+=s.br();break;case"del":y+=s.del(this.parseInline(o.tokens,s));break;default:{const x='Token with "'+o.type+'" type was not found.';if(this.options.silent)return void console.error(x);throw new Error(x)}}return y}}class ot{constructor(a){this.options=a||n}preprocess(a){return a}postprocess(a){return a}}te(ot,"passThroughHooks",new Set(["preprocess","postprocess"]));function Ht(B,a){return(s,i,o)=>{typeof i=="function"&&(o=i,i=null);const k={...i},y=function(m,x,N){return z=>{if(z.message+=`
Please report this to https://github.com/markedjs/marked.`,m){const P="<p>An error occurred:</p><pre>"+v(z.message+"",!0)+"</pre>";return x?Promise.resolve(P):N?void N(null,P):P}if(x)return Promise.reject(z);if(!N)throw z;N(z)}}((i={...D.defaults,...k}).silent,i.async,o);if(s==null)return y(new Error("marked(): input parameter is undefined or null"));if(typeof s!="string")return y(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(s)+", string expected"));if(function(m){m&&m.sanitize&&!m.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}(i),i.hooks&&(i.hooks.options=i),o){const m=i.highlight;let x;try{i.hooks&&(s=i.hooks.preprocess(s)),x=B(s,i)}catch(P){return y(P)}const N=function(P){let M;if(!P)try{i.walkTokens&&D.walkTokens(x,i.walkTokens),M=a(x,i),i.hooks&&(M=i.hooks.postprocess(M))}catch(Y){P=Y}return i.highlight=m,P?y(P):o(null,M)};if(!m||m.length<3||(delete i.highlight,!x.length))return N();let z=0;return D.walkTokens(x,function(P){P.type==="code"&&(z++,setTimeout(()=>{m(P.text,P.lang,function(M,Y){if(M)return N(M);Y!=null&&Y!==P.text&&(P.text=Y,P.escaped=!0),z--,z===0&&N()})},0))}),void(z===0&&N())}if(i.async)return Promise.resolve(i.hooks?i.hooks.preprocess(s):s).then(m=>B(m,i)).then(m=>i.walkTokens?Promise.all(D.walkTokens(m,i.walkTokens)).then(()=>m):m).then(m=>a(m,i)).then(m=>i.hooks?i.hooks.postprocess(m):m).catch(y);try{i.hooks&&(s=i.hooks.preprocess(s));const m=B(s,i);i.walkTokens&&D.walkTokens(m,i.walkTokens);let x=a(m,i);return i.hooks&&(x=i.hooks.postprocess(x)),x}catch(m){return y(m)}}}function D(B,a,s){return Ht(K.lex,pt.parse)(B,a,s)}return D.options=D.setOptions=function(B){var a;return D.defaults={...D.defaults,...B},a=D.defaults,n=a,D},D.getDefaults=e,D.defaults=n,D.use=function(...B){const a=D.defaults.extensions||{renderers:{},childTokens:{}};B.forEach(s=>{const i={...s};if(i.async=D.defaults.async||i.async||!1,s.extensions&&(s.extensions.forEach(o=>{if(!o.name)throw new Error("extension name required");if(o.renderer){const k=a.renderers[o.name];a.renderers[o.name]=k?function(...y){let m=o.renderer.apply(this,y);return m===!1&&(m=k.apply(this,y)),m}:o.renderer}if(o.tokenizer){if(!o.level||o.level!=="block"&&o.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");a[o.level]?a[o.level].unshift(o.tokenizer):a[o.level]=[o.tokenizer],o.start&&(o.level==="block"?a.startBlock?a.startBlock.push(o.start):a.startBlock=[o.start]:o.level==="inline"&&(a.startInline?a.startInline.push(o.start):a.startInline=[o.start]))}o.childTokens&&(a.childTokens[o.name]=o.childTokens)}),i.extensions=a),s.renderer){const o=D.defaults.renderer||new Pt;for(const k in s.renderer){const y=o[k];o[k]=(...m)=>{let x=s.renderer[k].apply(o,m);return x===!1&&(x=y.apply(o,m)),x}}i.renderer=o}if(s.tokenizer){const o=D.defaults.tokenizer||new _;for(const k in s.tokenizer){const y=o[k];o[k]=(...m)=>{let x=s.tokenizer[k].apply(o,m);return x===!1&&(x=y.apply(o,m)),x}}i.tokenizer=o}if(s.hooks){const o=D.defaults.hooks||new ot;for(const k in s.hooks){const y=o[k];ot.passThroughHooks.has(k)?o[k]=m=>{if(D.defaults.async)return Promise.resolve(s.hooks[k].call(o,m)).then(N=>y.call(o,N));const x=s.hooks[k].call(o,m);return y.call(o,x)}:o[k]=(...m)=>{let x=s.hooks[k].apply(o,m);return x===!1&&(x=y.apply(o,m)),x}}i.hooks=o}if(s.walkTokens){const o=D.defaults.walkTokens;i.walkTokens=function(k){let y=[];return y.push(s.walkTokens.call(this,k)),o&&(y=y.concat(o.call(this,k))),y}}D.setOptions(i)})},D.walkTokens=function(B,a){let s=[];for(const i of B)switch(s=s.concat(a.call(D,i)),i.type){case"table":for(const o of i.header)s=s.concat(D.walkTokens(o.tokens,a));for(const o of i.rows)for(const k of o)s=s.concat(D.walkTokens(k.tokens,a));break;case"list":s=s.concat(D.walkTokens(i.items,a));break;default:D.defaults.extensions&&D.defaults.extensions.childTokens&&D.defaults.extensions.childTokens[i.type]?D.defaults.extensions.childTokens[i.type].forEach(function(o){s=s.concat(D.walkTokens(i[o],a))}):i.tokens&&(s=s.concat(D.walkTokens(i.tokens,a)))}return s},D.parseInline=Ht(K.lexInline,pt.parseInline),D.Parser=pt,D.parser=pt.parse,D.Renderer=Pt,D.TextRenderer=ht,D.Lexer=K,D.lexer=K.lex,D.Tokenizer=_,D.Slugger=vt,D.Hooks=ot,D.parse=D,D.options,D.setOptions,D.use,D.walkTokens,D.parseInline,pt.parse,K.lex,()=>{let B,a,s=null;function i(){if(s&&!s.closed)s.focus();else{if(s=window.open("about:blank","reveal.js - Notes","width=1100,height=700"),s.marked=D,s.document.write(`<!--
	NOTE: You need to build the notes plugin after making changes to this file.
-->
<html lang="en">
	<head>
		<meta charset="utf-8">

		<title>reveal.js - Speaker View</title>

		<style>
			body {
				font-family: Helvetica;
				font-size: 18px;
			}

			#current-slide,
			#upcoming-slide,
			#speaker-controls {
				padding: 6px;
				box-sizing: border-box;
				-moz-box-sizing: border-box;
			}

			#current-slide iframe,
			#upcoming-slide iframe {
				width: 100%;
				height: 100%;
				border: 1px solid #ddd;
			}

			#current-slide .label,
			#upcoming-slide .label {
				position: absolute;
				top: 10px;
				left: 10px;
				z-index: 2;
			}

			#connection-status {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				z-index: 20;
				padding: 30% 20% 20% 20%;
				font-size: 18px;
				color: #222;
				background: #fff;
				text-align: center;
				box-sizing: border-box;
				line-height: 1.4;
			}

			.overlay-element {
				height: 34px;
				line-height: 34px;
				padding: 0 10px;
				text-shadow: none;
				background: rgba( 220, 220, 220, 0.8 );
				color: #222;
				font-size: 14px;
			}

			.overlay-element.interactive:hover {
				background: rgba( 220, 220, 220, 1 );
			}

			#current-slide {
				position: absolute;
				width: 60%;
				height: 100%;
				top: 0;
				left: 0;
				padding-right: 0;
			}

			#upcoming-slide {
				position: absolute;
				width: 40%;
				height: 40%;
				right: 0;
				top: 0;
			}

			/* Speaker controls */
			#speaker-controls {
				position: absolute;
				top: 40%;
				right: 0;
				width: 40%;
				height: 60%;
				overflow: auto;
				font-size: 18px;
			}

				.speaker-controls-time.hidden,
				.speaker-controls-notes.hidden {
					display: none;
				}

				.speaker-controls-time .label,
				.speaker-controls-pace .label,
				.speaker-controls-notes .label {
					text-transform: uppercase;
					font-weight: normal;
					font-size: 0.66em;
					color: #666;
					margin: 0;
				}

				.speaker-controls-time, .speaker-controls-pace {
					border-bottom: 1px solid rgba( 200, 200, 200, 0.5 );
					margin-bottom: 10px;
					padding: 10px 16px;
					padding-bottom: 20px;
					cursor: pointer;
				}

				.speaker-controls-time .reset-button {
					opacity: 0;
					float: right;
					color: #666;
					text-decoration: none;
				}
				.speaker-controls-time:hover .reset-button {
					opacity: 1;
				}

				.speaker-controls-time .timer,
				.speaker-controls-time .clock {
					width: 50%;
				}

				.speaker-controls-time .timer,
				.speaker-controls-time .clock,
				.speaker-controls-time .pacing .hours-value,
				.speaker-controls-time .pacing .minutes-value,
				.speaker-controls-time .pacing .seconds-value {
					font-size: 1.9em;
				}

				.speaker-controls-time .timer {
					float: left;
				}

				.speaker-controls-time .clock {
					float: right;
					text-align: right;
				}

				.speaker-controls-time span.mute {
					opacity: 0.3;
				}

				.speaker-controls-time .pacing-title {
					margin-top: 5px;
				}

				.speaker-controls-time .pacing.ahead {
					color: blue;
				}

				.speaker-controls-time .pacing.on-track {
					color: green;
				}

				.speaker-controls-time .pacing.behind {
					color: red;
				}

				.speaker-controls-notes {
					padding: 10px 16px;
				}

				.speaker-controls-notes .value {
					margin-top: 5px;
					line-height: 1.4;
					font-size: 1.2em;
				}

			/* Layout selector */
			#speaker-layout {
				position: absolute;
				top: 10px;
				right: 10px;
				color: #222;
				z-index: 10;
			}
				#speaker-layout select {
					position: absolute;
					width: 100%;
					height: 100%;
					top: 0;
					left: 0;
					border: 0;
					box-shadow: 0;
					cursor: pointer;
					opacity: 0;

					font-size: 1em;
					background-color: transparent;

					-moz-appearance: none;
					-webkit-appearance: none;
					-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
				}

				#speaker-layout select:focus {
					outline: none;
					box-shadow: none;
				}

			.clear {
				clear: both;
			}

			/* Speaker layout: Wide */
			body[data-speaker-layout="wide"] #current-slide,
			body[data-speaker-layout="wide"] #upcoming-slide {
				width: 50%;
				height: 45%;
				padding: 6px;
			}

			body[data-speaker-layout="wide"] #current-slide {
				top: 0;
				left: 0;
			}

			body[data-speaker-layout="wide"] #upcoming-slide {
				top: 0;
				left: 50%;
			}

			body[data-speaker-layout="wide"] #speaker-controls {
				top: 45%;
				left: 0;
				width: 100%;
				height: 50%;
				font-size: 1.25em;
			}

			/* Speaker layout: Tall */
			body[data-speaker-layout="tall"] #current-slide,
			body[data-speaker-layout="tall"] #upcoming-slide {
				width: 45%;
				height: 50%;
				padding: 6px;
			}

			body[data-speaker-layout="tall"] #current-slide {
				top: 0;
				left: 0;
			}

			body[data-speaker-layout="tall"] #upcoming-slide {
				top: 50%;
				left: 0;
			}

			body[data-speaker-layout="tall"] #speaker-controls {
				padding-top: 40px;
				top: 0;
				left: 45%;
				width: 55%;
				height: 100%;
				font-size: 1.25em;
			}

			/* Speaker layout: Notes only */
			body[data-speaker-layout="notes-only"] #current-slide,
			body[data-speaker-layout="notes-only"] #upcoming-slide {
				display: none;
			}

			body[data-speaker-layout="notes-only"] #speaker-controls {
				padding-top: 40px;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				font-size: 1.25em;
			}

			@media screen and (max-width: 1080px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 16px;
				}
			}

			@media screen and (max-width: 900px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 14px;
				}
			}

			@media screen and (max-width: 800px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 12px;
				}
			}

		</style>
	</head>

	<body>

		<div id="connection-status">Loading speaker view...</div>

		<div id="current-slide"></div>
		<div id="upcoming-slide"><span class="overlay-element label">Upcoming</span></div>
		<div id="speaker-controls">
			<div class="speaker-controls-time">
				<h4 class="label">Time <span class="reset-button">Click to Reset</span></h4>
				<div class="clock">
					<span class="clock-value">0:00 AM</span>
				</div>
				<div class="timer">
					<span class="hours-value">00</span><span class="minutes-value">:00</span><span class="seconds-value">:00</span>
				</div>
				<div class="clear"></div>

				<h4 class="label pacing-title" style="display: none">Pacing – Time to finish current slide</h4>
				<div class="pacing" style="display: none">
					<span class="hours-value">00</span><span class="minutes-value">:00</span><span class="seconds-value">:00</span>
				</div>
			</div>

			<div class="speaker-controls-notes hidden">
				<h4 class="label">Notes</h4>
				<div class="value"></div>
			</div>
		</div>
		<div id="speaker-layout" class="overlay-element interactive">
			<span class="speaker-layout-label"></span>
			<select class="speaker-layout-dropdown"></select>
		</div>

		<script>

			(function() {

				var notes,
					notesValue,
					currentState,
					currentSlide,
					upcomingSlide,
					layoutLabel,
					layoutDropdown,
					pendingCalls = {},
					lastRevealApiCallId = 0,
					connected = false

				var connectionStatus = document.querySelector( '#connection-status' );

				var SPEAKER_LAYOUTS = {
					'default': 'Default',
					'wide': 'Wide',
					'tall': 'Tall',
					'notes-only': 'Notes only'
				};

				setupLayout();

				let openerOrigin;

				try {
					openerOrigin = window.opener.location.origin;
				}
				catch ( error ) { console.warn( error ) }

				// In order to prevent XSS, the speaker view will only run if its
				// opener has the same origin as itself
				if( window.location.origin !== openerOrigin ) {
					connectionStatus.innerHTML = 'Cross origin error.<br>The speaker window can only be opened from the same origin.';
					return;
				}

				var connectionTimeout = setTimeout( function() {
					connectionStatus.innerHTML = 'Error connecting to main window.<br>Please try closing and reopening the speaker view.';
				}, 5000 );

				window.addEventListener( 'message', function( event ) {

					// Validate the origin of all messages to avoid parsing messages
					// that aren't meant for us. Ignore when running off file:// so
					// that the speaker view continues to work without a web server.
					if( window.location.origin !== event.origin && window.location.origin !== 'file://' ) {
						return
					}

					clearTimeout( connectionTimeout );
					connectionStatus.style.display = 'none';

					var data = JSON.parse( event.data );

					// The overview mode is only useful to the reveal.js instance
					// where navigation occurs so we don't sync it
					if( data.state ) delete data.state.overview;

					// Messages sent by the notes plugin inside of the main window
					if( data && data.namespace === 'reveal-notes' ) {
						if( data.type === 'connect' ) {
							handleConnectMessage( data );
						}
						else if( data.type === 'state' ) {
							handleStateMessage( data );
						}
						else if( data.type === 'return' ) {
							pendingCalls[data.callId](data.result);
							delete pendingCalls[data.callId];
						}
					}
					// Messages sent by the reveal.js inside of the current slide preview
					else if( data && data.namespace === 'reveal' ) {
						if( /ready/.test( data.eventName ) ) {
							// Send a message back to notify that the handshake is complete
							window.opener.postMessage( JSON.stringify({ namespace: 'reveal-notes', type: 'connected'} ), '*' );
						}
						else if( /slidechanged|fragmentshown|fragmenthidden|paused|resumed/.test( data.eventName ) && currentState !== JSON.stringify( data.state ) ) {

							dispatchStateToMainWindow( data.state );

						}
					}

				} );

				/**
				 * Updates the presentation in the main window to match the state
				 * of the presentation in the notes window.
				 */
				const dispatchStateToMainWindow = debounce(( state ) => {
					window.opener.postMessage( JSON.stringify({ method: 'setState', args: [ state ]} ), '*' );
				}, 500);

				/**
				 * Asynchronously calls the Reveal.js API of the main frame.
				 */
				function callRevealApi( methodName, methodArguments, callback ) {

					var callId = ++lastRevealApiCallId;
					pendingCalls[callId] = callback;
					window.opener.postMessage( JSON.stringify( {
						namespace: 'reveal-notes',
						type: 'call',
						callId: callId,
						methodName: methodName,
						arguments: methodArguments
					} ), '*' );

				}

				/**
				 * Called when the main window is trying to establish a
				 * connection.
				 */
				function handleConnectMessage( data ) {

					if( connected === false ) {
						connected = true;

						setupIframes( data );
						setupKeyboard();
						setupNotes();
						setupTimer();
						setupHeartbeat();
					}

				}

				/**
				 * Called when the main window sends an updated state.
				 */
				function handleStateMessage( data ) {

					// Store the most recently set state to avoid circular loops
					// applying the same state
					currentState = JSON.stringify( data.state );

					// No need for updating the notes in case of fragment changes
					if ( data.notes ) {
						notes.classList.remove( 'hidden' );
						notesValue.style.whiteSpace = data.whitespace;
						if( data.markdown ) {
							notesValue.innerHTML = marked( data.notes );
						}
						else {
							notesValue.innerHTML = data.notes;
						}
					}
					else {
						notes.classList.add( 'hidden' );
					}

					// Update the note slides
					currentSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ data.state ] }), '*' );
					upcomingSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ data.state ] }), '*' );
					upcomingSlide.contentWindow.postMessage( JSON.stringify({ method: 'next' }), '*' );

				}

				// Limit to max one state update per X ms
				handleStateMessage = debounce( handleStateMessage, 200 );

				/**
				 * Forward keyboard events to the current slide window.
				 * This enables keyboard events to work even if focus
				 * isn't set on the current slide iframe.
				 *
				 * Block F5 default handling, it reloads and disconnects
				 * the speaker notes window.
				 */
				function setupKeyboard() {

					document.addEventListener( 'keydown', function( event ) {
						if( event.keyCode === 116 || ( event.metaKey && event.keyCode === 82 ) ) {
							event.preventDefault();
							return false;
						}
						currentSlide.contentWindow.postMessage( JSON.stringify({ method: 'triggerKey', args: [ event.keyCode ] }), '*' );
					} );

				}

				/**
				 * Creates the preview iframes.
				 */
				function setupIframes( data ) {

					var params = [
						'receiver',
						'progress=false',
						'history=false',
						'transition=none',
						'autoSlide=0',
						'backgroundTransition=none'
					].join( '&' );

					var urlSeparator = /\\?/.test(data.url) ? '&' : '?';
					var hash = '#/' + data.state.indexh + '/' + data.state.indexv;
					var currentURL = data.url + urlSeparator + params + '&scrollActivationWidth=false&postMessageEvents=true' + hash;
					var upcomingURL = data.url + urlSeparator + params + '&scrollActivationWidth=false&controls=false' + hash;

					currentSlide = document.createElement( 'iframe' );
					currentSlide.setAttribute( 'width', 1280 );
					currentSlide.setAttribute( 'height', 1024 );
					currentSlide.setAttribute( 'src', currentURL );
					document.querySelector( '#current-slide' ).appendChild( currentSlide );

					upcomingSlide = document.createElement( 'iframe' );
					upcomingSlide.setAttribute( 'width', 640 );
					upcomingSlide.setAttribute( 'height', 512 );
					upcomingSlide.setAttribute( 'src', upcomingURL );
					document.querySelector( '#upcoming-slide' ).appendChild( upcomingSlide );

				}

				/**
				 * Setup the notes UI.
				 */
				function setupNotes() {

					notes = document.querySelector( '.speaker-controls-notes' );
					notesValue = document.querySelector( '.speaker-controls-notes .value' );

				}

				/**
				 * We send out a heartbeat at all times to ensure we can
				 * reconnect with the main presentation window after reloads.
				 */
				function setupHeartbeat() {

					setInterval( () => {
						window.opener.postMessage( JSON.stringify({ namespace: 'reveal-notes', type: 'heartbeat'} ), '*' );
					}, 1000 );

				}

				function getTimings( callback ) {

					callRevealApi( 'getSlidesAttributes', [], function ( slideAttributes ) {
						callRevealApi( 'getConfig', [], function ( config ) {
							var totalTime = config.totalTime;
							var minTimePerSlide = config.minimumTimePerSlide || 0;
							var defaultTiming = config.defaultTiming;
							if ((defaultTiming == null) && (totalTime == null)) {
								callback(null);
								return;
							}
							// Setting totalTime overrides defaultTiming
							if (totalTime) {
								defaultTiming = 0;
							}
							var timings = [];
							for ( var i in slideAttributes ) {
								var slide = slideAttributes[ i ];
								var timing = defaultTiming;
								if( slide.hasOwnProperty( 'data-timing' )) {
									var t = slide[ 'data-timing' ];
									timing = parseInt(t);
									if( isNaN(timing) ) {
										console.warn("Could not parse timing '" + t + "' of slide " + i + "; using default of " + defaultTiming);
										timing = defaultTiming;
									}
								}
								timings.push(timing);
							}
							if ( totalTime ) {
								// After we've allocated time to individual slides, we summarize it and
								// subtract it from the total time
								var remainingTime = totalTime - timings.reduce( function(a, b) { return a + b; }, 0 );
								// The remaining time is divided by the number of slides that have 0 seconds
								// allocated at the moment, giving the average time-per-slide on the remaining slides
								var remainingSlides = (timings.filter( function(x) { return x == 0 }) ).length
								var timePerSlide = Math.round( remainingTime / remainingSlides, 0 )
								// And now we replace every zero-value timing with that average
								timings = timings.map( function(x) { return (x==0 ? timePerSlide : x) } );
							}
							var slidesUnderMinimum = timings.filter( function(x) { return (x < minTimePerSlide) } ).length
							if ( slidesUnderMinimum ) {
								message = "The pacing time for " + slidesUnderMinimum + " slide(s) is under the configured minimum of " + minTimePerSlide + " seconds. Check the data-timing attribute on individual slides, or consider increasing the totalTime or minimumTimePerSlide configuration options (or removing some slides).";
								alert(message);
							}
							callback( timings );
						} );
					} );

				}

				/**
				 * Return the number of seconds allocated for presenting
				 * all slides up to and including this one.
				 */
				function getTimeAllocated( timings, callback ) {

					callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
						var allocated = 0;
						for (var i in timings.slice(0, currentSlide + 1)) {
							allocated += timings[i];
						}
						callback( allocated );
					} );

				}

				/**
				 * Create the timer and clock and start updating them
				 * at an interval.
				 */
				function setupTimer() {

					var start = new Date(),
					timeEl = document.querySelector( '.speaker-controls-time' ),
					clockEl = timeEl.querySelector( '.clock-value' ),
					hoursEl = timeEl.querySelector( '.hours-value' ),
					minutesEl = timeEl.querySelector( '.minutes-value' ),
					secondsEl = timeEl.querySelector( '.seconds-value' ),
					pacingTitleEl = timeEl.querySelector( '.pacing-title' ),
					pacingEl = timeEl.querySelector( '.pacing' ),
					pacingHoursEl = pacingEl.querySelector( '.hours-value' ),
					pacingMinutesEl = pacingEl.querySelector( '.minutes-value' ),
					pacingSecondsEl = pacingEl.querySelector( '.seconds-value' );

					var timings = null;
					getTimings( function ( _timings ) {

						timings = _timings;
						if (_timings !== null) {
							pacingTitleEl.style.removeProperty('display');
							pacingEl.style.removeProperty('display');
						}

						// Update once directly
						_updateTimer();

						// Then update every second
						setInterval( _updateTimer, 1000 );

					} );


					function _resetTimer() {

						if (timings == null) {
							start = new Date();
							_updateTimer();
						}
						else {
							// Reset timer to beginning of current slide
							getTimeAllocated( timings, function ( slideEndTimingSeconds ) {
								var slideEndTiming = slideEndTimingSeconds * 1000;
								callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
									var currentSlideTiming = timings[currentSlide] * 1000;
									var previousSlidesTiming = slideEndTiming - currentSlideTiming;
									var now = new Date();
									start = new Date(now.getTime() - previousSlidesTiming);
									_updateTimer();
								} );
							} );
						}

					}

					timeEl.addEventListener( 'click', function() {
						_resetTimer();
						return false;
					} );

					function _displayTime( hrEl, minEl, secEl, time) {

						var sign = Math.sign(time) == -1 ? "-" : "";
						time = Math.abs(Math.round(time / 1000));
						var seconds = time % 60;
						var minutes = Math.floor( time / 60 ) % 60 ;
						var hours = Math.floor( time / ( 60 * 60 )) ;
						hrEl.innerHTML = sign + zeroPadInteger( hours );
						if (hours == 0) {
							hrEl.classList.add( 'mute' );
						}
						else {
							hrEl.classList.remove( 'mute' );
						}
						minEl.innerHTML = ':' + zeroPadInteger( minutes );
						if (hours == 0 && minutes == 0) {
							minEl.classList.add( 'mute' );
						}
						else {
							minEl.classList.remove( 'mute' );
						}
						secEl.innerHTML = ':' + zeroPadInteger( seconds );
					}

					function _updateTimer() {

						var diff, hours, minutes, seconds,
						now = new Date();

						diff = now.getTime() - start.getTime();

						clockEl.innerHTML = now.toLocaleTimeString( 'en-US', { hour12: true, hour: '2-digit', minute:'2-digit' } );
						_displayTime( hoursEl, minutesEl, secondsEl, diff );
						if (timings !== null) {
							_updatePacing(diff);
						}

					}

					function _updatePacing(diff) {

						getTimeAllocated( timings, function ( slideEndTimingSeconds ) {
							var slideEndTiming = slideEndTimingSeconds * 1000;

							callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
								var currentSlideTiming = timings[currentSlide] * 1000;
								var timeLeftCurrentSlide = slideEndTiming - diff;
								if (timeLeftCurrentSlide < 0) {
									pacingEl.className = 'pacing behind';
								}
								else if (timeLeftCurrentSlide < currentSlideTiming) {
									pacingEl.className = 'pacing on-track';
								}
								else {
									pacingEl.className = 'pacing ahead';
								}
								_displayTime( pacingHoursEl, pacingMinutesEl, pacingSecondsEl, timeLeftCurrentSlide );
							} );
						} );
					}

				}

				/**
				 * Sets up the speaker view layout and layout selector.
				 */
				function setupLayout() {

					layoutDropdown = document.querySelector( '.speaker-layout-dropdown' );
					layoutLabel = document.querySelector( '.speaker-layout-label' );

					// Render the list of available layouts
					for( var id in SPEAKER_LAYOUTS ) {
						var option = document.createElement( 'option' );
						option.setAttribute( 'value', id );
						option.textContent = SPEAKER_LAYOUTS[ id ];
						layoutDropdown.appendChild( option );
					}

					// Monitor the dropdown for changes
					layoutDropdown.addEventListener( 'change', function( event ) {

						setLayout( layoutDropdown.value );

					}, false );

					// Restore any currently persisted layout
					setLayout( getLayout() );

				}

				/**
				 * Sets a new speaker view layout. The layout is persisted
				 * in local storage.
				 */
				function setLayout( value ) {

					var title = SPEAKER_LAYOUTS[ value ];

					layoutLabel.innerHTML = 'Layout' + ( title ? ( ': ' + title ) : '' );
					layoutDropdown.value = value;

					document.body.setAttribute( 'data-speaker-layout', value );

					// Persist locally
					if( supportsLocalStorage() ) {
						window.localStorage.setItem( 'reveal-speaker-layout', value );
					}

				}

				/**
				 * Returns the ID of the most recently set speaker layout
				 * or our default layout if none has been set.
				 */
				function getLayout() {

					if( supportsLocalStorage() ) {
						var layout = window.localStorage.getItem( 'reveal-speaker-layout' );
						if( layout ) {
							return layout;
						}
					}

					// Default to the first record in the layouts hash
					for( var id in SPEAKER_LAYOUTS ) {
						return id;
					}

				}

				function supportsLocalStorage() {

					try {
						localStorage.setItem('test', 'test');
						localStorage.removeItem('test');
						return true;
					}
					catch( e ) {
						return false;
					}

				}

				function zeroPadInteger( num ) {

					var str = '00' + parseInt( num );
					return str.substring( str.length - 2 );

				}

				/**
				 * Limits the frequency at which a function can be called.
				 */
				function debounce( fn, ms ) {

					var lastTime = 0,
						timeout;

					return function() {

						var args = arguments;
						var context = this;

						clearTimeout( timeout );

						var timeSinceLastCall = Date.now() - lastTime;
						if( timeSinceLastCall > ms ) {
							fn.apply( context, args );
							lastTime = Date.now();
						}
						else {
							timeout = setTimeout( function() {
								fn.apply( context, args );
								lastTime = Date.now();
							}, ms - timeSinceLastCall );
						}

					}

				}

			})();

		<\/script>
	</body>
</html>`),!s)return void alert("Speaker view popup failed to open. Please make sure popups are allowed and reopen the speaker view.");(function(){const m=a.getConfig().url,x=typeof m=="string"?m:window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search;B=setInterval(function(){s.postMessage(JSON.stringify({namespace:"reveal-notes",type:"connect",state:a.getState(),url:x}),"*")},500),window.addEventListener("message",k)})()}}function o(m){let x=a.getCurrentSlide(),N=x.querySelectorAll("aside.notes"),z=x.querySelector(".current-fragment"),P={namespace:"reveal-notes",type:"state",notes:"",markdown:!1,whitespace:"normal",state:a.getState()};if(x.hasAttribute("data-notes")&&(P.notes=x.getAttribute("data-notes"),P.whitespace="pre-wrap"),z){let M=z.querySelector("aside.notes");M?(P.notes=M.innerHTML,P.markdown=typeof M.getAttribute("data-markdown")=="string",N=null):z.hasAttribute("data-notes")&&(P.notes=z.getAttribute("data-notes"),P.whitespace="pre-wrap",N=null)}N&&N.length&&(N=Array.from(N).filter(M=>M.closest(".fragment")===null),P.notes=N.map(M=>M.innerHTML).join(`
`),P.markdown=N[0]&&typeof N[0].getAttribute("data-markdown")=="string"),s.postMessage(JSON.stringify(P),"*")}function k(m){if(function(x){try{return window.location.origin===x.source.location.origin}catch{return!1}}(m)){let x=JSON.parse(m.data);x&&x.namespace==="reveal-notes"&&x.type==="connected"?(clearInterval(B),y()):x&&x.namespace==="reveal-notes"&&x.type==="call"&&function(N,z,P){let M=a[N].apply(a,z);s.postMessage(JSON.stringify({namespace:"reveal-notes",type:"return",result:M,callId:P}),"*")}(x.methodName,x.arguments,x.callId)}}function y(){a.on("slidechanged",o),a.on("fragmentshown",o),a.on("fragmenthidden",o),a.on("overviewhidden",o),a.on("overviewshown",o),a.on("paused",o),a.on("resumed",o),o()}return{id:"notes",init:function(m){a=m,/receiver/i.test(window.location.search)||(window.location.search.match(/(\?|\&)notes/gi)!==null?i():window.addEventListener("message",x=>{if(!s&&typeof x.data=="string"){let z;try{z=JSON.parse(x.data)}catch{}z&&z.namespace==="reveal-notes"&&z.type==="heartbeat"&&(N=x.source,s&&!s.closed?s.focus():(s=N,window.addEventListener("message",k),y()))}var N}),a.addKeyBinding({keyCode:83,key:"S",description:"Speaker notes view"},function(){i()}))},open:i}}})})(De);var mn=De.exports;const fn=He(mn);var qe={exports:{}};(function(b,t){(function(e,n){b.exports=n()})($e,function(){/*!
* reveal.js Zoom plugin
*/const e={id:"zoom",init:function(r){r.getRevealElement().addEventListener("mousedown",function(u){var d=/Linux/.test(window.navigator.platform)?"ctrl":"alt",p=(r.getConfig().zoomKey?r.getConfig().zoomKey:d)+"Key",h=r.getConfig().zoomLevel?r.getConfig().zoomLevel:2;u[p]&&!r.isOverview()&&(u.preventDefault(),n.to({x:u.clientX,y:u.clientY,scale:h,pan:!1}))})},destroy:()=>{n.reset()}};var n=function(){var r=1,u=0,d=0,p=-1,h=-1,I="transform"in document.body.style;function v(f,c){var $=L();if(f.width=f.width||1,f.height=f.height||1,f.x-=(window.innerWidth-f.width*c)/2,f.y-=(window.innerHeight-f.height*c)/2,I)if(c===1)document.body.style.transform="";else{var X=$.x+"px "+$.y+"px",st="translate("+-f.x+"px,"+-f.y+"px) scale("+c+")";document.body.style.transformOrigin=X,document.body.style.transform=st}else c===1?(document.body.style.position="",document.body.style.left="",document.body.style.top="",document.body.style.width="",document.body.style.height="",document.body.style.zoom=""):(document.body.style.position="relative",document.body.style.left=-($.x+f.x)/c+"px",document.body.style.top=-($.y+f.y)/c+"px",document.body.style.width=100*c+"%",document.body.style.height=100*c+"%",document.body.style.zoom=c);r=c,document.documentElement.classList&&(r!==1?document.documentElement.classList.add("zoomed"):document.documentElement.classList.remove("zoomed"))}function E(){var f=.12*window.innerWidth,c=.12*window.innerHeight,$=L();d<c?window.scroll($.x,$.y-14/r*(1-d/c)):d>window.innerHeight-c&&window.scroll($.x,$.y+(1-(window.innerHeight-d)/c)*(14/r)),u<f?window.scroll($.x-14/r*(1-u/f),$.y):u>window.innerWidth-f&&window.scroll($.x+(1-(window.innerWidth-u)/f)*(14/r),$.y)}function L(){return{x:window.scrollX!==void 0?window.scrollX:window.pageXOffset,y:window.scrollY!==void 0?window.scrollY:window.pageYOffset}}return I&&(document.body.style.transition="transform 0.8s ease"),document.addEventListener("keyup",function(f){r!==1&&f.keyCode===27&&n.out()}),document.addEventListener("mousemove",function(f){r!==1&&(u=f.clientX,d=f.clientY)}),{to:function(f){if(r!==1)n.out();else{if(f.x=f.x||0,f.y=f.y||0,f.element){var c=f.element.getBoundingClientRect();f.x=c.left-20,f.y=c.top-20,f.width=c.width+40,f.height=c.height+40}f.width!==void 0&&f.height!==void 0&&(f.scale=Math.max(Math.min(window.innerWidth/f.width,window.innerHeight/f.height),1)),f.scale>1&&(f.x*=f.scale,f.y*=f.scale,v(f,f.scale),f.pan!==!1&&(p=setTimeout(function(){h=setInterval(E,1e3/60)},800)))}},out:function(){clearTimeout(p),clearInterval(h),v({x:0,y:0},1),r=1},magnify:function(f){this.to(f)},reset:function(){this.out()},zoomLevel:function(){return r}}}();/*!
	 * zoom.js 0.3 (modified for use with reveal.js)
	 * http://lab.hakim.se/zoom-js
	 * MIT licensed
	 *
	 * Copyright (C) 2011-2014 Hakim El Hattab, http://hakim.se
	 */return()=>e})})(qe);var vn=qe.exports;const yn=He(vn),bn=new Rt;bn.initialize({hash:!0,slideNumber:!0,plugins:[fn,yn]});
