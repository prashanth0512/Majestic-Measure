

const SERVICES = {
    'bespoke-suits': {
        name: 'Bespoke Suits',
        heroImg: '../images/bespoke-suit.png',
        overviewImg: '../images/cat-blacktie.png',
        badgeIcon: 'fa-user-tie',
        badgeText: '10–14 WEEKS',
        title: 'Bespoke <em>Suits</em>',
        tagline: 'The pinnacle of personal style',
        meta: [
            { label: 'STARTING PRICE', value: 'From $2,500' },
            { label: 'FITTINGS', value: '3–5 Sessions' },
            { label: 'TURNAROUND', value: '10–14 Weeks' }
        ],
        overviewH2: 'Where <span class="accent">Every Stitch</span> Tells Your Story',
        overviewBody: [
            'A bespoke suit from Maison De Tailleur begins not with cloth, but with a conversation. We listen, we understand, and only then do we create a garment that is singularly yours.',
            'Unlike ready-to-wear or even made-to-measure, a true bespoke suit is built upon a unique paper pattern made from scratch to your body\'s precise measurements — over 40 of them. The result is a fit impossible to achieve by any other means.',
            'Every jacket is constructed on a floating horsehair canvas, hand-padded and hand-stitched to mould gently to your frame. This is not efficiency. This is craft.'
        ],
        processH2: 'Your <span class="accent">Bespoke Process</span>',
        processLabel: 'THE JOURNEY',
        steps: [
            { num: '01', title: 'Consultation', desc: 'We sit together for one to two hours. You tell us about your lifestyle, your occasions, your aesthetic values. We show you fabrics, discuss cut and silhouette.' },
            { num: '02', title: 'Measurements', desc: 'Over 40 precise measurements are taken by your personal tailor. A unique paper pattern is created exclusively for your body — never shared, never reused.' },
            { num: '03', title: 'Baste Fitting', desc: 'A rough hand-stitched version is assembled to verify the pattern\'s accuracy. Major decisions about shape are made and refined at this stage.' },
            { num: '04', title: 'Final Delivery', desc: 'After further fittings and refinements, your completed suit is delivered. Your pattern is stored in our archive for all future commissions.' }
        ],
        includesH2: 'Every <span class="accent">Commission</span> Includes',
        includes: [
            { icon: 'fa-ruler-combined', title: '40+ Measurements', desc: 'A unique pattern built entirely from scratch around your body.' },
            { icon: 'fa-scroll', title: '4,000+ Fabric Selection', desc: 'Access to our full library from the world\'s finest mills including Loro Piana and Holland & Sherry.' },
            { icon: 'fa-hands-holding', title: 'Hand-Padded Canvas', desc: 'Every jacket is built on a floating horsehair canvas, never fused.' },
            { icon: 'fa-hand-sparkles', title: '3–5 Fittings', desc: 'Baste fitting, forward balance check, and final fitting with full refinements.' },
            { icon: 'fa-shield-halved', title: 'Lifetime Care', desc: 'Your pattern is archived and we stand behind every garment with complimentary first-year adjustments.' },
            { icon: 'fa-star', title: 'Named Tailor', desc: 'You are assigned a single dedicated tailor who knows your body and your taste throughout the entire process.' }
        ],
        ctaH2: 'Begin Your Bespoke <span class="accent">Journey</span>',
        ctaP: 'Your first consultation is private, unhurried, and without obligation. Come and meet us. See the cloth. Understand what is possible.',
        ctaBtn: 'Book a Consultation'
    },
    'wedding-suits': {
        name: 'Wedding Suits',
        heroImg: '../images/wedding_suit.png',
        overviewImg: '../images/wedding_suit.png',
        badgeIcon: 'fa-ring',
        badgeText: '10–12 WEEKS',
        title: 'Wedding <em>Suits</em>',
        tagline: 'Dressed for the most important day',
        meta: [
            { label: 'STARTING PRICE', value: 'From $2,800' },
            { label: 'FITTINGS', value: '3–4 Sessions' },
            { label: 'TURNAROUND', value: '10–12 Weeks' }
        ],
        overviewH2: 'The Gravity of <span class="accent">Great Occasions</span>',
        overviewBody: [
            'A wedding is the highest expression of life\'s ceremonies. The suit you wear should be equal to that moment — not an afterthought, but a declaration.',
            'We work with grooms, fathers, and entire wedding parties to create a unified yet individually considered aesthetic. Whether morning dress, lounge suits, or black tie, every commission begins with the same question: who are you, and how do you want to be remembered?',
            'Each garment is made to the same standard as our finest bespoke — floating canvas, hand-stitching, 40+ measurements — with the understanding that some days must simply be extraordinary.'
        ],
        processH2: 'Your <span class="accent">Wedding Process</span>',
        processLabel: 'THE JOURNEY',
        steps: [
            { num: '01', title: 'Initial Consultation', desc: 'We discuss your wedding vision, the venue, the season, and what you want your garments to say about you.' },
            { num: '02', title: 'Party Planning', desc: 'If dressing a wedding party, we schedule a group visit. Each person receives individual attention while maintaining visual harmony.' },
            { num: '03', title: 'Fittings', desc: 'With your wedding date locked, we schedule fittings within a precise timeline, ensuring delivery with at least three weeks to spare.' },
            { num: '04', title: 'Wedding Day Support', desc: 'A member of our team is available by phone on your wedding day for any last-minute guidance.' }
        ],
        includesH2: 'Every <span class="accent">Wedding</span> Commission',
        includes: [
            { icon: 'fa-people-group', title: 'Full Party Service', desc: 'Groom, best men, fathers, and ushers — all dressed to a unified vision with individual cuts.' },
            { icon: 'fa-scroll', title: 'Dedicated Fabric Guidance', desc: 'Seasonal-appropriate fabrics — lightweight linens for summer, warm flannels for winter.' },
            { icon: 'fa-hands-holding', title: 'Hand-Built Canvas', desc: 'No shortcuts on the most important day. Every jacket features a full floating canvas construction.' },
            { icon: 'fa-calendar-check', title: 'Guaranteed Timeline', desc: 'We set a clear schedule from day one, with completion confirmed well before your ceremony.' },
            { icon: 'fa-shirt', title: 'Shirt & Accessories', desc: 'Optional: co-ordinated bespoke shirts, ties, and pocket squares to complete the look.' },
            { icon: 'fa-shield-halved', title: 'Post-Wedding Care', desc: 'Cleaning, pressing, and storage guidance provided. Alterations available for future use.' }
        ],
        ctaH2: 'Begin Your Day\'s <span class="accent">Garment</span>',
        ctaP: 'Wedding commissions require a minimum of 12 weeks. Book your consultation early to ensure availability.',
        ctaBtn: 'Book a Consultation'
    },
    'custom-shirts': {
        name: 'Custom Shirts',
        heroImg: '../images/custom-shirt.png',
        overviewImg: '../images/custom-shirt.png',
        badgeIcon: 'fa-shirt',
        badgeText: '2–3 WEEKS',
        title: 'Custom <em>Shirts</em>',
        tagline: 'The foundation of every great outfit',
        meta: [
            { label: 'STARTING PRICE', value: 'From $290' },
            { label: 'FITTINGS', value: '1–2 Sessions' },
            { label: 'TURNAROUND', value: '2–3 Weeks' }
        ],
        overviewH2: 'The Foundation of Every <span class="accent">Great Outfit</span>',
        overviewBody: [
            'The finest suit in the world is diminished by a shirt that does not fit. Our made-to-measure shirts ensure that the most important layer of your wardrobe is exactly right — in fit, in fabric, and in detail.',
            'We stock over 500 shirting fabrics: sea-island cottons, Swiss voiles, Irish linens, and silks from the finest mills in Europe and Asia. Each shirt is cut to your body with every detail — collar style, cuff type, placket, pocket — determined by you.',
            'Most clients find that within two or three commissions, their pattern is refined to perfection. From that point, ordering new shirts is seamless and effortless.'
        ],
        processH2: 'Your <span class="accent">Shirt Process</span>',
        processLabel: 'THE JOURNEY',
        steps: [
            { num: '01', title: 'Fabric Selection', desc: 'Visit our studio and select from our extensive shirting library. We guide you based on your intended use — business, formal, casual, or sporting.' },
            { num: '02', title: 'Measurements', desc: 'Over 20 shirt-specific measurements are taken. We discuss collar height, sleeve length preferences, and torso shape requirements.' },
            { num: '03', title: 'Detail Choices', desc: 'Every detail is chosen: collar style, cuff type, front placket, pocket, monogram, and mother-of-pearl or horn buttons.' },
            { num: '04', title: 'Delivery & Refinement', desc: 'First shirts are fitted before completion. After the initial commission, reorders require no fitting and deliver in 10 days.' }
        ],
        includesH2: 'Every <span class="accent">Shirt</span> Commission',
        includes: [
            { icon: 'fa-scroll', title: '500+ Shirting Fabrics', desc: 'Sea-island cotton, Swiss poplin, Irish linen, and silk options.' },
            { icon: 'fa-ruler', title: 'Personal Pattern', desc: 'A made-to-measure pattern stored for all future reorders.' },
            { icon: 'fa-sliders', title: 'Full Customisation', desc: 'Collar, cuffs, placket, pocket, buttons — every detail decided by you.' },
            { icon: 'fa-font', title: 'Monogramming', desc: 'Optional embroidered initials in your choice of thread colour and stitch style.' },
            { icon: 'fa-rotate', title: 'Effortless Reorders', desc: 'Once your pattern is perfected, new shirts ordered in minutes with 10-day delivery.' },
            { icon: 'fa-box-open', title: 'Premium Presentation', desc: 'Delivered in a Maison tissue-lined shirt box with full care instructions.' }
        ],
        ctaH2: 'Commission Your Perfect <span class="accent">Shirt</span>',
        ctaP: 'First-time clients are invited for a fabric discovery session. No commitment. Just cloth, conversation, and possibility.',
        ctaBtn: 'Book a Consultation'
    },
    'alterations': {
        name: 'Alterations & Restoration',
        heroImg: '../images/case-study-3.png',
        overviewImg: '../images/alterations.png',
        badgeIcon: 'fa-scissors',
        badgeText: '5 DAYS – 3 WEEKS',
        title: 'Alterations & <em>Restoration</em>',
        tagline: 'Precision adjustments, renewed elegance',
        meta: [
            { label: 'STARTING PRICE', value: 'From $80' },
            { label: 'TURNAROUND', value: '5 Days – 3 Weeks' },
            { label: 'GARMENT TYPES', value: 'Suits, Shirts, Coats' }
        ],
        overviewH2: 'Breathing New Life Into <span class="accent">Cherished Garments</span>',
        overviewBody: [
            'A well-made garment should outlive the body\'s changes, the seasons, and the decades. Our alterations service honours that investment — adjusting, repairing, and restoring garments so they continue to serve you impeccably.',
            'Whether it is a beloved but ill-fitting inheritance, a bespoke suit that no longer quite fits after a change in weight, or a garment in need of careful repair, we approach every piece with the same attention we give a new commission.',
            'We work on garments from any maker — bringing craft and care to restoration work that most high street tailors simply cannot match.'
        ],
        processH2: 'Your <span class="accent">Alteration Process</span>',
        processLabel: 'THE JOURNEY',
        steps: [
            { num: '01', title: 'Assessment', desc: 'Free assessment of your garment. Written quotation provided before any work begins.' },
            { num: '02', title: 'Fitting', desc: 'Try the garment on in our studio. We chalk and pin all adjustments while you are wearing it for accurate results.' },
            { num: '03', title: 'Execution', desc: 'Work carried out by our senior tailors using the correct techniques for the garment\'s original construction method.' },
            { num: '04', title: 'Collection', desc: 'Final try-on and collection. Additional small refinements completed while you wait.' }
        ],
        includesH2: 'Alteration <span class="accent">Services</span>',
        includes: [
            { icon: 'fa-arrows-up-down-left-right', title: 'Resizing', desc: 'Taking in or letting out jackets, trousers, and waistcoats as your body changes.' },
            { icon: 'fa-ruler-vertical', title: 'Length Adjustments', desc: 'Trouser hems, jacket sleeves, shirt sleeves, and coat lengths to precision.' },
            { icon: 'fa-wrench', title: 'Structural Repairs', desc: 'Replacing worn linings, repairing seams, restitching canvases, and reinforcing internal structures.' },
            { icon: 'fa-rotate-right', title: 'Full Restoration', desc: 'Vintage garments brought back to their original beauty or re-cut for a modern body.' },
            { icon: 'fa-circle', title: 'Button Replacement', desc: 'Horn, mother-of-pearl, or fabric-covered buttons sourced and fitted correctly.' },
            { icon: 'fa-spray-can-sparkles', title: 'Refresh & Press', desc: 'Full steam press, spot cleaning, and presentation in our signature garment bag.' }
        ],
        ctaH2: 'Restore Your Favourite <span class="accent">Pieces</span>',
        ctaP: 'Bring in any garment for a free, no-obligation assessment. We\'ll tell you honestly what can be done and what it will cost.',
        ctaBtn: 'Book an Assessment'
    },
    'styling-consultation': {
        name: 'Styling Consultation',
        heroImg: '../images/atelier-workshop.png',
        overviewImg: '../images/consultation.png',
        badgeIcon: 'fa-palette',
        badgeText: '90 MINUTES – ONGOING',
        title: 'Styling <em>Consultation</em>',
        tagline: 'Your personal image, perfected',
        meta: [
            { label: 'STARTING PRICE', value: 'From $350' },
            { label: 'DURATION', value: '90 Minutes' },
            { label: 'FORMAT', value: 'Private Studio Session' }
        ],
        overviewH2: 'Your <span class="accent">Personal Image</span>, Perfected',
        overviewBody: [
            'Knowing what to wear is a skill, not an instinct. Our styling consultation service provides the framework, the vocabulary, and the guidance to present yourself with permanent confidence.',
            'Each session is private, unhurried, and tailored to your lifestyle — whether you are dressing for the boardroom, social occasions, or everyday excellence. We assess your existing wardrobe, identify gaps, and create a considered plan.',
            'Many clients combine styling consultations with their bespoke commissions, using the session to define their overall aesthetic direction before investing in new garments.'
        ],
        processH2: 'What to <span class="accent">Expect</span>',
        processLabel: 'THE SESSION',
        steps: [
            { num: '01', title: 'Pre-Session Questionnaire', desc: 'You complete a brief lifestyle and preference questionnaire allowing us to prepare a focused session around your specific needs.' },
            { num: '02', title: 'Wardrobe Audit', desc: 'We review photographs of your current wardrobe and key occasions — identifying what works, what doesn\'t, and why.' },
            { num: '03', title: 'Style Definition', desc: 'Through conversation and visual reference, we articulate your personal style identity and create a lookbook of your defined aesthetic.' },
            { num: '04', title: 'Action Plan', desc: 'You leave with a written wardrobe plan — priority purchases, key combinations, and fabric/colour direction for all future commissions.' }
        ],
        includesH2: 'Every <span class="accent">Consultation</span> Includes',
        includes: [
            { icon: 'fa-book-open', title: 'Personal Lookbook', desc: 'A curated visual document of your defined style direction, yours to keep.' },
            { icon: 'fa-list-check', title: 'Written Wardrobe Plan', desc: 'Priority purchases, colour palette, fabric direction, and cost estimates.' },
            { icon: 'fa-clock', title: '90 Minute Private Session', desc: 'Unhurried, private, and focused entirely on you in our Savile Row studio.' },
            { icon: 'fa-comments', title: 'Follow-Up Support', desc: 'Two weeks of email follow-up to answer any questions as you implement your plan.' },
            { icon: 'fa-palette', title: 'Colour & Fabric Guidance', desc: 'Specific recommendations on colours and fabric weights that suit your colouring and lifestyle.' },
            { icon: 'fa-rotate', title: 'Ongoing Relationship', desc: 'Quarterly check-ins available as your life and wardrobe evolve.' }
        ],
        ctaH2: 'Define Your Personal <span class="accent">Style</span>',
        ctaP: 'One session can change how you think about getting dressed forever. No sales pressure. Just clarity.',
        ctaBtn: 'Book a Session'
    }
};


const ALL_SERVICES_META = {
    'bespoke-suits':        { icon: 'fa-user-tie', name: 'Bespoke Suits', tagline: 'The pinnacle of personal style', price: 'From $2,500' },
    'wedding-suits':        { icon: 'fa-ring',     name: 'Wedding Suits', tagline: 'Dressed for the most important day', price: 'From $2,800' },
    'custom-shirts':        { icon: 'fa-shirt',    name: 'Custom Shirts', tagline: 'The foundation of every great outfit', price: 'From $290' },
    'alterations':          { icon: 'fa-scissors', name: 'Alterations & Restoration', tagline: 'Precision adjustments, renewed elegance', price: 'From $80' },
    'styling-consultation': { icon: 'fa-palette',  name: 'Styling Consultation', tagline: 'Your personal image, perfected', price: 'From $350' }
};


function renderService(slug) {
    const data = SERVICES[slug];
    if (!data) {
        document.getElementById('service-main').innerHTML =
            `<div class="container" style="padding:200px 0;text-align:center;">
                <h2>Service not found.</h2>
                <a href="services.html" class="btn btn-primary" style="margin-top:30px;display:inline-block;">Back to Services</a>
            </div>`;
        return;
    }

    
    document.title = `${data.name} | Maison De Tailleur`;

    
    document.querySelectorAll('.dropdown-menu a').forEach(a => {
        a.classList.remove('active');
        if (a.href.includes(slug)) a.classList.add('active');
    });

    
    const heroImg = document.getElementById('sd-hero-img');
    heroImg.src = data.heroImg;
    heroImg.alt = data.name;
    
    
    const heroSection = document.querySelector('.service-detail-hero');
    if (heroSection) {
        heroSection.style.backgroundImage = 'none'; 
    }

    document.getElementById('sd-badge').innerHTML = `<i class="fa-solid ${data.badgeIcon}"></i> ${data.badgeText}`;
    document.getElementById('sd-title').innerHTML = data.title;
    document.getElementById('sd-tagline').textContent = data.tagline;
    document.getElementById('sd-breadcrumb').textContent = data.name;

    document.getElementById('sd-meta').innerHTML = data.meta
        .map(m => `<div class="hero-meta-item"><label>${m.label}</label><span>${m.value}</span></div>`)
        .join('');

    
    document.getElementById('sd-overview-h2').innerHTML = data.overviewH2;
    document.getElementById('sd-overview-body').innerHTML = data.overviewBody
        .map(p => `<p>${p}</p>`).join('');
    const ovImg = document.getElementById('sd-overview-img');
    ovImg.src = data.overviewImg;
    ovImg.alt = data.name;

    
    document.getElementById('sd-process-label').textContent = data.processLabel;
    document.getElementById('sd-process-h2').innerHTML = data.processH2;
    document.getElementById('sd-steps').innerHTML = data.steps
        .map(s => `<div class="process-step reveal">
            <div class="step-badge">
                <span class="step-num">${s.num}</span>
            </div>
            <h4>${s.title}</h4>
            <p>${s.desc}</p>
        </div>`).join('');

    // Render What's Included Items
    document.getElementById('sd-includes-h2').innerHTML = data.includesH2;
    document.getElementById('sd-includes').innerHTML = data.includes
        .map(i => `<div class="include-item reveal">
            <div class="include-icon"><i class="fa-solid ${i.icon}"></i></div>
            <div class="include-content">
                <h4>${i.title}</h4>
                <p>${i.desc}</p>
            </div>
        </div>`).join('');

    // Render CTA
    document.getElementById('sd-cta-h2').innerHTML = data.ctaH2;
    document.getElementById('sd-cta-p').textContent = data.ctaP;
    document.getElementById('sd-cta-btn').textContent = data.ctaBtn;

    // Render Related Services Cards
    const related = Object.entries(ALL_SERVICES_META)
        .filter(([key]) => key !== slug)
        .slice(0, 4);

    document.getElementById('sd-related').innerHTML = related
        .map(([key, s]) => `<a href="service-detail.html?service=${key}" class="related-card reveal">
            <div class="related-badge"><i class="fa-solid ${s.icon}"></i></div>
            <div class="related-content">
                <h4>${s.name}</h4>
                <p>${s.tagline}</p>
                <div class="related-footer">
                    <span class="from">${s.price}</span>
                    <span class="related-arrow"><i class="fa-solid fa-arrow-right"></i></span>
                </div>
            </div>
        </a>`).join('');
}


function initReveal() {
    const targets = document.querySelectorAll('.reveal, .process-step, .include-item, .related-card');
    
    // Instantly reveal all elements for flawless visibility
    targets.forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'none';
        el.classList.add('active');
    });
}


function initTransitions() {
    // Smooth navigation without hiding document body
}

document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
    document.body.style.opacity = '1';
    
    const params = new URLSearchParams(window.location.search);
    const slug = params.get('service') || 'bespoke-suits';

    renderService(slug);
    initReveal();
});
