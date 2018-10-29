console.info(0);

function sayWelcome() {
  console.info("Salut " + prenume + ", bine ai venit la noi!");
}

var nume = "Herdean";
var prenume = "Alina";
var owner = "Alina's";
var msg1 = 'ai zis "Nik"?';
var msg2 = 'Nu, am zis "Nicolae"';
var template = `Text cu ghilimele " sau simple'`;
var skills = ["html", "css", "js"];
console.debug("auzi...? dar cum te cheama? -" + prenume);
sayWelcome();
prenume = "Nick";

console.info("toate variabilele au fost initializate");
console.log(nume);
console.debug("cum te cheama? -" + prenume);
sayWelcome();

//schimb valutar

var cursEUR = 4.5;
var myEUR = 10;
var myRON = 0;
var friendEUR = 20;
var friendRON = 0;

//operatorii sunt * / + -

myRON = myEUR * cursEUR;
console.info(" eu am " + myRON + " RON");

friendRON = friendEUR * cursEUR;
console.info(" eu am " + friendRON + " RON");
