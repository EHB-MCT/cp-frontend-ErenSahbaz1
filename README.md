# 🌱 Keloglan — Interactive Parallax Fairy Tale Website

This project is an interactive, scroll-based fairy tale website based on the Turkish folk story of _Keloglan_ — the "bald boy" — a brave young man who takes on a giantess to become a hero. Created as part of a school assignment, this immersive website translates a traditional tale into a modern web experience, packed with animated storytelling, parallax effects, and visual richness.

🔗 **Live Demo:** [Coming Soon — Link Here]

---

## 📖 Concept & Inspiration

The goal of this project was to create an interactive digital story using a parallax scroll format. Inspired by sites like [Every Last Drop](http://everylastdrop.co.uk/), [KPRVerse](https://kprverse.com/), and [Active Theory’s Paper Planes](https://activetheory.net/work/paper-planes), this site aims to deliver both aesthetic appeal and engaging storytelling through layered animation, interactive features, and scroll-based pacing.

---

## 🎨 Design & Structure

The story unfolds as the user scrolls vertically through the journey of Keloglan:

- **Intro Scene:** A peaceful village where Keloglan lives with his mother.
- **Adventure Begins:** Keloglan departs, crossing various landscapes.
- **The Giantess:** A dynamic and intense climax where he faces the giantess.
- **Triumphant Return:** Keloglan returns home as a celebrated hero.

🖼 Key Visual Techniques:

- Layered parallax movement (e.g. trees, mountains, clouds).
- Background transitions to reflect narrative progression.
- Fixed character with changing poses as you scroll.
- Sound effects and ambient music embedded in scenes.

---

## 🧠 Features & Interactivity

- **Scroll-Based Animation:** Story scenes reveal and animate as you scroll.
- **Fixed Main Character:** Keloglan stays centered while the background and story evolve.
- **Interactive Fight Scene:** The giantess fight features audio effects and scene transitions.
- **Easter Egg Ideas:** Inspired by other parallax examples, with plans to add collectibles and secret interactions.

🎧 Sound FX:

- [Wind SFX](https://pixabay.com/sound-effects/winds-sound-effects-304060/) for ambiance.
- [Sword Fight](https://pixabay.com/sound-effects/sword-sound-260274/) for the battle.
- [Epic Win](https://pixabay.com/sound-effects/ascent-braam-magma-brass-d-cinematic-trailer-sound-effect-222269/) for the final victory.

---

## ⚙️ Technology Stack

- **React (Vite)** – Fast build & dev environment.
- **TailwindCSS** – Styling and layout.
- **React-i18next** – Multilingual support.
- **TanStack Query** – For fetching project data.
- **Material UI & React Icons** – Dropdowns and visuals.
- **Custom CSS + Parallax Logic** – Built from scratch to handle scene animations.

---

## 🛠 Project Structure

```
📁 /src
├── components/          → Portal and utility components
├── keloglan-components/ → All Keloglan scenes and elements
├── core/                → i18n setup
├── shared/mock/         → courseProjects.json (used with TanStack Query)
├── App.jsx              → Routing setup
└── App.css              → Global styling
```

---

## 🖼 Visual References & Design Inspiration

- http://everylastdrop.co.uk/
- https://delassus.com/en/
- https://en.manayerbamate.com/
- https://kprverse.com/
- https://www.igloo.inc/
- https://activetheory.net/work/paper-planes/
- https://www.spylt.com/
- https://www.awwwards.com/websites/

---

## 👤 Author

**Eren Sahbaz**  
Front-End Design Student @ Erasmushogeschool Brussel  
Languages: Dutch, Turkish, English  
📧 Contact: eren.sahbaz@student.ehb.be

---

## 🔖 License

This project is for educational and non-commercial use. All visuals are either custom-made, used under free licenses, or adapted with attribution. Sources available upon request.

## Sources

[![Tanstack-Query]used to fetch the data from /shared/mock/courseProjects.json Used in the data.service.ts fetchData.ts useCourseProjectsQuery.ts also in the card, filter and portal component. (https://tanstack.com/query/latest) also from the pdf files from dual learning @StudioHyperdrive]
[![React-i18next] used to make translations used in /core/i18n (https://react.i18next.com/) & StudioHyperdrive]
[![Tailwindcss] used for styling eveywhere in the app (https://tailwindcss.com/docs/installation/using-vite)(https://youtu.be/6biMWgD6_JY?si=ukKbmkEHyQYDwiwx)]

[![React-icons] For search bar (https://react-icons.github.io/react-icons/)]
[![MaterialUI] For dropdown in filter component (https://mui.com/material-ui/react-select/)]

https://examples.motion.dev/react/split-text-wavy for wavyTitle component
