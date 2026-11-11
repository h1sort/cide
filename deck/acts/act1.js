// Act 1 · Seis conceptos. Every concept slide: what it is (step 0) · in the bank (step 1) · question (step 2).
(() => {
  Deck.css(`
    .c-slide { padding-top: 84px; }
    .c-head .t-label { margin-bottom: 14px; }
    .c-head h2 { font-size: 136px; font-weight: 500; letter-spacing: -0.04em; line-height: 1; margin: 0; }
    .c-def { font-size: 46px; line-height: 1.22; letter-spacing: -0.01em; max-width: 1560px; margin: 28px 0 0; color: var(--fg); }
    .c-def .dim { color: var(--dim); }
    .c-row { position: absolute; left: var(--pad-x); right: var(--pad-x); top: 490px; display: grid; grid-template-columns: 1fr 1fr; gap: 48px; }
    .c-box { border: var(--stroke) solid var(--faint); border-radius: 18px; padding: 28px 36px 32px; min-height: 300px; }
    .c-box.q { border-color: var(--accent); }
    .c-box .t-label { font-size: 20px; margin-bottom: 18px; }
    .c-box.q .t-label { color: var(--accent); }
    .c-box .tx { font-size: 38px; line-height: 1.28; }
    .c-box.q .tx { font-size: 44px; line-height: 1.22; letter-spacing: -0.01em; }
    .c-box .src { margin-top: 18px; font-family: var(--mono); font-size: 20px; color: var(--faint); letter-spacing: 0.04em; }
    .c-chips { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 22px; }
    .c-chips .chip { font-size: 22px; }

    /* agente: equation */
    #s-agente .eq { display: flex; align-items: center; gap: 22px; margin-top: 30px; font-family: var(--mono); font-size: 30px; letter-spacing: 0.06em; text-transform: uppercase; }
    #s-agente .eq .p { border: var(--stroke) solid var(--faint); border-radius: 999px; padding: 10px 26px; }
    #s-agente .eq .p.acc { border-color: var(--accent); color: var(--accent); }
    #s-agente .eq .op { color: var(--faint); }
    #s-agente .c-row { top: 540px; }
    #s-agente .c-box { min-height: 300px; }

    /* art-76 */
    #s-art-76 h2 { font-size: 84px; font-weight: 500; letter-spacing: -0.025em; margin: 0 0 12px; line-height: 1.05; }
    #s-art-76 .layers { margin-top: 44px; display: grid; gap: 0; }
    #s-art-76 .ly { display: grid; grid-template-columns: 90px 1fr 340px; align-items: center; padding: 24px 0; border-top: 2px solid var(--hair); }
    #s-art-76 .ly:last-child { border-bottom: 2px solid var(--hair); }
    #s-art-76 .ly .n { font-family: var(--mono); font-size: 24px; letter-spacing: 0.2em; color: var(--dim); }
    #s-art-76 .ly .nm { font-size: 46px; letter-spacing: -0.01em; }
    #s-art-76 .ly .nm small { display: block; font-size: 28px; color: var(--dim); margin-top: 4px; }
    #s-art-76 .ly .st { justify-self: end; font-family: var(--mono); font-size: 24px; letter-spacing: 0.16em; text-transform: uppercase;
      border: var(--stroke) solid var(--faint); border-radius: 999px; padding: 8px 22px; color: var(--dim); }
    #s-art-76 .ly .st.ok { border-color: var(--good); color: var(--good); }
    #s-art-76 .ly .st.no { border-color: var(--accent); color: var(--accent); }
    #s-art-76 .ly.hot .nm { color: var(--accent); }
    #s-art-76 .plaid .t-label { white-space: nowrap; }
    #s-art-76 .plaid { margin-top: 40px; display: flex; gap: 28px; align-items: baseline; font-size: 32px; color: var(--dim); }
    #s-art-76 .plaid b { color: var(--fg); font-weight: 500; }
    #s-art-76 .foot2 { position: absolute; left: var(--pad-x); right: var(--pad-x); bottom: 108px; font-family: var(--mono); font-size: 20px; color: var(--faint); letter-spacing: 0.03em; }

    /* autonomia: ladder */
    #s-autonomia .lad { position: absolute; left: var(--pad-x); right: var(--pad-x); top: 420px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; align-items: end; }
    #s-autonomia .rung { border: var(--stroke) solid var(--faint); border-radius: 18px; padding: 28px 34px; }
    #s-autonomia .rung:nth-child(1) { min-height: 300px; }
    #s-autonomia .rung:nth-child(2) { min-height: 380px; }
    #s-autonomia .rung:nth-child(3) { min-height: 460px; border-color: var(--accent); }
    #s-autonomia .rung .k { font-family: var(--mono); font-size: 22px; letter-spacing: 0.24em; color: var(--dim); text-transform: uppercase; }
    #s-autonomia .rung h3 { font-size: 72px; font-weight: 500; letter-spacing: -0.03em; margin: 8px 0 14px; }
    #s-autonomia .rung:nth-child(3) h3 { color: var(--accent); }
    #s-autonomia .rung p { font-size: 32px; line-height: 1.28; margin: 0; color: var(--dim); }
    #s-autonomia .rung p b { color: var(--fg); font-weight: 500; }
    #s-autonomia .qq { position: absolute; right: var(--pad-x); top: 120px; width: 640px; }
    #s-autonomia .qq .c-box { min-height: 0; padding: 24px 32px 28px; }
    #s-autonomia .qq .c-box .tx { font-size: 38px; }

    /* supervision: fraud case */
    #s-supervision .case { position: absolute; left: var(--pad-x); top: 280px; width: 860px; }
    #s-supervision .case .t-label { margin-bottom: 6px; }
    #s-supervision .amt { font-size: 150px; font-weight: 500; letter-spacing: -0.04em; line-height: 1; }
    #s-supervision .amt small { font-size: 40px; color: var(--dim); letter-spacing: 0; margin-left: 12px; }
    #s-supervision .sig { list-style: none; padding: 0; margin: 30px 0 0; }
    #s-supervision .sig li { font-size: 36px; padding: 10px 0; border-top: 2px solid var(--hair); display: flex; justify-content: space-between; }
    #s-supervision .sig li .v { font-family: var(--mono); font-size: 26px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--bad); align-self: center; }
    #s-supervision .sig li .v.ok { color: var(--good); }
    #s-supervision .right { position: absolute; left: 1080px; right: var(--pad-x); top: 300px; }
    #s-supervision .vote { font-size: 64px; line-height: 1.12; letter-spacing: -0.02em; }
    #s-supervision .vote .t-label { display: block; margin-bottom: 18px; color: var(--accent); }
    #s-supervision .agent { position: absolute; left: 1080px; right: var(--pad-x); top: 300px; }
    #s-supervision .agent ol { list-style: none; padding: 0; margin: 18px 0 0; counter-reset: k; }
    #s-supervision .agent li { counter-increment: k; font-size: 34px; padding: 10px 0 10px 64px; position: relative; line-height: 1.25; }
    #s-supervision .agent li::before { content: "0" counter(k); position: absolute; left: 0; top: 16px; font-family: var(--mono); font-size: 22px; color: var(--accent); letter-spacing: 0.1em; }
    #s-supervision .agent li.esc { color: var(--accent); }
    #s-supervision .qq { position: absolute; left: var(--pad-x); right: var(--pad-x); top: 300px; }
    #s-supervision .qq .c-box { min-height: 0; }
    #s-supervision .case, #s-supervision .agent { transition: opacity .5s var(--ease); }
    #s-supervision[data-at="3"] .case, #s-supervision[data-at="3"] .agent { opacity: 0; }

    /* responsabilidad: trace */
    #s-responsabilidad .trace { display: flex; gap: 0; margin-top: 22px; }
    #s-responsabilidad .trace span { flex: 1; font-family: var(--mono); font-size: 22px; letter-spacing: 0.1em; text-transform: uppercase; text-align: center;
      border: var(--stroke) solid var(--faint); padding: 14px 6px; color: var(--dim); }
    #s-responsabilidad .trace span + span { border-left: 0; }
    #s-responsabilidad .trace span.acc { color: var(--accent); border-color: var(--accent); border-left: var(--stroke) solid var(--accent); }
  `);

  const head = (n, word) => `<div class="c-head"><div class="t-label">Concepto ${n} · de 06</div><h2>${word}</h2></div>`;
  const banco = (tx, extra = '', step = 1) => `<div class="c-box" data-step="${step}"><div class="t-label">En el banco</div><div class="tx">${tx}</div>${extra}</div>`;
  const preg = (tx, src = '', step = 2) => `<div class="c-box q" data-step="${step}"><div class="t-label">Para debatir</div><div class="tx">${tx}</div>${src ? `<div class="src">${src}</div>` : ''}</div>`;

  Deck.act(1, 'Seis conceptos', [
    {
      id: 'agente',
      title: '01 · Agente',
      time: 300,
      class: 'c-slide',
      particles: { shape: 'one', opacity: 0.22 },
      counter: '01 / 06',
      html: `
        ${head('01', 'Agente')}
        <p class="c-def">Un modelo predice. Un agente <em>persigue un objetivo</em>: decide el siguiente paso, usa herramientas y revisa lo que pasó.</p>
        <div class="eq"><span class="p">modelo</span><span class="op">+</span><span class="p">herramientas</span><span class="op">+</span><span class="p">ciclo</span><span class="op">+</span><span class="p acc">objetivo</span></div>
        <div class="c-row">
          ${banco('Un score de crédito te da un número.<br>Un agente arma el expediente, pide el comprobante que falta y <em>propone</em> la decisión.')}
          ${preg('¿En qué momento un algoritmo deja de <em>recomendar</em> y empieza a <em>decidir</em>?')}
        </div>`,
      notes: `
        <p>Concepto uno. Ustedes ya conocen los modelos: un modelo de riesgo, un score de crédito. Le das datos y te regresa un número. Predice. Y se queda quieto.</p>
        <p>Un agente es otra cosa: es un modelo de lenguaje metido en un ciclo, con herramientas y con un objetivo. Decide qué hacer después, lo hace, ve qué pasó y vuelve a decidir.</p>
        <p class="dir">[Clic: en el banco.]</p>
        <p>El score te dice "0.8, buen cliente". El agente agarra la solicitud, ve que falta el comprobante de domicilio, se lo pide al cliente, lo lee y te deja la decisión armada.</p>
        <p class="dir">[Clic: la pregunta. Dejar que contesten dos o tres personas.]</p>
        <p>Y ahí está la pregunta: ¿cuándo dejó de recomendar y empezó a decidir? Para hacer todo eso, el agente necesita manos. De eso va el concepto dos.</p>`,
    },
    {
      id: 'herramientas',
      title: '02 · Herramientas',
      time: 300,
      class: 'c-slide',
      particles: { shape: 'ring', opacity: 0.22 },
      counter: '02 / 06',
      html: `
        ${head('02', 'Herramientas')}
        <p class="c-def">Todo lo que el agente puede <em>leer</em> o <em>hacer</em> fuera de sí mismo. <span class="dim">Sin herramientas, solo platica.</span></p>
        <div class="c-row">
          ${banco('En un banco, una herramienta es <em>una API</em>.', `<div class="c-chips"><span class="chip">consultar saldo</span><span class="chip">congelar tarjeta</span><span class="chip">abrir aclaración</span><span class="chip">consultar buró</span><span class="chip">enviar SPEI</span></div>`)}
          ${preg('Si el agente de una fintech no puede leer tu cuenta del banco, ¿<em>compite</em> o solo conversa?')}
        </div>`,
      notes: `
        <p>Concepto dos: herramientas. Es lo más importante y lo menos sexy. Un agente sin herramientas es un chatbot: muy elocuente, pero no puede ver tu saldo ni congelar tu tarjeta.</p>
        <p class="dir">[Clic.]</p>
        <p>En un banco, cada herramienta es una API: consultar saldo, congelar la tarjeta, abrir una aclaración, consultar buró, mandar un SPEI. Lo que el agente puede hacer es exactamente lo que le conectaste. Ni más, ni menos.</p>
        <p class="dir">[Clic: la pregunta.]</p>
        <p>Y aquí empieza lo interesante para este diplomado. Dentro del banco, yo le conecto mis APIs a mi agente. Pero una fintech, ¿a qué API se conecta para leer tu cuenta? Si no tiene herramientas, su agente solo conversa. Lo que nos lleva a lo que esas herramientas traen de regreso: los datos.</p>`,
    },
    {
      id: 'contexto',
      title: '03 · Contexto',
      time: 300,
      class: 'c-slide',
      particles: { shape: 'two', opacity: 0.25 },
      counter: '03 / 06',
      html: `
        ${head('03', 'Contexto')}
        <p class="c-def">Lo que el agente <em>sabe</em> en el momento de decidir. <span class="dim">El mismo modelo con otro contexto es otro producto.</span></p>
        <div class="c-row">
          ${banco('“El modelo se puede replicar. <em>Los datos no.</em>”<br><span class="dim">Y los datos transaccionales viven en los bancos establecidos.</span>', '<div class="src">Andrés Trejo, invitación a este taller</div>')}
          ${preg('Si un banco y una fintech tuvieran exactamente los mismos datos, ¿quién construye el mejor producto? ¿Por qué?', 'Pregunta de Andrés Trejo')}
        </div>`,
      notes: `
        <p>Concepto tres: contexto. El modelo, el cerebro, hoy es casi una commodity: lo rentas por API y el de tu competidor es el mismo. Lo que cambia la respuesta es qué sabe el agente cuando decide: tu historial, tus movimientos, tu comportamiento.</p>
        <p class="dir">[Clic.]</p>
        <p>Andrés lo dijo mejor que yo en la invitación: el modelo se puede replicar, los datos no. Y en México, los datos transaccionales están concentrados en los bancos grandes. Yo trabajo en uno, así que lo digo con conocimiento de causa: es una ventaja enorme.</p>
        <p class="dir">[Clic: la pregunta. Esta es buena para provocar a Christian.]</p>
        <p>Entonces, si mañana empatamos los datos, ¿quién gana? ¿El banco o la fintech? Guarden la respuesta. Y veamos qué dice la ley sobre empatar esos datos.</p>`,
    },
    {
      id: 'art-76',
      title: '03b · Art. 76 · lo que falta',
      time: 180,
      class: '',
      particles: { shape: 'grid', opacity: 0.14 },
      html: `
        <div class="t-label" style="margin-bottom:14px">Ley Fintech · Art. 76 · 2018</div>
        <h2>Tres capas de datos. <span class="accent">Solo una tiene reglas.</span></h2>
        <div class="layers">
          <div class="ly" data-step="1"><span class="n">01</span><span class="nm">Datos abiertos<small>productos, comisiones, cajeros, sucursales</small></span><span class="st ok">reglas 2020</span></div>
          <div class="ly" data-step="2"><span class="n">02</span><span class="nm">Datos agregados<small>estadísticas sin identificar al cliente</small></span><span class="st no">pendiente</span></div>
          <div class="ly hot" data-step="2"><span class="n">03</span><span class="nm">Datos transaccionales<small>tu historial, con tu consentimiento</small></span><span class="st no">pendiente</span></div>
        </div>
        <div class="plaid" data-step="3"><span class="t-label">Mientras tanto</span><span><b>2020:</b> Visa ofrece US$5,300 M por Plaid. <b>2021:</b> lo abandona tras una demanda antimonopolio.</span></div>
        <div class="foot2">Fuentes: LRITF art. 76 · Banxico Circular 2/2020 · Facephi Observatory (2026) · U.S. DOJ, comunicado 21-38 (2021)</div>`,
      notes: `
        <p>La Ley Fintech de 2018, en su artículo 76, ya dice que los bancos tienen que compartir datos por APIs estandarizadas. Y define tres capas.</p>
        <p class="dir">[Clic.]</p>
        <p>Los datos abiertos, dónde están mis cajeros, cuánto cobro de comisión: esos sí tienen reglas desde 2020.</p>
        <p class="dir">[Clic.]</p>
        <p>Los agregados y los transaccionales, que son los que importan, tu historial con tu consentimiento, siguen pendientes. La ley daba 24 meses. Hasta hay un amparo en trámite por la omisión. Los abogados aquí saben de eso más que yo.</p>
        <p class="dir">[Clic.]</p>
        <p>Y para que vean cuánto valen esas tuberías: en 2020 Visa quiso comprar Plaid, que es justamente la empresa que conecta cuentas de banco con apps, en 5,300 millones de dólares. El Departamento de Justicia demandó por competencia y Visa se echó para atrás. Bien. Ya tenemos manos y datos. ¿Cuánto lo dejamos hacer solo?</p>`,
    },
    {
      id: 'autonomia',
      title: '04 · Autonomía',
      time: 300,
      class: 'c-slide',
      particles: { shape: 'grid', opacity: 0.16 },
      counter: '04 / 06',
      html: `
        ${head('04', 'Autonomía')}
        <p class="c-def">Cuánto puede hacer el agente <em>sin pedir permiso</em>.</p>
        <div class="lad">
          <div class="rung" data-step="1"><div class="k">Nivel 1</div><h3>Preguntar</h3><p><b>Solo lee.</b> Responde con fuentes. Si no sabe, lo dice.</p></div>
          <div class="rung" data-step="2"><div class="k">Nivel 2</div><h3>Actuar</h3><p><b>Propone una acción acotada.</b> Alguien la aprueba antes de ejecutarla.</p></div>
          <div class="rung" data-step="3"><div class="k">Nivel 3</div><h3>Juzgar</h3><p><b>Clasifica un caso con evidencia.</b> Lo dudoso lo escala a una persona.</p></div>
        </div>
        <div class="qq" data-step="4">${preg('¿Quién fija el nivel: el banco, el regulador o el cliente?', '', 4)}</div>`,
      notes: `
        <p>Concepto cuatro: autonomía. No todos los agentes son iguales. Yo los divido en tres niveles, y así los diseñamos en el banco.</p>
        <p class="dir">[Clic.]</p>
        <p>Preguntar: el agente solo lee. Le preguntas por qué te cobraron una comisión y te responde con la fuente. No toca nada.</p>
        <p class="dir">[Clic.]</p>
        <p>Actuar: el agente propone algo concreto, "congelo esta tarjeta", y alguien, el cliente o un ejecutivo, lo aprueba antes de que pase.</p>
        <p class="dir">[Clic.]</p>
        <p>Juzgar: el agente revisa un caso con evidencia y emite un juicio, "esto parece fraude". Es el más delicado, porque se equivoca con mucha seguridad. Por eso lo que no tiene claro lo escala.</p>
        <p class="dir">[Clic: la pregunta.]</p>
        <p>¿Y quién decide en qué nivel va cada caso? Hoy lo decide el banco. ¿Debería? Vamos a ver uno real.</p>`,
    },
    {
      id: 'supervision',
      title: '05 · Supervisión · el caso de fraude',
      time: 360,
      class: 'c-slide',
      particles: [{ shape: 'scatter', opacity: 0.2 }, { shape: 'split', opacity: 0.3 }, { shape: 'one', opacity: 0.18 }, { shape: 'scatter', opacity: 0.15 }],
      counter: '05 / 06',
      html: `
        ${head('05', 'Supervisión')}
        <div class="case">
          <div class="t-label">Transferencia</div>
          <div class="amt">$148,000<small>MXN</small></div>
          <ul class="sig">
            <li>SIM nueva <span class="v">⚠ hoy</span></li>
            <li>Dispositivo nuevo <span class="v">⚠ hoy</span></li>
            <li>Ubicación nueva <span class="v">⚠ hoy</span></li>
            <li>OTP por SMS <span class="v ok">✓ correcto</span></li>
          </ul>
        </div>
        <div class="right" data-step-hide="2"><div class="vote" data-step="1"><span class="t-label">Votación</span>¿Es fraude?<br>¿Frenarías la transferencia?</div></div>
        <div class="agent" data-step="2">
          <div class="t-label accent">El agente no decide. Arma el caso.</div>
          <ol>
            <li>Junta la evidencia: SIM, dispositivo, historial</li>
            <li>Aplica la política, no su intuición</li>
            <li>Deja escrito por qué</li>
            <li class="esc">Escala a un analista con el caso listo</li>
          </ol>
        </div>
        <div class="qq" data-step="3">${preg('¿Qué error prefieres: frenar a un cliente honesto o dejar pasar un fraude? ¿Quién decide la proporción?', '', 3)}</div>`,
      notes: `
        <p>Concepto cinco: supervisión. Y aquí los pongo a trabajar. Una transferencia de 148 mil pesos. El cliente cambió de SIM hoy, de celular hoy, está en otra ciudad. Pero el código por SMS lo metió bien.</p>
        <p class="dir">[Clic: la votación. Manos arriba: ¿quién dice fraude? ¿Quién la frena? Contar en voz alta.]</p>
        <p>Fíjense en el detalle: el OTP llega por SMS. Si te clonaron el chip, el SMS le llega al defraudador. La señal que debía darte confianza es justo la que está comprometida.</p>
        <p class="dir">[Clic.]</p>
        <p>Lo que hacemos es que el agente no decida solo. Junta la evidencia, aplica la política, deja por escrito su razonamiento y se lo pasa a un analista con todo listo. El humano decide en dos minutos y no en veinte.</p>
        <p class="dir">[Clic: la pregunta.]</p>
        <p>Y la pregunta incómoda: ningún sistema es perfecto. ¿Qué error prefieren? Eso nos lleva al último concepto: cuando se equivoca, ¿quién responde?</p>`,
    },
    {
      id: 'responsabilidad',
      title: '06 · Responsabilidad',
      time: 300,
      class: 'c-slide',
      particles: { shape: 'one', opacity: 0.18 },
      counter: '06 / 06',
      html: `
        ${head('06', 'Responsabilidad')}
        <p class="c-def">Quién responde cuando el agente se equivoca, y <em>con qué evidencia</em>.</p>
        <div class="c-row">
          ${banco('Sin traza no hay responsabilidad, solo opiniones.', `<div class="trace"><span>qué vio</span><span>qué usó</span><span>qué regla</span><span class="acc">quién aprobó</span></div>`)}
          ${preg('Cuando se equivoca, ¿quién responde: el banco, el proveedor del modelo o el cliente que dio su consentimiento?')}
        </div>`,
      notes: `
        <p>Concepto seis, y el que más les toca a los abogados: responsabilidad. Un agente se va a equivocar. La pregunta no es si, sino quién responde y cómo lo pruebas.</p>
        <p class="dir">[Clic.]</p>
        <p>En el banco lo resolvemos con trazas: cada decisión deja registro de qué vio el agente, qué herramienta usó, qué regla aplicó y quién aprobó. Sin eso, cuando llega la queja o el auditor, solo tienes opiniones.</p>
        <p class="dir">[Clic: la pregunta.]</p>
        <p>Pero la traza no resuelve lo legal. Si el agente de una fintech, con datos que tú compartiste por open finance, usando un modelo de un tercero, te hace perder dinero, ¿a quién demandas? Esto no lo tengo resuelto y no creo que nadie aquí lo tenga. Por eso lo vamos a practicar. Pasemos al laboratorio.</p>`,
    },
  ]);
})();
