const repeatString = function(text, num ) {
  if (num == 0 ) {
    return ""
  }
  if(num < 0 ) {
    return "ERROR" 
  }
    let Message = text;
    for (let i = 0; i < num -1; i++) {
    Message += text;
}
return Message
};

// Do not edit below this line
module.exports = repeatString;
