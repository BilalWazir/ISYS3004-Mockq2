// Fetch RSS feed and parse it
fetch('http://www.bom.gov.au/fwo/IDZ00060.warnings_wa.xml')
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
        console.log(data);
        const items = data.querySelectorAll("item");
        let html = ``;
        items.forEach(el => {
            html += `<h2>${el.querySelector("title").innerHTML}</h2>`;
            html += `<p>${el.querySelector("description").innerHTML}</p>`;
            html += `<p><small>${el.querySelector("pubDate").innerHTML}</small></p>`;
        })
        document.querySelector("#weatherWarnings").innerHTML = html;
    });

    // Fetch RSS feed and parse it
fetch('https://cors-anywhere.herokuapp.com/http://www.bom.gov.au/fwo/IDZ00060.warnings_wa.xml', {
    headers: {
        'Origin': 'http://www.bom.gov.au',
    }
})
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
        console.log(data);
        const items = data.querySelectorAll("item");
        let html = ``;
        items.forEach(el => {
            html += `<h2>${el.querySelector("title").innerHTML}</h2>`;
            html += `<p>${el.querySelector("description").innerHTML}</p>`;
            html += `<p><small>${el.querySelector("pubDate").innerHTML}</small></p>`;
        })
        document.querySelector("#weatherWarnings").innerHTML = html;
    });
