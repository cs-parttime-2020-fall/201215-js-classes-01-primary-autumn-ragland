# 20 12 15 JS Classes 01 Primary

Add comments throughout your solution. Comment out any broken code before 9PM submission and provide context on what's not working. Push after completing each exercise. 

## Pets For Adoption
Declare a `Pet` class. Each pet will be have a name, breed, and age unique to that pet! Each pet will also have an `isAdopted` property that will start as false for all pets.

The `Pet` class should have two method : `outputPet` and `adopted`. The outputPet method will output all of the pets properties in a formatted string in the browser
```
The pet [NAME] is a [BREED] and [AGE] years old. It is [TRUE/FALSE] that [NAME] has been adopted. 
```
The adopted method will update the isAdopted property of a pet fro false to true. This method will return the message : `Congrats! [NAME] has been adopted`

Declare two instances of the `Pet` class with different name, breed, and age properties. Call the `outputPet` method on each pet. Update the value of the second pet's isAdopted property using the correct class method and alert the returned value.