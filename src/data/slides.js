const slides = [
  {
    title: "CSS Animacje",
    subtitle: "Czas powiedzieć 'NIE' wszystkim nudnym nieanimowanym stronom",
    background: "winner.jpg",
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
    background: "winner.jpg",
    layout: "photo-full"
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
    background: "winner.jpg",
    layout: "photo-full"
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
    background: "winner.jpg",
    layout: "photo-full"
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
    background: "winner.jpg",
    layout: "photo-full"
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
    background: "winner.jpg",
    layout: "photo-full"
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

    background: "3d-xyz.png",
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
  // TODO Dodac slide keyframes
  {
    title: "Keyframes",
    subtitle: "Definiowanie animacji",

    commentedcode: [
      { comment: "Nazwa animacji", code: "animation-name: animowany_robot;" }
    ],
    background: "winner.jpg",
    layout: "photo-full"
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
    background: "winner.jpg",
    layout: "photo-full"
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
    background: "winner.jpg",
    layout: "photo-full"
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
    background: "winner.jpg",
    layout: "photo-full"
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
  }
];
export default slides;
