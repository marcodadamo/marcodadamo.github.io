<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Digital Enterprise - Marco D'Adamo</title>
  <!-- Google Font: Inter -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
  
  <style>
    /* Reset & Variabili Base */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      background-color: #0b0f19;
      color: #e2e8f0;
      line-height: 1.6;
      padding-bottom: 60px;
    }

    .container {
      max-width: 1000px;
      margin: 0 auto;
      padding: 0 20px;
    }

    /* Navigation Bar */
    header {
      background: rgba(15, 23, 42, 0.85);
      backdrop-filter: blur(12px);
      position: sticky;
      top: 0;
      z-index: 1000;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      padding: 12px 0;
    }

    .nav-links {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 12px;
      flex-wrap: wrap;
    }

    .nav-btn {
      color: #cbd5e1;
      text-decoration: none;
      font-size: 0.9rem;
      font-weight: 500;
      padding: 8px 18px;
      border-radius: 30px;
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.08);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .nav-btn:hover {
      color: #ffffff;
      background: linear-gradient(135deg, #3b82f6, #8b5cf6);
      box-shadow: 0 4px 20px rgba(59, 130, 246, 0.4);
      transform: translateY(-2px);
      border-color: transparent;
    }

    /* Hero Section */
    .hero {
      text-align: center;
      padding: 50px 0 30px;
    }

    .hero-logo {
      max-width: 100%;
      height: auto;
      max-height: 140px;
      margin-bottom: 25px;
      filter: drop-shadow(0 8px 24px rgba(0, 0, 0, 0.6));
    }

    .hero-title {
      font-size: 2.2rem;
      font-weight: 700;
      background: linear-gradient(135deg, #60a5fa 0%, #c084fc 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 15px;
      letter-spacing: -0.5px;
    }

    .hero-subtitle {
      font-size: 1.1rem;
      color: #94a3b8;
      max-width: 750px;
      margin: 0 auto;
      font-weight: 300;
    }

    /* Card Section per le due Aree */
    .section-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 24px;
      margin: 40px 0;
    }

    .card {
      background: rgba(30, 41, 59, 0.5);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 16px;
      padding: 30px;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }

    .card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background: linear-gradient(90deg, #3b82f6, #8b5cf6);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
      border-color: rgba(96, 165, 250, 0.3);
    }

    .card:hover::before {
      opacity: 1;
    }

    .card-icon {
      font-size: 2rem;
      margin-bottom: 15px;
      display: inline-block;
    }

    .card-title {
      font-size: 1.3rem;
      color: #f8fafc;
      font-weight: 600;
      margin-bottom: 10px;
    }

    .card-text {
      color: #94a3b8;
      font-size: 0.95rem;
      line-height: 1.6;
    }

    /* Content Box Metodologia */
    .info-box {
      background: linear-gradient(180deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.6) 100%);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 16px;
      padding: 30px;
      margin-bottom: 40px;
      text-align: center;
    }

    .info-box p {
      color: #cbd5e1;
      font-size: 1rem;
      margin-bottom: 10px;
    }

    .highlight {
      color: #38bdf8;
      font-weight: 600;
    }

    /* Banner finale */
    .banner-wrapper {
      border-radius: 16px;
      overflow: hidden;
      border: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5);
    }

    .banner-img {
      width: 100%;
      height: auto;
      display: block;
    }

    /* Responsiveness per schermi piccoli */
    @media (max-width: 600px) {
      .hero-title {
        font-size: 1.75rem;
      }
      .nav-links {
        gap: 8px;
      }
      .nav-btn {
        padding: 6px 12px;
        font-size: 0.85rem;
      }
    }
  </style>
</head>
<body>

  <!-- Menu Navigazione Header -->
  <header>
    <div class="container nav-links">
      <a href="https://marcodadamo.github.io/menu.html" class="nav-btn">Menu Progetti</a>
      <a href="https://www.linkedin.com/in/marco-d-adamo/" target="_blank" class="nav-btn">LinkedIn</a>
      <a href="https://answers.microsoft.com/it-it/profile/d22c7259-b385-4909-8629-70c3ad1008fe?sort=LastReplyDate&dir=Desc&tab=Threads&forum=allcategories&meta=&status=&mod=&advFil=&postedAfter=undefined&postedBefore=undefined&threadType=All&page=1" target="_blank" class="nav-btn">Microsoft Insider</a>
      <a href="https://forum.italia.it/u/marco_dadamo/summary" target="_blank" class="nav-btn">Developers Italia</a>
    </div>
  </header>

  <main class="container">
    
    <!-- Hero Section -->
    <section class="hero">
      <img src="https://raw.githubusercontent.com/marcodadamo/marcodadamo.github.io/master/immagini/digitalenterprise.png" alt="Digital Enterprise Logo" class="hero-logo">
      <h1 class="hero-title">Communication, Design, Marketing & Development</h1>
      <p class="hero-subtitle">
        Le aziende aderiscono al programma <span class="highlight">Digital Enterprise</span> per consolidare la propria brand identity e guidare la crescita digitale attraverso strategie mirate, innovazione commerciale e gestione organizzativa.
      </p>
    </section>

    <!-- Due Sezioni Principali in Card Layout -->
    <section class="section-grid">
      <div class="card">
        <div class="card-icon">🎨</div>
        <h2 class="card-title">Graphic & Marketing</h2>
        <p class="card-text">
          La sezione dedicata all'identità visiva e al marketing. Utilizziamo i migliori strumenti di design curando ogni dettaglio strategico ed estetico del brand.
        </p>
      </div>

      <div class="card">
        <div class="card-icon">💻</div>
        <h2 class="card-title">Development & Open Source</h2>
        <p class="card-text">
          Sviluppo di progetti Open Source realizzati con i linguaggi di programmazione più moderni, gestiti ed archiviati direttamente su GitHub tramite riga di comando.
        </p>
      </div>
    </section>

    <!-- Metodologia -->
    <section class="info-box">
      <p>
        Questa metodologia di lavoro è adottata per interagire con il massimo livello di dettaglio, garantendo una struttura ideale per la creazione, la gestione e la conservazione dei dati di qualsiasi entità aziendale.
      </p>
    </section>

    <!-- Banner finale -->
    <div class="banner-wrapper">
      <img src="https://raw.githubusercontent.com/marcodadamo/marcodadamo.github.io/master/immagini/Sfonto%20country%20notebook2.png" alt="Digital Enterprise Banner" class="banner-img">
    </div>

  </main>

</body>
</html>
