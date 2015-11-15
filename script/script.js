
var totalpts = document.getElementById('totalpts');
var htmlpts = document.getElementById('htmlpts');
var csspts = document.getElementById('csspts');
var jspts = document.getElementById('jspts');
var wp = document.getElementById('wp');
var devtools = document.getElementById('devtools');
var php = document.getElementById('php');
var $badgesDiv = $('#badges');

$.ajax({
  url: "https://teamtreehouse.com/matharris.json"
}).done(function(data) {
  totalpts.innerHTML = numberWithCommas(data.points.total);
  htmlpts.innerHTML = numberWithCommas(data.points.HTML);
  csspts.innerHTML = numberWithCommas(data.points.CSS);
  jspts.innerHTML = numberWithCommas(data.points.JavaScript);
  wp.innerHTML = numberWithCommas(data.points.WordPress);
  devtools.innerHTML = numberWithCommas(data.points['Development Tools']);
  php.innerHTML = numberWithCommas(data.points.PHP);
  var badgeNum = data.badges.length - 1;
  var lastthreebadge = data.badges.length - 4;
  for ( var i = badgeNum; i >= lastthreebadge; i-- ){
  	var badgeInfo = "<div class='tthbadge'>";
  	badgeInfo += "<img src=";
  	badgeInfo += "'" + data.badges[i].icon_url + "'";
  	badgeInfo += " />";
  	badgeInfo += "<p>" + data.badges[i].name + "</p>";
    badgeInfo += "</div>";
  	$badgesDiv.append(badgeInfo);
  }
});

// var xhr = new XMLHttpRequest();
//
// xhr.onload = function() {
//   if (xhr.status === 200) {
//
//   }
// }
//
// xhr.open("GET", "https://teamtreehouse.com/matharris.json");
//
// xhr.send(data);
//
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
