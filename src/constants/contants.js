import profileUrl from "../images/profile.png";
// import linkedInIcon from "../images/linkedin.svg";
// import githubIcon from "../images/github.svg";
// import instagramIcon from "../images/instagram.svg";
import { ReactComponent as LinkedInSvg } from "../images/linkedin.svg";
import { ReactComponent as GithubSvg } from "../images/github.svg";
import { ReactComponent as InstagramSvg } from "../images/instagram.svg";
import { ReactComponent as ArrowSvg } from "../images/box-arrow-up-right.svg";
import { ReactComponent as ReactSvg } from "../images/react.svg";
import { ReactComponent as ReduxSvg } from "../images/redux.svg";
import { ReactComponent as FirebaseSvg } from "../images/firebase.svg";
import { ReactComponent as NodeJsSvg } from "../images/nodejs.svg";
import { ReactComponent as ExpressJsSvg } from "../images/expressjs.svg";
import { ReactComponent as PostgreSqlSvg } from "../images/postgresql.svg";


export const HERO_DETAILS = {
  name: "Agnes Therese",
  position: "A Full Stack Developer",
  description: "I am passionate to translate business requirements into quality code."
}


export const NAV_LINKS = [
  {
    id: 1,
    title: "HOME",
    url: "/"
  },
  {
    id: 2,
    title: "ABOUT",
    url: "#about"
  },
  {
    id: 3,
    title: "PROJECTS",
    url: "#projects"
  },
  {
    id: 4,
    title: "CONTACT",
    url: "#contact"
  },
];


export const ABOUT_DETAILS = {
  heading: "I'm Agnes.",
  profileUrl: profileUrl,
  subHeading: "I'm a Full Stack Web Developer based in Makati City, Philippines.",
  description: "Have worked for more than 10+ years in system analysis, development, enhancement, and production support for the essential systems of the bank.",
  hobby: "Outside work, I spend my free time learning the technologies for web development.",
}

export const SOCIALS = [
  {
    id: 1,
    name: "LinkedIn",
    icon: <LinkedInSvg />,
    url: "https://ph.linkedin.com/in/agnes-therese-nicer"
  },
  {
    id: 2,
    name: "Github",
    icon: <GithubSvg />,
    url: "https://github.com/agneshie"
  },
  {
    id: 3,
    name: "Instagram",
    icon: <InstagramSvg />,
    url: "https://www.instagram.com/agneshiee"
  }
]


export const PROJECTS = [
  {
    id: 1,
    title: "Crown Clothing App",
    description: "An e-commerce app that allows user to sign-in with email and password or with google sign-in, sign-up with email and password, add or remove items from cart, and checkout.",
    techStack: [
      {
        id: 1,
        name: "React",
        icon: <ReactSvg />,
        url: "https://github.com/agneshie",
      },
      {
        id: 2,
        name: "Redux",
        icon: <ReduxSvg />,
        url: "https://github.com/agneshie",
      },
      {
        id: 3,
        name: "Firebase",
        icon: <FirebaseSvg />,
        url: "https://github.com/agneshie"
      }

    ],
    url: "https://crwn-clothing-appv2.netlify.app/",
    githubLink: "https://github.com/agneshie/crwn-clothing-v2",
    projectLinks: [
      {
        id: 1,
        name: "Github Link",
        icon: <GithubSvg />,
        url: "https://github.com/agneshie/crwn-clothing-v2",
      },
      {
        id: 2,
        name: "Project Url",
        icon: <ArrowSvg />,
        url: "https://crwn-clothing-appv2.netlify.app/",
      },
    ],
  },
  {
    id: 2,
    title: "Face Recognition Brain App",
    description: "A face recognition app that detects face/s of an image using the face-detection model of Clarifai. Allows user to register and sign-in, and input image url. The app displays the total count of user's entry.",
    techStack: [
      {
        id: 1,
        name: "React",
        icon: <ReactSvg />,
        url: "https://github.com/agneshie",
      },
      {
        id: 2,
        name: "Node.js",
        icon: <NodeJsSvg />,
        url: "https://github.com/agneshie"
      },
      {
        id: 3,
        name: "Express.js",
        icon: <ExpressJsSvg />,
        url: "https://github.com/agneshie",
      },
      {
        id: 4,
        name: "PostgreSQL",
        icon: <PostgreSqlSvg />,
        url: "https://github.com/agneshie",
      },
    ],

    url: "https://facerecognitionbrain-piub.onrender.com/",
    githubLink: "https://github.com/agneshie/face-recognition-brain",
    projectLinks: [
      {
        id: 2,
        name: "Github Link",
        icon: <GithubSvg />,
        url: "https://github.com/agneshie/face-recognition-brain",
      },
      {
        id: 1,
        name: "Project Url",
        icon: <ArrowSvg />,
        url: "https://facerecognitionbrain-piub.onrender.com/",
      },
    ],
  }
]


