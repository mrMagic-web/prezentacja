const slides = [{
        title: "Java Script Intro",
        subtitle: "yeah bebe",
        background: "js/code.gif",
        layout: "photo-full"
    },
    {
        icon: "winner",
        title: "Codewars? Pozio",
        subtitle: "Poziom 7? 6? 5?",
        layout: "photo-left",
        background: "question-1.jpg",
    },
    {
        title: "Rozgrzewka",
        subtitle: "Otwórz dokument HTML i podepnij do niego plik .js. Odpowiedzi powinny się pojawic na stronie HTML",
        list: [
            "Wypisz na stronie liczby pomiędzy -20 a 10",
            "Wypisz liczby parzyste pomiędzy 10 a 40",
            "Wypisz wszystkie liczby, które dzielą się przez 5 i 3 pomiędzy 0 a 50",
        ],
        background: "question-1.jpg",
        layout: "photo-full"
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
        background: "js/math.jpg",
        layout: "photo-right"
    },
    {
        title: "AJAX cd",
        text: "W zależności od tego co chcemy zrobic z danymi wysyłamy zapytanie z odpowiednim typem",
        list: [
            'GET - WEŹ. Ten typ połączenia służy do pobieranie danych. Zazwyczaj dostajemy w odpowiedzi jakiś obiekt z danymi',
            'POST	- WYŚLIJ. Pozwala na wysłanie informacji na serwer. Efektem może byc sama zwrotka ze statustem(200) lub obiekt z danymi. ',
            'PUT - UAKTUALNIJ. Zmiana czegoś w bazie danych',
            'DELETE -	USUŃ. Służy do usuwania danych na serwerze',
            'PATCH - Jak PUT ale do uaktualnienia konkretnej właściwości obiektu(wiek).'
        ],
        background: "js/math.jpg",
        layout: "photo-right"
    },
    {
        title: "Zapytanie ajax z Fetch",
        text: "Jest wiele sposobów na wysyłanie zapytań AJAX. Jedną z opcji jest fetch. ",
        code: [
            "fetch('https://example.com/profile')",
            ".then(res => res.json())",
            ".then(response => console.log('Success:', JSON.stringify(response)))",
            ".catch(error => console.error('Error:', error));",
        ]
    },
    {
        title: "Homework",
        subtitle: "Zarejestruj się na serwisie codewars.com",
        list: ["Zdobądź wystarczającą liczbę puntów żeby dojść do kolejnego poziomu(7kyu)", "Sprubuj zrobić jedno zadanie z poziomu 6kyu", "zaproś innych uczestników kursu do współzawodniczenia"],
        background: "js/codewars.png",
        layout: "photo-full"
    }
];
export default slides;