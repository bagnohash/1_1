const ex1button = document.getElementById('ex1_button');
const ex1content = document.getElementById('ex1_content');

ex1button.addEventListener('click', () => {
    ex1content.textContent = '';

    for (let i = 0; i <= 9; i++) {
        ex1content.textContent += i;
        if (i != 9) ex1content.textContent += ', ';
    }
})