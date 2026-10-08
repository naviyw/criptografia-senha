/* ==========================================================================
   VARIÁVEIS DE CORES - PALETA ROSE GOLD & PASTEL LIGHT
   ========================================================================== */
:root {
    --bg-main: #FAF5F6;
    --bg-card: rgba(255, 255, 255, 0.92);
    --border-card: rgba(235, 185, 198, 0.4);
    
    /* Cores de Texto */
    --text-primary: #4A353B;
    --text-secondary: #8A6D75;
    --text-muted: #B3959E;

    /* Tons de Rosa e Rose Gold */
    --rose-gold-gradient: linear-gradient(135deg, #E899A8 0%, #D47288 100%);
    --rose-gold-hover: linear-gradient(135deg, #EEA8B5 0%, #DC7F94 100%);
    --rose-accent: #E2869A;
    --rose-light: #FFF0F3;
    --rose-soft: #FADCE2;
    --gold-accent: #D4AF37;

    /* Sombras */
    --shadow-soft: 0 10px 30px rgba(212, 114, 136, 0.1);
    --shadow-hover: 0 15px 35px rgba(212, 114, 136, 0.18);
    --shadow-inner: inset 0 2px 4px rgba(0, 0, 0, 0.03);

    /* Fontes */
    --font-heading: 'Playfair Display', serif;
    --font-body: 'Plus Jakarta Sans', sans-serif;
}

/* ==========================================================================
   RESET & ESTILOS BASE
   ========================================================================== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: var(--font-body);
    background-color: var(--bg-main);
    color: var(--text-primary);
    min-height: 100vh;
    padding: 2rem 1rem;
    position: relative;
    overflow-x: hidden;
}

/* Fundo Iluminado com Bolhas Pastel */
.bg-decoration {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    pointer-events: none;
    overflow: hidden;
}

.circle {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.6;
}

.circle-1 {
    width: 400px;
    height: 400px;
    background: #FFE3E8;
    top: -100px;
    left: -100px;
}

.circle-2 {
    width: 500px;
    height: 500px;
    background: #FFF3D6;
    bottom: -150px;
    right: -100px;
}

.circle-3 {
    width: 350px;
    height: 350px;
    background: #F3E5F5;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
}

/* Container Principal */
.container {
    max-width: 1000px;
    margin: 0 auto;
}

/* ==========================================================================
   CABEÇALHO
   ========================================================================== */
.header {
    text-align: center;
    margin-bottom: 2.5rem;
}

.badge {
    display: inline-block;
    padding: 0.4rem 1.2rem;
    background: var(--rose-light);
    color: var(--rose-accent);
    border: 1px solid var(--border-card);
    border-radius: 50px;
    font-size: 0.85rem;
    font-weight: 600;
    margin-bottom: 1rem;
    box-shadow: 0 2px 10px rgba(226, 134, 154, 0.1);
}

.header h1 {
    font-family: var(--font-heading);
    font-size: 2.8rem;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
    letter-spacing: -0.5px;
}

.header p {
    color: var(--text-secondary);
    font-size: 1.05rem;
    max-width: 650px;
    margin: 0 auto;
    line-height: 1.6;
}

/* ==========================================================================
   CARDS & LAYOUT GRID
   ========================================================================== */
.main-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.8rem;
    margin-bottom: 2rem;
}

@media (max-width: 768px) {
    .main-grid {
        grid-template-columns: 1fr;
    }
}

.card {
    background: var(--bg-card);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid var(--border-card);
    border-radius: 24px;
    padding: 2rem;
    box-shadow: var(--shadow-soft);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    box-shadow: var(--shadow-hover);
}

.card-title {
    font-family: var(--font-heading);
    font-size: 1.35rem;
    color: var(--text-primary);
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.6rem;
}

/* ==========================================================================
   FORMULÁRIOS & INPUTS
   ========================================================================== */
.form-group {
    margin-bottom: 1.3rem;
}

.form-group label {
    display: block;
    font-size: 0.88rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
}

.input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
}

input[type="password"],
input[type="text"],
select {
    width: 100%;
    padding: 0.85rem 1.1rem;
    border: 1.5px solid #F3D5DD;
    background: #FFFFFF;
    border-radius: 14px;
    font-family: var(--font-body);
    font-size: 0.95rem;
    color: var(--text-primary);
    outline: none;
    transition: all 0.25s ease;
    box-shadow: var(--shadow-inner);
}

input:focus, select:focus {
    border-color: var(--rose-accent);
    box-shadow: 0 0 0 4px rgba(226, 134, 154, 0.15);
}

.btn-toggle {
    position: absolute;
    right: 12px;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.1rem;
    opacity: 0.7;
    transition: opacity 0.2s;
}

.btn-toggle:hover {
    opacity: 1;
}

.help-text {
    display: block;
    font-size: 0.78rem;
    color: var(--text-muted);
    margin-top: 0.35rem;
}

/* ==========================================================================
   BOTÕES
   ========================================================================== */
.button-group {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.8rem;
    margin-top: 1.8rem;
}

.btn {
    padding: 0.9rem 1.2rem;
    border: none;
    border-radius: 14px;
    font-family: var(--font-body);
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.25s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
}

.btn-primary {
    background: var(--rose-gold-gradient);
    color: #FFFFFF;
    box-shadow: 0 6px 18px rgba(212, 114, 136, 0.25);
}

.btn-primary:hover {
    background: var(--rose-gold-hover);
    transform: translateY(-2px);
    box-shadow: 0 8px 22px rgba(212, 114, 136, 0.35);
}

.btn-secondary {
    background: var(--rose-light);
    color: var(--rose-accent);
    border: 1px solid var(--border-card);
}

.btn-secondary:hover {
    background: var(--rose-soft);
    transform: translateY(-2px);
}

.btn-outline {
    background: #FFFFFF;
    border: 1.5px solid #F0C4CF;
    color: var(--text-primary);
    padding: 0.6rem 1rem;
    border-radius: 12px;
    font-size: 0.85rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
}

.btn-outline:hover {
    background: var(--rose-light);
    border-color: var(--rose-accent);
    color: var(--rose-accent);
}

/* ==========================================================================
   CAIXAS DE RESULTADO
   ========================================================================== */
.result-box label {
    display: block;
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--text-secondary);
    margin-bottom: 0.5rem;
}

.symbol-display {
    min-height: 110px;
    background: #FFFFFF;
    border: 1.5px dashed #E8C3CC;
    border-radius: 16px;
    padding: 1.2rem;
    font-size: 1.6rem;
    word-break: break-all;
    letter-spacing: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: var(--text-primary);
}

.placeholder-text {
    font-size: 0.9rem;
    color: var(--text-muted);
    letter-spacing: normal;
}

.decrypted-text {
    background: var(--rose-light);
    border: 1px solid var(--border-card);
    border-radius: 12px;
    padding: 0.9rem;
    font-family: monospace;
    font-size: 1.1rem;
    font-weight: bold;
    color: var(--text-primary);
    word-break: break-all;
}

.action-bar {
    display: flex;
    gap: 0.6rem;
    margin-top: 1.2rem;
    justify-content: flex-end;
}

.mt-3 {
    margin-top: 1.2rem;
}

/* ==========================================================================
   SEÇÃO PASSO A PASSO
   ========================================================================== */
.step-section {
    margin-top: 1rem;
}

.step-header h2 {
    font-family: var(--font-heading);
    font-size: 1.6rem;
    margin-bottom: 0.4rem;
}

.step-header p {
    color: var(--text-secondary);
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
}

.explanation-banner {
    background: linear-gradient(135deg, #FFF9FA 0%, #FFF0F3 100%);
    border-left: 4px solid var(--rose-accent);
    border-radius: 14px;
    padding: 1.2rem;
    margin-bottom: 2rem;
}

.explanation-banner h3 {
    font-size: 1rem;
    color: var(--text-primary);
    margin-bottom: 0.6rem;
}

.explanation-banner ol {
    padding-left: 1.2rem;
    font-size: 0.88rem;
    color: var(--text-secondary);
    line-height: 1.7;
}

/* Cards dos Passos */
.step-cards-grid {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
}

.step-card {
    background: #FFFFFF;
    border: 1px solid #F3D5DD;
    border-radius: 16px;
    padding: 1.2rem;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 1.2rem;
    animation: fadeIn 0.4s ease forwards;
}

@media (max-width: 600px) {
    .step-card {
        grid-template-columns: 1fr;
        text-align: center;
    }
}

.char-badge {
    width: 50px;
    height: 50px;
    background: var(--rose-light);
    color: var(--rose-accent);
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    font-weight: bold;
    border: 1px solid var(--border-card);
}

.step-details {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
    gap: 0.8rem;
}

.detail-box {
    background: #FAF5F6;
    padding: 0.6rem 0.8rem;
    border-radius: 10px;
    font-size: 0.8rem;
}

.detail-box label {
    display: block;
    color: var(--text-muted);
    font-size: 0.72rem;
    margin-bottom: 0.2rem;
    text-transform: uppercase;
    font-weight: 700;
}

.detail-box span {
    font-weight: 600;
    color: var(--text-primary);
    font-family: monospace;
}

.symbol-result-badge {
    font-size: 2.2rem;
    padding: 0.4rem 1rem;
    background: #FFF9FA;
    border: 1px dashed var(--rose-accent);
    border-radius: 14px;
}

.empty-steps {
    text-align: center;
    color: var(--text-muted);
    padding: 2rem;
    font-style: italic;
}

/* Rodapé */
.footer {
    text-align: center;
    margin-top: 3rem;
    padding-bottom: 1rem;
    color: var(--text-muted);
    font-size: 0.85rem;
}

/* Animação */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
