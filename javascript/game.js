class Game {
  constructor() {
    this.bg = new Image(); //el fondo
    this.bg.src = "./imagenes/images.png"; //imagen de fondo

    this.car = new Car();
    this.speedCar = 50;

    this.bumpArr = [new Bump(canvas.width / 2, "./imagenes/cocheDeFrente1.png")];
  

    this.bumpYSeparation = 180;
    this.bumpXSeparation = 180;

    this.isGameOn = true;
    this.score = 0;
  }

  spawningBump = () => {
    // para que aparezca el nuevo BACHE
    let lastBump = this.bumpArr[this.bumpArr.length - 1]; //identifica el ultimo Bache en el Array
    let randomCoordX = canvas.width / 2 - 200;

    //cuando cruce el Bache la linea, que cree otro Bache y cuidado que siga fx si no hay ningun coche en el canvas
    if (lastBump !== undefined && lastBump.y > this.bumpYSeparation) {
      //donde quiero que añada el BACHE
      //agrego un nuevo BACHE en varias posicion
      let randomX = Math.random() * 19;
      if (randomX < 1) {
        randomCoordX = canvas.width / 2 - 80;
      } else if (randomX > 1 && randomX < 2) {
        randomCoordX = canvas.width / 2 + 80;
      } else if (randomX > 2 && randomX < 3) {
        randomCoordX = canvas.width / 2 - 250;
      } else if (randomX > 3 && randomX < 4) {
        randomCoordX = canvas.width / 2 + 250;
      } else if (randomX > 4 && randomX < 5) {
        randomCoordX = canvas.width / 2 - 400;
      } else if (randomX > 5 && randomX < 6) {
        randomCoordX = canvas.width / 2 + 300;
      } else if (randomX > 6 && randomX < 7) {
        randomCoordX = canvas.width / 2 - 300;
      } else if (randomX > 8 && randomX < 9) {
        randomCoordX = canvas.width / 2 + 150;
      } else if (randomX > 9 && randomX < 10) {
        randomCoordX = canvas.width / 2 - 350;
      } else if (randomX > 10 && randomX < 11) {
        randomCoordX = canvas.width / 2 - 50;
      } else if (randomX > 11 && randomX < 12) {
        randomCoordX = canvas.width / 2 + 50;
      } else if (randomX > 12 && randomX < 13) {
        randomCoordX = canvas.width / 2 + 100;
      } else if (randomX > 13 && randomX < 14) {
        randomCoordX = canvas.width / 2 - 100;
      } else if (randomX > 14 && randomX < 15) {
        randomCoordX = canvas.width / 2;
      } else if (randomX > 15 && randomX < 16) {
        randomCoordX = canvas.width / 2 + 200;
      } else if (randomX > 16 && randomX < 17) {
        randomCoordX = canvas.width / 2 - 380;
      } else if (randomX > 17 && randomX < 18) {
        randomCoordX = canvas.width / 2 + 315;
      } else if (randomX > 18 && randomX < 19) {
        randomCoordX = canvas.width / 2 - 350;
    }

      //los BACHES estan siendo agregados pero nunca removidos

      let newBump = new Bump(randomCoordX, "./imagenes/cocheDeFrente1.png"); // crear un nuevo bache en la posicion random X, y = 0
      this.bumpArr.push(newBump);


    }
  };

  totalScore = (eachBumpPar) => {
    if (eachBumpPar.y > canvas.height - 200) {
      this.score += 15;
      scoreTotal.innerText = this.score;
      this.bumpArr.shift()
  }
}



  checkCarBumpCollision = (eachBump) => {
    if (
      (this.car.x) < eachBump.x + eachBump.width &&
      (this.car.x) + this.car.width > eachBump.x &&
      (this.car.y) < eachBump.y + eachBump.height &&
      this.car.height + (this.car.y)> eachBump.y
    ) {
      // console.log("Colision")      // collision detected!

      /*En este caso debemos terminar el juego.
         1. DETENER EL LOOP --->CREAR UNA NUEVA PROPIEDAD BOLEANA GAME ON*/
      this.isGameOn = false;

      //  2. OCULTAR EL canvas.
      canvas.style.display = "none";

      //  3. GAME OVER Y DARLE AL DISPLAY FLEX.
      pantallaReinicio.style.display = "flex";
    }
  };

  drawBackground = () => {
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
  };

  clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  // . todos nuestros metodos ejecutar el juego es una accion (funciones)
  gameLoop = () => {
    //console.log("el juego ya funciona")
    // 1. Limpiar el canvas
    this.clearCanvas(); //Borra el canvas, y lo vuelve a dibujar

    //2. Mover los elementos
    // mover el Bache
    this.bumpArr.forEach((eachBump) => {
      eachBump.bumpMove(eachBump);

    })

    this.spawningBump();

    this.bumpArr.forEach((eachBump) => {
      this.checkCarBumpCollision(eachBump);

    this.bumpArr.forEach((eachBump) => {
      this.totalScore(eachBump);
    })
    });
  
  



    //3.  Dibujar los elementos que tenemos en propiedades
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
    // this.car.carMove(); por que esto????????????????????????????
    this.car.drawCar();

    this.bumpArr.forEach((eachBump) => {
      eachBump.drawBump(); //usamos el foreach para poder acceder al array.
    });

    //4. La recursion para la animacion
    // requestAnimationFrame(gameLoop) NO vale porque 
    if (this.isGameOn) {
      requestAnimationFrame(this.gameLoop);
    }
    //trabajamos dentro una clase y para apuntar
    // a este metodo de la clase hace falta usar THIS
  };
}

// La clase Game va a controlar la controlabilidad dl juego. Y al hacer RESTART creamos una nueva
//version del juego (game) y de esta manera renueva el game para poder jugar de nuevo

