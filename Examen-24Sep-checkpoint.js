
// Importante: No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
// código dentro de las funciones ya definidas.

function menorMayor(numeros) {
  // La función llamada 'menorMayor' recibe como argumento un arreglo de números llamado 'numeros' y debe devolver un
  // arreglo que contenga el menor número del arreglo 'numeros' en la posición cero y el mayor número del arreglo
  // 'numeros' en la posición 1.
  // Ej:
  // menorMayor([4, 6, 1, 7, 15]) debe retornar [1, 15]
  // ya que 1 es el número más chico (menor) dentro del arreglo [4, 6, 1, 7, 15]
  // y 15 es el número más grande (mayor) dentro del arreglo [4, 6, 1, 7, 15]

  // Tu código aca:

  

  var max= 0; 
  var min=9999999999999999999999999999;
  var nuevoarreglo =[];

for(var i=0 ; i < numeros.length; i ++){


    if( numeros[i] > max){
    


       max= numeros[i];

    }

    else
    
     if(numeros[i]< min ) {
     min= numeros [i];
  

    }


}

nuevoarreglo.push(min);
nuevoarreglo.push(max);
 
return nuevoarreglo;


}





function cuantosOnline(usuarios) {
  // La funcion llamada "cuantosOnline" recibe como argumento un objeto 'usuarios', cada property de ese objeto es un objeto
  // cada usuario tiene una property 'online' que es un booleano.
  // deberia devolver la cantidad de usuarios con la property online igual a true.
  // Por ej:
  // let  usuarios = {
  //     toni: {
  //         edad: 33,
  //         online: true
  //     },
  //     emi: {
  //         edad: 25,
  //         online: true
  //     },
  //     fran: {
  //         edad: 25,
  //         online: false
  //     },
  //     agus: {
  //         edad: 24,
  //         online: false
  //     }
  // }; 
  // cuantosOnline(usuarios) devuelve 2
  // Tip: Podes usar el metodo for...in

  // Tu código aca:

  var contador=0;
  var usuarios=usuarios;

  for(var clave in usuarios){

      if(usuarios[clave].online === true){
          contador ++;

      }

  }

      return contador;


}



function divisores(numero) {
  // La funcion llamada 'divisores' recibe como argumento un numero (entero) 
  // y debe devolver un array con los divisores exactos de 'numero'.
  // Si el numero no tiene divisores ( exeptuando el 1 y el mismo ) deberia devolver el string 'Es primo'
  // Nota: El array no debe contener el 1 y el mismo numero.
  // Por ej:
  // divisores(15) devuelve [3, 5]
  // divisores(11) devuelve 'Es primo'

   // Tu código aca:

   var divisor = [];

    for (var i = 2; i < numero; i++) { 

      var div = numero % i; 

      if(div === 0) { 

        divisor.push(i);

       }

       }
         if(divisor.length === 0) { 

           return 'Es primo'; 
          } 

           else { 

             return divisor; } 
            
            }

   





   



function actividadesEnComun(persona1, persona2) {
  // La funcion llamada 'actividadesEnComun' recibe como argumento dos arrays de actividades (strings) llamados 'persona1' y 'persona2'
  // y debe devolver un array de strings con las actividades en comun ( aquellas que se repiten ) entre cada array.
  // ej: persona1 = ['leer', 'comer', 'pasear', 'dormir', 'jugar']
  //     persona2 = ['comer', 'dormir', 'futbol']
  // actividadesEnComun(persona1, persona2) => ['comer', 'dormir']
  // Tip: podes usar ciclos for anidados.
  // Tu código aca:

  var ActEnComun=[];
  


  for(var i=0 ; i < persona1.length; i++){

           persona1[i];


    
    

        for(var j=0 ; j < persona2.length; j++){

              persona2[j];

           if( persona1[i] === persona2[j]  ){

               ActEnComun.push(persona1[i]);

           }


       }   

       
}

      return ActEnComun;
    


}










function palabraMasLarga(array) {
  // La funcion llamada 'palabraMasLarga' recibe un array 'array' de frases (strings) como parametro
  // y debe devolver la palabra mas larga entre todas las frases ( Es decir la palabra con mayor cantidad de caracteres)
  // Por ej:
  // palabraMasLarga(['hola esto string', 'frase con palabra']) debe devolver 'palabra'
    
  // Tu código aca:

  var caract = "";

  array.forEach(function (string) { 

      var miarray = string.split(' '); 

      for (var i = 0; i < miarray.length; i++) {

          if (caract.length < miarray[i].length) {
              caract = miarray[i];
          }
      }
  });
  return caract;
}






function crearClaseEmprendedor() {
  class Emprendedor {
      constructor(nombre, apellido, libros, mascotas) {
          // El constructor de la clase Emprendedor recibe nombre (string), apellido (string), libros (array de objetos), mascotas (array de strings)
          // Inicializar las propiedades del emprendedor con los valores recibidos como argumento

          // Tu código aca:

           this.nombre=nombre;
           this.apellido=apellido;
           this.libros=libros;
           this.mascotas=mascotas;







      }

      

      addMascota(mascota) {
        // este método debe agregar una mascota (mascota) al arreglo de mascotas del emprendedor.
        // no debe retornar nada.

        // Tu código aca:

        var mascota=mascota;

        this.mascotas.push(mascota);





      }

      

      getMascotas() {
          // El método 'getMascotas' debe retornar la cantidad de mascotas que tiene el emprendedor.
          // Ej:
          // Suponiendo que el emprendedor tiene estas mascotas: ['perro', 'gato']
          // emprendedor.getMascotas() debería devolver 2
             
          // Tu código aca:
          
          var contador=0

          for(var i=0; i< this.mascotas.length; i++){
            contador++;
          }

          
             return contador;

          }


         

      

      addBook(book, autor) {
          // El método 'addBook' recibe un string 'book' y un string 'autor' y debe agregar un objeto:
          // { nombre: book, autor: autor} al arreglo de libros del emprendedor.
          // No debe retornar nada.

          // Tu código aca:

          const objeto = {
            nombre:book,
            autor:autor
            
      
          };
    
          this.libros.push(objeto);
    
          
        }
        

         



      

      getBooks() {
          // El método 'getBooks' debe retornar un arreglo con sólo los nombres del arreglo de libros del emprendedor.
          // Ej:
          // Suponiendo que el emprendedor tiene estos libros: [{nombre: 'El señor de las moscas',autor: 'William Golding'}, {nombre: 'Fundacion', autor: 'Isaac Asimov'}]
          // emprendedor.getBooks() debería devolver ['El señor de las moscas', 'Fundacion']

          // Tu código aca:

          var nuevoarray=[];


        for(var clave in this.libros){

              if(this.libros[clave].nombre != 0){

                  nuevoarray.push(this.libros[clave].nombre);

              }

        }

            return nuevoarray;

      
        }



        

      

      getFullName() {
          // El metodo getFullName debe retornar un string con el nombre y apellido del emprendedor.
          // ej:
          // Suponiendo que el emprendedor tiene: nombre: 'Elon' y apellido: 'Musk'
          // emprendedor.getFullName() deberia devolver 'Elon Musk'

          // Tu código aca:

          return this.nombre + ' ' + this.apellido;


      }

      
  }

  return Emprendedor;
}

/* ====================== EXTRA CREDIT ===================== */
// Este ejercicio no cuenta en el puntaje del checkpoint
// pero si llegas hasta aca y lo haces quiere decir que venis super bien!

function repetirCaracteres() {
  // Escribi una funcion llamada 'repeatCharacters' en el prototypo del objeto global String
  // que reciba como parametro un string
  // y devuelve un string en donde cada letra se repita una vez.
  // Por ej:
  // 'hola'.repeatCharacters() devuelve "hhoollaa"

  // Tu código aca:
  


}



module.exports = {
  menorMayor,
  divisores,
  cuantosOnline,
  actividadesEnComun,
  palabraMasLarga,
  crearClaseEmprendedor,
  repetirCaracteres
}