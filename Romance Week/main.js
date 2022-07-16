//01 Say My Name

let me = {
    name: "Diana",
    getGreeting: function(){
      return ('Hi, my name is ' + me.name + '.');
    }
  }
  
  me.getGreeting();

  //02 Say Your Name
 
  let me2 = {
    name: "Tony",
    getGreeting: function(named){
      return ('Hi ' + ${named.name} + ', my name is ' + me2.name + '.');
    }
  }
  
  me2.getGreeting();


















































  //03 Call Them All
  function callThemAll (object, value){
    let result = []; //this is an array []
    for (let key in object){
      if (typeof object[key] === "function"){ 
        result.push(object[key](value)); //callThemAll should call every method in the object, passing in the value as the argument with each call.
      }
    }
    return result; //callThemAll should return an array with all of the returned values from each method invocation
  }
  
  //04 TicTacToe
  let ticTacToe = {
    board: [ //The board property is a grid of arrays that represents the board, where each cell is initially null.
      [null, null, null], 
      [null, null, null], 
      [null, null, null]
    ],
    
    move: function(char, row, col){ //The move method is a method that, given a character, a row number, and a column number, adds the character to the correct cell in the board.
      if (this.board[row][col]===null){
        this.board[row][col] = char;
      }
      return this.board;
    },
    
    clear: function(){ //The clear method should reset the board to all nulls.
      this.board = [
      [null, null, null], 
      [null, null, null], 
      [null, null, null]
    ]
      return this.board;
    }
  }

  //05 Taco Cat Inc

  currentInventory: function() {
    let total = 0;

    for (let basic in this) {
      for (let ingredient in this[basic]) { // to exclude cash: 0, you can use typeof === 'object'
        let item = this[basic][ingredient]; // OR if (typeof this[category] !== 'object') continue;
        total += item['cost'] * item['quantity'];
      }
    }
    return total;
  },
  sale: function(order) { // order is obj
    let price = 0;

    for (let key in order) { // gourmet items
      let item = order[key] // items in gourmet items
      
      this.cash += this[key][item]['cost'];
      price += this[key][item]['cost']; // total $$
      this[key][item]['quantity']--;
    }
    return price;
  } 
};