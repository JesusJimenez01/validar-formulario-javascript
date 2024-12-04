function validar() {
    // Expresión regular para números de teléfono (9 digitos: 1 grupo de 3 dígitos y 3 grupos de 2 dígitos separados por espacios)
    let regex_tel =  /^[0-9]{3}\s[0-9]{2}\s[0-9]{2}\s[0-9]{2}$/;
    // Expresión regular para un e-mail
    let regex_email = /^(.+\@.+\..+)$/;
    // Expresión regular para la contraseña (8 caracteres con mínimo una letra y un número)
    let regex_password = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    let errores = []; // Array para almacenar los errores y poder posicionarme en el primer error más tarde

    let primer_error_id = ""; // String para guardar el id del primer error y poder usar el focus correctamente
    

    // Validar que el nombre no esté vacío
    let nombre = document.getElementById("nombre").value;
    if (nombre === "") {
        errores.push("El nombre no puede estar vacío.");
        if (!primer_error_id) primer_error_id = "nombre";
    }

    // Validar que el primer apellido no esté vacío
    let primer_apellido = document.getElementById("primerApellido").value;
    if (primer_apellido === "") {
        errores.push("El primer apellido no puede estar vacío.");
        if (!primer_error_id) primer_error_id = "primerApellido";
    }

    // Validar que el segundo apellido no esté vacío
    let segundo_apellido = document.getElementById("segundoApellido").value;
    if (segundo_apellido === "") {
        errores.push("El segundo apellido no puede estar vacío.");
        if (!primer_error_id) primer_error_id = "segundoApellido";
    }

    // Validar el número de teléfono (Debe contener 9 dígitos)
    let num_tel = document.getElementById("telefono").value;
    if (!regex_tel.test(num_tel)) {
        errores.push("El número de teléfono debe contener 9 digitos con el formato 123 45 67 89");
        if (!primer_error_id) primer_error_id = "telefono";
    }

    // Validar el e-mail
    let email = document.getElementById("email").value;
    if (!regex_email.test(email)) {
        errores.push("El formato del correo electrónico debe ser válido: ejemplo@ejemplo.com");
        if (!primer_error_id) primer_error_id = "email";
    }

    // Validar la contraseña
    let password = document.getElementById("password").value;
    if (!regex_password.test(password)) {
        errores.push("La contraseña debe tener una longitud de 8 caracteres y debe tener al menos una letra y un número.");
        if (!primer_error_id) primer_error_id = "password";
    }

    // Validar el textarea de la opinión
    let textarea = document.getElementById("comentarios").value;
    if (textarea === "") {
        errores.push("El campo del comentario no puede estar vacío.");
        if (!primer_error_id) primer_error_id = "comentarios";
    }

    // Si hay errores, mostrar todos los errores y poner el focus en el primer error
    if (errores.length > 0) {
        alert("El formulario tiene los siguientes errores:\n" + errores.join("\n"));

        document.getElementById(primer_error_id).focus();
        return false;
    }

    // Si no hay errores y por tanto el if anterior no se ejecuta, aparece una ventana con un mensaje
    alert("Datos enviados correctamente.");
    return true;
}