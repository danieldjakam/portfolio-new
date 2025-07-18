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
      greeting: "Hello, I'm",
      title: 'Full Stack Developer',
      description: "Passionate about creating beautiful, modern web & mobile applications with cutting-edge technologies. I turn ideas into reality through clean code and innovative solutions.",
      cta1: 'Get to know me',
      cta2: 'View Projects',
      scrollDown: 'Scroll down'
    },
    about: {
      title: 'About Me',
      whoIAm: 'Who I Am',
      description1: "I'm a passionate Full Stack Developer with a love for creating innovative web applications. With expertise in modern JavaScript frameworks and a keen eye for design, I bring ideas to life through clean, efficient code and user-centric solutions.",
      description2: "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I believe in continuous learning and staying up-to-date with the latest industry trends.",
      personalDetails: 'Personal Details',
      skills: 'Skills & Expertise',
      whatIDo: 'What I Do',
      services: [
        'Full-stack web development',
        'Responsive UI/UX design',
        'API development & integration',
        'Performance optimization',
        'Code review & mentoring'
      ]
    },
    projects: {
      title: 'My Projects',
      description: "Here are some of the projects I've worked on. Each one represents a unique challenge and showcases different aspects of my development skills.",
      featured: 'Featured Projects',
      allProjects: 'All Projects',
      viewMore: 'View More on GitHub',
      code: 'Code',
      demo: 'Demo'
    },
    skills: {
      title: 'Skills & Expertise',
      subtitle: 'Here are the technologies and tools I work with. I\'m constantly learning and expanding my skill set to stay current with the latest industry trends.',
      frontend: 'Frontend',
      backend: 'Backend',
      tools: 'Tools & DevOps',
      other: 'Other Skills',
      learning: 'Currently Learning',
      learningText: 'I\'m always expanding my knowledge and exploring new technologies. Here are some areas I\'m currently focusing on:'
    },
    testimonials: {
      title: 'Client Testimonials',
      description: 'Here\'s what my clients have to say about working with me. Their feedback reflects my commitment to delivering exceptional results and building lasting relationships.',
      stats: {
        clients: 'Happy Clients',
        projects: 'Projects Completed',
        rating: 'Average Rating',
        experience: 'Years Experience'
      }
    },
    contact: {
      title: 'Get In Touch',
      description: "I'm always interested in new opportunities and exciting projects. Feel free to reach out if you'd like to work together or just say hello!",
      sendMessage: 'Send a Message',
      contactInfo: 'Contact Information',
      followMe: 'Follow Me',
      letsWork: "Let's Work Together",
      letsWorkDesc: "I'm currently available for freelance work and full-time opportunities. Whether you have a project in mind or just want to chat about technology, I'd love to hear from you!",
      form: {
        name: 'Name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
        namePlaceholder: 'Your name',
        emailPlaceholder: 'your.email@example.com',
        subjectPlaceholder: "What's this about?",
        messagePlaceholder: 'Tell me about your project or just say hello!',
        send: 'Send Message'
      }
    },
    footer: {
      description: 'Full Stack Developer passionate about creating beautiful, modern web applications with cutting-edge technologies.',
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
      demo: 'Démo'
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
        experience: 'Années d\'Expérience'
      }
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
        emailPlaceholder: 'votre.email@exemple.com',
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
      description: "Apasionado por crear aplicaciones web hermosas y modernas con tecnologías de vanguardia. Convierto ideas en realidad a través de código limpio y soluciones innovadoras.",
      cta1: 'Conoceme',
      cta2: 'Ver proyectos',
      scrollDown: 'Desplázate hacia abajo'
    },
    about: {
      title: 'Acerca de mí',
      whoIAm: 'Quién soy',
      description1: "Soy un desarrollador Full Stack apasionado por crear aplicaciones web innovadoras. Con experiencia en frameworks JavaScript modernos y un ojo para el diseño, doy vida a las ideas a través de código limpio y eficiente y soluciones centradas en el usuario.",
      description2: "Cuando no estoy programando, me encontrarás explorando nuevas tecnologías, contribuyendo a proyectos de código abierto o compartiendo conocimientos con la comunidad de desarrolladores. Creo en el aprendizaje continuo y mantenerme actualizado con las últimas tendencias de la industria.",
      personalDetails: 'Detalles personales',
      skills: 'Habilidades y experiencia',
      whatIDo: 'Lo que hago',
      services: [
        'Desarrollo web full-stack',
        'Diseño UI/UX responsive',
        'Desarrollo e integración de API',
        'Optimización de rendimiento',
        'Revisión de código y mentoría'
      ]
    },
    projects: {
      title: 'Mis proyectos',
      description: "Aquí hay algunos de los proyectos en los que he trabajado. Cada uno representa un desafío único y muestra diferentes aspectos de mis habilidades de desarrollo.",
      featured: 'Proyectos destacados',
      allProjects: 'Todos los proyectos',
      viewMore: 'Ver más en GitHub',
      code: 'Código',
      demo: 'Demo'
    },
    skills: {
      title: 'Habilidades y experiencia',
      subtitle: 'Aquí están las tecnologías y herramientas con las que trabajo. Constantemente estoy aprendiendo y expandiendo mis habilidades para mantenerme actualizado con las últimas tendencias de la industria.',
      frontend: 'Frontend',
      backend: 'Backend',
      tools: 'Herramientas y DevOps',
      other: 'Otras habilidades',
      learning: 'Aprendiendo actualmente',
      learningText: 'Siempre estoy expandiendo mis conocimientos y explorando nuevas tecnologías. Aquí hay algunas áreas en las que me estoy enfocando actualmente:'
    },
    testimonials: {
      title: 'Testimonios de Clientes',
      description: 'Aquí está lo que mis clientes dicen sobre trabajar conmigo. Sus comentarios reflejan mi compromiso de entregar resultados excepcionales y construir relaciones duraderas.',
      stats: {
        clients: 'Clientes Felices',
        projects: 'Proyectos Completados',
        rating: 'Calificación Promedio',
        experience: 'Años de Experiencia'
      }
    },
    contact: {
      title: 'Ponte en contacto',
      description: "Siempre estoy interesado en nuevas oportunidades y proyectos emocionantes. ¡No dudes en contactarme si te gustaría trabajar juntos o simplemente decir hola!",
      sendMessage: 'Enviar mensaje',
      contactInfo: 'Información de contacto',
      followMe: 'Sígueme',
      letsWork: 'Trabajemos juntos',
      letsWorkDesc: "Actualmente estoy disponible para trabajo freelance y oportunidades de tiempo completo. Ya sea que tengas un proyecto en mente o solo quieras charlar sobre tecnología, ¡me encantaría saber de ti!",
      form: {
        name: 'Nombre',
        email: 'Email',
        subject: 'Asunto',
        message: 'Mensaje',
        namePlaceholder: 'Tu nombre',
        emailPlaceholder: 'tu.email@ejemplo.com',
        subjectPlaceholder: '¿De qué se trata?',
        messagePlaceholder: '¡Cuéntame sobre tu proyecto o simplemente di hola!',
        send: 'Enviar mensaje'
      }
    },
    footer: {
      description: 'Desarrollador Full Stack apasionado por crear aplicaciones web hermosas y modernas con tecnologías de vanguardia.',
      quickLinks: 'Enlaces rápidos',
      connect: 'Conectar',
      madeWith: 'Hecho con',
      andCoffee: 'y mucho café.'
    }
  }
}; 