// * GLOBAL VARIABLES

let splashScreen = document.querySelector("#pantalla-inicio");
let gameOverScreen = document.querySelector("#pantalla-reinicio");
let canvas = document.querySelector("#my-canvas");
// crear el pincel
let ctx = canvas.getContext("2d");
let newGame;



// * STATE MANAGEMENT FUNCTIONS

const startGame = () => {    //desparecer el splash scren y aparecer el canvas
    splashScreen.style.display = "none";
    canvas.style.display = "flex" // los contenedores son flex
    
        // ejecutar el juego
        // Cuando hago click en START crear una clase para luego poder hacer un new let newGame = new Game() y tener la bases ya hechas.
        newGame = new Game()
        //console.log(newGame)
        newGame.gameLoop() //acceder al juego pero cuidado. porque son variabbles que NO tengo acceso, parav eso creamos una vble no asiganrle ningun valor
                            // y va a ser accesible desde cualquier lugar de mi codigo y a esa variable le voy a asignar un NEWGAME
    }
    
    
    
    
    // * ADD EVENT LISTENERS
    
    //primero hacer que al hacer click haga lo que queramos
    
    let startButton = document.querySelector("#start-btn")
    startButton.addEventListener("click", startGame)
    
    ///que el coche solo se mueva cuando hagamos click en las flechas.
    /*const pulsarTecla = (tecla) => {
        if(tecla.keyCode == 39) { // Pulsada flecha derecha
            newGame.car.carMoveRight()
        }
        else if(tecla.keyCode == 37) { // pulsada flecha izquierda
            newGame.car.carMoveLeft()
        }
    }

    //canvas.addEventListener ("keydown", pulsarTecla);*/

    // Empezar sencillo, el coche se mueve a la izquierda con click
    const moveCarLeft = () => {
       newGame.car.carMoveLeft()
    }
    canvas.addEventListener("click", moveCarLeft)
    

