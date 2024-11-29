package com.generation;
import java.util.Scanner;//Se agrega la importacion de scanner que se usa abajo

public class Codigo4 {

    //Se agrega public static...
    public static void main (String[] args)

    Scanner s = new Scanner(System.in);/*no estaba completo (System.in)*/
    
    System.out.print("Turno del jugador 1 (introduzca piedra, papel o tijeras): ");
    String j1 = s.nextLine();
    
    System.out.print("Turno del jugador 1 (introduzca piedra, papel o tijeras): ");
    /*No es necesario -->Scanner s2 = new Scanner();*/
    String j2 = s.nextLine();
    
    if (j1 == j2)) {
      System.out.println("Empate");
    } else {
      int g = 2;
      switch(j1) {
        case "piedra":
          if (j2 == "tijeras") {
            g = 1;
          }
          break; /*Como es un switch en cada caso se pone break*/

        case "papel":
          if (j2 == "piedra") {
            g = 1;
          } /*se agrega*/
          break;/*Como es un switch en cada caso se pone break*/
          
        case "tijera":
          if (j2.equals("papel")) {
            g = 1;
          }
          break;
        default:
      }
      System.out.println("Gana el jugador " + g);
    }
}