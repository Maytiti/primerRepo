import java.util.Scanner;  
public class JavaLoops {

	public static void main(String[] args) {  
        Scanner console = new Scanner(System.in);  
        System.out.println("Ingresa tu nombre: ");  
			String nombre = console.next();
		
				
			for (int i=0;i<nombre.length();i++) {
				System.out.println(nombre.charAt(i));
			}

		
			
		}