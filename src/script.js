function regexMatch(input, pattern)
{
  let text = input.toString();
  return text.match(pattern);
}
function roundHalf(x)
{
    return Math.ceil(x/.5)*.5;
}
function roundNumber(num, scale) {
  if(!("" + num).includes("e")) {
    return +(Math.round(num + "e+" + scale)  + "e-" + scale);
  } else {
    var arr = ("" + num).split("e");
    var sig = ""
    if(+arr[1] + scale > 0) {
      sig = "+";
    }
    return +(Math.round(+arr[0] + "e" + sig + (+arr[1] + scale)) + "e-" + scale);
  }
}
function countStars(element) {
  var children = element.children;
  var starTotal = 0;
  for (var i = 0; i < children.length; i++) {
    var starChild = children[i];
    var starAlt = starChild.getAttribute('alt');
    var starValue = starAlt == 'fill' ? 1 : starAlt == 'half' ? .5 : 0;
    starTotal += starValue;
  }
  return starTotal;
}