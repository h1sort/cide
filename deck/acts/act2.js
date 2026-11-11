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
      <div class="lv"><div class="f">0</div><div class="nm">Nadie</div><div class="d">Que no lo toque un agente</div></div>
      <div class="lv"><div class="f">1</div><div class="nm">Preguntar</div><div class="d">Solo lee y responde</div></div>
      <div class="lv"><div class="f">2</div><div class="nm">Actuar</div><div class="d">Propone, alguien aprueba</div></div>
      <div class="lv"><div class="f">3</div><div class="nm">Juzgar</div><div class="d">Decide con evidencia, escala lo dudoso</div></div>
    </div>`;

  const CASES = [
    ['“¿Por qué me cobraron esta comisión?”', 'Un cliente pregunta por la app a las 11 de la noche'],
    ['Congelar una tarjeta reportada como robada', 'El cliente lo pide por chat'],
    ['Aprobar un crédito personal', 'Cliente con nómina en el banco'],
    ['Reportar una operación inusual', 'Prevención de lavado de dinero'],
    ['Recomendar un fondo de inversión', 'A un cliente que nunca ha invertido'],
    ['Mover dinero entre cuentas del mismo cliente', 'Para evitar un sobregiro, sin preguntarle'],
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
        <h2>¿Hasta dónde dejarías al agente?</h2>
        ${SCALE}
        <p class="hint" data-step="1">Voten con la mano: <span class="accent">puño = 0</span>, un dedo, dos o tres.</p>`,
      notes: `
        <p>Laboratorio. Les voy a poner seis casos, uno por uno, y ustedes votan con la mano qué tanto dejarían al agente. Puño cerrado: nadie, que no lo toque un agente. Un dedo: preguntar, solo lee. Dos: actuar, propone y alguien aprueba. Tres: juzgar, decide con evidencia y escala lo dudoso.</p>
        <p class="dir">[Clic.]</p>
        <p>No hay respuestas correctas. Bueno, hay unas más incorrectas que otras. Lo interesante es cuando la sala se divide: ahí le pido a alguien de cada lado que defienda su voto. Christian, tú también votas.</p>`,
    },
    {
      id: 'lab-casos',
      title: 'Laboratorio · casos',
      time: 660,
      particles: { shape: 'swarm', opacity: 0.22 },
      label: 'Laboratorio',
      html: `
        <div class="dots">${CASES.map(() => '<i></i>').join('')}</div>
        <div class="start" data-step-only="0"><div class="t-label">Seis casos · voten con la mano</div><div style="font-size:96px;font-weight:500;letter-spacing:-0.03em;margin-top:18px">¿Listos?</div></div>
        <div class="cases">
          ${CASES.map(([tx, sm], i) => `<div class="cs" data-step-only="${i + 1}"><div class="n">Caso 0${i + 1} · de 06</div><div class="tx">${tx}</div><div class="sm">${sm}</div></div>`).join('')}
        </div>
        <div class="mini"><div><span>0</span>Nadie</div><div><span>1</span>Preguntar</div><div><span>2</span>Actuar</div><div><span>3</span>Juzgar</div></div>`,
      notes: `
        <p class="dir">[Un clic por caso. En cada uno: "¡voten!", contar, y si la sala se divide, una persona de cada lado defiende. ~1:45 por caso.]</p>
        <p><b>01 · Comisión.</b> Mi voto: 1. Es lectura pura, con fuente. El riesgo es que invente una explicación; por eso responde citando el contrato o no responde.</p>
        <p><b>02 · Tarjeta robada.</b> Mi voto: 2, y casi 3. Congelar es reversible y esperar es caro. Aquí la autonomía protege al cliente.</p>
        <p><b>03 · Crédito.</b> Mi voto: 2. El agente arma el expediente; aprobar tiene que poder explicarse ante el cliente y el regulador.</p>
        <p><b>04 · Operación inusual.</b> Mi voto: 3 con escalamiento. Es el caso de fraude: el agente junta evidencia y un analista firma.</p>
        <p><b>05 · Fondo.</b> Mi voto: 1 o 0. Recomendar inversión tiene reglas de perfilamiento y conflicto de interés: ¿el agente recomienda lo mejor para el cliente o para el banco?</p>
        <p><b>06 · Mover dinero sin preguntar.</b> Mi voto: 0, aunque sea "por su bien". Es su dinero. Este suele dividir a la sala; ahí conecto con el debate: ¿qué tiene que recibir el cliente a cambio de dejar que alguien actúe con sus datos?</p>`,
    },
  ]);

  Deck.act(3, 'Debate', [
    {
      id: 'debate',
      title: 'Debate con Christian',
      time: 1200,
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
        <p>Christian, te paso el micrófono. Tú estuviste a cargo de open banking del otro lado de la calle, así que te toca la parte incómoda.</p>
        <p>Y si nadie se anima a preguntar, Andrés nos dejó cuatro en la invitación. Las pongo en pantalla una por una.</p>
        <p class="dir">[01: lo honesto es "depende del producto"; en mi experiencia, los transaccionales pesan más que los alternativos. 02: algo que antes requería un analista por caso (aclaraciones, expedientes de crédito pequeño, PLD de bajo monto). 03: ya la dejamos abierta en el concepto 3; regresar al voto. 04: conectar con el caso 06 del laboratorio.]</p>
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
          <div data-step="1"><span>Datos · contexto</span>Quién puede leer</div>
          <div data-step="2"><span>Herramientas · autonomía</span>Quién puede actuar</div>
          <div class="acc" data-step="3"><span>Supervisión · responsabilidad</span>Quién responde</div>
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
  ]);
})();
