import csv
import json
from gtts import gTTS
import os

def convert_tsv_to_json():
    words = []
    
    with open('japanese_indonesia.tsv', 'r', encoding='utf-8') as f:
        reader = csv.reader(f, delimiter='\t')
        for row in reader:
            if len(row) >= 2:  # Pastikan ada teks Jepang dan terjemahan
                japanese = row[0].strip()
                indonesian = row[1].strip()
                
                # Generate audio
                audio_file = f"audio/word_{len(words)}.mp3"
                tts = gTTS(japanese, lang='ja')
                tts.save(audio_file)
                
                words.append({
                    "id": len(words),
                    "japanese": japanese,
                    "indonesian": indonesian,
                    "audio": audio_file
                })
    
    # Simpan sebagai JSON
    with open('japanese_words.json', 'w', encoding='utf-8') as f:
        json.dump(words, f, ensure_ascii=False, indent=2)

if not os.path.exists('audio'):
    os.makedirs('audio')
    
convert_tsv_to_json()