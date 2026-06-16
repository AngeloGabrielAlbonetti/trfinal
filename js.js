const roEl = document.getElementById("ro");
window.fordoar = function() {
    roEl.innerHTML = `
        <div id="rove">
            <div class="aviso">
                ERROR 404 <br>
                Tá fora do ar
                <br>
                <button class="ac" id="fecharAviso">
                    ok
                </button>
            </div>
        </div>
    `;
    document.getElementById("fecharAviso").addEventListener("click", () => {
        roEl.innerHTML = "";
    });
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