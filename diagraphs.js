let string = process.argv[2]

for(let letter=0; letter<string.length; letter++){
  if(string[letter]==string[letter+1]){
    console.log(string[letter]+string[letter+1]);
  }
}
