# Gorioshi learning JS
Learn the difference between var, let and const through using functions dis() and dissrc().  
* run js command  
`$ js -f <var,let,const>_fn.js -i`  
* disassembly it  
`js> dis(function name)`  
`js> dissrc(function name)`    
# 
* take a difference  
```$ js -f var_fn.js > var.log
$ js -f let_fn.js > let.log
$ js -f const_fn.js > const.log```  
```$ diff const.log let.log
56c56
<  15:    6    18 [   5] colspan 10
---
>  15:    6    18 [   5] colspan 8```  
```$ diff const.log var.log```  


glhf
