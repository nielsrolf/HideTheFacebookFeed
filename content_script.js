function removeShit() {
    document.querySelectorAll('[role="feed"]').forEach(element => {
        element.parentElement.removeChild(element);
    });
}

let deleteAttempt = setInterval(removeShit, 100);
