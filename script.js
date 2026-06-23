function gerarSenha() {

    const email = document.getElementById("email").value.trim().toLowerCase();

    if(email === ""){
        alert("Digite um e-mail.");
        return;
    }

    let hash = 0;

    for(let i = 0; i < email.length; i++){
        hash = ((hash << 5) - hash) + email.charCodeAt(i);
        hash |= 0;
    }

    hash = Math.abs(hash);

    let seed = hash;

    function random(){
        seed = (seed * 9301 + 49297) % 233280;
        return seed / 233280;
    }

    const numeros = "0123456789";
    const maiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const minusculas = "abcdefghijklmnopqrstuvwxyz";

    let senha = [];

    for(let i=0;i<3;i++){
        senha.push(numeros[Math.floor(random()*numeros.length)]);
    }

    for(let i=0;i<2;i++){
        senha.push(maiusculas[Math.floor(random()*maiusculas.length)]);
    }

    senha.push(minusculas[Math.floor(random()*minusculas.length)]);

    for(let i = senha.length - 1; i > 0; i--){
        const j = Math.floor(random() * (i + 1));
        [senha[i], senha[j]] = [senha[j], senha[i]];
    }

    document.getElementById("c1").textContent = senha[0];
    document.getElementById("c2").textContent = senha[1];
    document.getElementById("c3").textContent = senha[2];
    document.getElementById("c4").textContent = senha[3];
    document.getElementById("c5").textContent = senha[4];
    document.getElementById("c6").textContent = senha[5];
}
