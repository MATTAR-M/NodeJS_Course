// user = {
//     name:"mohamed",
//     age : 22,
//     gender : "male",
//     wife:{
//         name:"aya",
//         age: 21,
//         son: {
//             name:"ahmed",
//             age : 2,
//         }
//     },
//     x:1,
//     y:2,
//     z:3,

// }



// let {name, age, role = "admin",wife,son,...rest}=user
// let{name:wifeName,age:wifeAge,son}= user.wife

// console.log(name,age,role,wife,son)
// let arr =[{name:"sara",age:62},1,2,3,4,5,6,7,8,9]
// let [x,y,z] = arr
// console.log({x,y,z});

// let {name} = x
// console.log(name)
//     eat: function(){
//         console.log(`${this.name} ${"is eating carrots"}`)
//         const that = this
//         let swim = ()=>{
//             console.log(`${this.name} ${"swims"}`)
//         }
//         swim()
//         let play = ()=>{
//             console.log(`${this.name} ${"play warzone"}`)
//         }
//         play()
//     }
// }
// user.eat()
// const arr1 = [1,10,20,2,3,4,5,6,7,8,9]
// arr2=arr1
// console.log(Array.from(arr2).sort((a,b)=>a-b))
// console.log(arr1)
// console.log(arr2)
// console.log(arr2.sort( (a,b)=>b-a))
// console.log(arr1);
// for(var x = 0;x<arr1.length;x++){
//     console.log(x)
// }
// console.log(x)
// for(let key of arr1.entries()){
//     console.log(key[1]);
// }
// arr1.forEach((ele,index,arr1)=>{
//     console.log(ele,index);
// })
// arr1.find((ele)=>{
// })
// function outer(){
//     let x = 5 
//     return function inner(){
//         console.log(x)
//     }
// }
// const outter = outer()
// outter()


// const promise = new Promise((r,j)=>{
//     console.log("me")
//     if(5>4){
//     r("me2")
//     }
//     else{
//         j()
//     }
// })
// promise.then((res)=>{
//     console.log(res)
// }).catch((error)=>{
//     console.log("error..........",error)
// })


console.log("me")
console.log("hello world");





