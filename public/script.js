const cards = document.querySelectorAll(".card");

for (const card of cards) {
    card.addEventListener("click", (evt)=>{
        const caminho = card.querySelector("img").getAttribute("src")
        window.location.href = `/certificados?id=${caminho}`
    })
}

