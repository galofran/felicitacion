// Esperamos a que todo el contenido cargue antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {
    
    // Obtenemos las referencias a los elementos del DOM
    const boton = document.getElementById('btn-sorpresa');
    const titulo = document.getElementById('titulo');
    const mensaje = document.getElementById('mensaje');
    const imagenBebe = document.getElementById('imagen-bebe');

    // Agregamos el evento 'click' al botón
    boton.addEventListener('click', () => {
        
        // 1. Mostramos la imagen quitando la clase 'oculto'
        imagenBebe.classList.remove('oculto');

        // 2. Cambiamos el título y el mensaje con la felicitación
        titulo.innerHTML = "🎉 ¡MUCHAS FELICIDADES! 🎉";
        mensaje.innerHTML = "Prepárate para la mejor etapa de tu vida...<br><br><strong style='color: #e74c3c; font-size: 22px;'>¡VAS A SER ABUELO! 👴👶🎈</strong>";

        // 3. Ocultamos el botón para que ya no vuelva a presionarse
        boton.style.display = 'none';
    });

});