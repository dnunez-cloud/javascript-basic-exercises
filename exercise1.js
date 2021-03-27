/*Exercise 1 - Variables and Operators*/
/*A-Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una 
3er variable.*/
var number1= 10;
var number2= 20;
var number3= number1 + number2;
console.log('The sum of both numbers is: ',number3);

/*B-Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.*/
var word1= 'Java';
var word2= 'script';
var word3= word1 + word2;
console.log('The concatenation of the two words is: ',word3);

/*C-Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el 
resultado la suma una 3er variable (utilizar length).*/
var word12= '12characters';
var word13= '13characterss';
var wordCharactersLength= word12.length + word13.length;
console.log('The characters length of both words is: ',wordCharactersLength);