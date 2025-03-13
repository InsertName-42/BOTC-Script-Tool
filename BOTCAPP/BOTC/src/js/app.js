document.addEventListener("DOMContentLoaded", function () {
    const characterType = document.getElementById('characterType');
    const nameInput = document.getElementById('characterName');
    const homebrewSection = document.getElementById('homebrewSection');
    const addCharacterBtn = document.getElementById('addCharacterBtn');

    characterType.addEventListener('change', function () {
        homebrewSection.style.display = this.value === 'homebrew' ? 'block' : 'none';
    });

    addCharacterBtn.addEventListener('click', function () {
        const name = nameInput.value.trim();
        let newCharacter;

        if (characterType.value === 'base' && name) {
            FindCharacter.findCharacter(name).then(character => {
                if (character) {
                    let characters = JSON.parse(localStorage.getItem('characters')) || [];
                    characters.push(character);
                    characterList.setCharacters(characters);
                    DisplayCharacters.updateDisplay();
                }
            });
        } else if (characterType.value === 'homebrew') {
            const homebrewCharacter = BuildCharacter.buildCharacter();
            let characters = JSON.parse(localStorage.getItem('characters')) || [];
            characters.push(homebrewCharacter);
            characterList.setCharacters(characters);
            DisplayCharacters.updateDisplay();
        }
        nameInput.value = '';
        if (characterType.value === 'homebrew'){
            document.getElementById('team').value ='';
            document.getElementById('ability').value ='';
            document.getElementById('firstNightReminder').value ='';
            document.getElementById('otherNightsReminder').value ='';
            document.getElementById('tokens').value ='';
        }
    });
});