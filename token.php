<?php
/*
 * Handles SSO Login from login.nicti.de
 */


	//init stuff
	session_start();
	include 'settings.php';
	include 'libs/crest.php';
	
	//Load from URL
	$auth_token=$_GET['auth'];
	$refresh_token=$_GET['refresh'];
	
	//Get Character
	$array = array();
	$array = getCharacter($auth_token,$refresh_token);
	
	//print_r($array);
	
	//Init session stuff
	$_SESSION['charID']=$array->CharacterID;
	$_SESSION['charName']=$array->CharacterName;
	$_SESSION['access_token']=$auth_token;
	$_SESSION['refresh_token']=$refresh_token;
	
	header('location:http://indy.nicti.de');
?>