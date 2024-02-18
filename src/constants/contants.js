import profileUrl from "../images/profile.jpg";
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
  name: "Agnes",
  position: "A Software Engineer",
  description: "I create functional and user-friendly applications to help businesses grow and achieve their desired outcome."
}


export const LOGO_LINK = {
  id: 1,
  title: "ANicer",
  url: "https://agneshie.github.io/portfolio/"
}


export const NAV_LINKS = [
  {
    id: 1,
    title: "HOME",
    url: "https://agneshie.github.io/portfolio/"
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
  subHeading: "I'm a Software Engineer based in Makati City, Philippines.",
  description: "Have worked for more than 10+ years in system analysis, development, enhancement, and production support. I create functional and user-friendly applications to help businesses grow and achieve their desired outcome",
  hobby: "Outside work, I like to travel, experience new cuisines, and I appreciate art in all forms.",
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
        url: "https://react.dev/",
      },
      {
        id: 2,
        name: "Redux",
        icon: <ReduxSvg />,
        url: "https://redux.js.org/",
      },
      {
        id: 3,
        name: "Firebase",
        icon: <FirebaseSvg />,
        url: "https://firebase.google.com/"
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
        url: "https://react.dev/",
      },
      {
        id: 2,
        name: "Node.js",
        icon: <NodeJsSvg />,
        url: "https://nodejs.org/en"
      },
      {
        id: 3,
        name: "Express.js",
        icon: <ExpressJsSvg />,
        url: "https://expressjs.com/",
      },
      {
        id: 4,
        name: "PostgreSQL",
        icon: <PostgreSqlSvg />,
        url: "https://www.postgresql.org/",
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


