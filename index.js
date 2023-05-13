import { usuarios } from './usuarios.js';

const data = JSON.parse(usuarios);
const tabla = document.querySelector('#Tabla');

data.forEach(el => {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${el.name.first}</td>
    <td>${el.name.last}</td>
    <td>${el.location.street.name}</td>
    <td>${el.location.street.number}</td>
    <td><img src="${el.picture.thumbnail}" alt=""></td>
  `;
  tabla.appendChild(row);
});
