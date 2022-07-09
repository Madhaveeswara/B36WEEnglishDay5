/*======================================================================================================
                           ARROW FUNCTIONS 
  ======================================================================================================*/ 
//a. Print Odd numbers in an array
let data9 = [2,7,9,5,4,13,3,15,16];

let printOddNumbersFuncV2 = ( arrayParam ) => {

    console.log(" =====  Arrow function  ===== ")

    if(arrayParam != null && arrayParam.length > 0) {

        arrayParam.forEach(element => {
            if(element%2){
                console.log(element);
            }
        });

    } else {
        console.log("Null array or No elements to process.");
    }

}

printOddNumbersFuncV2(data9);


//=====================================================================================
//b. Convert all Strings to Title Caps in a String array
let data10 = ["new delhi", "new york", "abu dhabi", "saudi arabia"];

let titleCapsStringsV2 = ( stringArrayParam ) => {

    console.log(" =====  Arrow function  ===== ")

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

titleCapsStringsV2(data10);


//===========================================================================================
//c. Sum of all numbers in an array
let data11 = [1,2,3,4,5,6,7,8];

let sumOfAllNumbersV2 = (arrayParam) => {
    
    console.log(" =====  Arrow function  ===== ");

    if(arrayParam != null && arrayParam.length > 0) {

    let totalValue = arrayParam.reduce(function (total, currentValue, currentIndex, arr){
         
       return (total = total + currentValue);

    }, 0);

    console.log("Array of numbers ", arrayParam);
    console.log("Sum of all numbers ", totalValue);

   } else {
    console.log("Null array or No elements to process.");       

   }  

 }

 sumOfAllNumbersV2(data11);

 //==========================================================================================
//d. Return Prime Numbers in an array.
 let rawData2 = [1,2,4,5,13,14,18,17,20,22,23,24,21,27,28,29,30,31,32,36,37,38,41,43];

 let primeNumbersArray = (arrayParam) => {

      // A Prime number is divisible by 1 and itself 
    // Check for this condition for every element in the array.
        let resultArray = arrayParam.filter((element) => {
                    
            let flag = 0;

            //1 is not a prime number.
            if(element === 1) return false;

            for(let j = 1; j <=element; j++)
            if(element%j === 0){
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

console.log("Prime Numbers Array ",primeNumbersArray(rawData2));

//================================================================================
//e. Return all Palindromes in an array.

let rawData3 = ["MaxxaM","MadaM","Max","Vikram","PabloolbaP"];

let getPalindromesArray = (arrayParam) => {

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

console.log("Palindromes ", getPalindromesArray(rawData3))


