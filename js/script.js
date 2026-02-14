// Configuración Inicial
const fechaInicio = new Date("2025-07-31T00:00:00");
const fechaSanValentin = new Date("2026-02-14T00:00:00");
const musica = document.getElementById("musica");

function ir(n) {
    document.querySelectorAll(".escena").forEach(e => e.classList.remove("activa"));
    const proxima = document.getElementById("e" + n);
    proxima.classList.add("activa");
    vibrar(60);

    if(n === 2) escribirTexto();
}

function checkPass() {
    const p = document.getElementById("pass").value.toLowerCase();
    if(p === "AbYh3107" || p === "yhoshelyn") {
        document.getElementById("lock").style.display = "none";
        ir(1);
        musica.play().catch(() => console.log("Esperando interacción"));
    } else {
        alert("Palabra incorrecta ❌");
    }
}

function vibrar(t) { if(navigator.vibrate) navigator.vibrate(t); }

function escribirTexto() {
    const t = "A veces me detengo a pensar en lo increíble que es que, entre tantos millones de personas, hayamos tenido la suerte de encontrarnos. Por eso no me importa esperar, porque prefiero pasar mil días extrañándote que una vida entera sin haberte conocido.❤️";
    let i = 0;
    const target = document.getElementById("textoInteractivo");
    target.innerHTML = "";
    
    function type() {
        if(i < t.length) {
            target.innerHTML += t.charAt(i);
            i++;
            setTimeout(type, 50);
        } else {
            document.getElementById("btnE2").style.display = "inline-block";
        }
    }
    type();
}

function verificarNombre() {
    const n = document.getElementById("nombre").value.toLowerCase();
    if(n.includes("yhoshelyn")) {
        document.getElementById("btnSorpresa").style.display = "inline-block";
        vibrar([100, 50, 100]);
    }
}

document.getElementById("videoRegalo").onended = () => {
    ir(6);
};

function acepto() {
    ir(7);
    lluviaCorazones();
    lluviaPetalos();
}

function lluviaCorazones() {
    setInterval(() => {
        const c = document.createElement("div");
        c.className = "corazon";
        c.innerHTML = "❤️";
        c.style.left = Math.random() * 95 + "vw";
        c.style.fontSize = Math.random() * 20 + 15 + "px";
        c.style.animationDuration = Math.random() * 3 + 2 + "s";
        document.body.appendChild(c);
        setTimeout(() => c.remove(), 5000);
    }, 300);
}

function lluviaPetalos() {
    setInterval(() => {
        const p = document.createElement("div");
        p.className = "petalo";
        p.style.left = Math.random() * 100 + "vw";
        p.style.animationDuration = Math.random() * 5 + 4 + "s";
        document.body.appendChild(p);
        setTimeout(() => p.remove(), 8000);
    }, 200);
}

setInterval(() => {
    const ahora = new Date();
    const dias = Math.floor((ahora - fechaInicio) / (1000 * 60 * 60 * 24));
    const cont = document.getElementById("contadorDias");
    if(cont) cont.innerHTML = `Sabias que llevamos <strong>${dias}</strong> días juntos ❤️`;

    const diff = fechaSanValentin - ahora;
    if(diff > 0) {
        const d = Math.floor(diff / 86400000);
        const h = Math.floor((diff / 3600000) % 24);
        const m = Math.floor((diff / 60000) % 60);
        document.getElementById("countdown").innerHTML = `Faltan ${d}d ${h}h ${m}m para San valentin ❤️`;
    }
}, 1000);

const fotos = ["img/img1.jpeg", "img/img2.jpeg", "img/img3.jpeg", "img/img8.jpeg", "img/img7.jpeg"]; 
function crearFoto() {
    if(fotos.length === 0) return;
    const img = document.createElement("img");
    img.src = fotos[Math.floor(Math.random() * fotos.length)];
    img.className = "fotoFloat";
    img.style.left = Math.random() * 80 + "vw";
    img.style.animationDuration = Math.random() * 10 + 10 + "s";
    img.onclick = () => alert("¡Eres hermosa! 😍");
    document.body.appendChild(img);
    setTimeout(() => img.remove(), 20000);
}
setInterval(crearFoto, 4000);

function mal() { 
    vibrar(200);
    alert("¡Casi! Intenta con otro 😋");
}

function bien() {
    ir(4);
    lluviaCorazones();
}