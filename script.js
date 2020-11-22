let buttAdd = document.querySelector('#add');
let buttSubtract = document.querySelector('#subtract');
let input = document.querySelector('input');
buttAdd.addEventListener('click', () => {
    input.value = parseInt(input.value) + 1;

});
buttSubtract.addEventListener('click', () => {
    input.value = parseInt(input.value) - 1;

});

