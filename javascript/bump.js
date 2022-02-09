class Bump {

    constructor (coordX, srcParam) { // cada vez que yo cree un Bache
        //Las propiedades del Bache

    this.x = coordX   // tres posiciones fijas de salida 
    this.y = 0;// recorre el eje y para acercarse al coche.

    this.width = 180;    //Comprobar
    this.height = 180; //tamaño

    this.img = new Image(); //imagen
    this.img.src = srcParam;
  

    }



    // los methodos (acciones del bache)

  drawBump = () => {
    //para dibujarlo
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);

  };

    // necesitamos movimiento

    bumpMove = () => {
        //cambia su posicion el eje Y. y luego hay que llamar para que Fx
        this.y = this.y + 2
      }
    
     

}