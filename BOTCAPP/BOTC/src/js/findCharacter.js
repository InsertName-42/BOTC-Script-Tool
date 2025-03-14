//Finds existing characters
import { characterList } from './characterList.js';
import { DisplayCharacters } from './displayCharacters.js';
import { ScriptUpdater } from './scriptUpdater.js';

export class FindCharacter {
    static async findCharacter(name) {
        try {
            const response = await fetch("https://raw.githubusercontent.com/InsertName-42/BOTC-Script-Tool/refs/heads/main/BOTCAPP/BOTC/roles.json");

            if (!response.ok) {
                throw new Error(`Network response was not OK: ${response.statusText}`);
            }

            const data = await response.json();
            const character = data.find(char => char.name.toLowerCase() === name.toLowerCase());

            if (character) {
                const characterDetails = {
                    name: character.name,
                    team: character.team,
                    ability: character.ability,
                    firstNightReminder: character.firstNightReminder,
                    otherNightReminder: character.otherNightReminder,
                    tokens: character.reminders.join(", ")
                };

                let characters = characterList.getCharacters();
                characters.push(characterDetails);
                characterList.setCharacters(characters);

                DisplayCharacters.updateDisplay();

                ScriptUpdater.updateScriptHtml('scriptImage');
            } else {
                alert("Character not found");
            }
        } catch (error) {
            console.error("Error fetching character data:", error);
            alert("There was an error fetching character data. Please try again later.");
        }
    }
}