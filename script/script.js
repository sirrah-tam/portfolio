
var totalpts = document.getElementById('totalpts');
var htmlpts = document.getElementById('htmlpts');
var csspts = document.getElementById('csspts');
var jspts = document.getElementById('jspts');

$.ajax({
  url: "https://teamtreehouse.com/matharris.json"
}).done(function(data) {;
  totalpts.innerHTML = numberWithCommas(data.points.total);
  htmlpts.innerHTML = numberWithCommas(data.points.HTML);
  csspts.innerHTML = numberWithCommas(data.points.CSS);
  jspts.innerHTML = numberWithCommas(data.points.JavaScript);
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
