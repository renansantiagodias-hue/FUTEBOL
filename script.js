// Adiciona funcionalidade aos botões de curtir
document.addEventListener('DOMContentLoaded', () => {
    const botoesCurtir = document.querySelectorAll('.btn-curtir');

    botoesCurtir.forEach(botao => {
        botao.addEventListener('click', () => {
            const contadorSpan = botao.querySelector('.contador');
            let contagemAtual = parseInt(contadorSpan.textContent);
            
            // Incrementa o número de curtidas
            contadorSpan.textContent = contagemAtual + 1;

            // Efeito visual rápido
            botao.style.transform = 'scale(1.1)';
            setTimeout(() => {
                botao.style.transform = 'scale(1)';
            }, 150);
        });
    });
});