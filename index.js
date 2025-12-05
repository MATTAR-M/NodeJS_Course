//==================================================Part 1=================================================================//
//==================================================quesiton 1===========================================================//
function sumString(){
let x = "123"
console.log(Number(x)+7)
};
sumString()




//==================================================quesiton 2===========================================================//
function falsy(val){
    if(val!=true){
        console.log('"invalid"')
    }
    else{
        console.log('"valid"')
    }
};
falsy(0)



//=================================================question 3===========================================================//
function oddNums(){
    for(let i=0;i<10;i++){
    if(i%2!=0){
        console.log(i)
    }
    }
}
oddNums()






//=================================================question 4===========================================================//
function evenArray(arr){
    console.log(arr.filter((ele)=>{return ele%2==0}))
}
evenArray([1,2,3,4,5])




//=================================================question 5===========================================================//
function sumTwoArray(arr1,arr2){
    let arr3=[...arr1,...arr2]
    console.log(arr3)
}
sumTwoArray([1,2,3],[4,5,6])






//=================================================question 6=======================================================//
function weekDays(num){
    switch (num) {
        case 1:
            console.log("saturday")
            break;
         case 2:
            console.log("sunday")
            break;
        case 3:
            console.log("monday")
            break;
        case 4:
            console.log("tuesday")
            break;
        case 5:
            console.log("wednesday")
            break;
        case 6:
            console.log("thursday")
            break;
        case 7:
            console.log("friday")
            break;
        default:
            break;
    }
}
weekDays(1)







//===================================================question 7=============================================//
function returnLength(arr){
    console.log(arr.map((ele)=>{return ele.length}))
}
returnLength(["a", "ab", "abc"])





//===================================================question 8============================================//
function isDivisible(num){
    if(num%3==0&&num%5==0){
        console.log("Divisible by both")
    }
}
isDivisible(15)




//==================================================question 9============================================//
const numberSquared = (num)=>{
    return num*num
}
console.log(numberSquared(5))





//==================================================quesiton 10===========================================//
 function foramttedString({name,age}){
    console.log(`${name} is ${age} years old`) 
 }
 foramttedString(constperson={name:'john',age:25})




 //==================================================question 11===========================================//
function sumAllPara(...nums){
    let result=0
    for(let num of nums){
        result += num
    }
    console.log(result)
}
sumAllPara(1,2,3,4,5)






//==============================================================question 12===============================================//
function message(){
    return new Promise((resolve)=>{
        setTimeout(() => {
                console.log("success")
                resolve("success")
            }, 
            3000);
        })
    }
message()




//===============================================================question 13====================================================//
function maxNumber(arr){
    console.log(Math.max(...arr))
}
maxNumber([1, 3, 7, 2, 4])



//===============================================================question 14===================================================//
function objInfo(oi){
    console.log(Object.keys(oi))
}
objInfo({ name: "John", age: 30 })



//===============================================================question 15=======================================================//
function splitWord(str){
    console.log(str.split(" "))
}
splitWord("The quick brown fox")



//===============================================================Part 2============================================================//
//===============================================================question 1========================================================//
// the for of loop is asynchronous, iterates over the actual values of the list/array that means it directly access the the element value and waits for each element to resolve
//the for each is Synchronous , iterates over the index and it doesn't wait for element to reslove






//==============================================================question 2========================================================//
//hoisting is the process of moving declared variables to the top of the code base and assining them with undefined until the varaible is reassigned with the given value in the code base
//TDZ is the the zone that hold the variables (let,const) only, that have been declared until these variables are reached and reassigned in the codebase 
//example: 
// console.log(x)
// var x = 5
// output: undefiend
//example 2:
// console.log(y)
//    --\
//   ----| this is the TDZ
//    --/
// const y = 2
// output :error


//==============================================================question 3==================================================================//
// == compare between the values only 
//example : "5"==5 true because js have type correction this statement is true 
//but === compare between value and type so the Aforementioned statement is false 





//=============================================================question 4===================================================================//
// try catch is used to handle error in the code if the try part throw an error the catch part doesn't execute 
// it is important in async because async operation can fail for many reasons :connection issues ,server issues and more so the try catch prevent this



//=============================================================question 5===================================================================//
//type conversion is when the developer manually change the variable type like  number("123") is now 123
//type Coercion is when automatically change the type of a variable like "5"==5 is true



