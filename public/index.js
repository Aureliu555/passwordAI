const mainForm = document.getElementById("mainForm")
const symbols = [
    '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';',
    '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~', '«','·', '¸'
]

const lettersAndNumbers = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T','U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
    'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n','o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
    'y', 'z'
]

mainForm.addEventListener("submit", (ev) => {
    ev.preventDefault()
    const keyWord = document.getElementById("keyWord")
    const offset = document.getElementById("offset")
    const res = createSafePassword(keyWord.value, parseInt(offset.value))
    const result = document.getElementById("result")
    result.innerText = res
})

function createSafePassword(keyWord, offset) {
    let shiftedStr = symbols[keyWord.length]
    for (const element of keyWord) {
        let index = lettersAndNumbers.findIndex(item => item === element)
        index = getValidIndex(index, offset)
        let shiftedChar = lettersAndNumbers[index]
        shiftedStr += shiftedChar
    }
    shiftedStr += keyWord.length
    return shiftedStr
}

function getValidIndex(idx, offset) {
    if (idx + offset > (lettersAndNumbers.length-1)) {
        return (idx + offset) % lettersAndNumbers.length
    } else {
        return idx + offset
    }
}