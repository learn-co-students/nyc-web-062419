function Ben(name, skills){
  this.name = name
  this.skills = skills
}

Ben.prototype.listSkills = function(){

}

function Album(name, artist, year, songNum) {
  this.name = name;
  this.artist = artist;
  this.year = year;
  this.songNum = songNum
}

Album.prototype.description = function() {
console.log(`${this.name} by ${this.artist} was released in ${this.year}. It has ${this.songNum} songs on it`)
}


function  MetalGear(model, weapons, creator, destroyer){
 this.model = model;
 this.weapons = weapons;
 this.creator = creator;
 this.destroyer = destroyer;
};
 
MetalGear.prototype.blowUp = function(){
 console.log(`${this.destroyer} has defeated ${this.model}`);
}
MetalGear.prototype.create = function(){
 console.log(`${this.creator} has created ${this.model}`);
}
 
const rex = new MetalGear(
 "Rex",
 ["rail gun", "Laser", "Heat Seeking Missles"],
 "Hal Emmerich",
 "Solid Snake"
);
const ray = new MetalGear(
 "Ray",
 ["Watergun", "Mortar Barrage", "Sword"],
 "USMC",
 "Raiden"
);
const shagohod = new MetalGear(
 "Shagohod",
 ["Tank Treads", "Machine Gun Nest", "Missles"],
 "Dr.Sokolov",
 "Naked Snake"
);


function Animal (name, species, age) {
  this.name = name
  this.species = species
  this.age = age
  Animal.prototype.sayHello = function(){
    return `${this.name} says I'm a ${this.species}`
    }
  Animal.prototype.haveBirthday = function() {
    return `Today is my birthday i am now ${++this.age}`
    }
  Animal.prototype.eat = function(food){
    return `I am ${this.name} and i am eating ${food}`
    }
}

let momo = new Animal("Momo", "monkey", 14)
momo.sayHello()
momo.haveBirthday()
momo.eat("poop")


function Person(firstName, lastName, dob){
   this.firstName = firstName;
   this.lastName = lastName;
   this.birthday = new Date(dob);
}
 
const john = new Person('John', 'Smith', '3-13-1983')
 
Person.prototype.calculateAge = function(){
   const diff = Date.now() - this.birthday.getTime();
   const ageDate = new Date(diff);
   return Math.abs(ageDate.getUTCFullYear() - 1970)
}

function Dog (name, breed, sex){ 
  this.name = name
  this.breed = breed
  this.sex = sex

  this.listName = function (){console.log (`My name is ${this.name}`)}
}

Dog.prototype.listBreed = function() {console.log (`My breed is ${this.breed}`)}
let max = new Dog ("Tim", "poodle", "male")

