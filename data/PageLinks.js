/* Middle Nav Icons - page icons */
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import AppsIcon from "@mui/icons-material/Apps";
import PersonIcon from "@mui/icons-material/Person";

/* Bottom Nav Icons - social icons */
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

import { motion } from "framer-motion";
import { Loop } from "@mui/icons-material";
//animation file for the svg element.
import { svgAnimation } from "./framer-motion config";

export const PageLink = [
  {
    id: 0,
    title: "Home",
    path: "/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Layer_1"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        fill="#ECB365"
        width="32"
        height="32"
      >
        <motion.path
          variants={svgAnimation}
          initial={svgAnimation.initial}
          animate={svgAnimation.animate}
          transition={svgAnimation.transition}
          strokeWidth={svgAnimation.strokeWidth}
          fill={svgAnimation.fill}
          exit={svgAnimation.exit}
          d="M12,14a3,3,0,0,0-3,3v7.026h6V17A3,3,0,0,0,12,14Z"
        />
        <motion.path
          variants={svgAnimation}
          initial={svgAnimation.initial}
          animate={svgAnimation.animate}
          transition={svgAnimation.transition}
          strokeWidth={svgAnimation.strokeWidth}
          fill={svgAnimation.fill}
          exit={svgAnimation.exit}
          d="M13.338.833a2,2,0,0,0-2.676,0L0,10.429v10.4a3.2,3.2,0,0,0,3.2,3.2H7V17a5,5,0,0,1,10,0v7.026h3.8a3.2,3.2,0,0,0,3.2-3.2v-10.4Z"
        />
      </svg>
    ),
  },
  {
    id: 1,
    title: "Projects",
    path: "/Projects",
    icon: (
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        id="Filled"
        fill="transparent"
        viewBox="0 0 24 24"
        width="32"
        height="32"
      >
        <motion.path
          variants={svgAnimation}
          initial={svgAnimation.initial}
          animate={svgAnimation.animate}
          transition={svgAnimation.transition}
          strokeWidth={svgAnimation.strokeWidth}
          fill={svgAnimation.fill}
          d="M19,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H5A5.006,5.006,0,0,0,0,9v3H24V9A5.006,5.006,0,0,0,19,4ZM8.184,4A3,3,0,0,1,11,2h2a3,3,0,0,1,2.816,2Z"
        />
        <motion.path
          variants={svgAnimation}
          initial={svgAnimation.initial}
          animate={svgAnimation.animate}
          transition={svgAnimation.transition}
          strokeWidth={svgAnimation.strokeWidth}
          fill={svgAnimation.fill}
          d="M13,15a1,1,0,0,1-2,0V14H0v5a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V14H13Z"
        />
      </motion.svg>
    ),
  },
  {
    id: 2,
    title: "Skills",
    path: "/Skills",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Layer_1"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="none"
      >
        <motion.path
          variants={svgAnimation}
          initial={svgAnimation.initial}
          animate={svgAnimation.animate}
          transition={svgAnimation.transition}
          strokeWidth={svgAnimation.strokeWidth}
          fill={svgAnimation.fill}
          onAnimationEnd={() => {
            console.log(this);
          }}
          d="M9,9h6v6h-6v-6Zm13,2v2h1c.55,0,1,.45,1,1s-.45,1-1,1h-1v2h1c.55,0,1,.45,1,1s-.45,1-1,1h-1.42c-.5,1.15-1.43,2.07-2.58,2.58v1.42c0,.55-.45,1-1,1s-1-.45-1-1v-1h-2v1c0,.55-.45,1-1,1s-1-.45-1-1v-1h-2v1c0,.55-.45,1-1,1s-1-.45-1-1v-1h-2v1c0,.55-.45,1-1,1s-1-.45-1-1v-1.42c-1.15-.5-2.07-1.43-2.58-2.58H1c-.55,0-1-.45-1-1s.45-1,1-1h1v-2H1c-.55,0-1-.45-1-1s.45-1,1-1h1v-2H1c-.55,0-1-.45-1-1s.45-1,1-1h1v-2H1c-.55,0-1-.45-1-1s.45-1,1-1h1.42c.5-1.15,1.43-2.07,2.58-2.58V1c0-.55,.45-1,1-1s1,.45,1,1v1h2V1c0-.55,.45-1,1-1s1,.45,1,1v1h2V1c0-.55,.45-1,1-1s1,.45,1,1v1h2V1c0-.55,.45-1,1-1s1,.45,1,1v1.42c1.15,.5,2.07,1.43,2.58,2.58h1.42c.55,0,1,.45,1,1s-.45,1-1,1h-1v2h1c.55,0,1,.45,1,1s-.45,1-1,1h-1Zm-5,5V8c0-.55-.45-1-1-1H8c-.55,0-1,.45-1,1v8c0,.55,.45,1,1,1h8c.55,0,1-.45,1-1Z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "About",
    path: "/about",
    icon: (
      <svg
        id="Layer_1"
        fill="none"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
      >
        <motion.path
          variants={svgAnimation}
          initial={svgAnimation.initial}
          animate={svgAnimation.animate}
          transition={svgAnimation.transition}
          strokeWidth={svgAnimation.strokeWidth}
          fill={svgAnimation.fill}
          d="m19 4h-4v-1a3 3 0 0 0 -6 0v1h-4a5.006 5.006 0 0 0 -5 5v10a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5v-10a5.006 5.006 0 0 0 -5-5zm-9 14a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1-1v-8a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1zm2-12a1 1 0 0 1 -1-1v-2a1 1 0 0 1 2 0v2a1 1 0 0 1 -1 1zm6 13h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2zm2-4h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zm0-4h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zm-15 0h3v6h-3z"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Contact",
    path: "/contact",
    icon: (
      <svg
        id="Layer_1"
        fill="none"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
      >
        <motion.path
          variants={svgAnimation}
          initial={svgAnimation.initial}
          animate={svgAnimation.animate}
          transition={svgAnimation.transition}
          strokeWidth={svgAnimation.strokeWidth}
          fill={svgAnimation.fill}
          d="m16 .3a4.968 4.968 0 0 1 1.879 1.164l1.656 1.658a4.954 4.954 0 0 1 1.165 1.878h-4.7zm-2 11.7h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2zm2-5a2 2 0 0 1 -2-2v-5h-6a5.006 5.006 0 0 0 -5 5v14a5.006 5.006 0 0 0 5 5h8a5.006 5.006 0 0 0 5-5v-12zm0 13h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2zm-2-4h-4a3 3 0 0 1 0-6h4a3 3 0 0 1 0 6z"
        />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Testing",
    path: "/testing",
    icon: <ContactPageIcon />,
  },
  ,
];

export const socialLinks = [{}];
