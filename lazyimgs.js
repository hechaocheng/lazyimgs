/**************************************************
* auther: hechaocheng(Hi[at]hechaocheng[dot]com)  *
* github: https://github.com/hechaocheng/lazyimgs *
**************************************************/
"use strict";
(function(w,d){
	"use strict";
	var imgs = d.getElementsByTagName("img");
	var fn = function() {
		if ( typeof(imgs) === "object" ){
			for ( var i = 0, n = imgs.length; i < n; i++ ) {
				if ( imgs[i].offsetTop < (parseInt(w.innerHeight||d.documentElement.clientHeight) + parseInt(w.scrollY||d.documentElement.scrollTop) ) && typeof(imgs[i].getAttribute("data-src")) === "string" ) {
					if ( imgs[i].getAttribute("data-src") != imgs[i].getAttribute("src") ) {
						imgs[i].setAttribute("src",imgs[i].getAttribute("data-src").length > 0 ? imgs[i].getAttribute("data-src") : imgs[i].getAttribute("src"));
					}
				}
			}
		}
	};
	fn();
	w.onscroll = fn;
}(window,document));