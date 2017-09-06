var wSlide = function(){

	// Selector default
	var slide = document.getElementsByClassName("wSlide");

	// Function for init
	var initSlide = function(){

		// Configs default
		var item = document.getElementsByClassName("wSlide__item"),
			listOfItems = document.getElementsByClassName("wSlide__items"),
			buttonNext = document.getElementsByClassName("wSlide__nav--next"),
			buttonPrev = document.getElementsByClassName("wSlide__nav--prev"),
			classButtonActive = "wSlide__nav--active",
			classButtonActiveWhite = "wSlide__nav--activeWhite",
			classItemActive = "wSlide__item--active",
			classItemNext = "wSlide__item--next",
			classItemPrev = "wSlide__item--prev",
			itemsToShow = 3;

		// This slide
		var totalItems = item.length,
			countNextItems = 0,
			countPrevItems = 0,
			itemActive = document.getElementsByClassName(classItemActive),
			itemNext = document.getElementsByClassName(classItemNext),
			itemPrev = document.getElementsByClassName(classItemPrev);

		console.log(totalItems);

		// Settings initial
		var settingsInitial = function(){
			var widthContainer = slide[0].offsetWidth,
				widthItem = widthContainer / (itemsToShow + .5),
				widthAllItems = widthItem * totalItems;

			// Set width on global
			listOfItems[0].style.width=(widthAllItems+"px");

			for (var x = 0; x < totalItems; x++) {
			    item[x].style.width=(widthItem+"px"); // Set width on items

				if (x < itemsToShow) {
					item[x].className += " " + classItemActive; // Add class "active" on visible items
				} else {
					item[x].className += " " + classItemNext; // Add class "next" on next items
					countNextItems++; // Count the next items
				}
			}

			// Navigation next and previous items
			var navigation = function(){
				var move = 0; // Control effect

				// Toggle buttons
				var controlButtons = function() {
					
					// Initial config
					buttonNext[0].classList.remove(classButtonActive);
					buttonPrev[0].classList.remove(classButtonActive);

					// Toggle button next
					if (countNextItems != 0) {
						buttonNext[0].className += " " + classButtonActive;
					} else {
						buttonNext[0].classList.remove(classButtonActive);
						buttonNext[0].classList.remove(classButtonActiveWhite);
						buttonPrev[0].className += " " + classButtonActiveWhite;
					}

					// Toggle button prev
					if (countPrevItems != 0){
						buttonPrev[0].className += " " + classButtonActive;
					} else {
						buttonPrev[0].classList.remove(classButtonActive);
						buttonPrev[0].classList.remove(classButtonActiveWhite);
						buttonNext[0].className += " " + classButtonActiveWhite;
					}

				};

				controlButtons();

				// Nav next
				buttonNext[0].onclick = function(){
					onClickButton("next");
				}

				// Nav prev
				buttonPrev[0].onclick = function(){
					onClickButton("prev");
				}

				var onClickButton = function(button) {

					// Fuction default for remove class "active" on all items
					var removeActives = function(){
						for (a = 0; a < totalItems; a++) {
							item[a].classList.remove(classItemActive);
						}
					}

					switch (button) {

						// onClick buttonNext
						case "next": {

							if (countNextItems > itemsToShow) { // For default effect

								// Refresh value to move 
								move -= (widthItem * itemsToShow);

								// Add class "prev" on past items
								for (a = 0; a < itemsToShow; a++) {
									itemActive[a].className+=" " + classItemPrev;
								}

								removeActives();

								// Add class "active" on new visible items
								for (a = 0; a < itemsToShow; a++) {
									itemNext[a].className += " " + classItemActive;
								}

							} else if (countNextItems != 0) { // For custom effect

								// The max value to move
								move = -( widthAllItems - (widthItem * itemsToShow) - (widthItem / 2) ); 

								// Add class "prev" on past items
								for (a = 0; a < countNextItems; a++) {
									itemActive[a].className+=" " + classItemPrev;
								}

								removeActives();
								
								// Add class "active" on new visible items
								var indexLastItem = totalItems - 1;
								for (a = indexLastItem; a > (indexLastItem - itemsToShow); a--) {
									item[a].className += " " + classItemActive;
								}

							}

							// Remove class "next" on new visible items
							for (a = 0; a < itemsToShow; a++) {
								itemActive[a].classList.remove(classItemNext);
							}

							break;
				
						}

						// onClick buttonPrev
						case "prev": {

							if (countPrevItems > itemsToShow) { // For default effect

								// Refresh value to move
								move += (widthItem * itemsToShow);

								// Add class "next" on past items
								for (a = 0; a < itemsToShow; a++) {
									itemActive[a].className+=" " + classItemNext;
								}

								removeActives();

								// Add class "active" on new visible items
								var indexLastPrev = countPrevItems - 1;
								for (a = indexLastPrev; a > (indexLastPrev - itemsToShow); a--) {
									itemPrev[a].className += " " + classItemActive;
								}

							} else if (countPrevItems != 0) { // For custom effect

								// Set initial value to move
								move = 0;

								// Add class "next" on past items
								var indexActiveItems = itemsToShow - 1;
								for (a = indexActiveItems; a > (indexActiveItems - countPrevItems); a--) {
									itemActive[a].className+=" " + classItemNext;
								}

								removeActives();

								// Add class "active" on new visible items
								for (a = 0; a < itemsToShow; a++) {
									item[a].className += " " + classItemActive;
								}

							}

							// Remove class "prev" on new visible items
							for (a = 0; a < itemsToShow; a++) {
								itemActive[a].classList.remove(classItemPrev);
							}

							break;
							
						}
					}

					// Slide effect
					listOfItems[0].style.transform="translate("+move+"px)";

					// Refresh count  of "next" and "prev" items
					countNextItems = itemNext.length;
					countPrevItems = itemPrev.length;

					// Toggle buttons nav
					controlButtons();
				}

			}();
			
		}();

	}();

	// Verify if there are slides on page for call function init
	// if (slide.length) initSlide();

};