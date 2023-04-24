// uzduotis 8

const email = "jonas.jonaitis@gmail.com";
const parts = email.split("@");
const username = parts[0];
const domain = parts[1];



document.getElementById('output1').innerHTML = "Vartotojas: " + username + "<br>" + "Domenas: " + domain;




// uzduotis 9
/*
Pvz: http://vieversys.serveriai.lt/moodle/course/modedit.php?update=2859&return=1
Protokolas: http
Domenas: serveriai.lt
Subdomenas: vieversys
Katalogas:  /moodle/course/
Vykdomasis failas: modedit.php
Parametrai: update=2859&return=1
*/

let output = "";
const protocol = window.location.protocol; // http
const domain1 = window.location.hostname; // serveriai.lt
const subdomain = window.location.hostname.split('.')[0]; // vieversys
const path = window.location.pathname; // /moodle/course/modedit.php
const filename = path.substring(path.lastIndexOf('/')+1); // modedit.php
const params = window.location.search; // ?update=2859&return=1

output += protocol + domain1 + subdomain + path + filename + params
document.getElementById('output').innerHTML = output;
console.log(output)
