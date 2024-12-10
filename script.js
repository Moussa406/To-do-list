const ajouterBoite2 = document.getElementById("ajouter-boite2");
const listeContainer = document.getElementById("liste-container");
const listeContainer2 = document.getElementById("liste-container2")

function ajouterTaches(){
    const taches = ajouterBoite2.value;
    if (!taches) {
        alert("S'il vous plaît, ajoutez une tache");
        return;
    }

    const li = document.createElement('li');

    li.innerHTML = `
    <label>
        <input type="checkbox">
        <span>${taches}</span>
    </label>
    <span class="supprimer-btn">X</span>`;

    

    listeContainer.appendChild(li);
    ajouterBoite2.value = '';

    //const terminerBtn = li.querySelector(".terminer-btn");
    const checkbox = li.querySelector("input");

    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            
            listeContainer2.appendChild(li);
        } else {
            
            listeContainer.appendChild(li);
        }
    });
    ajouterBoite2.value = '';

}


