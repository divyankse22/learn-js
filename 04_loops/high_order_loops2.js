// for in 
// used to traverse along keys 
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman',
    game3: 'GTA Vice City',
    game4: 'Contra'
}
for(const game in myObject){
    console.log(myObject[game]); // this is correct way
    // console.log(myObject.game); this is wrong as game is a form of key which is used to access data members in object
}
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

const myMap = new Map();
myMap.set("js","javascript");
myMap.set("py","python");
myMap.set("cpp","c++");
myMap.set("rb","ruby");
for(const key in myMap){
    console.log(key); // maps are not enumerable i.e. for in cannot be used to iterate over maps
}