const isPalindrome = function(string){
  let output = "";
  let length = string.length;

  for(let index=length-1;index>=0;index--){
    output=output+string[index];
  }
  return (output==string);
}
let string = process.argv[2];
console.log(isPalindrome(string));
