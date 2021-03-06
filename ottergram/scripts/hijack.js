function addLinkClickHandler() {
    addEventListener('click', function(event) {
        event.preventDefault();
    });
}

function getLinks() {
    var links = document.querySelectorAll('a');
    return [].slice.call(links);
}

function initializeEvents() {
    var links = getLinks();
    links.forEach(addLinkClickHandler);
}

initializeEvents();
