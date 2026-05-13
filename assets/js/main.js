// Hero Slider

var heroSwiper = new Swiper(".heroSwiper", {
  loop: true,

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});

// Gallery Slider

var gallerySwiper = new Swiper(".gallerySwiper", {
  loop: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

// Testimonial Slider

var testimonialSwiper = new Swiper(".testimonialSwiper", {
  loop: true,

  speed: 1000,

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

// Best Seller Slider

var bestSellerSwiper = new Swiper(".bestSellerSwiper", {
  loop: true,

  speed: 1000,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 25,
    },

    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

// Counter Animation On Scroll

const counters = document.querySelectorAll(".counter");

let counterStarted = false;

window.addEventListener("scroll", () => {
  const section = document.querySelector(".counter-section");

  const sectionTop = section.offsetTop - 300;

  if (window.scrollY > sectionTop && !counterStarted) {
    counters.forEach((counter) => {
      const updateCounter = () => {
        const target = Number(counter.getAttribute("data-target"));

        let current = Number(counter.textContent);

        const increment = target / 100;

        if (current < target) {
          current += increment;

          counter.textContent = Math.ceil(current);

          setTimeout(updateCounter, 20);
        } else {
          counter.textContent = target + "+";
        }
      };

      updateCounter();
    });

    counterStarted = true;
  }
});

// Sticky Navbar Effect

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".custom-navbar");

  navbar.classList.toggle("sticky", window.scrollY > 100);
});

// Language Translation

const englishBtn = document.getElementById("englishBtn");
const arabicBtn = document.getElementById("arabicBtn");

const translations = {
  en: {
    // Navigation
    navHome: "Home",
    navAbout: "About",
    navMenu: "Menu",
    navGallery: "Gallery",
    navContact: "Contact",

    // Hero Section 1
    herosub: "WELCOME TO HASOON",

    heroTitle: `
  <span class="hero-white">GOOD FOOD</span>
  <span class="hero-script">Great Moments</span>
`,

    heroText:
      "Fresh ingredients, bold flavors, and great service — all served fast.",

    herobtn: "View Menu",

    // Hero Section 2
    herosub2: "PREMIUM QUALITY",

    heroTittle2: `
  <span class="hero-white">Taste The</span>
  <span class="hero-script">Real Flavor</span>
`,

    heroText2: "Fresh food, rich flavor, and quality service every day.",

    herobtn2: "View Menu",

    //about section
    aboutsub: "ABOUT US",
    aboutTitle: "where taste meets quality",
    aboutText:
      "At Hasoon Fast Foods, we bring people together with delicious flavors and a premium fast food experience. As a trusted fast food restaurant in Saudi Arabia, we serve freshly prepared meals with a focus on quality, hygiene, and customer satisfaction.",
    aboutText1:
      "From juicy burgers, burgers and fries, loaded fries, crispy fries, and zinger burgers to Arabian shawarma, grilled chicken, chicken strips, and authentic Arabian food, every dish is made with care and flavor. We are proud to be known for crispy chicken in Saudi Arabia, tasty snack packs, and halal fast food loved by families and food lovers alike.",
    aboutText2:
      "Whether you are searching for the best fast food in Saudi Arabia, a family restaurant, dine in restaurant, takeaway restaurant, or fast food delivery in Saudi Arabia, Hasoon Fast Foods is here to satisfy your cravings with quick service and delicious meals — day or night.",

    infoYears: "Years Experience",
    infoCoffee: "Fresh Coffee",
    aboutbtn: "Discover More",

    //menu section
    menusub: "OUR MENU",
    menuTitle: "crafted for Every Craving",
    sandwichTitle: "Sandwiche",
    sandwichDesc: "Delicious and satisfying sandwich options.",
    burgerTitle: "Burger",
    burgerDesc: "Bite Into Pure Deliciousness.",
    breakfastTitle: "Breakfast",
    breakfastDesc: "Freshly Prepared Morning Favorites.",
    juiceTitle: "Fresh Juice",
    juiceDesc: "Pure Freshness in Every Sip.",
    dishTitle: "Dish",
    dishDesc: "Loaded With Amazing Flavors.",
    addonTitle: "Add-on",
    addonDesc: "Perfect Add-Ons for Every Meal.",
    allmenu: "View All Menu",

    //best seller section
    bestSellerSub: "BEST SELLERS",
    bestSellerTitle: "our most popular dishes",
    best1Title: "Big Wajabha zinger",
    best1Price: "$19.50",
    best2Title: "Big Thakka thorthilla",
    best2Price: "$12",
    best3Title: "Big Burger zinger Wajabha",
    best3Price: "$18.50",
    best4Title: "Big strips",
    best4Price: "$12",
    best5Title: "koodu jambhu wajaba",
    best5Price: "$18.50",
    best6Title: "Mangooh(grilled shwarma )",
    best6Price: "$12",
    best7Title: "dish medium potato",
    best7Price: "$7",
    best8Title: "big bobcorn",
    best8Price: "$15",
    best9Title: "dish fish fillet",
    best9Price: "$18",
    best10Title: "dish misahhab",
    best10Price: "$18",
    best11Title: "falafil",
    best11Price: "$7",
    best12Title: "mind lime & orange juice",
    best12Price: "",

    //counter section
    CounterSub: "OUR ACHIEVEMENTS",
    CounterTitle: "Serving Happiness Every Day",
    happyCustomer: "Happy Customers",
    foodvariety: "Food Variety",
    experience: "Years Experience",
    branches: "Branches",

    //Gallery
    gallerySub: "GALLERY",
    galleryTitle: "a feast for the eyes",

    //Testimonial
    testimonialSub: "TESTIMONIALS",
    testimonialTitle: "what our customers say",
    testimonial1Name: "Sarah Johnson",
    testimonial1Desc:
      "Amazing coffee and relaxing atmosphere. One of the best cafes I have visited.",
    testimonial2Name: "Michael Brown",
    testimonial2Desc:
      "Premium quality coffee with elegant interior design and friendly staff.",
    testimonial3Name: "Emma Wilson",
    testimonial3Desc:
      "Perfect place for meetings and coffee lovers. Highly recommended.",

    //branch section
    branchSub: "OUR BRANCHES",
    branchTitle: "find us in your city",
    branch1Name: "Hasoon An Nuzha",
    branch1Address: "An Nuzha District, Street, Hail, Saudi Arabia",
    branch2Name: "Hasoon Moonusiya",
    branch2Address: "Moonusiya District, Najah",
    branch3Name: "Hasoon Na Nefal",
    branch3Address: "An Nefal District, Bhaharal Ahmar",

    // Footer
    footerAboutText:
      "At Hasoon Fast Foods, we serve fresh, flavorful, and quality fast food made to satisfy every craving. Enjoy delicious taste, quick service, and happiness in every bite.",
    footerlinkTitle: "Quick Links",
    footerHome: "Home",
    footerAbout: "About",
    footerMenu: "Menu",
    footerGallery: "Gallery",
    footerContact: "Contact",
    footerHoursTitle: "Opening Hours",
    day: "Monday - Friday",
    day1: "Saturday",
    close: "Sunday",
    footerContactTitle: "Contact Us",
    footercontactDesc: "An Nuzha District, Street, Hail, Saudi Arabia",
    footernumber: "+966 545 657 996",
    footermail: "support@hasoonfoods.com",
  },

  ar: {
    // Navigation
    navHome: "الرئيسية",
    navAbout: "معلومات عنا",
    navMenu: "القائمة",
    navGallery: "المعرض",
    navContact: "اتصل بنا",

    // Hero Section 1
    herosub: "مرحبًا بكم في حسون",

    heroTitle: `
  <span class="hero-white">طعام رائع</span>
  <span class="hero-script">لحظات مميزة</span>
`,

    heroText: "مكونات طازجة ونكهات غنية وخدمة سريعة يوميًا.",

    herobtn: "عرض القائمة",

    // Hero Section 2
    herosub2: "جودة عالية",

    heroTittle2: `
  <span class="hero-white">تجربة الطعم</span>
  <span class="hero-script">الحقيقي</span>
`,

    heroText2: "طعام طازج ونكهة غنية وخدمة عالية الجودة كل يوم.",

    herobtn2: "عرض القائمة",

    //about section
    aboutsub: "معلومات عنا",
    aboutTitle: "حيث يلتقي الطعم بالجودة",
    aboutText:
      "في حسون للأطعمة السريعة، نجمع الناس معًا من خلال نكهات لذيذة وتجربة طعام سريع مميزة. نحن نقدم وجبات طازجة مع التركيز على الجودة والنظافة ورضا العملاء. كأحد مطاعم الوجبات السريعة الموثوقة في المملكة العربية السعودية، نحن ملتزمون بتقديم طعام لذيذ وطازج يوميًا يلبي توقعات عملائنا.",
    aboutText1:
      "من البرجر اللذيذة والبطاطس المقرمشة إلى الشوربة والدجاج المقدد والنكهات العربية الأصلية، يتم إعداد كل وجبة بعناية.",
    aboutText2:
      "سواء كنت تأكل هنا أو تأخذ الطلب أو تطلب عبر الإنترنت، فإننا هنا لتقديم طعام طازج وطعم جيد مع خدمة سريعة وودية كل يوم.",

    infoYears: "سنوات الخبرة",
    infoCoffee: "قهوة طازجة",
    aboutbtn: "اكتشف المزيد",

    //menu section
    menusub: "قائمتنا",
    menuTitle: "مصممة لكل رغبة",
    sandwichTitle: "ساندويتش",
    sandwichDesc: "خيارات ساندويتش لذيذة ومشبعة.",
    burgerTitle: "برجر",
    burgerDesc: "خيارات برجر لذيذة ومشبعة.",
    breakfastTitle: "فطور",
    breakfastDesc: "خيارات فطور لذيذة ومشبعة.",
    juiceTitle: "عصير طازج",
    juiceDesc: "خيارات عصير طازج لذيذة ومشبعة.",
    dishTitle: "طبق",
    dishDesc: "خيارات أطباق لذيذة ومشبعة.",
    addonTitle: "إضافة",
    addonDesc: "خيارات إضافية لذيذة ومشبعة.",
    allmenu: "عرض كل القائمة",

    //best seller section
    bestSellerSub: "الأكثر مبيعًا",
    bestSellerTitle: "أطباقنا الأكثر شعبية",
    best1Title: "وجبة وجبة زينجر كبيرة",
    best1Price: "$19.50",
    best2Title: "وجبة ثكا ثورثيلا كبيرة",
    best2Price: "$12",
    best3Title: "وجبة برجر زينجر كبيرة",
    best3Price: "$18.50",
    best4Title: "وجبة شرائح كبيرة",
    best4Price: "$12",
    best5Title: "كودو جامبو وجبة",
    best5Price: "$18.50",
    best6Title: "مانجو (شاورما مشوية)",
    best6Price: "$12",
    best7Title: "طبق متوسط بطاطس",
    best7Price: "$7",
    best8Title: "بوبكورن كبير",
    best8Price: "$15",
    best9Title: "طبق فيليه سمك",
    best9Price: "$18",
    best10Title: "طبق مسحب",
    best10Price: "$18",
    best11Title: "فلافل",
    best11Price: "$7",
    best12Title: "عصير ليمون ومانجو",
    best12Price: "",

    //counter section
    CounterSub: "إنجازاتنا",
    CounterTitle: "نقدم السعادة كل يوم",
    happyCustomer: "عملاء سعداء",
    foodvariety: "تنوع الطعام",
    experience: "سنوات الخبرة",
    branches: "الفروع",

    //Gallery
    gallerySub: "المعرض",
    galleryTitle: "وليمة للعيون",

    //Testimonial
    testimonialSub: "الشهادات",
    testimonialTitle: "ماذا يقول عملاؤنا",
    testimonial1Name: "سارة جونسون",
    testimonial1Desc:
      "قهوة مذهلة وأجواء مريحة. واحدة من أفضل المقاهي التي زرتها.",
    testimonial2Name: "مايكل براون",
    testimonial2Desc: "قهوة عالية الجودة مع تصميم داخلي أنيق وموظفين ودودين.",
    testimonial3Name: "إيما ويلسون",
    testimonial3Desc: "مكان مثالي للاجتماعات ومحبي القهوة. أوصي به بشدة.",

    //branch section
    branchSub: "فروعنا",
    branchTitle: "اعثر علينا في مدينتك",
    branch1Name: "حسون النزهة",
    branch1Address: "حي النزهة، شارع، حائل، المملكة العربية السعودية",
    branch2Name: "حسون مونوسيا",
    branch2Address: "حي مونوسيا، نجاح",
    branch3Name: "حسون النفل",
    branch3Address: "حي النفل، بحرة الأحمر",

    // Footer
    footerAboutText:
      "في حسون للأطعمة السريعة، نقدم طعامًا سريعًا طازجًا ولذيذًا وعالي الجودة يلبي كل رغبة. استمتع بطعم لذيذ، خدمة سريعة، وسعادة في كل لقمة.",
    footerlinkTitle: "روابط سريعة",
    footerHome: "الرئيسية",
    footerAbout: "معلومات عنا",
    footerMenu: "القائمة",
    footerGallery: "المعرض",
    footerContact: "اتصل بنا",
    footerHoursTitle: "ساعات العمل",
    day: "الاثنين - الجمعة",
    day1: "السبت",
    close: "الأحد",
    footerContactTitle: "اتصل بنا",
    footercontactDesc: "حي النزهة، شارع، حائل، المملكة العربية السعودية",
    footernumber: "+966 545 657 996",
    footermail: "support@hasoonfoods.com",
  },
};

function setLanguage(language) {
  for (const key in translations[language]) {
    const element = document.getElementById(key);

    if (element) {
      element.innerHTML = translations[language][key];
    }
  }
}

// English

englishBtn.addEventListener("click", () => {
  setLanguage("en");

  document.body.style.fontFamily = "Arial, sans-serif";

  englishBtn.classList.add("active");
  arabicBtn.classList.remove("active");
});

// Arabic

arabicBtn.addEventListener("click", () => {
  setLanguage("ar");

  document.body.style.fontFamily = "'Cairo', sans-serif";

  arabicBtn.classList.add("active");
  englishBtn.classList.remove("active");
});

// AOS

AOS.init({
  duration: 1000,
  once: true,
});
