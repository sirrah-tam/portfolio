var data = null;
var totalpts = document.getElementById('totalpts');
var htmlpts = document.getElementById('htmlpts');
var csspts = document.getElementById('csspts');
var jspts = document.getElementById('jspts');

var xhr = new XMLHttpRequest();

xhr.onload = function() {
  if (xhr.status === 200) {
    var profile = JSON.parse(xhr.responseText);
    totalpts.innerHTML = numberWithCommas(profile.points.total);
    htmlpts.innerHTML = numberWithCommas(profile.points.HTML);
    csspts.innerHTML = numberWithCommas(profile.points.CSS);
    jspts.innerHTML = numberWithCommas(profile.points.JavaScript);
  }
}

xhr.open("GET", "http://teamtreehouse.com/matharris.json");

xhr.send(data);

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
