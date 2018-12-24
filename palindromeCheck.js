let string = process.argv[2];
let output = "";
let length = string.length;

for(let index=length-1;index>=0;index--){
  output=output+string[index];
}
console.log(output==string);
