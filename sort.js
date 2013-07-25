var common = [], uncommon = [], rare = [], veryRare = [], extremelyRare = [], variant = [], chase = [], itemGrid, items;

itemGrid = $("div.collection ul.item-grid");
items = itemGrid.children();

items.each(function(i,e){
  var rarity;
  if($(this).find("span.title").children("a").attr("class")) {
    rarity = $(this).find("span.title").children("a").attr("class");
  } else {
    rarity = $(this).find("div.piece").attr("class");

    rarity = rarity.replace("piece ", "");
    rarity = rarity.replace("one-quarter ", "");
    rarity = rarity.replace("empty ", "");
  }

  switch(rarity) {

    case "common":
      common.push(e);
      break;
    case "uncommon":
      uncommon.push(e);
      break;
    case "rare":
      rare.push(e);
      break;
    case "veryRare":
      veryRare.push(e);
      break;
    case "extremelyRare":
      extremelyRare.push(e);
      break;
    case "variant":
      variant.push(e);
      break;
    case "chase":
      chase.push(e);
      break;

  }

});

prependEl = function(e) {
  itemGrid.prepend(e);
}

common.forEach(function(e,i,a){
  prependEl(e);
});

uncommon.forEach(function(e,i,a){
  prependEl(e);
});

rare.forEach(function(e,i,a){
  prependEl(e);
});

veryRare.forEach(function(e,i,a){
  prependEl(e);
});

extremelyRare.forEach(function(e,i,a){
  prependEl(e);
});

variant.forEach(function(e,i,a){
  prependEl(e);
});

chase.forEach(function(e,i,a){
  prependEl(e);
});
