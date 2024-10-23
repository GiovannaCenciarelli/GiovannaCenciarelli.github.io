// Seleciona os elementos da página
document.addEventListener("DOMContentLoaded", function() {
    const sortearBtn = document.getElementById("sortearBtn");
    const resultado = document.getElementById("resultado");

    // Array com as personagens, imagens e descrições
    const personagens = [
      {
        nome: "Carrie Bradshaw",
        imagem: "https://static.stealthelook.com.br/wp-content/uploads/2020/06/carrie-bradshaw-raio-x-capa-20200622210903.jpg",
        descricao: "Carrie, a corna tonhona."
      },
      {
        nome: "Charlotte York",
        imagem: "https://static.cinemax.com/content/dam/hbodata/series/sex-and-the-city/character/charlotte-york-1920.jpg?w=1200",
        descricao: "Charlotte, a songa monga iludida."
      },
      {
        nome: "Samantha Jones",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3T9POQDJuwv1yry6xLwiW5iK3CJgobNr6Lg&s",
        descricao: "Samantha, a biscate bem resolvida."
      },
      {
        nome: "Miranda Hobbes",
        imagem: "https://preview.redd.it/miranda-hobbes-a-powerful-character-but-always-lacked-v0-rhgs6so8xxga1.jpg?width=640&crop=smart&auto=webp&s=8e31f7ff6330709f0895c4252523295cbba621b4",
        descricao: "Miranda, a diva semi sapatona."
      }
    ];

    // Função para sortear uma personagem
    function sortearPersonagem() {
      const personagemSorteada = personagens[Math.floor(Math.random() * personagens.length)];

      // Atualiza o conteúdo da div resultado
      resultado.innerHTML = `
        <p>Você é ${personagemSorteada.nome}!</p>
        <p>${personagemSorteada.descricao}</p>
        <img src="${personagemSorteada.imagem}" alt="${personagemSorteada.nome}">
      `;
    }

    // Adiciona o evento de clique no botão de sorteio
    sortearBtn.addEventListener("click", sortearPersonagem);
});
