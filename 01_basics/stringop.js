const user = "ds123@gmail.com"
let pass = "12345"
console.log(pass);
pass[0] = 9
console.log(pass);//It means in String value has been changed as a copy rather than changes in the String itself
// A better way to print rather than using +
console.log(`My username is ${user} and password is ${pass} `);
const myName = new String("Divyank Srivastava");
console.log(myName.charAt(4));
console.log(myName[4]);
console.log(myName.slice(-8,12));
console.log(myName.substring(-8,12));// It means substring does not take negative value
const myFile = "https://github.com/divyankse22/learn-js";
console.log(myFile.replaceAll('/','~'));
console.log(myFile.replace('/','~'));//replaces only first acquintance
console.log(myName.split(' '));






