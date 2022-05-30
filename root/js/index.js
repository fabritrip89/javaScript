

/* UTILIZANDO FOR CON UNA OPERACION MATEMATICA************************** 

let ingreseunNumero = parseInt(prompt("Ingresae un Numero por favor"));

for (let i = 1; i <=10; i++) {
    let multi = ingreseunNumero * i ;
    document.write(ingreseunNumero + " x " + i + " = "+ multi + "<br>");
}

alert ( ingreseunNumero + "x"  + i + " = " + resultado);

*/

//Ejemplo 2 utilizando WHILE **************************************************** 

/*

let entrada = prompt ("Ingrese una palabra");

while (entrada !="Exit"){
    alert (" Usted ha ingresado "+ entrada);
    entrada = prompt ("Cambie la palabra o Si desea salir escriba Exit");
}

*/
/******************************************* bucle con while/************************** 
let pass = '';

while (pass !='coder') {
    pass = prompt ('Adivine la contraseña, posee 5 letras');
    
    alert (" Está seguro ? Usted ha escrito: "+ pass);

    alert (" Enviar : "+ pass);
    
    
}
console.log('Fin de Bucle');

*/


//Bucle con do While************************** ************************** ************************** 


let pass = 'coder'
do{
    pass = prompt ('Ingrese su contraseña')

}while(pass != 'coder')
