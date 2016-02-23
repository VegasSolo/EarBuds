<?php
session_start();
if (isset($_REQUEST['logout'])) {
	session_unset();
	session_destroy();
	session_start();
}
?>

<doctype !html>
<style>
fieldset { width: 330px; }
</style>

	<?php
		$uname = null;
		$pword = null;
		$fname = null;
		$lname = null;
		$pgtitle = null;
		$bgcolor = null;
		$img = null;
		$lastline = null;
		
		$error = null;
		$invalid = false;
		
		$useraccounts = null;
		
		$initial = true;
		$userexist = false;
		$savesession = false;
		$created = false;
		$write = false;
		
		$file =fopen("assignment11-account-info.txt","r") or die("unable to open file");
		while(!feof($file)){
			$line = fgets($file);
			$line= trim($line);
			if(strlen($line) > 0){
				$arr = explode(";",$line);
				$useraccounts[][] = $arr;
			}
		}
		fclose($file);
		
		if (isset($_GET['login'])) {
			if ($_GET['uname'] == null) {
				$error = "User name cannot be blank.";
				$invalid = true;
			}
			if ($invalid == false && $_GET['pword'] == null) {
				$error = "Password cannot be blank.";
				$invalid = true;
			}
		}
		if ($invalid == false && isset($_GET['login'])) {
			$uname = $_GET['uname'];
			$pword = $_GET['pword'];
			foreach ($useraccounts as $var) {
				foreach ($var as $v) {
					if ($v[0] == $uname) {
						if ($v[1] == $pword) { // signed in
							$fname = $v[2];
							$lname = $v[3];
							$bgcolor = $v[4];
							$pgtitle = $v[5];
							$img = $v[6];
							$initial = false;
							$savesession = true;
							break 2;
						} else { // incorrect password
							$error = "User name or password incorrect.";
							$invalid = true;
							break 2;
						}
					}
				}
			}
		}
		
		if (isset($_GET['signup'])) {
			if ($_GET['uname'] == null) {
				$error = "User name cannot be blank.";
				$invalid = true;
			}
			if ($invalid == false && $_GET['pword'] == null) {
				$error = "Password cannot be blank.";
				$invalid = true;
			}
			if ($invalid == false && $_GET['fname'] == null) {
				$error = "First name cannot be blank.";
				$invalid = true;
			}
			if ($invalid == false && $_GET['lname'] == null) {
				$error = "Last name cannot be blank.";
				$invalid = true;
			}
		}
		if ($invalid == false && isset($_GET['signup'])) {
			$uname = $_GET['uname'];
			$pword = $_GET['pword'];
			$fname = $_GET['fname'];
			$lname = $_GET['lname'];
			foreach ($useraccounts as $var) {
				foreach ($var as $v) {
					if ($v[0] == $uname) {
						$userexist = true;
						$invalid = true;
						break 2;
					}
				}
			}
			if ($userexist == false) {
				if ($pgtitle == null) {
					$pgtitle = "Welcome to Dillon VanBuskirk's Assignment 11 PHP page!";
				}
				if ($bgcolor == null) {
					$bgcolor = "white";
				}
				if ($img == null) {
					$img = "http://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Stick_Figure.svg/170px-Stick_Figure.svg.png";
				}
				$lastline = $uname . ";" . $pword . ";" . $fname . ";" . $lname . ";" . 
						$bgcolor . ";" . $pgtitle . ";" . $img . "\n";
				$initial = false;
				$savesession = true;
			}
		}
		
		if ($savesession) {
			if ($pgtitle == null) {
				$pgtitle = "Welcome to Dillon VanBuskirk's Assignment 11 PHP page!";
			}
			if ($bgcolor == null) {
				$bgcolor = "white";
			}
			if ($img == null) {
				$img = "http://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Stick_Figure.svg/170px-Stick_Figure.svg.png";
			}
			$_SESSION['uname'] = $uname;
			$_SESSION['pword'] = $pword;
			$_SESSION['fname'] = $fname;
			$_SESSION['lname'] = $lname;
			$_SESSION['pgtitle'] = $pgtitle;
			$_SESSION['bgcolor'] = $bgcolor;
			$_SESSION['img'] = $img;
			$write = true;
		}
		
		if (isset($_GET['editinfo'])) {
			$_SESSION['uname'] = $_GET['edituname'];
			$_SESSION['pword'] = $_GET['editpword'];
			$_SESSION['fname'] = $_GET['editfname'];
			$_SESSION['lname'] = $_GET['editlname'];
			$_SESSION['pgtitle'] = $_GET['editpgtitle'];
			$_SESSION['bgcolor'] = $_GET['editbgcolor'];
			$_SESSION['img'] = $_GET['editimg'];
			$write = true;
			$initial = false;
		}
		
		if ($write) {
			$file =fopen("assignment11-account-info.txt","w") or die("unable to open file");
			$total = null;
			foreach ($useraccounts as $var) {
				foreach ($var as $v) {
					if ($_SESSION['fname'] == $v[2]) {
						$lines = $uname . ";" . $pword . ";" . $_SESSION['fname'] . ";" . $_SESSION['lname'] . ";" . 
									$_SESSION['bgcolor'] . ";" . $_SESSION['pgtitle'] . ";" . $_SESSION['img'] . "\n"; 
						$total .= $lines;
						break;
					}
					$lines = implode(";",$v);
					$lines .= "\n";
					$total .= $lines;
				}
			}
			if ($lastline !== null) {
				$total .= $lastline;
			}
			fwrite($file,$total);
			fclose($file);
		}
		
		if ($initial) {
			?>
			<html>
			<head>
				<title>Welcome to Dillon VanBuskirk's Assignment 11 PHP page!</title>
			</head>
			<body>
				<h1>Welcome to Dillon VanBuskirk's Assignment 11 PHP page!</h1>
			<?php
			if ($invalid) {
				echo "<p><font color=red>$error</p>";
			}
			?>
			<p><font color=black>If you have an account already, please log in below:</p>
			<form name='login' action='assignment11.php' method='get'>
				<fieldset>
				<table> <tbody>
				<tr><td>User Name: </td><td><input type='text' name='uname' id='uname'></td></tr>
				<tr><td>Password: </td><td><input type='password' name='pword' id='pword'></td></tr>
				</tbody> </table>
				<input type='submit' value='Login' name='login'>
				</fieldset>
			</form>
			<br>
			<p>Otherwise, you can create an account below:</p>
			<form name='signup' action='assignment11.php' method='get'>
				<fieldset>
				<table> <tbody>
				<tr><td>User Name: </td><td><input type='text' name='uname' id='uname'></td></tr>
				<tr><td>Password: </td><td><input type='password' name='pword' id='pword'></td></tr>
				<tr><td>First Name: </td><td><input type='text' name='fname' id='fname'></td></tr>
				<tr><td>Last Name: </td><td><input type='text' name='lname' id='lname'></td></tr>
				</tbody> </table>
				<input type='submit' value='Create Account' name='signup'>
				</fieldset>
			</form>
			</body>
			</html>
			<?php
		}
		else {
			?>
			<html>
			<head>
				<title><?=$_SESSION['pgtitle']?></title>
			</head>
			<body bgcolor=<?=$_SESSION['bgcolor']?>>
				<h1><?=$_SESSION['pgtitle']?></h1>
			<br><img src=<?=$_SESSION['img']?> width="200px" height="200px" alt="User Image"><br><br>
						
			<form action='assignment11.php' method='get'>
				<input type='hidden' name='logout' value='true'>
				<input type='submit' value='Logout'>
			</form>
			<?php
			if (isset($_GET['uname'])) {
				$uname = $_GET['uname'];
				$pword = $_GET['pword'];
			} else {
				$uname = $_GET['edituname'];
				$pword = $_GET['editpword'];
			}
			
			?>
			<form name ='editinfo' action='assignment11.php' method='get'>
			<fieldset>
				<table> <tbody>
				<input type='hidden' value=<?=$uname?> name='edituname' id='edituname'>
				<input type='hidden' value=<?=$pword?> name='editpword' id='editpword'>
				<tr><td>First Name: </td><td><input type='text' name='editfname' id='editfname' value=<?php echo htmlentities($_SESSION['fname']);?>></td></tr>
				<tr><td>Last Name: </td><td><input type='text' name='editlname' id='editlname' value=<?php echo htmlentities($_SESSION['lname']);?>></td></tr>
				<tr><td>Background Color: </td><td><input type='text' name='editbgcolor' id='editbgcolor' value=<?php echo htmlentities($_SESSION['bgcolor']);?>></td></tr>
				<tr><td>Page Title: </td><td><input type='text' name='editpgtitle' id='editpgtitle' value=<?php echo htmlentities($_SESSION['pgtitle']);?>></td></tr>
				<tr><td>User Image: </td><td><input type='text' name='editimg' id='editimg' value=<?php echo htmlentities($_SESSION['img']);?>></td></tr>
				</tbody> </table>
				<input type='submit' value='Edit Account Information' name='editinfo'>
			</fieldset>
			</form>
			</body>
			</html>
			<?php
		}
		?>
