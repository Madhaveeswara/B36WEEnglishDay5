
//=============================================================================================
//a. Print Odd numbers in an array
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

//b. Convert all Strings to Title Caps in a String array
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

//c. Sum of all numbers in an array
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
//d. Return all Prime numbers in an array
let rawData = [1,2,4,5,13,14,18,17,20,22,23,24,21,27,28,29,30,31,32,36];

let allPrimeNumbersInArray = function(arrayParam) {
     
    // A Prime number is divisible by 1 and itself 
    // Check for this condition for every element in the array.
   let resultArray = arrayParam.filter((element) => {
            
        let flag = 0;

        if(element === 1) return false;

        for(let j = 1; j <=element; j++)
        if(element%j == 0){
            flag++;
        }

        if(flag === 2){
            return true;
        } else {
            return false;
        }

    });

    //console.log("Prime Numbers ",resultArray);
    return resultArray;
}

console.log("Prime Numbers returned",allPrimeNumbersInArray(rawData));


// IIFE
let resultPrimeNumbersArray = (function(arrayParam){

    console.log(" =====  IIFE function  ===== ");

    let resultArray =  arrayParam.filter((element) => {
            
        let flag = 0;

        if(element === 1) return false;

        for(let j = 1; j <=element; j++)
        if(element%j == 0){
            flag++;
        }

        if(flag === 2){
            return true;
        } else {
            return false;
        }

    })

    //console.log("Prime Numbers ",resultArray);
    return resultArray;

})(rawData);

console.log("Prime Numbers returned ",resultPrimeNumbersArray)


//=========================================================================================
//e. Return all Palindromes in an array.

let data4 = ["MaxxaM","MadaM","Max","Vikram","PabloolbaP"];

let getAllPalindromes = function(arrayParam) {

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

        //console.log(resultArray);
        return resultArray;

    } else {
        console.log("Null array or No elements to process.");       
        return [];
    }   

}

console.log("Palindromes ",getAllPalindromes(data4));

// IIFE
let palindromes = (function(){

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

        //console.log(resultArray);
        return resultArray;
    } else {
        console.log("Null array or No elements to process.");       
        return [];
    }   


})(data4);

console.log("Palindromes ",palindromes);

//==============================================================================================

//f. Print the median of two sorted arrays 
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

console.log("Median of Array", medianOfArray(finalArray));

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

console.log("Median of Array",medianVal);


//===========================================================================================

//g. Remove duplicates from an array.
let data7 = ['a', 'b', 'c', 'c','a','d','e','f','e'];


let removeDuplicates = function() { 
    console.log(" ==== Anonymous function ==== ");

let resultArray7 = [];

data7.forEach((element) => {

    if(!resultArray7.includes(element)){
        resultArray7.push(element);
    }

});

console.log(resultArray7);

}

removeDuplicates();

// ==== IIFE ====
(function() {

    console.log(" ==== IIFE ==== ");
    let resultArray8 = data7.filter((element, index) => (index == data7.indexOf(element)));
    
    console.log(resultArray8);

})();


//===================================================================================
//h.Rotate an array by k times

let data8 = [4,5,6,7,8,9,10];

let rotateBy = function(dataParam, numberOfTimes) {

    console.log(" Anonymous function ");
    console.log("Before Right Rotation ", dataParam);
    console.log(" Rotate By ",numberOfTimes);
    //Rotate right the array by passed number of times.
   for(let i = 0; i < numberOfTimes; i++){
       let tempVal = dataParam[0];

       for(let k = 0; k < dataParam.length -1; k++){
        dataParam[k] = dataParam[k+1];
       }

       dataParam[dataParam.length -1] = tempVal;
   }
   console.log("After Right Rotation ", dataParam)
  

}

rotateBy(data8,4);

// ==== IIFE ====
(function(dataParam, numberOfTimes) {

    console.log(" ==== IIFE ==== ");

    console.log("Before Right Rotation ", dataParam);
    console.log(" Rotate By ",numberOfTimes);
    //Rotate right the array by passed number of times.
   for(let i = 0; i < numberOfTimes; i++){
       let tempVal = dataParam[0];

       for(let k = 0; k < dataParam.length -1; k++){
        dataParam[k] = dataParam[k+1];
       }

       dataParam[dataParam.length -1] = tempVal;
   }
   console.log("After Right Rotation ", dataParam)
 

})(data8, 2);







    


