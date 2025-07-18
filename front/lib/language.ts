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
}; 