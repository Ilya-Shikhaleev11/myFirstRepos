export class Task {
    public id: number;
    public title: string;
    public completed: boolean = false
    constructor(id:number,title:string)
    {
    this.id = id;
    this.title = title;
    }
   }

   class Product {
    id: number;
    name: string;
    text: string;
    price: number;
    constructor(id: number, name: string, text: string, price: number ) {
    this.id = id;
    this.name = name;
    this.text = text;
    this.price = price;
    }
    greet() {
    console.log(`Привет, товар ${this.id} ${this.name} ${this.text} ${this.price}руб`);
    }
   }
   