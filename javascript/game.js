class Game {

    constructor() {  
        this.bg = new Image; //el fondo
        this.bg.src = "./imagenes/FondoCarretera.jpeg"; //imagen de fondo 
                                        
        this.car = new Car();

        this.bumpArr = [new Bump (canvas.width/2, "./imagenes/bacheDani.png") ]; 

        this.bumpYSeparation = 300;
        this.bumpXSeparation = 150;

        this.isGameOn = true;
        
    }


    spawningBump = () => {      // para que aparezca el nuevo BACHE
        let lastBump = this.bumpArr [this.bumpArr.length -1]  //identifica el ultimo Bache en el Array
        let randomCoordX = (canvas.width/2)+this.bumpXSeparation 

        //cuando cruce el Bache la linea, que cree otro Bache
        if (lastBump.y > this.bumpYSeparation) {   //donde quiero que añada el BACHE
            //agrego un nuevo BACHE posicion 1, 2 o 3
            let randomX = Math.random() * 3
            if (randomX < 1) {
                randomCoordX = (canvas.width/2)-this.bumpXSeparation
            } else if ((randomX > 1)&&(randomX<2))  {
                randomCoordX = (canvas.width/2)
            } 
                            
            //los BACHES estan siendo agregados pero nunca removidos    
            let newBump = new Bump(randomCoordX,"./imagenes/bacheDani.png") // crear un nuevo bache en la posicion random X, y = 0
            this.bumpArr.push(newBump)
        }
    }
     

    checkCarBumpCollision = (eachBump) => {
        if (this.car.x < eachBump.x + eachBump.width &&
        this.car.x + this.car.width > eachBump.x &&
        this.car.y < eachBump.y + eachBump.height &&
        this.car.height + this.car.y > eachBump.y) {
       // console.log("Colision")      // collision detected!

        /*En este caso debemos terminar el juego.
            1. DETENER EL LOOP --->CREAR UNA NUEVA PROPIEDAD BOLEANA GAME ON*/
        this.isGameOn = false;

          //  2. OCULTAR EL canvas.
        canvas.style.display = "none";

          //  3. GAME OVER Y DARLE AL DISPLAY FLEX.
        gameOverScreen.style.display = "flex"
  

        
        }

    }

    drawBackground = () => {
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height)
    }

    clearCanvas = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
    } 

// . todos nuestros metodos ejecutar el juego es una accion (funciones)
    gameLoop = () => {
        //console.log("el juego ya funciona")
        // 1. Limpiar el canvas 
        this.clearCanvas() //Borra el canvas, y lo vuelve a dibujar

        //2. Mover los elementos 
        // mover el coche
        this.bumpArr.forEach( (eachBump) => {
            eachBump.bumpMove();
        })


        this.spawningBump()

        this.bumpArr.forEach( (eachBump) => {
            this.checkCarBumpCollision(eachBump)
        })


        //3.  Dibujar los elementos que tenemos en propiedades
        ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height)
        this.car.carMoveRight();
        this.car.drawCar()

        this.bumpArr.forEach( (eachBump) => {
            eachBump.drawBump()         //usamos el foreach para poder acceder al array.
        })
    
        //4. La recursion para la animacion
           // requestAnimationFrame(gameLoop) NO vale porque 
        if (this.isGameOn) {
            requestAnimationFrame(this.gameLoop)
        }
                                       //trabajamos dentro una clase y para apuntar
                                         // a este metodo de la clase hace falta usar THIS
    }
}

// La clase Game va a controlar la controlabilidad dl juego. Y al hacer RESTART creamos una nueva 
//version del juego (game) y de esta manera renueva el game para poder jugar de nuevo