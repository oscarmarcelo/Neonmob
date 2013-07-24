var zoomSet = 'init', itemGrid, css, head, style;

itemGrid = $("div.collection ul.item-grid");

if (zoomSet == 'init') {

	css = '.om-zoomout .piece.one-quarter .img, .om-zoomout .piece.one-quarter img, .om-zoomout .piece.one-quarter span.title { width: 100px; height: auto; }';
	css += '.om-zoomout .piece.empty .img { height: 100px !important; -webkit-background-size: 40px 40px; -moz-background-size: 40px 40px; -o-background-size: 40px 40px; background-size: 40px 40px; }';
	css = '.om-zoomout2 .piece.one-quarter .img, .om-zoomout2 .piece.one-quarter img, .om-zoomout2 .piece.one-quarter span.title { width: 60px; height: auto; }';
	css += '.om-zoomout2 .piece.empty .img { height: 60px !important; -webkit-background-size: 20px 20px; -moz-background-size: 20px 20px; -o-background-size: 20px 20px; background-size: 20px 20px; }';

	head = document.getElementsByTagName('head')[0];
	style = document.createElement('style');

	style.type = 'text/css';
	if (style.styleSheet){
		style.styleSheet.cssText = css;
	} else {
		style.appendChild(document.createTextNode(css));
	}

	head.appendChild(style);

}

if(zoomSet == 1) {

	itemGrid.addClass("om-zoomout2").removeClass("om-zoomout");
	zoomSet = 2;

} else if(zoomSet == 2) {

	itemGrid.removeClass("om-zoomout");
	zoomSet = 0;

} else {

	itemGrid.addClass("om-zoomout");
	zoomSet = 1;

}
