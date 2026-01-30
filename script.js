const unicodeMaps = {
    "'Pickyside'": {
        'a': '𝔞', 'b': '𝔟', 'c': '𝔠', 'd': '𝔡', 'e': '𝔢', 'f': '𝔣', 'g': '𝔤', 'h': '𝔥', 'i': '𝔦', 'j': '𝔧', 'k': '𝔨', 'l': '𝔩', 'm': '𝔪', 'n': '𝔫', 'o': '𝔬', 'p': '𝔭', 'q': '𝔮', 'r': '𝔯', 's': '𝔰', 't': '𝔱', 'u': '𝔲', 'v': '𝔳', 'w': '𝔴', 'x': '𝔵', 'y': '𝔶', 'z': '𝔷',
        'A': '𝔄', 'B': '𝔅', 'C': 'ℭ', 'D': '𝔇', 'E': '𝔈', 'F': '𝔉', 'G': '𝔊', 'H': 'ℌ', 'I': 'ℑ', 'J': '𝔍', 'K': '𝔎', 'L': '𝔏', 'M': '𝔐', 'N': '𝔑', 'O': '𝔒', 'P': '𝔓', 'Q': '𝔔', 'R': 'ℜ', 'S': '𝔖', 'T': '𝔗', 'U': '𝔘', 'V': '𝔙', 'W': '𝔚', 'X': '𝔛', 'Y': '𝔜', 'Z': 'ℨ'
    },
    "'CustomFont2'": {
        'a': 'ⓐ', 'b': 'ⓑ', 'c': 'ⓒ', 'd': 'ⓓ', 'e': 'ⓔ', 'f': 'ⓕ', 'g': 'ⓖ', 'h': 'ⓗ', 'i': 'ⓘ', 'j': 'ⓙ', 'k': 'ⓚ', 'l': 'ⓛ', 'm': 'ⓜ', 'n': 'ⓝ', 'o': 'ⓞ', 'p': 'ⓟ', 'q': 'ⓠ', 'r': 'ⓡ', 's': 'ⓢ', 't': 'ⓣ', 'u': 'ⓤ', 'v': 'ⓥ', 'w': 'ⓦ', 'x': 'ⓧ', 'y': 'ⓨ', 'z': 'ⓩ'
    }
};
// قائمة الأسماء المحدثة لكل نوع ولغة
const names = {
    ar: {
        games: [ "فانتازيا🔥", "نينجا الظل", "المحارب الأخير", "أسطورة الفضاء", "قاهر العمالقة"],
        projects: ["مشروع العبقرية", "فكرة مبتكرة", "إنجاز المستقبل", "أفق الإبداع", "حلول ذكية"],
        youtube: ["يوتيوبر العبقري", "قناة المرح", "عالم الفيديوهات", "لحظات ممتعة", "تحديات مذهلة"]
    },
    en: {
        games: ["Shadow Ninja", "Final Warrior", "Space Legend", "Fantasy Quest", "Titan Slayer"],
        projects: ["Genius Project", "Innovative Idea", "Future Achievement", "Creative Horizon", "Smart Solutions"],
        youtube: ["Fun Vibes", "Video World", "Epic Channel", "Creative Moments", "Tech Vibes"]
    }
};

const resultEl = document.getElementById("result");
// جلب الاسم العشوائي من المصفوفة
    const nameRaw = names[lang][type][randomIndex]; 
    let finalName = nameRaw;

    // تحويل النص فعلياً إلى Unicode لضمان نجاح النسخ المزخرف
    if (unicodeMaps[font]) {
        finalName = nameRaw.split('').map(char => unicodeMaps[font][char] || char).join('');
    }

    // عرض النص النهائي في الصفحة
    resultEl.textContent = finalName; 
    
    // تطبيق الخط المختار (للمظهر البصري الإضافي)
    resultEl.style.fontFamily = font;
    const lang = langSelect.value;
    const font = fontSelect.value;

    const randomIndex = Math.floor(Math.random() * names[lang][type].length);
    const name = names[lang][type][randomIndex];

    // تطبيق النص والخط المختار
    resultEl.textContent = name;
    resultEl.style.fontFamily = font;

    // إضافة تأثير ظهور (Fade-in) بسيط عند كل ضغطة
    resultEl.style.opacity = "0";
    resultEl.style.transform = "scale(0.95)"; // تأثير تكبير بسيط
    
    setTimeout(() => {
        resultEl.style.opacity = "1";
        resultEl.style.transform = "scale(1)";
        resultEl.style.transition = "all 0.4s ease";
    }, 50);
});

// ميزة إضافية: تغيير الخط الافتراضي تلقائياً عند تغيير اللغة
langSelect.addEventListener("change", () => {
    if (langSelect.value === "en") {
        fontSelect.value = "Pickyside"; // يحول لخطك الجديد تلقائياً عند اختيار الإنجليزية
    } else {
        fontSelect.value = "'Cairo', sans-serif"; // يعود للخط العربي عند اختيار العربية
    }
});
// ميزة النسخ الاحترافية
const copyBtn = document.createElement("button");
copyBtn.innerHTML = "📋 نسخ الاسم";
copyBtn.className = "copy-style"; // أضف لها تنسيق في CSS
resultEl.parentElement.appendChild(copyBtn);

copyBtn.onclick = () => {
    navigator.clipboard.writeText(resultEl.textContent);
    alert("تم نسخ الاسم بنجاح! ✅");
};
// استدعاء عنصر الصوت
const clickSound = document.getElementById("clickSound");

document.getElementById("generateBtn").addEventListener("click", () => {
    // تشغيل الصوت
    clickSound.currentTime = 0; // لإعادة الصوت للبداية إذا ضغط المستخدم بسرعة
    clickSound.play();

    // باقي الكود الخاص بتوليد الأسماء...
    const type = document.getElementById("nameType").value;
    const lang = document.getElementById("languageSelect").value;
    // ... إلخ
});
function playPopSound() {
    const context = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = context.createOscillator();
    const gainNode = context.createGain();

    oscillator.type = 'sine'; // نوع الموجة الصوتية
    oscillator.frequency.setValueAtTime(500, context.currentTime); // التردد
    oscillator.connect(gainNode);
    gainNode.connect(context.destination);

    oscillator.start();
    gainNode.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 0.1);
    oscillator.stop(context.currentTime + 0.1);
}

// ثم تناديه داخل الزر
document.getElementById("generateBtn").addEventListener("click", () => {
    playPopSound();
    // كود توليد الاسم...
});
document.getElementById("copyBtn").addEventListener("click", () => {
    navigator.clipboard.writeText(resultEl.textContent);
    alert("تم النسخ! ✅");
});
const modeToggle = document.getElementById('darkModeToggle');
const body = document.body;

modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // تغيير شكل الزر بين الشمس والقمر
    if (body.classList.contains('dark-mode')) {
        modeToggle.textContent = '☀️';
    } else {
        modeToggle.textContent = '🌙';
    }
});

