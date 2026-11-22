const recipes = [
    // --- 1. SAYFA ---
    {
        id: "sutlac",
        title: "Sütlaç",
        ingredients: [
            "1 litre taze süt (önceden kaynatılmış)",
            "1 çay bardağı pirinç",
            "2 su bardağı su",
            "1,5 su bardağı toz şeker",
            "İsteğe bağlı: 1 paket vanilya",
            "Üzeri için: Tarçın"
        ],
        steps: [
            "Pirinci yıkayıp 2 su bardağı suyla kısık ateşte iyice yumuşayana kadar haşla.",
            "Üzerine sütü ekle, ağır ateşte ara ara karıştırarak kaynamaya bırak.",
            "En az 30-40 dakika kısık ateşte pişirip kıvam aldır.",
            "Şekeri (ve vanilyayı) en son ekle, 10 dakika daha kaynatıp ocaktan al.",
            "Sütlacı fırın kaplarına paylaştır.",
            "Tepsiye su koyup kapları yerleştir, 200-220°C fırında üstleri kızarana kadar pişir.",
            "Çıkarıp dinlendir. Üzerine tarçın serperek servis et."
        ],
        tips: "",
        quote: "Afiyet ve şifa olsun... 🍂",
        image: "assets/sutlac.png"
    },

    // --- 2. SAYFA ---
    {
        id: "islak-kek",
        title: "Islak Kek",
        ingredients: [
            "3 adet yumurta",
            "1,25 su bardağı şeker",
            "1,5 su bardağı süt",
            "1 su bardağından biraz eksik sıvıyağ",
            "1 paket kabartma tozu ve vanilin",
            "1,5 su bardağından 2 parmak fazla un",
            "Sos: 3,5 su bardağı süt, 1,5 su bardağı şeker, 1 paket kakao"
        ],
        steps: [
            "Yumurta ve şekeri beyazlaşana kadar iyice çırp.",
            "Süt ve sıvıyağını ekleyip tekrar çırp.",
            "Un, kabartma tozu ve kakaoyu eleyerek karışıma ekle ve spatula ile karıştır.",
            "Yağlanmış borcama dök.",
            "180°C fırında 40-45 dakika pişir (ilk 20 dakika kapağı açma).",
            "Sos malzemelerini ocakta şeker eriyene kadar ısıt.",
            "Fırından çıkan keki dilimleyip sosu üzerine gezdir."
        ],
        tips: "Sıcak kekin üzerine biraz ılımış sosu dökmek kekin sosu daha iyi çekmesini sağlar.",
        quote: "Çay yanına en güzel klasik... ☕",
        image: "assets/islak_kek.png"
    },

    // --- 3. SAYFA (Doldurmak için title kısmına tarif adını yazman yeterli) ---
    {
        title: "Elmalı Turta",
        ingredients: [
            "1 yumurta",
            "125 gr tereyağı",
            "Yarım su bardağı şeker",
            "Yarım paket kabartma tozu",
            "2 su bardağı un",
            "4 adet elma",
            "2 yemek kaşığı toz şeker",
            "1 tatlı kaşığı tarçın",
            "Üzeri için: Pudra şekeri"
        ],
        steps: [
            "İç harcı için tavaya rendelenm iş elma, şeker ve tarçını ekleyerek pişmeye bırakalım.",
            "Yumurta, tereyağ ve şekeri karıştırıp un ve kabartma tozunu ekleyerek hamuru yoğuralım.",
            "15 dakika dinlenen hamuru ikiye ayırıp birini kalıba yayalım",
            "Elmalı harcı üzerine dökelim ve diğer hamuru da üzerine kapatalım.",
            "Önceden ısıtılmış 180°C fırında 30-35 dakika pişirelim.",
            "Soğuduktan sonra üzerine pudra şekeri serpip servis edelim."

        ],
        tips: "    
        quote: "Yiyenlerin hayran kaldığı o tarif! 🍎",
        image: ""
    },

    // --- 4. SAYFA ---
    {
        title: "",
        ingredients: ["", "", ""],
        steps: ["", "", ""],
        tips: "",
        quote: "",
        image: ""
    },

    // --- 5. SAYFA ---
    {
        title: "",
        ingredients: ["", "", ""],
        steps: ["", "", ""],
        tips: "",
        quote: "",
        image: ""
    },

    // --- 6. SAYFA ---
    {
        title: "",
        ingredients: ["", "", ""],
        steps: ["", "", ""],
        tips: "",
        quote: "",
        image: ""
    },

    // --- 7. SAYFA ---
    {
        title: "",
        ingredients: ["", "", ""],
        steps: ["", "", ""],
        tips: "",
        quote: "",
        image: ""
    },

    // --- 8. SAYFA ---
    {
        title: "",
        ingredients: ["", "", ""],
        steps: ["", "", ""],
        tips: "",
        quote: "",
        image: ""
    },

    // --- 9. SAYFA ---
    {
        title: "",
        ingredients: ["", "", ""],
        steps: ["", "", ""],
        tips: "",
        quote: "",
        image: ""
    },

    // --- 10. SAYFA ---
    {
        title: "",
        ingredients: ["", "", ""],
        steps: ["", "", ""],
        tips: "",
        quote: "",
        image: ""
    },

    // --- 11. SAYFA ---
    {
        title: "",
        ingredients: ["", "", ""],
        steps: ["", "", ""],
        tips: "",
        quote: "",
        image: ""
    },

    // --- 12. SAYFA ---
    {
        title: "",
        ingredients: ["", "", ""],
        steps: ["", "", ""],
        tips: "",
        quote: "",
        image: ""
    },

    // --- 13. SAYFA ---
    {
        title: "",
        ingredients: ["", "", ""],
        steps: ["", "", ""],
        tips: "",
        quote: "",
        image: ""
    },

    // --- 14. SAYFA ---
    {
        title: "",
        ingredients: ["", "", ""],
        steps: ["", "", ""],
        tips: "",
        quote: "",
        image: ""
    },

    // --- 15. SAYFA ---
    {
        title: "",
        ingredients: ["", "", ""],
        steps: ["", "", ""],
        tips: "",
        quote: "",
        image: ""
    },

    // --- 16. SAYFA ---
    {
        title: "",
        ingredients: ["", "", ""],
        steps: ["", "", ""],
        tips: "",
        quote: "",
        image: ""
    },

    // --- 17. SAYFA ---
    {
        title: "",
        ingredients: ["", "", ""],
        steps: ["", "", ""],
        tips: "",
        quote: "",
        image: ""
    },

    // --- 18. SAYFA ---
    {
        title: "",
        ingredients: ["", "", ""],
        steps: ["", "", ""],
        tips: "",
        quote: "",
        image: ""
    },

    // --- 19. SAYFA ---
    {
        title: "",
        ingredients: ["", "", ""],
        steps: ["", "", ""],
        tips: "",
        quote: "",
        image: ""
    },

    // --- 20. SAYFA ---
    {
        title: "",
        ingredients: ["", "", ""],
        steps: ["", "", ""],
        tips: "",
        quote: "",
        image: ""
    }
];

// Defter toplam 50 yaprak olsun diye kalan boş sayfaları otomatik tamamlar (21'den 50'ye kadar)
while (recipes.length < 50) {
    recipes.push({
        title: "",
        ingredients: [],
        steps: [],
        tips: "",
        quote: "",
        image: ""
    });
}