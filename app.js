const regex_reverse = /[0-9]+/
const custom_reverse = (input_reverse) => {
    let arrReverse = input_reverse.split("");
    let getArrNumber = []
    let getArrAlphabet = []
    let resultArrAlphabetReverse = []
    for (let i = 0; i < arrReverse.length; i++){
        if (regex_reverse.test(arrReverse[i])) {
            getArrNumber.push(arrReverse[i]);
        }
        else {
            getArrAlphabet.push(arrReverse[i])
        }
    }
    getArrNumber = getArrNumber.join("")

    let j = getArrAlphabet.length - 1;
    for ( j; j >= 0; j--){
        resultArrAlphabetReverse.push(getArrAlphabet[j]);
    }
    resultArrAlphabetReverse.push(getArrNumber)
    resultArrAlphabetReverse = resultArrAlphabetReverse.join("")
    return resultArrAlphabetReverse
}

const count_character = (input_character) => {
    let arrCharacter = input_character.split(" ");
    let countCharacter = 0;
    for (let i = 0; i < arrCharacter.length; i++){
        arrChildCharacter = arrCharacter[i].split("")
        if (arrChildCharacter.length > countCharacter) {
            countCharacter = arrChildCharacter.length;
        }
    }
    return countCharacter
}

const search_word = () => {
    const input = ['xc', 'dz', 'bbb', 'dz']  
    const query = ['bbb', 'ac', 'dz']
    let output = []
    for (let i = 0; i < query.length; i++){
        let count = 0;
        for (let j = 0; j < input.length; j++){
            if (query[i] == input[j]) {
                count++;
            }
        }
        output.push(count)
    }
    return output;
}

const matrix = () => {
    const matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]
    let diagonalPertama = 0;
    let diagonalKedua = 0;
    let d1 = 0;
    let d2 = 2;
    for (let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix[i].length; j++){
            if (j == d1) {
                diagonalPertama += matrix[i][j]
            }
            if (j == d2) {
                diagonalKedua += matrix[i][j]
            }
        }
        d1++
        d2--
    }
    return diagonalPertama - diagonalKedua;
}

console.log("Jawaban Nomor 1")
console.log(custom_reverse("NEGIE1"))
console.log("Jawaban Nomor 2")
console.log("Mengerjakan : " + count_character("Saya sangat senang mengerjakan soal algoritma")+" character")
console.log("Jawaban Nomor 3")
console.log(search_word())
console.log("Jawaban Nomor 4")
console.log(matrix())