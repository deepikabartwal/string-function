let string = process.argv[2];
let vowels = "aeiouAEIOU";
let vowelCount = 0;

for(let letter = 0; letter < string.length; letter++){
  for(let vowel = 0; vowel < vowels.length; vowel++){
    if(vowels[vowel]==string[letter]){
      vowelCount++;
    }
  }
}
console.log(vowelCount);
