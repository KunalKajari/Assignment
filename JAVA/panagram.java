import java.util.*;
public class panagram  
{  
    public static void containAllLetters(String string)  
    {  
        string = string.toLowerCase();  
        boolean allLetterPresent = true;  
            for (char ch = 'a'; ch <= 'z'; ch++){  
            if (!string.contains(String.valueOf(ch))){  
                allLetterPresent = false;  
                break;  
            }  
        }  
        if (allLetterPresent)  
            System.out.println("Pangram String");  
        else  
            System.out.println("Not a Pangram String");  
    }  
    public static void main(String args[])  
    {  
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter Sentence: ");
		String sentence = sc.nextLine(); 
        containAllLetters(sentence);  
    }  
}  