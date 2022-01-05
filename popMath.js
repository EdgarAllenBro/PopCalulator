// pop is population at start of year
// per the number of percentage growth
// aug is the flat number addition population
// P is the population we are looking to get to
const popGrowth =(pop,per,aug,p)=>{
let answer = 0
while (pop<p){
{let sum = pop+Math.floor(pop*per*0.01)+aug;
    // console.log(sum)
    pop=sum;
    answer++
    // console.log(answer)
}}
return answer
}

console.log(popGrowth(1500000, 2.5, 10000, 2000000))