function validaArray(arr, num){
    try{
        if(!arr && !num) throw new ReferenceError("Envie os parametros");

        if (typeof arr !== 'object')
            throw new TypeError('Array precisa ser do tipo object');

        if (typeof num !== 'number')
            throw new TypeError('Array precisa ser do tipo number');

        if (arr.length !== num) throw new RangeError('Tamanho inválido');

        return arr;
    }
    catch(e){
        if (e instanceof ReferenceError){
            console.log("Este erro é ReferenteError")
            console.log(e.message)
        } else if (e instanceof TypeError){
            console.log("Este erro é TypeError")
            console.log(e.message)
        } else if (e instanceof RangeError){
            console.log("Este erro é RangeError")
            console.log(e.message)
        } else {
            console.log("Tipo de erro nao esperado: "+e)
        }
    }
    
}
console.log(validaArray());
console.log(validaArray(5, 5));
console.log(validaArray([],'a'));
console.log(validaArray([], 5));
console.log(validaArray([1,2,3,4,5], 5));