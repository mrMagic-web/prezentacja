const slides = [
  {
    title: "Wprowadzenie do CSS & Bootstap",
    subtitle: "Jak zrobić żeby moja strona wyglądała LOL",
    background: "style-1.jpg",
    layout: "photo-full",
    icon: "grid layout"
  },
  {
    title: "Winner",
    subtitle: "Aleksandra",
    background: "winner.jpg",
    layout: "photo-full",
    icon: "git square"
  },
  {
    title: "Cym jest CSS?",
    subtitle: "Cascading Style Sheets - Kaskadowe arkusze stylów",
    text:
      "Nazwa „kaskadowe arkusze stylów” wynika z faktu, iż gdy reguły CSS wykluczają się wzajemnie w arkuszu zewnętrznym, arkuszu wewnętrznym oraz na poziomie elementów HTML, priorytet stylów ustalany jest hierarchicznie. Przyjęto, że oddziaływanie stylów z arkuszy zewnętrznych może być modyfikowane przez style zdefiniowane w nagłówku dokumentu, te zaś mogą być modyfikowane przez reguły zdefiniowane bezpośrednio w ciele dokumentu. Pierwszeństwo mają zatem style zdefiniowane „bliżej” formatowanego elementu.",
    list: "",
    background: "giphy.gif",
    layout: "photo-left",
    icon: "question circle outline"
  },
  {
    title: "CSS w akcji",
    subtitle: "Układ, zdjęcia, tekst, pozycja, kolory i wiele innych",
    link: {
      text: "CSS Zen Garden, jedna strona w ponad 200 wersjach graficznych",
      url: "http://www.csszengarden.com/221/"
    },
    background: "style-3.jpg",
    layout: "photo-right"
  },
  {
    title: "Gdzie wrzucić CSS-y",
    subtitle:
      "Są trzy sposoby umieszczania CSS-ów na stronie. Ale tylko jeden dobry.",
    code: [
      `<h1 style="color:blue;">This is a Blue Heading</h1>`,
      " ",
      "<style>",
      "h1 {color: blue;}",
      "</style>",
      " ",
      `<link rel="stylesheet" href="styles.css">`
    ]
  },
  {
    title: "Plik CSS",
    subtitle: "Linkujemy plik CSS",
    code: [`<link rel="stylesheet" href="styles.css">`]
  },
  {
    title: "Składnia",
    subtitle:
      "Reguła składa się z selektora oraz deklaracji. Selektor określa element lub grupę elementów, którego ma dotyczyć deklaracja.",
    code: [
      `selektor { właściwość: wartość }`,
      "selektor1, selektor2 {  właściwość1: wartość1;  właściwość2: wartość2;}",
      "h1 { color: blue; font-size: 24px; }"
    ],
    background: "style-5.jpg",
    layout: "photo-left"
  },
  {
    title: "Podstawowe selektory",
    subtitle:
      "Styl możemy dołączyć na kilka sposobów. Możemy stylować sam tag, nadać tagowi id(musi być unikalne i nie powinno być używane do stylowania), nadać klasę lub dodać atrybut style(nooooo).",
    code: [
      `<div id="nawigacja" class="nawigacja" style="color: red;">Jakiśtam tekst</div>`
    ],
    background: "color-1.jpg",
    layout: "photo-right"
  },
  {
    title: "Głóne właściwości tekstu",
    commentedcode: [
      { comment: "Rozmiar tekstu", code: "font-size: 16px;" },
      { comment: "Kolor tekstu", code: "color: blue;" },
      {
        comment: "Podkreślenie, przekreślenie",
        code: "text-decoration: overline / underline / line-through;"
      },
      {
        comment: "Zmiana wielkości tekstu",
        code: "text-transform: uppercase / lowercase / capitalize"
      },
      { comment: "Odległośc między literami", code: "letter-spacing: 3px;" },
      { comment: "Wysokość linii", code: "line-height: 1.2rem" },
      {
        comment: "Odwrocenie tekstu, w przypadku pisma arabskiego",
        code: " direction: rtl;"
      }
    ]
  },
  {
    title: "Tło strony lub elementu",
    commentedcode: [
      { comment: "Kolor tła", code: "background-color: lightblue;" },
      {
        comment: "Zdjęcie jako tło",
        code: "background-image: url('paper.gif');"
      },
      {
        comment: "Powtarzanie tła, w przypadku zdjęcia",
        code: "background-repeat: repeat-x / repeat-y / no-repeat"
      },
      {
        comment: "Pozycja tła",
        code: "background-position: right top;"
      },
      {
        comment: "Rozmiar tła",
        code: "background-size: 300px 100px / 30% / auto / cover / contain;"
      }
    ]
  },
  {
    title: "Pseudoklasy",
    commentedcode: [
      {
        comment: "Stosujemy wpisując: po selektorze",
        code: "selector:pseudo-class {property:value;}"
      },
      {
        comment: "Właściwości linku, nie odwiedzonego i odwiedzonego",
        code:
          "a:link { color: #FF0000; font-size: 14px;} a:visited { color: #00FF00; }"
      },
      {
        comment: "Właściwości po najechaniu, zaznaczonego link",
        code: "a:hover { color: #FF00FF;} a:active {color: #0000FF;}"
      },
      {
        comment: "Pierwsze dziecko elementu, kolejny element tego typu",
        code: "p:first-child {color: blue;}, p:nth-of-type(2)"
      },
      {
        comment: "Negacja",
        code: ":not(p) {background: #ff0000;}"
      }
    ]
  },
  {
    title: "Pseudoelementy",
    commentedcode: [
      {
        comment: "Stosujemy wpisując :: po selektorze",
        code: "p::first-line { color: #ff0000; font-variant: small-caps;}"
      },
      {
        comment: "Pierwsza linia tekstu",
        code: "p::first-line { color: #ff0000; font-variant: small-caps;}"
      },
      {
        comment: "Pierwsza literaście",
        code: "p::first-letter { color: #ff0000; font-size: xx-large;}"
      },
      {
        comment:
          "Before - przed, After - po - tworzsymy miejsce w przestrzeni elementu",
        code:
          "h1::before { content: url(smiley.gif);} h1::after { content: ''; width: 200px; height: 150px; position: absolute}"
      }
    ]
  },
  {
    title: "Specificity",
    subtitle: "Co jest ważniejsze, a co jest mniej ważniejsze",
    commentedcode: [
      { comment: "0 0 0 0 0 - najmniej ważne", code: "* - zaznacz wszysko" },
      {
        comment: "0 0 0 0 1 - sprecyzowanie tagu ma wyższe znaczenie",
        code: "div, p, li"
      },
      { comment: "0 0 0 1 0 - nadanie klasy elementowi ", code: ".klasa" },
      {
        comment: '0 0 0 1 1 - klasa z z konkretnym tagiem <p class="klasa">',
        code: ".klasa p"
      },
      {
        comment: "0 0 1 0 0 - możemy miec tylko elementy z unikalnym id",
        code: "#id"
      },
      {
        comment:
          "0 1 0 0 0 - style ma wysokie znaczenie ale nie zalecane jest stosowanie",
        code: 'style="font-size: 10"'
      },
      {
        comment:
          "1 0 0 0 0 - używamy !important jak nic innego nie działa. Unikaj jak ognia.",
        code: "!important"
      }
    ],
    background: "specificity.png",
    layout: "no-photo"
  },
  {
    title: "Zadanie",
    subtitle:
      "Do naszych stron z poprzedniego tygodnia podpinamy plik style.css. Dajemy padding: 0, i margin: 0 wszystkim elementom. Ustalamy rozmiar paragrafu 1.1rem i wszystkim tytułom(h1 do h6) dajemy kolor ciemny-szary, i czcionkę Verdana. Wszystkie tytuły h1 wycentruj, zamień na wielkie litery i podkreśl. Wszystkim naszym sekcjom dodajemy unikalne id.",
    background: "question-1.jpg",
    layout: "photo-full",
    link: {
      text: "w3schools.com/css",
      url: "https://www.w3schools.com/css"
    }
  },
  {
    title: "Layout - Układ strony",
    subtitle:
      "Jedną z najważniejszych funkcji CSS-a to precyzowanie układu strony. Dzięki kilku ciekawym funkciom możemy umieści sekcje strony w odpowiednich miejscach. Mamy tu do wyboru, float, flexbox i css grid.",
    background: "grid-2.jpg",
    layout: "photo-left",
    link: {
      text: "w3schools.com/css",
      url: "https://www.w3schools.com/css"
    }
  },
  {
    title: "Box Model",
    subtitle: "Model pudełkowy CSS",
    background: "css-box-model.png",
    commentedcode: [
      {
        comment:
          "Elementom HTML możemy nadawać wysokość i szerokość za pomocą właściwości height oraz width.",
        code: "width: 300px; height: 200px;"
      },
      {
        comment: "Wypełnienie (padding), Dodaję do elmementu wypełnienie",
        code: "padding: 20px;"
      },
      {
        comment:
          "Obramowanie (border) - możemy nadawać naszym elementom ramki o różnych stylach.",
        code: "border: 2px dotted red;"
      },
      {
        comment:
          "Margines (margin) - Margines jest to odległość między krawędzią (ramką) elementu a innym, sąsiadującym elementem. ",
        code: "margin: 15px; margin-right: 4px;"
      }
    ],
    layout: "photo-left"
  },
  {
    title: "Budowanie układu strony",
    subtitle: "Flexbox vs CSS Grid vs inne",
    text:
      "Ściągamy kod z poniższego repozytorium. W katalogu layout mamy ciekawy przykład układu",
    background: "bootstap-1.jpg",
    link: {
      text: "github.com/mrMagic-web/kurs-frontendu",
      url: "https://github.com/mrMagic-web/kurs-frontendu"
    },
    layout: "photo-right"
  },
  {
    title: "Flexboxa Froggy",
    subtitle: "Flexbox to gra, ktróa pomaga w opanowaniu Flexboxa. ",
    background: "froggy.png",
    link: {
      text: "flexboxfroggy.com/#pl",
      url: "https://flexboxfroggy.com/#pl"
    },
    layout: "photo-left"
  },
  {
    title: "Gridgarden",
    subtitle: "Kolejna super fajna gra",
    background: "gridgarden.png",
    link: {
      text: "cssgridgarden.com/#pl",
      url: "http://cssgridgarden.com/#pl"
    },
    layout: "photo-right"
  },
  {
    title: "Zadanie",
    subtitle:
      "Twoja strona index z zeszłego tygodnia miała header i footer. Jesli jeszcze nie ma to podziel środkową częśc na część głowną i część boczną(asside). Użyj flexboxa lub CSS grid żeby odpowiednio podzielić swoją stronę.",
    background: "question-1.jpg",
    layout: "photo-full",
    link: {
      text: "w3schools.com/css",
      url: "https://www.w3schools.com/css"
    }
  },
  {
    title: "RWD",
    subtitle: "Responsive Web Design",
    text:
      "Technika projektowania strony www, tak aby jej wygląd i układ dostosowywał się automatycznie do rozmiaru okna przeglądarki, na której jest wyświetlany np. przeglądarki, smartfonów czy tabletów.",
    background: "example-rwd.jpg",
    layout: "photo-left"
  },
  {
    title: "RWD kod",
    commentedcode: [
      {
        comment:
          "Upewnij się, że w nagłówku pliku HTML (<head>) znajduje się poniższy kod: ",
        code:
          '<meta name="viewport" content="width=device-width, initial-scale=1">'
      },
      {
        comment: " Style działające dla szerokości ekranu większej od 600px",
        code: "@media only screen and (min-width: 600px) {div.example { ... }"
      },
      {
        comment:
          "Style dla ekranu pracującego w trybie `landscape` i jednocześnie o podwójnej gęstości pikseli (ta gęstość pikseli jest charakterystyczna dla wyświetlaczy Retina)",
        code:
          "@media screen and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2) { .class2 { ... }}"
      },
      {
        comment: "Style dla wydruku strony",
        code: "@media print { .class3 { ... } }"
      }
    ],
    background: "grid1.jpg",
    layout: "photo-right"
  },

  {
    title: "Zadanie",
    subtitle:
      "Popraw swoją stronę tak aby wyświetlała się lepiej na mniejszych ekranach(mobile). Teksty mają być mniejsze a sejcja asside powinna iść pod sekcję głowną.",
    background: "question-1.jpg",
    layout: "photo-full",
    link: {
      text: "w3schools.com/css/css_rwd_intro",
      url: "https://www.w3schools.com/css/css_rwd_intro.asp"
    }
  }
];
export default slides;
