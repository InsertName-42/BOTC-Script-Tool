class BuildCharacter {
  static buildCharacter() {
      const characterDetails = {
          name: document.getElementById('characterName').value,
          team: document.getElementById('team').value,
          ability: document.getElementById('ability').value,
          firstNightReminder: document.getElementById('firstNightReminder').value,
          otherNightReminder: document.getElementById('otherNightsReminder').value,
          tokens: document.getElementById('tokens').value
      };
      
      characterList.addCharacter(characterDetails); //Adding the character to the character list
      displayScript.updateDisplay(); //Update the display with new character data
  }
}