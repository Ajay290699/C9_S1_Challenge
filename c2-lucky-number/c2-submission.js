let n = 31052022;
// Write solution code here to find the lucky number
var rem,sum;
do
{
    sum=0;
    while(n>0)
    {
  rem= n%10;
  sum=sum+rem;
  n=parseInt(n/10);
    }
    n=sum;
} while(n>9);


console.log(`Your Lucky Number is ${sum}`);


// // sum = 0

// rem = 2, 2, 0, 2, 5, 0, 1, 3

// sum = 0+2= 2 +2 = 4 +0 = 4+2 = 6+5 = 11+0 = 11+1 = 12+3 = 15
// n = 0
