export type Language = 'en' | 'fr' | 'es';

export const languages: Language[] = ['en', 'fr', 'es'];

export const languageNames: Record<Language, string> = {
  en: 'English',
  fr: 'Français',
  es: 'Español'
};

export const getLanguage = (): Language => {
  if (typeof window === 'undefined') return 'en';
  return (localStorage.getItem('language') as Language) || 'en';
};

export const setLanguage = (language: Language) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('language', language);
  document.documentElement.setAttribute('lang', language);
};

export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      testimonials: 'Testimonials',
      contact: 'Contact'
    },
    hero: {
      greeting: "Hello, I’m",
      title: 'Full Stack Developer',
      description: "Passionate about building beautiful and modern web and mobile apps using cutting-edge technologies. I turn ideas into reality with clean code and innovative solutions.",
      cta1: 'Learn More',
      cta2: 'View Projects',
      scrollDown: 'Scroll Down'
    },
    about: {
      title: 'About Me',
      whoIAm: 'Who I Am',
      description1: "I'm a Full Stack developer passionate about building innovative web & mobile applications. With expertise in modern JavaScript frameworks and a keen eye for design, I bring ideas to life through clean, efficient code and user-centered solutions.",
      description2: "When I’m not coding, you’ll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I believe in lifelong learning and staying current with industry trends.",
      personalDetails: 'Personal Details',
      skills: 'Skills & Expertise',
      whatIDo: 'What I Do',
      detail1: "Based in ",
      detail2: "Available for new opportunities",
      services: [
        'Full-stack web & mobile development',
        'Responsive UI/UX design',
        'API development and integration',
        'Performance optimization',
        'Code review and mentoring'
      ]
    },
    projects: {
      title: 'My Projects',
      description: "Here are some of the projects I've worked on. Each represents a unique challenge and showcases different aspects of my development skills.",
      featured: 'Featured Projects',
      allProjects: 'All Projects',
      viewMore: 'View more on GitHub',
      code: 'Code',
      demo: 'Visit site',
      project: {
        1: {
          title: "Kira",
          description: "Kira is a SaaS that allows you to create badges automatically with a single click.",
        },
        2: {
          title: "School Management App for Secondary Schools",
          description: "A complete school management system with features like student registration, attendance tracking, and grade management.",
        },
        3: {
          title: "Portfolio",
          description: "A modern and responsive portfolio website showcasing projects and skills with beautiful animations and smooth interactions.",
        },
        4: {
          title: "School Platform for Universities",
          description: "A robust university management platform with course management, student profiles, and faculty administration features.",
        },
        5: {
          title: "Bible Study Mobile App – Joy of Mission",
          description: "A mobile app for religious music and Bible study with a user-friendly interface and offline access. Listen to music, play games, read the Bible — and much more.",
        },
        6: {
          title: "E-commerce Platform",
          description: "A complete e-commerce platform with product listings, shopping cart, and payment integration.",
        }
      }
    },
    skills: {
      title: 'Skills & Expertise',
      subtitle: 'Here are the technologies and tools I work with. I’m constantly learning and expanding my skills to stay up-to-date with the latest industry trends.',
      frontend: 'Frontend',
      backend: 'Backend',
      tools: 'Tools & DevOps',
      other: 'Other Skills',
      learning: 'Currently Learning',
      learningText: 'I’m continuously expanding my knowledge and exploring new technologies. Here are some areas I’m currently focusing on:'
    },
    testimonials: {
      title: 'Client Testimonials',
      description: 'Here’s what my clients say about working with me. Their feedback reflects my commitment to delivering excellent results and building long-term relationships.',
      stats: {
        clients: 'Happy Clients',
        projects: 'Completed Projects',
        rating: 'Average Rating',
        experience: 'Years of Experience',
      },
      testimonial: {
        1: "Working alongside Daniel Djakam on the development of our Bible app was an incredible experience. His dedication, creativity, and technical skills played a key role in bringing our vision to life.",
        2: "Thanks to our QR code discount app, I’ve been able to attract more customers and keep existing ones coming back. Each code offers a unique and trackable promotion. It’s a modern, efficient solution! Thank you Daniel Djakam.",
        3: "As a teacher and school administrator, I can confidently say that this school management app has transformed how we operate. Everything is now simplified, efficient, and accessible in one place.",
      },
      badge: 'Badge Generator',
    },
    contact: {
      title: 'Contact Me',
      description: "I'm always open to new opportunities and exciting projects. Feel free to reach out if you’d like to work together or just say hello!",
      sendMessage: 'Send Message',
      contactInfo: 'Contact Information',
      followMe: 'Follow Me',
      letsWork: 'Let’s Work Together',
      letsWorkDesc: "I’m currently available for freelance work and full-time opportunities. Whether you have a project in mind or just want to talk tech, I’d love to hear from you!",
      form: {
        name: 'Name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
        namePlaceholder: 'Your name',
        emailPlaceholder: 'email@example.com',
        subjectPlaceholder: 'What is it about?',
        messagePlaceholder: 'Tell me about your project or just say hi!',
        send: 'Send Message'
      }
    },
    footer: {
      description: 'Full Stack Developer passionate about creating beautiful and modern web applications using cutting-edge technologies.',
      quickLinks: 'Quick Links',
      connect: 'Connect',
      madeWith: 'Made with',
      andCoffee: 'and lots of coffee.'
    }
  },
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      projects: 'Projets',
      skills: 'Compétences',
      testimonials: 'Témoignages',
      contact: 'Contact'
    },
    hero: {
      greeting: "Bonjour, je suis",
      title: 'Développeur Full Stack',
      description: "Passionné par la création d'applications web et mobiles modernes et belles avec des technologies de pointe. Je transforme les idées en réalité grâce à un code propre et des solutions innovantes.",
      cta1: 'En savoir plus',
      cta2: 'Voir les projets',
      scrollDown: 'Défiler vers le bas'
    },
    about: {
      title: 'À propos de moi',
      whoIAm: 'Qui je suis',
      description1: "Je suis un développeur Full Stack passionné par la création d'applications web & mobiles innovantes. Avec une expertise dans les frameworks JavaScript modernes et un œil pour le design, je donne vie aux idées grâce à un code propre et efficace et des solutions centrées sur l'utilisateur.",
      description2: "Quand je ne code pas, vous me trouverez en train d'explorer de nouvelles technologies, de contribuer à des projets open-source ou de partager des connaissances avec la communauté des développeurs. Je crois en l'apprentissage continu et en rester à jour avec les dernières tendances de l'industrie.",
      personalDetails: 'Détails personnels',
      skills: 'Compétences et expertise',
      whatIDo: 'Ce que je fais',
      detail1: "Basé à ",
      detail2: "Disponible pour de nouvelles opportunités",
      services: [
        'Développement web & mobile full-stack',
        'Design UI/UX responsive',
        'Développement et intégration d\'API',
        'Optimisation des performances',
        'Revue de code et mentorat'
      ]
    },
    projects: {
      title: 'Mes projets',
      description: "Voici quelques-uns des projets sur lesquels j'ai travaillé. Chacun représente un défi unique et met en valeur différents aspects de mes compétences de développement.",
      featured: 'Projets en vedette',
      allProjects: 'Tous les projets',
      viewMore: 'Voir plus sur GitHub',
      code: 'Code',
      demo: 'Visiter le site',
      project: {
        1 : {
          title: "Kira",
          description: "Kira est un saas qui permet de creer des badges automatiquement en un seul clic.",
        },
        2 : {
          title: "Application de gestion scolaire pour les écoles secondaires",
          description: "Un système complet de gestion scolaire avec des fonctionnalités d'inscription des élèves, de suivi des présences et de gestion des notes.",
        },
        3 : {
          title: "Portfolio",
          description: "Un site Web de portfolio moderne et réactif présentant des projets et des compétences avec de belles animations et des interactions fluides.",
        },
        4 : {
          title: "Plateforme de gestion scolaire pour les écoles universitaires",
          description: "Une plateforme robuste pour la gestion des écoles universitaires avec des fonctionnalités de gestion des cours, de profils d'étudiants et d'administration du corps professoral.",
        }, 
        5 : {
          title: "Une application mobile pour les études bibliques - Joy of Mission",
          description: "Une application mobile pour la musique religieuse et les études bibliques, dotée d'une interface conviviale et d'un accès hors ligne au contenu. Écoutez de la musique, jouez à des jeux et lisez la Bible. Et bien plus encore.",
        },
        6 : {
          title: "Plateforme de commerce électronique",
          description: "Une plateforme de commerce électronique complète avec des listes de produits, un panier d'achat et une intégration de paiement.",
        }
      }
    },
    skills: {
      title: 'Compétences et expertise',
      subtitle: 'Voici les technologies et outils avec lesquels je travaille. J\'apprends constamment et développe mes compétences pour rester à jour avec les dernières tendances de l\'industrie.',
      frontend: 'Frontend',
      backend: 'Backend',
      tools: 'Outils et DevOps',
      other: 'Autres compétences',
      learning: 'En cours d\'apprentissage',
      learningText: 'J\'élargis constamment mes connaissances et explore de nouvelles technologies. Voici quelques domaines sur lesquels je me concentre actuellement :'
    },
    testimonials: {
      title: 'Témoignages Clients',
      description: 'Voici ce que mes clients disent de notre collaboration. Leurs retours reflètent mon engagement à fournir des résultats exceptionnels et à construire des relations durables.',
      stats: {
        clients: 'Clients Satisfaits',
        projects: 'Projets Réalisés',
        rating: 'Note Moyenne',
        experience: 'Années d\'Expérience',
      },
      testimonial: {
        1: "Travailler aux côtés de Daniel Djakam sur le développement de notre application biblique a été une expérience incroyable. Son dévouement, Sa créativité et ses compétences techniques ont joué un rôle essentiel dans la concrétisation de notre vision. Qu'il s'agisse de concevoir des interfaces utilisateur intuitives ou de résoudre des problèmes complexes en back-end, il a toujours fait preuve d'excellence.",
        2: "Grâce à notre application de QR code pour les réductions, j’ai pu attirer plus de clients et fidéliser ceux qui venaient déjà. Chaque QR code offre une promotion unique et traçable, ce qui facilite la gestion des offres et évite les abus. Je bénéficie d’un système efficace et moderne pour dynamiser les ventes. Un grand merci à Daniel Djakam pour cette solution innovante et parfaitement adaptée à mon activité.",
        3: "En tant qu'enseignant et administrateur scolaire, je peux affirmer avec certitude que cette application de gestion scolaire a transformé notre façon de travailler. Du suivi des présences à la gestion des notes, en passant par la communication parents-enseignants et les rapports de progression des élèves, tout est désormais simplifié, efficace et accessible en un seul endroit."
      },
      badge: 'Générateur de badges',
      
    },
    contact: {
      title: 'Contactez-moi',
      description: "Je suis toujours intéressé par de nouvelles opportunités et des projets passionnants. N'hésitez pas à me contacter si vous souhaitez travailler ensemble ou simplement dire bonjour !",
      sendMessage: 'Envoyer un message',
      contactInfo: 'Informations de contact',
      followMe: 'Suivez-moi',
      letsWork: 'Travaillons ensemble',
      letsWorkDesc: "Je suis actuellement disponible pour du travail freelance et des opportunités à temps plein. Que vous ayez un projet en tête ou que vous souhaitiez simplement discuter de technologie, j'aimerais avoir de vos nouvelles !",
      form: {
        name: 'Nom',
        email: 'Email',
        subject: 'Sujet',
        message: 'Message',
        namePlaceholder: 'Votre nom',
        emailPlaceholder: 'email@exemple.com',
        subjectPlaceholder: 'De quoi s\'agit-il ?',
        messagePlaceholder: 'Parlez-moi de votre projet ou dites simplement bonjour !',
        send: 'Envoyer le message'
      }
    },
    footer: {
      description: 'Développeur Full Stack passionné par la création d\'applications web belles et modernes avec des technologies de pointe.',
      quickLinks: 'Liens rapides',
      connect: 'Connecter',
      madeWith: 'Fait avec',
      andCoffee: 'et beaucoup de café.'
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Acerca de',
      projects: 'Proyectos',
      skills: 'Habilidades',
      testimonials: 'Testimonios',
      contact: 'Contacto'
    },
    hero: {
      greeting: "Hola, soy",
      title: 'Desarrollador Full Stack',
      description: "Apasionado por crear aplicaciones web y móviles modernas y hermosas utilizando tecnologías de vanguardia. Transformo ideas en realidad mediante código limpio y soluciones innovadoras.",
      cta1: 'Saber más',
      cta2: 'Ver proyectos',
      scrollDown: 'Desplazar hacia abajo'
    },
    about: {
      title: 'Acerca de mí',
      whoIAm: 'Quién soy',
      description1: "Soy un desarrollador Full Stack apasionado por construir aplicaciones web y móviles innovadoras. Con experiencia en frameworks modernos de JavaScript y un buen ojo para el diseño, doy vida a las ideas con código limpio, eficiente y soluciones centradas en el usuario.",
      description2: "Cuando no estoy programando, me encontrarás explorando nuevas tecnologías, contribuyendo a proyectos de código abierto o compartiendo conocimientos con la comunidad de desarrolladores. Creo en el aprendizaje continuo y en mantenerme al día con las últimas tendencias del sector.",
      personalDetails: 'Detalles personales',
      skills: 'Habilidades y experiencia',
      whatIDo: 'Lo que hago',
      detail1: "Con base en ",
      detail2: "Disponible para nuevas oportunidades",
      services: [
        'Desarrollo web y móvil full-stack',
        'Diseño UI/UX adaptable',
        'Desarrollo e integración de APIs',
        'Optimización de rendimiento',
        'Revisión de código y mentoría'
      ]
    },
    projects: {
      title: 'Mis proyectos',
      description: "Aquí tienes algunos de los proyectos en los que he trabajado. Cada uno representa un desafío único y muestra diferentes aspectos de mis habilidades de desarrollo.",
      featured: 'Proyectos destacados',
      allProjects: 'Todos los proyectos',
      viewMore: 'Ver más en GitHub',
      code: 'Código',
      demo: 'Visitar sitio',
      project: {
        1: {
          title: "Kira",
          description: "Kira es un SaaS que permite crear insignias automáticamente con un solo clic.",
        },
        2: {
          title: "Aplicación de gestión escolar para escuelas secundarias",
          description: "Un sistema de gestión escolar completo con funciones de inscripción de estudiantes, seguimiento de asistencia y gestión de calificaciones.",
        },
        3: {
          title: "Portafolio",
          description: "Un sitio web de portafolio moderno y responsivo que presenta proyectos y habilidades con hermosas animaciones e interacciones fluidas.",
        },
        4: {
          title: "Plataforma de gestión escolar para universidades",
          description: "Una plataforma robusta para la gestión universitaria con funciones de administración de cursos, perfiles estudiantiles y cuerpo docente.",
        },
        5: {
          title: "App móvil para estudios bíblicos - Joy of Mission",
          description: "Una app móvil para música religiosa y estudios bíblicos con una interfaz fácil de usar y acceso offline al contenido. Escucha música, juega y lee la Biblia. ¡Y mucho más!",
        },
        6: {
          title: "Plataforma de comercio electrónico",
          description: "Una plataforma de comercio electrónico completa con listado de productos, carrito de compras e integración de pagos.",
        }
      }
    },
    skills: {
      title: 'Habilidades y experiencia',
      subtitle: 'Estas son las tecnologías y herramientas con las que trabajo. Siempre estoy aprendiendo y mejorando mis habilidades para seguir las últimas tendencias del sector.',
      frontend: 'Frontend',
      backend: 'Backend',
      tools: 'Herramientas y DevOps',
      other: 'Otras habilidades',
      learning: 'En aprendizaje',
      learningText: 'Siempre estoy ampliando mis conocimientos y explorando nuevas tecnologías. Aquí algunas áreas en las que me estoy enfocando actualmente:'
    },
    testimonials: {
      title: 'Testimonios de clientes',
      description: 'Esto es lo que dicen mis clientes sobre nuestra colaboración. Sus comentarios reflejan mi compromiso con resultados excepcionales y relaciones duraderas.',
      stats: {
        clients: 'Clientes satisfechos',
        projects: 'Proyectos completados',
        rating: 'Calificación media',
        experience: 'Años de experiencia',
      },
      testimonial: {
        1: "Trabajar junto a Daniel Djakam en el desarrollo de nuestra app bíblica fue una experiencia increíble. Su dedicación, creatividad y habilidades técnicas fueron clave para hacer realidad nuestra visión.",
        2: "Gracias a nuestra app de QR para descuentos, pude atraer a más clientes y fidelizar los existentes. Cada código ofrece una promoción única y rastreable. ¡Una solución moderna y eficiente! Gracias Daniel Djakam.",
        3: "Como docente y administrador escolar, puedo decir con certeza que esta app de gestión escolar ha transformado nuestra forma de trabajar. Todo es más sencillo, eficaz y accesible desde un solo lugar.",
      },
      badge: 'Generador de insignias',
    },
    contact: {
      title: 'Contáctame',
      description: "Siempre estoy interesado en nuevas oportunidades y proyectos apasionantes. ¡No dudes en escribirme si quieres colaborar o simplemente saludar!",
      sendMessage: 'Enviar mensaje',
      contactInfo: 'Información de contacto',
      followMe: 'Sígueme',
      letsWork: 'Trabajemos juntos',
      letsWorkDesc: "Actualmente estoy disponible para trabajo freelance y oportunidades a tiempo completo. Si tienes un proyecto o solo quieres hablar de tecnología, ¡me encantará conocerte!",
      form: {
        name: 'Nombre',
        email: 'Correo electrónico',
        subject: 'Asunto',
        message: 'Mensaje',
        namePlaceholder: 'Tu nombre',
        emailPlaceholder: 'correo@ejemplo.com',
        subjectPlaceholder: '¿De qué se trata?',
        messagePlaceholder: '¡Cuéntame sobre tu proyecto o solo di hola!',
        send: 'Enviar mensaje'
      }
    },
    footer: {
      description: 'Desarrollador Full Stack apasionado por crear aplicaciones web modernas y atractivas con tecnologías de vanguardia.',
      quickLinks: 'Enlaces rápidos',
      connect: 'Conectar',
      madeWith: 'Hecho con',
      andCoffee: 'y mucho café.'
    }
  }
}; 