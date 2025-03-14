import { BuildCharacter } from './buildCharacter.js';
import { characterList } from './characterList.js';
import { DisplayCharacters } from './displayCharacters.js';
import { FindCharacter } from './findCharacter.js';
import { BuildScript } from './buildScript.js';
import { PrintScript } from './printScript.js';

import html2pdf from 'html2pdf.js';

import '../css/styles.css';

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

        if (characterType.value === 'base' && name) {
            FindCharacter.findCharacter(name).then(character => {
                if (character) {
                    let characters = characterList.getCharacters();
                    characters.push(character);
                    characterList.setCharacters(characters);
                    DisplayCharacters.updateDisplay();
                }
            });
        } else if (characterType.value === 'homebrew') {
            const homebrewCharacter = BuildCharacter.buildCharacter();
            let characters = characterList.getCharacters();
            characters.push(homebrewCharacter);
            characterList.setCharacters(characters);
            DisplayCharacters.updateDisplay();
            const scriptHtml = BuildScript.organizeCharacters(characters);
            const scriptContainer = document.getElementById('scriptImage');
            if (scriptContainer) {
                scriptContainer.innerHTML = scriptHtml;
            }
        }

        nameInput.value = '';
        if (characterType.value === 'homebrew') {
            document.getElementById('team').value = '';
            document.getElementById('ability').value = '';
            document.getElementById('firstNightReminder').value = '';
            document.getElementById('otherNightsReminder').value = '';
            document.getElementById('tokens').value = '';
        }
    });
    const printPdfBtn = document.getElementById('printPdfBtn');
    if (printPdfBtn) {
        printPdfBtn.addEventListener('click', function () {
            const characters = characterList.getCharacters();
            const scriptData = BuildScript.organizeCharacters(characters); // Get the script data
            PrintScript.printToPdf(scriptData, 'botc_script.pdf'); // Generate PDF
        });
    }
});