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

// const a = 123;

// console.log(a > 10 ? 'hello' : 'goodbye');

// погрався з псевдомасивом arguments

// function fn1() {
//    console.log(arguments);
//    const arrayToArg = Array.from(arguments);
//    console.log('this length array from arguments :', arrayToArg.length);

//    for (let i = 0; i < arrayToArg.length; i++) {
//       console.log(arrayToArg[i]);

//       const addNewEl = (arrayToArg[i] += ' this new element');
//       console.log(addNewEl);
//    }
// }
// fn1(1, 2, 3, 4, 5);

// Object

// function countTotalSalary(salaries) {
//    let totalSalary = 0;
//    let objKeys = Object.values(salaries);

//    for (let key of objKeys) {
//       totalSalary += key;
//    }
//    return totalSalary;
// }

// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

//   Знайти обєкт за іменем та повернути його ціну

// function getProductPrice(productName) {
//    const products = [
//       { name: 'Radar', price: 1300, quantity: 4 },
//       { name: 'Scanner', price: 2700, quantity: 3 },
//       { name: 'Droid', price: 400, quantity: 7 },
//       { name: 'Grip', price: 1200, quantity: 9 },
//    ];
//    const message = null;
//    for (let product of products) {
//       if (product.name === productName) {
//          return product.price;
//       }
//    }
// }

// console.log(getProductPrice('Radar'));

// пошук властивості та збір в один масив всіх значень/////////////

// function getAllPropValues(propName) {
//    const products = [
//       { name: 'Radar', price: 1300, quantity: 4 },
//       { name: 'Scanner', price: 2700, quantity: 3 },
//       { name: 'Droid', price: 400, quantity: 7 },
//       { name: 'Grip', price: 1200, quantity: 9 },
//    ];
//    const propArray = [];
//    for (const product of products) {
//       //   console.log(product);
//       if (propName === 'name') {
//          propArray.push(product.name);
//          //  console.log(propArray);
//       } else if (propName === 'price') {
//          propArray.push(product.price);
//       } else if (propName === 'quantity') {
//          propArray.push(product.quantity);
//       }
//    }
//    return propArray;
// }

//  ПОКРАЩЕНИЙ ВАРІАНТ БІЛЬШ УНІВЕРСАЛЬНИЙ   hasOwnProperty
// function getAllPropValues(propName) {
//    const products = [
//       { name: 'Radar', price: 1300, quantity: 4 },
//       { name: 'Scanner', price: 2700, quantity: 3 },
//       { name: 'Droid', price: 400, quantity: 7 },
//       { name: 'Grip', price: 1200, quantity: 9 },
//    ];
//    const propArray = [];
//    for (const product of products) {
//       if (product.hasOwnProperty(propName)) {
//          propArray.push(product[propName]);
//       }
//    }
//    return propArray;
// }

// console.log(getAllPropValues('name'));
// console.log(getAllPropValues('price'));
// console.log(getAllPropValues('quantity'));
// console.log(getAllPropValues('123'));

//  та ж функція але з використанням includes , спочатку беремо масив ключів за допомогою Object.keys
//  а вже потім перевіряємо за допомогою includes умову
// function getAllPropValues(propName) {
//    const products = [
//       { name: 'Radar', price: 1300, quantity: 4 },
//       { name: 'Scanner', price: 2700, quantity: 3 },
//       { name: 'Droid', price: 400, quantity: 7 },
//       { name: 'Grip', price: 1200, quantity: 9 },
//    ];
//    const propArray = [];
//    for (const product of products) {
//       if (Object.keys(product).includes(propName)) {
//          propArray.push(product[propName]);
//       }
//    }
//    return propArray;
// }

// function calculateTotalPrice(productName) {
//    const products = [
//       { name: 'Radar', price: 1300, quantity: 4 },
//       { name: 'Scanner', price: 2700, quantity: 3 },
//       { name: 'Droid', price: 400, quantity: 7 },
//       { name: 'Grip', price: 1200, quantity: 9 },
//    ];
//    console.log(productName);
//    let total = 0;

//    for (let product of products) {
//       console.log(product);
//       if (product.name === productName) {
//          console.log('this true');
//          total = product.price * product.quantity;
//          return total;
//       }
//    }

//    return `Product ${productName} not found!`;
// }
// console.log(calculateTotalPrice('not found'));
