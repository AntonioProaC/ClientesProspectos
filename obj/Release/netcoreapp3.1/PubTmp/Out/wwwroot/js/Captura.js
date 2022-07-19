jQuery(document).ready(function ($) {

    Inactivo();

    $('#txtNombre').focus();

    var input = document.getElementById('txtTelefono');
    input.addEventListener('input', function () {
        if (this.value.length > 10)
            this.value = this.value.slice(0, 10);
    })

    var input = document.getElementById('txtNumero');
    input.addEventListener('input', function () {
        if (this.value.length > 4)
            this.value = this.value.slice(0, 4);
    })

    var input = document.getElementById('txtCP');
    input.addEventListener('input', function () {
        if (this.value.length > 5)
            this.value = this.value.slice(0, 5);
    })

    $('#btnSalir').on('click', function () {

        Swal.fire({
            title: '¿Estás seguro?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'red',
            cancelButtonColor: 'green',
            confirmButtonText: ' Si ',
            cancelButtonText: ' No '
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = '/home/Inicio'
            }
        });

    });

    $('#btnCapturar').on('click', function () {

        if ($('#txtNombre').val() != null && $('#txtNombre').val() != "") {
            if ($('#txtAPaterno').val() != null && $('#txtAPaterno').val() != "") {
                if ($('#txtAMaterno').val() != null && $('#txtAMaterno').val() != "") {
                    if ($('#txtCalle').val() != null && $('#txtCalle').val() != "") {
                        if ($('#txtNumero').val() != null && $('#txtNumero').val() != "") {
                            if ($('#txtColonia').val() != null && $('#txtColonia').val() != "") {
                                if ($('#txtCP').val() != null && $('#txtCP').val() != "") {
                                    if ($('#txtTelefono').val() != null && $('#txtTelefono').val() != "") {
                                        if ($('#txtRFC').val() != null && $('#txtRFC').val() != "") {

                                            var record = {
                                                Nombre: $('#txtNombre').val(),
                                                APaterno: $('#txtAPaterno').val(),
                                                AMaterno: $('#txtAMaterno').val(),
                                                Calle: $('#txtCalle').val(),
                                                Numero: $('#txtNumero').val(),
                                                Colonia: $('#txtColonia').val(),
                                                CP: $('#txtCP').val(),
                                                Telefono: $('#txtTelefono').val(),
                                                RFC: $('#txtRFC').val()
                                            }
                                            $.ajax(
                                                {
                                                    beforeSend: function (xhr, opts) {
                                                    },
                                                    url: '/TabAbcusuario/CapturarProspecto',
                                                    async: false,
                                                    type: 'POST',
                                                    data: record,
                                                    complete: function () {
                                                    },
                                                    success: function (data) { 

                                                        Swal.fire({
                                                            title: 'Capturado',
                                                            text: 'El prospecto se ha capturado.',
                                                            icon: 'success',
                                                            confirmButtonColor: 'green',
                                                        })

                                                        console.log(data[0])                                                        
                                                        $('#IdProspectoCarpeta').val(data[0].id)
                                                        $('#btnCapturarArchivos').click();
                                                    },

                                                    error: function (data) {
                                                        Swal.fire({
                                                            text: "Error al capturar los datos",
                                                            icon: "error",
                                                            showConfirmButton: false,
                                                            timer: "2500"
                                                        });
                                                    }

                                                }
                                            )


                                        } else {
                                            Swal.fire({
                                                text: "Debe ingresar el RFC",
                                                icon: "warning",
                                                showConfirmButton: false,
                                                timer: "2500"
                                            });
                                        }
                                    } else {
                                        Swal.fire({
                                            text: "Debe ingresar el telefono",
                                            icon: "warning",
                                            showConfirmButton: false,
                                            timer: "2500"
                                        });
                                    }
                                } else {
                                    Swal.fire({
                                        text: "Debe ingresar el CP",
                                        icon: "warning",
                                        showConfirmButton: false,
                                        timer: "2500"
                                    });
                                }
                            } else {
                                Swal.fire({
                                    text: "Debe ingresar la colonia",
                                    icon: "warning",
                                    showConfirmButton: false,
                                    timer: "2500"
                                });
                            }
                        } else {
                            Swal.fire({
                                text: "Debe ingresar el numero",
                                icon: "warning",
                                showConfirmButton: false,
                                timer: "2500"
                            });
                        }
                    } else {
                        Swal.fire({
                            text: "Debe ingresar la calle",
                            icon: "warning",
                            showConfirmButton: false,
                            timer: "2500"
                        });
                    }
                } else {
                    Swal.fire({
                        text: "Debe ingresar el apellido materno",
                        icon: "warning",
                        showConfirmButton: false,
                        timer: "2500"
                    });
                }
            } else {
                Swal.fire({
                    text: "Debe ingresar el apellido paterno",
                    icon: "warning",
                    showConfirmButton: false,
                    timer: "2500"
                });
            }
        } else {
            Swal.fire({
                text: "Debe ingresar el nombre",
                icon: "warning",
                showConfirmButton: false,
                timer: "2500"
            });
        }

    });

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