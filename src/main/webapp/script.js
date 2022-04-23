let nextNumber = document.querySelector('#number');
const btnAdd = document.querySelector('button');
let textArea = document.querySelector('#number-list');
const btnSubmit = document.querySelector('.btnSubmit');
const listResult = document.querySelectorAll('.result');
//textArea.value = 2;
btnAdd.addEventListener('click', addNumberList);
btnSubmit.addEventListener('click', showResult);

function showResult(e){
    e.preventDefault();

    listResult.forEach(element => {
        element.classList.add('ativo')
    })
}

function addNumberList() {
    if (!textArea.value) {
        textArea.value = nextNumber.value;
        nextNumber.value = '';
    } else {
        textArea.value += ', ' + nextNumber.value;
        nextNumber.value = '';
    }
}
