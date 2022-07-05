console.log(" ***********  Arrow  Functions  ************ ");

//Print Odd numbers in an array
//Anonymous function
let printOddNumbersFunc = function (arrayParam) {

    console.log(" =====  Anonymous function  ===== ")

    if(arrayParam != null && arrayParam.length > 0) {

        arrayParam.forEach(element => {
            if(element%2){
                console.log(" Element : ", element);
            }
        });

    } else {
        console.log("Null array or No elements to process.");
    }
}

let data = [2,7,9,5,4,13,3,15,16];
//call the function
printOddNumbersFunc(data);

//Immediately Invoked function 
(function() {

    console.log(" =====  IIFE  ===== ")

    if(data != null && data.length > 0) {

        data.forEach(element => {
            if(element%2){
                console.log(element);
            }
        });

    } else {
        console.log("Null array or No elements to process.");
    }

})(data);

//====================================================================================================

//Convert all Strings to Title Caps in a String array
let data2 = ["new delhi", "new york", "abu dhabi", "saudi arabia"];

//Anonymous functions
let titleCapsStrings = function (stringArrayParam) {

    console.log(" =====  Anonymous function  ===== ")
     
    if(stringArrayParam != null && stringArrayParam.length > 0) {

        let resultStringArray = stringArrayParam.map(element => {

            let tempStringArray = element.split(" ");
           
           let tempString =  tempStringArray.map(subelement => { 
               return subelement[0].toUpperCase() + subelement.substring(1).toLowerCase() 
             }).join(" ");

             return tempString;
            
        })

        console.log(resultStringArray);

    } else {
        console.log("Null array or No elements to process.");       
    }
    
}

titleCapsStrings(data2);

//Immediately Invoked Function
(function(){

    console.log(" =====  IIFE  ===== ")

    if(data2 != null && data2.length > 0) {

        let resultStringArray = data2.map(element => {

            let tempStringArray = element.split(" ");
           
            let tempString =  tempStringArray.map(subelement => { 
               return subelement[0].toUpperCase() + subelement.substring(1).toLowerCase() 
             }).join(" ");

           return tempString;
            
        })

        console.log(resultStringArray);

    } else {
        console.log("Null array or No elements to process.");       
    }     

})(data2);

//====================================================================================================

//Sum of all numbers in an array
let data3 = [1,2,3,4,5,6,7,8];

let sumOfAllNumbers = function(arrayParam) {
    
    console.log(" =====  Anonymous function  ===== ");

    if(arrayParam != null && arrayParam.length > 0) {

    let totalValue = arrayParam.reduce(function (total, currentValue, currentIndex, arr){
         
       return (total = total + currentValue);

    }, 0);

    console.log("Sum of all numbers ", totalValue);

   } else {
    console.log("Null array or No elements to process.");       

   }  

 }

 sumOfAllNumbers(data3);

(function() {

    console.log(" =====  IIFE  ===== ")

    if(data3 != null && data3.length > 0) {

        let totalValue = data3.reduce(function (total, currentValue, currentIndex, arr){
             
           return (total = total + currentValue);
    
        }, 0);
    
        console.log("Sum of all numbers ", totalValue);
    
       } else {
        console.log("Null array or No elements to process.");       
    
       }    


})(data3);

//=========================================================================================
//Return all Palindromes in an array.

let data4 = ["MaxxaM","MadaM","Max","Vikram","PabloolbaP"];

let printAllPalindromes = function(arrayParam) {

    console.log(" =====  Anonymous function  ===== ");

    if(arrayParam != null && arrayParam.length > 0) {

       let resultArray = arrayParam.filter(element => {

            const elementLength = element.length;
            for(let i = 0; i < elementLength-i-1; i++ ){
                if(element[i] != element[elementLength-i-1]){
                         return false;
                }
            }
            return true;
        });

        console.log(resultArray);

    } else {
        console.log("Null array or No elements to process.");       
    
    }   

}

printAllPalindromes(data4);

// IIFE
(function(){

    console.log(" =====  IIFE function  ===== ");

    if(data4 != null && data4.length > 0) {

       let resultArray = data4.filter(element => {

            const elementLength = element.length;
            for(let i = 0; i < elementLength-i-1; i++ ){
                if(element[i] != element[elementLength-i-1]){
                         return false;
                }
            }
            return true;
        });

        console.log(resultArray);

    } else {
        console.log("Null array or No elements to process.");       
    
    }   


})(data4);

//==============================================================================================

// Print the median of two sorted arrays 
let data5 = [4, 5, 6, 8];
let data6 = [9, 12, 14, 18, 20];

// First merge two arrays. 
// If the final array length is odd , median = element[(final array length) / 2];
// If the final array length is even , median = (element[(final array length) / 2] + element[((final array length) / 2)- 1]) / 2

let mergeTwoSortedArrays = function(array1, array2, array1Length, array2Length) {

    let resultArray = [];
    let i = 0;
    let j = 0;
   
    while( i != array1Length && j != array2Length) {

        if(array1[i] < array2[j])
          resultArray.push(array1[i++]);
        else 
          resultArray.push(array2[j++]);
    }

    while( i < array1Length) {
        resultArray.push(array1[i++]);
    }

    while ( j < array2Length) {
        resultArray.push(array2[j++]);
    }

    return resultArray;
} 

let finalArray = mergeTwoSortedArrays(data5, data6, 4, 5);
console.log(finalArray);

let medianOfArray = function(arrayParam){

    if(arrayParam.length % 2){
          return arrayParam[Math.floor(arrayParam.length/2)];
    } else {
         return ((arrayParam[Math.floor(arrayParam.length/2)] + arrayParam[Math.floor(arrayParam.length/2)-1])/2);
    }

}

console.log(medianOfArray(finalArray));

//============  IIFE  ================

let array1Length = 4;
let array2Length = 5;


let medianVal = (function() {

        console.log(" ======  IIFE  ===== ");
            let resultArray = [];
            let i = 0;
            let j = 0;
        

            while( i != array1Length && j != array2Length) {

                if(data5[i] < data6[j])
                resultArray.push(data5[i++]);
                else 
                resultArray.push(data6[j++]);
            }

            while( i < array1Length) {
                resultArray.push(data5[i++]);
            }

            while ( j < array2Length) {
                resultArray.push(data6[j++]);
            }

            if(resultArray.length % 2){
                return resultArray[Math.floor(resultArray.length/2)];
        } else {
            return ((resultArray[Math.floor(resultArray.length/2)] + resultArray[Math.floor(resultArray.length/2)-1])/2);
        }


        })(data5, data6, array1Length, array2Length);

console.log(medianVal);







    


