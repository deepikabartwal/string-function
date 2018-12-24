let string = process.argv[2];
let output = "";

for(let letterCount=0; letterCount<string.length; letterCount++){
  if(string[letterCount]!=" "){
    output=output+string[letterCount];
  }
}
console.log(output);
