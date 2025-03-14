//Used to update script
import { characterList } from './characterList.js';
import { BuildScript } from './buildScript.js';

export class ScriptUpdater {
    static updateScriptHtml(scriptContainerId, callback) {
        const characters = characterList.getCharacters();
        console.log("Characters before BuildScript:", characters);
        const scriptHtml = BuildScript.organizeCharacters(characters);
        console.log("scriptHtml after BuildScript:", scriptHtml);
        const scriptContainer = document.getElementById(scriptContainerId);
        if (scriptContainer) {
            scriptContainer.innerHTML = scriptHtml;
            if (callback) {
                callback();
            }
        }
    }
}