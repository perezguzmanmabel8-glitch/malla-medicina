let aprobadas = JSON.parse(localStorage.getItem("aprobadas")) || [];

const contenedor = document.getElementById("malla");
const buscador = document.getElementById("buscador");
const barra = document.getElementById("barra");
const progresoTexto = document.getElementById("progreso");

function cumplePrereq(materia) {
  if (!materia.prereq) return true;
  return materia.prereq.every(p => aprobadas.includes(p));
}

function actualizarBarra() {
  const total = document.querySelectorAll(".materia").length;
  const aprob = aprobadas.length;
  const porcentaje = (aprob / total) * 100;

  barra.style.width = porcentaje + "%";
  progresoTexto.textContent = `${aprob} / ${total} materias`;
}

function render() {
  contenedor.innerHTML = "";

  for (let semestre in pensum) {
    const divSem = document.createElement("div");
    divSem.className = "semestre";

    const titulo = document.createElement("h3");
    titulo.textContent = semestre;
    divSem.appendChild(titulo);

    pensum[semestre].forEach(m => {

      const div = document.createElement("div");
      div.className = "materia";
      div.textContent = m.nombre;

      if (!cumplePrereq(m)) {
        div.classList.add("bloqueada");
      }

      if (aprobadas.includes(m.codigo)) {
        div.classList.add("aprobada");
      }

      div.onclick = () => {
        if (!cumplePrereq(m)) return;

        if (aprobadas.includes(m.codigo)) {
          aprobadas = aprobadas.filter(c => c !== m.codigo);
        } else {
          aprobadas.push(m.codigo);
        }

        localStorage.setItem("aprobadas", JSON.stringify(aprobadas));
        render();
      };

      // Electivas
      if (m.opciones) {
        const select = document.createElement("select");

        m.opciones.forEach(op => {
          const option = document.createElement("option");
          option.textContent = op;
          select.appendChild(option);
        });

        div.appendChild(select);
      }

      divSem.appendChild(div);
    });

    contenedor.appendChild(divSem);
  }

  actualizarBarra();
}

buscador.addEventListener("input", () => {
  const texto = buscador.value.toLowerCase();
  document.querySelectorAll(".materia").forEach(m => {
    m.style.display = m.textContent.toLowerCase().includes(texto)
      ? "block"
      : "none";
  });
});

render();
