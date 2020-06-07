console.log('yo')


function deleteFeed() {
    console.log(420)
    var element = document.getElementById('contentArea');
    if(element){
        element.parentElement.removeChild(element);
        clearInterval(deleteAttempt);
        console.log("Success")
    }
}

let deleteAttempt = setInterval(deleteFeed, 100);