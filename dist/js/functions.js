var callJson=function(){var e=document.createElement("script");e.src="http://roberval.chaordicsystems.com/challenge/challenge.json?callback=X",document.getElementsByTagName("body")[0].appendChild(e)}(),X=function(e){createItems(e.data.reference.item,"reference"),createItems(e.data.recommendation,"recommendation")},createItems=function(e,a){var c=function(e){var c,r=e.detailUrl,n=e.name.replace(/["]/g,"&#8221;"),t=e.imageName,i=e.oldPrice,m=e.price,s=e.productInfo.paymentConditions;c=i?"<span class='m-card__price-old'>De "+i+"</span>":"";var d='<a class="m-card__link" href="'+r+'" title="'+n+'"><div class="m-card__image"><figure><img src="'+t+'" alt="'+n+'" width="130" height="130"></figure></div><h1 class="m-card__title">'+n+'</h1><div class="m-card__price">'+c+'<span class="m-card__price-primary">Por <strong>'+m+'</strong></span><span class="m-card__price-conditions">'+s+"</span></div></a>",l=document.getElementById(a),o=document.createElement("section");o.className="m-card","recommendation"==a&&(o.className+=" wSlide__item"),o.innerHTML=d,l.appendChild(o)};if("reference"==a){var r=e;c(r)}if("recommendation"==a){for(var n=0;n<e.length;n++){var r=e[n];c(r)}wSlide()}};
var wSlide=function(){var e=document.getElementsByClassName("wSlide");!function(){var s=document.getElementsByClassName("wSlide__item"),t=document.getElementsByClassName("wSlide__items"),i=document.getElementsByClassName("wSlide__nav--next"),l=document.getElementsByClassName("wSlide__nav--prev"),n="wSlide__item--active",m=s.length,c=0,v=0,_=document.getElementsByClassName(n),o=document.getElementsByClassName("wSlide__item--next"),r=document.getElementsByClassName("wSlide__item--prev");!function(){var d=e[0].offsetWidth,w=d/3.5,f=w*m;t[0].style.width=f+"px";for(var S=0;S<m;S++)s[S].style.width=w+"px",S<3?s[S].className+=" "+n:(s[S].className+=" wSlide__item--next",c++);!function(){var e=0,d=function(){i[0].classList.remove("wSlide__nav--active"),l[0].classList.remove("wSlide__nav--active"),0!=c?i[0].className+=" wSlide__nav--active":(i[0].classList.remove("wSlide__nav--active"),i[0].classList.remove("wSlide__nav--activeWhite"),l[0].className+=" wSlide__nav--activeWhite"),0!=v?l[0].className+=" wSlide__nav--active":(l[0].classList.remove("wSlide__nav--active"),l[0].classList.remove("wSlide__nav--activeWhite"),i[0].className+=" wSlide__nav--activeWhite")};d(),i[0].onclick=function(){S("next")},l[0].onclick=function(){S("prev")};var S=function(i){var l=function(){for(a=0;a<m;a++)s[a].classList.remove(n)};switch(i){case"next":if(c>3){for(e-=3*w,a=0;a<3;a++)_[a].className+=" wSlide__item--prev";for(l(),a=0;a<3;a++)o[a].className+=" "+n}else if(0!=c){for(e=-(f-3*w-w/2),a=0;a<c;a++)_[a].className+=" wSlide__item--prev";l();var S=m-1;for(a=S;a>S-3;a--)s[a].className+=" "+n}for(a=0;a<3;a++)_[a].classList.remove("wSlide__item--next");break;case"prev":if(v>3){for(e+=3*w,a=0;a<3;a++)_[a].className+=" wSlide__item--next";l();var N=v-1;for(a=N;a>N-3;a--)r[a].className+=" "+n}else if(0!=v){e=0;for(a=2;a>2-v;a--)_[a].className+=" wSlide__item--next";for(l(),a=0;a<3;a++)s[a].className+=" "+n}for(a=0;a<3;a++)_[a].classList.remove("wSlide__item--prev")}t[0].style.transform="translate("+e+"px)",c=o.length,v=r.length,d()}}()}()}()};