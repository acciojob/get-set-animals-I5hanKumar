class Animal {

	constructor(species){
		this.species = species;
}

get new_species(){
	return this.new_species = species;
}

makeSound(){
	console.log("The" + this.species + "makes a sound");
}

}
class Dog extends Animal {
	bark(){console.log("woof")};
}
  const myDog = new Dog("Golden Retriever");

class Cat extends Animal {
	purr(){console.log("purr")};
}
const mycat = new Cat("Siamese");