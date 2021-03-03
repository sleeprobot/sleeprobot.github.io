function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}HTMLElement.prototype.wrap=function(e){this.parentNode.insertBefore(e,this),this.parentNode.removeChild(this),e.appendChild(this)},NexT.utils={wrapImageWithFancyBox:function(){document.querySelectorAll(".post-body :not(a) > img, .post-body > img").forEach(function(e){var t=$(e),n=t.attr("data-src")||t.attr("src"),o=t.wrap('<a class="fancybox fancybox.image" href="'+n+'" itemscope itemtype="http://schema.org/ImageObject" itemprop="url"></a>').parent("a");t.is(".post-gallery img")?o.attr("data-fancybox","gallery").attr("rel","gallery"):t.is(".group-picture img")?o.attr("data-fancybox","group").attr("rel","group"):o.attr("data-fancybox","default").attr("rel","default");var a=t.attr("title")||t.attr("alt");a&&(o.append('<p class="image-caption">'+a+"</p>"),o.attr("title",a).attr("data-caption",a))}),$.fancybox.defaults.hash=!1,$(".fancybox").fancybox({loop:!0,helpers:{overlay:{locked:!1}}})},registerExtURL:function(){document.querySelectorAll("span.exturl").forEach(function(e){var t=document.createElement("a");t.href=decodeURIComponent(atob(e.dataset.url).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join("")),t.rel="noopener external nofollow noreferrer",t.target="_blank",t.className=e.className,t.title=e.title,t.innerHTML=e.innerHTML,e.parentNode.replaceChild(t,e)})},registerCopyCode:function(){document.querySelectorAll("figure.highlight").forEach(function(e){var t=document.createElement("div");e.wrap(t),t.classList.add("highlight-container"),t.insertAdjacentHTML("beforeend",'<div class="copy-btn"><i class="fa fa-clipboard fa-fw"></i></div>');var n=e.parentNode.querySelector(".copy-btn");n.addEventListener("click",function(e){var t=e.currentTarget,n=[].concat(_toConsumableArray(t.parentNode.querySelectorAll(".code .line"))).map(function(e){return e.innerText}).join("\n"),o=document.createElement("textarea");o.style.top=window.scrollY+"px",o.style.position="absolute",o.style.opacity="0",o.readOnly=!0,o.value=n,document.body.append(o);var a=document.getSelection(),r=0<a.rangeCount&&a.getRangeAt(0);o.select(),o.setSelectionRange(0,n.length),o.readOnly=!1;var i=document.execCommand("copy");CONFIG.copycode.show_result&&(t.querySelector("i").className=i?"fa fa-check fa-fw":"fa fa-times fa-fw"),o.blur(),t.blur(),r&&(a.removeAllRanges(),a.addRange(r)),document.body.removeChild(o)}),n.addEventListener("mouseleave",function(e){setTimeout(function(){e.target.querySelector("i").className="fa fa-clipboard fa-fw"},300)})})},wrapTableWithBox:function(){document.querySelectorAll("table").forEach(function(e){var t=document.createElement("div");t.className="table-container",e.wrap(t)})},registerVideoIframe:function(){document.querySelectorAll("iframe").forEach(function(t){var e,n,o;["www.youtube.com","player.vimeo.com","player.youku.com","player.bilibili.com","www.tudou.com"].some(function(e){return t.src.includes(e)})&&!t.parentNode.matches(".video-container")&&((e=document.createElement("div")).className="video-container",t.wrap(e),n=Number(t.width),o=Number(t.height),n&&o&&(t.parentNode.style.paddingTop=o/n*100+"%"))})},registerScrollPercent:function(){var a=document.querySelector(".back-to-top"),r=document.querySelector(".reading-progress-bar");window.addEventListener("scroll",function(){var e,t,n,o;(a||r)&&(e=document.querySelector(".container").offsetHeight,n=(t=window.innerHeight)<e?e-t:document.body.scrollHeight-t,o=Math.min(100*window.scrollY/n,100),a&&(a.classList.toggle("back-to-top-on",50<window.scrollY),a.querySelector("span").innerText=Math.round(o)+"%"),r&&(r.style.width=o.toFixed(2)+"%"))}),a&&a.addEventListener("click",function(){window.anime({targets:document.scrollingElement,duration:500,easing:"linear",scrollTop:0})})},registerTabsTag:function(){document.querySelectorAll(".tabs ul.nav-tabs .tab").forEach(function(e){e.addEventListener("click",function(e){e.preventDefault();var t,n=e.currentTarget;n.classList.contains("active")||([].concat(_toConsumableArray(n.parentNode.children)).forEach(function(e){e.classList.remove("active")}),n.classList.add("active"),t=document.getElementById(n.querySelector("a").getAttribute("href").replace("#","")),[].concat(_toConsumableArray(t.parentNode.children)).forEach(function(e){e.classList.remove("active")}),t.classList.add("active"),t.dispatchEvent(new Event("tabs:click",{bubbles:!0})))})}),window.dispatchEvent(new Event("tabs:register"))},registerCanIUseTag:function(){window.addEventListener("message",function(e){var t,n,o=e.data;"string"==typeof o&&o.includes("ciu_embed")&&(t=o.split(":")[1],n=o.split(":")[2],document.querySelector("iframe[data-feature="+t+"]").style.height=parseInt(n,10)+5+"px")},!1)},registerActiveMenuItem:function(){document.querySelectorAll(".menu-item").forEach(function(e){var t,n,o=e.querySelector("a[href]");o&&(t=o.pathname===location.pathname||o.pathname===location.pathname.replace("index.html",""),n=!CONFIG.root.startsWith(o.pathname)&&location.pathname.startsWith(o.pathname),e.classList.toggle("menu-item-active",o.hostname===location.hostname&&(t||n)))})},registerLangSelect:function(){document.querySelectorAll(".lang-select").forEach(function(n){n.value=CONFIG.page.lang,n.addEventListener("change",function(){var t=n.options[n.selectedIndex];document.querySelectorAll(".lang-select-label span").forEach(function(e){return e.innerText=t.text});var e=t.dataset.href;window.pjax?window.pjax.loadUrl(e):window.location.href=e})})},registerSidebarTOC:function(){var i=document.querySelectorAll(".post-toc li"),c=[].concat(_toConsumableArray(i)).map(function(e){var t=e.querySelector("a.nav-link"),n=document.getElementById(decodeURI(t.getAttribute("href")).replace("#",""));return t.addEventListener("click",function(e){e.preventDefault();var t=n.getBoundingClientRect().top+window.scrollY;window.anime({targets:document.scrollingElement,duration:500,easing:"linear",scrollTop:t+10})}),n}),l=document.querySelector(".post-toc-wrap");!function a(r){r=Math.floor(r+1e4);var t=new IntersectionObserver(function(e,t){var n=document.documentElement.scrollHeight+100;if(r<n)return t.disconnect(),void a(n);var o=function(e){var t=0,n=e[t];if(0<n.boundingClientRect.top)return 0===(t=c.indexOf(n.target))?0:t-1;for(;t<e.length;t++){if(!(e[t].boundingClientRect.top<=0))return c.indexOf(n.target);n=e[t]}return c.indexOf(n.target)}(e);!function(e){if(!e.classList.contains("active-current")){document.querySelectorAll(".post-toc .active").forEach(function(e){e.classList.remove("active","active-current")}),e.classList.add("active","active-current");for(var t=e.parentNode;!t.matches(".post-toc");)t.matches("li")&&t.classList.add("active"),t=t.parentNode;window.anime({targets:l,duration:200,easing:"linear",scrollTop:l.scrollTop-l.offsetHeight/2+e.getBoundingClientRect().top-l.getBoundingClientRect().top})}}(i[o])},{rootMargin:r+"px 0px -100% 0px",threshold:0});c.forEach(function(e){e&&t.observe(e)})}(document.documentElement.scrollHeight)},hasMobileUA:function(){var e=navigator.userAgent;return/iPad|iPhone|Android|Opera Mini|BlackBerry|webOS|UCWEB|Blazer|PSP|IEMobile|Symbian/g.test(e)},isTablet:function(){return window.screen.width<992&&767<window.screen.width&&this.hasMobileUA()},isMobile:function(){return window.screen.width<767&&this.hasMobileUA()},isDesktop:function(){return!this.isTablet()&&!this.isMobile()},supportsPDFs:function(){var e=navigator.userAgent,t=e.includes("irefox")&&18<parseInt(e.split("rv:")[1].split(".")[0],10),n=void 0!==navigator.mimeTypes["application/pdf"],o=/iphone|ipad|ipod/i.test(e.toLowerCase());return t||n&&!o},initSidebarDimension:function(){var e=document.querySelector(".sidebar-nav"),t="none"!==e.style.display?e.offsetHeight:0,n=CONFIG.sidebar.offset||12,o=CONFIG.back2top.enable&&CONFIG.back2top.sidebar?document.querySelector(".back-to-top").offsetHeight:0,a=2*CONFIG.sidebar.padding+t+o;"Pisces"!==CONFIG.scheme&&"Gemini"!==CONFIG.scheme||(a+=2*n-22);var r=document.body.offsetHeight-a+"px";document.querySelector(".site-overview-wrap").style.maxHeight=r,document.querySelector(".post-toc-wrap").style.maxHeight=r},updateSidebarPosition:function(){var e,t=document.querySelector(".sidebar-nav"),n=document.querySelector(".post-toc");n?(t.style.display="",t.classList.add("motion-element"),document.querySelector(".sidebar-nav-toc").click()):(t.style.display="none",t.classList.remove("motion-element"),document.querySelector(".sidebar-nav-overview").click()),NexT.utils.initSidebarDimension(),this.isDesktop()&&"Pisces"!==CONFIG.scheme&&"Gemini"!==CONFIG.scheme&&("boolean"!=typeof(e=CONFIG.page.sidebar)&&(e="always"===CONFIG.sidebar.display||"post"===CONFIG.sidebar.display&&n),e&&window.dispatchEvent(new Event("sidebar:show")))},getScript:function(e,n,t){var o;t?n():((o=document.createElement("script")).onload=o.onreadystatechange=function(e,t){!t&&o.readyState&&!/loaded|complete/.test(o.readyState)||(o.onload=o.onreadystatechange=null,o=void 0,!t&&n&&setTimeout(n,0))},o.src=e,document.head.appendChild(o))},loadComments:function(e,n){if(CONFIG.comments.lazyload&&e){var t=new IntersectionObserver(function(e,t){e[0].isIntersecting&&(n(),t.disconnect())});return t.observe(e),t}n()}};