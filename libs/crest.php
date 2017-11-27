<?php
session_start();
/*
executeGetCrest
Executes Get Crest Commands
@param url			Endpoint to use
@param authType		Type of Authorization (Bearer/Basic)
@param auth_token	Authorization Token
@param refresh_tokenRefresh Token
@return Array of Command result
*/
function executeGetCrest($url,$authType,$auth_token,$refresh_token)
{	
	$useragent = "Tenor Industries";
	
    $header = 'Authorization: '.$authType.' '.$auth_token;
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_USERAGENT, $useragent);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array($header));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 2);
    $result = curl_exec($ch);	
    $response = json_decode($result);
		
	if(isset($response->error)){
		echo 'First attempt failed!<br>';
		curl_close($ch);
		$new_auth_token = refreshToken($refresh_token);
	    $header = 'Authorization: '.$authType.' '.$new_auth_token;
	    $ch = curl_init();
	    curl_setopt($ch, CURLOPT_URL, $url);
	    curl_setopt($ch, CURLOPT_USERAGENT, $useragent);
	    curl_setopt($ch, CURLOPT_HTTPHEADER, array($header));
	    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);
	    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 2);
	    $result = curl_exec($ch);	
	    $response = json_decode($result);
		return $response;
	}else{
		curl_close($ch);
		return $response;
	}
}

/*
executePostCrest
Executes Post Crest Commands
@param url			Endpoint to use
@param authType		Type of Authorization (Bearer/Basic)
@param auth_token	Authorization Token
@param refresh_tokenRefresh Token
@return Array of Command result
*/
function executePostCrest($url,$authType,$auth,$post)
{	
	$useragent = "Tenor Industries";
	$fields_string = json_encode($post);
	
    $header = array('Authorization: '.$authType.' '.$auth,'Content-Type: application/json');
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_USERAGENT, $useragent);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
	curl_setopt($ch, CURLOPT_POST,count($fields));
	curl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 2);
    $result = curl_exec($ch);		

	if($result===false){
		curl_error($ch);
		echo 'An unknown error occurred!<br>';
		print_r($ch);
	}
	curl_close($ch);
	$response=json_decode($result);
	return $response;
}

/*
getCharacter
Gets character from login
@param auth_token	Authorization Token
@param refresh_tokenRefresh Token
@return array 		array of character
*/
function getCharacter($auth_token,$refresh_token)
{
	$array = array();
	$array = executeGetCrest('https://login.eveonline.com/oauth/verify','Bearer',$auth_token,$refresh_token);
	return $array;
}

/*
refreshToken
refreshes SSO token
@param refresh	Refresh Token
@return 		refreshed token
*/
function refreshToken($refresh)
{	
	include '../settings.php';
    $useragent = "Info-Center Auth.";
	
	$url = "https://login.eveonline.com/oauth/token";
	$header = 'Authorization: Basic '.base64_encode($clientID.':'.$secretKey);
	$fields_string = '';
	
	$fields = array(
		'grant_type' => 'refresh_token',
		'refresh_token' => $refresh
	);
	
	foreach($fields as $key => $value){
		$fields_string .= $key.'='.$value.'&';
	}
	rtrim($fields_string, '&');
		
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL,$url);
	curl_setopt($ch, CURLOPT_USERAGENT,$useragent);
	curl_setopt($ch, CURLOPT_HTTPHEADER,array($header));
	curl_setopt($ch, CURLOPT_POST,count($fields));
	curl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);
	curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 2);
	
	$result = curl_exec($ch);
	
	if($result===false){
		echo curl_error($ch);
	}
	curl_close($ch);
	$response=json_decode($result);
	$auth_token=$response->access_token;
	$refresh_token=$response->refresh_token;
		
		
	$pdo = new PDO('mysql:host=127.0.0.1;dbname='.$_dbName_, $_dbUser_, $_dbPw_);
	$_SESSION['access_token']=$auth_token;
	$statement = $pdo->prepare('UPDATE lex_users refresh_token="'.$refresh_token.'" WHERE charID='.$_SESSION['charID']);
	$result = $statement->execute(array());
	$user = $statement->fetch();
	
	return $auth_token;
}

/*
getCharacterInfo
Gets character informations
@param charID		characterID
@param auth_token	Authorization Token
@param refresh_tokenRefresh Token
@return array 		array of character information
*/
function getCharacterInfo($charID,$auth_token,$refresh_token)
{
	return executeGetCrest('https://crest-tq.eveonline.com/characters/'.$charID.'/','Bearer',$auth_token,$refresh_token);
}
?>