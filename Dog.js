//dog class, parent class to SmallDog, MediumDog, LargeDog - breeds continue as additional child classes
//TODO include strength in MediumDog and LargeDog classes
//TODO dog breeds are dependent on size, therefore should be specific arrays to the child classes
class Dog {
   constructor(name, sex, age) {
     name = this.name;
     sex = this.sex;
     age = this.age;
   }
   get name(){
     return this.name;
   }
   get sex(){
     return this.sex;
   }
   get age(){
     return this.age;
   }
   //TODO#1 add methods: eat to regain maxStamina, train to increase speed and agility (dependent on stamina and temperament and grow older)
}

export default Dog; 
