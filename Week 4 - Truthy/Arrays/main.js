//Odd Couple


const oddCouple = (arr) => {
  const answer = [];
  
  for (let i = 0; i < arr.length; i++) {
    const curNum = arr[i];
    
    if (curNum % 2 === 1) oddArr.push(curNum);
    if (answer.length === 2) 
    return answer;
  }
  return answer; 
}

//My Includes 
function myIncludes (array, searchValue){
    let arrayToString = array.toString();
if (arrayToString = searchValue){
    arrayToString = text.includes(searchValue);
   return true;

}
else return false 

}

//My Last Index Of

function myLastIndexOf(array, searchValue, startIdx) {
    if (startIdx === undefined) {
      startIdx = array.length - 1
    }
    for (let i = startIdx; i >= 0; i--) {
      if (array[i] === searchValue) {
        return i
      }
    }
    return -1
  }

  //My Reverse

  function myReverse(array) {
    let newArray = [];
    for (i = array.length-1; i >= 0; i--) {
      newArray.push(array[i])
    }
    return newArray
  }

  // My Unshift
  function myUnshift(array, value) {
    let newArray = [value]
    for (let i = 0; i < array.length; i++) {
      newArray.push(array[i])
    }
    return newArray
  }