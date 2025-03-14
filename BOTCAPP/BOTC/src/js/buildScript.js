export class BuildScript {
    static organizeCharacters(characters) {
        if (!characters || characters.length === 0) {
            return "No characters provided.";
        }

        //Group characters by team
        const teams = {};
        characters.forEach(character => {
            if (!teams[character.team]) {
                teams[character.team] = [];
            }
            teams[character.team].push(character);
        });

        //Generate HTML for each team
        let html = '';
        for (const team in teams) {
            if (teams.hasOwnProperty(team)) {
                html += `<h2>${team}</h2>`;
                html += '<div style="display: flex; flex-wrap: wrap;">'; //Start container

                teams[team].forEach(character => {
                    html += `
                        <div style="border: 1px solid #ccc; padding: 10px; margin: 5px; width: 300px; box-sizing: border-box;">
                            <h3>${character.name}</h3>
                            <p>${character.ability}</p>
                            <p><strong>First Night:</strong> ${character.firstNightReminder || 'N/A'}</p>
                            <p><strong>Other Nights:</strong> ${character.otherNightReminder || 'N/A'}</p>
                            <p><strong>Tokens:</strong> ${character.tokens || 'N/A'}</p>
                        </div>
                    `;
                });

                html += '</div>'; //End container
            }
        }

        return html;
    }
}