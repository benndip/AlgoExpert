function calculate(s) {
    let i = 0

    let splittedString = s.split('')
    let comp = []
    while(i<splittedString.length){
        let currentStringToConsider = splittedString[i]
        let currentCount = 0
        for (let j = i; j < splittedString.length; j++) {
            if(splittedString[j] == currentStringToConsider && currentCount<9){
                currentCount += 1
            }else{
                let newStringToAppend = currentCount + currentStringToConsider
                comp = [...comp,newStringToAppend]
                i=j
                break
            }

            if (j === splittedString.length - 1) {
                comp.push(currentCount + currentStringToConsider);
                i = splittedString.length;
            }
        }
    }

    return comp.join('')

}

console.log(calculate("bbbbbbbbbbbaabbc"))