const interspersingText = function(text){
  let interspersedText = "";
  let separator = "";

  for( let letterPosition = 0; letterPosition<text.length; letterPosition++){
    interspersedText = interspersedText+separator+text[letterPosition];
    separator = ",";
  }
  return interspersedText;
}
const main = function(){
  let text = process.argv[2];
  console.log(interspersingText(text));
}
main();
