//dog class, parent class to SmallDog, MediumDog, LargeDog
//TODO include strength in MediumDog and LargeDog classes
//TODO dog breeds are dependent on size, therefore should be specific arrays to the child classes
class Dog {
   constructor(name, size, sex, speed, agility, stamina, temperament, age){
        this.name = name;
        this.size = size;
        this.sex = sex;
        this.speed = speed;
        this.agility = agility;
        this.stamina = stamina; 
        this.temperament = temperament;
        this.age = age;
   }
}
