var array = [];
var greetings = ["hello","hola","konichiwa"];
  
function test(){
  for(var i = 0; i < 3; i++){
    let g = greetings[i];
    array[i] = () => print(g)
  }
}

dis(test);
