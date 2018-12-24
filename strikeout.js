let string = process.argv[2];
let characterToBeStriked = process.argv[3];
let output = "";

for(let letter=0;letter<string.length;letter++){
  if(characterToBeStriked!=string[letter]){
    output=output+string[letter];
  }else{
    output=output+"-";
  }
}
console.log(output);
