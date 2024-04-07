const phonearray=[
    {
        brand:"Samsung",
        model:'S24',
        price:120000,
        color:['white','black','graphite']   
    },
    {
        brand:"Apple",
        model:'iphone 15',
        price:12000,
        color:['black','blue']   
    },
    {
        brand:"Realme",
        model:'narzo',
        price:1200,
        color:['green','black','blue']   
    },
    {
        brand:"Samsung",
        model:'Z-fold',
        price:164000,
        color:['gray','black','green']   
    }
]

// const fil=phonearray.filter((pri)=>{
//           return pri.brand==="Samsung"
// })
// console.log(fil);

// const col=phonearray.filter((cl)=>{
//     return cl.color.includes("blue")
// })
// console.log(col);

const brand=phonearray.map((br)=>{
    return br.brand
})
console.log(new Set(brand));