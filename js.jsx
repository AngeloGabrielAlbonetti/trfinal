const root = ReactDOM.createRoot(
    document.getElementById("vis")
);

let vi = Number(localStorage.getItem("acessos")) || 40;
vi++;
localStorage.setItem("acessos", vi);
root.render(
    <h1>Teve {vi} acessos</h1>
);




// msg de erro
const ro = ReactDOM.createRoot(
    document.getElementById("ro")
);
window.fordoar = function () {
    ro.render(
        <div id="rove">
        <div className="aviso">
            Tá fora do ar
            <br />
            <button className="ac" onClick={() => ro.render(<></>)}>
                ok 
            </button>
            
        </div>
        </div>
    );
};








function App() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    // navbar scroll
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 70);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    function handleScrollTo(e) {
        e.preventDefault();

        const href = e.currentTarget.getAttribute("href");

        if (href?.startsWith("#")) {
            const target = document.querySelector(href);

            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        }

        setMenuOpen(false);
    }

    return (
        <div>

            {/* NAVBAR */}
            <nav className={scrolled ? "scrolled" : ""}>
                <div className="logo">Meu Projeto</div>

                <button onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </button>

                <div className={menuOpen ? "open" : ""}>
                    <a href="#home" onClick={handleScrollTo}>Home</a>
                    <a href="#sobre" onClick={handleScrollTo}>Sobre</a>
                    <a href="#contato" onClick={handleScrollTo}>Contato</a>
                </div>
            </nav>

            {/* SEÇÕES */}
            <section id="home">
                Home
            </section>

            <section id="sobre">
                Sobre
            </section>

            <section id="contato">
                Contato
            </section>

        </div>
    );
}


const appRoot = ReactDOM.createRoot(
    document.getElementById("root")
);

appRoot.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);