let n=434824585
let s=0
let r
while(n!=0)
{ 
       console.log(s);
       r=n%10;
       s=(s*10)+r;
       n=Math.floor(n/10)
}
console.log(s);