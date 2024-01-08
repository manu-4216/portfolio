export type Project = {
  id: string
  title: string
  description: string
  tags: string[]
  links: {
    live?: string
    code?: string
    blog?: string
  }
  featured?: boolean
}

const projects: Project[] = [
  {
    id: 'sudoku',
    title: 'Sudoku solver',
    description: 'Project during my Bachelor\'s studies, for which I went into depth, to solve Sudoku of any complexity level.',
    tags: ['algorithms'],
    links: {
    }
  },
  {
    id: 'poll',
    title: '2D Particle simulator',
    description: '2D particles collision simulation (movement, speed, time, collisions). Extended into a basic pool game, by introducing acceleration, and interactive elements.',
    tags: ['MuPad', 'physics'],
    links: {
    }
  },
  {
    id: 'internship',
    title: 'Hydrogen plant simulator',
    description: 'During a 6 months internship, I used MATLAB to optimize a hydrogen plant calculation and plotted the results',
    tags: ['MATLAB', 'engineering', 'physics', 'plots'],
    links: {
    }
  },
  {
    id: 'square-fight',
    title: 'Square Fight Android game',
    description: 'Fun little Android game, published on Google Play in 2014. I created all the assets (images, soundtrack for it), during one week of holiday.',
    tags: ['Android', 'game', 'Processing'],
    links: {
      live: 'https://play.google.com/store/apps/details?id=processing.test.redsq',
    },
    featured: true,
  },
  {
    id: 'atelier-codage',
    title: 'Coding Atelier',
    description: 'Initiative during which I taught young children how to code, using simple tools (Scratch, Wix, MIT App Inventor). I had created a complete lesson plan, fun projects (see links), and a cool website.',
    tags: ['website', 'Scratch'],
    links: {
      code: 'https://scratch.mit.edu/studios/1729506/',
      live: 'https://atelier-codage.wixsite.com/atelier-codage/presentation'
    },
    featured: true,
  },
  {
    id: 'simon',
    title: 'Simon game',
    description: 'One of my first FCC projects, CSS-focused',
    tags: ['HTML', 'CSS'],
    links: {
      code: 'https://codepen.io/manu4216/pen/rLdNqx',
      live: 'https://codepen.io/manu4216/full/rLdNqx',
    }
  },
  {
    id: 'calculator',
    title: 'Calculator',
    description: 'Advanced yet simple JavaScript calculator, capable of performing many Mathematical operations.',
    tags: ['CSS', 'JavaScript'],
    links: {
      code: 'https://codepen.io/manu4216/pen/KMzKNg',
      live: 'https://codepen.io/manu4216/full/KMzKNg',
    }
  },
  {
    id: 'game-of-life',
    title: 'Game of life',
    description: 'React project reproducing the famous Game of life. It is a cellular automaton devised by the British mathematician Conway in 1970.',
    tags: ['JavaScript', 'React'],
    links: {
      code: 'https://github.com/manu-4216/react-game-of-life',
      live: 'https://manu4216-gameoflife.surge.sh/',
    }
  },
  {
    id: 'secret-santa',
    title: 'Secret Santa',
    description: 'Fun project I used with my family, to manage our yearly Secret Santa tradition. Built using AWS lambda. Capabilities: send emails, update wishlist, host the website. No longer live.',
    tags: ['AWS lambda', 'serverless', 'nodemailer'],
    links: {
      code: 'https://github.com/manu-4216/secret-santa',
    },
    featured: true,
  },
  {
    id: 'voting',
    title: 'Voting app',
    description: 'Fullstack app, with protected routes, Passport.js auth. Data stored in MongoDb Atlas.',
    tags: ['React', 'node.js', 'MongoDB', 'Passport.js'],
    links: {
      code: 'https://github.com/manu-4216/fcc-dwa-votingapp',
    }
  },
  {
    id: 'kibo',
    title: 'Touch Keyboard concept',
    description: 'Side project to explore a touch friendly keyboard, built with React.',
    tags: ['React', 'JavaScript'],
    links: {
      code: 'https://github.com/manu-4216/kibo-keyboard',
      live: 'https://manu4216-kibo.surge.sh/',
    }
  },
  {
    id: 'cs50',
    title: 'CS50 submissions',
    description: 'CS50 submissions for the problem sets',
    tags: ['C', 'Python', 'Flask'],
    links: {
      code: 'https://github.com/manu-4216/cs50-submissions',
    }
  },
  {
    id: 'responsive-landing',
    title: 'Responsive landing page',
    description: 'Built right after learning about responsive web design from the classic Responsive Web Design book by Ethan Marcotte.',
    tags: ['responsive', 'CSS', 'SCSS'],
    links: {
      code: 'https://github.com/manu-4216/responsive-landing-page',
      live: 'https://manu-4216.github.io/responsive-landing-page/',
    }
  },
  {
    id: '3d-card',
    title: '3D menu animation',
    description: 'My submission for a CSS-only code challenge to build a cool menu. Hover over it to see it in action',
    tags: ['CSS', 'CSS animation', 'SCSS'],
    links: {
      code: 'https://codepen.io/manu4216/pen/XYxWGG',
      live: 'https://codepen.io/manu4216/full/XYxWGG',
    }
  },
  {
    id: 'meteorites',
    title: 'Meteorites visualizer',
    description: 'Backend focused project built for Chingu online platform',
    tags: ['node.js', 'lambda'],
    links: {
      code: 'https://github.com/manu-4216/meteorites-zeit',
    }
  },
  {
    id: 'routes-viz',
    title: 'React routes visualization',
    description: 'Side project created at work, useful for visualizing React Router routes graph.',
    tags: ['React', 'Router', 'graph'],
    links: {
      blog: 'https://dev.to/manu4216/visualization-of-route-navigation-in-a-react-app-35lg',
    },
    featured: true,
  },
  {
    id: 'portfolio',
    title: 'Portfolio website',
    description: 'My portfolio website that you see here. More content will be added shortly.',
    tags: ['Astro', 'React', 'Tailwind', 'SVG'],
    links: {
      code: 'https://github.com/manu-4216/portfolio',
      live: 'https://manu-4216.github.io/portfolio/',
    },
    featured: true,
  },
  {
    id: 'face-capture',
    title: 'Face capture library',
    description: 'Work project for which I was the main for a while. Code written after reading Clean Code book. So the code writing style was positively influenced by this book.',
    tags: ['React', 'library', 'camera'],
    links: {
      live: 'https://www.npmjs.com/package/@getyoti/react-face-capture',
    },
    featured: true,
  },
  {
    id: 'kyc-yoti',
    title: 'Identity verification product',
    description: 'Web SDK while at Yoti which does KYC verification. I grew alongside this React project. I built an Express mock server, and session manager as auxiliary tools. More interesting details in the Yoti experience section.',
    tags: ['React', 'state management'],
    links: {
      live: 'https://yoti.world/yoti-idv/idv',
    },
    featured: true,
  },
]

export default projects
