let n=43
let s=0
let r
while(n!=0)
{
       r=n%10;
       s=(s*10)+r;
       n=Math.floor(n/10)
}
console.log(s);