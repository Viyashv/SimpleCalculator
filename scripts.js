function submit() {
  const drop = document.getElementById("select").value;

  console.log(drop);

  const input01 = document.getElementById("input1").value;

  const input02 = document.getElementById("input2").value;

  const para = document.getElementById("para");

  const input1 = parseInt(input01);

  const input2 = parseInt(input02);

  console.log("input1 :" + input1 + "  " + "input2 :" + input2, drop);

  if (drop == "") {
    para.innerHTML = "Select arithmetic operations";
  }

  if (drop == "Add") {
    if ((isNaN(input1)) || (isNaN(input2))) {
      para.innerHTML = "Please input both input";
    } else {
      para.innerHTML = input1 + input2;
    }
  }
  if (drop == "Subtract") {
    if (isNaN(input1) || isNaN(input2)) {
      para.innerHTML = "Please enter both input";
    } else {
      para.innerHTML = input1 - input2;
    }
  }
  if (drop == "Multiplication") {
    if (isNaN(input1) || isNaN(input2)) {
      para.innerHTML = "Please enter both input";
    } else {
      para.innerHTML = input1 * input2;
    }
  }
  if (drop == "Divison") {
    if (isNaN(input1) || isNaN(input2)) {
      para.innerHTML = "Please enter both input";
    } else {
      para.innerHTML = input1 / input2;
    }
  }
  
  if(drop == "Palindrome"){
    if(isNaN(input1)){
      para.innerHTML = "Please enter input ";
    }
    else{
        str = input1.toString()

        rev = ''

        for( let i = 0 ; i < str.length ; i++){
            rev = str[i] + rev
            console.log(rev)
        }
        if(str == rev){
            para.innerHTML = "Palindrome"
        }
        else{
            para.innerHTML = "Not Palindrome"
        }

    }
  }

  if(drop == "Factorial"){
    if(isNaN(input1) || input1 == 0){
      para.innerHTML = "Please enter input ";
    }
    else{
        str = input1

        // console.log(str)

        let fact = 1 ;

        for( let i = 1 ; i <= str ; i++){
            fact *= i
          }
          console.log((parseInt(fact)))
        
        return para.innerHTML = fact
      }
  }

}

function arithmetic() {
  const drop = document.getElementById("select").value;

  const button = document.getElementById("button");

  button.innerHTML = drop;

  const symbol = document.getElementById("symbol");

  const field = document.getElementById("field2");

  if (drop == "Add") {
    symbol.style.visibility = "visible";
    symbol.innerHTML = "+";
    field.style.visibility = "visible";
  }
  if (drop == "Subtract") {
    symbol.style.visibility = "visible";
    field.style.visibility = "visible";
    symbol.innerHTML = "-";
  }
  if (drop == "Multiplication") {
    symbol.style.visibility = "visible";
    field.style.visibility = "visible";
    symbol.innerHTML = "*";
  }
  if (drop == "Divison") {
    symbol.style.visibility = "visible";
    field.style.visibility = "visible";
    symbol.innerHTML = "/";
  }
  if (drop == "Palindrome") {
    field.style.visibility = "hidden";
    symbol.style.visibility = "hidden";
  }
  if (drop == "Factorial") {
    field.style.visibility = "hidden";
    symbol.style.visibility = "hidden";
  }
}


// let lst = 1441

// lst1 = lst.toString()

// let lst2 = ''

// for (let i = 0 ; i < lst1.length ; i++){
//     lst2 = lst1[i] + lst2
//     console.log(lst2)
// }
// if(lst1 == lst2){
//     console.log("palindrome")
// }else{
//     console.log("not a palindrome")
// }

// console.log(lst1.length)

//                                               recurrsion of factorial

// const factorial = (n) => {
//   if (n === 0) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// };
// console.log(factorial(5));




// let fact = 1;
// for (let i = 1 ; i <= 5 ; i++){
//   fact*=i
// }
// console.log(fact + " "+'fact')


const arr = [1, 1, 2, 3, 4, 5, 5, 6, 17,3, 15, 2];

function findDuplicates(arr) {
  let duplicates = [];
  let set = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) {
      duplicates.push(arr[i]);
    } else {
      set.add(arr[i]);
    }
  }

  return duplicates;
}

const duplicateElements = findDuplicates(arr);
console.log("Duplicate elements:", duplicateElements); 