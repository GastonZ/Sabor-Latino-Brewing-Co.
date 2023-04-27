const cervezas = [
    {
        img : '../images/heineken.png',
    },
    {
        img : '../images/heineken.png',
    },
    {
        img : '../images/heineken.png',
    },
    {
        img : '../images/heineken.png',
    },
    {
        img : '../images/heineken.png',
    },
    {
        img : '../images/heineken.png',
    },
    {
        img : '../images/heineken.png',
    }
]

const contenedorCervezas = document.getElementById("section-2");

cervezas.forEach((cerveza) => {
  const div = document.createElement("div");
  const img = document.createElement("img");
  div.classList.add("img-cerveza"); // Agregar clase al div
  img.src = cerveza.img;
  img.alt = ""; // Agregar atributo alt vacío
  div.appendChild(img);
  contenedorCervezas.appendChild(div);
});