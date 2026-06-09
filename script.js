function toggleTheme() {
      document.body.classList.toggle("light");
    }

    const form = document.getElementById("commentForm");
    const successMessage = document.getElementById("successMessage");

    const WEB_APP_URL =
      "https://script.google.com/macros/s/AKfycbxsrmtbGvJ7hUkXU_d-tNSjObV3Rjd9CH8JJLTgwZbZOoZhebL_M8txzV5xG2Ny3pK9/exec"; // جایگزین لینک Web App خودت کن

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const name = formData.get("name").trim();

      if (!/^[آ-یa-zA-Z\s]{2,40}$/.test(name)) {
        alert("لطفاً نام معتبر وارد کنید.");
        return;
      }
      const data = new URLSearchParams(formData);

      fetch(WEB_APP_URL, {
        method: "POST",
        body: formData,
      })
        .then(() => {
          successMessage.style.display = "block";
          successMessage.textContent = "نظر شما با موفقیت ثبت شد✅";
          form.reset();
          setTimeout(() => {
            successMessage.style.display = "none";
          }, 3000);
        })
        .catch(() => {
          alert("نظر شما با موفقیت ثبت شد✅");
        });
    });
  
  
    const words = ["Front-End Developer", "Violinist", "Pianist"];

    let wordIndex = 0;
    let charIndex = 0;

    const typing = document.getElementById("typing");

    function typeEffect() {
      if (charIndex < words[wordIndex].length) {
        typing.textContent += words[wordIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect, 100);
      } else {
        setTimeout(eraseEffect, 1500);
      }
    }

    function eraseEffect() {
      if (charIndex > 0) {
        typing.textContent = words[wordIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseEffect, 50);
      } else {
        wordIndex++;

        if (wordIndex >= words.length) {
          wordIndex = 0;
        }

        setTimeout(typeEffect, 300);
      }
    }
    const langBtn = document.getElementById("langToggle");

    let currentLang = "fa";

    langBtn.addEventListener("click", () => {
      if (currentLang === "fa") {
        document.documentElement.lang = "en";
        document.documentElement.dir = "ltr";

        document.getElementById("heroName").textContent = "Sepehr Jafari";

        document.getElementById("heroSubtitle").textContent =
          "Front-End Developer • Violinist • Pianist";

        document.getElementById("heroDesc").textContent =
          "Combination of art and technology, Front-End Developer, Violinist, Pianist and member of Fars Symphony Orchestra.";

        document.getElementById("aboutTitle").textContent = "About Me";

        document.getElementById("aboutText").textContent =
          "I am Sepehr Jafari, a Front-End Developer, Violinist, Pianist and member of Fars Symphony Orchestra.";

        document.getElementById("skillsTitle").textContent = "Web Skills";

        document.getElementById("musicTitle").textContent =
          "Musical Activities";

        document.getElementById("timelineTitle").textContent = "My Journey";

        document.getElementById("galleryTitle").textContent = "Gallery";

        document.getElementById("contactTitle").textContent = "Contact Me";

        document.getElementById("commentsTitle").textContent =
          "Visitor Reviews";

        document.getElementById("galleryText").textContent =
          "A collection of photos from my musical and artistic activities.";

        document.getElementById("contactText").textContent =
          "Feel free to contact me through social media or email.";

        document.getElementById("commentDesc").textContent =
          "Share your opinion about my website or activities.";

        document.getElementById("footerText").textContent =
          "Made with ❤️ by Sepehr Jafari";

        document.getElementById("violinTitle").textContent = "Violin";
        document.getElementById("violinText").textContent =
          "5 years of violin experience focused on classical music and ensemble performance.";

        document.getElementById("pianoTitle").textContent = "Piano";
        document.getElementById("pianoText").textContent =
          "2 years of piano practice with classical and educational pieces.";

        document.getElementById("orchestraTitle").textContent =
          "Fars Symphony Orchestra";
        document.getElementById("orchestraText").textContent =
          "Member of Fars Symphony Orchestra as a violinist.";

        document.getElementById("t1title").textContent = "Start Violin";
        document.getElementById("t1text").textContent =
          "Beginning of my musical journey";

        document.getElementById("t2title").textContent = "Start Piano";
        document.getElementById("t2text").textContent =
          "Expanding musical knowledge";

        document.getElementById("t3title").textContent =
          "Start Web Development";
        document.getElementById("t3text").textContent =
          "Entering the world of programming";

        document.getElementById("t4title").textContent =
          "Joining Symphony Orchestra";
        document.getElementById("t4text").textContent =
          "Official orchestral activity";
        document.getElementById("aboutText2").textContent =
          "My passion for art and technology has encouraged me to develop creativity and discipline together.";

        document.getElementById("aboutText3").textContent =
          "Currently, I focus on web development and classical music.";
        document.getElementById("commentFormTitle").textContent =
          "Leave a Review";

        document.getElementById("nameInput").placeholder = "Your Name";

        document.getElementById("rateLabel").textContent = "Rating:";

        document.getElementById("commentInput").placeholder =
          "Write your review...";

        document.getElementById("submitBtn").textContent = "Submit";
        document.getElementById("stat1").textContent = "Years of Violin";

        document.getElementById("stat2").textContent = "Years of Piano";

        document.getElementById("stat3").textContent =
          "Years of Web Development";

        document.getElementById("stat4").textContent = "Years in Orchestra";

        currentLang = "en";
      } else {
        document.documentElement.lang = "fa";
        document.documentElement.dir = "rtl";

        document.getElementById("heroName").textContent = "سپهر جعفری";

        document.getElementById("heroSubtitle").textContent = "Sepehr Jafari";

        document.getElementById("heroDesc").textContent =
          "تلفیقی از هنر و تکنولوژی؛ نوازنده ویولن و پیانو، برنامه‌نویس فرانت‌اند و عضو ارکستر سمفونیک فارس.";

        document.getElementById("aboutTitle").textContent = "درباره من";

        document.getElementById("aboutText").textContent =
          "من سپهر جعفری هستم؛ برنامه‌نویس فرانت‌اند، نوازنده ویولن، پیانو و عضو ارکستر سمفونیک فارس.";

        document.getElementById("skillsTitle").textContent = "مهارت های وب";

        document.getElementById("musicTitle").textContent = "فعالیت هنری";

        document.getElementById("timelineTitle").textContent = "مسیر من";

        document.getElementById("galleryTitle").textContent = "گالری";

        document.getElementById("contactTitle").textContent = "ارتباط با من";

        document.getElementById("commentsTitle").textContent =
          "نظرات کاربران";
        document.getElementById("galleryText").textContent =
          "برخی تصاویر از فعالیت‌های هنری و موسیقی";

        document.getElementById("contactText").textContent =
          "از طریق شبکه‌های اجتماعی یا ایمیل با من در ارتباط باشید.";

        document.getElementById("commentDesc").textContent =
          "دیدگاه خود را درباره سایت یا فعالیت‌های من ثبت کنید.";

        document.getElementById("footerText").textContent =
          "ساخته شده با ❤️ توسط سپهر جعفری";

        document.getElementById("violinTitle").textContent = "ویولن";
        document.getElementById("violinText").textContent =
          "۵ سال تجربه نوازندگی ویولن با تمرکز بر موسیقی کلاسیک و اجرای گروهی.";

        document.getElementById("pianoTitle").textContent = "پیانو";
        document.getElementById("pianoText").textContent =
          "۲ سال نوازندگی پیانو و اجرای قطعات آموزشی و کلاسیک.";

        document.getElementById("orchestraTitle").textContent =
          "ارکستر سمفونیک فارس";
        document.getElementById("orchestraText").textContent =
          "عضو ارکستر سمفونیک فارس به عنوان نوازنده ویولن.";

        document.getElementById("t1title").textContent = "شروع ویولن";
        document.getElementById("t1text").textContent =
          "آغاز مسیر حرفه‌ای موسیقی";

        document.getElementById("t2title").textContent = "شروع پیانو";
        document.getElementById("t2text").textContent = "گسترش دانش موسیقی";

        document.getElementById("t3title").textContent = "شروع توسعه وب";
        document.getElementById("t3text").textContent =
          "ورود به دنیای برنامه نویسی";

        document.getElementById("t4title").textContent = "عضویت در ارکستر";
        document.getElementById("t4text").textContent =
          "فعالیت رسمی ارکسترال";
        document.getElementById("aboutText2").textContent =
          "علاقه من به هنر و تکنولوژی باعث شده همیشه سعی کنم خلاقیت و نظم را در کنار هم رشد بدهم.";

        document.getElementById("aboutText3").textContent =
          "در حال حاضر روی توسعه وب و موسیقی کلاسیک تمرکز دارم.";
        document.getElementById("commentFormTitle").textContent =
          "ثبت نظر شما";

        document.getElementById("nameInput").placeholder = "نام شما";

        document.getElementById("rateLabel").textContent = "امتیاز:";

        document.getElementById("commentInput").placeholder =
          "نظر خود را بنویسید...";

        document.getElementById("submitBtn").textContent = "ارسال نظر";
        document.getElementById("stat1").textContent = "سال ویولن";

        document.getElementById("stat2").textContent = "سال پیانو";

        document.getElementById("stat3").textContent = "سال توسعه وب";

        document.getElementById("stat4").textContent = "سال عضویت ارکستر";

        currentLang = "fa";
      }
    });
    window.addEventListener("load", () => {
      document.body.classList.add("loaded");
    });
    typeEffect();