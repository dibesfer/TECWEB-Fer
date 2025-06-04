fetch("/assets/json/beauticard.json")
  .then(response => response.json())
  .then(elements => {
    
    const contenedor = document.getElementById("bc-container");
   
    elements.forEach(element => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <h2>${element.name}</h2>
        <p>Tipo: ${element.description}</p>
        <p>Nivel: ${element.nivel}</p>
      `;
      contenedor.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Error cargando Pokémones:", window.location.href + error);
  });