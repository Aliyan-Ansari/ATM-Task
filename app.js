//                           ATM Currency Calculator


// Fetching form to listen submit event
let calculation = document.getElementById("calculate");
calculation.addEventListener("submit", function (e) {
    e.preventDefault();

// Getting the Input Values
    var requiredAmount = Number(document.getElementById("requiredAmount").value);
    var preferedNotes = Number(document.getElementById("requiredPreference").value);
    var noOfPrefer = null
if(requiredAmount >= 100 && requiredAmount <= 100000)
{
//  declaring the types of notes Available in Stock 
    let notesarray = [500, 100, 50, 20, 10, 5, 1];
    for (let i = 200; i > 0; i--) {
        if (requiredAmount / preferedNotes >= i) {
            requiredAmount -= preferedNotes * i;
            noOfPrefer = i
            break
        }
    }

// to limit the number of prefered notes 
    for (let i = 0; i < notesarray.length; i++) {
            if (notesarray[i] === preferedNotes) {
            let divContent = document.getElementById("context");
            let newData = document.createElement("p");
            newData.innerHTML = `Notes of ${notesarray[i]} : ${noOfPrefer} <br>`;
            divContent.appendChild(newData);
        }
        else{
            qty = Math.floor(requiredAmount / notesarray[i]);
            requiredAmount -= qty * notesarray[i];
            let divContent = document.getElementById("context");
            let newData = document.createElement("p");
            newData.innerHTML = `Notes of ${notesarray[i]} : ${qty} <br> `;
            divContent.appendChild(newData);
        }
    }
}

else{
            let divContent = document.getElementById("context");
            let newData = document.createElement("p");
            newData.innerHTML = `Please Enter Amount in between 100 to 100000. <br/> Thanks `;
            divContent.appendChild(newData);
}
})