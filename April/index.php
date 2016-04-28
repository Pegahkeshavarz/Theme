<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
        <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/smoothness/jquery-ui.css">
        <link href='https://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css">

        <link rel="stylesheet" href="./css/style.css" media="screen" title="no title" charset="utf-8">
    </head>
    <body id="body">
        <div class="bg">
        <div class="container landing">
            <div class="row title">
                <div class="twelve columns">
                    <h1>Howard Jiang</h1>
                    <p>Full Stack Developer</p>
                </div>
            </div>
            <div class="row navbar">
                <div class="twelve columns">
                    <ul id="nav">
                        <li class="menuButton" data-target="home"><span class="under">H</span>ome</li>
                        <li class="menuButton" data-target="about"><span class="under">S</span>killset</li>
                        <li class="menuButton" data-target="projects"><span class="under">P</span>roject</li>
                        <li class="menuButton" data-target="contact"><span class="under">C</span>ontact</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
        <!-- Name Logo for scrolling to top -->
        <div class="logo"><h4>Howard Jiang</h4></div>

        <?php require('./home.html'); ?>

        <?php require('./about.html'); ?>

        <?php require('./project.html'); ?>

        <?php require('./contact.php'); ?>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
        <script src="./js/main.js"></script>
    </body>
</html>
