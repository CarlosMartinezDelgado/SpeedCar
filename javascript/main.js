// * GLOBAL VARIABLES

let pantallaInicio = document.querySelector("#pantallaInicio");
let pantallaReinicio = document.querySelector("#pantallaReinicio");
let canvas = document.querySelector("#my-canvas");
// crear el pincel
let ctx = canvas.getContext("2d");
let newGame;
let pantallaScore = document.querySelector("#score");
let scoreTotal = document.querySelector("#total-span");
// es mejor queryselector para acceder a los datos que estan dentro de otro elemento

// * STATE MANAGEMENT FUNCTIONS

const startGame = () => {
  //desparecer el splash scren y aparecer el canvas

  pantallaReinicio.style.display = "none"; //hace falta "quitar" las imagenes tambien de aqui (no solo del css)
  pantallaInicio.style.display = "none";
  pantallaScore.style.display = "flex";
  canvas.style.display = "flex"; //

  // ejecutar el juego
  // Cuando hago click en START crear una clase para luego poder hacer un new let newGame = new Game() y tener la bases ya hechas.
  newGame = new Game();
  newGame.music.play(); //encienda la musica
  newGame.music.loop = true;
  newGame.music.playbackRate = 2;

  scoreTotal.innerText = 0; //Poner el contador a cero cada vez que iniciamos
  newGame.gameLoop(); //acceder al juego pero cuidado porque son variabbles que NO tengo acceso, para eso creamos una vble no asiganrle ningun valor
  // y va a ser accesible desde cualquier lugar de mi codigo y a esa variable le voy a asignar un NEWGAME
};

// * ADD EVENT LISTENERS

//primero hacer que al hacer click haga lo que queramos

let startButton = document.querySelector("#start-btn");
startButton.addEventListener("click", startGame);

let restartButton = document.querySelector("#restart-btn");
restartButton.addEventListener("click", startGame);

//que el coche solo se mueva dentro del canvas cuando hagamos click en las flechas.
document.addEventListener("keydown", (event) => {
  newGame.car.moveCar(event);
  newGame.bumpArr.forEach((velocidadCoche) => {
    velocidadCoche.velocityCar(event);
  });
});
