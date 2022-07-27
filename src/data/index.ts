import type PersonalInformation from '~/data/models/PersonalInformation'
import type Skill from '~/data/models/Skill'
import type SocialMedia from '~/data/models/SocialMedia'
import type Category from '~/data/models/Category'
import Project from '~/data/models/Project'

export const personalInformation: PersonalInformation = {
  name: 'Mónica Montoto Montané',
  photos: ['assets/images/me/portal.jpg', 'assets/images/me/about.jpg'],
  professions: [
    'Desarrolladora Backend',
    'Desarrolladora Frontend',
    'Diseñadora'
  ],
  presentationPhrase: 'Graduada de Ingeniería Informática. Puedo trabajar de forma individual o en equipo. Soy programadora de Software y diseñadora, aunque' +
  ' también he desempeñado otros roles. Me adapto a cualquier circunstancia de trabajo. Soy muy dedicada y sacrificada.',
  
  aboutMe: 'Graduada de Ingeniería Informática. Poseo un nivel alto de Inglés y un nivel B2 de Francés. Experiencia en Frontend, Backend y como Diseñadora. He desempeñado los roles de:' +
  ' Jefa de Proyecto, Analista-Arquitecto, Planificador, Probador-Especialista de Calidad y Diseñadora Principal, pero generalmente desempeño el rol de Programdor. No presento problemas ' +
  'para trabajar en equipo. Me apasiona lo que hago y soy muy dedicada y sacrificada con mi trabajo. Me adapto a cualquier circunstancia laboral.',
  email: 'mnkmm44@gmail.com',
  phone: '+53 58294135',
  birthdate: '9 de Diciembre de 2000',
  cvLink: '/cv/Curriculum%20Vitae%20Mónica%20Montoto%20Montané.doc', //revisar
}

export const skills: Skill[] = [
  { name: 'C/C++', percent: 95 },
  { name: 'C#', percent: 98 },

  { name: 'Java', percent: 100 },
  { name: 'Data Structures in Java', percent: 100 },
  { name: 'Java Fx', percent: 75 },
  { name: 'JavaScript', percent: 90 },
  { name: 'JQuery', percent: 90 },

  { name: 'PHP', percent: 75 },
  { name: 'CSS', percent: 98 },
  { name: 'SCSS', percent: 98 },
  { name: 'HTML', percent: 98 },
  { name: 'Bootstrap', percent: 95 },

  { name: 'TypeScript', percent: 85 },
  { name: 'Angular', percent: 90 },

  { name: 'Python', percent: 65 },
  { name: 'Pascal', percent: 80 },
  { name: 'Latex', percent: 95 },

  { name: 'PostgresSQL', percent: 95 },
  { name: 'SQL', percent: 90 },
  { name: 'MySQL', percent: 75 },

  { name: 'Git', percent: 70 },
  { name: 'GitHub', percent: 98 },
  { name: 'GitLab', percent: 95 },

  { name: 'Adobe XD', percent: 100 },
  { name: 'Adobe Illustrator', percent: 100 },
  { name: 'PhotoShop', percent: 90 },

  { name: 'WordPress', percent: 60 },
  { name: 'Vue', percent: 45 },
  { name: 'JUnit', percent: 35 },
]

export const socialMedias: SocialMedia[] = [
  { name: 'Instagram', icon: 'fab fa-instagram', link: 'https://www.instagram.com/mnk_m44', color: 'text-white' },
  { name: 'Telegram', icon: 'fab fa-telegram-plane', link: 'https://t.me/Mnk0044', color: 'text-white' },
  { name: 'WhatsApp', icon: 'fab fa-whatsapp', link: 'https://wa.me/5358294135', color: 'text-white' },
  { name: 'Twitter', icon: 'fab fa-twitter', link: 'https://www.twitter.com/Monik446', color: 'text-white' },
  { name: 'GitHub', icon: 'fab fa-github', link: 'https://github.com/mnk44', color: 'text-white' },
  { name: 'GitLab', icon: 'fab fa-gitlab', link: 'https://gitlab.com/mnk44', color: 'text-white' },
]

export const projectCategories: Category[] = [
  { id: 'backend', name: 'Backend' },
  { id: 'frontend', name: 'Frontend' }
]

//agregar
export const projects: Project[] = [
  // new Project(
  //   [projectCategories[0], projectCategories[1], projectCategories[2]],
  //   'Familia Velazquez',
  //   'Rafael Castillo',
  //   'Diciembre 2020',
  //   'https://www.familia-velazquez.com',
  //   'Texto del Proyecto',
  // ),
]
