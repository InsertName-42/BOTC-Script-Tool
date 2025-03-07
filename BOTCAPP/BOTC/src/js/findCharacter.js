//Gets a character from the base characters
class FindCharacter {
    static async findCharacter(name) {
        try {
            const response = await fetch("https://raw.githubusercontent.com/InsertName-42/BOTC-Script-Tool/refs/heads/main/BOTCAPP/BOTC/roles.json");
  
            //Check if the response is successful
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
                    tokens: character.reminders.join(", ") //Create a comma-separated string for tokens
                };
                
                characterList.addCharacter(characterDetails); //Add the character to the character list
                DisplayBuild.displayBuild(characterDetails); //Display the character details
            } else {
                alert("Character not found");
            }
        } catch (error) {
            console.error("Error fetching character data:", error);
            alert("There was an error fetching character data. Please try again later.");
        }
    }
  }