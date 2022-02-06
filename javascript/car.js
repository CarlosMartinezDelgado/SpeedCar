class Car {
    constructor() {
      //aqui las propiedades de nuestro coche.

      this.x = canvas.width / 2; //posicion
      this.y = canvas.height - 100;
  
      this.width = 150;
      this.height = 150; //tamaño
  
      this.img = new Image(); //imagen
      this.img.src = "./imagenes/coche1.png";

      this.lateralSpeed = 50 
  
    }
  
    // los methodos (acciones de nuestro coche)
  
    drawCar = () => {
      //para dibujarlo
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  
    };
  

      // Movimiento lateral del coche de Izq y Dcha
    carMoveLeft = () => {
      this.x = this.x - (this.lateralSpeed)*2
      console.log(`El coche se ha movido a la izquierda, nueva x = ${this.x}`)
    }
    carMoveRight = () => {
      this.x = this.x + 2
      console.log(`El coche se ha movido a la derecha, nueva x = ${this.x}`)
    }
    
  }
  