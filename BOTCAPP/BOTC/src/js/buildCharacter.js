export class BuildCharacter {
  static buildCharacter() {
      return {
          name: document.getElementById('characterName').value,
          team: document.getElementById('team').value,
          ability: document.getElementById('ability').value,
          firstNightReminder: document.getElementById('firstNightReminder').value,
          otherNightReminder: document.getElementById('otherNightsReminder').value,
          tokens: document.getElementById('tokens').value
      };
  }
}