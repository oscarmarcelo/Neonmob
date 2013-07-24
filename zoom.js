var itemGrid, css, head, style;

itemGrid = $("div.collection ul.item-grid");

itemGrid.className = 'item-grid om-zoomout';

css = 'om-zoomout .piece.one-quarter .img, om-zoomout .piece.one-quarter img { width: 100px; height: auto; }';
css += '.om-zoomout .piece.empty .img { height: 96px; -webkit-background-size: 50% 50%; -moz-background-size: 50% 50%; -o-background-size: 50% 50%; background-size: 50% 50%; }';

head = document.getElementsByTagName('head')[0];
style = document.createElement('style');

style.type = 'text/css';
if (style.styleSheet){
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}

head.appendChild(style);
