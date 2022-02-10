class Bump {
  constructor(coordX, srcParam) {
    // cada vez que yo cree un Bache
    //Las propiedades del Bache

    this.x = coordX; // posiciones fijas de salida
    this.y = 0; // recorre el eje y para acercarse al coche.

    this.width = 90; //Comprobar
    this.height = 150; //tamaño

    this.img = new Image(); //imagen
    this.img.src = srcParam;
    this.velocity = 2;
  }

  // los methodos (acciones del bache)

  drawBump = () => {
    //para dibujarlo
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  };

  // necesitamos movimiento

  bumpMove = () => {
    //cambia su posicion el eje Y. y luego hay que llamar para que Fx
    this.y = this.y + this.velocity;
  };

  velocityCar = (event) => {
    if (event.key === "ArrowUp") {
      this.velocity += 2;
    }
  };
}
