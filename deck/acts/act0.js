// Act 0 · Apertura: title, who, Carver callback, map. See datapub deck/CONTRACT.md for the slide API.
(() => {
  Deck.css(`
    #s-title .a0-ep { margin-bottom: 40px; color: var(--accent); font-size: 26px; }
    #s-title .a0-name { font-size: 132px; font-weight: 500; line-height: 1.0; letter-spacing: -0.035em; margin: 0 0 56px; max-width: 1650px; }
    #s-title .a0-name .strike { position: relative; color: var(--faint); }
    #s-title .a0-name .strike::after { content: ""; position: absolute; left: -4px; right: -4px; top: 54%; height: 8px; background: var(--fg);
      transform: scaleX(0); transform-origin: left; transition: transform 0.7s var(--ease); }
    #s-title:not([data-at="0"]) .a0-name .strike::after { transform: scaleX(1); }
    #s-title .a0-name .new { color: var(--accent); }
    #s-title .a0-name .swap { display: inline-grid; }
    #s-title .a0-name .swap > * { grid-area: 1 / 1; justify-self: start; }
    #s-title .a0-by { display: flex; gap: 28px; align-items: center; flex-wrap: wrap; }
    #s-title .a0-by .bar { width: 64px; height: 2px; background: var(--faint); }

    #s-quien .a0-who-l { position: absolute; left: var(--pad-x); top: var(--pad-y); width: 860px; }
    #s-quien .a0-title { font-family: var(--mono); font-size: 72px; font-weight: 500; letter-spacing: -0.02em; margin: 0; }
    #s-quien .a0-id { display: flex; align-items: center; gap: 40px; margin-top: 56px; }
    #s-quien .a0-portrait { flex: none; width: 260px; height: 260px; border-radius: 50%; overflow: hidden;
      border: var(--stroke) solid var(--faint); box-shadow: 0 0 0 10px #000, 0 0 0 12px var(--hair); }
    #s-quien .a0-portrait img { width: 100%; height: 100%; object-fit: cover; display: block; filter: grayscale(1); }
    #s-quien .a0-nm { font-size: 68px; font-weight: 500; letter-spacing: -0.02em; line-height: 1.05; }
    #s-quien .a0-role { font-size: 34px; line-height: 1.3; margin-top: 14px; }
    #s-quien .a0-stats { display: flex; gap: 80px; margin-top: 64px; }
    #s-quien .a0-stats .big { font-size: 120px; font-weight: 500; letter-spacing: -0.03em; line-height: 1; }
    #s-quien .a0-stats .cap { font-size: 32px; color: var(--dim); margin-top: 12px; }
    #s-quien .a0-take { margin-top: 56px; }
    #s-quien .a0-take .txt { font-size: 38px; line-height: 1.25; margin-top: 10px; }
    #s-quien .a0-qrs { position: absolute; right: var(--pad-x); top: var(--pad-y);
      display: grid; grid-template-columns: repeat(2, 360px); gap: 24px 40px; }
    #s-quien .a0-qr { text-align: center; }
    #s-quien .a0-qr .tile { width: 360px; height: 360px; padding: 22px; border-radius: 20px; background: #fff; }
    #s-quien .a0-qr img { width: 100%; height: 100%; display: block; image-rendering: pixelated; }
    #s-quien .a0-qr .url { margin-top: 12px; font-family: var(--mono); font-size: 26px; color: var(--fg); }

    #s-carver .scene + .scene { margin-top: 24px; }
    #s-carver .scene { font-size: 60px; line-height: 1.2; letter-spacing: -0.015em; max-width: 1500px; margin: 0; font-weight: 400; transition: opacity .5s var(--ease); }
    #s-carver[data-at="2"] .scene, #s-carver[data-at="3"] .scene { opacity: 0.45; }
    #s-carver .word { font-size: 200px; font-weight: 500; letter-spacing: -0.045em; line-height: 1; margin: 56px 0 0; }
    #s-carver .uses { display: flex; gap: 20px; flex-wrap: wrap; margin-top: 40px; }
    #s-carver .uses .chip { font-size: 24px; }

    #s-caso { padding-top: 110px; }
    #s-caso .k-amt { font-size: 190px; font-weight: 500; letter-spacing: -0.045em; line-height: 1; margin-top: 18px; }
    #s-caso .k-amt small { display: block; font-size: 38px; color: var(--dim); letter-spacing: 0; margin-top: 16px; font-weight: 400; }
    #s-caso .k-sig { list-style: none; padding: 0; margin: 44px 0 0; width: 860px; }
    #s-caso .k-sig li { font-size: 38px; padding: 12px 0; border-top: 2px solid var(--hair); display: flex; justify-content: space-between; }
    #s-caso .k-sig li:last-child { border-bottom: 2px solid var(--hair); }
    #s-caso .k-sig .v { font-family: var(--mono); font-size: 26px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--bad); align-self: center; }
    #s-caso .k-sig .v.ok { color: var(--good); }
    #s-caso .k-vote { position: absolute; left: 1100px; right: var(--pad-x); top: 470px; font-size: 80px; line-height: 1.08; letter-spacing: -0.025em; font-weight: 500; }
    #s-caso .k-vote .t-label { display: block; margin-bottom: 20px; color: var(--accent); font-weight: 400; }
    #s-mapa .steps { display: grid; grid-template-columns: 1.25fr 1fr 1fr; gap: 40px; margin-top: 8px; }
    #s-mapa .st { border-top: 3px solid var(--faint); padding-top: 28px; }
    #s-mapa .st.on { border-top-color: var(--accent); }
    #s-mapa .st .n { font-family: var(--mono); font-size: 24px; letter-spacing: 0.24em; color: var(--accent); }
    #s-mapa .st h3 { font-size: 56px; font-weight: 500; letter-spacing: -0.02em; margin: 14px 0 12px; }
    #s-mapa .st p { font-size: 32px; color: var(--dim); margin: 0; line-height: 1.3; }
    #s-mapa .tmpl { margin-top: 72px; display: flex; gap: 0; align-items: stretch; }
    #s-mapa .tmpl .cell { flex: 1; border: var(--stroke) solid var(--faint); padding: 26px 32px; }
    #s-mapa .tmpl .cell + .cell { border-left: 0; }
    #s-mapa .tmpl .cell.acc { border-color: var(--accent); border-left: var(--stroke) solid var(--accent); }
    #s-mapa .tmpl .cell .t-label { font-size: 20px; }
    #s-mapa .tmpl .cell div:last-child { font-size: 36px; margin-top: 10px; }
  `);

  Deck.act(0, 'Apertura', [
    {
      id: 'title',
      title: 'What We Talk About When We Talk About Agentic Banking',
      time: 30,
      class: 'middle',
      particles: { shape: 'scatter', opacity: 0.3 },
      label: '',
      html: `
        <div class="t-label a0-ep">Taller · IA y Fintech en acción</div>
        <h1 class="a0-name">What We Talk About When We Talk About
          <span class="swap"><span class="strike" data-step-hide="2">Love</span><span class="new" data-step="2">Agentic Banking</span></span></h1>
        <div class="a0-by t-label"><span>Carlos Haro</span><span class="bar"></span><span>Facilita Christian García</span><span class="bar"></span><span>CIDE · 11 nov 2026</span></div>`,
      notes: `
        <p class="dir">[Arranca con "Love". Clic 1: se tacha. Clic 2: aparece "Agentic Banking".]</p>
        <p>Buenas tardes. Gracias al CIDE, a Jorge Luis y a Andrés por la invitación, y a Christian, que me va a ayudar a que esto no sea un monólogo.</p>
        <p>El título es un robo descarado. Hay un cuento de Raymond Carver que se llama "What We Talk About When We Talk About Love", "De qué hablamos cuando hablamos de amor". Yo nomás le cambié una palabra. Lo dejé en inglés por respeto a Carver.</p>
        <p class="dir">[Clic, clic.]</p>
        <p>Y créanme que la palabra que puse es igual de difícil de definir. Pero antes, déjenme decirles quién soy, para que sepan desde dónde les hablo.</p>`,
    },
    {
      id: 'quien',
      title: 'who_is_this_dude?',
      time: 60,
      class: 'middle',
      particles: { shape: 'scatter', opacity: 0.2 },
      html: `
        <div class="a0-who-l">
          <h1 class="a0-title">who_is_this_dude?</h1>
          <div class="a0-id">
            <div class="a0-portrait"><img src="../assets/carlos-portrait.jpg" alt="Carlos Haro"></div>
            <div>
              <div class="a0-nm">Carlos Haro</div>
              <div class="a0-role">AI Engineer<br>Santander México <span class="dim">· Data &amp; AI</span></div>
            </div>
          </div>
          <div class="a0-stats">
            <div><div class="big">~10</div><div class="cap">años lidiando con datos</div></div>
            <div><div class="big">@h1sort</div><div class="cap">en todos lados</div></div>
          </div>
          <div class="a0-take"><div class="t-label">Mi take</div>
            <div class="txt">La educación es el 2do mejor motor de cambio de una sociedad.</div></div>
        </div>
        <div class="a0-qrs">
          <div class="a0-qr"><div class="tile"><img src="../assets/qr-linkedin.svg" alt="QR LinkedIn"></div><div class="url">linkedin.com/in/h1sort</div></div>
          <div class="a0-qr"><div class="tile"><img src="../assets/qr-x.svg" alt="QR X"></div><div class="url">x.com/h1sort</div></div>
          <div class="a0-qr"><div class="tile"><img src="../assets/qr-github.svg" alt="QR GitHub"></div><div class="url">github.com/h1sort</div></div>
          <div class="a0-qr"><div class="tile"><img src="../assets/qr-slides.svg" alt="QR diapositivas"></div><div class="url">h1sort.com/cide</div></div>
        </div>`,
      notes: `
        <p>Soy Carlos Haro, AI Engineer en Santander México, en el equipo de Data &amp; AI. Llevo unos diez años lidiando con datos: empecé en el SAT, pasé por Bancomext y por una consultora, y hoy me toca poner agentes en producción dentro de un banco.</p>
        <p>O sea: he visto los datos desde el lado del regulador, de la banca de desarrollo y de la banca comercial. Eso va a importar hoy, porque la mitad de la conversación no es de tecnología, es de quién tiene los datos.</p>
        <p class="dir">[Dejar unos segundos para escanear. El último QR lleva a las diapositivas.]</p>
        <p>Las diapositivas quedan en h1sort.com/cide. Ahora sí, el cuento.</p>`,
    },
    {
      id: 'carver',
      title: 'Carver → agéntico',
      time: 90,
      class: 'middle',
      particles: [{ shape: 'scatter', opacity: 0.25 }, { shape: 'scatter', opacity: 0.25 }, { shape: 'swarm', opacity: 0.4 }, { shape: 'swarm', opacity: 0.4 }],
      html: `
        <p class="scene">Cuatro personas, una mesa de cocina, una botella de ginebra.</p>
        <p class="scene" data-step="1">Toda la noche hablando de amor, y <em>nadie</em> se pone de acuerdo en qué es.</p>
        <div class="word" data-step="2">Agéntico.</div>
        <div class="uses" data-step="3">
          <span class="chip">chatbot con otro nombre</span>
          <span class="chip">automatización con IA</span>
          <span class="chip">el banco que decide solo</span>
          <span class="chip">lo que diga el proveedor</span>
        </div>`,
      notes: `
        <p>En el cuento de Carver hay dos parejas en una cocina, con una botella de ginebra, y se pasan la tarde discutiendo qué es el amor. Uno dice que es una cosa, otra dice que es otra, y al final nadie se pone de acuerdo. Ni siquiera saben si están hablando de lo mismo.</p>
        <p class="dir">[Clic: "Agéntico".]</p>
        <p>Pues hoy la palabra de la cocina es "agéntico". La escuchan en todos los foros, en todas las presentaciones de proveedores, y les apuesto a que en esta sala hay cinco definiciones distintas.</p>
        <p class="dir">[Clic: los chips.]</p>
        <p>Para unos es un chatbot con otro nombre. Para otros es el banco decidiendo solo. Y para el proveedor es lo que sea que venda este trimestre. Así no se puede regular nada. Entonces, antes de pelearnos, pongámonos de acuerdo en las palabras.</p>`,
    },
    {
      id: 'mapa',
      title: 'Cómo va a funcionar',
      time: 60,
      class: 'middle',
      particles: { shape: 'grid', opacity: 0.16 },
      html: `
        <div class="t-label" style="margin-bottom:40px">Cómo va a funcionar</div>
        <div class="steps">
          <div class="st on"><div class="n">01</div><h3>1 caso, 6 conceptos</h3><p>La misma transferencia, vista seis veces</p></div>
          <div class="st" data-step="1"><div class="n">02</div><h3>Laboratorio</h3><p>Ustedes deciden quién aprueba</p></div>
          <div class="st" data-step="1"><div class="n">03</div><h3>Debate</h3><p>Con Christian, sin piedad</p></div>
        </div>
        <div class="tmpl" data-step="2">
          <div class="cell"><div class="t-label">Definición</div><div>Formal, sin adornos</div></div>
          <div class="cell"><div class="t-label">En el caso</div><div>Qué cambia en la transferencia</div></div>
          <div class="cell acc"><div class="t-label accent">Para debatir</div><div>Una pregunta abierta</div></div>
        </div>`,
      notes: `
        <p>Esto es un taller, no una conferencia, así que va así. Primero, un solo caso y seis conceptos. Voy a usar la misma transferencia bancaria todo el tiempo, y cada concepto le agrega una capa.</p>
        <p class="dir">[Clic.]</p>
        <p>Luego un laboratorio, donde ustedes deciden quién aprueba qué. Y al final, debate con Christian, que ha estado del lado del banco en open banking y onboarding digital, así que tiene opiniones.</p>
        <p class="dir">[Clic.]</p>
        <p>Cada concepto trae una definición formal. No les voy a simplificar de más: ustedes leen leyes, pueden con una definición. Luego qué cambia en el caso, y una pregunta que no tengo resuelta. Empecemos por el caso.</p>`,
    },
    {
      id: 'caso',
      title: 'El caso · primera votación',
      time: 150,
      particles: [{ shape: 'scatter', opacity: 0.2 }, { shape: 'split', opacity: 0.3 }],
      label: 'El caso',
      html: `
        <div class="t-label">El caso · 23:40 de un viernes</div>
        <div class="k-amt">$148,000<small>MXN · transferencia a una cuenta nueva</small></div>
        <ul class="k-sig">
          <li>SIM <span class="v">⚠ cambió hoy</span></li>
          <li>Dispositivo <span class="v">⚠ nuevo hoy</span></li>
          <li>Ubicación <span class="v">⚠ otra ciudad</span></li>
          <li>Código por SMS <span class="v ok">✓ correcto</span></li>
        </ul>
        <div class="k-vote" data-step="1"><span class="t-label">Primera votación</span>¿La frenas<br>o la dejas pasar?</div>
        <div class="cite foot">Caso ilustrativo. No es un cliente real.</div>`,
      notes: `
        <p>Viernes, 11:40 de la noche. Una transferencia de 148 mil pesos a una cuenta a la que este cliente nunca le había mandado dinero. El cliente cambió de SIM hoy, estrenó celular hoy y está en otra ciudad. Pero el código que le llegó por SMS lo metió bien.</p>
        <p class="dir">[Clic. Manos arriba: ¿quién la frena? ¿Quién la deja pasar? Contar en voz alta y decir el número.]</p>
        <p>Acuérdense de su voto, porque al final vamos a votar otra vez. Un detalle para los que la dejaron pasar: el código llega por SMS. Si te cambiaron la SIM, el SMS le llega al que la tiene. Y un detalle para los que la frenaron: también puede ser alguien que se mudó y estrenó teléfono.</p>
        <p>Hoy esto lo decide una regla o un analista. La pregunta del taller es qué cambia si lo ve un agente. Entonces: ¿qué es un agente?</p>`,
    },
  ]);
})();
