const ajouterBoite2 = document.getElementById("ajouter-boite2");
const listeContainer = document.getElementById("liste-container");
const listeContainer2 = document.getElementById("liste-container2");


function ajouterTaches(){
    const taches = ajouterBoite2.value;
    if (!taches) {
        alert("S'il vous plaît, ajoutez une tache");
        return;
    }
  
    const li = document.createElement('li');

    li.innerHTML = `
    <label>
        <input type="checkbox" class="custom-checkbox">
        <span class = "taches-texte">${taches}</span>
    </label>
    <div class = "buttonAndDelete">
        <button class="edit-btn">Modifier</button>
        <select class="importance-dropdown">
            <option disabled selected>Importance</option>
            <option value="high">Haute</option>
            <option value="low">Basse</option>
        </select>
        <span class="supprimer-btn">x</span>
    </div>`;

    const dropdown = li.querySelector(".importance-dropdown");
    const tacheTexte = li.querySelector(".taches-texte");

    dropdown.addEventListener("change", function () {
    if (dropdown.value === "high") {
        tacheTexte.style.color = "red"; } 
    });

    li.querySelector(".supprimer-btn").addEventListener("click", function () {
        listeContainer.removeChild(li); 
        
    });
    li.querySelector(".supprimer-btn").addEventListener("click", function () {
        listeContainer2.removeChild(li); 
    });


    listeContainer.appendChild(li);
    ajouterBoite2.value = '';

    //const terminerBtn = li.querySelector(".terminer-btn");
    const checkbox = li.querySelector("input");
    const editBtn = li.querySelector(".edit-btn")

    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            
            listeContainer2.appendChild(li);
        } else {
            
            listeContainer.appendChild(li);
        }
    });
    editBtn.addEventListener("click", function () {
        const taskText = li.querySelector(".taches-texte");
        const nouveauTexte = prompt("Modifier la tâche :", taskText.textContent);
        if (nouveauTexte) {
            taskText.textContent = nouveauTexte;
        }
    });
    
    ajouterBoite2.value = '';

}
document.getElementById("ajouter-btn").addEventListener("click", ajouterTaches);
