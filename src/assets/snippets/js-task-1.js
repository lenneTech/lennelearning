const name = 'Schmidt';
const vorname = 'Thomas';
const alter = 45;
const fertigkeiten = ['HTML', 'CSS', 'Javascript'];

for (let i in fertigkeiten) {
  if (i === 2) {
    console.log(fertigkeiten[i]);
  } else {
    console.log('Keine Programmiersprache');
  }
}

if (name === 'Schmidt' && vorname === 'Thomas' && (alter <= 50 || alter !== 45)) {
  console.log('Hallo, Herr Schmidt!');
} else {
  console.log('Hallo, fremder Nutzer!');
}
