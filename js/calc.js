//valueHolder
var partsfacilityme;
var partsfacilityte;

var shipfacilityme;
var shipfacilityte;

//static data
var Providence  = [20183, 17, 0, 83, 0, 0, 53, 0, 0, 0, 0, 0, 0, 0, 22, 0, 0, 0, 0, 0];
var Charon      = [20185, 14, 0, 106, 0, 0, 51, 0, 0, 0, 0, 0, 0, 0, 11, 0, 0, 0, 0, 0];
var Obilisk     = [20187, 16, 0, 89, 0, 0, 56, 0, 0, 0, 0, 0, 0, 0, 17, 0, 0, 0, 0, 0];
var Fenrir      = [20189, 13, 0, 83, 0, 0, 49, 0, 0, 0, 0, 0, 0, 0, 28, 0, 0, 0, 0, 0];

var Revelation  = [19720, 28, 7, 0, 0, 6, 13, 8, 0, 0, 0, 9, 0, 28, 7, 6, 7, 16, 28, 36];
var Phoenix     = [19726, 7, 7, 0, 0, 13, 13, 8, 0, 0, 0, 9, 37, 6, 7, 6, 28, 16, 28, 0];
var Moros       = [19724, 24, 7, 0, 0, 6, 13, 8, 0, 0, 0, 9, 0, 13, 7, 6, 11, 16, 28, 37];
var Naglfar     = [19722, 11, 7, 0, 0, 13, 13, 8, 0, 0, 0, 9, 0, 6, 7, 6, 24, 16, 28, 37];
var Chemosh     = [42243, 33, 9, 0, 0, 7, 16, 10, 0, 0, 0, 11, 0, 16, 9, 7, 9, 19, 33, 44];
var Vehement    = [42124, 336, 98, 0, 0, 84, 182, 112, 0, 0, 0, 126, 0, 182, 98, 84, 154, 224, 392, 518];

var Apostle     = [37604, 25, 17, 0, 0, 8, 13, 8, 0, 5, 0, 8, 0, 17, 7, 8, 8, 16, 25, 0];
var Minokawa    = [37605, 8, 17, 0, 0, 17, 13, 8, 0, 5, 0, 8, 0, 9, 7, 8, 25, 16, 20, 0];
var Ninazu      = [37607, 21, 17, 0, 0, 15, 13, 8, 0, 5, 0, 8, 0, 11, 7, 8, 12, 16, 25, 0];
var Lif         = [37606, 12, 17, 0, 0, 10, 13, 8, 0, 5, 0, 8, 0, 16, 7, 8, 21, 16, 25, 0];
var Dagon       = [42242, 30, 20, 0, 0, 10, 16, 10, 0, 6, 0, 10, 0, 21, 8, 10, 10, 19, 30, 0];

var Archon      = [23757, 21, 5, 0, 0, 5, 6, 8, 0, 55, 0, 8, 0, 11, 7, 16, 5, 16, 0, 0];
var Chimera     = [23915, 5, 5, 0, 0, 11, 5, 8, 0, 55, 0, 8, 0, 5, 7, 16, 21, 16, 0, 0];
var Thanatos    = [23911, 15, 5, 0, 0, 7, 5, 8, 0, 59, 0, 8, 0, 10, 7, 16, 8, 16, 0, 0];
var Nidhoggur   = [24483, 8, 5, 0, 0, 10, 5, 8, 0, 59, 0, 8, 0, 7, 7, 16, 15, 16, 0, 0];

var Aeon        = [23919, 222, 222, 0, 0, 28, 167, 222, 0, 500, 0, 222, 0, 222, 111, 28, 56, 222, 0, 0];
var Wyvern      = [23917, 56, 83, 0, 0, 222, 111, 222, 0, 417, 0, 222, 0, 56, 56, 222, 222, 222, 0, 0];
var Nyx         = [23913, 167, 139, 0, 0, 139, 222, 222, 0, 694, 0, 222, 0, 111, 139, 139, 83, 222, 0, 0];
var Hel         = [22852, 111, 28, 0, 0, 83, 56, 222, 0, 583, 0, 222, 0, 167, 222, 83, 167, 222, 0, 0];
var Revenant    = [3514, 56, 111, 0, 0, 222, 111, 222, 0, 389, 0, 222, 0, 56, 56, 222, 222, 222, 0, 0];
var Vendetta    = [42125, 1200, 360, 0, 0, 480, 600, 600, 0, 4200, 0, 960, 0, 720, 480, 1200, 600, 600, 0, 0];

var Avatar      = [11567, 556, 556, 0, 556, 333, 444, 556, 556, 0, 556, 556, 0, 556, 222, 333, 111, 556, 0, 556];
var Leviathan   = [3764, 222, 444, 0, 556, 556, 333, 556, 556, 0, 556, 556, 556, 111, 111, 556, 556, 556, 0, 0];
var Erebus      = [671, 444, 556, 0, 556, 444, 556, 556, 556, 0, 556, 556, 0, 222, 444, 444, 333, 556, 0, 444];
var Ragnarok    = [23773, 333, 333, 0, 556, 222, 222, 556, 556, 0, 556, 556, 0, 444, 556, 222, 444, 556, 0, 556];
var Vanquisher  = [42126, 3465, 1260, 0, 1565, 630, 1890, 945, 4725, 0, 3150, 1260, 0, 1890, 1260, 945, 1575, 2205, 0, 4725];
var Molok       = [42241, 667, 667, 0, 667, 400, 533, 667, 667, 0, 667, 667, 0, 667, 266, 400, 133, 667, 0, 667];

var Orca = [28606, 0, 9, 38, 0, 7, 16, 4, 0, 0, 0, 0, 0, 0, 0, 4, 0, 7, 0, 0];
var Rorqual = [28352, 7, 11, 22, 33, 33, 44, 17, 0, 6, 0, 11, 0, 11, 9, 9, 9, 33, 0, 0];

//make 3d array
var ships = [Providence
    , Charon
    , Obilisk
    , Fenrir
    , Revelation
    , Phoenix
    , Moros
    , Naglfar
    , Chemosh
    , Vehement
    , Apostle
    , Minokawa
    , Ninazu
    , Lif
    , Dagon
    , Archon
    , Chimera
    , Thanatos
    , Nidhoggur
    , Aeon
    , Wyvern
    , Nyx
    , Hel
    , Revenant
    , Vendetta
    , Avatar
    , Leviathan
    , Erebus
    , Ragnarok
    , Vanquisher
    , Molok
    , Orca
    , Rorqual];

//static data
var CapitalArmorPlates = ["Capital Armor Plates", 21017, 473141, 111118, 43324, 7109, 2141, 682, 304];
var CapitalCapacitorBattery = ["Capital Capacitor Battery", 21019, 326973, 107842, 39547, 6440, 1841, 660, 280];
var CapitalCargoBay = ["Capital Cargo Bay", 21027, 874902, 72154, 24616, 2504, 998, 286, 64];
var CapitalCloneVatBay = ["Capital Clone Vat Bay", 24547, 640393, 139591, 48471, 8888, 2612, 1082, 444];
var CapitalComputerSystem = ["Capital Computer System", 21035, 427708, 11110, 44110, 6581, 1858, 648, 296];
var CapitalConstructionParts = ["Capital Construction Parts", 21037, 388208, 93777, 37729, 5104, 1530, 538, 212];
var CapitalCorporateHangarBay = ["Capital Corporate Hangar Bay", 24560, 583442, 145664, 51297, 9321, 2678, 938, 436];
var CapitalDoomsdayWeaponMount = ["Capital Doomsday Weapon Mount", 24556, 841877, 207776, 61980, 11132, 3317, 1108, 572];
var CapitalDroneBay = ["Capital Drone Bay", 21029, 347163, 83248, 33332, 4499, 1258, 486, 172];
var CapitalJumpBridgeArray = ["Capital Jump Bridge Array", 24545, 1121659, 278776, 75379, 17669, 4176, 1488, 1134];
var CapitalJumpDrive = ["Capital Jump Drive", 21025, 749916, 142710, 49913, 8617, 2249, 908, 444];
var CapitalLauncherHardpoint = ["Capital Launcher Hardpoint", 21041, 471653, 110370, 44713, 7692, 2359, 860, 344];
var CapitalPowerGenerator = ["Capital Power Generator", 21021, 510149, 110413, 45621, 7491, 2191, 728, 334];
var CapitalPropulsionEngine = ["Capital Propulsion Engine", 21009, 457050, 110416, 41994, 6938, 2110, 604, 302];
var CapitalSensorCluster = ["Capital Sensor Cluster", 21013, 443591, 101026, 40877, 6659, 1804, 666, 298];
var CapitalShieldEmitter = ["Capital Shield Emitter", 21023, 498880, 104957, 43194, 7269, 2033, 696, 332];
var CapitalShipMaintenanceBay = ["Capital Ship Maintenance Bay", 24558, 576759, 189942, 53312, 9010, 2461, 914, 416];
var CapitalSiegeArray = ["Capital Siege Array", 21039, 555658, 125277, 47249, 7916, 2438, 908, 428];
var CapitalTurretHardpoint = ["Capital Turret Hardpoint", 21011, 546912, 113826, 45010, 7760, 2358, 876, 386];

//make 3d array
var CapitalParts = [CapitalArmorPlates, CapitalCapacitorBattery, CapitalCargoBay, CapitalCloneVatBay, CapitalComputerSystem, CapitalConstructionParts, CapitalCorporateHangarBay, CapitalDoomsdayWeaponMount, CapitalDroneBay, CapitalJumpBridgeArray, CapitalJumpDrive, CapitalLauncherHardpoint, CapitalPowerGenerator, CapitalPropulsionEngine, CapitalSensorCluster, CapitalShieldEmitter, CapitalShipMaintenanceBay, CapitalSiegeArray, CapitalTurretHardpoint];

//adjustable data
var a_CapitalArmorPlates = ["Capital Armor Plates", 21017, 473141, 111118, 43324, 7109, 2141, 682, 304];
var a_CapitalCapacitorBattery = ["Capital Capacitor Battery", 21019, 326973, 107842, 39547, 6440, 1841, 660, 280];
var a_CapitalCargoBay = ["Capital Cargo Bay", 21027, 874902, 72154, 24616, 2504, 998, 286, 64];
var a_CapitalCloneVatBay = ["Capital Clone Vat Bay", 24547, 640393, 139591, 48471, 8888, 2612, 1082, 444];
var a_CapitalComputerSystem = ["Capital Computer System", 21035, 427708, 11110, 44110, 6581, 1858, 648, 296];
var a_CapitalConstructionParts = ["Capital Construction Parts", 21037, 388208, 93777, 37729, 5104, 1530, 538, 212];
var a_CapitalCorporateHangarBay = ["Capital Corporate Hangar Bay", 24560, 583442, 145664, 51297, 9321, 2678, 938, 436];
var a_CapitalDoomsdayWeaponMount = ["Capital Doomsday Weapon Mount", 24556, 841877, 207776, 61980, 11132, 3317, 1108, 572];
var a_CapitalDroneBay = ["Capital Drone Bay", 21029, 347163, 83248, 33332, 4499, 1258, 486, 172];
var a_CapitalJumpBridgeArray = ["Capital Jump Bridge Array", 24545, 1121659, 278776, 75379, 17669, 4176, 1488, 1134];
var a_CapitalJumpDrive = ["Capital Jump Drive", 21025, 749916, 142710, 49913, 8617, 2249, 908, 444];
var a_CapitalLauncherHardpoint = ["Capital Launcher Hardpoint", 21041, 471653, 110370, 44713, 7692, 2359, 860, 344];
var a_CapitalPowerGenerator = ["Capital Power Generator", 21021, 510149, 110413, 45621, 7491, 2191, 728, 334];
var a_CapitalPropulsionEngine = ["Capital Propulsion Engine", 21009, 457050, 110416, 41994, 6938, 2110, 604, 302];
var a_CapitalSensorCluster = ["Capital Sensor Cluster", 21013, 443591, 101026, 40877, 6659, 1804, 666, 298];
var a_CapitalShieldEmitter = ["Capital Shield Emitter", 21023, 498880, 104957, 43194, 7269, 2033, 696, 332];
var a_CapitalShipMaintenanceBay = ["Capital Ship Maintenance Bay", 24558, 576759, 189942, 53312, 9010, 2461, 914, 416];
var a_CapitalSiegeArray = ["Capital Siege Array", 21039, 555658, 125277, 47249, 7916, 2438, 908, 428];
var a_CapitalTurretHardpoint = ["Capital Turret Hardpoint", 21011, 546912, 113826, 45010, 7760, 2358, 876, 386];

//adjustable 3d array
var a_CapitalParts = [a_CapitalArmorPlates, a_CapitalCapacitorBattery, a_CapitalCargoBay, a_CapitalCloneVatBay, a_CapitalComputerSystem, a_CapitalConstructionParts, a_CapitalCorporateHangarBay, a_CapitalDoomsdayWeaponMount, a_CapitalDroneBay, a_CapitalJumpBridgeArray, a_CapitalJumpDrive, a_CapitalLauncherHardpoint, a_CapitalPowerGenerator, a_CapitalPropulsionEngine, a_CapitalSensorCluster, a_CapitalShieldEmitter, a_CapitalShipMaintenanceBay, a_CapitalSiegeArray, a_CapitalTurretHardpoint];

//gets ship and inital parts
function saveShip() {
//get ship hull grom webpage
    var e = document.getElementById("shipHull");
    var filter = e.options[e.selectedIndex].value;

//get ship parts and print to webpage
    for (var index = 0; index < ships.length; index++) {
        var ship = ships[index];
        if (ship[0] == filter) {
            document.getElementById("21017").innerHTML = ship[1];
            document.getElementById("21019").innerHTML = ship[2];
            document.getElementById("21027").innerHTML = ship[3];
            document.getElementById("24547").innerHTML = ship[4];
            document.getElementById("21035").innerHTML = ship[5];
            document.getElementById("21037").innerHTML = ship[6];
            document.getElementById("24560").innerHTML = ship[7];
            document.getElementById("24556").innerHTML = ship[8];
            document.getElementById("21029").innerHTML = ship[9];
            document.getElementById("24545").innerHTML = ship[10];
            document.getElementById("21025").innerHTML = ship[11];
            document.getElementById("21041").innerHTML = ship[12];
            document.getElementById("21021").innerHTML = ship[13];
            document.getElementById("21009").innerHTML = ship[14];
            document.getElementById("21013").innerHTML = ship[15];
            document.getElementById("21023").innerHTML = ship[16];
            document.getElementById("24558").innerHTML = ship[17];
            document.getElementById("21039").innerHTML = ship[18];
            document.getElementById("21011").innerHTML = ship[19];
            document.getElementById("partSum").innerHTML = (ship[1] + ship[2] + ship[3] + ship[4] + ship[5] + ship[6] + ship[7] + ship[8] + ship[9] + ship[10] + ship[11] + ship[12] + ship[13] + ship[14] + ship[15] + ship[16] + ship[17] + ship[18] + ship[19]);
            runShipNumbers();
            break;
        }
    }


}

//onUpdate Parts Factility
function savePartsFacility() {
    var partsSecstatus = parseFloat(document.getElementById("partsSecStatus").value);
    partsfacilityme = ((100 - (parseFloat(document.getElementById("partsMERig").value) * partsSecstatus)) / 100 * 0.99);
    runPartsNumbers();
}

//onUpdate Ship Factility
function saveShipFacility() {
    var shipSecstatus = parseFloat(document.getElementById("shipSecStatus").value);
    shipfacilityme = ((100 - (parseFloat(document.getElementById("shipMERig").value) * shipSecstatus)) / 100 * 0.99);
    runShipNumbers();
}

//caluclate parts based on facility and ME
function runShipNumbers() {
    var me = document.getElementById("shipME").value;
    var te = document.getElementById("shipTE").value;

    if (typeof shipfacilityme == 'undefined') {
        var shipSecstatus = parseFloat(document.getElementById("shipSecStatus").value);
        shipfacilityme = ((100 - (parseFloat(document.getElementById("shipMERig").value) * shipSecstatus)) / 100 * 0.99);
    }
    //print to webpage
    document.getElementById("r21017").innerHTML = Math.ceil(((document.getElementById("21017").innerText) * (1 - (me / 100)) * shipfacilityme));
    document.getElementById("r21019").innerHTML = Math.ceil(((document.getElementById("21019").innerText) * (1 - (me / 100)) * shipfacilityme));
    document.getElementById("r21027").innerHTML = Math.ceil(((document.getElementById("21027").innerText) * (1 - (me / 100)) * shipfacilityme));
    document.getElementById("r24547").innerHTML = Math.ceil(((document.getElementById("24547").innerText) * (1 - (me / 100)) * shipfacilityme));
    document.getElementById("r21035").innerHTML = Math.ceil(((document.getElementById("21035").innerText) * (1 - (me / 100)) * shipfacilityme));
    document.getElementById("r21037").innerHTML = Math.ceil(((document.getElementById("21037").innerText) * (1 - (me / 100)) * shipfacilityme));
    document.getElementById("r24560").innerHTML = Math.ceil(((document.getElementById("24560").innerText) * (1 - (me / 100)) * shipfacilityme));
    document.getElementById("r24556").innerHTML = Math.ceil(((document.getElementById("24556").innerText) * (1 - (me / 100)) * shipfacilityme));
    document.getElementById("r21029").innerHTML = Math.ceil(((document.getElementById("21029").innerText) * (1 - (me / 100)) * shipfacilityme));
    document.getElementById("r24545").innerHTML = Math.ceil(((document.getElementById("24545").innerText) * (1 - (me / 100)) * shipfacilityme));
    document.getElementById("r21025").innerHTML = Math.ceil(((document.getElementById("21025").innerText) * (1 - (me / 100)) * shipfacilityme));
    document.getElementById("r21041").innerHTML = Math.ceil(((document.getElementById("21041").innerText) * (1 - (me / 100)) * shipfacilityme));
    document.getElementById("r21021").innerHTML = Math.ceil(((document.getElementById("21021").innerText) * (1 - (me / 100)) * shipfacilityme));
    document.getElementById("r21009").innerHTML = Math.ceil(((document.getElementById("21009").innerText) * (1 - (me / 100)) * shipfacilityme));
    document.getElementById("r21013").innerHTML = Math.ceil(((document.getElementById("21013").innerText) * (1 - (me / 100)) * shipfacilityme));
    document.getElementById("r21023").innerHTML = Math.ceil(((document.getElementById("21023").innerText) * (1 - (me / 100)) * shipfacilityme));
    document.getElementById("r24558").innerHTML = Math.ceil(((document.getElementById("24558").innerText) * (1 - (me / 100)) * shipfacilityme));
    document.getElementById("r21039").innerHTML = Math.ceil(((document.getElementById("21039").innerText) * (1 - (me / 100)) * shipfacilityme));
    document.getElementById("r21011").innerHTML = Math.ceil(((document.getElementById("21011").innerText) * (1 - (me / 100)) * shipfacilityme));

    document.getElementById("rPartSum").innerHTML = Math.ceil(document.getElementById("r21017").innerHTML) + Math.ceil(document.getElementById("r21019").innerHTML) + Math.ceil(document.getElementById("r21027").innerHTML) + Math.ceil(document.getElementById("r24547").innerHTML) + Math.ceil(document.getElementById("r21035").innerHTML) + Math.ceil(document.getElementById("r21037").innerHTML) + Math.ceil(document.getElementById("r24560").innerHTML) + Math.ceil(document.getElementById("r24556").innerHTML) + Math.ceil(document.getElementById("r21029").innerHTML) + Math.ceil(document.getElementById("r24545").innerHTML) + Math.ceil(document.getElementById("r21025").innerHTML) + Math.ceil(document.getElementById("r21041").innerHTML) + Math.ceil(document.getElementById("r21021").innerHTML) + Math.ceil(document.getElementById("r21009").innerHTML) + Math.ceil(document.getElementById("r21013").innerHTML) + Math.ceil(document.getElementById("r21023").innerHTML) + Math.ceil(document.getElementById("r24558").innerHTML) + Math.ceil(document.getElementById("r21039").innerHTML) + Math.ceil(document.getElementById("r21011").innerHTML);

    runPartsNumbers();
}

//calucalte minerals for parts
function runPartsNumbers() {
    var me = document.getElementById("partsME").value;
    var te = document.getElementById("partsTE").value;

    if (typeof partsfacilityme == 'undefined') {
        var partsSecstatus = parseFloat(document.getElementById("partsSecStatus").value);
        partsfacilityme = ((100 - (parseFloat(document.getElementById("partsMERig").value) * partsSecstatus)) / 100 * 0.99);
    }

    a_CapitalParts.forEach(function (part) {
        for (var count = 2; count < part.length; count++) {
            for (var index = 0; index < CapitalParts.length; index++) {
                if (part[1] == CapitalParts[index][1]) {
                    part[count] = Math.ceil(((CapitalParts[index][count]) * (1 - (me / 100)) * partsfacilityme) * document.getElementById('r' + part[1]).innerText);
                }
            }
        }
    });

    createTable(a_CapitalParts);
}

//prints minerals to to webpage
function createTable(tableData) {
    var table = document.getElementById('minerals');
    var tableBody = document.getElementById('mins');

    tableData.forEach(function (rowData) {
        var row = document.getElementById('m' + rowData[1].toString());
        while (row.hasChildNodes()) {
            row.removeChild(row.childNodes[0]);
        }

        var i = 0;
        rowData.forEach(function (cellData) {
            if (i != 1) {
                var cell = document.createElement('td');
                cell.style.textAlign = 'right';
                cell.appendChild(document.createTextNode(numberWithCommas(cellData)));
                row.appendChild(cell);
            }
            i++;
        });

        tableBody.appendChild(row);
    });
    var sumrow = document.getElementById('sum');
    while (sumrow.hasChildNodes()) {
        sumrow.removeChild(sumrow.childNodes[0]);
    }

    var sumCell = document.createElement('td');
    sumCell.style.textAlign = 'right';
    sumCell.appendChild(document.createTextNode("Sum:"));
    sumrow.appendChild(sumCell);

    var tritCell = document.createElement('td');
    tritCell.style.textAlign = 'right';
    var trit = 0;
    for (var runner = 0; runner < a_CapitalParts.length; runner++) {
        trit = trit + a_CapitalParts[runner][2];
    }
    tritCell.appendChild(document.createTextNode(numberWithCommas(trit)));
    sumrow.appendChild(tritCell);

    var pyerCell = document.createElement('td');
    pyerCell.style.textAlign = 'right';
    var pyer = 0;
    for (var runner = 0; runner < a_CapitalParts.length; runner++) {
        pyer = pyer + a_CapitalParts[runner][3];
    }
    pyerCell.appendChild(document.createTextNode(numberWithCommas(pyer)));
    sumrow.appendChild(pyerCell);

    var mexaCell = document.createElement('td');
    mexaCell.style.textAlign = 'right';
    var mexa = 0;
    for (var runner = 0; runner < a_CapitalParts.length; runner++) {
        mexa = mexa + a_CapitalParts[runner][4];
    }
    mexaCell.appendChild(document.createTextNode(numberWithCommas(mexa)));
    sumrow.appendChild(mexaCell);

    var isogCell = document.createElement('td');
    isogCell.style.textAlign = 'right';
    var isog = 0;
    for (var runner = 0; runner < a_CapitalParts.length; runner++) {
        isog = isog + a_CapitalParts[runner][5];
    }
    isogCell.appendChild(document.createTextNode(numberWithCommas(isog)));
    sumrow.appendChild(isogCell);

    var nocxCell = document.createElement('td');
    nocxCell.style.textAlign = 'right';
    var nocx = 0;
    for (var runner = 0; runner < a_CapitalParts.length; runner++) {
        nocx = nocx + a_CapitalParts[runner][6];
    }
    nocxCell.appendChild(document.createTextNode(numberWithCommas(nocx)));
    sumrow.appendChild(nocxCell);

    var zydrCell = document.createElement('td');
    zydrCell.style.textAlign = 'right';
    var zydr = 0;
    for (var runner = 0; runner < a_CapitalParts.length; runner++) {
        zydr = zydr + a_CapitalParts[runner][7];
    }
    zydrCell.appendChild(document.createTextNode(numberWithCommas(zydr)));
    sumrow.appendChild(zydrCell);

    var megaCell = document.createElement('td');
    megaCell.style.textAlign = 'right';
    var mega = 0;
    for (var runner = 0; runner < a_CapitalParts.length; runner++) {
        mega = mega + a_CapitalParts[runner][8];
    }
    megaCell.appendChild(document.createTextNode(numberWithCommas(mega)));
    sumrow.appendChild(megaCell);

    tableBody.appendChild(sumrow);

    table.appendChild(tableBody);


    if ((trit - parseInt(document.getElementById('hTrit').innerHTML.replace(/,/g, ""))) > 0) {
        var trit2 = trit - parseInt(document.getElementById('hTrit').innerHTML.replace(/,/g, ""));
    } else {
        var trit2 = 0;
    }

    if ((pyer - parseInt(document.getElementById('hPyer').innerHTML.replace(/,/g, ""))) > 0) {
        var pyer2 = pyer - parseInt(document.getElementById('hPyer').innerHTML.replace(/,/g, ""));
    } else {
        var pyer2 = 0;
    }

    if ((mexa - parseInt(document.getElementById('hMexa').innerHTML.replace(/,/g, ""))) > 0) {
        var mexa2 = mexa - parseInt(document.getElementById('hMexa').innerHTML.replace(/,/g, ""));
    } else {
        var mexa2 = 0;
    }

    if ((isog - parseInt(document.getElementById('hIsog').innerHTML.replace(/,/g, ""))) > 0) {
        var isog2 = isog - parseInt(document.getElementById('hIsog').innerHTML.replace(/,/g, ""));
    } else {
        var isog2 = 0;
    }

    if ((nocx - parseInt(document.getElementById('hNocx').innerHTML.replace(/,/g, ""))) > 0) {
        var nocx2 = nocx - parseInt(document.getElementById('hNocx').innerHTML.replace(/,/g, ""));
    } else {
        var nocx2 = 0;
    }

    if ((zydr - parseInt(document.getElementById('hZydr').innerHTML.replace(/,/g, ""))) > 0) {
        var zydr2 = zydr - parseInt(document.getElementById('hZydr').innerHTML.replace(/,/g, ""));
    } else {
        var zydr2 = 0;
    }

    if ((mega - parseInt(document.getElementById('hMega').innerHTML.replace(/,/g, ""))) > 0) {
        var mega2 = mega - parseInt(document.getElementById('hMega').innerHTML.replace(/,/g, ""));
    } else {
        var mega2 = 0;
    }
    if (document.getElementById("minTotal").checked) {
        document.getElementById("neededMins").value = trit + ' Tritanium\n' + pyer + ' Pyerite\n' + mexa + ' Mexallon\n' + isog + ' Isogen\n' + nocx + ' Nocxium\n' + zydr + ' Zydrine\n' + mega + ' Megacyte';
        calcOre(trit, pyer, mexa, isog, nocx, zydr, mega);
    } else if (document.getElementById("minRest").checked) {
        document.getElementById("neededMins").value = trit2 + ' Tritanium\n' + pyer2 + ' Pyerite\n' + mexa2 + ' Mexallon\n' + isog2 + ' Isogen\n' + nocx2 + ' Nocxium\n' + zydr2 + ' Zydrine\n' + mega2 + ' Megacyte';
        calcOre(trit2, pyer2, mexa2, isog2, nocx2, zydr2, mega2);

    }
}

//adds every 3 digits a comma
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//only two digits after comma
function numberTwo(x) {
    x = parseFloat(Math.round(x * 100) / 100).toFixed(2);
    return x;
}

//reverseCalcualtor
//turns minerals back into ore
function calcOre(Trit, Pye, Mex, Iso, Nocxium, Zydrine, Megacyte) {
    var yield = 0.893;

    //0%

    var ark, gne, spo, cro, bis, dar;
    var newmex, newiso, newnoc, newzyd, newmeg, newtrit, newpye;
    gne = 70 * Mex / (2400 * yield);
    newmex = Mex - gne * 2400 * yield
    /100;
    newiso = Iso - gne * 300 * yield
    /100;
    if (newiso > 0) {
        dar = 80 * newiso / (1600 * yield);
    } else {
        dar = 0
    }
    newnoc = Nocxium - dar * 120 * yield
    /100;
    if (newnoc > 0) {
        cro = 100 * newnoc / (760 * yield);
    } else {
        cro = 0
    }

    newzyd = Zydrine - cro * 135 * yield
    /100;
    if (newzyd > 0) {
        bis = 100 * newzyd / (450 * yield);
    } else {
        bis = 0
    }

    newmeg = Megacyte - bis * 100 * yield
    /100;
    if (newmeg > 0) {
        ark = 100 * newmeg / (320 * yield);
    } else {
        ark = 0
    }

    spo = 0;
    newiso = Iso - gne * 300 * yield
    /100-dar*1600*yield/
    100;
    newtrit = Trit - ark * 22000 * yield
    /100-cro*21000*yield/
    100 - dar * 10000 * yield
    /100-spo*56000*yield/
    100;

    if (newtrit > 0) {
        spo = 100 * newtrit / (56000 * yield);
    }
    newpye = Pye - bis * 12000 * yield
    /100-gne*2200*yield/
    100 - spo * 12050 * yield
    /100;
    if (newpye > 0) {
        bis = bis + 100 * newpye / (12000 * yield);
    }

    ark = Math.ceil(ark / 100);
    bis = Math.ceil(bis / 100);
    cro = Math.ceil(cro / 100);
    spo = Math.ceil(spo / 100);
    dar = Math.ceil(dar / 100);
    gne = Math.ceil(gne / 100);

    document.getElementById('ark0').innerHTML = numberWithCommas(ark);
    document.getElementById('bis0').innerHTML = numberWithCommas(bis);
    document.getElementById('cro0').innerHTML = numberWithCommas(cro);
    document.getElementById('och0').innerHTML = numberWithCommas(dar);
    document.getElementById('gne0').innerHTML = numberWithCommas(gne);
    document.getElementById('spo0').innerHTML = numberWithCommas(spo);

    //5%

    var ark, gne, spo, cro, bis, dar;
    var newmex, newiso, newnoc, newzyd, newmeg, newtrit, newpye;
    gne = 70 * Mex / (2520 * yield);
    newmex = Mex - gne * 2520 * yield
    /100;
    newiso = Iso - gne * 315 * yield
    /100;
    if (newiso > 0) {
        dar = 80 * newiso / (1680 * yield);
    } else {
        dar = 0
    }
    newnoc = Nocxium - dar * 126 * yield
    /100;
    if (newnoc > 0) {
        cro = 100 * newnoc / (798 * yield);
    } else {
        cro = 0
    }

    newzyd = Zydrine - cro * 142 * yield
    /100;
    if (newzyd > 0) {
        bis = 100 * newzyd / (473 * yield);
    } else {
        bis = 0
    }

    newmeg = Megacyte - bis * 105 * yield
    /100;
    if (newmeg > 0) {
        ark = 100 * newmeg / (336 * yield);
    } else {
        ark = 0
    }

    spo = 0;
    newiso = Iso - gne * 315 * yield
    /100-dar*1680*yield/
    100;
    newtrit = Trit - ark * 23100 * yield
    /100-cro*22050*yield/
    100 - dar * 10500 * yield
    /100-spo*58800*yield/
    100;

    if (newtrit > 0) {
        spo = 100 * newtrit / (58800 * yield);
    }
    newpye = Pye - bis * 12600 * yield
    /100-gne*2310*yield/
    100 - spo * 12653 * yield
    /100;
    if (newpye > 0) {
        bis = bis + 100 * newpye / (12600 * yield);
    }

    ark = Math.ceil(ark / 100);
    bis = Math.ceil(bis / 100);
    cro = Math.ceil(cro / 100);
    spo = Math.ceil(spo / 100);
    dar = Math.ceil(dar / 100);
    gne = Math.ceil(gne / 100);

    document.getElementById('ark5').innerHTML = numberWithCommas(ark);
    document.getElementById('bis5').innerHTML = numberWithCommas(bis);
    document.getElementById('cro5').innerHTML = numberWithCommas(cro);
    document.getElementById('och5').innerHTML = numberWithCommas(dar);
    document.getElementById('gne5').innerHTML = numberWithCommas(gne);
    document.getElementById('spo5').innerHTML = numberWithCommas(spo);

    //10%

    var ark, gne, spo, cro, bis, dar;
    var newmex, newiso, newnoc, newzyd, newmeg, newtrit, newpye;
    gne = 70 * Mex / (2640 * yield);
    newmex = Mex - gne * 2640 * yield
    /100;
    newiso = Iso - gne * 330 * yield
    /100;
    if (newiso > 0) {
        dar = 80 * newiso / (1760 * yield);
    } else {
        dar = 0
    }
    newnoc = Nocxium - dar * 132 * yield
    /100;
    if (newnoc > 0) {
        cro = 100 * newnoc / (836 * yield);
    } else {
        cro = 0
    }

    newzyd = Zydrine - cro * 149 * yield
    /100;
    if (newzyd > 0) {
        bis = 100 * newzyd / (495 * yield);
    } else {
        bis = 0
    }

    newmeg = Megacyte - bis * 110 * yield
    /100;
    if (newmeg > 0) {
        ark = 100 * newmeg / (352 * yield);
    } else {
        ark = 0
    }

    spo = 0;
    newiso = Iso - gne * 330 * yield
    /100-dar*1760*yield/
    100;
    newtrit = Trit - ark * 24200 * yield
    /100-cro*23100*yield/
    100 - dar * 11000 * yield
    /100-spo*61600*yield/
    100;

    if (newtrit > 0) {
        spo = 100 * newtrit / (61600 * yield);
    }
    newpye = Pye - bis * 13200 * yield
    /100-gne*2420*yield/
    100 - spo * 13255 * yield
    /100;
    if (newpye > 0) {
        bis = bis + 100 * newpye / (13200 * yield);
    }

    ark = Math.ceil(ark / 100);
    bis = Math.ceil(bis / 100);
    cro = Math.ceil(cro / 100);
    spo = Math.ceil(spo / 100);
    dar = Math.ceil(dar / 100);
    gne = Math.ceil(gne / 100);

    document.getElementById('ark10').innerHTML = numberWithCommas(ark);
    document.getElementById('bis10').innerHTML = numberWithCommas(bis);
    document.getElementById('cro10').innerHTML = numberWithCommas(cro);
    document.getElementById('och10').innerHTML = numberWithCommas(dar);
    document.getElementById('gne10').innerHTML = numberWithCommas(gne);
    document.getElementById('spo10').innerHTML = numberWithCommas(spo);

    printOre();
}

//prints ore to weppage
function printOre() {
    if (document.getElementById('tier1').checked) {
        var ark = parseInt(document.getElementById('ark0').innerHTML.replace(/,/g, ""));
        var bis = parseInt(document.getElementById('bis0').innerHTML.replace(/,/g, ""));
        var cro = parseInt(document.getElementById('cro0').innerHTML.replace(/,/g, ""));
        var och = parseInt(document.getElementById('och0').innerHTML.replace(/,/g, ""));
        var gne = parseInt(document.getElementById('gne0').innerHTML.replace(/,/g, ""));
        var spo = parseInt(document.getElementById('spo0').innerHTML.replace(/,/g, ""));
        if (document.getElementById("oreTotal").checked) {
            document.getElementById("neededOres").value = ark + " Compressed Arkonor\n" + bis + " Compressed Bistot\n" + cro + " Compressed Crokite\n" + och + " Compressed Dark Ochre\n" + gne + " Compressed Gneiss\n" + spo + " Compressed Spodumain";
        } else if (document.getElementById("oreRest").checked) {
            ark = ark - parseInt(document.getElementById('hA0').innerHTML.replace(/,/g, ""));
            bis = bis - parseInt(document.getElementById('hB0').innerHTML.replace(/,/g, ""));
            cro = cro - parseInt(document.getElementById('hC0').innerHTML.replace(/,/g, ""));
            och = och - parseInt(document.getElementById('hO0').innerHTML.replace(/,/g, ""));
            gne = gne - parseInt(document.getElementById('hG0').innerHTML.replace(/,/g, ""));
            spo = spo - parseInt(document.getElementById('hS0').innerHTML.replace(/,/g, ""));
            document.getElementById("neededOres").value = ark + " Compressed Arkonor\n" + bis + " Compressed Bistot\n" + cro + " Compressed Crokite\n" + och + " Compressed Dark Ochre\n" + gne + " Compressed Gneiss\n" + spo + " Compressed Spodumain";
        }


        for (var i = 0; i < 7; i++) {
            document.getElementsByClassName("hO0")[i].style.display = "table-cell";
            document.getElementsByClassName("hO5")[i].style.display = "none";
            document.getElementsByClassName("hO10")[i].style.display = "none";
        }


        if (document.getElementById('hA0').innerHTML == 0) {
            document.getElementById("myArkBar").style.width = '0%';
            document.getElementById("myArkBar").innerHTML = '0% Arkonor';
        } else if (document.getElementById('ark0').innerHTML == 0) {
            document.getElementById("myArkBar").style.width = '100%';
            document.getElementById("myArkBar").innerHTML = '100% Arkonor';
        } else if (parseInt(document.getElementById('hA0').innerHTML.replace(/,/g, "")) < parseInt(document.getElementById('ark0').innerHTML.replace(/,/g, ""))) {
            document.getElementById("myArkBar").style.width = (parseInt(document.getElementById('hA0').innerHTML.replace(/,/g, "")) / parseInt(document.getElementById('ark0').innerHTML.replace(/,/g, ""))) * 100 + "%";
            document.getElementById("myArkBar").innerHTML = numberTwo((parseInt(document.getElementById('hA0').innerHTML.replace(/,/g, "")) / parseInt(document.getElementById('ark0').innerHTML.replace(/,/g, ""))) * 100) + "% Arkonor";
        } else {
            document.getElementById("myArkBar").style.width = '100%';
            document.getElementById("myArkBar").innerHTML = '100% Arkonor';
        }

        if (document.getElementById('hB0').innerHTML == 0) {
            document.getElementById("myBisBar").style.width = '0%';
            document.getElementById("myBisBar").innerHTML = '0% Bistot';
        } else if (document.getElementById('bis0').innerHTML == 0) {
            document.getElementById("myBisBar").style.width = '100%';
            document.getElementById("myBisBar").innerHTML = '100% Bistot';
        } else if (parseInt(document.getElementById('hB0').innerHTML.replace(/,/g, "")) < parseInt(document.getElementById('bis0').innerHTML.replace(/,/g, ""))) {
            document.getElementById("myBisBar").style.width = (parseInt(document.getElementById('hB0').innerHTML.replace(/,/g, "")) / parseInt(document.getElementById('bis0').innerHTML.replace(/,/g, ""))) * 100 + "%";
            document.getElementById("myBisBar").innerHTML = numberTwo((parseInt(document.getElementById('hB0').innerHTML.replace(/,/g, "")) / parseInt(document.getElementById('bis0').innerHTML.replace(/,/g, ""))) * 100) + "% Bistot";
        } else {
            document.getElementById("myBisBar").style.width = '100%';
            document.getElementById("myBisBar").innerHTML = '100% Bistot';
        }

        if (document.getElementById('hC0').innerHTML == 0) {
            document.getElementById("myCroBar").style.width = '0%';
            document.getElementById("myCroBar").innerHTML = '0% Crokite';
        } else if (document.getElementById('cro0').innerHTML == 0) {
            document.getElementById("myCroBar").style.width = '100%';
            document.getElementById("myCroBar").innerHTML = '100% Crokite';
        } else if (parseInt(document.getElementById('hC0').innerHTML.replace(/,/g, "")) < parseInt(document.getElementById('cro0').innerHTML.replace(/,/g, ""))) {
            document.getElementById("myCroBar").style.width = (parseInt(document.getElementById('hC0').innerHTML.replace(/,/g, "")) / parseInt(document.getElementById('cro0').innerHTML.replace(/,/g, ""))) * 100 + "%";
            document.getElementById("myCroBar").innerHTML = numberTwo((parseInt(document.getElementById('hC0').innerHTML.replace(/,/g, "")) / parseInt(document.getElementById('cro0').innerHTML.replace(/,/g, ""))) * 100) + "% Crokite";
        } else {
            document.getElementById("myCroBar").style.width = '100%';
            document.getElementById("myCroBar").innerHTML = '100% Crokite';
        }

        if (document.getElementById('hO0').innerHTML == 0) {
            document.getElementById("myOchBar").style.width = '0%';
            document.getElementById("myOchBar").innerHTML = '0% Ochre';
        } else if (document.getElementById('och0').innerHTML == 0) {
            document.getElementById("myOchBar").style.width = '100%';
            document.getElementById("myOchBar").innerHTML = '100% Ochre';
        } else if (parseInt(document.getElementById('hO0').innerHTML.replace(/,/g, "")) < parseInt(document.getElementById('och0').innerHTML.replace(/,/g, ""))) {
            document.getElementById("myOchBar").style.width = (parseInt(document.getElementById('hO0').innerHTML.replace(/,/g, "")) / parseInt(document.getElementById('och0').innerHTML.replace(/,/g, ""))) * 100 + "%";
            document.getElementById("myOchBar").innerHTML = numberTwo((parseInt(document.getElementById('hO0').innerHTML.replace(/,/g, "")) / parseInt(document.getElementById('och0').innerHTML.replace(/,/g, ""))) * 100) + "% Ochre";
        } else {
            document.getElementById("myOchBar").style.width = '100%';
            document.getElementById("myOchBar").innerHTML = '100% Ochre';
        }

        if (document.getElementById('hG0').innerHTML == 0) {
            document.getElementById("myGneBar").style.width = '0%';
            document.getElementById("myGneBar").innerHTML = '0% Gneiss';
        } else if (document.getElementById('gne0').innerHTML == 0) {
            document.getElementById("myGneBar").style.width = '100%';
            document.getElementById("myGneBar").innerHTML = '100% Gneiss';
        } else if (parseInt(document.getElementById('hG0').innerHTML.replace(/,/g, "")) < parseInt(document.getElementById('gne0').innerHTML.replace(/,/g, ""))) {
            document.getElementById("myGneBar").style.width = (parseInt(document.getElementById('hG0').innerHTML.replace(/,/g, "")) / parseInt(document.getElementById('gne0').innerHTML.replace(/,/g, ""))) * 100 + "%";
            document.getElementById("myGneBar").innerHTML = numberTwo((parseInt(document.getElementById('hG0').innerHTML.replace(/,/g, "")) / parseInt(document.getElementById('gne0').innerHTML.replace(/,/g, ""))) * 100) + "% Gneiss";
        } else {
            document.getElementById("myGneBar").style.width = '100%';
            document.getElementById("myGneBar").innerHTML = '100% Gneiss';
        }

        if (document.getElementById('hS0').innerHTML == 0) {
            document.getElementById("mySpoBar").style.width = '0%';
            document.getElementById("mySpoBar").innerHTML = '0% Spodumain';
        } else if (document.getElementById('spo0').innerHTML == 0) {
            document.getElementById("mySpoBar").style.width = '100%';
            document.getElementById("mySpoBar").innerHTML = '100% Spodumain';
        } else if (parseInt(document.getElementById('hS0').innerHTML.replace(/,/g, "")) < parseInt(document.getElementById('spo0').innerHTML.replace(/,/g, ""))) {
            document.getElementById("mySpoBar").style.width = (parseInt(document.getElementById('hS0').innerHTML.replace(/,/g, "")) / parseInt(document.getElementById('spo0').innerHTML.replace(/,/g, ""))) * 100 + "%";
            document.getElementById("mySpoBar").innerHTML = numberTwo((parseInt(document.getElementById('hS0').innerHTML.replace(/,/g, "")) / parseInt(document.getElementById('spo0').innerHTML.replace(/,/g, ""))) * 100) + "% Spodumain";
        } else {
            document.getElementById("mySpoBar").style.width = '100%';
            document.getElementById("mySpoBar").innerHTML = '100% Spodumain';
        }


    } else if (document.getElementById('tier2').checked) {

        var ark = parseInt(document.getElementById('ark5').innerHTML.replace(/,/g, ""));
        var bis = parseInt(document.getElementById('bis5').innerHTML.replace(/,/g, ""));
        var cro = parseInt(document.getElementById('cro5').innerHTML.replace(/,/g, ""));
        var och = parseInt(document.getElementById('och5').innerHTML.replace(/,/g, ""));
        var gne = parseInt(document.getElementById('gne5').innerHTML.replace(/,/g, ""));
        var spo = parseInt(document.getElementById('spo5').innerHTML.replace(/,/g, ""));
        if (document.getElementById("oreTotal").checked) {
            document.getElementById("neededOres").value = ark + " Compressed Crimson Arkonor\n" + bis + " Compressed Triclinic Bistot\n" + cro + " Compressed Sharp Crokite\n" + och + " Compressed Onyx Ochre\n" + gne + " Compressed Iridescent Gneiss\n" + spo + " Compressed Bright Spodumain";
        } else if (document.getElementById("oreRest").checked) {
            ark = ark - parseInt(document.getElementById('hA5').innerHTML.replace(/,/g, ""));
            bis = bis - parseInt(document.getElementById('hB5').innerHTML.replace(/,/g, ""));
            cro = cro - parseInt(document.getElementById('hC5').innerHTML.replace(/,/g, ""));
            och = och - parseInt(document.getElementById('hO5').innerHTML.replace(/,/g, ""));
            gne = gne - parseInt(document.getElementById('hG5').innerHTML.replace(/,/g, ""));
            spo = spo - parseInt(document.getElementById('hS5').innerHTML.replace(/,/g, ""));
            document.getElementById("neededOres").value = ark + " Compressed Crimson Arkonor\n" + bis + " Compressed Triclinic Bistot\n" + cro + " Compressed Sharp Crokite\n" + och + " Compressed Onyx Ochre\n" + gne + " Compressed Iridescent Gneiss\n" + spo + " Compressed Bright Spodumain";
        }

        for (var i = 0; i < 7; i++) {
            document.getElementsByClassName("hO0")[i].style.display = "none";
            document.getElementsByClassName("hO5")[i].style.display = "table-cell";
            document.getElementsByClassName("hO10")[i].style.display = "none";
        }


        if (document.getElementById('hA5').innerHTML == 0) {
            document.getElementById("myArkBar").style.width = '0%';
            document.getElementById("myArkBar").innerHTML = '0% Arkonor';
        } else if (document.getElementById('ark5').innerHTML == 0) {
            document.getElementById("myArkBar").style.width = '100%';
            document.getElementById("myArkBar").innerHTML = '100% Arkonor';
        } else if (parseInt(document.getElementById('hA5').innerHTML.replace(/,/g, "")) < parseInt(document.getElementById('ark5').innerHTML.replace(/,/g, ""))) {
            document.getElementById("myArkBar").style.width = (parseInt(document.getElementById('hA5').innerHTML.replace(/,/g, "")) / parseInt(document.getElementById('ark5').innerHTML.replace(/,/g, ""))) * 100 + "%";
            document.getElementById("myArkBar").innerHTML = numberTwo((parseInt(document.getElementById('hA5').innerHTML.replace(/,/g, "")) / parseInt(document.getElementById('ark5').innerHTML.replace(/,/g, ""))) * 100) + "% Arkonor";
        } else {
            document.getElementById("myArkBar").style.width = '100%';
            document.getElementById("myArkBar").innerHTML = '100% Arkonor';
        }

        if (document.getElementById('hB5').innerHTML == 0) {
            document.getElementById("myBisBar").style.width = '0%';
            document.getElementById("myBisBar").innerHTML = '0% Bistot';
        } else if (document.getElementById('bis5').innerHTML == 0) {
            document.getElementById("myBisBar").style.width = '100%';
            document.getElementById("myBisBar").innerHTML = '100% Bistot';
        } else if (parseInt(document.getElementById('hB5').innerHTML.replace(/,/g, "")) < parseInt(document.getElementById('bis5').innerHTML.replace(/,/g, ""))) {
            document.getElementById("myBisBar").style.width = (parseInt(document.getElementById('hB5').innerHTML.replace(/,/g, "")) / parseInt(document.getElementById('bis5').innerHTML.replace(/,/g, ""))) * 100 + "%";
            document.getElementById("myBisBar").innerHTML = numberTwo((parseInt(document.getElementById('hB5').innerHTML.replace(/,/g, "")) / parseInt(document.getElementById('bis5').innerHTML.replace(/,/g, ""))) * 100) + "% Bistot";
        } else {
            document.getElementById("myBisBar").style.width = '100%';
            document.getElementById("myBisBar").innerHTML = '100% Bistot';
        }

        if (document.getElementById('hC5').innerHTML == 0) {
            document.getElementById("myCroBar").style.width = '0%';
            document.getElementById("myCroBar").innerHTML = '0% Crokite';
        } else if (document.getElementById('cro5').innerHTML == 0) {
            document.getElementById("myCroBar").style.width = '100%';
            document.getElementById("myCroBar").innerHTML = '100% Crokite';
        } else if (parseInt(document.getElementById('hC5').innerHTML.replace(/,/g, "")) < parseInt(document.getElementById('cro5').innerHTML.replace(/,/g, ""))) {
            document.getElementById("myCroBar").style.width = (parseInt(document.getElementById('hC5').innerHTML.replace(/,/g, "")) / parseInt(document.getElementById('cro5').innerHTML.replace(/,/g, ""))) * 100 + "%";
            document.getElementById("myCroBar").innerHTML = numberTwo((parseInt(document.getElementById('hC5').innerHTML.replace(/,/g, "")) / parseInt(document.getElementById('cro5').innerHTML.replace(/,/g, ""))) * 100) + "% Crokite";
        } else {
            document.getElementById("myCroBar").style.width = '100%';
            document.getElementById("myCroBar").innerHTML = '100% Crokite';
        }

        if (document.getElementById('hO5').innerHTML == 0) {
            document.getElementById("myOchBar").style.width = '0%';
            document.getElementById("myOchBar").innerHTML = '0% Ochre';
        } else if (document.getElementById('och5').innerHTML == 0) {
            document.getElementById("myOchBar").style.width = '100%';
            document.getElementById("myOchBar").innerHTML = '100% Ochre';
        } else if (parseInt(document.getElementById('hO5').innerHTML.replace(/,/g, "")) < parseInt(document.getElementById('och5').innerHTML.replace(/,/g, ""))) {
            document.getElementById("myOchBar").style.width = (parseInt(document.getElementById('hO5').innerHTML.replace(/,/g, "")) / parseInt(document.getElementById('och5').innerHTML.replace(/,/g, ""))) * 100 + "%";
            document.getElementById("myOchBar").innerHTML = numberTwo((parseInt(document.getElementById('hO5').innerHTML.replace(/,/g, "")) / parseInt(document.getElementById('och5').innerHTML.replace(/,/g, ""))) * 100) + "% Ochre";
        } else {
            document.getElementById("myOchBar").style.width = '100%';
            document.getElementById("myOchBar").innerHTML = '100% Ochre';
        }

        if (document.getElementById('hG5').innerHTML == 0) {
            document.getElementById("myGneBar").style.width = '0%';
            document.getElementById("myGneBar").innerHTML = '0% Gneiss';
        } else if (document.getElementById('gne5').innerHTML == 0) {
            document.getElementById("myGneBar").style.width = '100%';
            document.getElementById("myGneBar").innerHTML = '100% Gneiss';
        } else if (parseInt(document.getElementById('hG5').innerHTML.replace(/,/g, "")) < parseInt(document.getElementById('gne5').innerHTML.replace(/,/g, ""))) {
            document.getElementById("myGneBar").style.width = (parseInt(document.getElementById('hG5').innerHTML.replace(/,/g, "")) / parseInt(document.getElementById('gne5').innerHTML.replace(/,/g, ""))) * 100 + "%";
            document.getElementById("myGneBar").innerHTML = numberTwo((parseInt(document.getElementById('hG5').innerHTML.replace(/,/g, "")) / parseInt(document.getElementById('gne5').innerHTML.replace(/,/g, ""))) * 100) + "% Gneiss";
        } else {
            document.getElementById("myGneBar").style.width = '100%';
            document.getElementById("myGneBar").innerHTML = '100% Gneiss';
        }

        if (document.getElementById('hS5').innerHTML == 0) {
            document.getElementById("mySpoBar").style.width = '0%';
            document.getElementById("mySpoBar").innerHTML = '0% Spodumain';
        } else if (document.getElementById('spo5').innerHTML == 0) {
            document.getElementById("mySpoBar").style.width = '100%';
            document.getElementById("mySpoBar").innerHTML = '100% Spodumain';
        } else if (parseInt(document.getElementById('hS5').innerHTML.replace(/,/g, "")) < parseInt(document.getElementById('spo5').innerHTML.replace(/,/g, ""))) {
            document.getElementById("mySpoBar").style.width = (parseInt(document.getElementById('hS5').innerHTML.replace(/,/g, "")) / parseInt(document.getElementById('spo5').innerHTML.replace(/,/g, ""))) * 100 + "%";
            document.getElementById("mySpoBar").innerHTML = numberTwo((parseInt(document.getElementById('hS5').innerHTML.replace(/,/g, "")) / parseInt(document.getElementById('spo5').innerHTML.replace(/,/g, ""))) * 100) + "% Spodumain";
        } else {
            document.getElementById("mySpoBar").style.width = '100%';
            document.getElementById("mySpoBar").innerHTML = '100% Spodumain';
        }


    } else if (document.getElementById('tier3').checked) {

        var ark = parseInt(document.getElementById('ark10').innerHTML.replace(/,/g, ""));
        var bis = parseInt(document.getElementById('bis10').innerHTML.replace(/,/g, ""));
        var cro = parseInt(document.getElementById('cro10').innerHTML.replace(/,/g, ""));
        var och = parseInt(document.getElementById('och10').innerHTML.replace(/,/g, ""));
        var gne = parseInt(document.getElementById('gne10').innerHTML.replace(/,/g, ""));
        var spo = parseInt(document.getElementById('spo10').innerHTML.replace(/,/g, ""));
        if (document.getElementById("oreTotal").checked) {
            document.getElementById("neededOres").value = ark + " Compressed Prime Arkonor\n" + bis + " Compressed Monoclinic Bistot\n" + cro + " Compressed Crystalline Crokite\n" + och + " Compressed Obsidian Ochre\n" + gne + " Compressed Prismatic Gneiss\n" + spo + " Compressed Gleaming Spodumain";
        } else if (document.getElementById("oreRest").checked) {
            ark = ark - parseInt(document.getElementById('hA10').innerHTML.replace(/,/g, ""));
            bis = bis - parseInt(document.getElementById('hB10').innerHTML.replace(/,/g, ""));
            cro = cro - parseInt(document.getElementById('hC10').innerHTML.replace(/,/g, ""));
            och = och - parseInt(document.getElementById('hO10').innerHTML.replace(/,/g, ""));
            gne = gne - parseInt(document.getElementById('hG10').innerHTML.replace(/,/g, ""));
            spo = spo - parseInt(document.getElementById('hS10').innerHTML.replace(/,/g, ""));
            document.getElementById("neededOres").value = ark + " Compressed Prime Arkonor\n" + bis + " Compressed Monoclinic Bistot\n" + cro + " Compressed Crystalline Crokite\n" + och + " Compressed Obsidian Ochre\n" + gne + " Compressed Prismatic Gneiss\n" + spo + " Compressed Gleaming Spodumain";
        }

        for (var i = 0; i < 7; i++) {
            document.getElementsByClassName("hO0")[i].style.display = "none";
            document.getElementsByClassName("hO5")[i].style.display = "none";
            document.getElementsByClassName("hO10")[i].style.display = "table-cell";
        }


        if (document.getElementById('hA10').innerHTML == 0) {
            document.getElementById("myArkBar").style.width = '0%';
            document.getElementById("myArkBar").innerHTML = '0% Arkonor';
        } else if (document.getElementById('ark10').innerHTML == 0) {
            document.getElementById("myArkBar").style.width = '100%';
            document.getElementById("myArkBar").innerHTML = '100% Arkonor';
        } else if (parseInt(document.getElementById('hA10').innerHTML.replace(/,/g, "")) < parseInt(document.getElementById('ark10').innerHTML.replace(/,/g, ""))) {
            document.getElementById("myArkBar").style.width = (parseInt(document.getElementById('hA10').innerHTML.replace(/,/g, "")) / parseInt(document.getElementById('ark10').innerHTML.replace(/,/g, ""))) * 100 + "%";
            document.getElementById("myArkBar").innerHTML = numberTwo((parseInt(document.getElementById('hA10').innerHTML.replace(/,/g, "")) / parseInt(document.getElementById('ark10').innerHTML.replace(/,/g, ""))) * 100) + "% Arkonor";
        } else {
            document.getElementById("myArkBar").style.width = '100%';
            document.getElementById("myArkBar").innerHTML = '100% Arkonor';
        }

        if (document.getElementById('hB10').innerHTML == 0) {
            document.getElementById("myBisBar").style.width = '0%';
            document.getElementById("myBisBar").innerHTML = '0% Bistot';
        } else if (document.getElementById('bis10').innerHTML == 0) {
            document.getElementById("myBisBar").style.width = '100%';
            document.getElementById("myBisBar").innerHTML = '100% Bistot';
        } else if (parseInt(document.getElementById('hB10').innerHTML.replace(/,/g, "")) < parseInt(document.getElementById('bis10').innerHTML.replace(/,/g, ""))) {
            document.getElementById("myBisBar").style.width = (parseInt(document.getElementById('hB10').innerHTML.replace(/,/g, "")) / parseInt(document.getElementById('bis10').innerHTML.replace(/,/g, ""))) * 100 + "%";
            document.getElementById("myBisBar").innerHTML = numberTwo((parseInt(document.getElementById('hB10').innerHTML.replace(/,/g, "")) / parseInt(document.getElementById('bis10').innerHTML.replace(/,/g, ""))) * 100) + "% Bistot";
        } else {
            document.getElementById("myBisBar").style.width = '100%';
            document.getElementById("myBisBar").innerHTML = '100% Bistot';
        }

        if (document.getElementById('hC10').innerHTML == 0) {
            document.getElementById("myCroBar").style.width = '0%';
            document.getElementById("myCroBar").innerHTML = '0% Crokite';
        } else if (document.getElementById('cro10').innerHTML == 0) {
            document.getElementById("myCroBar").style.width = '100%';
            document.getElementById("myCroBar").innerHTML = '100% Crokite';
        } else if (parseInt(document.getElementById('hC10').innerHTML.replace(/,/g, "")) < parseInt(document.getElementById('cro10').innerHTML.replace(/,/g, ""))) {
            document.getElementById("myCroBar").style.width = (parseInt(document.getElementById('hC10').innerHTML.replace(/,/g, "")) / parseInt(document.getElementById('cro10').innerHTML.replace(/,/g, ""))) * 100 + "%";
            document.getElementById("myCroBar").innerHTML = numberTwo((parseInt(document.getElementById('hC10').innerHTML.replace(/,/g, "")) / parseInt(document.getElementById('cro10').innerHTML.replace(/,/g, ""))) * 100) + "% Crokite";
        } else {
            document.getElementById("myCroBar").style.width = '100%';
            document.getElementById("myCroBar").innerHTML = '100% Crokite';
        }

        if (document.getElementById('hO10').innerHTML == 0) {
            document.getElementById("myOchBar").style.width = '0%';
            document.getElementById("myOchBar").innerHTML = '0% Ochre';
        } else if (document.getElementById('och10').innerHTML == 0) {
            document.getElementById("myOchBar").style.width = '100%';
            document.getElementById("myOchBar").innerHTML = '100% Ochre';
        } else if (parseInt(document.getElementById('hO10').innerHTML.replace(/,/g, "")) < parseInt(document.getElementById('och10').innerHTML.replace(/,/g, ""))) {
            document.getElementById("myOchBar").style.width = (parseInt(document.getElementById('hO10').innerHTML.replace(/,/g, "")) / parseInt(document.getElementById('och10').innerHTML.replace(/,/g, ""))) * 100 + "%";
            document.getElementById("myOchBar").innerHTML = numberTwo((parseInt(document.getElementById('hO10').innerHTML.replace(/,/g, "")) / parseInt(document.getElementById('och10').innerHTML.replace(/,/g, ""))) * 100) + "% Ochre";
        } else {
            document.getElementById("myOchBar").style.width = '100%';
            document.getElementById("myOchBar").innerHTML = '100% Ochre';
        }

        if (document.getElementById('hG10').innerHTML == 0) {
            document.getElementById("myGneBar").style.width = '0%';
            document.getElementById("myGneBar").innerHTML = '0% Gneiss';
        } else if (document.getElementById('gne10').innerHTML == 0) {
            document.getElementById("myGneBar").style.width = '100%';
            document.getElementById("myGneBar").innerHTML = '100% Gneiss';
        } else if (parseInt(document.getElementById('hG10').innerHTML.replace(/,/g, "")) < parseInt(document.getElementById('gne10').innerHTML.replace(/,/g, ""))) {
            document.getElementById("myGneBar").style.width = (parseInt(document.getElementById('hG10').innerHTML.replace(/,/g, "")) / parseInt(document.getElementById('gne10').innerHTML.replace(/,/g, ""))) * 100 + "%";
            document.getElementById("myGneBar").innerHTML = numberTwo((parseInt(document.getElementById('hG10').innerHTML.replace(/,/g, "")) / parseInt(document.getElementById('gne10').innerHTML.replace(/,/g, ""))) * 100) + "% Gneiss";
        } else {
            document.getElementById("myGneBar").style.width = '100%';
            document.getElementById("myGneBar").innerHTML = '100% Gneiss';
        }

        if (document.getElementById('hS10').innerHTML == 0) {
            document.getElementById("mySpoBar").style.width = '0%';
            document.getElementById("mySpoBar").innerHTML = '0% Spodumain';
        } else if (document.getElementById('spo10').innerHTML == 0) {
            document.getElementById("mySpoBar").style.width = '100%';
            document.getElementById("mySpoBar").innerHTML = '100% Spodumain';

        } else if (parseInt(document.getElementById('hS10').innerHTML.replace(/,/g, "")) < parseInt(document.getElementById('spo10').innerHTML.replace(/,/g, ""))) {
            document.getElementById("mySpoBar").style.width = (parseInt(document.getElementById('hS10').innerHTML.replace(/,/g, "")) / parseInt(document.getElementById('spo10').innerHTML.replace(/,/g, ""))) * 100 + "%";
            document.getElementById("mySpoBar").innerHTML = numberTwo((parseInt(document.getElementById('hS10').innerHTML.replace(/,/g, "")) / parseInt(document.getElementById('spo10').innerHTML.replace(/,/g, ""))) * 100) + "% Spodumain";
        } else {
            document.getElementById("mySpoBar").style.width = '100%';
            document.getElementById("mySpoBar").innerHTML = '100% Spodumain';
        }


    }
}
