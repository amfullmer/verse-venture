const baseUrl = 'https://poetrydb.org/';

document.addEventListener('DOMContentLoaded', () => {
    const searchBox = document.getElementById('input');
    const searchBtn = document.getElementById('searchbtn');
    const poemLanding = document.getElementById('poem');

    searchBtn.addEventListener('click', () => {
        poemLanding.innerHTML = '';

        const searchUrl = `${baseUrl}/title/${searchBox.value}`;

        fetch(searchUrl).then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        }).then(data => {
            data.forEach(poemItem => {
                const tr = buildPoem(poemItem);
                poemLanding.appendChild(tr);
            });
        }).catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    });
});

function buildPoem(poemItem) {
    const tr = document.createElement('tr');
    const title = document.createElement('td');
    const author = document.createElement('td');
    const lines = document.createElement('td');

    title.innerText = poemItem.title;
    author.innerText = poemItem.author;
    lines.innerText = poemItem.lines.join('\n'); // Join lines array with newline characters

    tr.appendChild(title);
    tr.appendChild(author);
    tr.appendChild(lines);

    return tr;
}
