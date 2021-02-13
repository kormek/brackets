module.exports = function check(str, bracketsConfig) {
  let mystack = []; 
  let open = [];
   let close = [];
  str = str.split('');
  if(str.length%2) return false;
  for(let i =0;i<bracketsConfig.length;i++){
    open.push(bracketsConfig[i][0]);
     close.push(bracketsConfig[i][1]);
  }
  
  for(let i = 0;i<str.length;i++){
     
    if(open.includes(str[i])) {
     
      mystack.push(str[i]);
      
    } if(close.includes(str[i]) ) 
      {
       
       if(close[open.indexOf(mystack[mystack.length-1])] === str[i]  ) { mystack.pop();
      } else {
        
        return false;
      }
    }

  }

  return true;
}
