var callJson = function(){
    var script = document.createElement('script');
    script.src = "http://roberval.chaordicsystems.com/challenge/challenge.json?callback=X";
    document.getElementsByTagName('body')[0].appendChild(script);
}();

var X = function(data){
    createItems(data.data.reference.item, "reference");
    createItems(data.data.recommendation, "recommendation");
}

var createItems = function(data, type){

    var htmlItem = function(thisData){
        var itemUrl = thisData.detailUrl,
            itemTitle = thisData.name.replace(/["]/g,'&#8221;'),
            itemImg = thisData.imageName,
            itemOldPrice = thisData.oldPrice,
            itemPrice = thisData.price,
            itemPaymentConditions = thisData.productInfo.paymentConditions,
            htmlOldPrice;

        if (itemOldPrice) {
            htmlOldPrice = "<span class='m-card__price-old'>De "+itemOldPrice+"</span>";
        } else {
            htmlOldPrice = "";
        }
        
        var html =  '<a class="m-card__link" href="'+itemUrl+'" title="'+itemTitle+'">' +
	                    '<div class="m-card__image">' +
	                        '<figure>' +
	                            '<img src="'+itemImg+'" alt="'+itemTitle+'" width="130" height="130">' +
	                        '</figure>' +
	                    '</div>' +
	                    '<h1 class="m-card__title">'+itemTitle+'</h1>' +
	                    '<div class="m-card__price">' +
	                        htmlOldPrice +
	                        '<span class="m-card__price-primary">Por <strong>'+itemPrice+'</strong></span>' +
	                        '<span class="m-card__price-conditions">'+itemPaymentConditions+'</span>' +
	                    '</div>' +
                	'</a>';

        var selector = document.getElementById(type);
        var item = document.createElement('section');
        item.className = "m-card";
        if (type == "recommendation") {
        	item.className += " wSlide__item";
        }
        item.innerHTML = html;
        selector.appendChild(item);
    }

    if (type == "reference"){
        var thisData = data;
        htmlItem(thisData);
    }

    if (type == "recommendation"){
        for (var i = 0; i < data.length; i++){
            var thisData = data[i];
            htmlItem(thisData);
        }

        // Call slide
        wSlide();
    }
}
