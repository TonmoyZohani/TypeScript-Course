class Person {
    // Properties
    private firstName: string;
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
  
  const person = new Person("Tonmoy", "Zohani", 30);
  
  console.log(person.getFullName());
  console.log(person.getAge());
  
  person.increaseAge();
  console.log(person.getAge());
  
  