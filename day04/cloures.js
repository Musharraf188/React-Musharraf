let a=1;
const clouser1 =function(){
    console.log(a)
    a=2
}
a=3;
const clouser2 =function(){
    console.log(a)
};
clouser1();
clouser2();