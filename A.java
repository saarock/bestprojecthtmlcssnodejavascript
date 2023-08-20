class b {
    String name;
    int age;
    String caste;
        public b(String name, int age) {
        this.name = name;
        this.age = age;
        this.caste = "Basnet";
    }

    void here() {
        System.out.println(this.name);

    }



    void hereAgain() {
        System.out.println(this.caste);
    }

    static String ma() {
          System.out.println("k xa");
          return "Hello";
    }

}

class A extends b {

        public A(String name, int age) {
            super(name, age);
        this.name = name;
        this.age = age;

    }
    public static void main(String[] args) {
        System.out.println("My name is aaysuh basnet is the name is calleed");
        A bb  = new A("aayush", 19);
        bb.here();
        System.out.println( bb.ma());
        System.out.println(bb.age);
bb.hereAgain();
    }
}