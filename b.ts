// import * as console from 'console'FFFFF
declare var console: Console;
class naem{
    public name:string;
    public caste :string;

    // If protected then we can acess from the sub classs
    protected age:number




    // accpt own class from other outside cannot acess 
    private n: string = 'Hello aayush basnet';

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
    console.log(this.n);
    return this.name
}

private password() {
    
}
}


class bb extends naem {
    so () {
        this.age
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




interface a {
    name: string,
    age: Number,

}


let aa: a = {
    name:"aaysh",
    age:12
}
console.log(aa)



// let f = new b('age', 'aaysh', 12,12)
// confirm(f.name)