/**
 * Create a paragraph element.
 * @param {*} data - Text element.
 */
function createElement(data) {
    const paragraph = document.createElement("p");
    paragraph.textContent = data;
    document.body.appendChild(paragraph);
}

/**
 * Make a callback.
 * @param {Function} callback 
 */
function queryWikipedia(callback) {
    const xhr = XMLHttpRequest();

    xhr.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*')
    xhr.onload = function() {
        let response = JSON.parse(xhr.responseText);
        let page = response.query.pages;
        let pageId = Object.keys(page)[0];
        callback(page[pageId].extract);

        xhr.send();
    }

    queryWikipedia(createElement);
}