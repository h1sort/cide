// Acts 2–4 · Laboratorio, Debate, Cierre.
(() => {
  Deck.css(`
    #s-lab-reglas h2 { font-size: 96px; font-weight: 500; letter-spacing: -0.03em; margin: 0 0 56px; line-height: 1.02; }
    .lab-scale { display: grid; grid-template-columns: repeat(4, 1fr); gap: 28px; }
    .lab-scale .lv { border: var(--stroke) solid var(--faint); border-radius: 18px; padding: 26px 30px; }
    .lab-scale .lv .f { font-family: var(--mono); font-size: 96px; line-height: 1; color: var(--accent); }
    .lab-scale .lv .nm { font-size: 44px; font-weight: 500; margin-top: 16px; letter-spacing: -0.01em; }
    .lab-scale .lv .d { font-size: 28px; color: var(--dim); margin-top: 8px; line-height: 1.3; }
    #s-lab-reglas .hint { margin-top: 48px; font-size: 34px; color: var(--dim); }

    #s-lab-casos .cases { position: absolute; left: var(--pad-x); right: var(--pad-x); top: 150px; height: 470px; }
    #s-lab-casos .cs { position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: center; }
    #s-lab-casos .cs .n { text-transform: uppercase; font-family: var(--mono); font-size: 26px; letter-spacing: 0.24em; color: var(--accent); }
    #s-lab-casos .cs .tx { font-size: 96px; font-weight: 500; line-height: 1.04; letter-spacing: -0.03em; margin-top: 18px; max-width: 1650px; }
    #s-lab-casos .cs .sm { font-size: 36px; color: var(--dim); margin-top: 22px; }
    #s-lab-casos .start { position: absolute; left: var(--pad-x); top: 150px; height: 470px; display: flex; flex-direction: column; justify-content: center; }
    #s-lab-casos .mini { position: absolute; left: var(--pad-x); right: var(--pad-x); top: 680px; display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
    #s-lab-casos .mini div { border-top: 3px solid var(--faint); padding-top: 14px; font-size: 30px; }
    #s-lab-casos .mini div span { font-family: var(--mono); color: var(--accent); margin-right: 12px; }
    #s-lab-casos .dots { position: absolute; right: var(--pad-x); top: 96px; display: flex; gap: 12px; }
    #s-lab-casos .dots i { width: 44px; height: 4px; background: var(--hair); }
    ${[1, 2, 3, 4, 5, 6].map((k) => `#s-lab-casos[data-at="${k}"] .dots i:nth-child(-n+${k})`).join(',')} { background: var(--accent); }

    #s-revote { padding-top: 110px; }
    #s-revote .rv-amt { font-size: 170px; font-weight: 500; letter-spacing: -0.045em; line-height: 1; margin-top: 16px; }
    #s-revote .rv-q { position: absolute; left: var(--pad-x); top: 420px; font-size: 80px; font-weight: 500; letter-spacing: -0.025em; }
    #s-revote .rv-list { list-style: none; margin: 0; padding: 0; position: absolute; left: var(--pad-x); right: var(--pad-x); top: 400px; }
    #s-revote .rv-list li { display: grid; grid-template-columns: 300px 1fr; align-items: baseline; padding: 16px 0; border-top: 2px solid var(--hair); font-size: 38px; line-height: 1.2; }
    #s-revote .rv-list li:last-child { border-bottom: 2px solid var(--hair); }
    #s-revote .rv-list .n { font-family: var(--mono); font-size: 22px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--accent); }
    #s-revote .rv-end { position: absolute; left: var(--pad-x); top: 800px; font-size: 64px; font-weight: 500; letter-spacing: -0.025em; color: var(--accent); }
    #s-fuentes h2 { font-size: 56px; font-weight: 500; margin: 0 0 24px; letter-spacing: -0.02em; }
    #s-fuentes ul { list-style: none; margin: 0; padding: 0; columns: 2; column-gap: 56px; }
    #s-fuentes li { font-size: 25px; line-height: 1.32; padding: 7px 0; border-top: 1.5px solid var(--hair); break-inside: avoid; color: var(--dim); }
    #s-fuentes li b { color: var(--fg); font-weight: 500; }
    #s-debate .who { display: flex; gap: 36px; align-items: baseline; margin-bottom: 16px; }
    #s-debate h2 { font-size: 84px; font-weight: 500; letter-spacing: -0.025em; margin: 0 0 40px; line-height: 1.05; }
    #s-debate .qs { list-style: none; margin: 0; padding: 0; }
    #s-debate .qs li { display: grid; grid-template-columns: 90px 1fr; align-items: baseline; padding: 20px 0; border-top: 2px solid var(--hair); }
    #s-debate .qs li:last-child { border-bottom: 2px solid var(--hair); }
    #s-debate .qs .n { font-family: var(--mono); font-size: 24px; letter-spacing: 0.2em; color: var(--accent); }
    #s-debate .qs .tx { font-size: 40px; line-height: 1.22; letter-spacing: -0.01em; }
    #s-debate .src { margin-top: 22px; }

    #s-cierre .l1 { font-size: 60px; line-height: 1.18; letter-spacing: -0.015em; margin: 0 0 48px; color: var(--dim); max-width: 1600px; }
    #s-cierre .three { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; }
    #s-cierre .three div { font-size: 84px; font-weight: 500; letter-spacing: -0.03em; line-height: 1.04; border-top: 3px solid var(--faint); padding-top: 24px; }
    #s-cierre .three div span { display: block; font-family: var(--mono); font-size: 22px; letter-spacing: 0.22em; color: var(--dim); text-transform: uppercase; margin-bottom: 14px; font-weight: 400; }
    #s-cierre .three div.acc { border-top-color: var(--accent); color: var(--accent); }

    #s-gracias .qrs { position: absolute; right: var(--pad-x); top: var(--pad-y); display: grid; grid-template-columns: repeat(2, 360px); gap: 24px 40px; }
    #s-gracias .qr { text-align: center; }
    #s-gracias .qr .tile { width: 360px; height: 360px; padding: 22px; border-radius: 20px; background: #fff; }
    #s-gracias .qr img { width: 100%; height: 100%; display: block; image-rendering: pixelated; }
    #s-gracias .qr .u { margin-top: 12px; font-family: var(--mono); font-size: 26px; color: var(--fg); }
    #s-gracias .url { font-family: var(--mono); font-size: 52px; letter-spacing: 0.01em; margin-top: 36px; }
    #s-gracias .who { margin-top: 56px; line-height: 1.5; }
  `);

  const SCALE = `
    <div class="lab-scale">
      <div class="lv"><div class="f">0</div><div class="nm">Sin agente</div><div class="d">Lo hace una persona</div></div>
      <div class="lv"><div class="f">1</div><div class="nm">Propone</div><div class="d">Un humano aprueba antes</div></div>
      <div class="lv"><div class="f">2</div><div class="nm">Ejecuta</div><div class="d">Un humano revisa después</div></div>
      <div class="lv"><div class="f">3</div><div class="nm">Ejecuta solo</div><div class="d">Nadie revisa cada caso</div></div>
    </div>`;

  const CASES = [
    ['“¿Por qué me cobraron esta comisión?”', 'Leer · un cliente pregunta por la app a las 11 de la noche'],
    ['Congelar una tarjeta reportada como robada', 'Escribir, reversible · el cliente lo pide por chat'],
    ['Aprobar un crédito personal', 'Calificar a una persona · cliente con nómina en el banco'],
    ['Reportar una operación inusual', 'Calificar a una persona · prevención de lavado de dinero'],
    ['Recomendar un fondo de inversión', 'A un cliente que nunca ha invertido'],
    ['Mover dinero entre cuentas del mismo cliente', 'Escribir, reversible · para evitar un sobregiro, sin preguntarle'],
  ];

  Deck.act(2, 'Laboratorio', [
    {
      id: 'lab-reglas',
      title: 'Laboratorio · reglas',
      time: 60,
      class: 'middle',
      particles: { shape: 'swarm', opacity: 0.3 },
      html: `
        <div class="t-label" style="margin-bottom:18px">Laboratorio · seis casos</div>
        <h2>¿Quién aprueba?</h2>
        ${SCALE}
        <p class="hint" data-step="1">Voten con la mano: <span class="accent">puño = 0</span>, un dedo, dos o tres.</p>`,
      notes: `
        <p>Laboratorio. Ya tienen el vocabulario, ahora úsenlo. Seis casos, uno por uno, y la pregunta siempre es la misma: ¿quién aprueba? Puño cerrado: sin agente, lo hace una persona. Un dedo: el agente propone y un humano aprueba antes. Dos: el agente ejecuta y un humano revisa después. Tres: ejecuta solo, y nadie revisa cada caso; se audita por muestreo.</p>
        <p class="dir">[Clic.]</p>
        <p>Esta vez la escala sí es ordenada: de menos a más autonomía. Piensen en los dos ejes: qué efecto tiene la acción y qué tan caro es el error. Cuando la sala se divida, le pido a alguien de cada lado que defienda su voto. Christian, tú también votas. Primer caso.</p>`,
    },
    {
      id: 'lab-casos',
      title: 'Laboratorio · casos',
      time: 600,
      particles: { shape: 'swarm', opacity: 0.22 },
      label: 'Laboratorio',
      html: `
        <div class="dots">${CASES.map(() => '<i></i>').join('')}</div>
        <div class="start" data-step-only="0"><div class="t-label">Seis casos · ¿quién aprueba?</div><div style="font-size:96px;font-weight:500;letter-spacing:-0.03em;margin-top:18px">¿Listos?</div></div>
        <div class="cases">
          ${CASES.map(([tx, sm], i) => `<div class="cs" data-step-only="${i + 1}"><div class="n">Caso 0${i + 1} · de 06</div><div class="tx">${tx}</div><div class="sm">${sm}</div></div>`).join('')}
        </div>
        <div class="mini"><div><span>0</span>Sin agente</div><div><span>1</span>Aprueba antes</div><div><span>2</span>Revisa después</div><div><span>3</span>Ejecuta solo</div></div>`,
      notes: `
        <p class="dir">[Un clic por caso. En cada uno: "¡voten!", contar, y si la sala se divide, una persona de cada lado defiende. ~1:40 por caso. Si vamos tarde, saltar el 04 y el 05.]</p>
<p><b>01 · Comisión.</b> Mi voto: 3. Es lectura; el riesgo es que invente, así que responde citando el contrato o no responde, y se audita por muestreo.</p>
        <p><b>02 · Tarjeta robada.</b> Mi voto: 3. Congelar es reversible y esperar es caro. Aquí la autonomía protege al cliente.</p>
        <p><b>03 · Crédito.</b> Mi voto: 1. Es calificar a una persona; en Europa es alto riesgo, y la explicación del modelo no es la causa.</p>
        <p><b>04 · Operación inusual.</b> Mi voto: 1. El agente arma el expediente; un oficial firma el reporte.</p>
        <p><b>05 · Fondo.</b> Mi voto: 1 o 0. Perfilamiento y conflicto de interés: ¿recomienda lo mejor para el cliente o para el banco?</p>
        <p><b>06 · Mover dinero sin preguntar.</b> Mi voto: 1. Es reversible, pero no hay mandato: la ausencia de prohibición no es un permiso. Este divide a la sala; de aquí regreso al caso.</p>`,
    },
  ]);

  Deck.act(2.5, 'El caso', [
    {
      id: 'revote',
      title: 'El caso · segunda votación',
      time: 150,
      particles: [{ shape: 'split', opacity: 0.25 }, { shape: 'one', opacity: 0.2 }],
      html: `
        <div class="t-label">El caso, otra vez · segunda votación</div>
        <div class="rv-amt">$148,000</div>
        <div class="rv-q" data-step-hide="1">¿La frenas o la dejas pasar?</div>
        <ul class="rv-list" data-step="1">
          <li><span class="n">Herramienta</span><span>Retener 30 minutos. <em>Reversible.</em></span></li>
          <li><span class="n">Contexto</span><span>El agente reúne la evidencia: SIM, dispositivo, beneficiario, historial.</span></li>
          <li><span class="n">Autonomía</span><span>Retiene solo. Liberar o cancelar lo aprueba una persona.</span></li>
          <li><span class="n">Traza</span><span>Qué vio, qué propuso, qué regla, quién aprobó.</span></li>
        </ul>
        <div class="rv-end" data-step="2">La pregunta estaba mal planteada.</div>`,
      notes: `
        <p>Regreso al caso del principio. 148 mil pesos, SIM nueva, dispositivo nuevo, otra ciudad, código correcto. Les pregunté: ¿la frenas o la dejas pasar? Voten otra vez.</p>
        <p class="dir">[Manos. Comparar en voz alta con el conteo del principio. Clic.]</p>
        <p>Ahora con el vocabulario de hoy. No son dos opciones. Hay una herramienta reversible: retener treinta minutos. En ese tiempo el agente reúne el contexto: ¿hubo portabilidad?, ¿el beneficiario es nuevo?, ¿el cliente contesta en su número anterior? Retener lo puede hacer solo; liberar o cancelar lo aprueba una persona, con el caso armado. Y todo queda en la traza.</p>
        <p class="dir">[Clic.]</p>
        <p>La pregunta estaba mal planteada. "¿Frenas o dejas pasar?" es la pregunta de un sistema que solo tiene dos botones. Lo agéntico bien hecho no es que la máquina escoja el botón: es tener más botones y saber quién aprieta cuál. Christian, te paso el micrófono.</p>`,
    },
  ]);

  Deck.act(3, 'Debate', [
    {
      id: 'debate',
      title: 'Debate con Christian',
      time: 1080,
      class: 'middle',
      particles: { shape: 'scatter', opacity: 0.2 },
      html: `
        <div class="who"><span class="t-label">Debate · facilita Christian García</span></div>
        <h2>Ahora pregunten <em>ustedes</em>.</h2>
        <ul class="qs focus-last">
          <li data-step="1"><span class="n">01</span><span class="tx">¿Qué datos mueven de verdad un modelo de crédito: transaccionales, de comportamiento o alternativos?</span></li>
          <li data-step="2"><span class="n">02</span><span class="tx">¿Qué producto financiero se puede construir hoy con IA que hace dos años no era rentable?</span></li>
          <li data-step="3"><span class="n">03</span><span class="tx">Si un banco y una fintech tuvieran exactamente los mismos datos, ¿quién construye el mejor producto y por qué?</span></li>
          <li data-step="4"><span class="n">04</span><span class="tx">¿Cuánto vale un dato que el cliente decide compartir, y qué tiene que recibir a cambio?</span></li>
        </ul>
        <div class="cite src">Preguntas: Andrés Trejo, invitación a este taller</div>`,
      notes: `
        <p class="dir">[Pasarle la palabra a Christian. Él modera; yo respondo. Revelar cada pregunta solo si la sala se queda callada.]</p>
        <p>Christian, tú estuviste a cargo de open banking del otro lado de la calle, así que te toca la parte incómoda.</p>
        <p>Y si nadie se anima a preguntar, Andrés nos dejó cuatro en la invitación. Las pongo en pantalla una por una.</p>
        <p class="dir">[01: lo honesto es "depende del producto"; en mi experiencia, los transaccionales pesan más que los alternativos. 02: algo que antes requería un analista por caso (aclaraciones, expedientes de crédito pequeño, PLD de bajo monto). 03: ya la dejamos abierta en el concepto 3: mismos pesos, mismo contexto, gana quien diseñe mejor herramientas y compuerta. 04: conectar con la capa 03 del art. 76 y con el caso 06 del laboratorio.]</p>
        <p>Cuando cerremos, una última diapositiva y los dejo ir.</p>`,
    },
  ]);

  Deck.act(4, 'Cierre', [
    {
      id: 'cierre',
      title: 'Cierre · de qué hablamos',
      time: 60,
      class: 'middle',
      particles: { shape: 'one', opacity: 0.2 },
      html: `
        <p class="l1">Cuando hablamos de banca agéntica, hablamos de tres cosas:</p>
        <div class="three">
          <div data-step="1"><span>Contexto · art. 76</span>Quién puede leer</div>
          <div data-step="2"><span>Compuerta · autonomía</span>Quién puede actuar</div>
          <div class="acc" data-step="3"><span>Supervisión · traza</span>Quién responde</div>
        </div>`,
      notes: `
        <p>Para cerrar, regreso a Carver. Los de la cocina nunca se pusieron de acuerdo en qué es el amor. Yo espero que nosotros sí nos pongamos de acuerdo en esto.</p>
        <p>Cuando hablamos de banca agéntica, hablamos de tres cosas.</p>
        <p class="dir">[Clic.]</p>
        <p>Quién puede leer: los datos. Y hoy eso lo define una regla que lleva años pendiente.</p>
        <p class="dir">[Clic.]</p>
        <p>Quién puede actuar: qué herramientas y con cuánta autonomía.</p>
        <p class="dir">[Clic.]</p>
        <p>Y quién responde cuando sale mal. Lo demás, el modelo, el proveedor, la palabra de moda, es lo de menos.</p>`,
    },
    {
      id: 'gracias',
      title: 'Gracias',
      time: 30,
      class: 'middle',
      particles: { shape: 'scatter', opacity: 0.3 },
      html: `
        <div>
          <div class="t-label" style="margin-bottom:28px">Banca agéntica · CIDE</div>
          <h2 class="t-hero" style="font-size:230px">Gracias</h2>
          <div class="url accent">h1sort.com/cide</div>
          <div class="who t-small dim">Carlos Haro · Christian García<br>Diplomado Fintech · CIDE · 11 nov 2026</div>
        </div>
        <div class="qrs">
          <div class="qr"><div class="tile"><img src="../assets/qr-linkedin.svg" alt="QR LinkedIn"></div><div class="u">linkedin.com/in/h1sort</div></div>
          <div class="qr"><div class="tile"><img src="../assets/qr-x.svg" alt="QR X"></div><div class="u">x.com/h1sort</div></div>
          <div class="qr"><div class="tile"><img src="../assets/qr-github.svg" alt="QR GitHub"></div><div class="u">github.com/h1sort</div></div>
          <div class="qr"><div class="tile"><img src="../assets/qr-slides.svg" alt="QR diapositivas"></div><div class="u">h1sort.com/cide</div></div>
        </div>`,
      notes: `
        <p>Gracias. A Christian por las horas que le ha metido al diplomado, al CIDE, a Jorge Luis y a Andrés por la invitación, y a ustedes por votar sin miedo.</p>
        <p>Las diapositivas y las fuentes de todo lo que cité están en h1sort.com/cide. Ahí también están mi LinkedIn, X y GitHub. Si se quedaron con una pregunta incómoda, mándenmela: esas son las mejores.</p>
        <p class="dir">[Dejar los QR en pantalla hasta que se vacíe la sala.]</p>`,
    },
    {
      id: 'fuentes',
      title: 'Fuentes (para el PDF, no proyectar)',
      time: 0,
      particles: { shape: 'scatter', opacity: 0.1 },
      label: 'Fuentes',
      html: `
        <h2>Fuentes</h2>
        <ul>
          <li><b>Definición de agente, ciclo y compuerta.</b> Fried, D. y Neubig, G., CMU 11-768: AI Agents, otoño 2026, clases 1, 2 y 13 (adaptado; con apoyo de notas de estudio independientes). cmu-agents.com</li>
          <li><b>Flujo vs. agente.</b> Anthropic, Building Effective Agents (dic. 2024).</li>
          <li><b>Inyección de instrucciones.</b> OWASP Top 10 for LLM Applications 2025, LLM01.</li>
          <li><b>Datos abiertos, agregados y transaccionales.</b> Ley para Regular las Instituciones de Tecnología Financiera, art. 76 (DOF 9 mar. 2018).</li>
          <li><b>Reglas secundarias.</b> Banxico, Circular 2/2020 (DOF 10 mar. 2020); CNBV, disposiciones sobre interfaces estandarizadas (DOF 4 jun. 2020). Estado a oct. 2026: Open Banking Tracker.</li>
          <li><b>Tasa base.</b> Aritmética propia con supuestos ilustrativos: prevalencia 0.1%, sensibilidad 99%, falsos positivos 1%.</li>
          <li><b>Regla de tres.</b> Con n pruebas sin falla, la cota superior de 95% es 1 − 0.05^(1/n) ≈ 3/n.</li>
          <li><b>Sesgo de automatización.</b> Reglamento (UE) 2024/1689, art. 14(4)(b); Parasuraman y Manzey, Human Factors 52(3), 2010.</li>
          <li><b>No determinismo.</b> Thinking Machines Lab, Defeating Nondeterminism in LLM Inference (sep. 2025).</li>
          <li><b>Fidelidad de las explicaciones.</b> Turpin et al., NeurIPS 2023; Chen et al., Reasoning Models Don't Always Say What They Think (2025).</li>
          <li><b>Atribución de mensajes automáticos.</b> Código de Comercio, art. 90, fracc. III.</li>
          <li><b>Riesgo de modelos.</b> Fed, OCC y FDIC, SR 26-2 (17 abr. 2026), nota 3; sustituye a SR 11-7.</li>
          <li><b>Alto riesgo en crédito.</b> Reglamento (UE) 2024/1689, anexo III, punto 5(b).</li>
          <li><b>El caso de $148,000</b> es ilustrativo. Las preguntas del debate son de Andrés Trejo.</li>
        </ul>`,
      notes: `<p class="dir">[No proyectar. Está para el PDF y la versión web.]</p>`,
    },
  ]);
})();
