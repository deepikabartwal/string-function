const countConsonants = function(string){
let consonants = "BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz";
let consonantCount = 0;

for( let letter=0; letter<string.length; letter++){
  for( let consonant = 0; consonant<consonants.length; consonant++){
    if(consonants[consonant]==string[letter]){
      consonantCount++;
    }
  }
}
return consonantCount;
}
let string = process.argv[2];
console.log(countConsonants(string));
