var itemGrid, css, head, style;

itemGrid = $("div.collection ul.item-grid");

itemGrid.toggleClass("om-zoomout");

css = '.om-zoomout .piece.one-quarter .img, .om-zoomout .piece.one-quarter img, .om-zoomout .piece.one-quarter span.title { width: 100px; height: auto; }';
css += '.om-zoomout .piece.empty .img { height: 96px !important; -webkit-background-size: 40px 40px; -moz-background-size: 40px 40px; -o-background-size: 40px 40px; background-size: 40px 40px; }';

head = document.getElementsByTagName('head')[0];
style = document.createElement('style');

style.type = 'text/css';
if (style.styleSheet){
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}

head.appendChild(style);
