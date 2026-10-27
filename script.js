const hoy = new Date();
const fechaFormateada = hoy.toLocaleDateString('es-PE');
document.getElementById('fecha-actual').textContent = fechaFormateada;