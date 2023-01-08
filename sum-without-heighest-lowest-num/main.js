function sumArray(arr)
{
    if(arr==null) return 0;
    let maxNum=Math.max(...arr);
    let minNum=Math.min(...arr);
    let filteredArray=arr.filter((x)=> x!== maxNum && x!== minNum )
    let sumArray=filteredArray.reduce((acc,current)=>acc+current,0)
    return sumArray;
}
console.log(sumArray([1,3,5,6,7,8]));