const slides = [
  {
    title: "CSS Animacje",
    subtitle: "Czas powiedzieć 'NIE' wszystkim nudnym nieanimowanym stronom",
    background: "homer.gif",
    layout: "photo-full"
  },
  {
    title: "Winners",
    subtitle: "Kamil, Filip, Cyprian",
    background: "winner.jpg",
    layout: "photo-full"
  },
  {
    title: "+ animacji na stronie",
    subtitle: "Animacja ożywi stronę i podkreśli istotne interakcje",
    list: [
      "zwraca uwagę na element",
      "podkreśla istotną zmianę na stronie",
      "istotny element dobrego UX-u",
      "pozwala na pokazanie, że coś zajmie czas (loading...)",
      "zwiększa efekt wow waszych stron",
      "co jeszcze?"
    ],
    background: "animate-basic.gif",
    layout: "photo-right"
  },
  {
    title: "- animacji na stronie",
    subtitle: "Istotne jest zastanowić się nad celem animacji.",
    text:
      "Nie tworzymy animowanych elementów po to żeby się tylko pokazać, albo żeby były. Każda decyzja o użyciu danego efektu powinna wywodzić się z konkretnej potrzeby.",
    list: [
      "wymaga sporo pracy",
      "może spowolnić stronę",
      "roprasza użytkownika"
    ],
    background: "minus.jpg",
    layout: "photo-left"
  },
  {
    title: "12 zasad animacji Disneya",
    subtitle: "bo animacje nie powinny być przypadkowe",

    list: [
      "Zgniatanie i rozciąganie/Squash and stretch",
      "Wyprzedzenie/Anticipation",
      "Inscenizacja/Staging - kompozycja sceny",
      "Rysowanie progresywne lub według klatek kluczowych",
      "Zazębianie się akcji i podążanie za akcją",
      "Rozpędzanie i zwalnianie"
    ],
    link: {
      text:
        "12 zasad animacji Disneya, czyli jak nakręcić idealny film animowany",
      url: "https://lekturaobowiazkowa.pl/na-ekranie/12-zasad-animacji-disneya/"
    },
    background: "pinokio.jpg",
    layout: "photo-right"
  },
  {
    title: "12 zasad animacji Disneya - cd",
    list: [
      " Łuki/Arcs",
      " Akcja drugoplanowa",
      "Synchronizacja/ timing",
      "Wyolbrzymianie",
      "Dobry rysunek",
      "Urok"
    ],
    link: {
      text: "Ilusion of life",
      url: "https://vimeo.com/93206523"
    },
    commentedcode: [
      {
        comment: "12 Principles of Animation",
        code: "https://youtu.be/uDqjIdI4bF4"
      }
    ],
    background: "motion.gif",
    layout: "photo-left"
  },
  {
    title: "CSS Transform",
    subtitle: "Transform zmienia krztałt i pozycje obiektu. ",
    commentedcode: [
      {
        comment: "Przesuń obiekt o 300px horyzontalnie",
        code: "transform: translateX(300px)"
      },
      {
        comment: "Przesuń obiekt o 150px wertykalnie",
        code: "transform: translateY(150px)"
      },
      {
        comment: "Obróć o 45stopni względem osi x ",
        code: "transform: rotateX(45deg)"
      },
      {
        comment: "Pochylenie elementu",
        code: "transform: skew(20deg); transform: skew(15deg, -30deg);"
      },
      { comment: "Zwiększanie elementu", code: "transform: scale(2);" },
      {
        comment: "Zmiana w wielu płaszczyznach",
        code: "transform: translateX(200px) skew(20deg) scale(0.5);"
      }
    ],
    background: "transformers.jpg",
    layout: "photo-righ"
  },
  {
    title: "CSS 3d",
    subtitle:
      "W css możemy manipulować obiektami w 3 wymiarach. Używamy do tego koordynatów X, Y i Z",
    commentedcode: [
      {
        comment: "Obróć o 45stopni względem osi y",
        code: "transform: rotateY(45deg)"
      },
      {
        comment: "Perspektywa. Możemy ją nadać elementowi lub jego rodzicowi",
        code: "perspective: 1000px;"
      },
      {
        comment: "Poruszanie obiektem w 3 wymiarach",
        code: "transform: translate3d(100px, 200px, -150px);"
      }
    ],

    background: "3d-xyz.png",
    layout: "photo-left"
  },
  {
    title: "Zadanie",
    subtitle: "10 Minut",
    background: "question-1.jpg",
    layout: "photo-full",
    list: [
      "Ściągamy z repozytorium https://github.com/mrMagic-web/kurs-frontendu kod",
      "Wejdź w folder css-animations>robot",
      "Przesuń robota w inne miejsce",
      "Obróć robota o 45 stopni w prawo",
      "Przekrztałć robota w osi Z i dodaj perespektywę"
    ]
  },
  {
    title: "CSS Transitions",
    subtitle: "Pozwalają nam na stosowanie podstawowych animacji elementu.",
    commentedcode: [
      {
        comment: "Mając podstawowy element...",
        code: ".button {background: red;}"
      },
      {
        comment: "... możemy dodać efekt najechania na element",
        code: ".button:hover {background: blue; transform: scale(1.5)}"
      },
      {
        comment: "Żeby animacja była bardziej płynna możemy dodać transition",
        code: ".button {transition: .5s}"
      },
      {
        comment: "Możemy sprecyzować tranzycje do poszczególnych elementów",
        code: ".button {transition: background .5s ease-in, transform .25s ; }"
      },
      {
        comment: "Opóźnienie tranzycji",
        code:
          ".button {transition: background .5s ease-in, transform .25s .5s ; }"
      }
    ],

    background: "animated-button.png",
    layout: "photo-left"
  },
  {
    title: "Zadanie",
    subtitle: "20 Minut",
    background: "question-1.jpg",
    layout: "photo-full",
    list: [
      "W folderze button",
      "Dodaj akcję najazdu na przycisk :hover",
      "Stwórz ciekawy efekt wizualny w 3 wymiarach (nie przesadź)",
      "Twoja animacja powinna zawierać opóźnienia",
      "Dodaj drugi przycisk z innym efektem"
    ]
  },
  {
    title: "Keyframes",
    subtitle:
      "Definiowanie animacji. W CSS możemy dokładnie sprecyzować co się będzie działo w których momentach animacji. Pierw nadajemy naszej animacji nazwę:",
    code: ["@keyframes nazwa_animacji {...}"],
    commentedcode: [
      {
        comment:
          "Definiujemy co się będzie działo od początku do końca animacji używając from, to",
        code: "@keyframes nazwa_animacji { from {top: 0px;} to {top: 200px;}}"
      },
      {
        comment: "... lub używając wartości procentowych",
        code:
          "@keyframes nazwa_animacji { 0% {top: 0px;} 10% {top: 100px;} 100% {top: 200px;}}"
      },
      {
        comment: "... lub mieszane",
        code:
          "@keyframes nazwa_animacji { from {top: 0px;} 10% {top: 100px;} tp {top: 200px;}}"
      }
    ],
    background: "maxresdefault.jpg",
    layout: "photo-right"
  },
  {
    title: "Animowanie",
    subtitle:
      "Jak już zdefiniowaliśmy animację musimy dodać do niej właściwości",
    code: [
      "selektor{animation-name: nazwa czas typ animacji opóźnienie powtórzenia kierunek  }"
    ],
    commentedcode: [
      { comment: "Nazwa animacji", code: "animation-name: animowany_robot;" },
      { comment: "Czas trwania animacji", code: "animation-duration: 3s;" },
      {
        comment: "Szybkość wykonywania animacji w różnych fazach jego trwania",
        code:
          "animation-timing-function: ease-in; // linear, ease, sease-in, ease-in-out, cubic-besier"
      },
      {
        comment: "Opóźnienie rozpoczęcia animacji",
        code: "animation-delay: 2s;"
      },
      {
        comment: "Ilość powtórzeń animacji",
        code: "animation-iteration-count: 10; // wartość liczbowa, infinite"
      },
      {
        comment: "Kierunek animacji",
        code:
          "animation-direction: reverse; // normal, reverse, alternate, alternate-reverse"
      }
    ],
    background: "animationg.jpg",
    layout: "photo-left"
  },
  {
    title: "Zadanie",
    subtitle: "15 Minut",
    background: "question-1.jpg",
    layout: "photo-full",
    list: [
      "Dodajemy robotowi 3 nowe keyframy w %.",
      "Robot powinien się poruszać nie tylko horyzontalnie ale również z góry w dół ekranu",
      "Animacja powinna powtarzać się w nieskończonośc",
      "Robot powinien się obracać"
    ]
  },
  {
    title: "Animation",
    subtitle: "Skrócony zapis",
    code: [
      "selektor{animation-name: nazwa czas typ animacji opóźnienie powtórzenia kierunek  }"
    ],
    commentedcode: [
      { comment: "Nazwa animacji", code: "animation-name: animowany_robot;" },
      { comment: "Czas trwania animacji", code: "animation-duration: 3s;" },
      {
        comment: "Szybkość wykonywania animacji w różnych fazach jego trwania",
        code:
          "animation-timing-function: ease-in; // linear, ease, sease-in, ease-in-out, cubic-besier"
      },
      {
        comment: "Opóźnienie rozpoczęcia animacji",
        code: "animation-delay: 2s;"
      },
      {
        comment: "Ilość powtórzeń animacji",
        code: "animation-iteration-count: 10; // wartość liczbowa, infinite"
      },
      {
        comment: "Kierunek animacji",
        code:
          "animation-direction: reverse; // normal, reverse, alternate, alternate-reverse"
      }
    ],
    background: "bouncing_ball.jpg",
    layout: "photo-left"
  },
  {
    title: "Funkcje czasowe i Easing",
    subtitle: "Funkcja określająca szybkość animacji w różnych momentach",
    code: [
      "animation-timing-function: (linear | ease | ease-in | ease-out | ease-in-out | step-start | step-end | steps(int,start | end) | cubic-bezier(n,n,n,n) | initial | inherit)"
    ],
    commentedcode: [
      {
        comment: "Stała prędkość podczas całej animacji",
        code: "animation-timing-function: linear"
      },
      {
        comment:
          "wolne rozpoczęcie, następnie przyspieszenie i zwolnienie przed końcem animacji",
        code: "animation-timing-function: ease"
      },
      {
        comment: "powolne rozpoczęcie, szybkie zakończenie",
        code: "animation-timing-function: ease-in"
      },
      {
        comment: "szybkie rozpoczęcie, powolne zakończenie",
        code: "animation-timing-function: ease-out"
      },
      {
        comment: "wolne rozpoczęcie i zakończenie, szybki środek animacji",
        code: "animation-timing-function: ease-in-out"
      },
      {
        comment: "własne ustawienie szybkości. http://cubic-bezier.com",
        code: "animation-timing-function: cubic-bezier(.1,.71,.94,.23)"
      }
    ],
    background: "timing.jpg",
    layout: "photo-left"
  },
  {
    title: "Zadanie",
    subtitle: "30 Minut",
    background: "question-1.jpg",
    layout: "photo-full",
    list: [
      "W folderze rockets",
      "Popraw moją animację rakieta",
      "Pierw rakiety powinny się potrząsać i powoli ruszać w górę",
      "Rakiety nabierają prędkości by na koniec wylecieć poza ekran"
    ]
  },
  {
    title: "Kontolowany start/stop animacji",

    commentedcode: [
      {
        comment: "Zatrzymywanie animacji",
        code: "animation-play-state: paused;"
      },
      {
        comment: "Rozpoczęcie animacji",
        code: "animation-play-state: running;"
      }
    ],
    background: "engine-start-stop.jpg",
    layout: "photo-left"
  },
  {
    title: "Zaawansowane animacje w 3d",
    subtitle:
      "Możemy kontrolować z którego punktu nasz element jest animowany. Domyśnie obiekt animujemu od środka. Możemy również łączyć różne animacje ze sobą.",
    commentedcode: [
      {
        comment: "Zmiana miejsca animacji obiektu",
        code: "transform-origin: 50% 70%;"
      },
      {
        comment: "Pierwszy element",
        code:
          "span:nth-child(1) {animation: flipUp 1s cubic-bezier(0.68, -0.55, 0.26, 1.55) both;}"
      },
      {
        comment: "Kolejny element",
        code:
          "span:nth-child(3) {animation: flipUp 1s cubic-bezier(0.68, -0.55, 0.26, 1.55) 0.4s both;}"
      },
      {
        comment:
          "Łączenie kolejnych animacji. Po przecinku definiujemy kolejną animację",
        code:
          "span:nth-child(1) { animation: flipUp 1s cubic-bezier(0.68, -0.55, 0.26, 1.55) both, flipDown .5s cubic-bezier(0.45, 0.03, 0.51, 0.95) 2s forwards;}"
      }
    ],
    background: "3d-robot.jpg",
    layout: "photo-right"
  },
  {
    title: "Tworzenie sekwencji",
    subtitle: "Możemy również łączyć różne animacje ze sobą jedna po drugiej.",
    text:
      "Łączenie kolejnych animacji. Po przecinku definiujemy kolejną animację.",
    code: [
      "span:nth-child(1) {",
      "animation: flipUp 1s cubic-bezier(0.68, -0.55, 0.26, 1.55) both,",
      "flipDown .5s cubic-bezier(0.45, 0.03, 0.51, 0.95) 2s forwards;",
      "}"
    ],
    commentedcode: [
      {
        comment: "Pierwsza animacja (flipUP)",
        code:
          "@keyframes flipUp {from {transform: scale(0.2) rotateX(90deg);} to { tranform: scale(1) rotateX(0deg);}}"
      },
      {
        comment: "Kolejna animacja (flipDown)",
        code: "@keyframes flipDown { to { transform: rotateX(-180deg); } }"
      }
    ],
    background: "05_Action-Sequence-02.jpg",
    layout: "photo-left"
  },
  {
    title: "Zadanie",
    subtitle: "20 Minut",
    background: "question-1.jpg",
    layout: "photo-full",
    list: [
      "Otwórz folder 3d-tekst",
      "Zmień napis na swoje imię",
      "Stwórz ciekawą sekwencję 2 animacji w 3d dla wszystkich liter swojego imienia."
    ]
  },
  {
    title: "Animacje CSS vs JS",
    subtitle:
      "Na rynku możemy znaleźć sporo rozwiązań pomagających w tworzeniu animacji do stron WWW.",
    text:
      "Animacje CSS są zalecane głównie do prostych animacji, jednego lub kilku elementów. Przy większej ilości obiektów lub gdy efekt animacji może się zmienić w zależności od reakcji użytkownika (gry), będziemy musieli sięgnąć po Java Script",
    list: [
      "Three.js - Biblioteka świetnie się sprawdza przy animacjach obiektów 3d.",
      "Velocity - prosta w użyciu biblioteka bardzo dobrze radzi sobie ze skomplikowanymi animacjami",
      "Greensock.js - szybka biblioteka, działa dobrze na starszych przeglądarkach",
      "Scroll Reveal - pozwala na tworzenie ciekawych animacji przy skrolowaniu strony",
      "i wiele innych"
    ],
    background: "web-animation-libraries-A2.jpg",
    layout: "photo-right"
  },
  {
    title: "Animacja nie działa w mojej przeglądarce :(",
    subtitle:
      "Większość tych efektów, które dzisiaj widzieliśmy powinna działać w Twojej przeglądarce. Jednak w starszych przeglądarkach będziemy zmuszeni stosować tzw. prefixy. Możemy tu użyć narzędzia o nazwie Autoprefixer",
    link: {
      text: "Autoprefixer CSS online",
      url: "https://autoprefixer.github.io/"
    },

    background: "autoprefixer.jpg",
    layout: "photo-right"
  },
  {
    title: "Przydatne narzędzia do pracy z animacją",
    subtitle: "Bo po co tworzyć wszystko od nowa?",
    list: [
      "http://cubic-bezier.com",
      "https://autoprefixer.github.io/",
      "Bounce.js - sporo gotowych animacji, można też tworzyć własne ustawienia",
      "codepen.io - miejsce gdzie można szybko potestować swój kod i poszukać rozwiązań innych użytkowników"
    ],
    background: "tools.jpg",
    layout: "photo-left"
  },
  {
    title: "Debugowanie animacji w Chrome i Mozilla Firefox developer tools",
    subtitle:
      "Kliknij prawym przyciskiem na element, który chcesz dopracować i wybierz inspect.",

    background: "inspect.png",
    layout: "photo-right"
  }
];
export default slides;
