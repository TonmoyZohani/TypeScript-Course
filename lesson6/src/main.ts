class Person {
    // Properties
    public firstName: string;
    private lastName: string;
    private age: number;

    // Constructor
    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // Public method to get full name
    public getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    // Public method to get age
    public getAge(): number {
        return this.age;
    }

    // Method to increment age
    public increaseAge(): void {
        this.age++;
    }
}

class Employee extends Person {
    private profession: string;

    constructor(
        firstName: string,
        lastName: string,
        age: number,
        profession: string
    ) {
        super(firstName, lastName, age);
        this.profession = profession;
    }

    public printText(): string {
        return `I am ${this.firstName},age ${this.getAge()} and my profession is ${this.profession}`
    }
}

const person = new Person("Tonmoy", "Zohani", 30);
const employee = new Employee('Rakib', 'Khan', 25, 'App Developer');

console.log(person.getFullName());
console.log(person.getAge());

person.increaseAge();
console.log(person.getAge());
console.log(employee.printText())

/////////////////////////////////////
interface Musician {
    name: string,
    instrument: string,
    play(action: string): string  // A method that accepts a string parameter action and returns a string.
}

class Guitarist implements Musician {
    name: string;
    instrument: string;

    constructor(name: string, instrument: string) {
        this.name = name;
        this.instrument = instrument;
    }

    play(action: string) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}

const Page = new Guitarist('Jimmy', 'guitar')
console.log(Page.play('strums'))
