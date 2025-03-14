//Renders the script on the page
//Renders the script on the page
export class DisplayScript {
    static renderScript(characters) {
        const scriptContainer = document.getElementById('scriptImage');
        if (scriptContainer) {
            scriptContainer.innerHTML = ''; // Clear previous content

            if (characters && Array.isArray(characters) && characters.length > 0) {
                characters.forEach(character => {
                    const characterDiv = document.createElement('div');
                    characterDiv.style.marginBottom = '10px'; // Add some spacing between characters

                    const nameHeader = document.createElement('h5');
                    nameHeader.textContent = character.name;
                    characterDiv.appendChild(nameHeader);

                    const abilityParagraph = document.createElement('p');
                    abilityParagraph.textContent = character.ability;
                    characterDiv.appendChild(abilityParagraph);

                    scriptContainer.appendChild(characterDiv);
                });
            } else {
                scriptContainer.textContent = "No characters or abilities to display.";
            }
        }
    }
}