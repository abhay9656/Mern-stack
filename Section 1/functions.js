// function abc(a,b){
//     c=a+b;
//     console.log(c);
// }
// abc(10,34)


// const fun = function avg(m1,m2,m3){
//      return (m1+m2+m3)/3;
// }
// const result=fun(20,30,40)
// console.log(result);
// console.log(fun(20,30,60));

// const factorial =(n)=>{
//     let i;
// let fact=1
// for(i=1;i<=n;i++)
// {
//     fact=fact*i
// }
// return fact
// }

// const fact= factorial(7)
// console.log(fact);

// perfect square

const perfect=(n)=>{
    let sq=n**0.5
    console.log(sq);
    // console.log(Number.isInteger(sq));
    return Number.isInteger(sq)
}
const pf=perfect(24)
console.log(pf);
if(pf)
{
    console.log("perfect ");
}
else
{
    console.log("not");
}
