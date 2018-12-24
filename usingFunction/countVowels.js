const countVowel = function(string){
  let vowels = "aeiouAEIOU";
  let vowelCount = 0;

  for(let letter = 0; letter < string.length; letter++){
    for(let vowel = 0; vowel < vowels.length; vowel++){
      if(vowels[vowel]==string[letter]){
        vowelCount++;
      }
    }
  }
  return vowelCount;
}
let string = process.argv[2];
console.log(countVowel(string));
