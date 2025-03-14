//Combines existing characters in local storage with characters from buildCharacter and findCharacter
//Saves this new list to local storage
export const characterList = {
    getCharacters: function () {
        return JSON.parse(localStorage.getItem('characters')) || [];
    },

    setCharacters: function (characters) {
        localStorage.setItem('characters', JSON.stringify(characters));
    },

    addCharacter: function (character) {
        const characters = this.getCharacters();
        characters.push(character);
        this.setCharacters(characters);
    },

    //Many more possible features
};