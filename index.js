function palindrome(str) {
  //removes non alphanumeric characters
  //^ is for negating
  //replace the characters with an empty string
  let newStr = str.toLowerCase().replace(/[^a-z\d]/g, '');
 //reversing the string to see if its reverse works
  return  newStr.split('').reverse().join('') === newStr;
}



palindrome("eye");
