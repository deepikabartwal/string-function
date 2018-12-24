let string = process.argv[2];
let output = "";
let delimiter = "";

for( let letterCount = 0; letterCount<string.length; letterCount++){
  output = output+delimiter+string[letterCount];
  delimiter=process.argv[3];
}
console.log(output);
