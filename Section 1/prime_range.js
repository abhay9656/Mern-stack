let n=360;
let i;let j;let c
for(i=200;i<=n;i++)
{
    c=0;
    for(j=1;j<=i;j++)
    {
        if(i%j===0)
        {
            c++;
        }
    }
    if(c==2)
    {
        console.log(i);
    }
}
