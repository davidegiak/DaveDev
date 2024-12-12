import {
    reactive
} from "vue";

let state = reactive({
    tech: [{
            id: 1,
            name: "JavaScript",
            icon: "fa-brands fa-js",
            docs: "https://www.javascript.com/"
        },
        {
            id: 2,
            name: "VueJs",
            icon: "fa-brands fa-vuejs",
            docs: "https://vuejs.org/"
        },
        {
            id: 3,
            name: "PHP",
            icon: "fa-brands fa-php",
            docs: "https://www.php.net/"
        },
        {
            id: 4,
            name: "Laravel",
            icon: "fa-brands fa-laravel",
            docs: "https://laravel.com/"
        },
        {
            id: 5,
            name: "Html",
            icon: "fa-brands fa-html5",
            docs: "https://html.com/"
        },
        {
            id: 6,
            name: "CSS",
            icon: "fa-brands fa-css3-alt",
            docs: "https://www.w3.org/TR/CSS/"
        },
        {
            id: 7,
            name: "MySql",
            icon: "fa-solid fa-database",
            docs: "https://www.mysql.com/it/"
        },
        {
            id: 8,
            name: "NodeJs",
            icon: "fa-brands fa-node",
            docs: "https://nodejs.com/en/"
        },
        {
            id: 9,
            name: "Bootstrap",
            icon: "fa-brands fa-bootstrap",
            docs: "https://getbootstrap.com/"
        },
    ],
    projects: [{
        id: 1,
        title: "Boolzap",
        slug: "Boolzap",
        description: "Ho creato una web app per messaggiare con un layout simile a whatsapp in Vue.Js, Bootstrap5, Html & CSS. Ho implementato la possibilità di cercare e filtrare tra i contatti, mandare messaggi (con possibilità di inserire emoji) con orario attuale reale, al quale si riceverà una risposta preimpostata, i messaggi si possono anche modificare ed eliminare. I messaggi non ci saranno più al refresh della pagina.",
        image: "src/assets/img/boolzap.png",
        technologies: [
            1, 5, 6, 9
        ],
        git_link: "https://www.example.com",
    },
    // {
    //     id: 2,
    //     title: "BELLAAAA",
    //     slug: "Bellaaaa",
    //     description: "Ho creato una web app per messaggiare con un layout simile a whatsapp in Vue.Js, Bootstrap5, Html & CSS. Ho implementato la possibilità di cercare e filtrare tra i contatti, mandare messaggi (con possibilità di inserire emoji) con orario attuale reale, al quale si riceverà una risposta preimpostata, i messaggi si possono anche modificare ed eliminare. I messaggi non ci saranno più al refresh della pagina.",
    //     image: "/src/assets/img/Boolzap.png",
    //     technologies: [
    //         2, 4, 7, 8
    //     ],
    //     git_link: "https://www.example.com",
    // },
 ],
    localHostUrl: 'http://localhost:8000',
},)

export default (state);