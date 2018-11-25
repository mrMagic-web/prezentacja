const slides = [
  {
    title: "Java Script Intro",
    subtitle: "yeah bebe",
    background: "js/code.gif",
    layout: "photo-full"
  },
  {
    icon: "winner",
    title: "Programowanie to rozwiązywanie problemów",
    subtitle:
      "... i jak w przypadku każdego skomplikowanego problemu nie obędzie się bez frustracji. Jednak rozwiązanie problemu przynosi sporo satysfakcji.",
    background: "js/keep-calm.png",
    layout: "photo-full"
  },
  {
    title: "Z czego składa się strona internetowa?",
    list: [
      "HTML - treść strony(zdjęcia, tekst, linki, forma kontaktowa)",
      "CSS - warstwa wizualna strony internetowej(kolory, rozmiary, układ strony)",
      "Java Script - frontend - logika i interakcje (jak tu kliknę co się stanie?)",
      "Java Script - backend - Obsługa serwera(Node.js)"
    ],
    background: "js/website-1.jpg",
    layout: "photo-right"
  },
  {
    title: "Czym jest JavaScript",
    subtitle:
      "Język skryptowy używany do obsługi strony w przeglądarce (front end) i po stronie serwerów (front end) na platformie Node.",
    text:
      "Pod koniec lat 90. organizacja ECMA wydała na podstawie JavaScriptu standard języka skryptowego o nazwie ECMAScript. Przez wiele lat rozwój JS był raczej ograniczony aby w ostatnich latach stać się jednym za najpopularniejszych języków programowania. Obecnie ES jest w wersji 8(2017) choć nie wszystkie funkcje są wspierane przez przeglądarki.",
    background: "js/js-1.jpg",
    layout: "photo-right"
  },
  {
    title: "Chrome Developer Tools",
    subtitle: "Nieodłączne narzędzie developera Java Script.",
    list: [
      "Console - Wyświetla błędy, logi i pozwala na debugowanie i szybkie testowanie kodu.",
      "Sources - pozwala na obejrzenie plików i bezpośrednie ich edytowanie",
      "Network - pozwala na monitorowanie zapytań i odpowiedzi do backendu",
      "Performance - pozwala na zmierzenie procesów",
      "Application - informacje o danych używanych przez stronę"
    ],
    background: "js/devtool.png",
    layout: "photo-right"
  },
  {
    title: "Deklaracja zmiennej lub stałej",
    text:
      "Zmienne i stałe deklarujemy używając var, let(zmienna) lub const(stała) przed nazwą zmiennej. Potem możemy przypisać jej wartośc. ",
    commentedcode: [
      {
        comment:
          "Zmienna var - używana we wcześniejszych wersjach JS. Warto jej unikać.",
        code: ["var a = -10;"]
      },
      {
        comment: "Zmienna let.",
        code: ["let a = -10;", "let b = {}, c = 'Kurs Frontendu'"]
      },
      {
        comment: "Stała const - niezmienna",
        code: [
          "const x = 4;",
          "const button = document.querySelector('.button')"
        ]
      },
      {
        comment: "Wywołanie wartości",
        code: ["console.log(x)", "alert(x)"]
      }
    ]
  },
  {
    title: "Typy danych (typy proste)",
    subtitle:
      "Zmienne to coś w rodzaju 'pudełek', w których pod nazwami możemy trzymać dane.",
    text:
      "W JS używamy 5-ciu podstawowych typów danych. Dzielą się na typy proste(numer, ciąg znaków, wartość logiczna, null i undefined,) i typy złożone",
    commentedcode: [
      { comment: "Liczby", code: ["let i = 4; const number = 0.79;"] },
      {
        comment: "Ciąg znaków (string)",
        code: ["let name = 'Maciek'", 'const text = K\\"urs, front, endu\\" ']
      },
      {
        comment: "Wartość logiczna (Boolean)",
        code: ["const a = true, b = false"]
      },
      {
        comment: "null i undefined",
        code: ["const n = null;", "let u; // undefined"]
      }
    ]
  },
  {
    title: "Typy złożone - obiekty",
    subtitle:
      "Wszystkie zmienne nie będące typem prostym są obiektami i są typu referencyjnego.",
    text:
      "Ten typ danych charakteryzuje się tym, że zmienne nie mają przypisanej bezpośrednio wartości, a tylko wskazują na miejsce w pamięci, gdzie te dane są przetrzymywane.",
    commentedcode: [
      {
        comment: "Tablica",
        code: ["let arr1 = [1, 2, 3];", "const number = 0.79;"]
      },
      {
        comment: "Obiekt",
        code: [
          "let obj = {name:'Maciek', age: 10, sexy: true};",
          "const obj2 = {}"
        ]
      },
      {
        comment: "Funkcja",
        code: [
          "function makeCool(name) { return name ' jest cool'; }",
          "let sq = x => x*x;"
        ]
      }
    ]
  },
  {
    title: "Automatyczna konwersja typów",
    subtitle: "W JS możemy do woli zmieniać typy danych.",
    text:
      "Bywa przydatne przy budowaniu treści na stronę, choć może powodować błędy w bardziej skompilowanych skryptach.",
    code: [
      "let name = 'Kurs Frontendu';",
      "name = 10;",
      "name = false",
      "name = [1,2,3,6].sort();"
    ],
    background: "js/machine.jpg",
    layout: "photo-left"
  },
  {
    title: "Zadanie",
    subtitle: "Otwórz konsolę w Twojej przeglądarce.",
    list: [
      "Stwórz wszystkie poruszone typy danych.",
      "Stwórz stałą stałą name do której przypiszesz swoje imię, w następnej linii spróbuj ją zmienić na Twoje nazwisko.",
      "stwórz dwie zmienne numeryczne let a = 1; , let b = 3; i dodaj je do siebie",
      "stwórz zmienną c, która będzie ciągiem znaków o wartości '3', dodaj ją do a",
      "Jak myślisz czemu jest taki wynik?"
    ],
    background: "question-1.jpg",
    layout: "photo-full"
  },
  {
    title: "Automatyczna konwersja typów cd",
    commentedcode: [
      {
        comment: "Dodawanie dwóch ciągów znaków",
        code: ['"Kurs " + "Frontendu" //"Kurs Frontendu"']
      },
      {
        comment: "Dodawanie liczby do ciągu znaków",
        code: ['"20" + 1  //"201"']
      },
      {
        comment: "Dodawanie tablicy do ciągu znaków",
        code: [
          '[1,2,3] + "kurs" //1,2,3kurs, tablica została skonwertowana na 1,2,3'
        ]
      }
    ],
    background: "js/machine.jpg",
    layout: "photo-right"
  },
  {
    title: "Automatyczna konwersja typów cd",
    subtitle: "Dodawanie wartości logicznych",
    commentedcode: [
      {
        comment: "Dodawanie dwóch ciągów znaków",
        code: ["23 + true // 24, true zostało zamienione na 1"]
      },
      {
        comment: "Dodawanie wartości logicznych",
        code: [
          "true + true + true  //3",
          "true + false // 1, true = 1, false = 0 "
        ]
      }
    ],
    background: "js/machine.jpg",
    layout: "photo-left"
  },
  {
    title: "Zadanie",
    subtitle:
      "Stwórz dokument folder z podstawową stroną HTML, i podlinkuj ją do pliku script.js. Spróbuj zgadnąć wyniki poniższych działań.",
    text: "Sprawdź czy zgadłeś, użyj console.log(...) i sprawdź w konsoli. ",
    list: [
      "true + {}",
      "23 + 2 * []",
      "[]  + []",
      "[1,2,3] + {}",
      '23 + "" + false',
      '"23" + [1,2,3] + {} + true + false + !true'
    ],
    background: "question-1.jpg",
    layout: "photo-full"
  },
  {
    title: "Operatory",
    subtitle: "Jak w matematyce + - * / %",
    commentedcode: [
      {
        comment: "Dodawanie, odejmowanie",
        code: ["var y = 5", "let x = y + 2 // 7", "x = y - 2;"]
      },
      {
        comment: "Mnożenie i dzielenie",
        code: ["x = y * 2", "x = y / 2"]
      },
      {
        comment: "Reszta z dzielenia(modulo)",
        code: ["x = y % 2", "x = 100 / 3"]
      },
      {
        comment: "Inkrementacja, Dekrementacja",
        code: ["x++", "y--"]
      }
    ],
    background: "js/math.jpg",
    layout: "photo-right"
  },
  {
    title: "Służą do przypisania do zmiennej jakiejś wartości, pola, obiektu",
    commentedcode: [
      {
        comment: "=",
        code: ["const x = y"]
      },
      {
        comment: "+=, -=",
        code: ["x += y; // x = x + y", "x -= y; // x = x - y"]
      },
      {
        comment: "*=, /=",
        code: ["x *= y; // x = x * y", "x /= y; // x = x / y"]
      },
      {
        comment: "%=",
        code: ["x %= y; //x = x % y"]
      }
    ]
  },
  {
    title: "Operatory porównania",
    subtitle:
      "Operatory logiczne stosuje się w instrukcjach warunkowych. Służą one do porównywania lewej strony równania do prawej. let x = 5;",
    commentedcode: [
      {
        comment:
          "== - porównanie czy dwie wartości są równe, mogą być różne typy",
        code: ["x == 5; // true", "x == 8; // false", 'x == "5"; // true']
      },
      {
        comment: "!= - porównanie czy dwie wartości NIE są równe",
        code: ["x != 5; // false", "x != 8; // true ", 'x != ""; // true']
      },
      {
        comment: "=== - porównywanie czy równa wartość i te same typy",
        code: ["x === 5; // true", "x === 8; // false", 'x === "5"; // false']
      }
    ],
    background: "js/equal.jpg",
    layout: "photo-right"
  },
  {
    title: "Operatory porównania cd",
    commentedcode: [
      {
        comment: "!== - porównywanie czy NIE równa wartość i te same typy",
        code: ["x !== 5; // false", "x !== 8; // true ", 'x != "5"; // false']
      },
      {
        comment: "> większe od, < mniejsze od",
        code: ["x > 5; // false", "x < 8; // true ", 'x > "5"; // false']
      },
      {
        comment: ">= większe bądź równe, <= mniejsze bądź równe",
        code: ["x >= 5; // true", "x <= 8; // true ", 'x >= "5"; // true']
      }
    ],
    background: "js/equal.jpg",
    layout: "photo-left"
  },
  {
    title: "Operatory porównania cd",
    code: [
      "var x = 99;",
      'x == "99"//true',
      'x === "99" //false',
      "var y = null;",
      "y == undefined //true",
      "y === undefined //false",
      'true == "1"        //true',
      "0 == false         //true",
      "null == undefined  //true",
      "NaN == NaN         //false"
    ],
    background: "js/equal.jpg",
    layout: "photo-right"
  },
  {
    title: "Operatory logiczne",
    subtitle:
      " pomocą operatorów logicznych możemy łączyć kilka porównań w jedną całość. Poniżej przykłady dla x = 6 i y = 3:",
    commentedcode: [
      {
        comment: "&&, and (i) - obydwa muszą być poprawne",
        code: ["(x < 10 && y > 1) // true", "(x < 10 && y < 1) // false"]
      },
      {
        comment: "||, or (lub) - jeden z nich musi być poprawny",
        code: ["(x < 10 || y < 1) // true", "(x > 10 || y < 1) // false"]
      },
      {
        comment: "^	xor (jeden z, ale nie dwa równocześnie)",
        code: ["(x === 6 ^ y === 3)	// false, obydwa są prawdziwe"]
      },
      {
        comment: "!, not (negacja)",
        code: ["!(x === y) // true"]
      }
    ],
    background: "js/animate-basic.gif",
    layout: "photo-right"
  },
  {
    title: "Wartości Truthy i Falsy",
    subtitle:
      "Wartości które nie są ani true ani false ale zwracają true lub false",
    text: "z pominięciem poniższych wszystko inne zwraca true",
    commentedcode: [
      {
        comment: "--- FALSY ---",
        code: ["false", "0", '""', "null", "undefined", "NaN"]
      },
      {
        comment: "--- Truthy ---",
        code: ["true", '"false"', '"0"', "1"]
      }
    ],
    background: "js/animate-basic.gif",
    layout: "photo-right"
  },
  {
    title: "Zadanie",
    subtitle:
      "Spróbuj zgadnąć wyniki poniższych działań. const a = 8; const b = 15;",
    list: [
      "a === 8 && b === 10",
      "a === 8 || b === 8",
      "a === 8 ^ b === 15",
      "!(a === 8)",
      "(a === 2) || 1",
      "(a+a - true) === 15",
      '!(a == "8" || a === b) && !(b != 15 && a <= b) // mindf..k'
    ],
    background: "question-1.jpg",
    layout: "photo-full"
  },
  {
    title: "Instrukcje warunkowe if",
    subtitle:
      "Javascript zezwala nam na stosowanie instrukcji warunkowych, które sterują przebiegiem naszego programu.",
    text:
      "Instrukcja warunkowa wykonuje wybrany kod, w zależności czy wartość danego wyrażenia jest prawdą czy nie. if, else if, else - if sprawdza dany warunek, i w zależności czy jest on równy true lub false wykona sekcję kodu zawartą w klamrach",
    code: [
      "const x = 5;",
      "if (x > 5) {...} ",
      "else if (x < 5) {...} ",
      "else {...}"
    ],
    commentedcode: [
      {
        comment: "warunek się wykona",
        code: [
          "const x = 1;",
          "if (x === 1) { //warunek się wykona",
          "    console.log('Liczba równa się 1');",
          "}"
        ]
      }
    ],
    layout: "photo-full"
  },
  {
    title: "Instrukcje warunkowe if",
    commentedcode: [
      {
        comment: "warunek if, if else, else",
        code: [
          "const x = 5;",
          "if (x > 5) {",
          "    console.log('Liczba jest większa od 5');",
          "} else if (x < 5) {",
          "    console.log('Liczba jest mniejsza od 5');",
          "} else {",
          "    console.log('Liczba równa się 5');",
          "}"
        ]
      }
    ],
    layout: "photo-full"
  },
  {
    title: "Instrukcje warunkowe - Operator warunkowy",
    subtitle: "Operator warunkowy - skrócona wersja warunku if",
    code: ['const x = (wyrażenie) ? "true" : "false";'],
    commentedcode: [
      {
        comment: "",
        code: [
          "const x = 3;",
          "console.log( (x % 2 === 0)? 'parzysta' : 'nieparzysta' )"
        ]
      },
      {
        comment: "",
        code: ["const adminRights = (user === 'admin') ? true : false;"]
      }
    ],
    background: "js/math.jpg",
    layout: "photo-right"
  },
  {
    title: "Instrukcje warunkowe - Switch",
    subtitle: "switch -  działa przyrównując wyniki do podanych warunków",
    code: [
      "switch (wyrażenie) {",
      "case przypadek1:",
      "    ...",
      "    break;",
      "case przypadek2:",
      "    ...",
      "    break;",
      "default:",
      "...",
      "}"
    ],
    background: "js/switch.jpg",
    layout: "photo-left"
  },
  {
    title: "Instrukcje warunkowe - Switch",
    commentedcode: [
      {
        comment:
          "Każdy przypadek kończymy słowem break. Jeżeli pominiemy break, wtedy nawet przy pomyślnym przyrównaniu zostaną wykonane kolejne sprawdzenia.",
        code: [
          "const num = 2;",
          "switch (num) {",
          "    case 1:",
          "        console.log('Numer równa się jeden');",
          "        break;",
          "    case 2:",
          "        console.log('Numer równa się dwa');",
          "        break;",
          "    default:",
          "        console.log('Jest to inny numer');",
          "}"
        ]
      }
    ],
    background: "js/switch.jpg",
    layout: "photo-left"
  },
  {
    title: "Zadanie",
    subtitle:
      "W folderze zadanie_warunki znajdziesz pliki html i JS z poniższym kodem",
    list: [
      "w zmiennej wiek jest tekst wpisany w formularz.",
      "zamień go na liczbę i sprawdź czy po zamianie masz liczbę czy nie liczbę",
      'jeżeli liczba jest większa lub równa 18, wypisz alert "wszystko ok", w przeciwnym razie wypisz "niestety, dostęp zablokowany"'
    ],
    code: [
      " ---- KOD HTML ----",
      '<form id="forma">',
      '    <label for="wiek">Wpisz wiek</label>',
      '    <input type="text" id="wiek" name="wiek">',
      '    <button type="submit">Sprawdź</button>',
      "</form>",
      " ---- KOD JS ----",
      "document.querySelector('#forma').addEventListener('submit', function(e) {",
      "  e.preventDefault();",
      "  //pobieramy wartość pola #wiek",
      "  const wiek = document.querySelector('#wiek').value;",
      "})"
    ],

    background: "question-1.jpg",
    layout: "photo-full"
  },
  {
    title: "Pętle - for",
    subtitle: "Pozwalają na powtarzanie danego kodu określoną ilość razy",
    text: "Najczęściej używanyą pętlą jest for",
    code: [
      "for (inicjowanie_licznika; warunek_kończący_wykonywanie_pętli;  zmiana_licznika) { ",
      "kod wykonywany przy każdmym powtórzeniu",
      "}"
    ],
    commentedcode: [
      {
        comment: "Wypisz tekst na stronie 100 razy",
        code: [
          "let text = ''",
          "for (let i=0; i<100; i++) {",
          "    text += <p>Kurs frontendu jest cool.</p>",
          "}",
          "document.querySekectir('#kurs').innerHTML(text);"
        ]
      }
    ],
    background: "js/loop.jpg",
    layout: "photo-right"
  },
  {
    title: "Pętle - while",
    subtitle:
      "W pętli tego typu nie definiujemy pierw licznika, ani zmiany licznika.",
    code: ["let i = 1;", "while (i <= 100) {", "    ...", "    i++;", "}"],
    background: "js/animate-basic.gif",
    layout: "photo-right"
  },
  {
    title: "Pętla w pętli",
    subtitle: "Możemy umieści jedną pętlę w innej.",
    code: [
      "for (let i=0; i<10; i++) {",
      "  console.log('Główna pętla nr: ' + i, 'color:red');",
      "  for (let y=0; y<6; y++) {",
      "      console.log(' Pętla wewnętrzna nr: ' + y, 'color:blue');",
      "  }",
      "}"
    ],
    background: "js/loop.jpg",
    layout: "photo-left"
  },
  {
    title: "Pętla na tablicach",
    subtitle:
      "Bardzo często używamy obiektów i tablic do przechowywania danych. Dzięki użyciu pętli możemy budować z nich treści strony.",
    code: [
      "const kurs = ['Kamil', 'Filip', 'Konrad', 'Cyprian', 'Kuba'];",
      "for (let i=0; i<kurs.length; i++) {",
      "    console.log( kurs[i] + ' jest mega hakerem' );",
      "}"
    ],
    background: "js/loop.jpg",
    layout: "photo-right"
  },
  {
    title: "Pętla na obiektach",
    subtitle:
      "Większość danych przesyłanych między backendem a frontendem używa formatu typu JSON(lub podobnych).",
    text: "JSON(JavaScript Object Notation) - działa jak najprostszy obiekt.",
    code: [
      "const kursDane = [",
      "  {name:'Kamil', age: 18, smart: true}, ",
      "  {name:'Kuba', age: 16, smart: true}",
      "  {name:'Filip', age: 18, smart: true}, ",
      "  {name:'Konrad, age: 18, smart: true}', ",
      "  {name:'Cypria, age: 16, smart: true}', ",
      "];",
      "for (let i=0; i<kurs.length; i++) {",
      "    console.log( kursDane[i].name + ' ma ' + kursDane[i].age + ' lat ' );",
      "}"
    ],
    background: "js/loop2.jpg",
    layout: "photo-right"
  },
  {
    title: "Zadanie",
    subtitle:
      "Gwiezdne wojny to nie jest jakiś rewelacyjny film do tego ćwiczenia da radę",
    text: "* - dodatkowe punkty",
    list: [
      "W folderze zadanie_sw znajdziesz pliki html i pliki postacie.js i script.jsw pliku script.js",
      "napisz pętle która przeiteruje przez wszystkie postacie.",
      "przy każdym powtórzeniu pentli dodaj do nowej zmiennej imię postaci jako tytuł, poniżej wiek i wagę jako paragrafy",
      '* jeżeli postać jest kobietą to wyświetl dodatkowy napis "niech moc będzie z tobą"',
      '* dodatkowe punkty - Jeśli to Darth Vader to wypisz "Luke I\'m your father"'
    ],
    background: "question-1.jpg",
    layout: "photo-full"
  },
  {
    title: "Funkcje",
    subtitle:
      "Pozwalają na rozbicie kodu na mniejsze kawałki spełniające określone ... funkcje.",
    text:
      "Pozwala nam na wywołanie danej funkcjonalności w dowolnym obszarze kodu.",
    commentedcode: [
      {
        comment: "Deklaracja funkcji",
        code: ["function nazwaFunkcji() {", "  ciało funkcji", "}"]
      },
      {
        comment: "Wywołanie funkcji",
        code: ["nazwaFunkcji()"]
      }
    ],
    background: "js/function.jpg",
    layout: "photo-left"
  },
  {
    title: "Przekazywanie parametrów do funkcji",
    subtitle:
      "Czasem konieczne będzie przekazanie do funkcji danych, które następnie zostaną przez nią przetworzone.",
    commentedcode: [
      {
        comment: "Deklaracja funkcji",
        code: [
          "function writeText(name) {",
          '  console.log(name + " ma kota");',
          "}"
        ]
      },
      {
        comment: "Wywołanie funkcji z parametrem",
        code: [
          'writeText("Kamil"); //Kamil ma kota',
          'writeText("Filip"); //Filip ma kota'
        ]
      }
    ],
    background: "js/function.jpg",
    layout: "photo-right"
  },
  {
    title: "Instrukcja return",
    subtitle:
      "Często funkcja ma zwrócić wynik czegoś. Wtedy używamy zwrotu return.",
    text:
      "return nie dość, że zwraca jakieś dane to również kończy wykonanie tej funkcji",
    commentedcode: [
      {
        comment: "Instrukcja return",
        code: [
          "function calculate(number1, number2) {",
          "  const result = number1 + number2;",
          "  return result;",
          "}"
        ]
      },
      {
        comment: "Wywołanie funkcji z parametrami",
        code: ["console.log( calculate(10, 4) );"]
      }
    ],
    background: "js/return.jpg",
    layout: "photo-right"
  },
  {
    title: "Funkcja strzałkowa, lambda",
    subtitle:
      "W ES6 zostały wprowadzone funkcje strzałkowe, ktróre można umieścić w jednej linii",
    code: ["(argumenty) => wartośc_zwrotna(return)"],
    commentedcode: [
      {
        comment: "Funkcja stzałkowa",
        code: ["let razyDwa = x => x*x"]
      }
    ],
    background: "js/arrow.jpg",
    layout: "photo-left"
  }
];
export default slides;
