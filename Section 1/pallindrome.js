let n=434
let s=0
let r
let temp=n
while(n!=0)
{ 
       r=n%10;
       s=(s*10)+r;
       n=parseInt(n/10)
}
if(temp==s)
{
    console.log("pallindrome");
}
else{
    console.log("not a pallindrome");
}