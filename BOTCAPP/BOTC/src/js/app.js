//Primary entry, adds event handlers
import html2pdf from 'html2pdf.js';
import { BuildCharacter } from './buildCharacter.js';
import { characterList } from './characterList.js';
import { DisplayCharacters } from './displayCharacters.js';
import { FindCharacter } from './findCharacter.js';
import { BuildScript } from './buildScript.js';
import { PrintScript } from './printScript.js';
import { ScriptUpdater } from './scriptUpdater.js';

import '../css/styles.css';

document.addEventListener("DOMContentLoaded", function () {
    //Load characters from local storage
    const storedCharacters = localStorage.getItem('characters');
    if (storedCharacters) {
        characterList.setCharacters(JSON.parse(storedCharacters));
        DisplayCharacters.updateDisplay();
        ScriptUpdater.updateScriptHtml('scriptImage');
    }

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
                    ScriptUpdater.updateScriptHtml('scriptImage');
                    saveCharactersToLocalStorage();
                }
            });
        } else if (characterType.value === 'homebrew') {
            const homebrewCharacter = BuildCharacter.buildCharacter();
            let characters = characterList.getCharacters();
            characters.push(homebrewCharacter);
            characterList.setCharacters(characters);
            DisplayCharacters.updateDisplay();
            ScriptUpdater.updateScriptHtml('scriptImage');
            saveCharactersToLocalStorage();
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

    const downloadPdfBtn = document.getElementById('downloadPdfBtn');
    if (downloadPdfBtn) {
        downloadPdfBtn.addEventListener('click', function () {
            setTimeout(function () {
                PrintScript.printToPdf('scriptImage', 'botc_script.pdf');
            }, 500);
        });
    }

    function saveCharactersToLocalStorage() {
        localStorage.setItem('characters', JSON.stringify(characterList.getCharacters()));
    }

    ScriptUpdater.updateScriptHtml('scriptImage');
});