// 1. قاموس الزخرفة (Unicode Maps) لضمان نجاح النسخ
const unicodeMaps = {
    "'Pickyside'": {
        'a': '𝔞', 'b': '𝔟', 'c': '𝔠', 'd': '𝔡', 'e': '𝔢', 'f': '𝔣', 'g': '𝔤', 'h': '𝔥', 'i': '𝔦', 'j': '𝔧', 'k': '𝔨', 'l': '𝔩', 'm': '𝔪', 'n': '𝔫', 'o': '𝔬', 'p': '𝔭', 'q': '𝔮', 'r': '𝔯', 's': '𝔰', 't': '𝔱', 'u': '𝔲', 'v': '𝔳', 'w': '𝔴', 'x': '𝔵', 'y': '𝔶', 'z': '𝔷',
        'A': '𝔄', 'B': '𝔅', 'C': 'ℭ', 'D': '𝔇', 'E': '𝔈', 'F': '𝔉', 'G': '𝔊', 'H': 'ℌ', 'I': 'ℑ', 'J': '𝔍', 'K': '𝔎', 'L': '𝔏', 'M': '𝔐', 'N': '𝔑', 'O': '𝔒', 'P': '𝔓', 'Q': '𝔔', 'R': 'ℜ', 'S': '𝔖', 'T': '𝔗', 'U': '𝔘', 'V': '𝔙', 'W': '𝔚', 'X': '𝔛', 'Y': '𝔜', 'Z': 'ℨ'
    },
    "'CustomFont2'": {
        'a': 'ⓐ', 'b': 'ⓑ', 'c': 'ⓒ', 'd': 'ⓓ', 'e': 'ⓔ', 'f': 'ⓕ', 'g': 'ⓖ', 'h': 'ⓗ', 'i': 'ⓘ', 'j': 'ⓙ', 'k': 'ⓚ', 'l': 'ⓛ', 'm': 'ⓜ', 'n': 'ⓝ', 'o': 'ⓞ', 'p': 'ⓟ', 'q': 'ⓠ', 'r': 'ⓡ', 's': 'ⓢ', 't': 'ⓣ', 'u': 'ⓤ', 'v': 'ⓥ', 'w': 'ⓦ', 'x': 'ⓧ', 'y': 'ⓨ', 'z': 'ⓩ',
        'A': 'Ⓐ', 'B': 'Ⓑ', 'C': 'Ⓒ', 'D': 'Ⓓ', 'E': 'Ⓔ', 'F': 'Ⓕ', 'G': 'Ⓖ', 'H': 'Ⓗ', 'I': 'Ⓘ', 'J': 'Ⓙ', 'K': 'Ⓚ', 'L': 'Ⓛ', 'M': 'Ⓜ', 'N': 'Ⓝ', 'O': 'Ⓞ', 'P': 'Ⓟ', 'Q': 'Ⓠ', 'R': 'Ⓡ', 'S': 'Ⓢ', 'T': 'Ⓣ', 'U': 'Ⓤ', 'V': 'Ⓥ', 'W': 'Ⓦ', 'X': 'Ⓧ', 'Y': 'Ⓨ', 'Z': 'Ⓩ'
    }
};

const names = {
    ar: {
        games: ["قاهر العمالقة", "أسطورة الفضاء", "المحارب الأخير", "نينجا الظل", "فانتازيا"],
        projects: ["حلول ذكية", "أفق الإبداع", "إنجاز المستقبل", "فكرة مبتكرة", "مشروع العبقرية"],
        youtube: ["تحديات مذهلة", "لحظات ممتعة", "عالم الفيديوهات", "قناة المرح", "يوتيوبر العبقري"]
    },
    en: {
        games: ["Shadow Ninja", "Final Warrior", "Space Legend", "Fantasy Quest", "Titan Slayer"],
        projects: ["Genius Project", "Innovative Idea", "Future Achievement", "Creative Horizon", "Smart Solutions"],
        youtube: ["Fun Vibes", "Video World", "Epic Channel", "Creative Moments", "Tech Vibes"]
    }
};

const resultEl = document.getElementById("result");
const langSelect = document.getElementById("languageSelect");
const fontSelect = document.getElementById("fontSelect");
const clickSound = document.getElementById("clickSound");

// دالة التوليد الأساسية
document.getElementById("generateBtn").addEventListener("click", () => {
    // تشغيل الصوت
    if(clickSound) {
        clickSound.currentTime = 0;
        clickSound.play();
    }

    const type = document.getElementById("nameType").value;
    const lang = langSelect.value;
    const font = fontSelect.value;

    const randomIndex = Math.floor(Math.random() * names[lang][type].length);
    const rawName = names[lang][type][randomIndex]; 
    
    // --- عملية الزخرفة البرمجية القابلة للنسخ ---
    let finalName = rawName;
    if (unicodeMaps[font]) {
        finalName = rawName.split('').map(char => unicodeMaps[font][char] || char).join('');
    }

    resultEl.textContent = finalName; 
    resultEl.style.fontFamily = font;
    // ------------------------------------------

    // تأثير الظهور (Fade-in)
    resultEl.style.opacity = "0";
    resultEl.style.transform = "scale(0.95)";
    
    setTimeout(() => {
        resultEl.style.opacity = "1";
        resultEl.style.transform = "scale(1)";
        resultEl.style.transition = "all 0.4s ease";
    }, 50);
});

// ميزة تغيير الخط تلقائياً عند تغيير اللغة
langSelect.addEventListener("change", () => {
    if (langSelect.value === "en") {
        fontSelect.value = "'Pickyside'";
    } else {
        fontSelect.value = "'Cairo', sans-serif";
    }
});

// ميزة النسخ الاحترافية
document.getElementById("copyBtn").addEventListener("click", () => {
    const textToCopy = resultEl.textContent;
    if (textToCopy && textToCopy !== "...") {
        navigator.clipboard.writeText(textToCopy);
        alert("تم نسخ الاسم بنجاح! ✅");
    }
});
