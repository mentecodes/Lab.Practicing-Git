// How Equal
function howEqual(data1, data2){
    if (data1 === data2) {
   return "strictly";
    }
    
    else if (data1 == data2) {
  return "loosely";
    }
  
    else if (data1 !== data2) {  
     return  "not equal"
    }
  }

//Is Truthy

function isTruthy (dataA){
    if (dataA) {
return true; 
    }

    else if (dataA === false) {
        return "The boolean value false is falsey"
    }

    else if (dataA === null) {
        return "The null value is falsey"
    }

    else if (dataA === undefined) {
        return "undefined is falsey"
    }

    else if (dataA === 0) {
        return "The number 0 is falsey (the only falsey number)"
    }

    else if (dataA === "") {
        return "The empty string is falsey (the only falsey string)"
    }
}

isTruthy("tacos");
isTruthy(null);

//My Or, My And 

function myOr (x, y, z){
 if (x){ //forcing x to be a boolean
 console.log(x);
 return x;
}
else if (y){ //forcing y to be a boolean
    console.log(y);
    return y;
   }
   else if (z){ //forcing z to be a boolean
    console.log(z);
    return z;
   }
  else 
  console.log

}

myOr(0,1, false);

function myAnd (abc, def, ghi){
    if (!abc){ //forcing x to be a boolean
        console.log(abc);
        return abc;
       }
       else if (!def){ //forcing y to be a boolean
           console.log(def);
           return def;
          }
          else if (!ghi){ //forcing z to be a boolean
           console.log(ghi);
           return ghi;
          }
}


//Only One
function onlyOne (arg1, arg2, arg3){

    if (arg1 && !arg2 && !arg3) 
    return true; 

    if (!arg1 && arg2 && !arg3) 
    return true; 

    if (!arg1 && !arg2 && arg3) 
    return true; 

    else{
        return false;
    }
}

onlyOne(tiger, roam, tree);

//zeroDarkThirty
function zeroDarkThirty(num){
    if (num = 0){
        return "NaN" 
    }
    else {
        num.replace(0, "");
        return num;
    }
}