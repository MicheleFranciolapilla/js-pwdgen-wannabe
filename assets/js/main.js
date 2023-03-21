// Esercizio "password generator"
// Chiedere all'utente:
// 1) Nome
// 2) Cognome
// 3) Colore preferito
// - Scrivere sulla pagina la password NomeCognomeColorePreferito21

const   nome= prompt("Inserire il proprio nome");
console.log(nome);

const   cognome= prompt("Inserire il proprio cognome");
console.log(cognome);

const   colore= prompt("Inserire il colore preferito");
console.log(colore);

document.writeln(`La tua password è la seguente: ${nome}${cognome}${colore}21`);