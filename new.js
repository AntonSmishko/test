// const newArray = [ "Mango","Jupiter","apple"];

// console.log(newArray.length -1);
// console.log(newArray[newArray.length -1]);

// console.log(Number([1,2]));

// function getLength(array) {
//     const arrayToString = array.join("");
//     console.log(" this array>", arrayToString)
//       return arrayToString.length
//     }

//    console.log( getLength(["Mango", "hurries", "to", "the", "train"]))

//    const newArrayTest = ["Mango", "hurries", "to", "the", "train"]
//    console.log(newArrayTest)

//    const slug = "amazing french recipes";
// const slugParts = slug.split(" ");
// console.log(slugParts);

// Знайти чи є такий ел в масиві а також повернути зі зрізом включаючи цей ел

// function getSlice(array, value) {

//     if (array.indexOf(value) != -1) {
//      let indexArrV =  array.indexOf(value);
//      indexArrV += 1 ;

//       return   array.slice(0,  indexArrV);

//     } else {
//       return []
//     }
//   }

//   console.log(getSlice(["Mango", "Poly", "Ajax"], "Ajax"));

// function createArrayOfNumbers(min, max) {
//     let newArray = [];
//     for (let i = min; i <= max; i += 1) {

//       console.log(i);
//       newArray.push(i)

//     }

//     return newArray
//   }

//   console.log(createArrayOfNumbers(1, 5))

//   const tags = [];

// for(let i = 0; i < 3; i += 1) {
// 	tags.push(`tag-${i}`);
// }

// console.log(tags); // ["tag-0", "tag-1", "tag-2"]

//  додати всі числа масиву в купу
// function calculateTotalPrice(order) {
//   let total = 0;
//    for (let i = 0; i < order.length; i += 1) {
//      total = total + order[i];
//    }
//    return total
//  }

//  console.log(calculateTotalPrice([12, 85, 37, 4]))
//   console.log( calculateTotalPrice([164, 48, 291]));

//

// знайти парні числа та закинути в масив
// function getEvenNumbers(start, end) {
//   const newArray = [];
//       for (let i = start; i <= end; i+=1) {

//         console.log(i);

//         if (i % 2 === 0) {
//           console.log("it's i:",i);
//           newArray.push(i)
//           console.log(" it's new Array: ",newArray);
//         }

//       }
//       return newArray
//   }

//  console.log( getEvenNumbers(9, 26));

// перевірка на наявність ел в масиві та приведення до регістру

// function checkStorage(storage, item) {
//   const lowerCaseItem = item.toLowerCase()
//   if (storage.includes(lowerCaseItem)) {

//     return `${lowerCaseItem} is avalible to order!`

//   } else {
//     return "Sorry! We are out of stock!"
//   }
// }

//  console.log( checkStorage(["apple", "plum", "pear"], "PLUM"))

// пошук  спільних ел в 2х масивах

// function getCommonElements(array1, array2) {
//    const newArray = [];

//    for (let i = 0; i < array1.length; i += 1) {
//       if (array2.includes(array1[i])) {
//          newArray.push(array1[i]);
//       }
//    }
//    return newArray;
// }
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));

const a = 123;
console.log(a > 10 ? 'hello' : 'goodbye');
