let string = process.argv[2];
let output = "";
let separator = "";

for( let letterCount = 0; letterCount<string.length; letterCount++){
  output = output+separator+string[letterCount];
  separator = ",";
}
console.log(output);
