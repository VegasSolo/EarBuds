<?php
	//Nick Mize's Implementation of login screen for website
	//Define variable
	$pagetitle = "Welcome to Music Site";
	$userfile = "../Database/account-info.txt";
	$ERRORMSG = "";
	$IN_A_SESSION = false;
	$color = "white";
	
//read a user from the file into session
function read_f(){
	global $userfile,$IN_A_SESSION;
	$userline;
	$userarr;
	$handle = fopen($userfile,"r");
	
	while(feof($handle) == false){
		$userline = fgets($handle);
		$userline = str_replace("\n", "", $userline); //removes "\n" character from string
		$userarr = explode(";",$userline);
		
		if(!$IN_A_SESSION){
			if(($_REQUEST["user"] == $userarr[0]) && ($_REQUEST["pass"] == $userarr[1])){

				 //CREATE NEW USER SESSION
				session_start();

				$_SESSION["user"] = $userarr[0];
				$_SESSION["pass"] = $userarr[1];
				$_SESSION["fname"] = $userarr[2];
				$_SESSION["lname"] = $userarr[3];
				$_SESSION["color"] = $userarr[4];
				$_SESSION["title"] = $userarr[5];
				$_SESSION["img"] = $userarr[6];

				fclose($handle);
				return true;				
			}
			else if($_REQUEST["user"] == $userarr[0]){
				fclose($handle);
				return false;		
			}
		}
		else{
			if(($_SESSION["user"] == $userarr[0]) && ($_SESSION["pass"] == $userarr[1])){

				$_SESSION["fname"] = $userarr[2];
				$_SESSION["lname"] = $userarr[3];
				$_SESSION["color"] = $userarr[4];
				$_SESSION["title"] = $userarr[5];
				$_SESSION["img"] = $userarr[6];

				fclose($handle);
				return true;				
			}	
			else if($_SESSION["user"] == $userarr[0]){
				fclose($handle);
				return false;	
			}
		}
	}
	fclose($handle);
	return false;
}
//write a new user to file
function write_f(){
	global $userfile,$IN_A_SESSION;
	if(!$IN_A_SESSION){
		$usercreate = $_REQUEST["user"].";".$_REQUEST["pass"].";".$_REQUEST["fname"].";".$_REQUEST["lname"].";"."white".";".$_REQUEST["fname"]." ".$_REQUEST["lname"]."'s Profile.".";"."http://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Stick_Figure.svg/170px-Stick_Figure.svg.png\n";
	}
	else{
		$usercreate = $_SESSION["user"].";".$_SESSION["pass"].";".$_REQUEST["fname"].";".$_REQUEST["lname"].";".$_REQUEST["color"].";".$_REQUEST["title"].";".$_REQUEST["img"]."\n";
	}
	
	if(!$IN_A_SESSION){
		$handle = fopen($userfile,"a");
		fwrite($handle,$usercreate);
		fclose($handle);
		
	}
	else{
		$users = file($userfile);
		foreach ($users as $key => $val) {
	    				
			$userarr = str_replace("\n", "", $val); //removes "\n" character from string
			$userarr = explode(";",$userarr);

			if(($userarr[0] == $_SESSION['user']) && ($userarr[1] == $_SESSION['pass'])){
					$users[$key] = $usercreate;
			}
		}
		$users = implode("",$users);
		file_put_contents ($userfile ,$users);
	}
	
}
//Find if the user is already in file
function check_user(){
	global $userfile,$IN_A_SESSION,$ERRORMSG;
	$userline;
	$userarr;
	
	if(@filesize($userfile) != 0){
		$handle = fopen($userfile,"r");
		while(feof($handle) == false){
			$userline = fgets($handle);
			$userline = str_replace("\n", "", $userline); //removes "\n" character from string
			$userarr = explode(";",$userline);
			
			if(isset($userarr[0])){
				if(!$IN_A_SESSION){
					if(($_REQUEST["user"] == $userarr[0]) && ($_REQUEST["pass"] == $userarr[1])){
						fclose($handle);
						return true;
					}			
					else if($_REQUEST["user"] == $userarr[0]){
						fclose($handle);
						return true;
					}
				}
				else{
					if(($_SESSION["user"] == $userarr[0]) && ($_SESSION["pass"] == $userarr[1])){
						fclose($handle);
						return true;
					}
				}
			}
		}
		fclose($handle);
		return false;
	}
	else
	return false;
}
/////////////////////////////////////////////////////////////////////////////////////


	//Do this if on login screen
	//Do this if you need to edit user
	if(isset($_REQUEST["edit"]) && $_REQUEST["edit"]  == true){ 
		session_start();
		$IN_A_SESSION = true;	
	
		write_f();
		read_f();
	}
	else if(isset($_REQUEST["create"]) && $_REQUEST["create"]  == true){
	//IS SET IF THEY CREATE
		if($_REQUEST['user'] != "" && $_REQUEST['pass'] != "" && $_REQUEST['fname'] != "" && $_REQUEST['lname'] != ""){
			if(check_user()){ //check_user() returns true if user is found
				$ERRORMSG = "User already created";
				unset($_REQUEST['fname']);
			}
			else{
				write_f();
				read_f();
			}
		}
		else{
			$ERRORMSG = "Please fill in all fields to create a new user";
		}
	}
	//IS SET IF THEY LOGIN
	else if(isset($_REQUEST['user'])){
		if($_REQUEST['user'] != "" && $_REQUEST['pass'] != ""){
			if(check_user()){ //check_user() returns true if user is found
			
				if(!read_f()){
					$ERRORMSG = "Incorrect Password";
				}
			}
			else{
				$ERRORMSG = "User not found, Username or Password may be incorrect";
			}
		}
		else{
			$ERRORMSG = "Please enter a username and password";
		}
	}
	
	//Check if in a session
	if(isset($_SESSION['fname'])){
		$IN_A_SESSION = true;
		$color = $_SESSION['color'];
	}
	else{
		session_start();
		if(isset($_SESSION['fname'])){
			$IN_A_SESSION = true;
			$color = $_SESSION['color'];
		}
		else{
			$IN_A_SESSION = false;
			$color = "white";
			session_unset();
			session_destroy();
		}
	}

	//Check if they are logged in and choose what to display
	if(!$IN_A_SESSION){
		$DISPLAYuser = "display:none";
		$DISPLAYlogin = "display:inline";
	}
	else{
		$pagetitle = $_SESSION['title'];
		$DISPLAYuser = "display:inline";
		$DISPLAYlogin = "display:none";
	}

	//check if they want to logout
	if(isset($_REQUEST["logout"])){
		if($_REQUEST["logout"] == "doLogout")

			session_unset();
			session_destroy();
			$pagetitle = "Welcome to Music Site";
			$DISPLAYuser = "display:none";
			$DISPLAYlogin = "display:inline";
			$color = 'white';
	}
?>

<html>
	<head><title><?=$pagetitle?></title></head>

	<h1><?=$pagetitle?></h1>
	<font color="red"><?=$ERRORMSG?></font>

	<hr>

	<body>
		<body bgcolor="<?=$color?>">
	
		<img src="<?=$_SESSION['img']?>" style="<?=$DISPLAYuser?>" width="200px" height="200px"><br>
		<form name="logout" style="<?=$DISPLAYuser?>" action="login.php" method="get">
			<input type="hidden" name="logout" value="doLogout">
			<input type="submit" value="Logout" />
		</form>
	
	
		<div style="<?=$DISPLAYlogin?>">Login:</div><br>
		<form name="login" style="<?=$DISPLAYlogin?>" action="login.php" method="get">
			User Name:<input type="text" name="user"/><br>
			Password: <input type="password" name="pass"/><br>
			<input type="submit" value="Login"/>
		</form><br>
	
		<hr>
		
		<br>
		<div style="<?=$DISPLAYlogin?>">Create Account:</div><br>
		<form name="create" style="<?=$DISPLAYlogin?>" action="login.php" method="get">
			User Name: <input type="text" name="user"/><br>
			Password:  <input type="password" name="pass"/><br>
			First Name:<input type="text" name="fname"/><br>
			Last Name: <input type="text" name="lname"/><br>
			<input type="hidden" name="create" value="true">
			<input type="submit" value="Create"/>
		</form><br>
	
		<div style="<?=$DISPLAYuser?>">Edit User:</div><br>
		<form name="edit" action="login.php" style="<?=$DISPLAYuser?>" method="get">
			<table style="<?=$DISPLAYuser?>">
			<tr>
				<td>First Name:</td>
				<td><input type="text" name="fname" value="<?=$_SESSION['fname']?>"/></td>
			</tr>
			<tr>
				<td>Last Name:</td>
				<td><input type="text" name="lname" value="<?=$_SESSION['lname']?>"/></td>
			</tr>
			<tr>
				<td>Background color:</td>
				<td><input type="text" name="color" value="<?=$_SESSION['color']?>"/></td>
			</tr>
			<tr>
				<td>Title:</td>
				<td><input type="text" name="title" value="<?=$_SESSION['title']?>"/></td>
			</tr>
			<tr>
				<td>Image:</td>
				<td><input type="text" name="img" value="<?=$_SESSION['img']?>"/></td>
			</tr>
			</table>
		<input type="hidden" name="edit" value="true">
		<br><input type="submit" value="Edit Account Info" />
		</form>
	</body>
</html>
