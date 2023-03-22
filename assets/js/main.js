// Esercizio "password generator"
// Chiedere all'utente:
// 1) Nome
// 2) Cognome
// 3) Colore preferito
// - Scrivere sulla pagina la password NomeCognomeColorePreferito21

const   nome= prompt("Inserire il proprio nome");

document.getElementById('output_nome').innerHTML += `<span class="giallo"> ${nome}</span>`;

const   cognome= prompt("Inserire il proprio cognome");

document.getElementById('output_cognome').innerHTML += `<span id="id_red" class="giallo"> ${cognome}</span>`;

const   colore= prompt("Inserire il proprio colore preferito");

document.getElementById('output_colore_preferito').innerText += ` ${colore}`;

let     password= nome+cognome+colore+"21";

document.writeln(`<h3 style="font-decoration: underline; color:lightblue;"> La tua password è: <span id="id_red"> ${password}</span><h3>`);