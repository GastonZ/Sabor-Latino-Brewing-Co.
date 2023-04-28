const cervezas = [
    {
        img: '../images/heineken.png',
        title: "heineken"
    },
    {
        img : '../images/quilmes.png',
        title: "quilmes"
    },
    {
        img : '../images/brahma.png',
        title: "brahma"
    },
    {
        img : '../images/stella.png',
        title: "stella"
    },
    {
        img : '../images/corona.png',
        title: "corona"
    },
    {
        img : '../images/budweiser.png',
        title: "budweiser"
    },
    {
        img : '../images/andes.png',
        title: "andes"
    },
    {
        img : '../images/schneider.png',
        title: "schneider"
    },
    
    {
        img : '../images/peñon.png',
        title: "peñon"
    }
]

const contenedorCervezas = document.getElementById("section-2");

cervezas.forEach((cerveza) => {
  const div = document.createElement("div");
  const img = document.createElement("img");
  const title = document.createElement("p")
  div.classList.add("img-cerveza"); // Agregar clase al div
  img.classList.add("p-20")
  img.src = cerveza.img;
  img.alt = ""; // Agregar atributo alt vacío
  title.classList.add('text-center')
  title.innerHTML = cerveza.title
  div.appendChild(img);
  div.appendChild(title)
  contenedorCervezas.appendChild(div);
});