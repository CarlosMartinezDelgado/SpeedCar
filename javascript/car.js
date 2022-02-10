class Car {
  constructor() {
    //aqui las propiedades de nuestro coche.

    this.x = canvas.width / 2; //posicion
    this.y = canvas.height - 300;

    this.width = 80;
    this.height = 140; //tamaño

    this.img = new Image(); //imagen
    this.img.src = "./imagenes/coche1.png";

    this.speedCar = 20;
    this.claxon = new Audio ("./audio/bocinaCoche.mp3");
  }

  // los methodos (acciones de nuestro coche)

  drawCar = () => {
    //para dibujarlo
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  };

  // Movimiento lateral del coche de Izq y Dcha
  moveCar = (event) => {
    if (event.key === "ArrowLeft" && this.x > 200) {
      this.x = this.x - this.speedCar;
    } else if (
      event.key === "ArrowRight" &&
      this.x < canvas.width - 200 - this.width
    ) {
      this.x = this.x + this.speedCar;
    } else if ( event.key === "ArrowDown" ) {
      this.claxon.play();
    }
  };
}
