/* Story engine shared by every concept: a 30-second summary, then visual "beats"
   (big lines, tap-through prototypes, pinned screens, before/after sliders, strips).
   Each concept skins it through CSS custom properties on the container:
   --st-ink --st-muted --st-line --st-surface --st-bg --st-accent --st-tint --st-display --st-body --st-radius */
(function () {
  const CSS = `
.st{--st-ink:#121418;--st-muted:#666b74;--st-line:#e3e5e9;--st-surface:#fff;--st-bg:transparent;--st-accent:#1d6fe0;--st-tint:#e6efff;--st-display:inherit;--st-body:inherit;--st-radius:18px;
  color:var(--st-ink);font-family:var(--st-body);display:grid;grid-template-columns:minmax(0,1fr);gap:0;min-width:0}
.st *{box-sizing:border-box}
.st img{max-width:100%;display:block}
.st-wrap{width:100%;max-width:1200px;margin:0 auto;padding-left:max(16px,env(safe-area-inset-left,0px));padding-right:max(16px,env(safe-area-inset-right,0px))}
.st-k{font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:var(--st-accent);font-weight:600;display:inline-flex;align-items:center;gap:8px}
.st-k:before{content:"";width:7px;height:7px;border-radius:50%;background:var(--st-accent)}
.st-big{font-family:var(--st-display);font-size:clamp(34px,5.6vw,80px);line-height:1.02;letter-spacing:-.03em;margin:14px 0 0;text-wrap:balance;max-width:16em}
.st-mid{font-family:var(--st-display);font-size:clamp(28px,3.6vw,52px);line-height:1.04;letter-spacing:-.025em;margin:12px 0 0;text-wrap:balance;max-width:18em}
.st-sub{font-size:clamp(17px,1.6vw,21px);color:var(--st-muted);margin:18px 0 0;max-width:32em;line-height:1.45}
.st-w{display:inline-block;transition:opacity .5s, transform .6s cubic-bezier(.2,.8,.2,1), filter .5s}
.st-pre .st-w{opacity:.08;transform:translateY(.25em);filter:blur(4px)}
.st-pre .st-sub,.st-pre .st-fade{opacity:0;transform:translateY(14px)}
.st-sub,.st-fade{transition:opacity .7s .35s, transform .7s .35s}
.st-beat{padding-block:clamp(56px,9vh,104px);position:relative}
.st-beat+.st-beat{border-top:1px solid var(--st-line)}

/* 30-second version */
.st-tldr{padding-block:56px 72px}
.st-tldr .st-head{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:18px}
.st-tldr .st-time{font-size:13px;color:var(--st-muted);display:inline-flex;gap:6px;align-items:center}
.st-cards{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}
.st-card{background:var(--st-surface);border:1px solid var(--st-line);border-radius:var(--st-radius);padding:22px 22px 24px;display:grid;gap:10px;align-content:start}
.st-card b{font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:var(--st-muted);font-weight:600}
.st-card p{margin:0;font-size:18px;line-height:1.4}
.st-card:nth-child(3){background:var(--st-tint);border-color:transparent}
.st-chips{display:flex;flex-wrap:wrap;gap:8px;margin-top:14px}
.st-chips span{font-size:13px;border:1px solid var(--st-line);border-radius:999px;padding:5px 12px;background:var(--st-surface)}

/* people */
.st-people{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;margin-top:34px}
.st-person{border-top:2px solid var(--st-ink);padding-top:16px;transition:opacity .6s, transform .6s}
.st-person:nth-child(2){transition-delay:.12s}.st-person:nth-child(3){transition-delay:.24s}
.st-pre .st-person{opacity:0;transform:translateY(24px)}
.st-person h4{font-family:var(--st-display);font-size:24px;margin:0 0 6px;letter-spacing:-.02em;font-weight:inherit}
.st-person p{margin:0;color:var(--st-muted);font-size:16px}

/* device frames */
.st-dev{position:relative;max-width:100%}
.st-dev img{width:100%;height:auto}
.st-dev.st-desktop{border-radius:12px;overflow:hidden;background:#fff;border:1px solid var(--st-line);box-shadow:0 30px 60px -36px rgba(0,0,0,.35)}
.st-dev.st-tablet,.st-dev.st-land{filter:drop-shadow(0 22px 28px rgba(0,0,0,.16))}
.st-dev.st-phone{width:min(300px,100%);margin:0 auto;border-radius:30px;overflow:hidden;border:1px solid var(--st-line);background:#fff;box-shadow:0 30px 60px -32px rgba(0,0,0,.3)}
.st-dev.st-doc{background:#fff;border-radius:4px;box-shadow:0 24px 50px -28px rgba(0,0,0,.4);overflow:hidden}
.st-scr{position:relative}

/* tap-through prototype */
.st-proto{display:grid;grid-template-columns:minmax(0,.7fr) minmax(0,1.3fr);gap:48px;align-items:center}
.st-proto .st-say{margin-top:26px;min-height:5.5em;font-size:18px;line-height:1.45;border-left:2px solid var(--st-accent);padding-left:16px;transition:opacity .25s}
.st-steps{display:flex;gap:6px;margin-top:22px}
.st-steps i{width:30px;height:4px;border-radius:2px;background:var(--st-line)}
.st-steps i.on{background:var(--st-accent)}
.st-pctl{display:flex;gap:8px;margin-top:18px}
.st-btn{border:1px solid var(--st-line);background:var(--st-surface);color:var(--st-ink);border-radius:999px;padding:8px 14px;font:inherit;font-size:14px;cursor:pointer}
.st-btn:hover{border-color:var(--st-ink)}
.st-scr .st-frame{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0;transition:opacity .45s}
.st-scr .st-frame.on{opacity:1}
.st-scr .st-sizer{visibility:hidden}
.st-hot{position:absolute;border:0;padding:0;background:transparent;cursor:pointer;border-radius:12px}
.st-hot:before{content:"";position:absolute;inset:-4px;border-radius:inherit;border:2px solid var(--st-accent);box-shadow:0 0 0 0 color-mix(in srgb,var(--st-accent) 50%,transparent);animation:st-ping 1.6s ease-out infinite}
.st-hot:after{content:attr(data-label);position:absolute;left:50%;bottom:calc(100% + 10px);transform:translateX(-50%);background:var(--st-ink);color:#fff;font-size:12px;padding:4px 10px;border-radius:999px;white-space:nowrap;pointer-events:none}
@keyframes st-ping{0%{box-shadow:0 0 0 0 color-mix(in srgb,var(--st-accent) 55%,transparent)}100%{box-shadow:0 0 0 18px transparent}}

/* pins */
.st-pins{display:grid;gap:30px;margin-top:40px}
.st-pins.st-side{grid-template-columns:minmax(0,1.35fr) minmax(0,.65fr);align-items:center}
.st-pin{position:absolute;width:34px;height:34px;margin:-17px 0 0 -17px;border-radius:50%;border:0;background:var(--st-accent);color:#fff;font:600 14px/34px var(--st-body);text-align:center;cursor:pointer;box-shadow:0 0 0 4px rgba(255,255,255,.85),0 8px 20px -6px rgba(0,0,0,.4);transition:transform .35s cubic-bezier(.3,1.6,.5,1), opacity .3s;padding:0}
.st-pin:before{content:"";position:absolute;inset:0;border-radius:50%;animation:st-ping 2s ease-out infinite;animation-delay:var(--d,0s)}
.st-pre .st-pin{transform:scale(0)}
.st-pin.on{transform:scale(1.25);z-index:2}
.st-pins.has-on .st-pin:not(.on){opacity:.45}
.st-tip{position:absolute;z-index:3;width:min(280px,60%);background:var(--st-ink);color:#fff;border-radius:12px;padding:12px 14px;font-size:14px;line-height:1.4;pointer-events:none;opacity:0;transform:translateY(6px);transition:opacity .2s, transform .2s}
.st-tip b{display:block;font-size:15px;margin-bottom:2px}
.st-tip.on{opacity:1;transform:none}
.st-list{list-style:none;margin:0;padding:0;display:grid;gap:8px;grid-template-columns:repeat(auto-fit,minmax(min(220px,100%),1fr))}
.st-pins.st-side .st-list{grid-template-columns:minmax(0,1fr)}
.st-list button{width:100%;text-align:left;display:grid;grid-template-columns:28px minmax(0,1fr);gap:10px;align-items:start;background:var(--st-surface);border:1px solid var(--st-line);border-radius:14px;padding:12px 14px;cursor:pointer;font:inherit;color:inherit;transition:border-color .2s, background .2s}
.st-list button i{font-style:normal;width:26px;height:26px;border-radius:50%;background:var(--st-tint);color:var(--st-accent);display:grid;place-items:center;font-weight:600;font-size:13px}
.st-list button b{display:block;font-size:15px}
.st-list button span{display:block;color:var(--st-muted);font-size:14px;line-height:1.4;margin-top:2px}
.st-list button.on{border-color:var(--st-accent);background:var(--st-tint)}
.st-list button.on i{background:var(--st-accent);color:#fff}

/* compare */
.st-cmp{position:relative;margin-top:40px;user-select:none;touch-action:pan-y}
.st-cmp .st-b{position:absolute;inset:0;clip-path:inset(0 calc(100% - var(--x,50%)) 0 0)}
.st-cmp .st-b img,.st-cmp .st-a img{width:100%;height:auto;display:block}
.st-cmp .st-bar{position:absolute;top:0;bottom:0;left:var(--x,50%);width:2px;margin-left:-1px;background:var(--st-accent);pointer-events:none}
.st-cmp .st-knob{position:absolute;top:50%;left:var(--x,50%);width:48px;height:48px;margin:-24px 0 0 -24px;border-radius:50%;background:var(--st-accent);color:#fff;display:grid;place-items:center;font-size:18px;box-shadow:0 8px 20px -6px rgba(0,0,0,.4);pointer-events:none}
.st-cmp .st-lab{position:absolute;top:14px;font-size:12px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;background:rgba(18,20,24,.82);color:#fff;padding:5px 10px;border-radius:999px;pointer-events:none}
.st-cmp .st-lab.a{right:14px}.st-cmp .st-lab.b{left:14px}
.st-cmp input{position:absolute;inset:0;width:100%;height:100%;opacity:0;cursor:ew-resize;margin:0}
.st-cmp.st-phone{width:min(300px,100%);margin-left:auto;margin-right:auto}
.st-cmp.st-phone .st-frameclip{border-radius:30px;overflow:hidden;border:1px solid var(--st-line);box-shadow:0 30px 60px -32px rgba(0,0,0,.3)}
.st-cmp.st-desktop .st-frameclip{border-radius:12px;overflow:hidden;border:1px solid var(--st-line);box-shadow:0 30px 60px -36px rgba(0,0,0,.35)}
.st-frameclip{position:relative}
.st-cmp.st-tablet .st-frameclip,.st-cmp.st-land .st-frameclip{border-radius:4.42%/9.6%;overflow:hidden;box-shadow:0 30px 50px -30px rgba(0,0,0,.35)}
.st-hint{font-size:13px;color:var(--st-muted);margin-top:12px;text-align:center}

/* strip */
.st-strip{display:flex;gap:22px;overflow-x:auto;scroll-snap-type:x mandatory;padding-block:40px 10px;scrollbar-width:thin;align-items:flex-start}
.st-strip figure{margin:0;flex:none;scroll-snap-align:center;display:grid;gap:10px}
.st-strip .st-doc{width:min(330px,72vw)} .st-strip .st-desktop{width:min(620px,84vw)} .st-strip .st-phone{width:min(250px,64vw)} .st-strip .st-tablet,.st-strip .st-land{width:min(560px,84vw)}
.st-strip figcaption{font-size:14px;color:var(--st-muted)}

/* learned */
.st-learn ol{list-style:none;margin:34px 0 0;padding:0;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(260px,100%),1fr));gap:14px}
.st-learn li{background:var(--st-surface);border:1px solid var(--st-line);border-radius:var(--st-radius);padding:22px;font-family:var(--st-display);font-size:clamp(20px,2vw,26px);line-height:1.2;letter-spacing:-.015em}
.st-learn li span{display:block;font-family:var(--st-body);font-size:12px;color:var(--st-accent);letter-spacing:.1em;text-transform:uppercase;margin-bottom:10px;font-weight:600}

/* flow: numbered steps, optional screen per step */
.st-flow{display:grid;grid-template-columns:repeat(var(--c,4),minmax(0,1fr));gap:18px;margin-top:38px}
.st-step{position:relative;background:var(--st-surface);border:1px solid var(--st-line);border-radius:var(--st-radius);padding:16px;display:grid;gap:8px;align-content:start;transition:opacity .6s, transform .6s cubic-bezier(.2,.8,.2,1)}
.st-pre .st-step{opacity:0;transform:translateY(26px)}
.st-step .st-n{font-size:12px;font-weight:600;color:var(--st-accent);letter-spacing:.1em;text-transform:uppercase}
.st-step h4{font-family:var(--st-display);font-size:21px;margin:0;letter-spacing:-.015em;font-weight:inherit;line-height:1.15}
.st-step p{margin:0;color:var(--st-muted);font-size:15px;line-height:1.4}
.st-step .st-shot{border-radius:10px;border:1px solid var(--st-line);width:100%;height:auto;margin-bottom:6px}
.st-step.st-hard{border-color:var(--st-accent);box-shadow:0 0 0 4px var(--st-tint)}
.st-tag{position:absolute;top:-11px;right:14px;background:var(--st-accent);color:#fff;font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;padding:4px 10px;border-radius:999px}
.st-note{font-size:13px;color:var(--st-muted);margin:14px 0 0}

/* chat */
.st-chat{display:grid;gap:10px;margin-top:34px;max-width:600px}
.st-msg{max-width:86%;justify-self:start;padding:12px 16px;border-radius:20px 20px 20px 6px;background:var(--st-surface);border:1px solid var(--st-line);font-size:17px;line-height:1.4;transition:opacity .4s, transform .55s cubic-bezier(.2,1.4,.4,1)}
.st-msg small{display:block;font-size:12px;color:var(--st-muted);margin-bottom:3px;font-weight:600}
.st-msg.st-me{justify-self:end;background:var(--st-accent);color:#fff;border-color:transparent;border-radius:20px 20px 6px 20px}
.st-msg.st-me small{color:rgba(255,255,255,.78)}
.st-pre .st-msg{opacity:0;transform:translateY(16px) scale(.94)}

/* stamps: big facts */
.st-stamps{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(220px,100%),1fr));gap:14px;margin-top:34px}
.st-stamp{border-radius:var(--st-radius);background:var(--st-tint);padding:24px 22px;transition:opacity .5s, transform .7s cubic-bezier(.3,1.5,.5,1)}
.st-stamp b{display:block;font-family:var(--st-display);font-size:clamp(30px,3.4vw,46px);line-height:1;letter-spacing:-.03em;color:var(--st-accent);font-weight:inherit}
.st-stamp span{display:block;margin-top:10px;font-size:15px;line-height:1.35}
.st-pre .st-stamp{opacity:0;transform:scale(.82) rotate(-3deg)}

/* choice: kept vs cut */
.st-choice{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(240px,100%),1fr));gap:14px;margin-top:34px}
.st-opt{border:1px solid var(--st-line);background:var(--st-surface);border-radius:var(--st-radius);padding:20px;transition:opacity .5s, transform .5s}
.st-opt em{font-style:normal;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:4px 10px;border-radius:999px;background:var(--st-tint);color:var(--st-accent)}
.st-opt h4{font-family:var(--st-display);font-size:22px;margin:12px 0 6px;font-weight:inherit;letter-spacing:-.015em;line-height:1.15}
.st-opt p{margin:0;color:var(--st-muted);font-size:15px;line-height:1.4}
.st-opt.st-cut{background:transparent;border-style:dashed}
.st-opt.st-cut h4{text-decoration:line-through;text-decoration-thickness:2px;text-decoration-color:#d9432b;color:var(--st-muted)}
.st-opt.st-cut em{background:#fde4df;color:#b8321c}
.st-pre .st-opt{opacity:0;transform:translateY(18px)}
.st-chips span.st-status{background:var(--st-accent);color:#fff;border-color:transparent;font-weight:600}

@media (max-width:1024px){ .st-flow{grid-template-columns:repeat(min(var(--c,4),2),minmax(0,1fr))} }
@media (max-width:600px){ .st-flow{grid-template-columns:minmax(0,1fr)} }

@media (max-width:820px){
  .st-cards,.st-people,.st-proto,.st-pins.st-side{grid-template-columns:minmax(0,1fr)}
  .st-proto{gap:28px}
  .st-proto .st-say{min-height:0}
  .st-tip{display:none}
}
@media (prefers-reduced-motion:reduce){ .st *{transition:none!important;animation:none!important} }
`;
  function css() { if (document.getElementById('st-css')) return; const s = document.createElement('style'); s.id = 'st-css'; s.textContent = CSS; document.head.appendChild(s); }
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const words = t => esc(t).split(' ').map((w, i) => `<span class="st-w" style="transition-delay:${(i * 0.045).toFixed(3)}s">${w}</span>`).join(' ');

  function render(root, p, o) {
    css();
    const img = o.img, dims = o.dims;
    const scr = (src, frame, inner = '') => `<div class="st-dev st-${frame}"><div class="st-scr"><img src="${img(src)}" alt="" loading="lazy" width="${dims[src][0]}" height="${dims[src][1]}">${inner}</div></div>`;
    const html = [];
    const t = p.tldr;
    html.push(`<section class="st-tldr st-wrap st-rv"><div class="st-head"><span class="st-k">The 30-second version</span><span class="st-time">${p.beats.length} scenes · about 2 minutes</span></div>
      <div class="st-cards"><div class="st-card"><b>Problem</b><p>${esc(t.problem)}</p></div><div class="st-card"><b>What I did</b><p>${esc(t.did)}</p></div><div class="st-card"><b>Result</b><p>${esc(t.result)}</p></div></div>
      <div class="st-chips">${p.status ? `<span class="st-status">${esc(p.status)}</span>` : ''}<span>${esc(p.role)}</span><span>${esc(p.platform)}</span><span>${esc(p.year)}</span></div></section>`);
    p.beats.forEach((b, bi) => {
      const head = `<span class="st-k">${esc(b.kicker)}</span><h3 class="${b.type === 'line' ? 'st-big' : 'st-mid'}">${words(b.line)}</h3>`;
      if (b.type === 'line') html.push(`<section class="st-beat st-wrap st-rv">${head}${b.sub ? `<p class="st-sub">${esc(b.sub)}</p>` : ''}</section>`);
      if (b.type === 'people') html.push(`<section class="st-beat st-wrap st-rv">${head}<div class="st-people">${b.items.map(([h, d]) => `<div class="st-person"><h4>${esc(h)}</h4><p>${esc(d)}</p></div>`).join('')}</div></section>`);
      if (b.type === 'proto') {
        const first = b.screens[0];
        const frames = b.screens.map((s, i) => `<img class="st-frame ${i ? '' : 'on'}" src="${img(s.src)}" alt="" ${i ? 'loading="lazy"' : ''}>`).join('');
        html.push(`<section class="st-beat st-wrap st-rv" data-proto="${bi}"><div class="st-proto"><div>${head}
            <div class="st-steps">${b.screens.map((_, i) => `<i class="${i ? '' : 'on'}"></i>`).join('')}</div>
            <p class="st-say st-fade">${esc(first.say)}</p>
            <div class="st-pctl"><button class="st-btn" type="button" data-pv="-1">← Back</button><button class="st-btn" type="button" data-pv="1">Next →</button></div></div>
          <div class="st-dev st-${b.frame}"><div class="st-scr"><img class="st-sizer" src="${img(first.src)}" alt="" width="${dims[first.src][0]}" height="${dims[first.src][1]}">${frames}
            <button class="st-hot" type="button" aria-label="Tap here" data-label="Tap" style="left:${first.hot.x * 100}%;top:${first.hot.y * 100}%;width:${first.hot.w * 100}%;height:${first.hot.h * 100}%"></button></div></div></div></section>`);
      }
      if (b.type === 'pins') {
        const [w, h] = dims[b.src]; const side = b.frame !== 'desktop';
        const pins = b.pins.map((q, i) => `<button class="st-pin" type="button" data-i="${i}" style="left:${q.x * 100}%;top:${q.y * 100}%;--d:${(i * .3).toFixed(1)}s;transition-delay:${(.15 + i * .09).toFixed(2)}s" aria-label="${esc(q.t)}">${i + 1}</button>`).join('');
        html.push(`<section class="st-beat st-wrap st-rv">${head}<div class="st-pins ${side ? 'st-side' : ''}" data-pins>
          ${scr(b.src, b.frame, pins + '<div class="st-tip"></div>')}
          <ol class="st-list">${b.pins.map((q, i) => `<li><button type="button" data-i="${i}"><i>${i + 1}</i><div><b>${esc(q.t)}</b><span>${esc(q.d)}</span></div></button></li>`).join('')}</ol></div></section>`);
      }
      if (b.type === 'compare') {
        html.push(`<section class="st-beat st-wrap st-rv">${head}<div class="st-cmp st-${b.frame}" style="--x:50%"><div class="st-frameclip">
            <div class="st-a"><img src="${img(b.b.src)}" alt="${esc(b.b.label)}" loading="lazy"></div>
            <div class="st-b"><img src="${img(b.a.src)}" alt="${esc(b.a.label)}" loading="lazy"></div>
            <div class="st-bar"></div><div class="st-knob">⇆</div><span class="st-lab b">${esc(b.a.label)}</span><span class="st-lab a">${esc(b.b.label)}</span>
            <input type="range" min="0" max="100" value="50" aria-label="Compare ${esc(b.a.label)} and ${esc(b.b.label)}"></div></div>
          <p class="st-hint">Drag the handle</p></section>`);
      }
      const dl = (i, base = .1, step = .14) => `transition-delay:${(base + i * step).toFixed(2)}s`;
      if (b.type === 'flow') html.push(`<section class="st-beat st-wrap st-rv">${head}<div class="st-flow" style="--c:${b.cols || b.steps.length}">${b.steps.map((s, i) => `<div class="st-step ${i === b.hard ? 'st-hard' : ''}" style="${dl(i)}">${i === b.hard ? `<span class="st-tag">${esc(b.hardLabel || 'The hard part')}</span>` : ''}${s.src ? `<img class="st-shot" src="${img(s.src)}" alt="" loading="lazy" width="${dims[s.src][0]}" height="${dims[s.src][1]}">` : ''}<span class="st-n">Step ${i + 1}</span><h4>${esc(s.t)}</h4>${s.d ? `<p>${esc(s.d)}</p>` : ''}</div>`).join('')}</div>${b.note ? `<p class="st-note">${esc(b.note)}</p>` : ''}</section>`);
      if (b.type === 'chat') html.push(`<section class="st-beat st-wrap st-rv">${head}<div class="st-chat">${b.msgs.map((m, i) => `<div class="st-msg ${m.me ? 'st-me' : ''}" style="${dl(i, .3, .55)}"><small>${esc(m.from)}</small>${esc(m.t)}</div>`).join('')}</div></section>`);
      if (b.type === 'stamps') html.push(`<section class="st-beat st-wrap st-rv">${head}<div class="st-stamps">${b.items.map(([big, sm], i) => `<div class="st-stamp" style="${dl(i, .15, .12)}"><b>${esc(big)}</b><span>${esc(sm)}</span></div>`).join('')}</div></section>`);
      if (b.type === 'choice') html.push(`<section class="st-beat st-wrap st-rv">${head}<div class="st-choice">${b.items.map((c, i) => `<div class="st-opt ${c.cut ? 'st-cut' : ''}" style="${dl(i)}"><em>${c.cut ? 'Cut' : 'Kept'}</em><h4>${esc(c.t)}</h4><p>${esc(c.d)}</p></div>`).join('')}</div></section>`);
      if (b.type === 'strip') html.push(`<section class="st-beat st-wrap st-rv">${head}<div class="st-strip">${b.shots.map(s => `<figure class="st-${s.frame}">${scr(s.src, s.frame)}<figcaption>${esc(s.cap)}</figcaption></figure>`).join('')}</div></section>`);
    });
    if (p.learned && p.learned.length) html.push(`<section class="st-beat st-wrap st-learn st-rv"><span class="st-k">What I took away</span><ol>${p.learned.map((l, i) => `<li><span>Lesson ${i + 1}</span>${esc(l)}</li>`).join('')}</ol></section>`);
    root.classList.add('st'); root.innerHTML = html.join('');

    // reveal
    const scrollRoot = o.scrollRoot || null;
    let io = null;
    if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
      io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.remove('st-pre'); io.unobserve(e.target); } }), { root: scrollRoot, threshold: .18, rootMargin: '0px 0px -8% 0px' });
      root.querySelectorAll('.st-rv').forEach(n => { if (n.getBoundingClientRect().top > innerHeight * .9) { n.classList.add('st-pre'); io.observe(n); } });
    }

    // prototypes
    root.querySelectorAll('[data-proto]').forEach(sec => {
      const b = p.beats[+sec.dataset.proto]; let i = 0;
      const frames = sec.querySelectorAll('.st-frame'), hot = sec.querySelector('.st-hot'), say = sec.querySelector('.st-say'), steps = sec.querySelectorAll('.st-steps i');
      const go = n => { i = (n + b.screens.length) % b.screens.length; const s = b.screens[i];
        frames.forEach((f, k) => f.classList.toggle('on', k === i)); steps.forEach((st, k) => st.classList.toggle('on', k <= i));
        say.style.opacity = 0; setTimeout(() => { say.textContent = s.say; say.style.opacity = 1; }, 180);
        Object.assign(hot.style, { left: s.hot.x * 100 + '%', top: s.hot.y * 100 + '%', width: s.hot.w * 100 + '%', height: s.hot.h * 100 + '%' });
        hot.dataset.label = i === b.screens.length - 1 ? 'Tap to start over' : 'Tap'; };
      hot.addEventListener('click', () => go(i + 1));
      sec.querySelectorAll('[data-pv]').forEach(btn => btn.addEventListener('click', () => go(i + +btn.dataset.pv)));
    });

    // pins
    root.querySelectorAll('[data-pins]').forEach(box => {
      const bi = [...root.querySelectorAll('[data-pins]')].indexOf(box);
      const beat = p.beats.filter(b => b.type === 'pins')[bi];
      const pins = box.querySelectorAll('.st-pin'), items = box.querySelectorAll('.st-list button'), tip = box.querySelector('.st-tip');
      let cur = -1;
      const set = (n, show) => { cur = n; box.classList.toggle('has-on', n >= 0);
        pins.forEach((q, k) => q.classList.toggle('on', k === n)); items.forEach((q, k) => q.classList.toggle('on', k === n));
        if (n >= 0 && show && innerWidth > 820) { const q = beat.pins[n]; tip.innerHTML = `<b>${esc(q.t)}</b>${esc(q.d)}`;
          tip.style.left = Math.min(q.x * 100, 62) + '%'; tip.style.top = `calc(${q.y * 100}% + ${q.y > .7 ? -110 : 26}px)`; tip.classList.add('on'); }
        else tip.classList.remove('on'); };
      pins.forEach((q, k) => { q.addEventListener('mouseenter', () => set(k, true)); q.addEventListener('focus', () => set(k, true)); q.addEventListener('click', () => set(cur === k ? -1 : k, true)); });
      items.forEach((q, k) => { q.addEventListener('mouseenter', () => set(k, false)); q.addEventListener('click', () => set(cur === k ? -1 : k, false)); });
      box.addEventListener('mouseleave', () => set(-1));
    });

    // compare
    root.querySelectorAll('.st-cmp').forEach(c => { const r = c.querySelector('input'); r.addEventListener('input', () => c.style.setProperty('--x', r.value + '%')); });
    return { destroy() { io && io.disconnect(); } };
  }
  window.Story = { render };
})();
