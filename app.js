// ============================================================
// APP LOGIC
// ============================================================

const STORAGE_KEY = "dsai_course_progress_v1";

function defaultState(){
  return {
    completedLessons: {},
    openModules: {},
    xpAwarded: {},      // lessonId -> xp already granted (prevents double-award)
    streak: 0,
    lastActiveDate: null, // YYYY-MM-DD, local date
    certName: ""
  };
}

function loadProgress(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    return Object.assign(defaultState(), parsed); // fills in any new fields missing from older saves
  }catch(e){
    return defaultState();
  }
}
function saveProgress(){
  try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }catch(e){}
}

let state = loadProgress();
let currentLessonId = null; // e.g. "1.3"
let currentQuizAnswers = {}; // qIndex -> selectedOption (for current lesson session)

// ---------- Gamification ----------
const XP_PER_LESSON = 20;
const XP_PER_CORRECT = 5;

const LEVELS = [
  { min: 0,   name: "शुरुआती",      en: "Beginner" },
  { min: 100, name: "सीखने वाला",   en: "Learner"  },
  { min: 260, name: "Explorer",     en: "Explorer" },
  { min: 440, name: "Pro",          en: "Pro"      },
  { min: 620, name: "Master",       en: "Master"   }
];

function totalXP(){
  return Object.values(state.xpAwarded).reduce((a, b) => a + b, 0);
}
function currentLevel(){
  const xp = totalXP();
  let lvl = LEVELS[0];
  for(const l of LEVELS){ if(xp >= l.min) lvl = l; }
  return lvl;
}
function nextLevel(){
  const xp = totalXP();
  return LEVELS.find(l => l.min > xp) || null;
}

function todayStr(){
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
}
function daysBetween(a, b){
  const d1 = new Date(a + "T00:00:00");
  const d2 = new Date(b + "T00:00:00");
  return Math.round((d2 - d1) / 86400000);
}
function bumpStreak(){
  const today = todayStr();
  if(state.lastActiveDate === today) return; // already counted today
  if(state.lastActiveDate && daysBetween(state.lastActiveDate, today) === 1){
    state.streak += 1;
  }else{
    state.streak = 1;
  }
  state.lastActiveDate = today;
}

function moduleBadges(){
  return COURSE.modules
    .filter(mod => mod.lessons.every(l => isDone(l.id)))
    .map(mod => ({ id: mod.id, label: `Module ${mod.num}`, title: mod.title }));
}

const allLessons = [];
COURSE.modules.forEach(m => m.lessons.forEach(l => allLessons.push({ moduleId: m.id, moduleNum: m.num, ...l })));

function totalLessons(){ return allLessons.length; }
function completedCount(){ return Object.keys(state.completedLessons).length; }
function isDone(lessonId){ return !!state.completedLessons[lessonId]; }

function moduleCompletedCount(mod){
  return mod.lessons.filter(l => isDone(l.id)).length;
}

// ---------- DOM refs ----------
const sidebarEl = document.getElementById("sidebar");
const navModulesEl = document.getElementById("navModules");
const viewEl = document.getElementById("view");
const overallPctEl = document.getElementById("overallPct");
const overallBarEl = document.getElementById("overallBar");
const crumbEl = document.getElementById("crumb");
const toastEl = document.getElementById("toast");
const scrimEl = document.getElementById("sidebarScrim");
const mobileToggle = document.getElementById("mobileToggle");

// ---------- Sidebar rendering ----------
function renderSidebar(){
  navModulesEl.innerHTML = "";
  COURSE.modules.forEach(mod => {
    const isOpen = !!state.openModules[mod.id];
    const doneCount = moduleCompletedCount(mod);
    const allDone = doneCount === mod.lessons.length;

    const block = document.createElement("div");
    block.className = "module-block" + (isOpen ? " open" : "") + (allDone ? " complete" : "");

    const head = document.createElement("button");
    head.className = "module-head";
    head.innerHTML = `
      <span class="module-num">${mod.num}</span>
      <span class="module-title">${mod.title}</span>
      <span class="module-caret">▶</span>
    `;
    head.addEventListener("click", () => {
      state.openModules[mod.id] = !isOpen;
      saveProgress();
      renderSidebar();
    });
    block.appendChild(head);

    const list = document.createElement("div");
    list.className = "lesson-list";
    mod.lessons.forEach(les => {
      const item = document.createElement("button");
      const active = les.id === currentLessonId;
      item.className = "lesson-item" + (isDone(les.id) ? " done" : "") + (active ? " active" : "");
      item.innerHTML = `<span class="lesson-dot"></span><span>${les.id} ${les.title}</span>`;
      item.addEventListener("click", () => {
        if(window.innerWidth <= 860){ closeSidebar(); }
        openLesson(les.id);
      });
      list.appendChild(item);
    });
    block.appendChild(list);
    navModulesEl.appendChild(block);
  });

  const pct = Math.round((completedCount() / totalLessons()) * 100);
  overallPctEl.textContent = pct + "%";
  overallBarEl.style.width = pct + "%";

  renderStatsRow();
}

function renderStatsRow(){
  const statsEl = document.getElementById("statsRow");
  if(!statsEl) return;
  const lvl = currentLevel();
  const xp = totalXP();
  const streak = state.streak || 0;
  statsEl.innerHTML = `
    <div class="stat-chip" title="XP">
      <span class="stat-ic">★</span><span class="stat-val">${xp} XP</span>
    </div>
    <div class="stat-chip" title="Level">
      <span class="stat-ic">◆</span><span class="stat-val">${lvl.name}</span>
    </div>
    <div class="stat-chip" title="Daily Streak">
      <span class="stat-ic">🔥</span><span class="stat-val">${streak}</span>
    </div>
  `;
}

// ---------- Mobile sidebar ----------
function openSidebar(){ sidebarEl.classList.add("open"); scrimEl.classList.add("show"); }
function closeSidebar(){ sidebarEl.classList.remove("open"); scrimEl.classList.remove("show"); }
mobileToggle.addEventListener("click", openSidebar);
scrimEl.addEventListener("click", closeSidebar);

// ---------- Toast ----------
let toastTimer = null;
function showToast(msg){
  toastEl.textContent = msg;
  toastEl.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2200);
}

// ---------- Neural network signature visual ----------
function renderNetworkVisual(){
  const layers = COURSE.modules.map(m => m.lessons.map(l => ({ id: l.id, done: isDone(l.id) })));
  const W = 760, H = 220;
  const layerGap = W / (layers.length + 1);
  const positions = {}; // id -> {x,y}

  layers.forEach((layer, li) => {
    const x = layerGap * (li + 1);
    const gap = H / (layer.length + 1);
    layer.forEach((node, ni) => {
      positions[node.id] = { x, y: gap * (ni + 1) };
    });
  });

  let edges = "";
  for(let li = 0; li < layers.length - 1; li++){
    layers[li].forEach(a => {
      layers[li+1].forEach(b => {
        const pa = positions[a.id], pb = positions[b.id];
        const bothDone = a.done && b.done;
        edges += `<line class="net-edge" x1="${pa.x}" y1="${pa.y}" x2="${pb.x}" y2="${pb.y}"
          stroke="${bothDone ? 'var(--gold)' : 'var(--border)'}" stroke-width="${bothDone ? 1.4 : 1}"
          opacity="${bothDone ? 0.55 : 0.35}" />`;
      });
    });
  }

  let nodes = "";
  layers.forEach(layer => {
    layer.forEach(node => {
      const p = positions[node.id];
      nodes += `<circle class="net-node" cx="${p.x}" cy="${p.y}" r="${node.done ? 7 : 5.5}"
        fill="${node.done ? 'var(--gold)' : 'var(--surface-2)'}"
        stroke="${node.done ? 'var(--gold)' : 'var(--text-mute)'}" stroke-width="1.5" />`;
    });
  });

  return `<svg class="network-svg" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">${edges}${nodes}</svg>`;
}

// ---------- Views ----------
function renderDashboard(){
  currentLessonId = null;
  crumbEl.innerHTML = `<b>Dashboard</b>`;
  const pct = Math.round((completedCount() / totalLessons()) * 100);
  const lvl = currentLevel();
  const nxt = nextLevel();
  const xp = totalXP();
  const badges = moduleBadges();

  const cards = COURSE.modules.map(mod => {
    const done = moduleCompletedCount(mod);
    const p = Math.round((done / mod.lessons.length) * 100);
    const earned = done === mod.lessons.length;
    return `
      <div class="module-card${earned ? ' earned' : ''}" data-mod="${mod.id}">
        <div class="mc-top">
          <span class="mc-num">Module ${mod.num}</span>
          ${earned ? '<span class="mc-trophy" title="Badge earned">🏅</span>' : ''}
        </div>
        <div class="mc-title">${mod.title}</div>
        <div class="bar-track"><div class="bar-fill" style="width:${p}%"></div></div>
        <div class="mc-frac">${done}/${mod.lessons.length} lessons</div>
      </div>
    `;
  }).join("");

  const badgesHtml = badges.length
    ? badges.map(b => `<span class="badge-chip" title="${b.title}">🏅 ${b.label}</span>`).join("")
    : `<span class="badge-empty">अभी कोई Badge नहीं — कोई भी Module पूरा करके पहला Badge पाएं</span>`;

  viewEl.innerHTML = `
    <div class="dash-hero">
      <h1>Data Science, AI &amp; Machine Learning</h1>
      <p>पूरा कोर्स हिंदी में समझाया गया है — ${totalLessons()} lessons, ${COURSE.modules.length} modules। अभी तक आपने <b style="color:var(--gold)">${pct}%</b> कोर्स पूरा किया है।</p>

      <div class="gamify-strip">
        <div class="gm-card">
          <div class="gm-label">XP</div>
          <div class="gm-value">${xp}</div>
        </div>
        <div class="gm-card">
          <div class="gm-label">Level</div>
          <div class="gm-value">${lvl.name}</div>
          ${nxt ? `<div class="gm-sub">${nxt.min - xp} XP → ${nxt.name}</div>` : `<div class="gm-sub">Top Level! 🎉</div>`}
        </div>
        <div class="gm-card">
          <div class="gm-label">Daily Streak</div>
          <div class="gm-value">🔥 ${state.streak || 0}</div>
        </div>
      </div>

      <div class="badges-strip">${badgesHtml}</div>

      <div class="network-card">
        <div class="cap">Progress Network — हर Node एक Lesson है</div>
        ${renderNetworkVisual()}
      </div>
      <div class="module-cards">${cards}</div>
    </div>
  `;

  viewEl.querySelectorAll(".module-card").forEach(card => {
    card.addEventListener("click", () => {
      const mod = COURSE.modules.find(m => m.id === card.dataset.mod);
      state.openModules[mod.id] = true;
      saveProgress();
      openLesson(mod.lessons[0].id);
    });
  });
}

function findLesson(id){
  for(const mod of COURSE.modules){
    const les = mod.lessons.find(l => l.id === id);
    if(les) return { mod, les };
  }
  return null;
}

function openLesson(id){
  const found = findLesson(id);
  if(!found) return;
  currentLessonId = id;
  currentQuizAnswers = {};
  state.openModules[found.mod.id] = true;
  saveProgress();
  renderLesson(found.mod, found.les);
  renderSidebar();
  viewEl.scrollTo?.(0,0);
  window.scrollTo(0,0);
}

function renderLesson(mod, les){
  crumbEl.innerHTML = `<b>Module ${mod.num}</b> · ${les.id} ${les.title}`;

  const paras = les.content.map(p => `<p>${p}</p>`).join("");
  const kps = les.keyPoints.map(k => `<li>${k}</li>`).join("");

  const quizHtml = les.quiz.map((q, qi) => {
    const opts = q.options.map((opt, oi) => `
      <button class="quiz-opt" data-q="${qi}" data-o="${oi}">${opt}</button>
    `).join("");
    return `
      <div class="quiz-q" data-qblock="${qi}">
        <div class="qtext">${qi+1}. ${q.q}</div>
        <div class="quiz-opts">${opts}</div>
      </div>
    `;
  }).join("");

  const done = isDone(les.id);
  const idx = allLessons.findIndex(l => l.id === les.id);
  const prevLesson = idx > 0 ? allLessons[idx-1] : null;
  const nextLesson = idx < allLessons.length - 1 ? allLessons[idx+1] : null;

  viewEl.innerHTML = `
    <div class="lesson-header">
      <div class="lesson-eyebrow">Lesson ${les.id}</div>
      <h1>${les.title}</h1>
      <div class="lesson-meta">~${les.minutes} min read</div>
    </div>
    <div class="lesson-body">${paras}</div>
    <div class="key-points">
      <div class="kp-title">मुख्य बातें</div>
      <ul>${kps}</ul>
    </div>
    <div class="quiz-block">
      <div class="qb-title">✎ Quick Quiz</div>
      ${quizHtml}
    </div>
    <div class="lesson-actions">
      <div class="nav-arrows">
        <button class="btn secondary" id="prevBtn" ${prevLesson ? "" : "disabled"}>← पिछला</button>
        <button class="btn secondary" id="nextBtn" ${nextLesson ? "" : "disabled"}>अगला →</button>
      </div>
      <button class="btn ${done ? 'done' : ''}" id="completeBtn">${done ? '✓ Complete हो चुका है' : 'Lesson Complete करें'}</button>
    </div>
  `;

  // quiz interactivity
  viewEl.querySelectorAll(".quiz-opt").forEach(btn => {
    btn.addEventListener("click", () => {
      const qi = +btn.dataset.q;
      const oi = +btn.dataset.o;
      const question = les.quiz[qi];
      currentQuizAnswers[qi] = oi;

      const block = viewEl.querySelector(`.quiz-q[data-qblock="${qi}"]`);
      block.querySelectorAll(".quiz-opt").forEach(o => {
        o.disabled = true;
        o.classList.remove("selected");
        const oIdx = +o.dataset.o;
        if(oIdx === question.answer) o.classList.add("correct");
        else if(oIdx === oi) o.classList.add("wrong");
      });
    });
  });

  document.getElementById("prevBtn")?.addEventListener("click", () => prevLesson && openLesson(prevLesson.id));
  document.getElementById("nextBtn")?.addEventListener("click", () => nextLesson && openLesson(nextLesson.id));

  document.getElementById("completeBtn").addEventListener("click", () => {
    if(isDone(les.id)){
      delete state.completedLessons[les.id];
    }else{
      const wasModuleDoneBefore = mod.lessons.every(l => isDone(l.id));
      state.completedLessons[les.id] = true;

      if(!state.xpAwarded[les.id]){
        const correct = les.quiz.reduce((n, q, qi) => n + (currentQuizAnswers[qi] === q.answer ? 1 : 0), 0);
        state.xpAwarded[les.id] = XP_PER_LESSON + correct * XP_PER_CORRECT;
      }
      bumpStreak();

      const moduleDoneNow = mod.lessons.every(l => isDone(l.id));
      if(moduleDoneNow && !wasModuleDoneBefore){
        showToast(`🏅 Badge मिला — "${mod.title}" पूरा!`);
      }else{
        showToast(`+${state.xpAwarded[les.id]} XP — Lesson complete हो गया 🎉`);
      }
    }
    saveProgress();
    renderSidebar();
    renderLesson(mod, les);
  });
}

// ---------- Certificate ----------
function renderCertificate(){
  currentLessonId = null;
  crumbEl.innerHTML = `<b>Certificate</b>`;
  const done = completedCount();
  const total = totalLessons();
  const pct = Math.round((done / total) * 100);
  const complete = done === total;

  if(!complete){
    viewEl.innerHTML = `
      <div class="dash-hero">
        <h1>Certificate</h1>
        <div class="cert-locked">
          <div class="cl-icon">🔒</div>
          <h2>Certificate अभी Lock है</h2>
          <p>Certificate पाने के लिए सभी ${total} lessons complete करने होंगे। अभी तक आपने ${done}/${total} lessons पूरे किए हैं।</p>
          <div class="bar-track"><div class="bar-fill" style="width:${pct}%"></div></div>
          <div class="cl-pct" style="margin-top:8px;">${pct}% पूरा</div>
        </div>
      </div>
    `;
    return;
  }

  const savedName = state.certName || "";
  viewEl.innerHTML = `
    <div class="dash-hero">
      <h1>🎉 बधाई हो! आपने पूरा कोर्स Complete कर लिया</h1>
      <p>नीचे अपना नाम डालें और अपना Certificate तैयार करें।</p>
      <div class="cert-form">
        <input type="text" id="certNameInput" placeholder="अपना पूरा नाम लिखें" value="${savedName}">
        <button class="btn" id="genCertBtn">Certificate बनाएं</button>
      </div>
      <div id="certOutput" style="margin-top:26px;"></div>
    </div>
  `;

  const renderCertBody = (name) => {
    const dateStr = new Date().toLocaleDateString("hi-IN", { year: "numeric", month: "long", day: "numeric" });
    document.getElementById("certOutput").innerHTML = `
      <div class="certificate" id="certificatePrintArea">
        <div class="cert-eyebrow">Certificate of Completion</div>
        <h2>Data Science, AI &amp; Machine Learning</h2>
        <div class="cert-sub">पूर्णता प्रमाण पत्र</div>
        <div class="cert-name">${name || "आपका नाम"}</div>
        <div class="cert-body-text">
          ने Data Science, AI &amp; Machine Learning कोर्स के सभी ${total} lessons — ${COURSE.modules.length} modules के साथ — सफलतापूर्वक पूरे किए हैं।
        </div>
        <div class="cert-footer">
          <div class="cf-item">Date<b>${dateStr}</b></div>
          <div class="cert-seal">DS·AI</div>
          <div class="cf-item">Modules Completed<b>${COURSE.modules.length}/${COURSE.modules.length}</b></div>
        </div>
      </div>
      <div class="cert-actions">
        <button class="btn" id="printCertBtn">Print / Save as PDF</button>
      </div>
    `;
    document.getElementById("printCertBtn").addEventListener("click", () => window.print());
  };

  renderCertBody(savedName);

  document.getElementById("genCertBtn").addEventListener("click", () => {
    const name = document.getElementById("certNameInput").value.trim();
    state.certName = name;
    saveProgress();
    renderCertBody(name);
  });
}

// ---------- Init ----------
document.getElementById("logoBtn").addEventListener("click", renderDashboard);
document.getElementById("certBtn").addEventListener("click", () => {
  if(window.innerWidth <= 860){ closeSidebar(); }
  renderCertificate();
});
renderSidebar();
renderDashboard();
