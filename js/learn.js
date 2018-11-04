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
var friendEUR = 100;
var friendRON = 0;
var d = new Date();

//operatorii sunt * / + -

myRON = myEUR * cursEUR;
console.info(" eu am " + myRON + " RON");

friendRON = friendEUR * cursEUR * 0.99;
friendRON = friendEUR * cursEUR - friendEUR * cursEUR * 0.01;
console.info(" eu am " + friendRON + " RON");

function extractFromATM(ammount) {
  console.info("==== ==== ==== ==== ====");
  console.info(d);
  if (ammount < 10) {
    console.info("suma extrasa trebuie sa fie multiplu de 10!");
    return 0;
  }
  console.info("suma extrasa este: " + ammount);

  var comision = ammount * 0.01;
  if (comision < 2.5) {
    comision = 2.5;
    console.warn("comision minim aplicat ");
  }
  console.info("comision aplicat:" + comision);
  console.info("==== ==== ==== ==== ====");
}

extractFromATM(1000);
extractFromATM(100);
extractFromATM(9);
