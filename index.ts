
function creatDate(created: Function){
    // pega o objeto e colocar dentro dele uma NOVA propriedade createdAT
    created.prototype.createdAt = new Date();
};

function format(){
    return function (target:Object, propertKey:string) {
        let value: string;

        const getter = function(){
            return value;
        };

        const setter = function(newValue:string){
            value = newValue.padStart(4,"0");
        };

        Object.defineProperty( target, propertKey, {
            set:setter,
            get:getter,
        });
    };
}



@creatDate
class Book {
    name;
    price;
    @format()
    id;

    constructor(id:string, name:string, price:number){
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
@creatDate
class Pen {
    name;
    price;
    @format()
    id;

    constructor(id:string, name:string, price:number){
        this.id = id;
        this.name = name;
        this.price = price;
    };
}


const book = new Book("1","Lord of the Rings", 99.99);
console.log(book);
