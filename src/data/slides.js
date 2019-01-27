const slides = [{
        title: "React.js",
        background: "react/reactjs.png",
        layout: "photo-full"
    },
    {
        icon: "winner",
        title: "Homework",
        subtitle: "Zadania z API",
        layout: "photo-left",
        background: "question-1.jpg",
    },
    {
        title: "Czym jest React",
        subtitle: "Jest to biblioteka JavaScriptoą stworzoną przez Facebooka. Pomagająca w budowie interfejsów. React ma dwa główne założenia:",
        list: [
            'jednokierunkowy przepływ danych',
            'aplikacja budowana w oparciu na komponenty',
        ],
        background: "react/reactjs.png",
        layout: "photo-left"
    },
    {
        title: "Dlaczego używamy React",
        list: [
            "Deklaratywny kod. - Piszemy komponenty, ktróre możemy używać wielokrotnie w naszej aplikacji nadawając im różne wartości.",
            "Virtual DOM. - Deklaratywny kod jest szybki, ponieważ aktualizacje drzewa DOM wspomaga Virtual DOM.",
            "Pooularny I ma dużo gotowych paczek – bardzo łatwo możemy zaimportować dodatkową gotową funkcjonalność. Jeśli chcemy dodać karuzele ze zdjęciami lub wizualizować dane, zawsze bez problemu znajdziemy odpowiednie paczki do nich.",
            'Bezpieczny – React implementuje wiele zabezpieczeń pozwalających na pisanie bezpieczniejszego kodu. '
        ],
        background: "react/reactjs.png",
        layout: "photo-right"
    },
    {
        title: "Instalujemy reacta z create-react-app",
        list: [
            'npm install -g create-react-app',
            'create-react-app nazwa-aplikacji',
            'cd nazwa-aplikacji',
            'npm start / yarn start',
        ],
        link: {
            text: "create-react-app",
            url: "https://github.com/facebook/create-react-app"
        },
        background: "react/create-react-app.svg",
        layout: "photo-left"
    },
    {
        title: "React jak i inne frameworki ma swój zalecany układ plików. ",
        list: [
            'Do tej pory działaliśmy w plikach w HTML: index.html',
            'Tam łączyliśmy nasz html, który zawierał treść naszej strony z CSS-em: style.css',
            'Również w naszym pliku HTML robiliśmy link do naszych skryptów JavaScriptowych: script.js',
        ],
        background: "react/file-structure.png",
        layout: "photo-right"
    },
    {
        title: "Zadanie",
        subtitle: "Wgraj i odpal aplikację react przy użyciu create-react-app",
        list: ["Jeśli masz już wgrane to usuń i wgraj od nowa :p"],
        background: "question-1.jpg",
        layout: "photo-left"
    },
    {
        title: "Komponenty w React.js",
        'subtitle': "Komponenty to pewnego rodzaju klocki, które pozwalają na rozbicie aplikacji na mniejsze elementy. Tworzenie aplikacji w React.js polega tak naprawdę na budowaniu i komponowaniu kolejnych komponentów. ",
        text: 'Zaletay użycia komponentów:',
        list: [
            'łatwiej budować z małych kawałków',
            'łatwiej testować',
            'możemu wielokrotnie używać komonentów podając im różne dane',
        ],
        background: "react/kf-weather-layout.png",
        layout: "photo-right"
    },
    {
        title: "JSX – taki niby HTML I JS w jednym",
        'text': "JSX składnią przy której pomocy piszemy w React. Podobny do html, ale nadal mamy do czynienia z JS. Wszystko dzięki odpowiednio skonfigurowanemu transpilatorowi Babel, który tłumaczy naszego JSXa na coś co react rozumie lepiej. Różni się to od Vue i Angulara, nie umieszczamy JS w HTML, na odwrót – HTML w JS.",
        code: [
            'const user = "Maciek";',
            '',
            'const element = (',
            '  <div>',
            '    <h1>Hello {user} !</h1>',
            '    <h2 className=”hello”>Good to see you here.</h2>',
            '  </div>',
            ');',
        ],
        background: "react/kf-weather-layout.png",
        layout: "photo-left"
    },
    {
        title: "Jak stworzyć komponent?",
        'text': "Zazwyczaj musimy pamiętać o 3 podstawowych elementach w komponencie.",
        list: [
            'import potrzebnych wtyczek (prawie zawsze importujemy React)',
            'właściwa treśc komponentu JSX',
            'export komponentu',
        ],
        commentedcode: [{
                comment: "import wtyczek",
                code: ['import React from "react"; ']
            },
            {
                comment: "jsx",
                code: ['Welcome(props) => <h1>Hello, {props.name}</h1>;']
            },
            {
                comment: "export",
                code: ['export default Welcome;']
            },
        ],
        background: "react/reactjs.png",
        layout: "photo-right"
    },
    {
        title: "Użycie komponentu",
        text: "Aby użyć komponentu wystarczy zaimportować go do pluku w którym będzie użyty. Następnie umieszczamy go w dokumencie pomiędzy nawiasami strzałkowymi <>. Jeśli ma jakieś wartości(propsy) wypisujemy je po nazwie.",
        code: [
            'import React from "react"; ',
            'import Welcome from "./Welcome";',
            'class App extends React.Component {',
            '    render(){',
            '        return (',
            '            <div>',
            '            <Welcome name=”Maciek” />',
            '            <Welcome name=”Filip” />',
            '        </div>',
            '    )',
            '}}',
        ],
        layout: "photo-full"
    },
    {
        title: "Zadanie",
        subtitle: "Stwórz nowy komponent Footer I inny FooterLink. Umieść Footer komponent w app.js. W komponencie Footer a każdy przycisk powinien być komponentem(FooterLink) z wartością(props) nazwy linkuów inną wartością icon.",
        background: "question-1.jpg",
        layout: "photo-left"
    },
    {
        title: "Akcje",
        subtitle: "Użytkownik komunikuje się z aplikacją w przeglądarce przy użyciu zdarzeń. Pozwalają one wywołać odpowiednie JS-owe funkcje. W czystym JS-ie zdarzenia bardzo podobnie jak w JSX. ",
        commentedcode: [{
                comment: "// JavaScript",
                code: ['<button onclick={onClickHandler()}>Kliknij!</button>']
            },
            {
                comment: "jsx",
                code: ['<button onClick={onClickHandler}>Kliknij!</button>']
            },
        ],
        background: "react/call-to-action.jpg",
        layout: "photo-right"
    },
    {
        title: "Akcje cd",
        subtitle: "Akcją wywołujemy najzwyklejszą JS-ową funkcję. ",
        code: [
            "function onClickHandler() {",
            "    alert('Kliknięto!');",
            "}",
        ],
        background: "react/call-to-action.jpg",
        layout: "photo-left"
    },
    {
        title: "Zadanie",
        subtitle: "Dodaj do swojej aplikacji akcje onClick na przyciskach FooterLinks. Akcja przy kliknięciu niech wypisze alert() z nazwą przkazaną do przycisku.",
        layout: "photo-left",
        background: "question-1.jpg",
    },
    {
        title: "Komponenty funkcyjne",
        subtitle: "SFC, albo Stateless Functional Component  - Komponenty bezstanowe. ",
        code: [
            "function Welcome(name) {",
            "    return <h1>Hello, {name}</h1>;",
            "}",
        ],
        background: "react/reactjs.png",
        layout: "photo-left"
    },
    {
        title: "Komponenty klasowe",
        subtitle: "Korzystamy z klas znanych z ES2015. Klasa ta koniecznie musi dziedziczyć po React.Component I mieć metodę render() {} ",
        code: [
            'class Welcome extends React.Component {',
            '    render () {',
            '        return <h1>Hello, {this.props.name}</h1>;',
            '    }',
            '}',
        ],
        background: "react/reactjs.png",
        layout: "photo-left"
    },
    {
        title: "Po co nam komponenty klasowe?",
        subtitle: "Głównym powodem do użycia komponentów klasowych jest stan.Często też usłyszymy nazwy Stateful(klasowe) Components i Stateless Components(funkcyjne) ",
        list: [
            'możliwość definiowania stanu komponentu (state), więcej o stanie później',
            'dostęp do metod cyklu życia komponentu (lifecycle methods), dzięki którym będziemy mogli reagować na różne wydarzenia',
            'możliwość definiowania fragmentów komponentów (każda funkcja może zwracać JSX!) jako metod w klasie — poprawa czytelności kodu',
            'możliwość tworzenia metod pomocniczych, z których można korzystać wewnątrz funkcji render. Na przykład do walidacji danych (przykład poniżej)',
        ],
        background: "react/reactjs.png",
        layout: "photo-left"
    },
    {
        title: "Zadanie",
        subtitle: "Przepisz wszystkie swoje komponenty na klasowe.",
        layout: "photo-left",
        background: "question-1.jpg",
    },
    {
        title: "Stan",
        subtitle: "Stan jest obiektem, który trzyma jakieś dane w komponencie. Gdu zmienimy stan to wtedy komponent się odświerza(mount). Stan możemy ustalić tylko w komponentach klasowych. ",
        code: [
            'class Welcome extends React.Component {',
            '    state = {',
            '        name: “Maciek”,',
            '        age: “24”',
            '    }',
            '    render () {',
            '        return (',
            '            <div>',
            '            <h1>Hello, {this.state.name}</h1>;',
            '            <p>Udajesz, że masz {this.state.age} lata a tak na prawdę masz więcej</p>',
            '            </div>	 ',
            '        )',
            '    }',
            '}',
        ],
        background: "react/reactjs.png",
        layout: "photo-right"
    },
    {
        title: "Zmiana stanu",
        subtitle: "Stanu nie możemy bezpośrednio nadpisać jak normalnych obiektów w JS this.state.age = 32. Używamy do tego metody setState.",
        code: [
            'starzejeSie = () => {',
            '    this.setState({ age: 32 })',
            '} ',
        ],
        background: "react/reactjs.png",
        layout: "photo-left"
    },
    {
        title: "Cylk życia komponentu (lifecycle)",
        text: "Każdy komponent ma pewien określony cykl życia. Na odpowiednich etapach wywoływane są też jego metody cyklu życia. Pozwala nam to na sprecyzowanie kiedy odpali jakaś konkretna metoda. Dzielą się one na 4 grupy:",
        list: [
            'Montowanie(mount) – Komponent jest tworzony I dodawany do drzewa DOM.constructor(props), componentWillMount(), componentDidMount, render()',
            'Aktualizacja(update) – Update może zostać wywołany gdy zmieniają się props lub state. componentWillReceiveProps(nextProps), shouldComponentUpdate(nextProps, nextState), componentDidUpdate(prevProps, prevState)',
            'Odmontowanie - Wywoływane gdy komponent jest usuwany z DOM - componentWillUnmount() ',
            'Łapanie błędów - componentDidCatch(error, info)',
        ],
        background: "react/cycle.png",
        layout: "photo-left"
    },
    {
        title: "Zadanie",
        subtitle: "Użyj listy robotów I robotek z zadania z poprzednich zajęć. Posortuj w React.js roboty na lewą część strony a robotki na prawą. Stwórz komponent który będzie wyświetlał zdjęcie robota/robotki po lewej stronie a obok niego nazwe i model. Komponent będzie przyjmował propsy (photo, name, model, sex). W zależności od tego czy sex jest male lub female zmień kolor tła komponentu.",
        layout: "photo-left",

        background: "question-1.jpg",
    },
    {
        title: "Komunikacja z API",
        subtitle: "W react.js najeczęściej używamy jednej z 2 metod do komunikacji z zewnętrznym api. Możemy użyć znanego nam już fetch-a lub skorzystać z dodatku takiego jak axios. Jeśli chcemy żeby dane zostały ściągnęte w momencie ładowania komponentu możemy użyć metody componentDidMount(). ",
        code: [
            'componentDidMount() {',
            '    fetch("https://randomuser.me/api/?format=json&results=10")',
            '      .then(res => res.json())',
            '      .then(json => this.setState({ contacts: json.results }));',
            '}',
        ],
        background: "react/reactjs.png",
        layout: "photo-left"
    },
    {
        title: "Zadanie",
        subtitle: "Do końca dzisiejszego spotkania i w domu w React.js aplikację pogodową. Użyj https://openweathermap.org/api jako api, z którego dostaniesz informacje o pogodzie.  Dowiedz się jak działa biblioteka CSS Modules lub React Styled Components i przystyluj swoją aplikację zgodnie z designem.",
        layout: "photo-left",
        background: "react/kf-weather-layout.png",
    },

];
export default slides;