function test(){
  var array = [];
  var greetings = ["hello","hola","konichiwa"];
  
  for(var i = 0; i < 3; i++){
    let g = greetings[i];
    array[i] = () => print(g)
  }

  array[0]();
  array[1]();
  array[2]();
}

