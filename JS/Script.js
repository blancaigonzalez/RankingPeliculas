// Requiring fs module in which  
// readFile function is defined. 

var peliculas = [
  {
    Numero: "1",
    Titulo: "Misión de rescate",
    Duracion: "99M",
    Director: "Sam Hargrave",
    Anio: "2020",
    Imagen: "001.png",
    Rating: "0"
  },
  {
    Numero: "2",
    Titulo: "A ciegas",
    Duracion: "89M",
    Director: "Susanne Bier",
    Anio: "2018",
    Imagen: "002.png",
    Rating: "0"
  },
  {
    Numero: "3",
    Titulo: "Spenser Confidential",
    Duracion: "85M",
    Director: "Peter Berg",
    Anio: "2020",
    Imagen: "003.png",
    Rating: "0"
  },
  {
    Numero: "4",
    Titulo: "Escuadrón 6",
    Duracion: "83M",
    Director: "Michael Bay",
    Anio: "2019",
    Imagen: "004.png",
    Rating: "0"
  },
  {
    Numero: "5",
    Titulo: "Misterio a bordo",
    Duracion: "73M",
    Director: "Kyle Newacheck",
    Anio: "2019",
    Imagen: "005.png",
    Rating: "0"
  },
  {
    Numero: "6",
    Titulo: "El irlandés",
    Duracion: "64M",
    Director: "Martin Scorsese",
    Anio: "2019",
    Imagen: "006.png",
    Rating: "0"
  },
  {
    Numero: "7",
    Titulo: "Triple frontera",
    Duracion: "63M",
    Director: "J,C,Chandor",
    Anio: "2019",
    Imagen: "007.png",
    Rating: "0"
  },
  {
    Numero: "8",
    Titulo: "La otra Missy",
    Duracion: "59M",
    Director: "Happy Madison",
    Anio: "2019",
    Imagen: "008.png",
    Rating: "0"
  },
  {
    Numero: "9",
    Titulo: "El hoyo",
    Duracion: "56M",
    Director: "Galder Gaztelu-Urrutia",
    Anio: "2019",
    Imagen: "009.png",
    Rating: "0"
  },
  {
    Numero: "10",
    Titulo: "La cita perfecta",
    Duracion: "48M",
    Director: "Chris Nelson",
    Anio: "2019",
    Imagen: "010.png",
    Rating: "0"
  }
];


  function swap(peliculas, indexOne, indexTwo){
    var tmpVal = peliculas[indexOne];
    peliculas[indexOne] = peliculas[indexTwo];
    peliculas[indexTwo] = tmpVal;
    return peliculas;
  }

  function bubbleSort(peliculas){
    var size = peliculas.length;
   
    for( var pass = 1; pass < size; pass++ ){ 
      for( var left = 0; left < (size - pass); left++){ 

        var right = left + 1;

        if( peliculas[left].Rating < peliculas[right].Rating ){
          swap(peliculas, left, right);
        }

      }
    }
   
    return peliculas;
  }


  function loadDoc() {
    // var codigo;
    //document.createElement("center");
    bubbleSort(peliculas); //ordeno el arreglo de mayor a menor segun el rating
    var myDiv = document.getElementById("listaP");
    myDiv.innerHTML = ""; //limpio el contenedor para volver a llenarlo con las peliculas acomomdads

    for (var i = 0; i < 10; i++) {

      var myDiv = document.getElementById("listaP");

      var contenedor = document.createElement("div");
      contenedor.id = "div-"+peliculas[i].Numero;
      
      //para crear el titulo
      var tituloP = document.createElement("h1");
      tituloP.id = "titulo-"+peliculas[i].Numero;
      var tituloPText = document.createTextNode((i+1) +". "+peliculas[i].Titulo );
      tituloP.appendChild(tituloPText);

      var subtitulo = document.createElement("p");
      subtitulo.id = "subtitulo-"+peliculas[i].Numero;
      var dirPText = document.createTextNode("Director: "+peliculas[i].Director+" / Año: "+peliculas[i].Anio+" / Duracion: "+peliculas[i].Duracion+" /  Ranking: " +peliculas[i].Rating);
      subtitulo.appendChild(dirPText);

      var imgP = document.createElement("img");
      imgP.src = peliculas[i].Imagen;
      imgP.id = "img";
      imgP.style = 'height:150px';

      var salto = document.createElement("br");

      var button = document.createElement('button');
      button.id = "boton-" + peliculas[i].Numero;
      var text = document.createTextNode("+ Punto ");
      button.appendChild(text);
      button.classList.add('boton', 'btn-primary', 'mb-5');
      button.setAttribute('marca', i['id']);
 

      focusMethodo = function getFocus() {
        document.getElementById("listaP").focus();
      }

      myDiv.appendChild(tituloP);
      myDiv.appendChild(subtitulo);
      myDiv.appendChild(imgP);
      myDiv.appendChild(salto);
      myDiv.appendChild(button);
      
      var id = "rating";
      var bt = "boton-"+peliculas[i].Numero;
      document.getElementById(bt).addEventListener("click", function () {
        var suma = 0;
        for (var i = 0; i < peliculas.length; i++) { 
            numeroboton=this.id.split("-")[1]; 
            if(peliculas[i].Numero == this.id.split("-")[1]){
              suma = parseInt(peliculas[i].Rating); 
              suma = suma + 1; 
              peliculas[i].Rating = suma; 
              break;
            }
        }
        loadDoc(); 
      });

    }
  }
