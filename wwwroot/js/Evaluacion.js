jQuery(document).ready(function ($) {

    Inactivo();

    ConsultarProspectos()
    
    //txtObservaciones


    document.getElementById("SelectStatus").onchange = function () {
        if ($('#SelectStatus').val() == 'Rechazado') {
            $('#ContenedorObservaciones').css("display", "flex");
        } else {
            $('#ContenedorObservaciones').css("display", "none");
        }
    };

    $("#btnActualizar").on('click', function () {
        if ($('#SelectStatus').val() == 'Rechazado') {
            ActualizarRechazado()
        } else {
            ActualizarAutorizado()
        }
    });

    function ActualizarAutorizado() {
        var record = {
            ID: $('#txtIdProspecto').val()
        }
        $.ajax(
            {
                beforeSend: function (xhr, opts) {

                },
                url: '/TabAbcusuario/ActualizarAutorizado',
                async: false,
                type: 'POST',
                data: record,
                complete: function () {
                },
                success: function (data) {
                    if (data != null) {
                        var Datos = data
                        console.log(Datos[0]);

                        Swal.fire({
                            text: "Prospecto Actualizado",
                            icon: "success",
                            showConfirmButton: false,
                            timer: "2500"
                        });
                        ConsultarProspectos()
                    }

                },

                error: function (data) {
                    Swal.fire({
                        text: "Error al obtener los datos del prospecto",
                        icon: "error",
                        showConfirmButton: false,
                        timer: "2500"
                    });
                }

            }
        )
    }

    function ActualizarRechazado() {

        if ($('#txtObservaciones').val() == null || $('#txtObservaciones').val() == "") {
            Swal.fire({
                text: "Debe ingresar las observaciones",
                icon: "error",
                showConfirmButton: false,
                timer: "2500"
            });
        } else {

            var record = {
                ID: $('#txtIdProspecto').val(),
                Observaciones: $('#txtObservaciones').val()
            }
            $.ajax(
                {
                    beforeSend: function (xhr, opts) {

                    },
                    url: '/TabAbcusuario/ActualizarRechazado',
                    async: false,
                    type: 'POST',
                    data: record,
                    complete: function () {
                    },
                    success: function (data) {
                        if (data != null) {
                            var Datos = data
                            console.log(Datos[0]);

                            Swal.fire({
                                text: "Prospecto Actualizado",
                                icon: "success",
                                showConfirmButton: false,
                                timer: "2500"
                            });
                            ConsultarProspectos()
                        }

                    },

                    error: function (data) {
                        Swal.fire({
                            text: "Error al obtener los datos del prospecto",
                            icon: "error",
                            showConfirmButton: false,
                            timer: "2500"
                        });
                    }

                }
            )
        }
    }

    function ConsultarProspectos() {

        $.ajax(
            {
                beforeSend: function (xhr, opts) {

                },
                url: '/TabAbcusuario/ObtenerProspectos', 
                async: false,
                type: 'POST', 
                complete: function () {
                },
                success: function (data) {
                    if (data != null) {

                        var Datos = data
                        console.log(Datos[0]);

                        $("#TablaProspectos tr").remove();

                        var tablehead = $('#TablaProspectos thead');
                        tablehead.append(
                            '<tr>' + 
                            '<th scope="col">Nombre</th >' +
                            '<th scope="col">Apellido Paterno</th>' +
                            '<th scope="col">Apellido Materno</th>' +
                            '<th scope="col">Status</th>' +
                            '</tr>'
                        );
                        var tablebody = $('#TablaProspectos tbody');
                        tablebody.append(

                            Datos.map(celda => (
                                '<tr onclick="{ $(`#txtIdProspecto`).val(' + celda.id + '); $(`#btnAbrirModal`).click(); $(`#btnLlenarModal`).click();}" style="cursor:pointer;" >' +                                    
                                    '<td>' + celda.nombre + '</td >' +
                                    '<td>' + celda.aPaterno + '</td >' +
                                    '<td>' + celda.aMaterno + '</td >' + 
                                    '<td>' + celda.status + '</td >' +
                                    //'<td> <button onclick="{ $(`#txtIdProspecto`).val(' + celda.id + ');  }" class="btn btn-primary" style="background-color:#005C93; border-color:#005C93" id="btnModificarSAN" data-toggle="modal" data-target="#exampleModal2">Modificar</button> </td >' +

                                '</tr>'
                            )));

                    } else {
                        Swal.fire({
                            text: "No se encontraron prospectos",
                            icon: "erwarningror",
                            showConfirmButton: false,
                            timer: "2500"
                        });

                        var tablehead = $('#TablaProspectos thead');
                        tablehead.append(
                            '<tr>' +
                            '<th scope="col">Nombre</th >' +
                            '<th scope="col">Apellido Paterno</th>' +
                            '<th scope="col">Apellido Materno</th>' +
                            '<th scope="col">Status</th>' +
                            '</tr>'
                        );
                    }

                },

                error: function (data) {
                    Swal.fire({
                        text: "Error al obtener los prospectos",
                        icon: "error",
                        showConfirmButton: false,
                        timer: "2500"
                    });

                    var tablehead = $('#TablaProspectos thead');
                    tablehead.append(
                        '<tr>' +
                        '<th scope="col">Nombre</th >' +
                        '<th scope="col">Apellido Paterno</th>' +
                        '<th scope="col">Apellido Materno</th>' +
                        '<th scope="col">Status</th>' +
                        '</tr>'

                    );
                }

            }
        )

    }

    $("#btnLlenarModal").on('click', function () {
        $('#txtIDArchivo').val($('#txtIdProspecto').val()); 
        var record = {
            ID: $('#txtIdProspecto').val()
        }
        $.ajax(
            {
                beforeSend: function (xhr, opts) {

                },
                url: '/TabAbcusuario/ObtenerInfoProspecto',
                async: false,
                type: 'POST',
                data: record,
                complete: function () {
                },
                success: function (data) {
                    if (data != null) {

                        $('#txtNombre').val(data[0].nombre)
                        $('#txtAPaterno').val(data[0].aPaterno)
                        $('#txtAMaterno').val(data[0].aMaterno)
                        $('#txtCalle').val(data[0].calle)
                        $('#txtNumero').val(data[0].numero)
                        $('#txtColonia').val(data[0].colonia)
                        $('#txtCP').val(data[0].cp)
                        $('#txtTelefono').val(data[0].telefono)
                        $('#txtRFC').val(data[0].rfc)

                        var Datos = data
                        console.log(Datos[0]);
                    }

                },

                error: function (data) {
                    Swal.fire({
                        text: "Error al obtener los datos del prospecto",
                        icon: "error",
                        showConfirmButton: false,
                        timer: "2500"
                    });
                }

            }
        )
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