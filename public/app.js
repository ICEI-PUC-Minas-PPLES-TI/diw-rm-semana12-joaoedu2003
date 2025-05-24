// app.js
const apiUrl = 'http://localhost:3000/dados';

if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
    const cardsContainer = document.getElementById('cards-container');

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            data.forEach(item => {
                const card = document.createElement('div');
                card.classList.add('card');

                const imagem = document.createElement('img');
                imagem.src = item.imagem;
                imagem.alt = item.titulo;

                const titulo = document.createElement('h2');
                titulo.textContent = item.titulo;

                const link = document.createElement('a');
                link.href = `detalhes.html?id=${item.id}`;
                link.appendChild(imagem);
                link.appendChild(titulo);

                card.appendChild(link);
                cardsContainer.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Erro ao buscar os dados:', error);
            cardsContainer.innerHTML = '<p>Erro ao carregar os itens.</p>';
        });
}
