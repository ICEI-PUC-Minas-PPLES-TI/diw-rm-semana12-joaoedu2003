// app.js
const dados = [
    {
        "id": 1,
        "titulo": "Adição",
        "imagem": "/img/adicao.png"
    },
    {
        "id": 2,
        "titulo": "Subtração",
        "imagem": "/img/subtracao.png"
    },
    {
        "id": 3,
        "titulo": "Divisão",
        "imagem": "/img/divisao.png"
    },
    {
        "id": 4,
        "titulo": "Multiplicação",
        "imagem": "/img/multiplicacao.png"
    }
];

if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
    const cardsContainer = document.getElementById('cards-container');

    dados.forEach(item => {
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
}
