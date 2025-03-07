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
            FindCharacter.findCharacter(name); //Fetch and add base character
        } else if (characterType.value === 'homebrew') {
            const homebrewCharacter = {
                name: name,
                team: document.getElementById('team').value,
                ability: document.getElementById('ability').value,
                firstNightReminder: document.getElementById('firstNightReminder').value,
                otherNightReminder: document.getElementById('otherNightsReminder').value,
                tokens: document.getElementById('tokens').value,
            };
            DisplayBuild.displayBuild(homebrewCharacter); //Call to display the homebrew character
            characterList.addCharacter(homebrewCharacter); //Add homebrew character to local storage
        }
    });
});