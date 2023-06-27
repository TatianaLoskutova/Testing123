var number=function(array){
    let res = []

    for (let i = 1; i <= array.length ; i++) {
        res.push(`${i}: ${array[i-1]}`)
    }

    return res
}