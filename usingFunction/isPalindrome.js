const reversingText = function(text){
  reversedText ="";
  for(let letterPosition=text.length-1; letterPosition>=0; letterPosition--){
    reversedText = reversedText + text[letterPosition];
  }
  return reversedText;
}
const isPalindrome = function(text){
  return reversingText(text)==text;
}
const main = function(){
  let text = process.argv[2];
  console.log(isPalindrome(text));
}
main();
