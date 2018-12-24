const isConsonant=function(character) {
  let consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
  for( let consonantPos =0; consonantPos < consonants.length; consonantPos++){
    if(consonants[consonantPos]==character){
      return true;
    }
  }
  return false;
}

const main = function(){
  let character = process.argv[2];
  console.log(isConsonant(character));
}
main();
