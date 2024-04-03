

// const obj={
//     name:'abc',
//     email:"abc@gmail.com",
//     password:"12345"
// }

// console.log(obj);
// console.log(obj.email);
// console.log(obj['password']);

// let key="name"
// console.log(obj[key]);

// obj.password="hello"
// console.log(obj);
// obj.address="lucnow"
// console.log(obj);

// console.log( Object.keys(obj) );
// console.log( Object.values(obj));


// const smartphone={
//     brand:"Samsung",
//     model:'S24',
//     price:120000,
//     color:['white','black','blue']
// }
// console.log(smartphone.color[1][3]);


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
phonearray[3].color[0]="olive"
console.log(phonearray);
console.log(phonearray[2].model);
console.log(phonearray[3].price);
console.log(phonearray.length);