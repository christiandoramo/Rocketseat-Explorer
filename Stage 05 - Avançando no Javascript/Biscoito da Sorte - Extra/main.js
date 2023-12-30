
function getLoremIpsum() {
    const paragraphs = '1'
    const max_length = '100'
    return $.ajax({
        method: 'GET',
        url: `https://api.api-ninjas.com/v1/loremipsum?paragraphs=${paragraphs}&max_length=${max_length}&start_with_lorem_ipsum=${false}`,
        headers: { 'X-Api-Key': 'UQOMcJLHruiJJ2CbNOmq2Q==rfKce1KzdYb3dyXV' },
        contentType: 'application/json'
    });
}

async function handleClick(e) {
    const modalParagraph = document.querySelector('.modal-paragraph')
    const loremipsum = await getLoremIpsum()
    modalParagraph.innerText = loremipsum.text
    modalParagraph.style.display = 'flex';
    // mostrando modal do paragrafo com frase da api
    const title = document.querySelector('.title');
    title.innerHTML = 'Aqui está a sua frase de hoje:'
    // mudando titulo
    const initialParagraph = document.querySelector('.initial-paragraph');
    initialParagraph.classList.toggle('hide')
    // mudando frase anterior

    const button = document.querySelector('button')
    button.classList.toggle('hide')
    // mostrando botao
    const biscoito = document.querySelector('.biscoito.fechado');
    biscoito.setAttribute('src', './assets/opened-cookie.png');
    biscoito.classList.toggle('fechado')
    // mudando imagem do biscoito e tirando funcao anterior

    // Remover o manipulador de eventos
    biscoito.removeEventListener('click', handleClick);
}

const button = document.querySelector('button')
button.addEventListener('click', function (e) {

    const biscoito = document.querySelector('.biscoito');
    biscoito.setAttribute('src', './assets/Ebene 4.png');
    biscoito.addEventListener('click', handleClick);
    biscoito.classList.toggle('fechado')
    const title = document.querySelector('.title')
    title.innerHTML = 'Qual é a sua frase de hoje?'
    const initialParagraph = document.querySelector('.initial-paragraph');
    initialParagraph.classList.toggle('hide')
    // mudando frase anterior
    const modalParagraph = document.querySelector('.modal-paragraph')
    modalParagraph.style.display = 'none'
    //sumindo com modal paragrafo
    button.classList.toggle('hide')
})

const biscoito = document.querySelector('.biscoito.fechado');
biscoito.addEventListener('click', handleClick);