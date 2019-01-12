const slides = [{
        title: "Java Script part 2",
        subtitle: "Komunikacja z serwerem. ",
        background: "js/code.gif",
        layout: "photo-full"
    },
    {
        icon: "winner",
        title: "Codewars?",
        subtitle: "Poziom 7? 6? 5?",
        layout: "photo-left",
        background: "question-1.jpg",
    },
    {
        title: "Rozgrzewka",
        subtitle: "Otwórz folder zadanie_roboty",
        list: [
            "w pliku roboty.js znajdziesz listę 100 najbardziej groźnych robotów świata",
            "przeanalizuj plik plik roboty.js i zobacz jakie informacje możesz wyświetlic na stronie o każdym z nich",
            "wyświetl każdego robota kolejno, zdjęcie po lewej, obok kolejno nazwa, model, i producenta ",
            "posortuj wszystkie roboty(male) na niebieskim polu a wszystkie robotki(female) na różowym",
        ],
        background: "question-1.jpg",
        layout: "photo-right"
    },

    {
        title: "RESTful API",
        subtitle: "Umiemy już wyświetlić dane na stronie. Czas na współpracę z serwerem",
        text: "Strona internetowa może korzysta z zapytań do serwera aby otrzymac, dodac, zmienic i usunąc informacje na serwerze. API (Application Programming Interface), czyli interfejs programistyczny aplikacji, który umożliwia komunikacje między serwerem a przeglądarką.",
        link: {
            text: "REST",
            url: "http://lmgtfy.com/?q=REST"
        },
        background: "js/math.jpg",
        layout: "photo-left"
    },
    {
        title: "AJAX",
        subtitle: "Ajax czyli Asynchronous JavaScript and XML to technologia, która umożliwia nam ściąganie i wysyłanie części danych bez porzeby przeładowania całej strony.",
        text: "Przeglądarka wysyła zapytanie zawierające odpowiednie typy zapytań (GET, POST, PUT, DELETE). Serwer odbiera zapytanie, przetwarza i wysyła odpowiedź. Serwer odpowiada statusem",
        list: [
            '200	Wszystko ok, połączenie zakończyło się sukcesem',
            '300	Strona przekierowana na inny adres',
            '404	Nie ma takiej strony',
            '500	Błąd serwera',
        ],
        background: "js/404.jpg",
        layout: "photo-right"
    },
    {
        title: "AJAX cd",
        text: "W zależności od tego co chcemy zrobic z danymi wysyłamy zapytanie z odpowiednim typem",
        list: [
            'GET - POBIERZ. Ten typ połączenia służy do pobieranie danych. Zazwyczaj dostajemy w odpowiedzi jakiś obiekt z danymi',
            'POST	- WYŚLIJ. Pozwala na wysłanie informacji na serwer. Efektem może byc sama zwrotka ze statustem(200) lub obiekt z danymi. ',
            'PUT - UAKTUALNIJ. Zmiana czegoś w bazie danych',
            'PATCH - Jak PUT ale do uaktualnienia konkretnej właściwości obiektu(wiek).',
            'DELETE -	USUŃ. Służy do usuwania danych na serwerze',
        ],
        background: "js/post.jpg",
        layout: "photo-right"
    },
    {
        title: "Postman",
        subtitle: "Pozwala na testowanie zapytań do API ",
        link: {
            text: "getpostman.com",
            url: "https://www.getpostman.com/"
        },

        background: "js/postman.jpg",
        layout: "photo-left"
    },
    {
        title: "Zapytanie ajax z Fetch",
        subtitle: "Jest wiele sposobów na wysyłanie zapytań AJAX. Jedną z opcji jest fetch. ",
        text: '',
        code: [
            "fetch('https://example.com/profile')",
            ".then(res => res.json())",
            ".then(response => console.log('Success:', JSON.stringify(response)))",
            ".catch(error => console.error('Error:', error));",
        ],
        background: "js/fetch.jpg",
        layout: "photo-right"
    },
    {
        title: "Konsola - Network",
        subtitle: "Możemy sprawdzić wszystkie zapytania z danej strony w zakładce Network w Konsoli. F12",
        background: "js/network.jpg",
        layout: "photo-left"
    },
    {
        title: "Zadanie",
        subtitle: "Wejdź na stronę swapi.co. I ściągnij dane na wszystkich bohaterow Gwiedznych Wojen",
        list: [
            "wyświetl wszystkie resultaty na stronie w dowolnej formie",
            "wyświetl tylko postacie o wzroście powyżej 170cm"
        ],
        background: "question-1.jpg",
        layout: "photo-right"
    },
    {
        title: "Funkcje wyżeszego rzędu - map",
        subtitle: "Pozwala na przeiterowanie wszystkich elementow tablicy i wyswietlenie danych. Podobnie jak for() tylko mniej pracy.",
        commentedcode: [{
                comment: "Tablica",
                code: [
                    "const imiona = ['Maciek', 'Kamil', 'Filip', 'Konrad', 'Kuba']",
                ]
            },
            {
                comment: "użycie map na tablicy",
                code: [
                    'const text = imiona.map(imie => {"<p>" + imie+ " jest cool</p>"})'
                ]
            }
        ],
        background: "js/map.jpg",
        layout: "photo-left"
    },
    {
        title: "Funkcje wyżeszego rzędu - filter",
        subtitle: "Tworzy nową tablicę z elementów odpowiadających warunkowi",
        commentedcode: [{
                comment: "Tablica",
                code: [
                    "const imiona = ['Maciek', 'Kamil', 'Filip', 'Konrad', 'Kuba']",
                ]
            },
            {
                comment: "filtrujemy wszystkie imiona zaczynające się na K",
                code: [
                    'const names = imiona.filter(imie => imie[0] === "K")'
                ]
            },
            {
                comment: "Chaining - łaczenie kilku funkcji wyższego rzędu w ciąg funkcji",
                code: [
                    'const namesDisplay = imiona.filter(imie => imie[0] !== "K")',
                    '.map(i => "<p>"+i+"</p>")'
                ]
            }
        ],
        background: "js/filter.jpg",
        layout: "photo-right"
    },
    {
        title: "Zadanie",
        subtitle: "Przerób kod z poprzedniego zadania aby używały map i filter",

        background: "question-1.jpg",
        layout: "photo-left"
    },
    {
        title: "Zadanie",
        subtitle: "Dodaj do swojej strony formę pozwalającą wyszukać bohatera",
        list: [
            "gdy użytkownik wpisze numer nasza strona wyświetli odpowiedniego bohatera z tym numerem",
            "dodaj pole tekstowe gdzie użytkownik może szukać bohatera po imieniu, po wciśnięciu przycisku szukaj wyświetl rezultat",
        ],
        background: "question-1.jpg",
        layout: "photo-right"
    },
    {
        title: "Zadanie wspólne",
        subtitle: "Zakodujemy aplikacje pogodową",
        list: ["Aplikacja powinna zawierać wyszukiwarkę miasta", "W ciekawy sposob wyświetlić dane temperatury i inne przydatne informacje", "gdy użytkownik wyszuka nowego miasta, aplikacja bez przeładowania pokaże nowe dane"],
        layout: "photo-full"
    }, {
        title: "Homework",
        subtitle: "Zbuduj stronę, ktróa pokaże dowolnego Api",
        list: ["Aplikacja powinna zawierać wyszukiwarkę", "W ciekawy sposob wyświetlić wyszukne dane", "Aplikacja powinna wyglądać ładnie dla oka"],
        link: {
            text: "API Lista ",
            url: "https://medium.com/@vicbergquist/18-fun-apis-for-your-next-project-8008841c7be9"
        },
        layout: "photo-full"
    }
];
export default slides;