//Combines existing characters in local storage with characters from buildCharacter and findCharacter
//Saves this new list to local storage
class CharacterList {
    constructor() {
        this.characters = JSON.parse(localStorage.getItem('characters')) || [];
    }

    addCharacter(character) {
        this.characters.push(character);
        localStorage.setItem('characters', JSON.stringify(this.characters));
    }
}

const characterList = new CharacterList();