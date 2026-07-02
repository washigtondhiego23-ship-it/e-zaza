// 🎬 animação de entrada dos cards
const cards = document.querySelectorAll(".card");

// 👀 detecta scroll e mostra os cards
function showCards() {
  const triggerBottom = window.innerHeight * 0.85;

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom) {
      card.classList.add("show");
    }
  });
}

// 🔁 ativa no scroll
window.addEventListener("scroll", showCards);

// 🔥 ativa ao carregar
showCards();