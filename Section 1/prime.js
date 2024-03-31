let n=6
let c=0
for(let i=1;i<=n;i++)
{
    if(n%i===0){
        c++;
    }
   
} 
if(c===2)
{
    console.log("prime");
}
else
{
    console.log("not a prime number");
}
