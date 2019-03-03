/* 
   Cryply2CranePay
   CranePay/Cryply Core Team (C) 2019 
*/
var results = [];

fs = require('fs');

var exec = require('child_process').execFile;

var addrs = require('./list.json')

var counter= 0;
var counter2 = 0
var fun =function(crp_pub_key){
   counter++;
   console.log("REM " + counter + " = checking for :" + crp_pub_key );	
   exec('cryply_client.cmd',["dumpprivkey", crp_pub_key], function(err, data) {  
	if (err){
		console.error("REM: " + err + ": " + crp_pub_key);
	}

        console.log("@call cranepay_client.cmd importprivkey \"" + data.toString().replace(/\r\n$/, '') + "\" \"addr" + counter2 + "\" true");                       
	counter2++;
	//console.log("@call cranepay_client.cmd abortrescan ");                       
	
    });  
}

addrs.forEach(function(aaa){
	aaa.forEach(function(bbb){
		if (bbb[0]){
			//console.log("@call crp.cmd dumpprivkey " + bbb[0] + "\n");
			fun(bbb[0]);
		}
	});
});

