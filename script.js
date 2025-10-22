//complete this code
class Animal {
	species : string;
	
	constructor(species :string );
	this.species = species;

get new_species(){
	return this.new_species = species;
}

makeSound(){
	console.log("The" + this.species + "make a sound");
}

}
class Dog extends Animal {
	
    const myDog = new Dog("Golden Retriever");
	bark(){console.log("woof")};
}
class Cat extends Animal {
	const mycat = new Cat("Siamese");
	purr(){console.log("purr")};
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
