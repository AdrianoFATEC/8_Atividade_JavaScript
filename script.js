let titulo = document.createElement("h1");

titulo.id = "titulo";
titulo.innerText = "Loja de Jogos de Playstation";

let body = document.querySelector("body");

body.appendChild(titulo);


let produto = document.createElement("div");

produto.innerHTML = `
  <div>
    <h2>Final Fantasy VII</h2>
    <img src="https://t2.tudocdn.net/603695?w=1920" alt="FinalFantasy">
    <p>Jogo de RPG</p>
    <p id="preco-FinalFantasy">R$ 150.00</p>
  </div>
`


body.appendChild(produto)
