import resumePdf from '../../assets/Ghassemi_B_Resume.pdf';
import certificatePdf from '../../assets/Fullstack.pdf';

export const portfolioData = {
  navLinks: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
  ],
  socialLinks: [
    {
      label: 'GitHub',
      href: 'https://github.com/behshadg',
    },
    {
      label: 'Email',
      href: 'mailto:ghassemiben@gmail.com',
    },
  ],
  hero: {
    eyebrow: 'Portfolio 2026',
    name: 'Behshad Ghassemi',
    title: 'Full-stack developer crafting polished, dependable web experiences.',
    summary:
      'I build responsive interfaces, API-backed apps, and product experiences that feel modern, fast, and easy to use.',
    focus:
      'Right now I am focused on React, Next.js, Node.js, Tailwind CSS, and shipping projects that are easier to maintain over time.',
    primaryCta: {
      label: 'View Projects',
      href: '#projects',
    },
    secondaryCta: {
      label: 'Download Resume',
      href: resumePdf,
    },
    panelTitle: 'What I bring to a team',
    panelItems: [
      'Frontend work that aims to feel polished, readable, and responsive.',
      'Full-stack comfort across React, APIs, Node.js, and database-backed apps.',
      'A focus on cleaner structure so projects are easier to extend over time.',
    ],
  },
  stats: [
    { value: '2+', label: 'Years building web projects' },
    { value: '5', label: 'Featured portfolio builds' },
    { value: 'React', label: 'Primary frontend toolkit' },
  ],
  about: {
    intro:
      "I'm a developer who enjoys combining clean UI, solid structure, and practical product thinking.",
    paragraphs: [
      'I care about building sites that feel intentional, not just functional. That means thoughtful layouts, responsive behavior, and code that is easier to return to later.',
      'My experience spans React, Next.js, Tailwind CSS, Node.js, Express, MongoDB, and PostgreSQL. I like building interfaces that feel smooth on the surface and stay maintainable underneath.',
    ],
    pillars: [
      {
        title: 'Frontend with polish',
        body: 'I enjoy shaping interfaces that feel sharp, readable, and fast across devices.',
      },
      {
        title: 'Full-stack foundation',
        body: 'I can work across the UI layer, data flow, and backend integrations when a project needs it.',
      },
      {
        title: 'Built to evolve',
        body: 'I value simple structure, reusable content, and layouts that make future updates less painful.',
      },
    ],
  },
  projects: [
    // Add more projects by duplicating an object in this array.
    {
      title: 'Zoom Clone',
      category: 'Full Stack',
      summary:
        'A video collaboration app focused on real-time meetings and a polished booking flow.',
      details:
        'Built with Next.js 14, TypeScript, Stream, and Tailwind CSS with an emphasis on responsive UX.',
      stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stream'],
      liveUrl: 'https://zoom-clone-eta-ebon.vercel.app',
      repoUrl: 'https://github.com/behshadg/Zoom-Clone',
      accent: 'from-amber-300 via-orange-400 to-rose-500',
    },
    {
      title: 'Travel App',
      category: 'Frontend',
      summary:
        'A travel landing page designed to showcase visual hierarchy, layout rhythm, and CTA placement.',
      details:
        'A responsive marketing experience built with React, Next.js, and Tailwind CSS.',
      stack: ['React', 'Next.js', 'Tailwind CSS'],
      liveUrl: 'https://behshadg-travelsite.netlify.app/',
      repoUrl: 'https://github.com/behshadg/Travel-Site',
      accent: 'from-cyan-300 via-sky-400 to-blue-500',
    },
    {
      title: 'Random Password Generator',
      category: 'Utility',
      summary:
        'A simple tool that helps users generate stronger passwords with a lightweight interface.',
      details:
        'Built in React with a focus on clean interaction design and simple utility.',
      stack: ['React', 'JavaScript', 'Tailwind CSS'],
      liveUrl: 'https://behshadg-randompwgen.netlify.app/',
      repoUrl: 'https://github.com/behshadg/RandomPWGen',
      accent: 'from-emerald-300 via-teal-400 to-cyan-500',
    },
    {
      title: 'Weather App',
      category: 'API',
      summary:
        'A weather dashboard that fetches live data and presents it in a straightforward interface.',
      details:
        'An API-driven React app focused on clean data display and responsive behavior.',
      stack: ['React', 'JavaScript', 'APIs', 'CSS'],
      liveUrl: 'https://behshadg-weatherapp.netlify.app',
      repoUrl: 'https://github.com/behshadg/Weather-App',
      accent: 'from-violet-300 via-fuchsia-400 to-pink-500',
    },
    {
      title: 'Tic-Tac-Toe Game',
      category: 'Frontend',
      summary:
        'A browser game project centered on state updates, interaction feedback, and simple UI logic.',
      details:
        'A React-based implementation of the classic game using HTML, CSS, and JavaScript.',
      stack: ['React', 'JavaScript', 'CSS'],
      liveUrl: 'https://behshadg-tictactoe.netlify.app/',
      repoUrl: 'https://github.com/behshadg/Tic-Tac-Toe-Game',
      accent: 'from-lime-300 via-emerald-400 to-green-500',
    },
  ],
  skillGroups: [
    {
      title: 'Frontend',
      skills: [
        'React',
        'Next.js',
        'JavaScript',
        'TypeScript',
        'Tailwind CSS',
        'HTML',
        'CSS',
        'Responsive UI',
      ],
    },
    {
      title: 'Backend',
      skills: [
        'Node.js',
        'Express',
        'REST APIs',
        'MongoDB',
        'PostgreSQL',
        'Authentication flows',
      ],
    },
    {
      title: 'Workflow',
      skills: [
        'Git & GitHub',
        'Component-driven thinking',
        'UI cleanup and refactors',
        'Deployment with Netlify/Vercel',
        'Maintainable portfolio updates',
      ],
    },
  ],
  resume: {
    resumeUrl: resumePdf,
    certificateUrl: certificatePdf,
    cards: [
      {
        title: 'Resume',
        description:
          'Open or download the latest PDF version of my resume for a concise technical overview.',
        href: resumePdf,
        actionLabel: 'Open Resume',
      },
      {
        title: 'Certification',
        description:
          'View my full-stack certification document alongside the portfolio projects shown here.',
        href: certificatePdf,
        actionLabel: 'View Certificate',
      },
    ],
  },
  contact: {
    email: 'ghassemiben@gmail.com',
    intro:
      "If you're hiring, collaborating, or just want to talk through an idea, I'd love to connect.",
    availability:
      'Open to software engineering opportunities, freelance work, and collaborative builds.',
    links: [
      {
        label: 'Email Me',
        href: 'mailto:ghassemiben@gmail.com',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/behshadg',
      },
    ],
  },
};
