
//    Task 1 :-
//   ----------

const myColor = ["Red","Green","White","Black"];

console.log(myColor.join());               // Output: "Red,Green,White,Black"
console.log(myColor.join(','));           // Output: "Red,Green,White,Black"
console.log(myColor.join('+'));          // Output: "Red+Green+White+Black"


//    Task 2 :-
//   ----------

var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

function mostFrequentItem(arr) {
  const count = {};
  let maxItem = arr[0];
  let maxCount = 1;

  for (let item of arr) {
    count[item] = (count[item] || 0) + 1;

    if (count[item] > maxCount) {
      maxCount = count[item];
      maxItem = item;
    }
  }

  return `${maxItem} ( ${maxCount} times )`;
}


//    Task 3 :-
//   ----------


function truncateStr(str, num) {
  return str.slice(0, num);
}

console.log(truncateStr("Robin Singh", 4));               // Output: "Robi"


//    Task 4 :-
//   ----------

function capitalizeWords(str) {

  var words = str.split(" ");
  var capitalizedWords = [];

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var capitalized = word.charAt(0).toUpperCase() + word.slice(1);
    capitalizedWords.push(capitalized);
  }
  return capitalizedWords.join(" ");
}

console.log(capitalizeWords('js string exercises')); 



//      Outputs :-

//      PS E:\Celebal\Celebal_projects\Projects\Week7_Functions> node script.js
//      Red,Green,White,Black
//      Red,Green,White,Black
//      Red+Green+White+Black
//      Robi
//      Js String Exercises
//      PS E:\Celebal\Celebal_projects\Projects\Week7_Functions> 