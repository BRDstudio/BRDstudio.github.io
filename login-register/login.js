var Login = 0

export{Login};

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var loginUsername = document.getElementById("loginUsername").value;
    var loginPassword = document.getElementById("loginPassword").value;

    // Obtener usuarios existentes de localStorage
    var users = JSON.parse(localStorage.getItem("users")) || [];

    // Verificar si las credenciales son válidas
    var user = users.find(function(user) {
        return user.username === loginUsername && user.password === loginPassword;
    });

    if (user) {
        alert("Inicio de sesión exitoso.");
        window.location.href = "brdstudios.html";
        Login = 1;
        
        // Aquí podrías redirigir al usuario a una página de bienvenida, etc.
    } else {
        alert("Nombre de usuario o contraseña incorrectos.");
        Login = 0;
        
        
    }
});