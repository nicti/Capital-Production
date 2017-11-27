<?php
/*getCorpAssets
getsCorpAssets from Nictius Tenor
Pulls all @params from $_SESSION
uses ESI API
*/
function getCorpAssets(){
	$url = "https://esi.tech.ccp.is/latest/corporations/98476092/assets/?datasource=tranquility&page=1";
	return httpGet($url,$_SESSION['access_token'],$_SESSION['refresh_token']);
	}
?>