# Gorioshi learning JS
## Overview
Learn the difference between var, let and const through using functions dis() and dissrc().  
* run js command  
`$ js -f <var,let,const>_fn.js -i`  
* disassembly it  
```
js> dis(function name)  
js> dissrc(function name)
```
##
* take a difference and compare
Now, get disassemble outputs to take a difference.
```
$ js -f var_fn.js > var.log
$ js -f let_fn.js > let.log
$ js -f const_fn.js > const.log
```  
Compare const.log with let.log. The following shows the result of diff command.
```
$ diff const.log let.log
56c56
<  15:    6    18 [   5] colspan 10
---
>  15:    6    18 [   5] colspan 8
```
The above demonstrates that const and let are very similar. But const.log with var.log...
```
$ diff const.log var.log
```  
diff reports these two files are markedly different. How different? look close...
```
< 00013:  pushlexicalenv lexical {g: env slot 2} #
< 00028:  initaliasedlexical "g" (hops = 0, slot = 2) # greetings
< 00051:  poplexicalenv                   #
---
> 00023:  setaliasedvar "g" (hops = 0, slot = 2) # greetings[i]

72,76c70
<  loop                  0       12       81
< 
< Scope notes:
<    index   parent    start      end
<        1   (none)       18       52
---
>  loop                  0       12       75
```
(under construction)

glhf
