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
    layout: "photo-full",
  },
     {
    title: "CSS Transform",
    subtitle: "Transform zmienia krztałt i pozycje obiektu. ",
    code: [
        
    ],
  
    background: "winner.jpg",
    layout: "photo-full",
  },

 {
    title: "Keyframes",
    subtitle: "Definiują stan obiektu w poszczególnych krokach animacji",
      commentedcode: [
        { comment: "Przesuń obiekt o 300px horyzontalnie", code: "transform: translateX(300px)" },
        { comment: "Przesuń obiekt o 150px wertykalnie", code: "transform: translateY(150px)" },
        { comment: "Obróć o 45stopni względem osi x ", code: "transform: rotateX(45deg)" },
        { comment: "Pochylenie elementu", code: "transform: skew(20deg); transform: skew(15deg, -30deg);" }, 
        { comment: "Zwiększanie elementu", code: "transform: scale(2);" }, 
        { comment: "Zmiana w wielu płaszczyznach", code: "transform: translateX(200px) skew(20deg) scale(0.5);" }, 
    ],
  
    background: "winner.jpg",
    layout: "photo-full",
  },
   {
    title: "CSS 3d",
    subtitle: "W css możemy manipulować obiektami w 3 wymiarach. Używamy do tego koordynatów X, Y i Z",
   commentedcode: [
        { comment: "Obróć o 45stopni względem osi y", code: "transform: rotateY(45deg)" },
        { comment: "Perespektywa. Możemy ją nadać elementowi lub jego rodzicowi", code: "perespectove: 1000px;" },
        { comment: "Poruszanie obiektem w 3 wymiarach", code: "transform: translate3d(100px, 200px, -150px);" },
    ],

    background: "3d-xyz.png",
    layout: "photo-left",
  },
   {
    title: "CSS Transitions",
    subtitle: "Pozwalają nam na stosowanie podstawowych animacji elementu.",
   commentedcode: [
        { comment: "Mając podstawowy element...", code: ".button {background: red;}" },
        { comment: "... możemy dodać efekt najechania na element", code: ".button:hover {background: blue; transform: scale(1.5)}" },
       { comment: "Żeby animacja była bardziej płynna możemy dodać transition", code: ".button {transition: .5s}" },
       { comment: "Możemy sprecyzować tranzycje do poszczególnych elementów", code: ".button {transition: background .5s ease-in, transform .25s ; }" },
        { comment: "Opóźnienie tranzycji", code: ".button {transition: background .5s ease-in, transform .25s .5s ; }" },
    ],

    background: "3d-xyz.png",
    layout: "photo-left",
  },
     {
    title: "Zadanie",
    subtitle:
      "10 Minut",
    background: "question-1.jpg",
    layout: "photo-full",
    list: ["Dodajemy trzecią wartość do tranzycji naszego przycisku.", "Zmienić opóźnienia animacji żeby jeszcze bardziej zwiększyć efekt animiacji."]
  },
  {
    title: "Animowanie",
    subtitle: "Jak już zdefiniowaliśmy animację musimy zdefiniować jej właściwości",
    code: [
        'selektor{animation-name: nazwa czas typ animacji opóźnienie powtórzenia kierunek  }'
    ],
    commentedcode: [
        { comment: "Nazwa animacji", code: "animation-name: animowany_robot;" },
        { comment: "Czas trwania animacji", code: "animation-duration: 3s;" },
        { comment: "Szybkość wykonywania animacji w różnych fazach jego trwania", code: "animation-timing-function: ease-in; // linear, ease, sease-in, ease-in-out, cubic-besier" },
        { comment: "Opóźnienie rozpoczęcia animacji", code: "animation-delay: 2s;" },
        { comment: "Ilość powtórzeń animacji", code: "animation-iteration-count: 10; // wartość liczbowa, infinite" },
        { comment: "Kierunek animacji", code: "animation-direction: reverse; // normal, reverse, alternate, alternate-reverse" },
    ],
    background: "winner.jpg",
    layout: "photo-full",
  },
      {
    title: "Animation",
    subtitle: "Skrócony zapis",
    code: [
        'selektor{animation-name: nazwa czas typ animacji opóźnienie powtórzenia kierunek  }'
    ],
    commentedcode: [
        { comment: "Nazwa animacji", code: "animation-name: animowany_robot;" },
        { comment: "Czas trwania animacji", code: "animation-duration: 3s;" },
        { comment: "Szybkość wykonywania animacji w różnych fazach jego trwania", code: "animation-timing-function: ease-in; // linear, ease, sease-in, ease-in-out, cubic-besier" },
        { comment: "Opóźnienie rozpoczęcia animacji", code: "animation-delay: 2s;" },
        { comment: "Ilość powtórzeń animacji", code: "animation-iteration-count: 10; // wartość liczbowa, infinite" },
        { comment: "Kierunek animacji", code: "animation-direction: reverse; // normal, reverse, alternate, alternate-reverse" },
    ],
    background: "winner.jpg",
    layout: "photo-full",
  },
    {
    title: "Funkcje czasowe i Easing",
    subtitle: "Funkcja określająca szybkość animacji w różnych momentach",
    code: [
        'animation-timing-function: (linear | ease | ease-in | ease-out | ease-in-out | step-start | step-end | steps(int,start | end) | cubic-bezier(n,n,n,n) | initial | inherit)'
    ],
    commentedcode: [
        { comment: "Stała prędkość podczas całej animacji", code: "animation-timing-function: linear" },
        { comment: "wolne rozpoczęcie, następnie przyspieszenie i zwolnienie przed końcem animacji", code: "animation-timing-function: ease" },
        { comment: "powolne rozpoczęcie, szybkie zakończenie", code: "animation-timing-function: ease-in" },
        { comment: "szybkie rozpoczęcie, powolne zakończenie", code: "animation-timing-function: ease-out" },
        { comment: "wolne rozpoczęcie i zakończenie, szybki środek animacji", code: "animation-timing-function: ease-in-out" },
       { comment: "własne ustawienie szybkości. http://cubic-bezier.com", code: "animation-timing-function: cubic-bezier(.1,.71,.94,.23)" },

    ],
    background: "winner.jpg",
    layout: "photo-full",
  },
    {
    title: "Zadanie",
    subtitle:
      "15 Minut",
    background: "question-1.jpg",
    layout: "photo-full",
    list: ["Dodajemy robotowi 3 nowe keyframy w %.", "Robot powinien się poruszać nie tylko horyzontalnie ale również z góry w dół ekranu",
          "Animacja powinna powtarzać się w nieskończonośc", "Robot powinien się obracać"]
  },
];
export default slides;
