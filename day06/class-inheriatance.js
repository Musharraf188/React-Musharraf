class person {
constructor(name){
    this.name=name
}
greet(){
    console.log(`Hello ${this.name}`);
}
}
class student extends person {
constructor(name, level){
    super(name)
    this.level=level;
}
greet(){
    console.log(`Hello ${this.name} from ${this.level}`);
}
}

const o1=new person("Mushrraf");
const o2=new student("Raheman", "BCA final year");

o1.greet();
o2.greet();
