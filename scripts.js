// variant 1 using index Of
function firstNonRepeatingCharacterUsingIndexOf(str){
    for(let i = 0; i < str.length; i++){
        let val = str[i];

        if (str.indexOf(val) === str.lastIndexOf(val)){
            return str[i]
        }
    }

    return null;
}

// varian 2 using object keys 
function firstNonRepeatingCharacterUsingObjectKeys(str) {
    let arr = str.split('');

    let obj = arr.reduce((aggr,val)=>{
        if(aggr[val] === undefined){
            aggr[val] = 1
        }else{
            aggr[val]++
        }
        return aggr
    },{})

    let keys = Object.keys(obj);
    for(let i = 0;i < keys.length;i++){
        const key = keys[i];

        if(obj[key] === 1){
            return key;
        }
    }
    return null;
}

console.log(firstNonRepeatingCharacterUsingObjectKeys("abcabbiefc"))