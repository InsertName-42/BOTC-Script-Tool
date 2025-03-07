//Renders the section of the site used for building characters
class DisplayBuild {
    static displayBuild(character) {
        const characterImage = document.getElementById('characterImage');

        //Clear previous content
        characterImage.innerHTML = '';

        const charCard = document.createElement('div');
        charCard.className = 'card mb-3';

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const title = document.createElement('h5');
        title.className = 'card-title';
        title.textContent = character.name || 'Unnamed Character'; //Fallback for character name

        const team = document.createElement('p');
        team.innerHTML = `<strong>Team:</strong> ${character.team || 'N/A'}`;
        
        const ability = document.createElement('p');
        ability.innerHTML = `<strong>Ability:</strong> ${character.ability || 'N/A'}`;

        const firstNightReminder = document.createElement('p');
        firstNightReminder.innerHTML = `<strong>First Night Reminder:</strong> ${character.firstNightReminder || 'N/A'}`;

        const otherNightsReminder = document.createElement('p');
        otherNightsReminder.innerHTML = `<strong>Other Nights Reminder:</strong> ${character.otherNightReminder || 'N/A'}`;

        const tokens = document.createElement('p');
        tokens.innerHTML = `<strong>Tokens:</strong> ${character.tokens || 'N/A'}`;

        cardBody.appendChild(title);
        cardBody.appendChild(team);
        cardBody.appendChild(ability);
        cardBody.appendChild(firstNightReminder);
        cardBody.appendChild(otherNightsReminder);
        cardBody.appendChild(tokens);

        charCard.appendChild(cardBody);
        characterImage.appendChild(charCard);
    }
}