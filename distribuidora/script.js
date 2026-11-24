// 1) Aviso de maioridade
const modal = document.getElementById('modal-idade');

if (modal) {
  if (localStorage.getItem('maior18') === 'sim') {
    modal.style.display = 'none';
  }

  const btnSim = document.getElementById('btn-sim');
  const btnNao = document.getElementById('btn-nao');

  if (btnSim) {
    btnSim.addEventListener('click', () => {
      localStorage.setItem('maior18', 'sim');
      modal.style.display = 'none';
    });
  }

  if (btnNao) {
    btnNao.addEventListener('click', () => {
      window.location.href = 'https://www.google.com';
    });
  }
}

// 2) Botão "Pedir" em cada produto (abre o WhatsApp)
const numero = '5561999999999';

const modalPedido = document.getElementById('modal-pedido');
const pedidoSim = document.getElementById('pedido-sim');
const pedidoNao = document.getElementById('pedido-nao');
let linkPendente = '';

document.querySelectorAll('.card').forEach(card => {
  const titulo = card.querySelector('h2');
  if (!titulo) return;

  const nome = titulo.textContent.trim();
  const url = 'https://wa.me/' + numero + '?text=' +
              encodeURIComponent('Olá! Quero pedir: ' + nome);

  const botao = document.createElement('a');
  botao.href = url;
  botao.target = '_blank';
  botao.rel = 'noopener noreferrer';
  botao.className = 'botao';
  botao.textContent = '🛒 Pedir';

  // Só interrompe o clique nos cards marcados com data-alcool
  if (card.hasAttribute('data-alcool') && modalPedido) {
    botao.addEventListener('click', (e) => {
      e.preventDefault();
      linkPendente = url;
      modalPedido.style.display = 'flex';
    });
  }

  card.appendChild(botao);
});

if (pedidoSim) {
  pedidoSim.addEventListener('click', () => {
    modalPedido.style.display = 'none';
    if (linkPendente) {
      window.open(linkPendente, '_blank', 'noopener,noreferrer');
    }
    linkPendente = '';
  });
}

if (pedidoNao) {
  pedidoNao.addEventListener('click', () => {
    modalPedido.style.display = 'none';
    linkPendente = '';
  });
}

// 3) Ano automático no rodapé
const ano = document.getElementById('ano');
if (ano) {
  ano.textContent = new Date().getFullYear();
}