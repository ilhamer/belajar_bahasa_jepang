// Data lengkap Hiragana
const hiraganaData = [
    { char: "あ (a)", tenten: "-", maru: "-", ya: "-", yu: "-", yo: "-" },
    { char: "い (i)", tenten: "-", maru: "-", ya: "-", yu: "-", yo: "-" },
    { char: "う (u)", tenten: "-", maru: "-", ya: "-", yu: "-", yo: "-" },
    { char: "え (e)", tenten: "-", maru: "-", ya: "-", yu: "-", yo: "-" },
    { char: "お (o)", tenten: "-", maru: "-", ya: "-", yu: "-", yo: "-" },
    { char: "か (ka)", tenten: "が (ga)", maru: "-", ya: "きゃ (kya)", yu: "きゅ (kyu)", yo: "きょ (kyo)" },
    { char: "き (ki)", tenten: "ぎ (gi)", maru: "-", ya: "ぎゃ (gya)", yu: "ぎゅ (gyu)", yo: "ぎょ (gyo)" },
    { char: "く (ku)", tenten: "ぐ (gu)", maru: "-", ya: "-", yu: "-", yo: "-" },
    { char: "け (ke)", tenten: "げ (ge)", maru: "-", ya: "-", yu: "-", yo: "-" },
    { char: "こ (ko)", tenten: "ご (go)", maru: "-", ya: "-", yu: "-", yo: "-" },
    { char: "さ (sa)", tenten: "ざ (za)", maru: "-", ya: "しゃ (sha)", yu: "しゅ (shu)", yo: "しょ (sho)" },
    { char: "し (shi)", tenten: "じ (ji)", maru: "-", ya: "じゃ (ja)", yu: "じゅ (ju)", yo: "じょ (jo)" },
    { char: "す (su)", tenten: "ず (zu)", maru: "-", ya: "-", yu: "-", yo: "-" },
    { char: "せ (se)", tenten: "ぜ (ze)", maru: "-", ya: "-", yu: "-", yo: "-" },
    { char: "そ (so)", tenten: "ぞ (zo)", maru: "-", ya: "-", yu: "-", yo: "-" },
    { char: "た (ta)", tenten: "だ (da)", maru: "-", ya: "ちゃ (cha)", yu: "ちゅ (chu)", yo: "ちょ (cho)" },
    { char: "ち (chi)", tenten: "ぢ (ji)", maru: "-", ya: "ぢゃ (ja)", yu: "ぢゅ (ju)", yo: "ぢょ (jo)" },
    { char: "つ (tsu)", tenten: "づ (zu)", maru: "-", ya: "-", yu: "-", yo: "-" },
    { char: "て (te)", tenten: "で (de)", maru: "-", ya: "-", yu: "-", yo: "-" },
    { char: "と (to)", tenten: "ど (do)", maru: "-", ya: "-", yu: "-", yo: "-" },
    { char: "な (na)", tenten: "-", maru: "-", ya: "にゃ (nya)", yu: "にゅ (nyu)", yo: "にょ (nyo)" },
    { char: "に (ni)", tenten: "-", maru: "-", ya: "にゃ (nya)", yu: "にゅ (nyu)", yo: "にょ (nyo)" },
    { char: "ぬ (nu)", tenten: "-", maru: "-", ya: "-", yu: "-", yo: "-" },
    { char: "ね (ne)", tenten: "-", maru: "-", ya: "-", yu: "-", yo: "-" },
    { char: "の (no)", tenten: "-", maru: "-", ya: "-", yu: "-", yo: "-" },
    { char: "は (ha)", tenten: "ば (ba)", maru: "ぱ (pa)", ya: "ひゃ (hya)", yu: "ひゅ (hyu)", yo: "ひょ (hyo)" },
    { char: "ひ (hi)", tenten: "び (bi)", maru: "ぴ (pi)", ya: "びゃ (bya)", yu: "びゅ (byu)", yo: "びょ (byo)" },
    { char: "ふ (fu)", tenten: "ぶ (bu)", maru: "ぷ (pu)", ya: "-", yu: "-", yo: "-" },
    { char: "へ (he)", tenten: "べ (be)", maru: "ぺ (pe)", ya: "-", yu: "-", yo: "-" },
    { char: "ほ (ho)", tenten: "ぼ (bo)", maru: "ぽ (po)", ya: "-", yu: "-", yo: "-" },
    { char: "ま (ma)", tenten: "-", maru: "-", ya: "みゃ (mya)", yu: "みゅ (myu)", yo: "みょ (myo)" },
    { char: "み (mi)", tenten: "-", maru: "-", ya: "みゃ (mya)", yu: "みゅ (myu)", yo: "みょ (myo)" },
    { char: "む (mu)", tenten: "-", maru: "-", ya: "-", yu: "-", yo: "-" },
    { char: "め (me)", tenten: "-", maru: "-", ya: "-", yu: "-", yo: "-" },
    { char: "も (mo)", tenten: "-", maru: "-", ya: "-", yu: "-", yo: "-" },
    { char: "や (ya)", tenten: "-", maru: "-", ya: "-", yu: "-", yo: "-" },
    { char: "ゆ (yu)", tenten: "-", maru: "-", ya: "-", yu: "-", yo: "-" },
    { char: "よ (yo)", tenten: "-", maru: "-", ya: "-", yu: "-", yo: "-" },
    { char: "ら (ra)", tenten: "-", maru: "-", ya: "りゃ (rya)", yu: "りゅ (ryu)", yo: "りょ (ryo)" },
    { char: "り (ri)", tenten: "-", maru: "-", ya: "りゃ (rya)", yu: "りゅ (ryu)", yo: "りょ (ryo)" },
    { char: "る (ru)", tenten: "-", maru: "-", ya: "-", yu: "-", yo: "-" },
    { char: "れ (re)", tenten: "-", maru: "-", ya: "-", yu: "-", yo: "-" },
    { char: "ろ (ro)", tenten: "-", maru: "-", ya: "-", yu: "-", yo: "-" },
    { char: "わ (wa)", tenten: "-", maru: "-", ya: "-", yu: "-", yo: "-" },
    { char: "を (wo)", tenten: "-", maru: "-", ya: "-", yu: "-", yo: "-" },
    { char: "ん (n)", tenten: "-", maru: "-", ya: "-", yu: "-", yo: "-" }
];

// Data lengkap Katakana
const katakanaData = [
    { char: "ア (A)", tenten: "-", maru: "-", ya: "-", yu: "-", yo: "-" },
    { char: "イ (I)", tenten: "-", maru: "-", ya: "-", yu: "-", yo: "-" },
    { char: "ウ (U)", tenten: "-", maru: "-", ya: "-", yu: "-", yo: "-" },
    { char: "エ (E)", tenten: "-", maru: "-", ya: "-", yu: "-", yo: "-" },
    { char: "オ (O)", tenten: "-", maru: "-", ya: "-", yu: "-", yo: "-" },
    { char: "カ (Ka)", tenten: "ガ (Ga)", maru: "-", ya: "キャ (Kya)", yu: "キュ (Kyu)", yo: "キョ (Kyo)" },
    { char: "キ (Ki)", tenten: "ギ (Gi)", maru: "-", ya: "ギャ (Gya)", yu: "ギュ (Gyu)", yo: "ギョ (Gyo)" },
    { char: "ク (Ku)", tenten: "グ (Gu)", maru: "-", ya: "-", yu: "-", yo: "-" },
    { char: "ケ (Ke)", tenten: "ゲ (Ge)", maru: "-", ya: "-", yu: "-", yo: "-" },
    { char: "コ (Ko)", tenten: "ゴ (Go)", maru: "-", ya: "-", yu: "-", yo: "-" },
    { char: "サ (Sa)", tenten: "ザ (Za)", maru: "-", ya: "シャ (Sha)", yu: "シュ (Shu)", yo: "ショ (Sho)" },
    { char: "シ (Shi)", tenten: "ジ (Ji)", maru: "-", ya: "ジャ (Ja)", yu: "ジュ (Ju)", yo: "ジョ (Jo)" },
    { char: "ス (Su)", tenten: "ズ (Zu)", maru: "-", ya: "-", yu: "-", yo: "-" },
    { char: "セ (Se)", tenten: "ゼ (Ze)", maru: "-", ya: "-", yu: "-", yo: "-" },
    { char: "ソ (So)", tenten: "ゾ (Zo)", maru: "-", ya: "-", yu: "-", yo: "-" },
    { char: "タ (Ta)", tenten: "ダ (Da)", maru: "-", ya: "チャ (Cha)", yu: "チュ (Chu)", yo: "チョ (Cho)" },
    { char: "チ (Chi)", tenten: "ヂ (Ji)", maru: "-", ya: "ヂャ (Ja)", yu: "ヂュ (Ju)", yo: "ヂョ (Jo)" },
    { char: "ツ (Tsu)", tenten: "ヅ (Zu)", maru: "-", ya: "-", yu: "-", yo: "-" },
    { char: "テ (Te)", tenten: "デ (De)", maru: "-", ya: "-", yu: "-", yo: "-" },
    { char: "ト (To)", tenten: "ド (Do)", maru: "-", ya: "-", yu: "-", yo: "-" },
    { char: "ナ (Na)", tenten: "-", maru: "-", ya: "ニャ (Nya)", yu: "ニュ (Nyu)", yo: "ニョ (Nyo)" },
    { char: "ニ (Ni)", tenten: "-", maru: "-", ya: "ニャ (Nya)", yu: "ニュ (Nyu)", yo: "ニョ (Nyo)" },
    { char: "ヌ (Nu)", tenten: "-", maru: "-", ya: "-", yu: "-", yo: "-" },
    { char: "ネ (Ne)", tenten: "-", maru: "-", ya: "-", yu: "-", yo: "-" },
    { char: "ノ (No)", tenten: "-", maru: "-", ya: "-", yu: "-", yo: "-" },
    { char: "ハ (Ha)", tenten: "バ (Ba)", maru: "パ (Pa)", ya: "ヒャ (Hya)", yu: "ヒュ (Hyu)", yo: "ヒョ (Hyo)" },
    { char: "ヒ (Hi)", tenten: "ビ (Bi)", maru: "ピ (Pi)", ya: "ビャ (Bya)", yu: "ビュ (Byu)", yo: "ビョ (Byo)" },
    { char: "フ (Fu)", tenten: "ブ (Bu)", maru: "プ (Pu)", ya: "-", yu: "-", yo: "-" },
    { char: "ヘ (He)", tenten: "ベ (Be)", maru: "ペ (Pe)", ya: "-", yu: "-", yo: "-" },
    { char: "ホ (Ho)", tenten: "ボ (Bo)", maru: "ポ (Po)", ya: "-", yu: "-", yo: "-" },
    { char: "マ (Ma)", tenten: "-", maru: "-", ya: "ミャ (Mya)", yu: "ミュ (Myu)", yo: "ミョ (Myo)" },
    { char: "ミ (Mi)", tenten: "-", maru: "-", ya: "ミャ (Mya)", yu: "ミュ (Myu)", yo: "ミョ (Myo)" },
    { char: "ム (Mu)", tenten: "-", maru: "-", ya: "-", yu: "-", yo: "-" },
    { char: "メ (Me)", tenten: "-", maru: "-", ya: "-", yu: "-", yo: "-" },
    { char: "モ (Mo)", tenten: "-", maru: "-", ya: "-", yu: "-", yo: "-" },
    { char: "ヤ (Ya)", tenten: "-", maru: "-", ya: "-", yu: "-", yo: "-" },
    { char: "ユ (Yu)", tenten: "-", maru: "-", ya: "-", yu: "-", yo: "-" },
    { char: "ヨ (Yo)", tenten: "-", maru: "-", ya: "-", yu: "-", yo: "-" },
    { char: "ラ (Ra)", tenten: "-", maru: "-", ya: "リャ (Rya)", yu: "リュ (Ryu)", yo: "リョ (Ryo)" },
    { char: "リ (Ri)", tenten: "-", maru: "-", ya: "リャ (Rya)", yu: "リュ (Ryu)", yo: "リョ (Ryo)" },
    { char: "ル (Ru)", tenten: "-", maru: "-", ya: "-", yu: "-", yo: "-" },
    { char: "レ (Re)", tenten: "-", maru: "-", ya: "-", yu: "-", yo: "-" },
    { char: "ロ (Ro)", tenten: "-", maru: "-", ya: "-", yu: "-", yo: "-" },
    { char: "ワ (Wa)", tenten: "-", maru: "-", ya: "-", yu: "-", yo: "-" },
    { char: "ヲ (Wo)", tenten: "-", maru: "-", ya: "-", yu: "-", yo: "-" },
    { char: "ン (N)", tenten: "-", maru: "-", ya: "-", yu: "-", yo: "-" }
];

// Fungsi untuk membuat tabel
function createTable(data, containerId) {
    const container = document.getElementById(containerId);
    const table = document.createElement('table');
    
    // Buat header tabel
    const thead = document.createElement('thead');
    thead.innerHTML = `
        <tr>
            <th>Karakter</th>
            <th>Tenten (゛)</th>
            <th>Maru (゜)</th>
            <th>+ ゃ/ャ (ya)</th>
            <th>+ ゅ/ュ (yu)</th>
            <th>+ ょ/ョ (yo)</th>
        </tr>
    `;
    table.appendChild(thead);
    
    // Buat body tabel
    const tbody = document.createElement('tbody');
    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.char}</td>
            <td>${item.tenten}</td>
            <td>${item.maru}</td>
            <td>${item.ya}</td>
            <td>${item.yu}</td>
            <td>${item.yo}</td>
        `;
        tbody.appendChild(row);
    });
    table.appendChild(tbody);
    
    container.appendChild(table);
}

// Jalankan saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    createTable(hiraganaData, 'hiragana-table');
    createTable(katakanaData, 'katakana-table');
    
    // Tambahkan catatan
    const note1 = document.createElement('p');
    note1.className = 'note';
    note1.textContent = 'Catatan: Tenten (゛) menandakan bunyi bersuara (dakuten), Maru (゜) menandakan bunyi plosif (handakuten).';
    document.getElementById('hiragana-table').appendChild(note1);
    
    const note2 = document.createElement('p');
    note2.className = 'note';
    note2.textContent = 'Catatan: Huruf kecil ゃ, ゅ, ょ (ya, yu, yo) membentuk bunyi kontraksi ketika digabung dengan karakter tertentu.';
    document.getElementById('katakana-table').appendChild(note2);
});


// Data untuk kuis
const quizData = [
    { kana: "あ", romaji: "a", arti: "(partikel subjek)" },
    { kana: "いぬ", romaji: "inu", arti: "anjing" },
    { kana: "ねこ", romaji: "neko", arti: "kucing" },
    { kana: "ひと", romaji: "hito", arti: "orang" },
    { kana: "みず", romaji: "mizu", arti: "air" },
    { kana: "ほん", romaji: "hon", arti: "buku" },
    { kana: "がっこう", romaji: "gakkou", arti: "sekolah" },
    { kana: "ありがとう", romaji: "arigatou", arti: "terima kasih" },
    { kana: "こんにちは", romaji: "konnichiwa", arti: "halo/selamat siang" },
    { kana: "さようなら", romaji: "sayounara", arti: "selamat tinggal" },
    // Tambahan kata hiragana
    { kana: "ともだち", romaji: "tomodachi", arti: "teman" },
    { kana: "せんせい", romaji: "sensei", arti: "guru" },
    { kana: "おかね", romaji: "okane", arti: "uang" },
    { kana: "たべもの", romaji: "tabemono", arti: "makanan" },
    { kana: "のみもの", romaji: "nomimono", arti: "minuman" },
    
    // Katakana
    { kana: "アメリカ", romaji: "amerika", arti: "Amerika" },
    { kana: "コンピューター", romaji: "konpyuutaa", arti: "komputer" },
    { kana: "テレビ", romaji: "terebi", arti: "televisi" },
    { kana: "レストラン", romaji: "resutoran", arti: "restoran" },
    { kana: "コーヒー", romaji: "koohii", arti: "kopi" },
    
    // Tambahan level menengah
    { kana: "しゅくだい", romaji: "shukudai", arti: "pekerjaan rumah" },
    { kana: "でんわ", romaji: "denwa", arti: "telepon" },
    { kana: "びょういん", romaji: "byouin", arti: "rumah sakit" },
    { kana: "スーパー", romaji: "suupaa", arti: "supermarket" },
    { kana: "アイスクリーム", romaji: "aisukuriimu", arti: "es krim" }
    
];

// Elemen UI kuis
const quizContainer = document.createElement('div');
quizContainer.className = 'quiz-container';
quizContainer.innerHTML = `
    <h2>Kuis Tebak Huruf Jepang</h2>
    <div class="quiz-question">
        <p>Huruf apa ini? <span id="current-kana"></span></p>
        <p>jawab dalam Romaji 👇</p>
    </div>
    <div class="quiz-answer">
        <input type="text" id="user-answer" placeholder="Ketik jawabanmu...">
        <button id="submit-answer">Submit</button>
    </div>
    <div id="quiz-feedback"></div>
`;

// Tambahkan kuis ke dalam dokumen
document.querySelector('.kana-section').after(quizContainer);

// Variabel kuis
let currentQuestion = 0;
let totalQuestions = 0;
let score = 0;


// Tampilkan pertanyaan
function showQuestion() {
    const randomIndex = Math.floor(Math.random() * quizData.length);
    currentQuestion = randomIndex;
    document.getElementById('current-kana').textContent = quizData[currentQuestion].kana;
    document.getElementById('user-answer').value = '';
    document.getElementById('quiz-feedback').textContent = '';
}

// batasedit
// Cek jawaban


function checkAnswer() {
    const userAnswer = document.getElementById('user-answer').value.toLowerCase();
    const correctAnswer = quizData[currentQuestion].romaji;
    const meaning = quizData[currentQuestion].arti;
    
    totalQuestions++;

    if (userAnswer === correctAnswer) {
        document.getElementById('quiz-feedback').innerHTML = `
            <p class="correct">✅ Benar! "${quizData[currentQuestion].kana}" = "${correctAnswer}"</p>
            <p>Arti: ${meaning}</p>
            <p class="score">Skor: ${++score}/${totalQuestions}</p>
            <p class="encourage">Lanjutkan! 🎯</p>
        `;
    } else {
        document.getElementById('quiz-feedback').innerHTML = `
            <p class="wrong">❌ Jawaban benar: "${correctAnswer}"</p>
            <p>Arti: ${meaning}</p>
            <p class="score">Skor: ${score}/${totalQuestions}</p>
            <p>Jangan menyerah!</p>
        `;
    }

    setTimeout(showQuestion, 4000);
}

// Event listener
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
document.getElementById('user-answer').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkAnswer();
    }
});

// Mulai kuis
showQuestion();


// Fungsi utama saat halaman dimuat
document.addEventListener('DOMContentLoaded', async () => {
    try {
        // 1. Load data TSV
        const phrases = await loadTSVData('data/japanese_indonesia.tsv');
        
        // 2. Tampilkan data
        displayPhrases(phrases);
        
        // 3. Inisialisasi Web Speech API
        initSpeechSynthesis();
        
    } catch (error) {
        console.error("Error:", error);
        document.getElementById('loading').textContent = 
            "Gagal memuat data. Silakan refresh halaman.";
    }
});

// Fungsi untuk load data TSV
async function loadTSVData(filePath) {
    const response = await fetch(filePath);
    if (!response.ok) throw new Error("File tidak ditemukan");
    
    const tsvData = await response.text();
    return parseTSV(tsvData);
}

// Fungsi parsing TSV
function parseTSV(tsv) {
    const lines = tsv.split('\n').filter(line => line.trim() !== '');
    
    return lines.map(line => {
        const [id, japanese, idIndo, indonesian] = line.split('\t');
        return {
            '日本語': japanese,
            'Artinya': indonesian,
            'Kategori': 'Umum' // Default category
        };
    });
}
// Fungsi tampilkan data di tabel
function displayPhrases(phrases) {
    const tableBody = document.getElementById('table-body');
    const loadingElement = document.getElementById('loading');
    
    if (phrases.length === 0) {
        loadingElement.textContent = "Tidak ada data yang ditemukan.";
        return;
    }
    
    loadingElement.style.display = 'none';
    
    phrases.forEach(phrase => {
        const row = document.createElement('tr');
        
        // Kolom Bahasa Jepang + Audio
        const japaneseCell = document.createElement('td');
        japaneseCell.textContent = phrase['日本語'];
        
        const audioBtn = document.createElement('span');
        audioBtn.innerHTML = '🔊';
        audioBtn.className = 'audio-btn';
        audioBtn.onclick = () => speakJapanese(phrase['日本語']);
        japaneseCell.appendChild(audioBtn);
        
        // Kolom Arti
        const indonesianCell = document.createElement('td');
        indonesianCell.textContent = phrase['Artinya'];
        
        // Kolom Kategori
        const categoryCell = document.createElement('td');
        categoryCell.textContent = phrase['Kategori'];
        
        row.append(japaneseCell, indonesianCell, categoryCell);
        tableBody.appendChild(row);
    });
}

// Fungsi inisialisasi Text-to-Speech
function initSpeechSynthesis() {
    if (!window.speechSynthesis) {
        console.warn("Browser tidak mendukung Text-to-Speech");
        return;
    }
    
    // Load voices (terutama untuk Chrome)
    speechSynthesis.getVoices();
}

// Fungsi untuk memainkan audio
function speakJapanese(text) {
    if (!window.speechSynthesis) {
        alert("Fitur audio tidak didukung di browser ini");
        return;
    }

    const audioBtns = document.querySelectorAll('.audio-btn');
    
    audioBtns.forEach(btn => {
        btn.classList.remove('playing');
        if (btn.parentElement.textContent.includes(text)) {
            btn.classList.add('playing');
            
            // Hapus class setelah selesai
            setTimeout(() => {
                btn.classList.remove('playing');
            }, 1500);
        }
    });
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    utterance.rate = 0.9;
    
    const japaneseVoice = speechSynthesis.getVoices().find(voice => 
        voice.lang === 'ja-JP' || voice.lang === 'ja'
    );
    
    if (japaneseVoice) {
        utterance.voice = japaneseVoice;
    }
    
    speechSynthesis.speak(utterance);
}

