function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm(evento){
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        const dadosUser = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        };
       
        pessoas.push(dadosUser);

        console.log(pessoas);

        resultado.innerHTML += `Nome: ${dadosUser.nome} ${dadosUser.sobrenome} - Peso: ${dadosUser.peso} - Altura: ${dadosUser.altura} <br>`;
    }
    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();