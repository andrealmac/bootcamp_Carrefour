const maca={
    value:2,
}
const laranja ={
    value:3,
}
function mapComTHis(arr,thisArg){
    return arr.map(function(item){
        return item*this.value;
    },thisArg);
}
const nums=[1,2];
console.log('this->maça',mapComTHis(nums,maca));
console.log('this->laranja',mapComTHis(nums,laranja));



function mapSemThis(arr){
   return arr.map(function(item){
        return item*2;
    });
}
const numss =[2,4,6,8,10];
console.log(mapSemThis(numss));
//mantem o array original
console.log(numss);