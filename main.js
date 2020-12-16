console.log("20 12 15 JS Classes 01 Primary"); // files linked

// declare a pet class with name, age, breed and isAdopted set to false
class Pet {
    constructor(name, age, breed){
        this.name = name;
        this.age = age;
        this.breed = breed;
        this.isAdopted = false;
    }
    // method to output Pet properties
    outputPet(){
        console.log(`The pet ${this.name} is a ${this.breed} and ${this.age} years old. It is ${this.isAdopted} that ${this.name} has been adopted.`);
    }
    // method to update isAdopted property
    adopted(){
        this.isAdopted = true;
        return(`Congrats! ${this.name} has been adopted`);
    }
}

// create one instance
let dog = new Pet("Dakota", 7, "Mutt");
// console.log(dog);

// call class method to output properties
dog.outputPet();

// update isAdopted and alter returned value
alert(dog.adopted());

// create another instance
let cat = new Pet("Kibbles", 4, "Tabby");
// call class method to output properties
cat.outputPet();