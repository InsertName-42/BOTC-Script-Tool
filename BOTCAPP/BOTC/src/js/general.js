//Handles base html
import { characterList } from './characterList.js';
import { FindCharacter } from './findCharacter.js';
import { DisplayCharacters } from './displayCharacters.js';
import { BuildCharacter } from './buildCharacter.js';

document.addEventListener("DOMContentLoaded", function () {
    const characterType = document.getElementById('characterType');
    const nameInput = document.getElementById('characterName');
    const homebrewSection = document.getElementById('homebrewSection');
    const addCharacterBtn = document.getElementById('addCharacterBtn');
    const generateHomebrewCharacter = document.getElementById('generateHomebrewCharacter');

    characterType.addEventListener('change', function () {
        if (this.value === 'homebrew') {
            homebrewSection.style.display = 'block';
        } else {
            homebrewSection.style.display = 'none';
        }
    });

    //Add character based on selection
    addCharacterBtn.addEventListener('click', function () {
        const name = nameInput.value.trim();
        if (characterType.value === 'base' && name) {
            FindCharacter.findCharacter(name); //Use the imported FindCharacter
        } else if (characterType.value === 'homebrew') {
            const homebrewCharacter = BuildCharacter.buildCharacter();

            //Add the character to local storage
            let characters = characterList.getCharacters();
            characters.push(homebrewCharacter);
            characterList.setCharacters(characters);

            console.log(homebrewCharacter)
            DisplayCharacters.updateDisplay(homebrewCharacter); //Call to display the homebrew character, updated line

            //Clear
            nameInput.value = '';
            document.getElementById('team').value = '';
            document.getElementById('ability').value = '';
            document.getElementById('firstNightReminder').value = '';
            document.getElementById('otherNightsReminder').value = '';
            document.getElementById('tokens').value = '';
        }
    });
});