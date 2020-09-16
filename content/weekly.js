const data = [
    {
        id: '42',
        date: 'September 16, 2020',
        description: "lookup.design, Capsule, Stitches, Beyond Media Queries, Vanilla Colorful and more...",
        previewImage: 'weekly/42_BU72AiDGUqQ.png',
    },
    {
        id: '41',
        date: 'September 9, 2020',
        description: "Shortcuts.design, Omatsuri, ztext.js, Previewed, Morphing SVG, Selecto.js and more...",
        previewImage: 'weekly/41_mvXr14kwS.png',
    },
    {
        id: '40',
        date: 'August 26, 2020',
        description: "umami, Deviceful, heroicons, handwritten.js, GitDuck, The Animated Web and more...",
        previewImage: 'weekly/40_mNfRsV1ZX.png',
    },
    {
        id: '39',
        date: 'August 19, 2020',
        description: "Elder.js, Responsively, Storybook 6.0, zustand, Kor, Docusaurus, Embla Carousel and more...",
        previewImage: 'weekly/39_yclY9FNWMWFT.png',
    },
    {
        id: '38',
        date: 'August 12, 2020',
        description: "Bumbag, Magnetic Buttons, moment-guess, PurgeCSS, content-visibility, Papercups and more...",
        previewImage: 'weekly/38_Bgtd4VvbQk.png',
    },
    {
        id: '37',
        date: 'August 05, 2020',
        description: "Shoelace, CSS3 loaders, tinykeys, useImageColor, Laws of UX, Teenyicons and more...",
        previewImage: 'weekly/37_jDAoT8zEoYJ.png',
    },
    {
        id: '36',
        date: 'July 29, 2020',
        description: "useHooks, Differences Between SSG And SSR, Warp SVG Online, Rows n' Columns and more...",
        previewImage: 'weekly/36_YgGZG6Ia8Pg.png',
    },
    {
        id: '35',
        date: 'July 22, 2020',
        description: "this vs that, Super Expressive, CSS Effects Snippets, The WET Codebase and more...",
        previewImage: 'weekly/35_NjpCYmVH1E9.png',
    },
    {
        id: '34',
        date: 'July 15, 2020',
        description: "Tabler Icons, 1-Line Layouts, Squircley, Capsize, Developer Handbook 2020 and more...",
        previewImage: 'weekly/34_aZGM3Wn6X.png',
    },
    {
        id: '33',
        date: 'July 08, 2020',
        description: "hyperapp, html.systems, Knopf.css, Tailwind cheat sheet, shareon, DecentDrops and more...",
        previewImage: 'weekly/33_1VLKcyR7bH.png',
    },
    {
        id: '32',
        date: 'July 01, 2020',
        description: "Grid Cheatsheet, tree.nathanfriend.io, Reflex.js, Textures.js, Whole page slider and more...",
        previewImage: 'weekly/32_8Mxo47KDM7oA.png',
    },
    {
        id: '31',
        date: 'June 24, 2020',
        description: "Beam Cafe, Gradient Generator, Tutorialist Application State Management and more...",
        previewImage: 'weekly/31_Gb6XqN_at.png',
    },
    {
        id: '30',
        date: 'June 17, 2020',
        description: "Blob generator, keen-slider, Collected Notes, Sitejoy, Code Notes, FeedFox and more...",
        previewImage: 'weekly/30_ALcrO6vxmW.png',
    },
    {
        id: '29',
        date: 'June 10, 2020',
        description: "Shape Dividers, Pattern Generator, GitHub Classroom, No Design Development and more...",
        previewImage: 'weekly/29_kYFHDLMCny.jpg',
    },
    {
        id: '28',
        date: 'June 03, 2020',
        description: "Supabase, Obsidian, MDN React, htmx, Rough Notation, Tailblocks, Lander and more...",
        previewImage: 'weekly/28_6VOsvFSISkN.jpg',
    },
    {
        id: '27',
        date: 'May 27, 2020',
        description: "Norde Source, Appy Dev, Keyframes, SEO Cheat Sheet, Marketing for Engineer and more...",
        previewImage: 'weekly/27_QVZWND3ef9.jpg',
    },
    {
        id: '26',
        date: 'May 20, 2020',
        description: "Deno, JSNation, Modern CSS Solutions, quicklink, animista, styco and more...",
        previewImage: 'weekly/26_Lb7D2EHl0.jpg',
    },
    {
        id: '25',
        date: 'May 13, 2020',
        description: "Codespaces, CSS Grid Generator, Design Resources, endpoints.dev, JavaScript Cheatsheet and more...",
        previewImage: 'weekly/25_47ij0NyvLLlr.jpg',
    },
    {
        id: '24',
        date: 'May 06, 2020',
        description: "Hero Generator, Editly, Lit, Pantry, Stylestash, Tara, 1loc, Next.js Tips and more...",
        previewImage: 'weekly/24_uGLRV7oexoQY.jpg',
    },
    {
        id: '23',
        date: 'April 29, 2020',
        description: "Eloquent JavaScript, BlurHash, Spaced Time, next-dark-mode, pattern.css and more...",
        previewImage: 'weekly/23_PNdVHWJhhY.jpg',
    },
    {
        id: '22',
        date: 'April 22, 2020',
        description: "GitHub is free, React Query, BEM Cheat Sheet, Crank.js, Meanderer.js and more...",
        previewImage: 'weekly/22_-r_G7t1TmMM-.jpg',
    },
    {
        id: '21',
        date: 'April 15, 2020',
        description: "Level Up Your CSS Animation Skills, Snapfont, Linkdash, multicopy and more...",
        previewImage: 'weekly/21_TQqKM7tqp3.jpg',
    },
    {
        id: '20',
        date: 'April 8, 2020',
        description: "Open UI, AllTheFreeStock, HTML DOM, Magic Link, Flowify, Lisan and more...",
        previewImage: 'weekly/20_gvhUTeGFThyL.jpg',
    },
    {
        id: '19',
        date: 'April 1, 2020',
        description: "MVP.css, Web Skills, Puddle.js, How I Became a Better Programmer, Motion Layout and more...",
        previewImage: 'weekly/19_7vkm7AduX.jpg',
    },
    {
        id: '18',
        date: 'March 25, 2020',
        description: "Parametric Color Mixer, Animated Hamburger Icons, TypeScript Particles, simpleParallax.js and more...",
        previewImage: 'weekly/18_byxZkAbgi6m.jpg',
    },
    {
        id: '17',
        date: 'March 18, 2020',
        description: "midori, Jitsi Meet, Creative Coding Essentials, unscreen, JavaScript CheatSheet and more...",
        previewImage: 'weekly/17_x-m4hXzBUf.jpg',
    },
    {
        id: '16',
        date: 'March 11, 2020',
        description: "Monitoror, Slide to Subscribe, Micromodal, Distorted Link Effects, Docker Essentials and more...",
        previewImage: 'weekly/16_Hljwdqvlj.jpg',
    },
    {
        id: '15',
        date: 'March 04, 2020',
        description: "CSS Icons, Mailbrew, Tailwind UI, SaaS landing pages, Brainstorming business ideas and more...",
        previewImage: 'weekly/15_GfBt1e1iMmv.jpg',
    },
    {
        id: '14',
        date: 'February 26, 2020',
        description: "PostHog, JavaScript Interview Questions, Free Programming Books, grep.app and more...",
        previewImage: 'weekly/14_IDQam2EhU.jpg',
    },
    {
        id: '13',
        date: 'February 19, 2020',
        description: "Good first issue, App Ideas, Beautiful Dingbats, GitHub CLI, The JavaScript Way and more...",
        previewImage: 'weekly/13_wEjUeOmw6.jpg',
    },
    {
        id: '12',
        date: 'February 12, 2020',
        description: "Octomments, Neumorphism, Bit, DarkModeJS, Full Stack Open 2019 and more...",
        previewImage: 'weekly/12_hYYERZfgjN.jpg',
    },
    {
        id: '11',
        date: 'February 5, 2020',
        description: "You Don't know JS Yet, Vanilla Web Projects, 24 modern ES6 code snippets and more...",
        previewImage: 'weekly/11_XHNGNbcxXTd9.jpg',
    },
    {
        id: '10',
        date: 'January 29, 2020',
        description: 'Hoard.fyi, Screen Size Map, Mirage JS, Stock Resources, Vuer, React Libraries and more...',
        previewImage: 'weekly/10_cFtwFpJq4i.jpg',
    },
    {
        id: '9',
        date: 'January 22, 2020',
        description: 'Hero Patterns, Tiny Helpers, GoatCounter, is-website-vulnerable, JamTemplates and more...',
        previewImage: 'weekly/9_NO1fgp8JAC.jpg',
    },
    {
        id: '8',
        date: 'January 15, 2020',
        description: 'Gradient Magic, Broot, cacolor.co, stencils, 23 VS Code Shortcuts, Craft.js and more...',
        previewImage: 'weekly/8_eCwGcGMru.jpg',
    },
    {
        id: '7',
        date: 'January 08, 2020',
        description: 'Oh Shit, Git!?!, Colorsinspo, Parcel, Redux Style Guite, Bot Land, Rhubarb and more...',
        previewImage: 'weekly/7_jWievUsU94.jpg',
    },
    {
        id: '6',
        date: 'January 01, 2020',
        description: 'Just JavaScript, CHL.LI, CoreUI Icons, Convert2Svg, Generative Placeholders and more...',
        previewImage: 'weekly/6_PFoMT5sX2.jpg',
    },
    {
        id: '5',
        date: 'December 25, 2019',
        description: 'Codepen Most Hearted 2019, V 8.0, lazy-simon.js, GitHub Apps and more...',
        previewImage: 'weekly/5_rWQIlzMSWyC.jpg',
    },
    {
        id: '4',
        date: 'December 18, 2019',
        description: 'Nedux, New CSS “:is()”, Challenging projects, musicForProgramming, No to Chrome and more...',
        previewImage: 'weekly/4_7CFLCCSb-.jpg',
    },
    {
        id: '3',
        date: 'December 11, 2019',
        description: 'Self Hosted, CSS Layout, Refactoring UI, Deep Sea, react-spring, Leonardo and more...',
        previewImage: 'weekly/3_ej2l18cDF.jpg',
    },
    {
        id: '2',
        date: 'December 04, 2019',
        description: 'Bootstrap Icons, SVG Landscapes, roughViz.js, JavaScript Christmas, Curlie, Cell and more..',
        previewImage: 'weekly/2_8_QCaI4fl.jpg',
    },
    {
        id: '1',
        date: 'November 27, 2019',
        description: 'SWR, Fresh Folk, Colors and fonts, Animated CSS Backgrounds, Postwoman, Pika and more',
        previewImage: 'weekly/1_dvGgcZmRx.jpg',
    }
]

module.exports = {
    weeklyData: data,
}
