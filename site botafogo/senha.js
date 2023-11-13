function checkPassword() {
 
    const enteredPassword = document.getElementById("SENHA").value;

    const correctPassword = "SENHA";
    if (enteredPassword === correctPassword) {
        window.location.href = "detalhes.html";
    } else {
        alert("Senha incorreta. Tente novamente.");
    }
}