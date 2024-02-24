// Captura o botão pelo seu ID
var simBtn = document.getElementById('sim-btn');

// Adiciona um ouvinte de evento para o clique do botão
simBtn.addEventListener('click', function() {
  // Exibe um alerta quando o botão é clicado
  alert('Muito obrigado pelo Cu!');
});


// Captura os botões pelo seu ID
var simBtn = document.getElementById('sim-btn');
var outraPosicaoBtn = document.getElementById('outra-posicao-btn');

// Adiciona um ouvinte de evento para o clique do botão "Sim, quero te beijar"
simBtn.addEventListener('click', function() {
  moverBotaoParaNovaPosicao(simBtn);
});

// Adiciona um ouvinte de evento para o clique do botão "Mudar posição"
outraPosicaoBtn.addEventListener('click', function() {
  moverBotaoParaNovaPosicao(outraPosicaoBtn);
});

// Função para mover o botão para uma nova posição
function moverBotaoParaNovaPosicao(botao) {
  // Obtém uma nova posição aleatória para o botão
  var novaPosicaoX = Math.random() * (window.innerWidth - botao.offsetWidth);
  var novaPosicaoY = Math.random() * (window.innerHeight - botao.offsetHeight);

  // Define a nova posição do botão
  botao.style.position = 'absolute';
  botao.style.left = novaPosicaoX + 'px';
  botao.style.top = novaPosicaoY + 'px';
}
