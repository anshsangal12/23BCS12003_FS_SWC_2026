package javaClassWork;
import java.util.*;
import java.nio.file.*;

public class MultiThreadTextSearch {
    public static void main(String[] args)throws Exception {
        //goal is to understand how dividing the work among multiple threads speeds up the execution
        // wap to search for a specific word inside a massive text file. split the file into three equal parts and assign separate thread to search through each part concurrently have each thread report back if they found the word and at what line
        // parallel processing, breaking a workload into independent chunks

        List<String> lines = new ArrayList<>();
        String targetWord= "target";
        //create a text file and readfile from it with 100 lines and only a unique word "target" at line 50
        String filePath="lines.txt";
        lines=Files.readAllLines(Path.of(filePath));

        int totalLines=lines.size();
        System.out.println("Total lines in file: "+totalLines);
        int chunks=totalLines/3;

        Thread t1=new Thread(new wordSearch(lines.subList(0,chunks),targetWord,0),"Thread1");
        Thread t2=new Thread(new wordSearch(lines.subList(chunks,2*chunks),targetWord,chunks),"Thread2");
        Thread t3=new Thread(new wordSearch(lines.subList(2*chunks,totalLines),targetWord,2*chunks),"Thread3");

        t1.start();
        t2.start();
        t3.start();

        t1.join();
        t2.join();
        t3.join();

        




    }
}

class wordSearch implements Runnable{
    List<String> lines;
    String target;
    int startLine;

    wordSearch(List<String> lines, String target, int startLine) {
        this.lines = lines;
        this.target = target;
        this.startLine = startLine;
    }


    @Override
    public void run(){
        search();
    }
    boolean found = false;
    void search(){
        for(int i=0;i<lines.size();i++){
            if(lines.get(i).contains(target)){
                found=true;
                System.out.println(
            
            " startLine=" + startLine
            + " i=" + i
            + " actual=" + (startLine + i)
        );
                
        
            }
        }

        if(!found){
            System.out.println("Not found in this chunk");
        }
    }
}