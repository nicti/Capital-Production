<html>
<head>
<title>T3N0R - Indy</title>
</head>
<body bgcolor = '#21272b' text = '#FFFFFFF' vlink = '#fea500' alink = '#fea500' link = '#fea500' onload="runPartsNumbers();">
<?php
session_start();
include 'settings.php';
include 'libs/httpGet.php';
include 'libs/getCorpAssets.php';
/*  ###accesscheck###		*/
/*if(isset($_GET['logout'])){
	session_destroy();
	die('<body bgcolor = "#21272b" text = "#FFFFFFF" vlink = "#fea500" alink = "#fea500" link = "#fea500" ><center><a href="https://login.eveonline.com/oauth/authorize/?response_type=code&redirect_uri=http%3A%2F%2Flogin.nicti.de&scope=esi-wallet.read_corporation_wallet.v1%20esi-corporations.read_divisions.v1%20esi-assets.read_corporation_assets.v1%20esi-universe.read_structures.v1&client_id='.$clientID.'&state='.$page.'"><img src="pic/EVE_SSO_Login_Buttons_Small_White.png"></a>');
}

if(!isset($_SESSION['charID'])){
	die('<body bgcolor = "#21272b" text = "#FFFFFFF" vlink = "#fea500" alink = "#fea500" link = "#fea500" ><center><a href="https://login.eveonline.com/oauth/authorize/?response_type=code&redirect_uri=http%3A%2F%2Flogin.nicti.de&scope=esi-wallet.read_corporation_wallet.v1%20esi-corporations.read_divisions.v1%20esi-assets.read_corporation_assets.v1%20esi-universe.read_structures.v1&client_id='.$clientID.'&state='.$page.'"><img src="pic/EVE_SSO_Login_Buttons_Small_White.png"></a>');
}
if($_SESSION['charID']!=95570640){
	session_destroy();
	die('<body bgcolor = "#21272b" text = "#FFFFFFF" vlink = "#fea500" alink = "#fea500" link = "#fea500" ><center><a href="https://login.eveonline.com/oauth/authorize/?response_type=code&redirect_uri=http%3A%2F%2Flogin.nicti.de&scope=esi-wallet.read_corporation_wallet.v1%20esi-corporations.read_divisions.v1%20esi-assets.read_corporation_assets.v1%20esi-universe.read_structures.v1&client_id='.$clientID.'&state='.$page.'"><img src="pic/EVE_SSO_Login_Buttons_Small_White.png"></a>');
}*/
?>
<link rel="stylesheet" type="text/css" href="css/bars.css">
<script type="text/javascript" src="js/calc.js"></script>
<table width="100%">
<tr>
<td width="100%" valign="top">
	<!-- Ship selection module -->
<fieldset>
<legend>Ship</legend>
<label for="shipHull">Ship to build</label>
<select name="shipHull" id="shipHull" onchange="saveShip();">
	<option value="">
	<optgroup label="Freighter">
	<option value="20183">Providence</option>
	<option value="20185">Charon</option>
	<option value="20187">Obilisk</option>
	<option value="20189">Fenrir</option>
	</optgroup>
	<optgroup label="Dreadnought">
	<option value="19720">Revelation</option>
	<option value="19726">Phoenix</option>
	<option value="19724">Moros</option>
	<option value="19722">Naglfar</option>
	<option value="42243">Chemosh</option>
	<option value="42124">Vehement</option>
	</optgroup>
	<optgroup label="Force Auxiliary">
	<option value="37604">Apostle</option>
	<option value="37605">Minokawa</option>
	<option value="37607">Ninazu</option>
	<option value="37606">Lif</option>
	<option value="42242">Dagon</option>
	</optgroup>
	<optgroup label="Carrier">
	<option value="23757">Archon</option>
	<option value="23915">Chimera</option>
	<option value="23911">Thanatos</option>
	<option value="24483">Nidhoggur</option>
	</optgroup>
	<optgroup label="Supercarrier">
	<option value="23919">Aeon</option>
	<option value="23917">Wyvern</option>
	<option value="23913">Nyx</option>
	<option value="22852">Hel</option>
	<option value="3514">Revenant</option>
	<option value="42125">Vendetta</option>
	</optgroup>
	<optgroup label="Titan">
	<option value="11567">Avatar</option>
	<option value="3764">Leviathan</option>
	<option value="671">Erebus</option>
	<option value="23773">Ragnarok</option>
	<option value="42126">Vanquisher</option>
	<option value="42241">Molok</option>
	</optgroup>
	<optgroup label="Others">
	<option value="28606">Orca</option>
	<option value="28352">Rorqual</option>
	</optgroup>
	</select>
</fieldset>
</td>
<td rowspan="2" valign="top">
<fieldset style="width:210px">
<legend>Settings</legend>
<fieldset>
<legend>Parts</legend>
<table>
<tr>
<td>
	<!-- ###location settings### -->
<label for="partsSecStatus">Sec Status</label>
</td>
<td>
<select name="partsSecStatus" id="partsSecStatus" onchange="savePartsFacility();">
                    <option value="1">High Sec</option>
                    <option value="1.9">Low Sec</option>
                    <option value="2.1" selected>Null Sec/WH</option>
</select>
</td>
</tr>
<tr>
<td>
<label for="partsFacilitySize">Structure Size</label>
</td>
<td>
<select name="partsFacilitySize" id="partsFacilitySize" onchange="savePartsFacility();">
                    <option value="1" selected>Medium</option>
                    <option value="2">Large</option>
                    <option value="3">X-Large</option>
</select>
</td>
</tr>
<tr>
<td>
<label for="partsMERig">Material Rig type</label>
</td>
<td>
<select name="partsMERig" id="partsMERig" onchange="savePartsFacility();">
                    <option value="0">No Rig</option>
                    <option value="2">T1 Rig</option>
                    <option value="2.4" selected>T2 Rig</option>
</select>
</td>
</tr>
</table>
</fieldset>

<fieldset>
<legend>Ship</legend>
<table>
<tr>
<td>
<label for="shipSecStatus">Sec Status</label>
</td>
<td>
<select name="shipSecStatus" id="shipSecStatus" onchange="saveShipFacility();">
                    <option value="1">High Sec</option>
                    <option value="1.9">Low Sec</option>
                    <option value="2.1" selected>Null Sec/WH</option>
</select>
</td>
</tr>
<tr>
<td>
<label for="shipFacilitySize">Structure Size</label>
</td>
<td>
<select name="shipFacilitySize" id="shipFacilitySize" onchange="saveShipFacility();">
                    <option value="1">Medium</option>
                    <option value="2">Large</option>
                    <option value="3" selected>X-Large</option>
</select>
</td>
</tr>
<tr>
<td>
<label for="shipMERig">Material Rig type</label>
</td>
<td>
<select name="shipMERig" id="shipMERig" onchange="saveShipFacility();">
                    <option value="0">No Rig</option>
                    <option value="2" selected>T1 Rig</option>
                    <option value="2.4">T2 Rig</option>
</select>
</td>
</tr>
</table>
</fieldset>
</fieldset>
<!-- ###Blueprint settings### -->
<fieldset style="width:210px">
<legend>Blueprints</legend>
<fieldset>
<legend>Parts</legend>
<table>
<tr>
<td>
<label for="partsME">Parts ME</label>
</td>
<td>
<select name="partsME" id="partsME" onchange="runPartsNumbers()">
	<option value="0">0%</option>
	<option value="1">1%</option>
	<option value="2">2%</option>
	<option value="3">3%</option>
	<option value="4">4%</option>
	<option value="5">5%</option>
	<option value="6">6%</option>
	<option value="7">7%</option>
	<option value="8">8%</option>
	<option value="9">9%</option>
	<option value="10" selected>10%</option>
</select>
</td>
</tr>
<tr>
<td>
<label for="partsTE">Parts TE</label>
</td>
<td>
<select name="partsTE" id="partsTE" onchange="runPartsNumbers()">
	<option value="0">0%</option>
	<option value="2">2%</option>
	<option value="4">4%</option>
	<option value="6">6%</option>
	<option value="8">8%</option>
	<option value="10">10%</option>
	<option value="12">12%</option>
	<option value="14">14%</option>
	<option value="16">16%</option>
	<option value="18">18%</option>
	<option value="20" selected>20%</option>
</select>
</td>
</tr>
</table>
</fieldset>
<fieldset>
<legend>Ship</legend>
<table>
<tr>
<td>
<label for="shipME">Ship ME</label>
</td>
<td>
<select name="shipME" id="shipME" onchange="runShipNumbers()">
	<option value="0">0%</option>
	<option value="1">1%</option>
	<option value="2">2%</option>
	<option value="3">3%</option>
	<option value="4">4%</option>
	<option value="5">5%</option>
	<option value="6">6%</option>
	<option value="7">7%</option>
	<option value="8">8%</option>
	<option value="9">9%</option>
	<option value="10" selected>10%</option>
</select>
</td>
</tr>
<tr>
<td>
<label for="shipTE">Ship TE</label>
</td>
<td>
<select name="shipTE" id="shipTE" onchange="runShipNumbers()">
	<option value="0">0%</option>
	<option value="2">2%</option>
	<option value="4">4%</option>
	<option value="6">6%</option>
	<option value="8">8%</option>
	<option value="10">10%</option>
	<option value="12">12%</option>
	<option value="14">14%</option>
	<option value="16">16%</option>
	<option value="18">18%</option>
	<option value="20" selected>20%</option>
</select>
</td>
</tr>
</table>
</fieldset>
</fieldset>
</td>
</tr>
<tr>
<td valign="top">
<table>
<tr>
	<!-- ###partsTable to fill### -->
<td align="left" style="width:400px;height:235px">
<fieldset style="width:395px">
<legend>Parts</legend>
<table border="1">
<tr>
<th>Part</th>
<th>Raw Amount</th>
<th>Amount</th>
</tr>
<tr>
<td align="right">Capital Armor Plates</td>
<td id="21017">0</td>
<td id="r21017">0</td>
</tr>
<tr>
<td align="right">Capital Capacitor Battery</td>
<td id="21019">0</td>
<td id="r21019">0</td>
</tr>
<tr>
<td align="right">Capital Cargo Bay</td>
<td id="21027">0</td>
<td id="r21027">0</td>
</tr>
<tr>
<td align="right">Capital Clone Vat Bay</td>
<td id="24547">0</td>
<td id="r24547">0</td>
</tr>
<tr>
<td align="right">Capital Computer System</td>
<td id="21035">0</td>
<td id="r21035">0</td>
</tr>
<tr>
<td align="right">Capital Construction Parts</td>
<td id="21037">0</td>
<td id="r21037">0</td>
</tr>
<tr>
<td align="right">Capital Corporate Hangar Bay</td>
<td id="24560">0</td>
<td id="r24560">0</td>
</tr>
<tr>
<td align="right">Capital Doomsday Weapon Mount</td>
<td id="24556">0</td>
<td id="r24556">0</td>
</tr>
<tr>
<td align="right">Capital Drone Bay</td>
<td id="21029">0</td>
<td id="r21029">0</td>
</tr>
<tr>
<td align="right">Capital Jump Bridge Array</td>
<td id="24545">0</td>
<td id="r24545">0</td>
</tr>
<tr>
<td align="right">Capital Jump Drive</td>
<td id="21025">0</td>
<td id="r21025">0</td>
</tr>
<tr>
<td align="right">Capital Launcher Hardpoint</td>
<td id="21041">0</td>
<td id="r21041">0</td>
</tr>
<tr>
<td align="right">Capital Power Generator</td>
<td id="21021">0</td>
<td id="r21021">0</td>
</tr>
<tr>
<td align="right">Capital Propulsion Engine</td>
<td id="21009">0</td>
<td id="r21009">0</td>
</tr>
<tr>
<td align="right">Capital Sensor Cluster</td>
<td id="21013">0</td>
<td id="r21013">0</td>
</tr>
<tr>
<td align="right">Capital Shield Emitter</td>
<td id="21023">0</td>
<td id="r21023">0</td>
</tr>
<tr>
<td align="right">Capital Ship Maintenance Bay</td>
<td id="24558">0</td>
<td id="r24558">0</td>
</tr>
<tr>
<td align="right">Capital Siege Array</td>
<td id="21039">0</td>
<td id="r21039">0</td>
</tr>
<tr>
<td align="right">Capital Turret Hardpoint</td>
<td id="21011">0</td>
<td id="r21011">0</td>
</tr>
<tr>
<td align="right">Sum:</td>
<td id="partSum">0</td>
<td id="rPartSum">0</td>
</tr>
</table>
</fieldset>
</td>
<td valign="top" align="left" colspan="5">
<fieldset>
	<!-- ###minerals To Fill### -->
<legend>Minerals</legend>
<table border="1" id="minerals">
<tbody id="minsHeader">
<tr>
<th style="width:100px">Part</th>
<th style="width:100px">Tritanium</th>
<th style="width:100px">Pyerite</th>
<th style="width:100px">Mexallon</th>
<th style="width:100px">Isogen</th>
<th style="width:100px">Nocxium</th>
<th style="width:100px">Zydrine</th>
<th style="width:100px">Megacyte</th>
</tr>
</tbody>
<tbody id="mins">
<tr id="m21017">

</tr>
<tr id="m21019">

</tr>
<tr id="m21027">

</tr>
<tr id="m24547">

</tr>
<tr id="m21035">

</tr>
<tr id="m21037">

</tr>
<tr id="m24560">

</tr>
<tr id="m24556">

</tr>
<tr id="m21029">

</tr>
<tr id="m24545">

</tr>
<tr id="m21025">

</tr>
<tr id="m21041">

</tr>
<tr id="m21021">

</tr>
<tr id="m21009">

</tr>
<tr id="m21013">

</tr>
<tr id="m21023">

</tr>
<tr id="m24558">

</tr>
<tr id="m21039">

</tr>
<tr id="m21011">

</tr>
<tr id="sum">

</tr>
</tbody>
</table>
</fieldset>
</td>
</tr>
<tr>
<td valign="top" align="left" colspan="4">
<table>
<tr>
<td>
<fieldset style="height:236px">
<legend>Needed minerals</legend>
<input type="radio" id="minTotal" onchange="runPartsNumbers()" name="minCalc">Total  <input type="radio" id="minRest" onchange="runPartsNumbers()" name="minCalc" checked="checked">Rest<br>
<textarea id="neededMins" style="height:200px">
</textarea>
</fieldset>
</td>
<td>
<?php
//pull corp's Ore in V-LD(eve system) and corp's minerals in C2X(eve system)
//$assets = getCorpAssets();
$a0 = 0;
$a5 = 0;
$a10 = 0;
$b0 = 0;
$b5 = 0;
$b10 = 0;
$c0 = 0;
$c5 = 0;
$c10 = 0;
$o0 = 0;
$o5 = 0;
$o10 = 0;
$g0 = 0;
$g5 = 0;
$g10 = 0;
$s0 = 0;
$s5 = 0;
$s10 = 0;
$trit = 0;
$pyer = 0;
$mexa = 0;
$isog = 0;
$nocx = 0;
$zydr = 0;
$mega = 0;
foreach($assets as $a){
	if($a->location_id==1025463897842){
		if($a->type_id==28367){
			$a0 = number_format($a->quantity);
		}elseif($a->type_id==28385){
			$a5 = number_format($a->quantity);
		}elseif($a->type_id==28387){
			$a10 = number_format($a->quantity);
		}elseif($a->type_id==28388){
			$b0 =number_format($a->quantity);
		}elseif($a->type_id==28390){
			$b5 =number_format($a->quantity);
		}elseif($a->type_id==28389){
			$b10 = number_format($a->quantity);
		}elseif($a->type_id==28391){
			$c0 = number_format($a->quantity);
		}elseif($a->type_id==28393){
			$c5 = number_format($a->quantity);
		}elseif($a->type_id==28392){
			$c10 = number_format($a->quantity);
		}elseif($a->type_id==28394){
			$o0 = number_format($a->quantity);
		}elseif($a->type_id==28396){
			$o5 = number_format($a->quantity);
		}elseif($a->type_id==28395){
			$o10 = number_format($a->quantity);
		}elseif($a->type_id==28397){
			$g0 = number_format($a->quantity);
		}elseif($a->type_id==28398){
			$g5 = number_format($a->quantity);
		}elseif($a->type_id==28399){
			$g10 = number_format($a->quantity);
		}elseif($a->type_id==28420){
			$s0 = number_format($a->quantity);
		}elseif($a->type_id==28418){
			$s5 = number_format($a->quantity);
		}elseif($a->type_id==28419){
			$s10 = number_format($a->quantity);
		}
	}
	if($a->location_id==1024956757232){
		if($a->type_id==34){
			$trit = number_format($a->quantity);
		}elseif($a->type_id==35){
			$pyer = number_format($a->quantity);
		}elseif($a->type_id==36){
			$mexa = number_format($a->quantity);
		}elseif($a->type_id==37){
			$isog = number_format($a->quantity);
		}elseif($a->type_id==38){
			$nocx = number_format($a->quantity);
		}elseif($a->type_id==39){
			$zydr = number_format($a->quantity);
		}elseif($a->type_id==40){
			$mega = number_format($a->quantity);
		}

	}
}
//print minerals you have
echo '<fieldset style="height:236px"><legend>Minerals you have</legend>
<table border="1">
<tr>
<th>Mineral</th>
<th>Amount</th>
</tr>
<tr>
<td>Tritanium</td>
<td id="hTrit">'.$trit.'</td>
</tr>
<tr>
<td>Pyerite</td>
<td id="hPyer">'.$pyer.'</td>
</tr>
<tr>
<td>Mexallon</td>
<td id="hMexa">'.$mexa.'</td>
</tr>
<tr>
<td>Isogen</td>
<td id="hIsog">'.$isog.'</td>
</tr>
<tr>
<td>Nocxium</td>
<td id="hNocx">'.$nocx.'</td>
</tr>
<tr>
<td>Zydrine</td>
<td id="hZydr">'.$zydr.'</td>
</tr>
<tr>
<td>Megacyte</td>
<td id="hMega">'.$mega.'</td>
</tr>
</table>
</fieldset>';
?>


</td>
<td>
	<!-- ###est. ore you need to build stuff### -->
<fieldset style="height:236px">
<legend>Est. Ore</legend>
<table border="1">
<tr>
<th>Ore\Tier</th>
<th style="width:50px"><center><input type="radio" id="tier1" onchange="printOre()" name="tier">I</center></th>
<th style="width:50px"><center><input type="radio" id="tier2" onchange="printOre()" name="tier" checked="checked">II</center></th>
<th style="width:50px"><center><input type="radio" id="tier3" onchange="printOre()" name="tier">III</center></th>
</tr>
<tr>
<td align="right">
Compressed Arkonor
</td>
<td align="right" id="ark0">0</td>
<td align="right" id="ark5">0</td>
<td align="right" id="ark10">0</td>
</tr>
<tr>
<td align="right">
Compressed Bistot
</td>
<td align="right" id="bis0">0</td>
<td align="right" id="bis5">0</td>
<td align="right" id="bis10">0</td>
</tr>
<tr>
<td align="right">
Compressed Crokite
</td>
<td align="right" id="cro0">0</td>
<td align="right" id="cro5">0</td>
<td align="right" id="cro10">0</td>
</tr>
<tr>
<td align="right">
Compressed Ochre
</td>
<td align="right" id="och0">0</td>
<td align="right" id="och5">0</td>
<td align="right" id="och10">0</td>
</tr>
<tr>
<td align="right">
Compressed Gneiss
</td>
<td align="right" id="gne0">0</td>
<td align="right" id="gne5">0</td>
<td align="right" id="gne10">0</td>
</tr>
<tr>
<td align="right">
Compressed Spodumain
</td>
<td align="right" id="spo0">0</td>
<td align="right" id="spo5">0</td>
<td align="right" id="spo10">0</td>
</tr>
</table>
(expecting perfect reprocessing skills!)
</fieldset>
</td>
<td>
<fieldset style="height:236px">
<legend>Needed ore</legend>
<input type="radio" id="oreTotal" onchange="runPartsNumbers()" name="oreCalc" checked="checked">Total  <input type="radio" id="oreRest" onchange="runPartsNumbers()" name="oreCalc">Rest<br>
<textarea id="neededOres" style="height:200px;width:300px">
</textarea>
</fieldset>
</td>
<td>
<fieldset style="height:236px">
	<!-- ###ore you have### -->
<legend>Ore you have</legend>
<?php
echo '<table border="1">
<tr>
<th>Ore\Tier</th>
<th style="width:50px" class="hO0"><center>I</center></th>
<th style="width:50px" class="hO5"><center>II</center></th>
<th style="width:50px" class="hO10"><center>III</center></th>
</tr>
<tr>
<td align="right">
Compressed Arkonor
</td>
<td align="right" class="hO0" id="hA0">'.$a0.'</td>
<td align="right" class="hO5" id="hA5">'.$a5.'</td>
<td align="right" class="hO10" id="hA10">'.$a10.'</td>
</tr>
<tr>
<td align="right">
Compressed Bistot
</td>
<td align="right" class="hO0" id="hB0">'.$b0.'</td>
<td align="right" class="hO5" id="hB5">'.$b5.'</td>
<td align="right" class="hO10" id="hB10">'.$b10.'</td>
</tr>
<tr>
<td align="right">
Compressed Crokite
</td>
<td align="right" class="hO0" id="hC0">'.$c0.'</td>
<td align="right" class="hO5" id="hC5">'.$c5.'</td>
<td align="right" class="hO10" id="hC10">'.$c10.'</td>
</tr>
<tr>
<td align="right">
Compressed Ochre
</td>
<td align="right" class="hO0" id="hO0">'.$o0.'</td>
<td align="right" class="hO5" id="hO5">'.$o5.'</td>
<td align="right" class="hO10" id="hO10">'.$o10.'</td>
</tr>
<tr>
<td align="right">
CompressedGneiss
</td>
<td align="right" class="hO0" id="hG0">'.$g0.'</td>
<td align="right" class="hO5" id="hG5">'.$g5.'</td>
<td align="right" class="hO10" id="hG10">'.$g10.'</td>
</tr>
<tr>
<td align="right">
Compressed Spodumain
</td>
<td align="right" class="hO0" id="hS0">'.$s0.'</td>
<td align="right" class="hO5" id="hS5">'.$s5.'</td>
<td align="right" class="hO10" id="hS10">'.$s10.'</td>
</tr>
</table>';

?>
</fieldset>
</td>
<td>
	<!-- ###percentage of the ore you have### -->
<fieldset style="height:236px;width:250px">
<legend>Percentage</legend>
<div id="myArk">
  <div id="myArkBar"></div>
</div>
<br>
<div id="myBis">
  <div id="myBisBar"></div>
</div>
<br>
<div id="myCro">
  <div id="myCroBar"></div>
</div>
<br>
<div id="myOch">
  <div id="myOchBar"></div>
</div>
<br>
<div id="myGne">
  <div id="myGneBar"></div>
</div>
<br>
<div id="mySpo">
  <div id="mySpoBar"></div>
</div>
</fieldset>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
<!-- ###logout link### -->
<a href="?logout=true">Logout</a>
</body>
</html>