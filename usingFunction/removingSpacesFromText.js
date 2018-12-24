const removeSpacesInText = function(text){
let resultingText= "";

for(let letterPosition=0; letterPosition<text.length; letterPosition++){
  if(text[letterPosition]!=" "){
    resultingText=resultingText+text[letterPosition];
  }
}
return resultingText;
}
const main = function(){
  let text = process.argv[2];
  console.log(removeSpacesInText(text));
}
main();
