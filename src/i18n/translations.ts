export type Lang = 'ar' | 'en';

export const translations = {
  en: {
    dir: 'ltr',

    // Header nav
    nav: {
      about:      'About',
      experience: 'Education',
      projects:   'Projects',
      contact:    'Contact',
    },

    // Hero
    hero: {
      greeting:    'Hi 👋 my name is',
      name:        'Abdulkarim Aljundubi',
      role:        'Software Developer',
      years:       'Undergraduate Student',
      description: ' passionate about crafting modern web experiences and building real-world apps.',
      cta:         "Let's talk?",
      ariaDown:    'Scroll to next section',
    },

    // About
    about: {
      badge:       '01.',
      title:       'About me',
      whoTitle:    'Who is Abdulkarim Aljundubi?',
      bio1:        'I\'m an <strong class="text-white">IT student</strong> at the <span class="font-[500] text-[var(--color-primary)]">Islamic University of Madinah</span>, passionate about crafting modern web experiences and building real-world applications that solve everyday problems.',
      bio2:        'I work across the stack with <span class="font-[500] text-[var(--color-primary)]">HTML, CSS, JavaScript and React</span> on the frontend, and back it up with databases and tooling like <span class="font-[500] text-[var(--color-primary)]">SQL, Python and Java</span> — always learning and shipping new projects.',
      workingAt:   'Location',
      studyingAt:  'Studying at',
      certTitle:   'Certifications',
      techTitle:   'Technologies & tools',
    },

    // Experience / Education
    experience: {
      badge: '02.',
      title: 'Education',
      items: [
        {
          company:     'Islamic University of Madinah',
          role:        'BSc Information Technology',
          duration:    '2023 — 2027',
          description: 'Studying <b>Information Technology</b>, covering software development, databases, networking and systems. Building <b>real-world web and application projects</b> alongside coursework.',
        },
      ],
    },

    // Projects
    projects: {
      badge:    '03.',
      title:    'Latest projects',
      intro:    'These projects showcase the <span class="text-accent">design and development</span> of attractive and functional experiences that tackle complex challenges and generate real impact for users.',
      viewSite: 'View Project',
      viewRepo: 'View Repository',
      viewAll:  'View all projects',
      items: [
        {
          title:        'MedVision',
          description:  'AI-powered medical diagnostics that lets users upload medical scans and receive AI-powered diagnostic predictions.',
          technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'XAMPP', 'Vercel'],
          imageUrl:     '/img/logos/medvision.png',
          link:         'https://github.com/Abdulkarim-Mohammed/MedVision',
          github:       'https://github.com/Abdulkarim-Mohammed/MedVision',
        },
        {
          title:        'Hajj Kiosk App',
          description:  'A self-service touchscreen kiosk for Hajj pilgrims to book Tawaf or Sa\'ee time slots, make payments, and collect wristbands — without any assistance.',
          technologies: ['React 19', 'JavaScript', 'Vercel'],
          imageUrl:     '/img/logos/hajj-kiosk.png',
          link:         'https://hajj-kiosk-kkg05vvi4-abdulkarim-mohammeds-projects.vercel.app',
          github:       'https://github.com/Abdulkarim-Mohammed/Hajj-kiosk-app',
        },
      ],
    },

    // Contact
    contact: {
      badge:              '04.',
      title:              'Contact',
      headline:           "Let's talk",
      subheadline:        "I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!",
      emailLabel:         'Email',
      emailAction:        'Write',
      linkedin:           'LinkedIn',
      github:             'GitHub',
      cv:                 'Download CV',
      subjectLabel:       'Subject',
      subjectPlaceholder: 'What is this about?',
      messageLabel:       'Message',
      messagePlaceholder: 'Write your message here...',
      nameLabel:          'Name',
      namePlaceholder:    'Your name',
      emailFieldLabel:    'Email',
      emailFieldPlaceholder: 'your@email.com',
      sendBtn:            'Send Message',
      sending:            'Sending...',
      successMsg:         "Message sent! I'll get back to you as soon as possible.",
      errorMsg:           'Something went wrong. Please try again.',
    },

    // Footer
    footer: {
      designedIn: 'Designed in',
      developedIn: 'Coded in',
      builtWith: 'Built with',
      and: '&',
    },

    // Layout
    layout: {
      htmlLang:    'en',
      ogLocale:    'en_US',
      title:       'Abdulkarim Aljundubi - IT Student | Web Developer',
      description: 'IT student at the Islamic University of Madinah, passionate about modern web experiences and building real-world applications. Portfolio, projects and skills.',
      keywords:    'Abdulkarim Aljundubi, IT Student, Web Developer, React, JavaScript, Python, Java, SQL, Portfolio, Madinah, Islamic University of Madinah',
    },
  },

  ar: {
    dir: 'rtl',

    nav: {
      about:      'نبذة عني',
      experience: 'التعليم',
      projects:   'المشاريع',
      contact:    'تواصل',
    },

    hero: {
      greeting:    'أهلاً 👋 اسمي',
      name:        'عبدالكريم الجندبي',
      role:        'مطور برمجيات',
      years:       'طالب IT',
      description: ' شغوف بصناعة تجارب ويب حديثة وبناء تطبيقات تحل مشاكل واقعية.',
      cta:         'لنتحدث؟',
      ariaDown:    'الانتقال إلى القسم التالي',
    },

    about: {
      badge:       '٠١.',
      title:       'نبذة عني',
      whoTitle:    'من هو عبدالكريم الجندبي؟',
      bio1:        'أنا <strong class="text-white">طالب تقنية معلومات</strong> في <span class="font-[500] text-[var(--color-primary)]">الجامعة الإسلامية بالمدينة المنورة</span>، شغوف بصناعة تجارب ويب حديثة وبناء تطبيقات حقيقية تحل مشاكل الحياة اليومية.',
      bio2:        'أعمل على مختلف طبقات التطوير باستخدام <span class="font-[500] text-[var(--color-primary)]">HTML و CSS و JavaScript و React</span> في الواجهة الأمامية، وأدعمها بقواعد البيانات وأدوات مثل <span class="font-[500] text-[var(--color-primary)]">SQL و Python و Java</span> — دائماً في تعلّم مستمر وبناء مشاريع جديدة.',
      workingAt:   'الموقع',
      studyingAt:  'أدرس في',
      certTitle:   'الشهادات',
      techTitle:   'التقنيات والأدوات',
    },

    experience: {
      badge: '٠٢.',
      title: 'التعليم',
      items: [
        {
          company:     'الجامعة الإسلامية بالمدينة المنورة',
          role:        'بكالوريوس تقنية المعلومات',
          duration:    '2023 — 2027',
          description: 'دراسة <b>تقنية المعلومات</b> وتشمل تطوير البرمجيات وقواعد البيانات والشبكات والأنظمة، مع بناء <b>مشاريع ويب وتطبيقات واقعية</b> بالتوازي مع المقررات الدراسية.',
        },
      ],
    },

    projects: {
      badge:    '٠٣.',
      title:    'أحدث المشاريع',
      intro:    'تُبرز هذه المشاريع <span class="text-accent">التصميم والتطوير</span> لتجارب جذابة وعملية تعالج تحديات معقدة وتُحدث أثراً حقيقياً للمستخدمين.',
      viewSite: 'عرض المشروع',
      viewRepo: 'عرض المستودع',
      viewAll:  'عرض جميع المشاريع',
      items: [
        {
          title:        'MedVision',
          description:  'تشخيص طبي مدعوم بالذكاء الاصطناعي يتيح للمستخدمين رفع الأشعة الطبية والحصول على تنبؤات تشخيصية بالذكاء الاصطناعي.',
          technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'XAMPP', 'Vercel'],
          imageUrl:     '/img/logos/medvision.png',
          link:         'https://github.com/Abdulkarim-Mohammed/MedVision',
          github:       'https://github.com/Abdulkarim-Mohammed/MedVision',
        },
        {
          title:        'Hajj Kiosk App',
          description:  'تطبيق كيوسك باللمس للحجاج لحجز مواعيد الطواف والسعي، الدفع، واستلام الأساور — دون الحاجة لأي مساعدة.',
          technologies: ['React 19', 'JavaScript', 'Vercel'],
          imageUrl:     '/img/logos/hajj-kiosk.png',
          link:         'https://hajj-kiosk-kkg05vvi4-abdulkarim-mohammeds-projects.vercel.app',
          github:       'https://github.com/Abdulkarim-Mohammed/Hajj-kiosk-app',
        },
      ],
    },

    contact: {
      badge:              '٠٤.',
      title:              'تواصل',
      headline:           'للتواصل',
      subheadline:        'أتشرف بسماع أي مشاريع أو فرص جديدة. سواء كان لديك سؤال أو أردت مجرد إلقاء التحية، لا تتردد في التواصل معي!',
      emailLabel:         'البريد الإلكتروني',
      emailAction:        'مراسلة',
      linkedin:           'لينكدإن',
      github:             'جيت هاب',
      cv:                 'تحميل السيرة الذاتية',
      subjectLabel:       'الموضوع',
      subjectPlaceholder: 'ما موضوع رسالتك؟',
      messageLabel:       'الرسالة',
      messagePlaceholder: 'اكتب رسالتك هنا...',
      nameLabel:          'الاسم',
      namePlaceholder:    'اسمك',
      emailFieldLabel:    'بريدك الإلكتروني',
      emailFieldPlaceholder: 'your@email.com',
      sendBtn:            'إرسال الرسالة',
      sending:            'جارٍ الإرسال...',
      successMsg:         'تم إرسال رسالتك! سأرد عليك في أقرب وقت ممكن.',
      errorMsg:           'حدث خطأ ما. يرجى المحاولة مرة أخرى.',
    },

    footer: {
      designedIn: 'صُمم في',
      developedIn: 'بُرمج في',
      builtWith: 'بُني باستخدام',
      and: 'و',
    },

    layout: {
      htmlLang:    'ar',
      ogLocale:    'ar_SA',
      title:       'عبدالكريم الجندبي - طالب تقنية معلومات | مطوّر ويب',
      description: 'طالب تقنية معلومات في الجامعة الإسلامية بالمدينة المنورة، شغوف بتجارب الويب الحديثة وبناء تطبيقات واقعية. أعمال ومشاريع ومهارات.',
      keywords:    'عبدالكريم الجندبي, تقنية المعلومات, مطور ويب, React, JavaScript, Python, Java, SQL, المدينة المنورة, الجامعة الإسلامية',
    },
  },
} as const;

export function t(lang: Lang) {
  return translations[lang];
}
