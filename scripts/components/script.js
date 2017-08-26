/////////////////////////////
// Variables for selectors //
/////////////////////////////

// Team Treehouse Section
var totalpts = document.getElementById('totalpts');
var htmlpts = document.getElementById('htmlpts');
var csspts = document.getElementById('csspts');
var jspts = document.getElementById('jspts');
var wp = document.getElementById('wp');
var devtools = document.getElementById('devtools');
var php = document.getElementById('php');
$badgesDiv = $('#badges');

// Code School Report Section
var cdschoolTotalscr = document.getElementById('cdschool-totalscr');
var cdschoolCourses = document.getElementById('cd-school-courses');
var cdschoolTtlBadges = document.getElementById('cd-school-ttl-badges');
var $cdschoolBadges = $('#cdschool-badges');
var $csCompleted = $('#completed-courses');

///////////////////
// Ajax Requests //
///////////////////

// Getting profile data from Team Treehouse
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

// Getting profile data from Team Treehouse
$.ajax({
  url: "https://www.codeschool.com/users/sirrah_tam.json",
  type: "GET",
  async: true,
  contentType: "application/json",
  dataType: 'jsonp'
}).done(function(data){
  cdschoolTotalscr.innerHTML = numberWithCommas(data.user.total_score);
  cdschoolCourses.innerHTML = numberWithCommas(data.courses.completed.length);
  cdschoolTtlBadges.innerHTML = numberWithCommas(data.badges.length);

  // Completed courses
  var completed = '<ul>';
  for ( var i = 0; i <= 5; i++ ) {
    completed += '<li>';
    completed += '<a href="' + data.courses.completed[i].url + '" target="_blank">';
    completed += '<img src="' + data.courses.completed[i].badge + '" title="' + data.courses.completed[i].title + '">';
    completed += data.courses.completed[i].title;
    recentBadges += '</a>';
    completed += '</li>';
  }
  completed += '</ul>';
  $csCompleted.append(completed);

  // Recent Badges
  var recentBadges = '<ul>';
  for ( var i = 0; i <= 5; i++ ) {
    recentBadges += '<li>';
    recentBadges += '<a href="' + data.badges[i].course_url + '" target="_blank">';
    recentBadges += '<img src="' + data.badges[i].badge + '" title="' + data.badges[i].name + '">';
    recentBadges += data.badges[i].name;
    recentBadges += '</a>';
    recentBadges += '</li>';
  }
  completed += '</ul>';
  $cdschoolBadges.append(recentBadges);
})

///////////////
// Functions //
///////////////

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
