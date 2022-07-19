jQuery(document).ready(function ($) {

    Inactivo();

    function Inactivo() {

        contador = 0;

        window.setInterval(function () {

            document.onmousemove = reset;
            document.onkeypress = reset;
            document.onscroll = reset;
            document.ontouchend = reset;
            document.onclick = reset;
            document.oninput = reset;

            contador++;

            if (contador >= 600) {
                window.location.href = '/'
            }
        }, 1000);

        function reset() {
            contador = 0;
        }
    }
});