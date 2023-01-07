

function didit(nums)
{
  return nums
  .toString()
  .split('')
  .map((m)=>Number(m))
  .reverse()
    
}
 console.log(didit(34567)); 