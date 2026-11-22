document.addEventListener("DOMContentLoaded", () => {
    const bookContainer = document.getElementById("recipe-book");

    // 1. ÖN KAPAK
    const frontCover = document.createElement("div");
    frontCover.className = "page hard-cover linen-cover";
    frontCover.setAttribute("data-density", "hard");
    frontCover.innerHTML = `
        <div class="book-spine-crease"></div>
        <div class="cover-embroidery-layout">
            <div class="cover-row">
                <svg class="doodle-svg" width="68" height="68" viewBox="0 0 64 64" fill="none" stroke="#4a382b" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 38c-5 0-9-4-9-9 0-4.5 3.3-8.2 7.6-8.9C18.3 14.5 23.6 10 30 10c6.4 0 11.7 4.5 13.4 10.1 4.3.7 7.6 4.4 7.6 8.9 0 5-4 9-9 9H18z" fill="#fbf7f0"/>
                    <path d="M19 38v11c0 1.7 1.3 3 3 3h16c1.7 0 3-1.3 3-3V38" fill="#f3eadc"/>
                    <line x1="25" y1="42" x2="25" y2="48"/>
                    <line x1="30" y1="42" x2="30" y2="48"/>
                    <line x1="35" y1="42" x2="35" y2="48"/>
                </svg>

                <svg class="doodle-svg" width="76" height="64" viewBox="0 0 64 64" fill="none" stroke="#4a382b" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" style="transform: rotate(-38deg);">
                    <rect x="16" y="26" width="32" height="12" rx="3" fill="#e2be8f"/>
                    <path d="M16 30h-7c-1.5 0-2.5 1-2.5 2s1 2 2.5 2h7" fill="#cfa36e"/>
                    <path d="M48 30h7c1.5 0 2.5 1 2.5 2s-1 2-2.5 2h-7" fill="#cfa36e"/>
                </svg>

                <svg class="doodle-svg" width="66" height="68" viewBox="0 0 64 64" fill="none" stroke="#4a382b" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M14 16h36l-4 6H18l-4-6z" fill="#f5efe6"/>
                    <line x1="32" y1="22" x2="32" y2="28"/>
                    <path d="M20 28h24l4 24H16l4-24z" fill="#fbf7f0"/>
                    <circle cx="32" cy="40" r="8" fill="#fff"/>
                    <line x1="32" y1="40" x2="35" y2="35"/>
                </svg>
            </div>

            <div class="cover-middle-row">
                <svg class="doodle-svg" width="54" height="84" viewBox="0 0 48 80" fill="none" stroke="#5e432c" stroke-width="1.5" stroke-linecap="round" style="transform: rotate(-12deg);">
                    <path d="M24 72V16"/>
                    <ellipse cx="18" cy="24" rx="3.5" ry="6" transform="rotate(-30 18 24)" fill="#d6ae7b"/>
                    <ellipse cx="30" cy="24" rx="3.5" ry="6" transform="rotate(30 30 24)" fill="#d6ae7b"/>
                    <ellipse cx="18" cy="36" rx="3.5" ry="6" transform="rotate(-30 18 36)" fill="#d6ae7b"/>
                    <ellipse cx="30" cy="36" rx="3.5" ry="6" transform="rotate(30 30 36)" fill="#d6ae7b"/>
                    <ellipse cx="18" cy="48" rx="3.5" ry="6" transform="rotate(-30 18 48)" fill="#d6ae7b"/>
                    <ellipse cx="30" cy="48" rx="3.5" ry="6" transform="rotate(30 30 48)" fill="#d6ae7b"/>
                    <ellipse cx="24" cy="12" rx="3" ry="6" fill="#d6ae7b"/>
                </svg>

                <div class="cover-title-wrapper">
                    <h1 class="cover-title-embroidered">Tarif<br>Defterim</h1>
                    <span class="cover-mini-flower">✿</span>
                </div>

                <svg class="doodle-svg" width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#4a382b" stroke-width="1.6" stroke-linecap="round">
                    <circle cx="32" cy="32" r="22" fill="#e5ba8a"/>
                    <circle cx="32" cy="32" r="17" fill="#b85d43"/>
                    <path d="M18 26h28M18 38h28M26 18v28M38 18v28" stroke="#e5ba8a" stroke-width="2.5"/>
                </svg>
            </div>

            <div class="cover-row" style="padding: 0 14px;">
                <svg class="doodle-svg" width="54" height="54" viewBox="0 0 64 64" fill="none" stroke="#4a382b" stroke-width="1.6">
                    <circle cx="32" cy="32" r="20" fill="#e6be8a"/>
                    <path d="M13 30c3 5 7 2 10 5s6-3 9 1 6-4 10-1 7 2 9-3c-1-10-9-18-19-18s-18 7-19 16z" fill="#e8a5b2"/>
                    <circle cx="32" cy="32" r="6" fill="#ece3d5"/>
                </svg>

                <span class="cover-mini-flower" style="font-size: 1.5rem;">❀ ✿</span>

                <svg class="doodle-svg" width="66" height="64" viewBox="0 0 64 64" fill="none" stroke="#4a382b" stroke-width="1.6" stroke-linecap="round">
                    <path d="M14 34h36c0 11-8 18-18 18s-18-7-18-18z" fill="#c8dce6"/>
                    <line x1="34" y1="34" x2="48" y2="12" stroke-width="2.2"/>
                    <ellipse cx="35" cy="30" rx="4" ry="7" transform="rotate(25 35 30)"/>
                </svg>
            </div>

            <div class="cover-row" style="padding: 0 10px;">
                <svg class="doodle-svg" width="74" height="74" viewBox="0 0 64 64" fill="none" stroke="#4a382b" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M14 52h34v4H14z" fill="#e8dfd3"/>
                    <path d="M18 52V24c0-5 4-8 9-8h21v8H26v28H18z" fill="#f7f2ea"/>
                    <path d="M32 34h16c0 9-4 14-8 14s-8-5-8-14z" fill="#e3d7c8"/>
                    <line x1="40" y1="24" x2="40" y2="34"/>
                </svg>

                <svg class="doodle-svg" width="76" height="58" viewBox="0 0 64 48" fill="none" stroke="#4a382b" stroke-width="1.6" stroke-linejoin="round">
                    <ellipse cx="20" cy="20" rx="5" ry="7" fill="#f2d6b3"/>
                    <ellipse cx="32" cy="20" rx="5" ry="7" fill="#f2d6b3"/>
                    <ellipse cx="44" cy="20" rx="5" ry="7" fill="#f2d6b3"/>
                    <path d="M10 24h44l-4 14H14l-4-14z" fill="#e3d3be"/>
                </svg>
            </div>
        </div>
    `;
    bookContainer.appendChild(frontCover);

    // 2. SOL İÇ KAPAK SAYFASI
    const insideFrontCover = document.createElement("div");
    insideFrontCover.className = "page left-page";
    insideFrontCover.innerHTML = ``;
    bookContainer.appendChild(insideFrontCover);

    // 3. SAĞ SAYFA: İÇİNDEKİLER
    const tocPage = document.createElement("div");
    tocPage.className = "page right-page";
    let tocItemsHTML = "";
    recipes.forEach((recipe, index) => {
        const targetPageIndex = 3 + index;
        tocItemsHTML += `
            <li class="toc-item" data-target-page="${targetPageIndex}">
                <span>✦ ${recipe.title}</span>
                <span>s. ${index + 1}</span>
            </li>
        `;
    });

    tocPage.innerHTML = `
        <div class="washi-tape tape-top-right"></div>
        <h2 class="toc-title">İçindekiler</h2>
        <p style="text-align:center; color:#7d624d; font-size:0.95rem; margin-bottom:14px;">Gitmek istediğin tarifin üzerine tıkla ✨</p>
        <ul class="toc-list">
            ${tocItemsHTML}
        </ul>
        <div class="page-quote" style="position:absolute; bottom:22px; left:0; right:0; text-align:center;">
            "Mutfakta sevgiyle pişen her şey şifadır."
        </div>
    `;
    bookContainer.appendChild(tocPage);

    // 4. HER TARİF İÇİN TEK BİR TAM SAYFA
    recipes.forEach((recipe, index) => {
        const isLeft = index % 2 === 0;
        const recipePage = document.createElement("div");
        recipePage.className = `page ${isLeft ? "left-page" : "right-page"}`;

        const ingredientsHTML = recipe.ingredients
            .map(item => `<li onclick="this.classList.toggle('checked')">${item}</li>`)
            .join("");

        const stepsHTML = recipe.steps
            .map((step, i) => `<li><span class="step-num">${i + 1}</span><span>${step}</span></li>`)
            .join("");

        // Görsel her tarifte Malzemeler kutusunun hemen altına yerleşir
        const leftImageHTML = recipe.image
            ? `<div class="ingredients-illustration"><img src="${recipe.image}" alt="${recipe.title}"></div>`
            : "";

        // Püf noktası sağ sütunda Hazırlanışı adımlarının altına yerleşir
        const tipsHTML = (recipe.tips && recipe.tips.trim() !== "")
            ? `<div class="tips-box"><span class="tips-title">💡 Püf Noktası:</span>${recipe.tips}</div>`
            : "";

        recipePage.innerHTML = `
            <div class="washi-tape ${isLeft ? "tape-top-left" : "tape-top-right"}"></div>
            <div class="single-recipe-sheet">
                <div class="recipe-header">
                    <h2 class="recipe-title">${recipe.title}</h2>
                </div>

                <div class="recipe-columns">
                    <div class="left-col-wrapper">
                        <div class="col-ingredients">
                            <span class="section-badge">Malzemeler</span>
                            <ul class="ingredient-list">
                                ${ingredientsHTML}
                            </ul>
                        </div>
                        ${leftImageHTML}
                    </div>

                    <div class="col-steps">
                        <div>
                            <span class="section-badge">Hazırlanışı</span>
                            <ul class="steps-list">
                                ${stepsHTML}
                            </ul>
                        </div>
                        ${tipsHTML}
                    </div>
                </div>

                <div class="recipe-footer-area">
                    <div class="bottom-row">
                        <span class="page-quote">${recipe.quote || ""}</span>
                        <span class="footer-emojis">🍂 ✨</span>
                    </div>
                </div>
            </div>
            <span class="page-number ${isLeft ? "left-num" : "right-num"}">${index + 1}</span>
        `;
        bookContainer.appendChild(recipePage);
    });

    if (recipes.length % 2 === 1) {
        const extraBlankPage = document.createElement("div");
        extraBlankPage.className = "page right-page";
        bookContainer.appendChild(extraBlankPage);
    }

    // 5. ARKA KAPAK
    const backCover = document.createElement("div");
    backCover.className = "page hard-cover";
    backCover.setAttribute("data-density", "hard");
    backCover.innerHTML = `
        <div class="cover-embroidery-layout" style="justify-content: center;">
            <p class="cover-subtitle">El yapımı tarif defteri</p>
            <div style="font-size: 2rem; margin-top: 15px;">🤎</div>
        </div>
    `;
    bookContainer.appendChild(backCover);

    // 6. STPAGEFLIP BAŞLAT
    const pageFlip = new St.PageFlip(bookContainer, {
        width: 480,
        height: 620,
        size: "stretch",
        minWidth: 360,
        maxWidth: 480,
        minHeight: 460,
        maxHeight: 620,
        usePortrait: false,
        maxShadowOpacity: 0.45,
        showCover: true,
        mobileScrollSupport: false
    });

    pageFlip.loadFromHTML(document.querySelectorAll(".page"));

    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const pageIndicator = document.getElementById("page-indicator");

    prevBtn.addEventListener("click", () => pageFlip.flipPrev());
    nextBtn.addEventListener("click", () => pageFlip.flipNext());

    pageFlip.on("flip", (e) => {
        const current = e.data;
        const total = pageFlip.getPageCount();
        if (current === 0) {
            pageIndicator.textContent = "Ön Kapak";
        } else if (current >= total - 1) {
            pageIndicator.textContent = "Arka Kapak";
        } else if (current === 1 || current === 2) {
            pageIndicator.textContent = "İçindekiler";
        } else {
            const leftNum = current - 2;
            const rightNum = current - 1;
            pageIndicator.textContent = `Sayfa ${leftNum} - ${rightNum}`;
        }
    });

    document.querySelectorAll(".toc-item").forEach(item => {
        item.addEventListener("click", () => {
            const target = parseInt(item.getAttribute("data-target-page"), 10);
            pageFlip.flip(target);
        });
    });
});