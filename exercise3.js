/* 3- Arrays
A- Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", 
"Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log)*/
var months= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", 
"Octubre", "Noviembre", "Diciembre"]
console.log("Fifth month: " + months[4], " Eleventh month: " + months[10])
/*B- Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/
months.sort()
console.log("Months sorted by alphabetical order: ", months)
/*C- Agregar un elemento al principio y al final del array (utilizar unshift y push).*/
months.unshift("January")
months.push("December")
console.log("Array with first and last element: ", months)
/*D- Quitar un elemento del principio y del final del array (utilizar shift y pop).*/
months.pop()
months.shift()
console.log("Array without first and last element: ", months)
/*E- Invertir el orden del array (utilizar reverse)*/
months.reverse()
console.log("Reverse array: ", months)
/*F- Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).*/
console.log(months.join('-'))
/*G- Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).*/
var months= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", 
"Octubre", "Noviembre", "Diciembre"]
var newMonths= months.slice(4,11)
console.log("new array from may to november: ",newMonths)
