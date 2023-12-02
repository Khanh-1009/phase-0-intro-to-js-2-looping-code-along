// Code your solutions in this file

function countDown(num) {
    while (num >= 0) {
        console.log(num)
        num--
    }
}

function writeCards(strName, eveName){
    const newArray = []
    for (let i = 0; i < strName.length; i += 1) {
        newArray.push(`Thank you, ${strName[i]}, for the wonderful ${eveName} gift!`)
    }
    return newArray
}