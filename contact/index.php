<?php 
if(isset($_POST['submit'])){
    $to = "stephenstraymond@gmail.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $first_name = $_POST['first_name'];
    $subject = "Form submission";
    $subject2 = "Copy of your form submission";
    $message = $first_name . " wrote the following:" . "\n\n" . $_POST['message'];
    $message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['message'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    echo "Mail Sent. Thank you " . $first_name . ", we will contact you shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    }
?>
<!DOCTYPE html>
<!-- CONTACT ME -->
<html>
	<head>
		<title>Contact</title>
		<link href="css/contact.css" rel="stylesheet" type="text/css">
		<link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css?family=Quicksand" rel="stylesheet">
		<link rel="shortcut icon" href="img\favicon.ico"/>
	</head>
	<body>
		<div class="navcontainer">
			<ul>
				<li><a href = "..\index.html" target="_self">Home</a></li>
				<li><a href = "..\about\index.html" target="_self">About Me</a></li>
				<li><a href = "..\experience\index.html" target="_self">Experience</a></li>
				<li><a href = "..\projects\index.html" target="_self">Projects</a></li>
				<li><a href = "..\resume\index.html" target="_self">Resume</a></li>
				<li><a href = "..\contact\index.html" target="_self">Contact</a></li>
			</ul>
		</div>
		<hr />
		<div class="main">
			<ul>
				<div class="topper"><li><h2>Contact</h2></li>
				<li><br /></li>
				<li><p id="subtitle">Use form below to send an email, or use the contact information on the right!</p></li>
				<li><br /></li></div>
				<hr />
				<li><br /></li>
				<div class="contentlist">
				<ul>
					<li><ul id ="funlist">
					<li><h3>Send An Email</h3></li>
					<br />
					<hr />
					<br />
					<li><form action="#" method="post">
						<p>Name: </p><input type="text" name="first_name" size="40"><br>
						<br />
						<p>Email: </p><input type="text" name="email" size="40"><br>
						<br />
						<p>Message:</p><textarea rows="10" name="message" cols="58"></textarea><br>
						<br />
						<input type="submit" name="submit" value="Submit">
						</form></li>
					</ul>
					</li>
					<li><ul  id="infolist">
						<li><h3>Contact Information</h3></li>
						<br />
						<hr />
						<br />
						<li><p>
						Stephen St. Raymond<br />
						3221 Summer St<br />
						Philadelphia, PA 19104
						</p></li>
						<br />
						<li><p>T: (475) - 282 - 5916</p><a href="mailto:stephenstraymond@gmail.com" target="_blank">E: stephenstraymond@gmail.com</a></li>
						<br />
						<hr />
						<br />
						<li style="padding-right: 15px;"><a href="https://www.facebook.com/sstraymond" target="_blank"><img src="img/fb.png" height="42" width="42"></a></li>
						<li style="padding-right: 15px;"><a href="https://plus.google.com/+StephenStRaymond" target="_blank"><img src="img/gplus.png" height="42" width="42"></a></li>
						<li><a href="https://www.linkedin.com/in/sgs49/" target="_blank"><img src="img/lin.png" height="42" width="42"></a></li>
						</ul>
				</ul>
				</div>
			</ul>
		</div>
		<hr />
		<div class="footer">
			<h4>Website designed and built by Stephen St. Raymond</h4>
		</div>
	<script src='https://code.jquery.com/jquery-3.1.0.min.js'></script>
	<script src='js/contact.js'></script>
	</body>

</html>