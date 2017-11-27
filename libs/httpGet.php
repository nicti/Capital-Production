<?php
/*
THIS FILE HANDES ESI API REQUEST OF TYPE GET!
*/

function httpGet($url,$access_token = null,$refresh_token = null){
	if(is_null($access_token)){
		/*without auth*/
		$useragent = "Tenor Industries";
		$header = 'Content-Type: application/json';
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, $url);
		curl_setopt($ch, CURLOPT_USERAGENT, $useragent);
		curl_setopt($ch, CURLOPT_HTTPHEADER, array($header));
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
	}else{
		/*with auth*/
		$useragent = "Tenor Industries";
		$header = 'Authorization: Bearer '.$access_token;
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
			curl_close($ch);
			
			/*GET new tokens*/
			$url = "https://login.eveonline.com/oauth/token";
			$header = 'Authorization: Basic MzU3MDY1YjJhZGE5NDNkNzkwNjZkMDhjMWRiMmQ3OWI6NUhHY0xJTmxkb0FWRjZuSkRaeWc0b2lLUU93U0IycHZNWFlmYzl3ag==';
			$fields_string = '';

			$fields = array(
				'grant_type' => 'refresh_token',
				'refresh_token' => $refresh_token
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
			$_SESSION['access_token'] = $response->access_token;
			$new_auth_token = $response->access_token;
			$_SESSION['refresh_token'] = $response->refresh_token;
			
			
			$header = 'Authorization: Bearer '.$new_auth_token;
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
}
	
?>