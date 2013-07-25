if(duplicateSet == undefined) {
	var bkmDupl, duplicateSet = 'init', itemGrid, items, css, head, style;
}

bkmDupl = 'start';

itemGrid = $("div.collection ul.item-grid");

if (duplicateSet == 'init') {

	items = itemGrid.children();

	items.each(function(){

		if($(this).find(".piece").hasClass("multiple")) {
			$(this).addClass("duplicate");
		} else {
			$(this).addClass("non-duplicate");
		}

	});

	css = '.om-duplicates li.non-duplicate { opacity: 0.2 }';
	css += '.om-duplicates2 li.non-duplicate { display: none; }';

	head = document.getElementsByTagName('head')[0];
	style = document.createElement('style');

	style.type = 'text/css';
	if (style.styleSheet){
		style.styleSheet.cssText = css;
	} else {
		style.appendChild(document.createTextNode(css));
	}

	head.appendChild(style);

	itemGrid.addClass("om-duplicates");
	duplicateSet = '1';
	bkmDupl = 'end';

}

if(bkmDupl == 'start' && duplicateSet == '0') {

	itemGrid.addClass("om-duplicates");
	duplicateSet = '1';
	bkmDupl = 'end';

}

if(bkmDupl == 'start' && duplicateSet == '1') {

	itemGrid.addClass("om-duplicates2").removeClass("om-duplicates");
	duplicateSet = '2';
	bkmDupl = 'end';

}
if(bkmDupl == 'start' && duplicateSet == '2') {

	itemGrid.removeClass("om-duplicates2");
	duplicateSet = '0';
	bkmDupl = 'end';

}
