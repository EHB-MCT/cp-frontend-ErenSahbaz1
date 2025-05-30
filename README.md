# Keloglan — Interactive Parallax Fairy Tale Website

An immersive parallax website showcasing a Turkish folk tale with modern web animations, interactions, and visual storytelling.

[Live Demo](https://react.i18next.com/)

## Features

- Dynamic Parallax Effects

  - Mountains, clouds, and characters move at different speeds as you scroll.

- Interactive Text Elements

  - Wavy titles and scatter text respond to user hover/movement.

- i18n Support
  -Available in Dutch and English.

## Tech Stack

**Client:** React, TanStack Query, React-i18next, React-Router, TypeScript, Vite

**Design:** GSAP, MUI, React-Three/Drei, React-Three/Fiber, Framer-Motion, TailwindCSS

## Run Locally

Clone the project

```bash
git clone https://github.com/EHB-MCT/cp-frontend-ErenSahbaz1
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Documentation

[Tanstack-Query](https://tanstack.com/query/latest) used to fetch the data from /shared/mock/courseProjects.json Used in the data.service.ts fetchData.ts useCourseProjectsQuery.ts also in the card, filter and portal component.

[React-i18next](https://react.i18next.com/) used to make translations used in /core/i18n.

[Tailwindcss](https://tailwindcss.com/docs/installation/using-vite)

[React-icons](https://react-icons.github.io/react-icons/) For Search bar.

[MaterialUI](https://mui.com/material-ui/react-select/) Dropdown filter component.

[Motion.dev](https://tanstack.com/query/latest) For WavyTitle and ScatterText component.

[dev.to](https://dev.to/bravemaster619/simplest-way-to-embed-a-youtube-video-in-your-react-app-3bk2) To embed youtube videos in my makingOf page.

[GSAP](https://gsap.com/docs/v3/) Most of my animations in my parallax page.

[React Three Fiber](https://r3f.docs.pmnd.rs/getting-started/introduction?trk=public_post_comment-text) and [React Three Drei](https://drei.docs.pmnd.rs/getting-started/introduction) For my 3D models

[React-Icons](https://react-icons.github.io/react-icons/) For some of the icons i used.

[Motion](https://examples.motion.dev/react) For some of the text animation assets.

## Author

[**Eren Sahbaz**](https://github.com/ErenSahbaz1)

MCT Student @ Erasmushogeschool Brussel

Languages: Dutch, Turkish, English, French

Contact: eren.sahbaz@student.ehb.be / nendari01@gmail.com

## License

This project is for educational and non-commercial use. All visuals are either custom-made, used under free licenses, or adapted with attribution. Sources available upon request.

## Credits

- StudioHyperdrive - Dual Learning Program Front-End ([**Iben Van de Veire**](https://www.linkedin.com/in/ibenvandeveire/) and Robbe Bierebeeck)
- Erasmushogeschool Brussel - Project supervision ([**Mike Derycke**](https://www.linkedin.com/in/mike-derycke-a01ab822/) and [**Stefan Tilburgs**](https://www.linkedin.com/in/stefan-tilburgs-2002059/) )

## Extra's (For Mike)

- TypeScript
- TailwindCss
- Gsap (animation)
- I18n
- useDebounce (Stop exessive API calls)
- React Three/fiber/drei
- Tanstack Query (also created my own react hook for fetching OMGAWESOME)
- Very cool effects
- React-Router (BUT the better version with using the DATA mode)
- **pls give me +10**
