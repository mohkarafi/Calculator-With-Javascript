let display = document.querySelector('.display input');
let inputs = document.querySelectorAll('input[type="button"]')
const specialChars = ["%", "+", "-", "*", "="];
let output = "";


const calculate = (btnValue) => {
    if (btnValue === "AC") {
        output = ""; // Réinitialiser l'affichage
    } else if (btnValue === "DE") {
        output = output.toString().slice(0, -1); // Supprimer le dernier caractère
    } else if (btnValue === "=") {
        if (output === "") {
            display.value = ""
            return;
        }
        else {
            try {
                output = eval(output); // Évaluer l'expression
            } catch (error) {
                output = "Erreur"; // Gérer les erreurs
            }
        }

    } else {
        if (output === "" && specialChars.includes(btnValue)) return; // Ignorer les opérateurs au début
        output += btnValue; // Ajouter la valeur du bouton
    }

    // Mettre à jour l'affichage
    display.value = output;
};


inputs.forEach((input) => {
    input.addEventListener("click", (e) => calculate(e.target.value));
});