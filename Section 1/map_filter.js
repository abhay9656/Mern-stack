
const num=[4,5,7,8,9,12]

// const newNums=[];
// for(let n of num)
// {
//     newNums.push(n**3)
// }
// console.log(newNums);

// const newnum = num.map( (a)=>{
//     return a**3
// })


// const name=['adarsh','shaurya','avijeet','yash','atul','arpit']
//  const upper=name.map((b)=>{
//     return b.toUpperCase()
//  })

//  console.log(upper);
// // console.log(newnum);

 //filter
const even= num.filter((n)=>{
   return n%2===0
})
console.log(even);