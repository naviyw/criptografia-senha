/* ==========================================================================
   CRIPTÓGRAFO ROSE GOLD - LÓGICA & INTERATIVIDADE
   ========================================================================== */

// 1. DICIONÁRIOS DE 256 SÍMBOLOS ÚNICOS PARA GARANTIR REVERSIBILIDADE TOTAL (1:1)
const SYMBOL_SETS = {
    // Conjunto 1: Jardim Encantado (Flores, Brilhos, Corações)
    floral: generateSymbolArray([
        '🌸','🌺','🌹','🌷','🌻','🌼','🏵️','💐','☘️','🌿','✨','💫','⭐','🌟','💖','💗',
        '💓','💞','💕','🩰','👑','💎','🎀','🕊️','🦋','🕯️','🔮','🗝️','🕊','🧸','🎈','🎉'
    ]),

    // Conjunto 2: Cosmos & Joias (Lua, Sol, Astronomia)
    celestial: generateSymbolArray([
        '🌙','☀️','⭐','🌟','✨','🔮','💎','☄️','🌌','🪐','🛸','🛰️','⚡','❄️','🔥','💥',
        '☸','⚛','☽','☾','☿','♀','♁','♂','♃','♄','♅','♆','♇','♈','♉','♊'
    ]),

    // Conjunto 3: Glifos Místicos (Runas Elder Futhark)
    runic: generateSymbolArray([
        'ᛟ','ᚠ','ᚢ','ᚦ','ᚨ','ᚱ','ᚲ','ᚷ','ᚹ','ᚺ','ᚾ','ᛁ','ᛃ','ᛇ','ᛈ','ᛉ',
        'ᛊ','ᛏ','ᛒ','ᛖ','ᛗ','ᛚ','ᛜ','ᛞ','ᚸ','ᚵ','ᚱ','ᛞ','ᛤ','ᛥ','ᛦ','ᛨ'
    ])
};

/**
 * Função utilitária para completar exatamente 256 símbolos únicos para cada conjunto
 */
function generateSymbolArray(baseArray) {
    const result = [...baseArray];
    let codePoint = 0x2700; // Começo do bloco Unicode de Dingbats / Símbolos
    
    while (result.length < 256) {
        const symbol = String.fromCodePoint(codePoint);
        if (!result.includes(symbol)) {
            result.push(symbol);
        }
        codePoint++;
    }
    return result;
}

/* ==========================================================================
   ELEMENTOS DO DOM
   ========================================================================== */
const passwordInput = document.getElementById('passwordInput');
const keyInput = document.getElementById('keyInput');
const symbolSetSelect = document.getElementById('symbolSet');
const btnEncrypt = document.getElementById('btnEncrypt');
const btnDecrypt = document.getElementById('btnDecrypt');
const togglePassBtn = document.getElementById('togglePassBtn');
const symbolOutput = document.getElementById('symbolOutput');
const decryptedBox = document.getElementById('decryptedBox');
const decryptedOutput = document.getElementById('decryptedOutput');
const btnCopySymbols = document.getElementById('btnCopySymbols');
const btnClear = document.getElementById('btnClear');
const stepCardsContainer = document.getElementById('stepCardsContainer');

/* ==========================================================================
   EVENT LISTENERS (EVENTOS)
   ========================================================================== */

// Alternar visibilidade da senha
togglePassBtn.addEventListener('click', () => {
    const isPassword = passwordInput.type === 'password';
    passwordInput.type = isPassword ? 'text' : 'password';
    togglePassBtn.textContent = isPassword ? '🙈' : '👁️';
});

// Ação de Criptografar
btnEncrypt.addEventListener('click', handleEncrypt);

// Ação de Descriptografar
btnDecrypt.addEventListener('click', handleDecrypt);

// Copiar Símbolos
btnCopySymbols.addEventListener('click', () => {
    const textToCopy = symbolOutput.textContent.trim();
    if (!textToCopy || symbolOutput.querySelector('.placeholder-text')) {
        alert('Nenhum símbolo gerado para copiar!');
        return;
    }
    navigator.clipboard.writeText(textToCopy);
    btnCopySymbols.textContent = '✅ Copiado!';
    setTimeout(() => {
        btnCopySymbols.textContent = '📋 Copiar Símbolos';
    }, 2000);
});

// Limpar Tudo
btnClear.addEventListener('click', () => {
    passwordInput.value = '';
    symbolOutput.innerHTML = '<span class="placeholder-text">Seus símbolos criptografados aparecerão aqui...</span>';
    decryptedBox.style.display = 'none';
    decryptedOutput.textContent = '';
    stepCardsContainer.innerHTML = '<p class="empty-steps">Digite uma senha e clique em <strong>Criptografar</strong> para visualizar a análise caractere por caractere.</p>';
});

/* ==========================================================================
   LÓGICA PRINCIPAL DE CRIPTOGRAFIA & DESCRIPTOGRAFIA (XOR)
   ========================================================================== */

/**
 * Função para Criptografar
 */
function handleEncrypt() {
    const password = passwordInput.value;
    const key = keyInput.value || 'ROSE';
    const selectedSetKey = symbolSetSelect.value;
    const symbolDictionary = SYMBOL_SETS[selectedSetKey];

    if (!password) {
        alert('Por favor, digite uma senha para criptografar!');
        return;
    }

    decryptedBox.style.display = 'none';
    let encryptedSymbols = '';
    let stepsData = [];

    for (let i = 0; i < password.length; i++) {
        const char = password[i];
        const charCode = char.charCodeAt(0);
        
        // Obter caractere da chave correspondente (Repetição circular)
        const keyChar = key[i % key.length];
        const keyCharCode = keyChar.charCodeAt(0);

        // Operação Bitwise XOR
        const xorValue = charCode ^ keyCharCode;

        // Mapear o resultado (0-255) para o símbolo no dicionário
        const symbolIndex = xorValue % 256;
        const symbol = symbolDictionary[symbolIndex];

        encryptedSymbols += symbol;

        // Guardar dados para o passo a passo
        stepsData.push({
            char: char,
            ascii: charCode,
            binary: charCode.toString(2).padStart(8, '0'),
            keyChar: keyChar,
            keyAscii: keyCharCode,
            keyBinary: keyCharCode.toString(2).padStart(8, '0'),
            xorResult: xorValue,
            xorBinary: xorValue.toString(2).padStart(8, '0'),
            symbol: symbol
        });
    }

    // Exibir Resultado
    symbolOutput.textContent = encryptedSymbols;

    // Renderizar Cards Passo a Passo
    renderStepCards(stepsData);
}

/**
 * Função para Descriptografar
 */
function handleDecrypt() {
    const encryptedText = symbolOutput.textContent.trim();
    const key = keyInput.value || 'ROSE';
    const selectedSetKey = symbolSetSelect.value;
    const symbolDictionary = SYMBOL_SETS[selectedSetKey];

    if (!encryptedText || symbolOutput.querySelector('.placeholder-text')) {
        alert('Não há símbolos no campo de resultado para descriptografar!');
        return;
    }

    // Converter string de símbolos em um array (lidando com caracteres unicode de múltiplos bytes)
    const symbolArray = Array.from(encryptedText);
    let originalPassword = '';

    for (let i = 0; i < symbolArray.length; i++) {
        const symbol = symbolArray[i];
        
        // Encontrar o índice do símbolo no dicionário
        let symbolIndex = symbolDictionary.indexOf(symbol);
        
        // Caso o símbolo não seja encontrado no dicionário padrão, tenta pegar pelo CodePoint
        if (symbolIndex === -1) {
            symbolIndex = symbol.codePointAt(0) % 256;
        }

        // Caractere da chave
        const keyChar = key[i % key.length];
        const keyCharCode = keyChar.charCodeAt(0);

        // Operação Reversa XOR: (A ^ B) ^ B = A
        const originalCharCode = symbolIndex ^ keyCharCode;
        originalPassword += String.fromCharCode(originalCharCode);
    }

    // Exibir o resultado descriptografado
    decryptedOutput.textContent = originalPassword;
    decryptedBox.style.display = 'block';
}

/* ==========================================================================
   RENDERIZAÇÃO DO PASSO A PASSO
   ========================================================================== */

function renderStepCards(steps) {
    stepCardsContainer.innerHTML = '';

    steps.forEach((step, index) => {
        const card = document.createElement('div');
        card.className = 'step-card';
        card.style.animationDelay = `${index * 0.08}s`;

        card.innerHTML = `
            <div class="char-badge" title="Caractere Original">${step.char}</div>
            
            <div class="step-details">
                <div class="detail-box">
                    <label>1. ASCII da Senha</label>
                    <span>${step.ascii} (${step.binary})</span>
                </div>
                <div class="detail-box">
                    <label>2. Chave ('${step.keyChar}')</label>
                    <span>${step.keyAscii} (${step.keyBinary})</span>
                </div>
                <div class="detail-box">
                    <label>3. Resultado XOR</label>
                    <span>${step.xorResult} (${step.xorBinary})</span>
                </div>
            </div>

            <div class="symbol-result-badge" title="Símbolo Mapeado">
                ${step.symbol}
            </div>
        `;

        stepCardsContainer.appendChild(card);
    });
}
