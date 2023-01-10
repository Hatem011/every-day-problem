function countSheap()
{
arr=[true,true,true,false,true,false,true,false,true,false,true]
    var counter=0;
    arr.map((x)=>{
        if(x==true)
        {
            counter++;
        }
    })
    return counter;
}
console.log(countSheap()); 