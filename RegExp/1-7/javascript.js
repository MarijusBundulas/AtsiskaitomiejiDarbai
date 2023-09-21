//uzduotis 1/3

const links = document.getElementsByTagName("a");
let result = "";
for (let i = 0; i < links.length; i++) {
    result += links[i].href + "<br>";
}
document.getElementById("output1").innerHTML = result;

const images = document.getElementsByTagName("img");
let resultatas = "";
for (let i = 0; i < images.length; i++) {
    resultatas += images[i].src + "<br>";
}
document.getElementById("output2").innerHTML = resultatas;


// uzduotis 2/4

const link = document.getElementsByTagName("a");
let result1 = "";
for (let i = 0; i < link.length; i++) {
    result1 += link[i].href + "<br>";
}
document.getElementById("output3").innerHTML = result1;


const imgRegExp = /<img.*?src=["'](.+?)["']/g;
const text = document.body.innerHTML;
let result2 = "";
let match;
while ((match = imgRegExp.exec(text))) {
    result2 += match[1] + "<br>";
}
document.getElementById("output4").innerHTML = result2;


// uzuodit 5

const text1 = 'Duotas bet koks tekstas. Tekste surasti visus žodžius kurie prasideda aš raide a. Aplinkoje yra apsoluciai daug arku kurios labai gerai atrodo, jos atiduoda';
const words = text1.split(' ');

const aWords = words.filter((word) => word.startsWith('a') || word.startsWith('A'));

document.getElementById('output5').textContent = aWords.join(' ');



// uzduotis 6

const text2 = 'Duotas bet koks tekstas. Išvesti tekstą kuriame būtu išskirti visi žodžiai kurie prasideda raide m. Miegas yra geras muilas kuris muilina ir muilina megztini, tada megztukas buna muiluotas ir svarus';
const words1 = text2.split(' ');

const mWords = words1.filter((word) => word.startsWith('m') || word.startsWith('M'));

const resultText = mWords.join(' ');

document.getElementById('output6').textContent = resultText;



// uzduotis 7

const text3 = 'Duotas bet koks tekstas. Išvesti tekstą kuriame būtu išskirti visi žodžiai kurie prasideda raide t. Titas Titauskas Titauja Klaipedoj nieko nedaro tas titas';
const words2 = text3.split(' ');

const tWords = words2.filter((word) => word.startsWith('t') || word.startsWith('T'));

const resultText1 = tWords.map((word) => word.toUpperCase()).join(' ');

document.getElementById('output7').textContent = resultText1;