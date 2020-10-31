class Person{
    constructor(name){
        this.name = name;
    }
    greet(){
        console.log(`Habla ${this.name}`);
    }
}

class Student extends Person{
    constructor(name, level){
        super(name);
        this.level = level;
    }
    greet(){
        console.log(`Hola ${this.name} de ${this.level}`);
    }
}

const o1 = new Person("Noli");
const o2 = new Student("Emperatriz", "1er Semestre");
const o3 = new Student("Char", "2do Semestre");

o3.greet = () => console.log('Soy un crack!');

o1.greet();
o2.greet();
o3.greet();