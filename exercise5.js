/* 4- For
A- Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una 
alerta utilizando cada una de las palabras.*/
var fiveWords= ['lannister', 'targaryen', 'stark', 'baratheon', 'tyrell'];
for (var i = 0; i < fiveWords.length; i++) {
  alert (fiveWords[i]);
}

/* B- Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra 
modificada.*/
for (var i = 0; i < fiveWords.length; i++) {
  fiveWords[i]= fiveWords[i].toUpperCase().substring(0,1) + fiveWords[i].substring(1);
  alert (fiveWords[i]);
}

/* C- Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un 
bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena
completa.*/
var sentence= '';
for (var i = 0; i < fiveWords.length; i++) {
  sentence= sentence + ' ' + fiveWords[i];
}
alert('The string sentence is: '+ sentence);

/* D- Crear una array vacío y con un bucle for de 10 repeticiones llenar el array con el número de la repetición, es 
decir que al final de la ejecución del bucle for deberia haber 10 elementos dentro del array, desde el número 0 hasta al
 numero 9. Mostrar por la consola del navegador el al array final (utilizar console.log).*/
var numbers0to9= [];
for (var i = 0; i < 10; i++) {
  numbers0to9= numbers0to9 + ' ' + i;
}
console.log('The array: ',numbers0to9);