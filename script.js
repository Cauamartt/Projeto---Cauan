function trocarImagem(id, novaSrc) {
    const imagem = document.getElementById(id);
    if (imagem) {
        imagem.src = novaSrc;
    } else {
        console.error(`Imagem com ID '${id}' não encontrada.`);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const botoes = document.querySelectorAll("[data-trocar]");
    
    botoes.forEach((botao) => {
        botao.addEventListener("click", () => {
            const targetId = botao.dataset.target;
            const novaSrc = botao.dataset.novasrc;

            if (targetId && novaSrc) {
                trocarImagem(targetId, novaSrc);
            } else {
                console.error("Os atributos data-target ou data-novasrc estão ausentes no botão.");
            }
        });
    });
});
