export class DisplayCharacters {
    static updateDisplay(character = null) {
        const characterImage = document.getElementById('characterImage');
        characterImage.innerHTML = '';

        let characters = [];
        if (character) {
            // Display a single character
            characters.push(character);
        } else {
            // Display all characters from local storage
            characters = JSON.parse(localStorage.getItem('characters')) || [];
        }

        characters.forEach(character => {
            //Create a card element for each character
            const charCard = document.createElement('div');
            charCard.className = 'card mb-3';

            //Create card body
            const cardBody = document.createElement('div');
            cardBody.className = 'card-body';

            //Create and append character details
            const title = document.createElement('h5');
            title.className = 'card-title';
            title.textContent = character.name;

            const team = document.createElement('p');
            team.innerHTML = `<strong>Team:</strong> ${character.team}`;

            const ability = document.createElement('p');
            ability.innerHTML = `<strong>Ability:</strong> ${character.ability}`;

            const firstNightReminder = document.createElement('p');
            firstNightReminder.innerHTML = `<strong>First Night Reminder:</strong> ${character.firstNightReminder || 'N/A'}`;

            const otherNightsReminder = document.createElement('p');
            otherNightsReminder.innerHTML = `<strong>Other Nights Reminder:</strong> ${character.otherNightReminder || 'N/A'}`;

            const tokens = document.createElement('p');
            tokens.innerHTML = `<strong>Tokens:</strong> ${character.tokens || 'N/A'}`;

            //Add all character details to the card body
            cardBody.appendChild(title);
            cardBody.appendChild(team);
            cardBody.appendChild(ability);
            cardBody.appendChild(firstNightReminder);
            cardBody.appendChild(otherNightsReminder);
            cardBody.appendChild(tokens);

            charCard.appendChild(cardBody);
            //Append the card to the character image section
            characterImage.appendChild(charCard);
        });
    }
}