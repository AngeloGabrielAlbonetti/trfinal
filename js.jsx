const visEl = document.getElementById("vis");
const root = ReactDOM.createRoot(visEl);

let vi = Number(localStorage.getItem("acessos")) || 40;
vi++;
localStorage.setItem("acessos", vi);

root.render(
    <h1>Teve {vi} acessos</h1>
);


const roEl = document.getElementById("ro");
const roove = ReactDOM.createRoot(roEl);

window.fordoar = function () {
    roove.render(
        <div id="rove">
            <div className="aviso">
                ERROR 404 <br />
                Tá fora do ar
                <br />
                <button className="ac" onClick={() => roove.render(<></>)}>
                    ok
                </button>
            </div>
        </div>
    );
};


const han = document.getElementById("hamburger");
const mob = document.getElementById("mobileMenu");

if (han && mob) {

    han.addEventListener("click", () => {

        han.classList.toggle("active");
        mob.classList.toggle("active");

    });

    document.querySelectorAll("#mobileMenu a").forEach(link => {

        link.addEventListener("click", () => {

            mob.classList.remove("active");
            han.classList.remove("active"); 

        });
 
    });

}