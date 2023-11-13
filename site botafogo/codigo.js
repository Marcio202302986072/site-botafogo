const div_container = document.createElement('div');
div_container.id = 'container';
document.body.appendChild(div_container);

const cria_cartao = (atleta) => {
    const container_atleta = document.createElement('div');
    container_atleta.style.width = '20rem';
    container_atleta.style.backgroundColor = '#777777';
    container_atleta.style.textAlign = 'center';
    container_atleta.style.margin = 'auto';

    const titulo = document.createElement('h3');
    titulo.innerHTML = atleta.nome;

    const imagem = document.createElement('img');
    imagem.src = atleta.imagem;
    imagem.alt = `foto de ${atleta.nome}`;

    const descricao = document.createElement('p');
    descricao.innerHTML = atleta.descricao;

    container_atleta.appendChild(titulo);
    container_atleta.appendChild(imagem);
    container_atleta.appendChild(descricao);

    div_container.appendChild(container_atleta);
};

const fetchAndDisplayAthletes = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();

        for (const atleta of data) {
            cria_cartao(atleta);
        }
    } catch (error) {
        console.error('Error fetching athlete data:', error);
    }
};

// Fetch and display all athletes
fetchAndDisplayAthletes('https://botafogo-atletas.mange.li/all');

// Fetch and display female athletes
document.getElementById("feminino").addEventListener("click", function () {
    div_container.innerHTML = ""; // Clear existing cards
    fetchAndDisplayAthletes('https://botafogo-atletas.mange.li/feminino');
});

// Fetch and display male athletes
document.getElementById("masculino").addEventListener("click", function () {
    div_container.innerHTML = ""; // Clear existing cards
    fetchAndDisplayAthletes('https://botafogo-atletas.mange.li/masculino');
});
// Fetch and display male athletes
document.getElementById("todos").addEventListener("click", function () {
    div_container.innerHTML = ""; // Clear existing cards
    fetchAndDisplayAthletes('https://botafogo-atletas.mange.li/all');
});