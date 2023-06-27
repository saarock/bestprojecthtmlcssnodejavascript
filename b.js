console.log(al);
var naem = /** @class */ (function () {
    function naem(name, caste, age) {
        this.name = name;
        this.caste = caste;
        this.age = age;
    }
    // This is the encaptulatins
    naem.prototype.get = function () {
        console.log(this.bb());
    };
    naem.prototype.bb = function () {
        return this.name;
    };
    naem.prototype.password = function () {
    };
    return naem;
}());
var a = new naem('aaysh', 'basnet', 12);
var ll = a.get();
// class b extends naem {
//     private clas :number;
//     constructor(name:string, caste:string, age:number, clas: number) {
//         super(name, caste, age);
//  this.clas=  clas
//     }
// }
// let f = new b('age', 'aaysh', 12,12)
// confirm(f.name)
