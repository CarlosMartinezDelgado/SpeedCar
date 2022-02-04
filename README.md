# Project's name
 SpeedCAR1


## Description
Coche que va por una carretera esquivando baches.


## MVP
 - El coche tiene que esquivar los baches moviéndose de derecha a izquierda (eje x).
 - Los baches se mueven hacia el coche y van acelerando según pasa el tiempo (eje y).
 - Tiene que terminar al colisionar con un bache.
 - Al colisionar diga el tiempo de juego.
 - Tenga una pantalla inicial con botón de start.
 - Tenga una pantalla final con botón de reinicio. 


## Backlog
 - El coche pueda pasar nieveles (de tiempo).
 - El juego acaba al terminar el tiempo.
 - Al finalizar el juego haga recuento de kilometros.
 - Con  boton de inicio el juego arranque con un modelo diferente de coche.




## Data structure
html {

}
class main {
    Pantalla Inicio
    Pantalla Final.
    Canvas.
    Pincel.
    Jugar de nuevo (Para poder hacer una nueva version de "clase Game" cada vez, creamos "jugar de nuevo").
}


clase Game {
    Propiedades: Fondo, Coche, Bache como array, distancia entre baches.
    Colision Coche-Bache.
    Terminar juego.
    Empezar juego.
    Dibujar coche y baches.
    Mover el coche y los baches.
}

clase Coche {
    Propiedades: Posicion, imagen, tamaño.
    Movimiento.
}

clase Bache {
    Propiedades: Posicion, imagen, tamaño.
    Movimiento.

}


## States y States Transitions

- splashScreen.
- gameScreen.
- gameoverScreen.


## Task

- Conseguir Imagenes.
- Crear la estructura (clases y HTML).
- Hacer HTML con los enlaces a las clases.
- Alcanzar MVP.
- Fijar los Bonus.




## Additional Links


### Trello
[Link url](https://trello.com)


### Slides
[Link Slides.com](http://slides.com)