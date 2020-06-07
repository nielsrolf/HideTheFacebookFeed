function deleteFeed() {
    var element = document.getElementById('contentArea');
    if(element){
        element.parentElement.removeChild(element);
    }
}

let deleteAttempt = setInterval(deleteFeed, 100);