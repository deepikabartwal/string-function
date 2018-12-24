const reversingString = function(string){
  let output = ""

  for(index = string.length-1;index >= 0; index--){
    output = output+string[index];
  }
  return output;
}
let string = process.argv[2];
console.log(reversingString(string));
