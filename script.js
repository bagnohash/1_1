const ex1button = document.getElementById('ex1_button');
const ex1content = document.getElementById('ex1_content');

ex1button.addEventListener('click', () => {
    ex1content.textContent = '';

    for (let i = 0; i <= 9; i++) {
        ex1content.textContent += i;
        if (i != 9) ex1content.textContent += ', ';
    }
})

const ex2text = document.getElementById('ex2_text');
const ex2content = document.getElementById('ex2_content');

ex2text.addEventListener('keyup', () => {
    ex2content.textContent = '';

    const text = ex2text.value;
    const letters = /[a-zA-Z]/;
    const specialCharacters = /[^a-zA-Z0-9]/;

    if (text.length !== 9) {
        ex2content.textContent = 'Długość numeru musi być równa 9';
    }
    if (letters.test(text)) {
        ex2content.textContent = 'Numer nie może zawierać liter';
    }
    if (specialCharacters.test(text)) {
        ex2content.textContent = 'Numer nie może zawierać znaków specjalnych';
    }
    if (text.length === 9 && !letters.test(text) && !specialCharacters.test(text)) {
        ex2content.textContent = 'Numer telefonu jest poprawny';
    }
});