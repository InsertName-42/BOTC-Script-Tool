document.addEventListener("DOMContentLoaded", function () {
    const characterType = document.getElementById('characterType');
    const nameInput = document.getElementById('characterName');
    const homebrewSection = document.getElementById('homebrewSection');
    const addCharacterBtn = document.getElementById('addCharacterBtn');
    const generateHomebrewCharacter = document.getElementById('generateHomebrewCharacter');

    // Show or hide homebrew section based on character type selection
    characterType.addEventListener('change', function () {
        if (this.value === 'homebrew') {
            homebrewSection.style.display = 'block'; // Show the homebrew section
        } else {
            homebrewSection.style.display = 'none'; // Hide the homebrew section
        }
    });

    // Add character based on selection
    addCharacterBtn.addEventListener('click', function () {
        const name = nameInput.value.trim();
        if (characterType.value === 'base' && name) {
            findCharacter(name);
        } else if (characterType.value === 'homebrew') {
            const homebrewCharacter = {
                name: name,
                team: document.getElementById('team').value,
                ability: document.getElementById('ability').value,
                firstNightReminder: document.getElementById('firstNightReminder').value,
                otherNightReminder: document.getElementById('otherNightsReminder').value,
                tokens: document.getElementById('tokens').value,
            };
            //add the character to local storage
            let characters = characterList.getCharacters();
            characters.push(homebrewCharacter);
            characterList.setCharacters(characters);

            console.log(homebrewCharacter)
            DisplayBuild.displayBuild(homebrewCharacter); // Call to display the homebrew character

            // Clear input fields
            nameInput.value = '';
            document.getElementById('team').value = '';
            document.getElementById('ability').value = '';
            document.getElementById('firstNightReminder').value = '';
            document.getElementById('otherNightsReminder').value = '';
            document.getElementById('tokens').value = '';
        }
    });
});