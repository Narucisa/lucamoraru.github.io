var newsmessages =
[
  "jacbo got banned, jacbo is friends. link https://giggityfiles.github.io/,share post"
  "as alt"
];
var currentnewsmessage = newsmessages[Math.floor(Math.random()*newsmessages.length)];
setInterval(function changeNewsMessage() {
currentnewsmessage = newsmessages[Math.floor(Math.random()*newsmessages.length)];
document.getElementById("changeNewsMessage").innerHTML = currentnewsmessage;
},20e3);

function timein(loc) {
const date = new Date();
return date.toLocaleTimeString('en-GB', {timeZone: loc})};
setInterval(function funcarA() {
	document.getElementById('quitinstime').innerHTML = timein('Europe/Vilnius')
},10)
