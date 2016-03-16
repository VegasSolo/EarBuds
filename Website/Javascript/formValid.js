//check if string is empty
function checkString(string){
    string = string.replace(/^\s+/, '').replace(/\s+$/, '');
    htmlSpecialChar(string);
        if(string == null || string == 'undefined' || string === ""){
            return false;
        }
        else{
            return true;
        }
}

//check if user enter a number
function checkNum(x){
    if(isNaN(x)){
        return false;
    }
    else{
        return true;
    }
}

//Replaces characters that could be used to maliciously execute JS using forms
function htmlSpecialChar(text) {
  var map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };

  return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}