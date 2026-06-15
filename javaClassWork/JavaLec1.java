package javaClassWork;

import javaClassWork.JavaLec1.Child;
import javaClassWork.JavaLec1.Parent;

public class JavaLec1 {

    interface A {
        void display();
    }

    static class B implements A {
        public void display() {
            System.out.println("Hello from class B!");
        }
    }

    static class C implements A {
        public void display() {
            System.out.println("Hello from class C!");
        }
    }

    //how to do diamond problem in java 
    class D extends B implements A {
        public void display() {
            System.out.println("Hello from class D!");
        }
    }

    static class E{
        int a;
        E(int a){
            this.a=a;
        }
    }

    static class F extends E{
        int b;
        F(int a,int b){
            super(a);
            this.b=b;
        }
    }


    static  class Parent{
        Parent(){
            print();
        }
        void print(){
            System.out.println("Parent class");
        }
    }

    static  class Child extends Parent{
        int x=10;

        Child(){
            super();
        }
        @Override
        void print(){
            System.out.println("Child class: x = " + x);
        }
    }

    static class stringBuilderStringBuffer{
        void func(StringBuilder sb){
            System.out.println("StringBuilder: " + sb.toString());
        }

        void func(StringBuffer sb){
            System.out.println("StringBuffer: " + sb.toString());
        }
    }

    static class Parent2 {

        
        {
            System.out.println("Parent Instance Block");
        }
        static {
            System.out.println("Parent Static Block");
        }

    Parent2() {
        System.out.println("Parent Constructor");
    }

    void show() {
        System.out.println("Parent Method");
    }
}

static class Child2 extends Parent2{

    static {
        System.out.println("Child Static Block");
    }

    {
        System.out.println("Child Instance Block");
    }

    Child2() {
        System.out.println("Child Constructor");
    }

    @Override
    void show() {
        System.out.println("Child Method");
    }

    
}


    
    public static  void main(String[] args) {
        // C objc=new C();
        // objc.display();

        // F objf=new F(10, 20);
        // System.out.println("Value of a: " + objf.a);
        // System.out.println("Value of b: " + objf.b);

        // new stringBuilderStringBuffer().func(null);

        // new Child();

        Child2 child2 = new Child2();
        child2.show();

    }   

}