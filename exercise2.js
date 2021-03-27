/*Exercise 2 - Strings*/
/*A- Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar 
toUpperCase).*/
var wordUpperCase= 'ranger';
wordUpperCase= wordUpperCase.toUpperCase();
console.log('word ranger to uppercase: ',wordUpperCase);

/*B- Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 
caracteres guardando el resultado en una nueva variable (utilizar substring).*/
var longWord= 'Darthvader';
var shortWord= longWord.substring(0,5);
console.log('substring of first 5 letters from darthvader: ',shortWord);

/*C- Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres
guardando el resultado en una nueva variable (utilizar substring).*/
var highWord= 'Skywalker1';
var smallWord= highWord.substring(7,10);
console.log('substring of last 3 letters from skywalker1: ',smallWord);

/*D- Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en 
mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, 
toLowerCase y el operador +).*/
var wordUpLow= 'jEDIMASTER';
var wordComplete= wordUpLow.substring(0,1).toUpperCase()+ wordUpLow.substring(1,10).toLowerCase();
console.log('first letter upperscase and the others lowercase from string jEDIMASTER: ',wordComplete);

/*E- Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del 
primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/
var wordWithSpace= 'general grievous';
var spacePosition= wordWithSpace.indexOf(" ");
console.log('position of the space in string general grievous: ',spacePosition);

/*F- Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). 
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas 
palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el 
operador +).*/
var firstWord= 'sPECTACULAR pERFORMANCE';
var secondWord= firstWord.substring(0,1).toUpperCase()+ firstWord.substring(1,11).toLowerCase() + " " +
firstWord.substring(12,13).toUpperCase()+ firstWord.substring(13,23).toLowerCase();
console.log(secondWord);

