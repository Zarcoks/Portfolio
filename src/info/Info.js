import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Victor",
    lastName: "Jost",
    initials: "vj", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Student in Computer Networking",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '🕺',
            text: 'socially fueled by dancing'
        },
        {
            emoji: '🌎',
            text: 'based in Évry'
        },
        {
            emoji: "🎓",
            text: "apprentice at Télécom SudParis"
        },
        {
            emoji: "📧",
            text: "victor.jost@telecom-sudparis.eu"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/victor.jost.2025/",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://www.instagram.com/victorjost34/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/Zarcoks",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/victor-jost-562420255/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Victor. I'm an apprentice student at Télécom SudParis. I also studied at the IUT of Montpellier, I enjoy swing dance, and I believe computer networking is the foundation of all our future technologies. I'm currently looking for a company for my apprenticeship.",
    skills:
        {
            proficientWith: ['web', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma'],
            exposedTo: ['Networks (CCNA)', 'Management', 'IoT', 'AI']
        }
    ,
    hobbies: [
        {
            label: 'dancing',
            emoji: '🕺'
        },
        {
            label: 'fishing',
            emoji: '🎣'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        },
        {
            label: 'anime',
            emoji: '⛩️'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Coconut's website",
            live: "https://www.lirmm.fr/coconut/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/Zarcoks", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Pokemonator",
            live: null,
            source: "https://github.com/Zarcoks/Pokemonator",
            image: mock2
        },
        {
            title: "Travel Express",
            live: null,
            source: "https://github.com/AntoineCrsr/Projet-Stage-UQAC/tree/main/backend",
            image: mock3
        },
        {
            title: "Cloud Automation Experiments",
            live: null,
            source: "https://github.com/Zarcoks/Azure-pipeline-VMSS",
            image: mock4
        }
    ]
}