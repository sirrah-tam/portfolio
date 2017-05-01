<!doctype html>
<html lang="en">
<head>
	<meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
	<title>Sirrah Tam | Web Developer</title>
	<meta content="Showing off my first website" name="description" />
	<meta content="width=device-width, initial-scale=1.0" name="viewport" />
	<link href="styles/main.css" rel="stylesheet" type="text/css" />
</head>
<body>
	<header>
		<nav class="navbar navbar-inverse navbar-static-top">
			<div class="container">
				<div class="navbar-header">
					<a href="index.html" class="navbar-brand">
						Sirrah Tam | Mat Harris
					</a>
				</div>
			</div>
		</nav>
	</header>

	<section class="intro">
		<div class="row">
			<div class="col-md-4 col-md-offset-1">
				<img src="http://www.gravatar.com/avatar/6346dcbd2067cc872dc03286a69612fb?s=350" class="img-circle img-responsive center-block">
			</div>
			<div class="col-md-6 ">
				<h1 class="text-center">Mat Harris | Web Developer</h1>
				<blockquote>
					<p>When one man, for whatever reason, has the opportunity to lead an extraordinary life, he has no right to keep it to himself.</p>
					<footer class="text-right">JACQUES COUSTEAU</footer>
				</blockquote>
			</div>
		</div>
	</section>
	<section class="about">
		<div class="row">
			<div class="col-md-8 col-md-offset-2">
				<h2 class="text-center">About Me</h2>
				<p>I am a self-taught front-end web developer with an academic background in Political Science and International Relations. I got my start working in non-profit/association special projects and quickly realized that I excelled most when using code to make things more beautiful and efficient.</p>

				<p>I have learned by using online resources such as <a href="https://teamtreehouse.com/" target="_blank">Team Treehouse</a>, <a href="https://www.codecademy.com/" target="_blank">Codecademy</a>, <a href="https://www.codeschool.com/" target="_blank">CodeSchool</a>, and <a href="http://www.theodinproject.com/" target="_blank">The Odin Project</a> and also attended an in person JavaScript Course at <a href="https://generalassemb.ly/" target="_blank">General Assembly DC</a>.</p>

				<p>1+ year experience in HTML, CSS, JavaScript with working knowledge of PHP, WordPress development, version control using Git (GitHub and Bitbucket).</p>
			</div>
		</div>
	</section>
	<section class="tth">
		<div class="row">
			<div class="col-md-8 col-md-offset-2">
				<div class="header">
					<div class="col-xs-2">
						<a href="https://teamtreehouse.com/matharris">
							<img src="dist/img/tth-logo.png">
						</a>
					</div>
					<div class="col-xs-8">
						<h2>Team Treehouse Profile</h2>
					</div>
					<div class="col-xs-2">
						<i class="fa fa-caret-down"></i>
					</div>
				</div>
				<div class="row profile">
					<div class="col-md-6">
						<div class="points">
							<p id="totalpts" class="totalpts"></p>
							<p class="total">Total Points</p>
							<ul>
								<li><i class="fa fa-circle html"></i>HTML: <span id="htmlpts"></span></li>
								<li><i class="fa fa-circle css"></i>CSS: <span id="csspts"></span></li>
								<li><i class="fa fa-circle js"></i>JavaScript: <span id="jspts"></span></li>
								<li><i class="fa fa-circle wp"></i>Wordpress: <span id="wp"></span></li>
								<li><i class="fa fa-circle devtools"></i>Development Tools: <span id="devtools"></span></li>
								<li><i class="fa fa-circle php"></i>PHP: <span id="php"></span></li>
							</ul>
							<h4><a href="https://teamtreehouse.com/matharris" target="_blank">See more at Team Treehouse >></a></h4>
						</div>
					</div>
					<div class="col-md-6">
						<div id="badges" class="badges">
							<h3>Recent Badges</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="cdschool">
		<div class="row">
			<div class="col-md-8 col-md-offset-2">
				<div class="header">
					<div class="col-xs-2">
						<a href="https://www.codeschool.com/users/sirrah_tam">
							<img src="dist/img/codeschool-logo.png">
						</a>
					</div>
					<div class="col-xs-8">
						<h2>CodeSchool Report Card</h2>
					</div>
					<div class="col-xs-2">
						<i class="fa fa-caret-down"></i>
					</div>
				</div>
				<div class="row profile">
					<div class="col-md-12">
						<div class="row points">
							<div class="col-md-4">
								<span id="cdschool-totalscr" class="totalpts"></span>
								<p class="total">Total Points</p>
							</div>
							<div class="col-md-4">
								<span id="cd-school-courses" class="totalpts"></span>
								<p class="total">Completed Courses</p>
							</div>
							<div class="col-md-4">
								<span id="cd-school-ttl-badges" class="totalpts"></span>
								<p class="total">Total Badges</p>
							</div>
						</div>
						<div class="row badges">
							<div class="col-md-6">
								<h3>Recent Completed Courses</h3>
								<div id="completed-courses"></div>
							</div>
							<div class="col-md-6">
								<div id="cdschool-badges">
									<h3>Recent Badges</h3>
								</div>
							</div>
						</div>
					</div>
					<h4><a href="https://www.codeschool.com/users/sirrah_tam">See my full report card at Code School >></a></h4>
				</div>
			</div>
		</div>
	</section>
	<footer class="contact">
		<div class="row">
			<div class="col-md-6 col-md-offset-3">
				<h2 class="text-center">Where To Find Me</h2>
				<ul>
					<li><i class="fa fa-envelope"></i>Email: <a href="mailto:sirrahtam@sirrahtam.com">sirrahtam@sirrahtam.com</a></li>
					<li><i class="fa fa-twitter"></i>Twitter: <a href="https://twitter.com/sirrah_tam">@sirrah_tam</a></li>
					<li><i class="fa fa-github"></i>Github: <a href="https://github.com/sirrah-tam">https://github.com/sirrah-tam</a></li>
				</ul>
			</div>
		</div>
	</footer>
	<script src="scripts/main.js"></script>
</body>
</html>