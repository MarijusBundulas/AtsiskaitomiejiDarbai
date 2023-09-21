// uzduotis 8

const email = "jonas.jonaitis@gmail.com";
const parts = email.split("@");
const username = parts[0];
const gmailas = parts[1];



document.getElementById('output1').innerHTML = "Vartotojas: " + username + "<br>" + "Domenas: " + gmailas;




// uzduotis 9
let output = "";
const link = 'http://vieversys.serveriai.lt/moodle/course/modedit.php?update=2859&return=1';

const protocol = link.split('://')[0];


const domainSubdomain = link.split('://')[1].split('/')[0];
const [subdomain, ...domainParts] = domainSubdomain.split('.');


const pathParts = link.split('?')[0].split('/').slice(3);
const filename = pathParts.pop();
const path = pathParts.join('/');

const searchParams = new URLSearchParams(link.split('?')[1]);
const parameters = {};
for (const [key, value] of searchParams.entries()) {
  parameters[key] = value;
}


console.log('Protocol:', protocol);
console.log('Domain:', domainParts.join('.'));
console.log('Subdomain:', subdomain);
console.log('Path:', path);
console.log('Filename:', filename);
console.log('Parameters:', parameters);
output += "Protokolas: " + protocol + "<br>Domenas: " + domainParts.join('.') + "<br>Subdomenas: " + subdomain + "<br>Katalogas: " + path + "<br>Vykdomasis failas: " + filename + "<br> Parametrai: " + parameters.value;

document.getElementById('output').innerHTML = output;