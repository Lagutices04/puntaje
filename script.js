const marcoPuntaje = document.querySelector('.puntaje');
//trae la clase del puntaje
let puntajeActual = 0;
//variable iniciará en cero
const puntajeLimite = 5;
//variable llegará hasta 5

const htmlMapa = Array.from(Array(puntajeLimite)).map((item, i) => {
  //construir las clases de las estrellas, por medio de un mapeo html
  //guarda el mapeo a partir de un arreglo en el puntaje límite
  //que tenga en cuenta la posición, en este caso, i
  return `<div class="item item-${i}" data-pos="${i}"></div>`;
  //regrese una clase, construye una división a partir del puntaje límite
  //construirá 5 divisiones, para cada estrella, se llamarán item-i,
  //guardará según el arreglo le dará un nombre al item
  //le dará índice de posición
});

marcoPuntaje.innerHTML = htmlMapa.join("");
//inserte en el html

document.querySelectorAll(".item").forEach(item => {
  //este query trae todo lo de la clase item que está en js y toca recorrerla en el arreglo
  item.addEventListener("mouseover", e => {
    //revise cuando el mouse pase por encima y se escuche

    //console.log("funciona");
    //comprobar de que sí suene

    const position = item.getAttribute("data-pos");
    //crear constante de la posición
    //el event listener captura la posición, la data-pos


    if(puntajeActual === parseInt(position)+1){
        return;
        //si el puntaje es igual a la posicion mas 1 retoorne vacio
        //=== comparacion estricta
    }

    document.querySelectorAll(".item").forEach(cuadraditoGris =>{
        if(cuadraditoGris.classList.contains("selec")){
            cuadraditoGris.classList.remove("selec");
            //el query de todo lo q oasa en el item para recorrerlo
            // si el cuadrado esta en verde cuando le de remove dejara la clase item
           
        }
    })

    for (let i = 0; i <= position; i++) {
      //for que depende de la posición
      //su límite es la posición y que aumente de 1 en 1
      const cuadradito = document.querySelector(`.item-${i}`);
      //se guarda índice del item

      if (!cuadradito.classList.contains("selec")) {
        //si cuando pasamos el mouse por encima es diferente a la clase select, entonces se agregue
        cuadradito.classList.add("selec");
        //que se agregue
      }
    }
    puntajeActual = parseInt(position)+1;
    
  });

  item.addEventListener("click",(e)=>{
    const position = item.getAttribute("data-pos");
    //traiga la posicion en clase item del data pos
    // puntaje actual debe ser la posicion mas 1 
    console.log(puntajeActual);
    //para probar que si este cogiendo el listener
  })


});


