class Car {
    constructor() {
      //aqui las propiedades de nuestro coche.

      this.x = canvas.width / 2; //posicion
      this.y = canvas.height - 350;
  
      this.width = 80;
      this.height = 120; //tamaño
  
      this.img = new Image(); //imagen
      this.img.src = "./imagenes/coche1.png";

      this.speedCar = 10 
  
    }
  
    // los methodos (acciones de nuestro coche)
  
    drawCar = () => {
      //para dibujarlo
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  
    };
  

      // Movimiento lateral del coche de Izq y Dcha
  moveCar = (event) => {
      if (event.key === "ArrowLeft") {
        this.x = this.x - this.speedCar
      }else if (event.key === "ArrowRight") {
        this.x = this.x + this.speedCar
      }
    }
/*
    carMoveLeft = () => {
      this.x = this.x - (this.lateralSpeed)*2
      console.log(`El coche se ha movido a la izquierda, nueva x = ${this.x}`)
    }
    carMoveRight = () => {
      this.x = this.x + 2
      console.log(`El coche se ha movido a la derecha, nueva x = ${this.x}`)
    }
      */
  }
