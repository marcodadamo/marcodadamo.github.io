<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Digital Enterprise - Marco D'Adamo</title>
  
  <!-- Font Moderno: Plus Jakarta Sans & Fira Code -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

  <style>
    :root {
      --bg-main: #05070c;
      --card-bg: rgba(13, 18, 30, 0.65);
      --card-border: rgba(255, 255, 255, 0.08);
      --card-hover-border: rgba(56, 189, 248, 0.4);
      --accent-cyan: #38bdf8;
      --accent-indigo: #818cf8;
      --accent-emerald: #34d399;
      --text-main: #f3f4f6;
      --text-muted: #9ca3af;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Plus Jakarta Sans', sans-serif;
      background-color: var(--bg-main);
      color: var(--text-main);
      line-height: 1.6;
      overflow-x: hidden;
      min-height: 100vh;
      /* Sfondo con trama a griglia e fascio di luce super-moderno */
      background-image: 
        radial-gradient(circle at 50% -10%, rgba(99, 102, 241, 0.18) 0%, transparent 60%),
        radial-gradient(circle at 90% 80%, rgba(56, 189, 248, 0.08) 0%, transparent 40%),
        linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
      background-size: 100% 100%, 100% 100%, 40px 40px, 40px 40px;
    }

    .container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 0 24px;
    }

    /* Floating Header Nav */
    header {
      position: sticky;
      top: 20px;
      z-index: 100;
      display: flex;
      justify-content: center;
      margin-bottom: 40px;
    }

    .nav-pill {
      background: rgba(15, 23, 42, 0.75);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid var(--card-border);
      padding: 6px 10px;
      border-radius: 9999px;
      display: flex;
      gap: 6px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    }

    .nav-pill a {
      color: var(--text-muted);
      text-decoration: none;
      font-size: 0.85rem;
      font-weight: 500;
      padding: 8px 16px;
      border-radius: 9999px;
      transition: all 0.25s ease;
    }

    .nav-pill a:hover {
      color: #ffffff;
      background: rgba(255, 255, 255, 0.08);
    }

    /* Hero Section */
    .hero {
      text-align: center;
      padding: 40px 0 60px;
    }

    .badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: rgba(56, 189, 248, 0.1);
      border: 1px solid rgba(56, 189, 248, 0.25);
      color: var(--accent-cyan);
      padding: 6px 16px;
      border-radius: 9999px;
      font-size: 0.8rem;
      font-weight: 600;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      margin-bottom: 24px;
    }

    .badge-dot {
      width: 6px;
      height: 6px;
      background-color: var(--accent-cyan);
      border-radius: 50%;
      box-shadow: 0 0 8px var(--accent-cyan);
    }

    .hero-logo {
      max-width: 280px;
      height: auto;
      margin-bottom: 20px;
      filter: drop-shadow(0 0 25px rgba(56, 189, 248, 0.2));
    }

    .hero h1 {
      font-size: 2.8rem;
      font-weight: 800;
      letter-spacing: -1px;
      line-height: 1.15;
      background: linear-gradient(180deg, #ffffff 0%, #94a3b8 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 16px;
    }

    .hero p {
      font-size: 1.1rem;
      color: var(--text-muted);
      max-width: 680px;
      margin: 0 auto;
      font-weight: 400;
    }

    /* Bento Grid Layout */
    .bento-grid {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      gap: 20px;
      margin-bottom: 40px;
    }

    .bento-card {
      background: var(--card-bg);
      backdrop-filter: blur(12px);
      border: 1px solid var(--card-border);
      border-radius: 20px;
      padding: 32px;
      position: relative;
      overflow: hidden;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .bento-card:hover {
      border-color: var(--card-hover-border);
      transform: translateY(-4px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    }

    /* Span per il Bento Layout */
    .col-6 { grid-column: span 6; }
    .col-12 { grid-column: span 12; }

    .card-tag {
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
      margin-bottom: 12px;
      display: block;
    }

    .tag-cyan { color: var(--accent-cyan); }
    .tag-indigo { color: var(--accent-indigo); }
    .tag-emerald { color: var(--accent-emerald); }

    .card-title {
      font-size: 1.5rem;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 12px;
    }

    .card-desc {
      color: var(--text-muted);
      font-size: 0.95rem;
      line-height: 1.6;
    }

    /* Code Snippet Element per Sviluppo */
    .code-box {
      background: rgba(0, 0, 0, 0.5);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 10px;
      padding: 12px 16px;
      font-family: 'Fira Code', monospace;
      font-size: 0.8rem;
      color: #a7f3d0;
      margin-top: 20px;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .code-box::before {
      content: '$';
      color: var(--accent-cyan);
    }

    /* Footer Banner Card */
    .banner-card {
      border-radius: 20px;
      overflow: hidden;
      border: 1px solid var(--card-border);
      position: relative;
    }

    .banner-card img {
      width: 100%;
      height: 240px;
      object-fit: cover;
      display: block;
      filter: brightness(0.85) contrast(1.1);
      transition: filter 0.3s ease;
    }

    .banner-card:hover img {
      filter: brightness(1);
    }

    /* Responsive */
    @media (max-width: 850px) {
      .col-6 { grid-column: span 12; }
      .hero h1 { font-size: 2.1rem; }
      .nav-pill { flex-wrap: wrap; justify-content: center; }
    }
  </style>
</head>
<body>

  <!-- Floating Navigation -->
  <header>
    <nav class="nav-pill">
      <a href="https://marcodadamo.github.io/menu.html">Progetti</a>
      <a href="https://www.linkedin.com/in/marco-d-adamo/" target="_blank">LinkedIn</a>
      <a href="https://answers.microsoft.com/it-it/profile/d22c7259-b385-4909-8629-70c3ad1008fe?sort=LastReplyDate&dir=Desc&tab=Threads&forum=allcategories&meta=&status=&mod=&advFil=&postedAfter=undefined&postedBefore=undefined&threadType=All&page=1" target="_blank">Microsoft Insider</a>
      <a href="https://forum.italia.it/u/marco_dadamo/summary" target="_blank">Developers Italia</a>
    </nav>
  </header>

  <main class="container">

    <!-- Hero Header -->
    <section class="hero">
      <div class="badge">
        <span class="badge-dot"></span> Digital Enterprise Project
      </div>
      <br>
      <img src="https://raw.githubusercontent.com/marcodadamo/marcodadamo.github.io/master/immagini/digitalenterprise.png" alt="Digital Enterprise Logo" class="hero-logo">
      <h1>Communication, Design, Marketing & Development</h1>
      <p>Un percorso IT strategico progettato per accompagnare le aziende nella loro trasformazione digitale, sviluppo di brand e innovazione organizzativa.</p>
    </section>

    <!-- Bento Grid Section -->
    <section class="bento-grid">
      
      <!-- Card 1: Graphic & Marketing -->
      <div class="bento-card col-6">
        <span class="card-tag tag-cyan">Section 01 // Creative</span>
        <h2 class="card-title">Graphic & Marketing</h2>
        <p class="card-desc">
          Curiamo ogni dettaglio visuale e strategico della brand identity, utilizzando i più avanzati strumenti di grafica e design per dare valore comunicativo e commerciale al tuo business.
        </p>
      </div>

      <!-- Card 2: Open Source Development -->
      <div class="bento-card col-6">
        <span class="card-tag tag-indigo">Section 02 // Engineering</span>
        <h2 class="card-title">Open Source Development</h2>
        <p class="card-desc">
          Realizziamo progetti software trasparenti e modulari. Sviluppiamo soluzioni Open Source gestite tramite repository GitHub e workflow in riga di comando.
        </p>
        <div class="code-box">git clone https://github.com/digitalenterprise/core.git</div>
      </div>

      <!-- Card 3: Metodologia e Data Storage -->
      <div class="bento-card col-12">
        <span class="card-tag tag-emerald">Methodology & Architecture</span>
        <h2 class="card-title">Gestione Archivi & Struttura Dati</h2>
        <p class="card-desc">
          Questa metodologia operativa è studiata per interagire a un alto livello di precisione: dalla memorizzazione dei dati all'organizzazione degli archivi storici, garantendo massima scalabilità e sicurezza per qualsiasi entità aziendale.
        </p>
      </div>

    </section>

    <!-- Banner finale integrato -->
    <div class="banner-card">
      <img src="https://raw.githubusercontent.com/marcodadamo/marcodadamo.github.io/master/immagini/Sfonto%20country%20notebook2.png" alt="Digital Enterprise Environment">
    </div>

  </main>

</body>
</html>
