// Esercizio "password generator"
// Chiedere all'utente:
// 1) Nome
// 2) Cognome
// 3) Colore preferito
// - Scrivere sulla pagina la password NomeCognomeColorePreferito21

const   nome= prompt("Inserire il proprio nome");
const   cognome= prompt("Inserire il proprio cognome");
const   colore= prompt("Inserire il colore preferito");
const   password= nome+cognome+colore+"21";

document.getElementById('output').innerHTML= `<h2>La tua password personalizzata è: ${password}</h2>`;
// document.writeln(`La tua password è la seguente: ${password}`);