function openPlayerconfig (event){
    editedPlayer = +event.target.dataset.playerid; // +"1" =>1
    playerConfigOverlayElement.style.display = "block";
    backdropElement.style.display = "block";
}

function closePlayerconfig(){
    playerConfigOverlayElement.style.display = "none";
    backdropElement.style.display = "none";
    formElement.firstElementChild.classList.remove("error");
    errorsOutputElement.textContent = "";
    formElement.firstElementChild.lastElementChild.value = "";
}

function savePlayerListener(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayername = formData.get("playername").trim(); //"    sherry    " => "sherry" trim will delete wide space fro left and right
    
    if (!enteredPlayername){    // enteredPlayername === " "
        event.target.firstElementChild.classList.add("error");
        errorsOutputElement.textContent = "Please enter a valid name!";
        return;
    }

    const updatedPLayerDataElement = document.getElementById("player-" + editedPlayer + "-data");
    updatedPLayerDataElement.children[1].textContent = enteredPlayername;

    // if(editedPlayer === 1){
    //     players[0].name = enteredPlayername;
    // } else{
    //     players[1].name = enteredPlayername;
    // }

    players[editedPlayer - 1].name = enteredPlayername;

    closePlayerconfig();
}















