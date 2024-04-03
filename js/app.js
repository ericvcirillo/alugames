function alterarStatus(jogo) {
    let botao = document.getElementById(`game-${jogo}`).querySelector('.dashboard__item__button');
    if (botao.classList.contains('dashboard__item__button--return')){
        botao.classList.remove('dashboard__item__button--return')
    
    } else if (botao.classList.contains('dashboard__item__button')) {
        botao.classList.add('dashboard__item__button--return');
    }
    if (botao.textContent.includes('Alugar')) {
        botao.textContent = 'Devolver';
    } else {botao.textContent = 'Alugar'
    }
    let imagem = document.getElementById(`game-${jogo}`).querySelector('.dashboard__item__img');
    if (imagem.classList.contains('dashboard__item__img--rented')){
        imagem.classList.remove('dashboard__item__img--rented')
    
    } else if (imagem.classList.contains('dashboard__item__img')) {
        imagem.classList.add('dashboard__item__img--rented');
    }
}