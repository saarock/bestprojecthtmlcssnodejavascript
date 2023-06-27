// import * as console from 'console'FFFFF
declare var console: Console;
class naem{
    public name:string;
    public caste :string;
    protected age:number

constructor(name:string, caste:string, age:number) {
    this.name= name;
    this.caste= caste
    this.age= age
}

// This is the encaptulatins
public get() {
    console.log(this.bb())
}
private bb() {
    return this.name
}

private password() {
    
}
}


const a = new naem('aaysh', 'basnet',12);

const ll = a.get()


// class b extends naem {
//     private clas :number;

//     constructor(name:string, caste:string, age:number, clas: number) {
//         super(name, caste, age);
//  this.clas=  clas

//     }
// }








// let f = new b('age', 'aaysh', 12,12)
// confirm(f.name)