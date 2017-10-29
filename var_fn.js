var array = [];
var greetings = ["hello","hola","konichiwa"];
  
function test(){
  for(var i = 0; i < 3; i++){
    var g = greetings[i];
    array[i] = () => print(g)
  }
}

dis(test)
