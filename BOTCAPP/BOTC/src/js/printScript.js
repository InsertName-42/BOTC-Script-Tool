//Used to save script to a pdf
import html2pdf from 'html2pdf.js';

export class PrintScript {
    static printToPdf(elementId, fileName = 'botc_script.pdf') {
        setTimeout(function () {
            const element = document.getElementById(elementId);
            if (!element) {
                console.error(`Element with ID '${elementId}' not found.`);
                return;
            }

            const opt = {
                margin: 10,
                filename: fileName,
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
            };

            html2pdf().from(element).set(opt).save();
        }, 500);
    }
}