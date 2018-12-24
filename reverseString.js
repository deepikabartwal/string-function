let string = process.argv[2];
let output = ""

for(index = string.length-1;index >= 0; index--){
  output = output+string[index];
}
console.log(output);
