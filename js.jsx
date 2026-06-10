





const visEl = document.getElementById("vis");


const root = ReactDOM.createRoot(visEl);
function add(){
let vi = Number(localStorage.getItem("acessos")) || 40;
vi++;
localStorage.setItem("acessos", vi);

root.render(
    <h1>Teve {vi} acessos</h1>
);
}

add();
// msg de erro
const roEl = document.getElementById("ro");
const ro = ReactDOM.createRoot(roEl);
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