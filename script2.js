document.addEventListener("DOMContentLoaded", function() {
    const mostrarNomesBtn = document.getElementById("mostrarNomesBtn");
    const nomesContainer = document.getElementById("nomesContainer");
    const videoBtn = document.getElementById("videoBtn");

    const nomesMasculinosAntigos = [
        "Antônio", "Carlos", "João", "José", "Manuel",
        "Paulo", "Fernando", "Adolfo", "Hugo", "Gilberto",
        "Henrique", "Alberto", "Eurico", "Orlando", "Raimundo",
        "Valdemar", "Roberto", "Salvador", "Teodoro", "Elias"
    ];

    mostrarNomesBtn.addEventListener("click", function() {
        nomesContainer.innerHTML = ""; // Limpa nomes existentes
        nomesMasculinosAntigos.forEach(function(nome) {
            const nomeDiv = document.createElement("div");
            nomeDiv.className = "nome";
            nomeDiv.textContent = nome;
            // Adiciona um evento de clique nos nomes para mostrá-los
            nomeDiv.addEventListener("click", function() {
                alert(`Você clicou no nome: ${nome}`);
            });
            nomesContainer.appendChild(nomeDiv);
        });
    });

    // Redireciona para o vídeo do YouTube ao clicar no botão
    videoBtn.addEventListener("click", function() {
        window.location.href = "https://www.youtube.com/watch?v=SxNuCQVabwA";
    });
});
