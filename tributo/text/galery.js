// a intenção é ao clicar sobre a imagem, carregue a janela modal.

let imagens = document.querySelectorAll('.small_img');
// foi criado uma variável (let) imagens que recebe o document. querySelectorAll e busca as imagens da classe (.small_img)
let modal = document.querySelector('.modal');
// foi criado a variável modal que carregará o elemento (classe) (.modal)
let modalImg = document.querySelector('#modal_img');
let btClose = document.querySelector('#bt_close');
let srcVal = "";
// armazena o endereço das imagens


for (let i = 0; i<imagens.length; i++){
    imagens[i].addEventListener('click', function (){

        srcVal = imagens[i].getAttribute('src');
        modalImg.setAttribute('src', srcVal);
        // estamos buscando o endereço do src das imagens, e atribuindo-os à variável srcVal
        modal.classList.toggle('modal_active');
        // este comando faz o modal ser apresentado. o toggle é importante para que se a classe está ativa, ele vai ocultar, e se estiver oculta, ele exibe.

    });
}

    btClose.addEventListener('click', function(){
        modal.classList.toggle('modal_active');
});

// aqui criamos a função que ao clicar na imagem se abra o modal