class Animal {
constructor(species){
		this.species = species;
}

get new_species(){
	return this.new_species = species;
}

makeSound(){
	console.log("The " + this.species + " makes a sound");
}

}
class Dog extends Animal {
	constructor(subSpecies){
		super(subSpecies);
		super.makeSound();
	}
	bark(){console.log("woof")};
}
myDog = new Dog("Golden Retriever");
myDog.bark();

class Cat extends Animal {
	constructor(subSpecies){
		super(subSpecies);
		super.makeSound();
	}
	purr(){console.log("purr")};
}
mycat = new Cat("Siamese");
mycat.purr();

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;

