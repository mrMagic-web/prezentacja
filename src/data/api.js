const slides = [
  {
    title: "Wprowadzenie do CSS & Bootstap",
    subtitle: "Jak zrobić żeby moja strona wyglądała LOL",
    background: "style-1.jpg",
    layout: "photo-full", // photo-left, photo-right
    icon: "grid layout",
    text:
      "Nazwa „kaskadowe arkusze stylów” wynika z faktu, iż gdy reguły CSS wykluczają się wzajemnie w arkuszu zewnętrznym, arkuszu wewnętrznym oraz na poziomie elementów HTML.",
    link: {
      text: "CSS Zen Garden, jedna strona w ponad 200 wersjach graficznych",
      url: "http://www.csszengarden.com/221/"
    },
    code: [`<h1 style="color:blue;">This is a Blue Heading</h1>`, " "],
    commentedcode: [{ comment: "Rozmiar tekstu", code: "font-size: 16px;" }]
  }
];
export default slides;
