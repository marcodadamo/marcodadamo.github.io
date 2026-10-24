// QR GENERATOR
new QRious({ element: document.getElementById("qrAntonio"), value: "Antonio", size: 150 });
new QRious({ element: document.getElementById("qrMarco"), value: "Marco", size: 150 });

let tipoTimbratura = null;

function startScan(tipo) {
    tipoTimbratura = tipo;
    document.getElementById("qr-reader").style.display = "block";

    const qrReader = new Html5Qrcode("qr-reader");

    qrReader.start(
        { facingMode: "environment" },
        { fps: 10, qrbox: { width: 250, height: 250 } },
        qrText => {
            qrReader.stop();
            document.getElementById("qr-reader").style.display = "none";
            registraTimbratura(qrText, tipoTimbratura);
        }
    );
}

function registraTimbratura(nome, tipo) {
    navigator.geolocation.getCurrentPosition(pos => {
        const gps = pos.coords.latitude + ", " + pos.coords.longitude;

        const now = new Date();
        const data = now.toLocaleDateString('it-IT');
        const ora = now.toLocaleTimeString('it-IT');

        const record = { operaio: nome, tipo, data, ora, gps };

        salva(record);
        aggiungiRiga(record);

        alert("Timbratura registrata per: " + nome);
    });
}

function salva(record) {
    let dati = JSON.parse(localStorage.getItem("timbrature")) || [];
    dati.push(record);
    localStorage.setItem("timbrature", JSON.stringify(dati));
}

function aggiungiRiga(r) {
    const tbody = document.querySelector("#tabella tbody");
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${r.operaio}</td>
        <td>${r.tipo}</td>
        <td>${r.data}</td>
        <td>${r.ora}</td>
        <td>${r.gps}</td>
    `;
    tbody.appendChild(tr);
}

// Carica timbrature salvate all’avvio
window.addEventListener('DOMContentLoaded', () => {
    let dati = JSON.parse(localStorage.getItem("timbrature")) || [];
    dati.forEach(aggiungiRiga);
});

function exportExcel() {
    let dati = JSON.parse(localStorage.getItem("timbrature")) || [];
    let csv = "Operaio,Tipo,Data,Ora,GPS\n";

    dati.forEach(r => {
        csv += `${r.operaio},${r.tipo},${r.data},${r.ora},${r.gps}\n`;
    });

    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "timbrature.csv";
    a.click();
}