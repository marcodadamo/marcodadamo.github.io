// GENERAZIONE QR PER GLI OPERAI
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

// Esporta tutte le timbrature in CSV
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

// CALCOLO ORE LAVORATE PER OPERAIO E GIORNO
function calcolaOreLavorate() {
    let dati = JSON.parse(localStorage.getItem("timbrature")) || [];

    // Raggruppa per operaio+data
    let gruppi = {};

    dati.forEach(r => {
        const key = r.operaio + "_" + r.data;
        if (!gruppi[key]) gruppi[key] = [];
        gruppi[key].push(r);
    });

    let risultati = [];

    Object.keys(gruppi).forEach(key => {
        let timbrature = gruppi[key];

        // Ordina per data+ora
        timbrature.sort((a, b) => {
            const da = new Date(a.data + " " + a.ora);
            const db = new Date(b.data + " " + b.ora);
            return da - db;
        });

        let totaleMs = 0;
        let entrata = null;

        timbrature.forEach(t => {
            if (t.tipo === "Entrata") {
                entrata = new Date(t.data + " " + t.ora);
            } else if (t.tipo === "Uscita" && entrata) {
                let uscita = new Date(t.data + " " + t.ora);
                totaleMs += (uscita - entrata);
                entrata = null;
            }
        });

        let ore = (totaleMs / 1000 / 60 / 60).toFixed(2);

        risultati.push({
            operaio: timbrature[0].operaio,
            data: timbrature[0].data,
            ore: ore
        });
    });

    return risultati;
}

// Mostra le ore lavorate in un alert
function mostraOre() {
    const risultati = calcolaOreLavorate();

    if (risultati.length === 0) {
        alert("Nessuna timbratura disponibile per il calcolo.");
        return;
    }

    let msg = "Ore lavorate per giornata:\n\n";

    risultati.forEach(r => {
        msg += `${r.operaio} - ${r.data}: ${r.ore} ore\n`;
    });

    alert(msg);
}