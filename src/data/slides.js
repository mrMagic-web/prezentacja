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
    title: "CSS Transform",
    subtitle: "Transform zmienia krztałt i pozycje obiektu. ",
    commentedcode: [
      {
        comment: "Stała prędkość podczas całej animacji",
        code: [
          "animation-timing-function: linear",
          "code line 2",
          "code line 3"
        ]
      }
    ],
    background: "timing.jpg",
    layout: "photo-left"
  }
];
export default slides;
