const reversingString = function(text){
  let reversedText = "";
  for( let letterPosition= text.length-1;letterPosition >= 0;letterPosition--){
    reversedText = reversedText+text[letterPosition];
  }
  return reversedText;
}
const main = function(){
  let text = process.argv[2];
  console.log(reversingString(text));
}
main();
