const audioCache = {};

export function playJapanese(text, id) {
    // Coba gunakan Web Speech API dulu
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ja-JP';
        const voices = speechSynthesis.getVoices();
        const japaneseVoice = voices.find(v => v.lang === 'ja-JP');
        if (japaneseVoice) utterance.voice = japaneseVoice;
        speechSynthesis.speak(utterance);
        return;
    }
    
    // Fallback ke file audio
    if (audioCache[id]) {
        audioCache[id].play();
    } else {
        audioCache[id] = new Audio(`audio/word_${id}.mp3`);
        audioCache[id].play();
    }
}