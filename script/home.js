const cervezas = [
    {
        img: '../images/heineken.png'
    },
    {
        img : '../images/quilmes.png',
    },
    {
        img : '../images/brahma.png',
    },
    {
        img : '../images/stella.png',
    },
    {
        img : '../images/corona.png',
    },
    {
        img : '../images/budweiser.png',
    },
    {
        img : '../images/andes.png',
    },
    {
        img : '../images/schneider.png',
    },
    
    {
        img : '../images/peñon.png',
    }
]

const contenedorCervezas = document.getElementById("section-2");

cervezas.forEach((cerveza) => {
  const div = document.createElement("div");
  const img = document.createElement("img");
  div.classList.add("img-cerveza"); // Agregar clase al div
  img.classList.add("p-20")
  img.src = cerveza.img;
  img.alt = ""; // Agregar atributo alt vacío
  div.appendChild(img);
  contenedorCervezas.appendChild(div);
});