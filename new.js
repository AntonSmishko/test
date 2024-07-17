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



function createArrayOfNumbers(min, max) {
    let newArray = [];
    for (let i = min; i <= max; i += 1) {
        
      console.log(i);
      newArray.push(i)

    }

    return newArray
  }


  console.log(createArrayOfNumbers(1, 5))


  
//   const tags = [];

// for(let i = 0; i < 3; i += 1) {
// 	tags.push(`tag-${i}`);
// }

// console.log(tags); // ["tag-0", "tag-1", "tag-2"]
