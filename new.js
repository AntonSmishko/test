//console.log(typeof typeof 1);


function getFileName(file) {

    let withDot = file.indexOf(".")
    
    console.log(withDot)

    if (withDot != -1) {

       return file.slice(withDot);
        
    }   else {
        console.log(file)
        return file
    }
  }


 getFileName("s.js")

 let withDot = file.indexOf(".")
 console.log(file.slice( 0, withDot));

 