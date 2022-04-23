let nextNumber = document.querySelector('#number');
const btnAdd = document.querySelector('button');
let textArea = document.querySelector('#number-list');
//textArea.value = 2;
btnAdd.addEventListener('click', addNumberList);

function addNumberList() {
    if (!textArea.value) {
        textArea.value = nextNumber.value;
        nextNumber.value = '';
    } else {
        textArea.value += ', ' + nextNumber.value;
        nextNumber.value = '';
    }
}
