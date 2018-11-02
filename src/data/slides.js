const slides = [
  {
    title: "Wprowadzenie do CSS & Bootstap",
    subtitle: "Jak zrobić żeby moja strona wyglądała LOL",
    background: "style-1.jpg",
    layout: "photo-full",
    icon: "grid layout"
  },
  {
    title: "Cym jest CSS?",
    subtitle: "Cascading Style Sheets - Kaskadowe arkusze stylów",
    tekst: "Nazwa „kaskadowe arkusze stylów” wynika z faktu, iż gdy reguły CSS wykluczają się wzajemnie w arkuszu zewnętrznym, arkuszu wewnętrznym oraz na poziomie elementów HTML, priorytet stylów ustalany jest hierarchicznie. Przyjęto, że oddziaływanie stylów z arkuszy zewnętrznych może być modyfikowane przez style zdefiniowane w nagłówku dokumentu, te zaś mogą być modyfikowane przez reguły zdefiniowane bezpośrednio w ciele dokumentu. Pierwszeństwo mają zatem style zdefiniowane „bliżej” formatowanego elementu."
    list: ""
    background: "style-2.jpg",
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
    title: "Składnia arkuszy",
    subtitle: "Reguła składa się z selektora oraz deklaracji. Selektor określa element lub grupę elementów, którego ma dotyczyć deklaracja.",
    link: {
      text: "CSS Zen Garden, jedna strona w ponad 200 wersjach graficznych",
      url: "http://www.csszengarden.com/221/"
    },
    kod: [ `selektor { 
      właściwość: wartość 
    }`,
    `selektor1, selektor2 { 
      właściwość1: wartość1; 
      właściwość2: wartość2; 
    }`, 
    `h1 { 
      color: blue; 
      font-size: 24px;
    }` ],
    background: "style-3.jpg",
    layout: "photo-right"
  },
];
export default slides;
