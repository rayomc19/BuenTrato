// CONTENIDOS COMPLETOS DE "EL BUEN TRATO"
const productos = [
  {
    nombre: "ÁMBITO FAMILIAR",
    imagen: "https://static.wixstatic.com/media/4ddc0d_ced997ec1585459eaa2d759310bf5094~mv2.jpeg/v1/fill/w_768,h_514,al_c,lg_1,q_85/4ddc0d_ced997ec1585459eaa2d759310bf5094~mv2.jpeg",
    descripcionLarga: `
      <p><strong>Descripción:</strong> El buen trato en la familia es la base emocional que permite a cada miembro crecer con seguridad y confianza. Se manifiesta a través de gestos sencillos que transforman la convivencia en bienestar común.</p>
      <p><strong>¿En qué consiste realmente?</strong> No se trata de evitar el conflicto, sino de gestionarlo con respeto, reconociendo que cada integrante tiene sentimientos y necesidades que merecen ser valorados sin juicios.</p>
      <p><strong>Los ejes del bienestar familiar:</strong>
        <ul>
          <li><strong>La Escucha Activa:</strong> Prestar atención a las palabras y emociones, estando presente de cuerpo y mente.</li>
          <li><strong>La Empatía:</strong> Comprender el mundo desde la perspectiva del otro, validando su sentir.</li>
          <li><strong>El Reconocimiento:</strong> Expresar gratitud para fortalecer la autoestima y el sentido de pertenencia.</li>
        </ul>
      </p>
      <p><strong>Un compromiso de todos:</strong> El hogar debe ser un refugio seguro donde todos puedan ser auténticos, construyendo así una sociedad más humana.</p>
    `
  },
  {
    nombre: "ÁMBITO EDUCATIVO",
    imagen: "https://www.vanguardia.com/resizer/v2/semana-del-buen-trato-la-estrategia-para-frenar-el-acoso-escolar-YOJUFLOZQ5G5JL333GTU3SYWG4.jpeg?auth=488825e2cd21eb55e9dc0c3b068dc924aa4019c5240c00a3b6a0ecde121ab61c&smart=true&width=1200&height=800&quality=70",
    descripcionLarga: `
      <p><strong>Descripción:</strong> El buen trato en la educación es un modelo de interacción que promueve el aprendizaje en un clima de respeto y protección entre estudiantes, docentes y padres.</p>
      <p><strong>¿En qué consiste realmente?</strong> Se basa en la pedagogía del afecto, donde el error se ve como oportunidad de aprendizaje y se eliminan los castigos físicos o humillantes como método de disciplina.</p>
      <p><strong>Pilares de la convivencia escolar:</strong>
        <ul>
          <li><strong>Respeto a la Diversidad:</strong> Valorar las diferencias individuales y fomentar la inclusión dentro del aula.</li>
          <li><strong>Comunicación Asertiva:</strong> Expresar ideas y normas de forma clara y firme, pero siempre con amabilidad.</li>
          <li><strong>Resolución Pacífica:</strong> Uso del diálogo y la mediación para resolver diferencias entre pares.</li>
        </ul>
      </p>
      <p><strong>Impacto:</strong> Un entorno educativo basado en el buen trato reduce el acoso escolar (bullying) y potencia el desarrollo cognitivo de los estudiantes.</p>
    `
  },
  {
    nombre: "ÁMBITO LABORAL",
    imagen: "https://www.bhbienestar.es/wp-content/uploads/pexels-kindelmedia-7688159.jpg",
    descripcionLarga: `
      <p><strong>Descripción:</strong> Es el conjunto de prácticas que aseguran un ambiente de trabajo digno, donde la salud mental y el respeto mutuo son prioridades institucionales.</p>
      <p><strong>¿En qué consiste realmente?</strong> En fomentar relaciones horizontales basadas en la confianza, donde el liderazgo es inspirador y no autoritario, y se respeta el equilibrio entre la vida laboral y personal.</p>
      <p><strong>Claves del trato profesional:</strong>
        <ul>
          <li><strong>Feedback Constructivo:</strong> Evaluar el desempeño resaltando fortalezas y sugiriendo mejoras sin descalificar a la persona.</li>
          <li><strong>Reconocimiento de Logros:</strong> Valorar el esfuerzo del equipo para mantener la motivación y el compromiso.</li>
          <li><strong>Cero Tolerancia al Acoso:</strong> Establecer protocolos claros contra el hostigamiento y la discriminación laboral.</li>
        </ul>
      </p>
      <p><strong>Resultado:</strong> Las organizaciones que practican el buen trato aumentan su productividad y retienen mejor el talento humano.</p>
    `
  },
  {
    nombre: "ÁMBITO SOCIAL",
    imagen: "https://thumbs.dreamstime.com/b/mujer-mayor-que-usa-una-calle-de-la-cruz-del-caminante-44046478.jpg",
    descripcionLarga: `
      <p><strong>Descripción:</strong> El buen trato en la vida cotidiana es el ejercicio de la ciudadanía y la cortesía en los espacios públicos, el transporte y los servicios sociales.</p>
      <p><strong>¿En qué consiste realmente?</strong> En reconocer al "otro" como un igual con derechos, practicando la amabilidad con desconocidos y cuidando el entorno compartido.</p>
      <p><strong>Prácticas cotidianas de bienestar:</strong>
        <ul>
          <li><strong>Cortesía Básica:</strong> El uso del "por favor", "gracias" y el saludo como gestos que humanizan la ciudad.</li>
          <li><strong>Solidaridad:</strong> Ceder el paso o el asiento, y ayudar a quienes tienen movilidad reducida o necesidades especiales.</li>
          <li><strong>Cuidado del Entorno:</strong> Respetar el silencio, la limpieza y los espacios comunes como forma de respeto a la comunidad.</li>
        </ul>
      </p>
      <p><strong>Visión Social:</strong> Pequeñas acciones diarias de buen trato generan una cultura de paz y disminuyen los niveles de agresividad social.</p>
    `
  }
];

const likesAcumulados = {};

function crearTarjeta(producto, index) {
  const likes = likesAcumulados[index] || 0;
  return `
    <div class="card text-center shadow-sm">
      <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
      <div class="card-body">
        <h5 class="card-title fw-bold">${producto.nombre}</h5>
        <div class="d-flex gap-3 justify-content-center align-items-center mt-3">
          <button class="btn btn-success px-4 ver-mas" data-index="${index}">Ver más</button>
          <div class="d-flex align-items-center gap-2" style="cursor: pointer;">
            <!-- Ajuste de proporciones para evitar que se estire -->
            <img src="https://img.freepik.com/vector-premium/me-gusta-icono-notificacion-corazon-red-social_399998-367.jpg" 
                 class="dar-like" 
                 data-index="${index}" 
                 style="width: 45px; height: 45px; object-fit: cover; border-radius: 50%; transition: 0.2s;">
            <span id="likes-${index}" class="fw-bold" style="color: #e4405f;">${likes}</span>
          </div>
        </div>
      </div>
    </div>`;
}
// FUNCIÓN DE RENDERIZADO (Esencial para que el buscador funcione)
function render(data) {
  const contenedor = document.getElementById("cards-container");
  if (contenedor) {
    contenedor.innerHTML = data.map((p, i) => {
      const idx = p.originalIndex !== undefined ? p.originalIndex : i;
      return crearTarjeta(p, idx);
    }).join("");
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const themeText = document.getElementById('theme-text');
  const body = document.body;
  const buscador = document.getElementById("buscador");

  // Iniciar pantalla
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.replace('light-mode', 'dark-mode');
    if(themeIcon) themeIcon.textContent = '☀️';
    if(themeText) themeText.textContent = 'Modo Claro';
  }
  render(productos);

  // Lógica de búsqueda
  if (buscador) {
    buscador.addEventListener("input", (e) => {
      const texto = e.target.value.toLowerCase();
      const filtrados = productos
        .map((p, i) => ({ ...p, originalIndex: i }))
        .filter(p => p.nombre.toLowerCase().includes(texto));
      render(filtrados);
    });
  }

  // Toggle de Tema
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      if (body.classList.contains('light-mode')) {
        body.classList.replace('light-mode', 'dark-mode');
        themeIcon.textContent = '☀️';
        themeText.textContent = 'Modo Claro';
        localStorage.setItem('theme', 'dark');
      } else {
        body.classList.replace('dark-mode', 'light-mode');
        themeIcon.textContent = '🌙';
        themeText.textContent = 'Modo Oscuro';
        localStorage.setItem('theme', 'light');
      }
    });
  }

  // Eventos de click (Likes y Ver más)
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('ver-mas')) {
      const idx = e.target.dataset.index;
      const p = productos[idx];
      document.getElementById("detalleProductoModalLabel").textContent = p.nombre;
      document.getElementById("detalle-imagen").src = p.imagen;
      document.getElementById("detalle-descripcion").innerHTML = p.descripcionLarga;
      new bootstrap.Modal(document.getElementById('detalleProductoModal')).show();
    }

    const likeImg = e.target.closest('.dar-like');
    if (likeImg) {
      const idx = likeImg.dataset.index;
      likesAcumulados[idx] = (likesAcumulados[idx] || 0) + 1;
      document.getElementById(`likes-${idx}`).textContent = likesAcumulados[idx];
      likeImg.style.transform = "scale(1.2)";
      setTimeout(() => likeImg.style.transform = "scale(1)", 200);
    }
  });
});