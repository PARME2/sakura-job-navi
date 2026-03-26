/* ============================================
   さくらしごとナビ - インターン提案AI
   ============================================ */

// --- さくら市インターンシッププログラム ---
const INTERNSHIPS = [
  {
    id: 1,
    title: "食品製造の衛生管理を学ぶ ― 安心・安全な食品づくりの現場体験",
    company: "株式会社荒井食品",
    companyId: 1,
    category: "製造・技術",
    tags: ["食品製造", "品質管理", "衛生管理"],
    description: "食品製造の現場で、衛生管理・品質管理のプロセスを体験。原材料の受入検査から製造、出荷までの一連の流れを学び、安心・安全な食品がどう作られるかを肌で感じられます。",
    skills: [
      { name: "品質管理", value: 90 },
      { name: "衛生管理", value: 85 },
      { name: "チームワーク", value: 80 }
    ],
    phases: ["工場見学・衛生管理研修", "製造工程の体験", "品質データの収集・分析", "改善提案・成果発表"]
  },
  {
    id: 2,
    title: "街をつくる現場へ ― 建設プロジェクトの施工管理体験",
    company: "株式会社荒牧組",
    companyId: 2,
    category: "建設・技術",
    tags: ["施工管理", "ものづくり", "チームワーク"],
    description: "さくら市内の建設現場で施工管理補助を体験。工程管理、安全管理、品質チェックの実務を通じて、街のインフラがどう作られるかを学びます。",
    skills: [
      { name: "プロジェクト管理", value: 85 },
      { name: "安全管理", value: 90 },
      { name: "チームワーク", value: 85 }
    ],
    phases: ["安全研修・現場見学", "施工管理補助・日報作成", "品質チェック体験", "工程改善提案・振り返り"]
  },
  {
    id: 3,
    title: "暮らしを支えるものづくり ― 紙製品の大規模製造ラインを体感",
    company: "エリエールプロダクト株式会社",
    companyId: 3,
    category: "製造・技術",
    tags: ["大手メーカー", "製造技術", "品質管理"],
    description: "大王製紙グループの工場で、ティッシュ・トイレットペーパーの大規模製造ラインを体験。品質管理や生産効率の改善手法を学び、暮らしを支えるものづくりの現場を知ります。",
    skills: [
      { name: "製造技術", value: 85 },
      { name: "品質管理", value: 90 },
      { name: "データ分析", value: 80 }
    ],
    phases: ["工場見学・製造工程理解", "品質検査体験", "生産データ分析", "効率改善提案・発表"]
  },
  {
    id: 4,
    title: "建設現場を足場から支える ― 仮設資材リースの営業体験",
    company: "カセツリース株式会社",
    companyId: 4,
    category: "営業・接客",
    tags: ["営業", "建設業界", "提案力"],
    description: "建設用仮設資材のリース会社で、営業の仕事を体験。現場のニーズをヒアリングし、最適な資材を提案する一連の流れを学びます。",
    skills: [
      { name: "営業力", value: 85 },
      { name: "提案力", value: 80 },
      { name: "コミュニケーション", value: 90 }
    ],
    phases: ["資材知識研修・倉庫見学", "営業同行・現場ヒアリング", "提案書作成", "プレゼン・振り返り"]
  },
  {
    id: 5,
    title: "健康食品の商品企画 ― 海藻加工食品の新商品を考えよう",
    company: "株式会社壮関",
    companyId: 5,
    category: "商品開発・起業",
    tags: ["食品開発", "マーケティング", "企画"],
    description: "茎わかめ・おしゃぶり昆布で知られる壮関で、健康志向の新商品を企画。市場調査から試作、プレゼンまで商品開発の一連の流れを体験します。",
    skills: [
      { name: "商品企画", value: 90 },
      { name: "マーケティング", value: 85 },
      { name: "プレゼン力", value: 80 }
    ],
    phases: ["商品知識研修・市場調査", "新商品アイデア立案", "試作・評価", "企画プレゼン・フィードバック"]
  },
  {
    id: 6,
    title: "産業を支える鋼管づくり ― 金属加工の製造技術を体験",
    company: "大和鋼管工業株式会社",
    companyId: 6,
    category: "製造・技術",
    tags: ["金属加工", "ものづくり", "品質管理"],
    description: "鋼管パイプの製造工程を体験。原材料から製品になるまでの加工技術と品質管理を学び、産業を支えるものづくりの現場を知ります。",
    skills: [
      { name: "製造技術", value: 85 },
      { name: "品質管理", value: 90 },
      { name: "安全管理", value: 80 }
    ],
    phases: ["工場見学・安全研修", "製造工程体験", "品質検査・データ分析", "改善提案・成果発表"]
  },
  {
    id: 7,
    title: "物流を支えるパッケージ ― 段ボール製品の設計・製造を体験",
    company: "大日本パックス株式会社",
    companyId: 7,
    category: "製造・技術",
    tags: ["包装", "設計", "ものづくり"],
    description: "段ボールケースの設計から製造までを体験。お客様の商品を安全に届けるための包装設計の工夫や、効率的な製造工程を学びます。",
    skills: [
      { name: "設計力", value: 85 },
      { name: "製造技術", value: 80 },
      { name: "課題解決力", value: 85 }
    ],
    phases: ["包装知識研修・工場見学", "段ボール設計体験", "製造工程体験", "オリジナル包装企画・発表"]
  },
  {
    id: 8,
    title: "快適な空間を創る ― 空調ダクトの設計・施工を体験",
    company: "株式会社中川製作所",
    companyId: 8,
    category: "建設・技術",
    tags: ["設備", "設計", "施工"],
    description: "空調用ダクトの設計から製造・施工までを一貫して体験。図面の読み方から現場での施工まで、建物の快適な空間を技術力で創る仕事を学びます。",
    skills: [
      { name: "設計力", value: 85 },
      { name: "施工管理", value: 80 },
      { name: "技術力", value: 90 }
    ],
    phases: ["ダクト技術研修・図面理解", "設計体験", "製造・施工見学", "設計提案・振り返り"]
  },
  {
    id: 9,
    title: "精密加工の世界 ― 自動車部品の品質を支える技術体験",
    company: "中山金属化工株式会社",
    companyId: 9,
    category: "製造・技術",
    tags: ["精密加工", "自動車", "品質管理"],
    description: "自動車部品の精密加工現場を体験。ミクロン単位の精度を求められる金属加工技術と品質管理の厳しさを学び、日本のものづくりの原点に触れます。",
    skills: [
      { name: "精密加工", value: 90 },
      { name: "品質管理", value: 85 },
      { name: "データ分析", value: 80 }
    ],
    phases: ["工場見学・安全研修", "精密加工体験", "品質検査・測定体験", "改善レポート作成・発表"]
  },
  {
    id: 10,
    title: "光学技術の最前線 ― 精密レンズの製造・検査を体験",
    company: "堀田光学工業株式会社",
    companyId: 10,
    category: "製造・技術",
    tags: ["光学", "精密技術", "品質管理"],
    description: "カメラ・医療機器向けの光学レンズ製造を体験。レンズ研磨から検査まで、ミクロンの世界で精密技術を磨く職人の仕事を学びます。",
    skills: [
      { name: "精密技術", value: 90 },
      { name: "品質管理", value: 85 },
      { name: "観察力", value: 80 }
    ],
    phases: ["光学基礎研修・工場見学", "レンズ研磨体験", "品質検査・測定体験", "技術レポート作成・発表"]
  }
];

// --- AI対話プロンプト ---
const SYSTEM_PROMPT = `あなたはさくら市のインターンシップマッチングAI「さくナビAI」です。
大学生に対して、さくら市でしかできない実践型インターンシップを提案するために、対話を通じて学生の情報を引き出します。

【あなたの役割】
- あなたが質問し、学生が答える形式で対話を進めてください。
- 1回の発言で質問は1つだけにしてください。
- 親しみやすく、でもプロフェッショナルなトーンで話してください。
- 学生の回答に対して短く共感やコメントを添えてから、次の質問に移ってください。

【質問の流れ（5ターン）】
ターン1: 大学での専攻・学んでいる分野について聞く
ターン2: 得意なこと・これまでに力を入れた経験について聞く
ターン3: 興味がある業界ややってみたい仕事の種類について聞く
ターン4: インターンで身につけたいスキルや挑戦したいことについて聞く
ターン5: さくら市や地方で働くことへの期待や不安について聞く

【注意事項】
- 回答は200文字以内に収めてください。
- 質問以外の余計な情報（インターンの紹介など）は対話中には出さないでください。
- 5ターン目の質問への回答を受け取ったら、「ありがとうございます！あなたにぴったりのインターンシップを探しています...」と締めくくってください。
`;

const FIRST_MSG = 'こんにちは！さくナビAIです。さくら市にはユニークなインターンシッププログラムがたくさんあります。あなたにぴったりのプロジェクトを見つけるために、いくつか質問させてください！まず、大学ではどんな分野を専攻していますか？';

// --- 状態管理 ---
let messages = [];
let step = 0;
let isTyping = false;

// --- Gemini API ---
// ローカル（file://）ではGemini APIを直接呼び出し、本番では/api/geminiを経由
const GEMINI_API_KEY = ''; // 環境変数またはVercelで設定してください

async function callGemini(prompt, systemInstruction) {
  const isLocal = location.protocol === 'file:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1';

  if (isLocal) {
    // ローカル: Gemini API直接呼び出し
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;
    const payload = { contents: [{ parts: [{ text: prompt }] }] };
    if (systemInstruction) {
      payload.systemInstruction = { parts: [{ text: systemInstruction }] };
    }
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (!res.ok) throw new Error('Gemini API request failed');
    const data = await res.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || '申し訳ありません。回答を生成できませんでした。';
  } else {
    // 本番: サーバーサイドプロキシ経由
    const res = await fetch('/api/gemini', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt, systemInstruction })
    });
    if (!res.ok) throw new Error('API request failed');
    const data = await res.json();
    return data.text || '申し訳ありません。回答を生成できませんでした。';
  }
}

// --- チャットUI ---
function escapeHtml(text) {
  const d = document.createElement('div');
  d.textContent = text;
  return d.innerHTML;
}

function addMessage(role, content) {
  messages.push({ role, content });
  const container = document.getElementById('intern-messages');
  const div = document.createElement('div');
  div.className = 'chat-msg chat-msg-' + (role === 'user' ? 'user' : 'bot');
  div.innerHTML = `<div class="chat-bubble">${escapeHtml(content)}</div>`;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function showTyping() {
  const container = document.getElementById('intern-messages');
  const div = document.createElement('div');
  div.className = 'chat-msg chat-msg-bot';
  div.id = 'intern-typing';
  div.innerHTML = '<div class="chat-bubble chat-typing"><span></span><span></span><span></span></div>';
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function hideTyping() {
  const el = document.getElementById('intern-typing');
  if (el) el.remove();
}

// --- 開始 ---
function startInternChat() {
  messages = [];
  step = 0;
  isTyping = false;

  document.getElementById('intern-intro').style.display = 'none';
  document.getElementById('intern-chat').style.display = 'block';

  const container = document.getElementById('intern-messages');
  container.innerHTML = '';

  if (typeof lucide !== 'undefined') lucide.createIcons();

  addMessage('bot', FIRST_MSG);

  const input = document.getElementById('intern-input');
  const sendBtn = document.getElementById('intern-send-btn');
  input.disabled = false;
  sendBtn.disabled = false;
  input.focus();

  input.onkeydown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };
  input.oninput = () => { sendBtn.disabled = !input.value.trim(); };
  sendBtn.onclick = handleSend;

  updateRemaining();
}

function updateRemaining() {
  const el = document.getElementById('intern-remaining');
  if (el) el.textContent = Math.max(0, 5 - step);
}

// --- 送信 ---
async function handleSend() {
  const input = document.getElementById('intern-input');
  const text = input.value.trim();
  if (!text || isTyping) return;

  addMessage('user', text);
  input.value = '';
  input.disabled = true;
  document.getElementById('intern-send-btn').disabled = true;
  isTyping = true;

  step++;
  updateRemaining();
  showTyping();

  try {
    if (step >= 5) {
      hideTyping();
      addMessage('bot', 'ありがとうございます！あなたにぴったりのインターンシップを探しています...');
      setTimeout(() => runMatching(), 1500);
    } else {
      const history = messages.map(m => `${m.role === 'user' ? 'ユーザー' : 'AI'}: ${m.content}`).join('\n');
      const prompt = `これまでの会話:\n${history}\n\n上記の会話の続きとして、次の質問をしてください。`;
      const sys = SYSTEM_PROMPT + `\n\n現在 ${step}/5 ターン目の回答を受け取りました。次は ${step + 1}/5 ターン目の質問をしてください。`;
      const aiResponse = await callGemini(prompt, sys);
      hideTyping();
      addMessage('bot', aiResponse);
      input.disabled = false;
      document.getElementById('intern-send-btn').disabled = false;
      input.focus();
    }
  } catch (error) {
    hideTyping();
    addMessage('bot', '通信エラーが発生しました。少し時間を置いて再度お試しください。');
    input.disabled = false;
    document.getElementById('intern-send-btn').disabled = false;
  } finally {
    isTyping = false;
  }
}

// --- マッチング ---
async function runMatching() {
  document.getElementById('intern-chat').style.display = 'none';
  document.getElementById('intern-loading').style.display = 'block';

  const statusEl = document.getElementById('intern-loading-status');
  const loadMsgs = [
    "対話内容を分析中...", "あなたの強みを抽出中...",
    "10件のプロジェクトと照合中...", "最適なインターンを選定中...",
    "結果をまとめています..."
  ];
  statusEl.textContent = loadMsgs[0];
  let idx = 0;
  const interval = setInterval(() => {
    idx++;
    if (idx < loadMsgs.length) statusEl.textContent = loadMsgs[idx];
  }, 800);

  try {
    const userResponses = messages.filter(m => m.role === 'user').map(m => m.content).join('\n');
    const internList = INTERNSHIPS.map(i =>
      `ID:${i.id} | ${i.title} | ${i.company} | カテゴリ:${i.category} | タグ:${i.tags.join(',')} | 内容:${i.description}`
    ).join('\n');

    const prompt = `以下はユーザー（大学生）との対話で得られた情報です:
${userResponses}

以下の10件のインターンシップから、このユーザーに最も適した5件を選んでください。
なぜこのユーザーに合うかの理由（50文字以内）を付けてください。

インターンシップ一覧:
${internList}

必ず以下のJSON形式のみで回答してください。JSON以外のテキストは絶対に含めないでください:
[
  {"id": 1, "reason": "理由"},
  {"id": 2, "reason": "理由"},
  {"id": 3, "reason": "理由"},
  {"id": 4, "reason": "理由"},
  {"id": 5, "reason": "理由"}
]`;

    const sys = 'あなたはインターンシップマッチングの専門家です。ユーザーの専攻・スキル・興味・志向に基づいて最適なインターンを選びます。必ずJSON形式のみで回答してください。';
    const result = await callGemini(prompt, sys);

    clearInterval(interval);

    const jsonMatch = result.match(/\[[\s\S]*\]/);
    if (jsonMatch) {
      const matchResults = JSON.parse(jsonMatch[0]);
      const matched = matchResults.slice(0, 5).map(m => {
        const intern = INTERNSHIPS.find(i => i.id === m.id);
        if (!intern) return null;
        return { ...intern, reason: m.reason };
      }).filter(Boolean);
      renderInternResults(matched);
    } else {
      renderInternResults(getFallbackResults());
    }
  } catch (error) {
    clearInterval(interval);
    renderInternResults(getFallbackResults());
  }

  document.getElementById('intern-loading').style.display = 'none';
  document.getElementById('intern-results').style.display = 'block';
  if (typeof lucide !== 'undefined') lucide.createIcons();
  document.querySelectorAll('#intern-results .fade-up').forEach(el => el.classList.add('visible'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function getFallbackResults() {
  return INTERNSHIPS.slice(0, 5).map(intern => ({
    ...intern, reason: 'あなたの経験・興味に基づくおすすめです'
  }));
}

// --- 結果レンダリング ---
function renderInternResults(results) {
  const container = document.getElementById('intern-results-list');
  container.innerHTML = results.map((job, rank) => `
    <div class="intern-card" id="intern-card-${job.id}">
      <div class="intern-card-header">
        <div class="intern-rank">#${rank + 1}</div>
        <span class="intern-category">${job.category}</span>
      </div>

      <h3 class="intern-card-title">${job.title}</h3>
      <p class="intern-card-company">
        <i data-lucide="building" class="lucide"></i> ${job.company}
      </p>

      <div class="intern-reason">
        <i data-lucide="sparkles" class="lucide"></i>
        <span>${escapeHtml(job.reason)}</span>
      </div>

      <div class="intern-tags">
        ${job.tags.map(t => `<span class="intern-tag">#${t}</span>`).join('')}
      </div>

      <button class="co-toggle-btn" onclick="toggleInternDetail(${job.id})">
        <span>詳しく見る</span> <i data-lucide="chevron-down" class="lucide"></i>
      </button>

      <div class="intern-detail" id="intern-detail-${job.id}">
        <p class="intern-detail-desc">${job.description}</p>

        <div class="intern-detail-grid">
          <div>
            <h4 class="intern-detail-heading"><i data-lucide="bar-chart-3" class="lucide"></i> 身につくスキル</h4>
            <div class="intern-skills">
              ${job.skills.map(s => {
                const level = s.value >= 85 ? { label: '大きく成長', dots: 3 }
                  : s.value >= 70 ? { label: '成長する', dots: 2 }
                  : { label: '触れられる', dots: 1 };
                return `
                <div class="intern-skill-row">
                  <span class="intern-skill-name">${s.name}</span>
                  <div class="intern-skill-dots">
                    ${[1,2,3].map(d => `<span class="intern-dot ${d <= level.dots ? 'active' : ''}"></span>`).join('')}
                  </div>
                  <span class="intern-skill-label">${level.label}</span>
                </div>`;
              }).join('')}
            </div>
          </div>
          <div>
            <h4 class="intern-detail-heading"><i data-lucide="check-circle" class="lucide"></i> プロジェクトの流れ</h4>
            <div class="intern-phases">
              ${job.phases.map((p, i) => `
              <div class="intern-phase">
                <span class="intern-phase-num">${i + 1}</span>
                <span>${p}</span>
              </div>`).join('')}
            </div>
          </div>
        </div>

        ${job.companyId ? `<a href="companies.html#company-${job.companyId}" class="btn btn-outline" style="margin-top: 16px;">企業情報を見る <i data-lucide="arrow-right" class="lucide"></i></a>` : ''}
      </div>
    </div>
  `).join('');
}

function toggleInternDetail(id) {
  const detail = document.getElementById('intern-detail-' + id);
  const card = document.getElementById('intern-card-' + id);
  if (!detail || !card) return;

  const isOpen = detail.classList.contains('open');
  // 全て閉じる
  document.querySelectorAll('.intern-detail.open').forEach(d => d.classList.remove('open'));
  document.querySelectorAll('.intern-card.open').forEach(c => c.classList.remove('open'));

  if (!isOpen) {
    detail.classList.add('open');
    card.classList.add('open');
    if (typeof lucide !== 'undefined') lucide.createIcons();
  }
}

function resetIntern() {
  document.getElementById('intern-results').style.display = 'none';
  document.getElementById('intern-chat').style.display = 'none';
  document.getElementById('intern-loading').style.display = 'none';
  document.getElementById('intern-intro').style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
