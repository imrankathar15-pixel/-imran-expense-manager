const DEFAULT_CATEGORIES = [
  "Food", "Groceries", "Home", "Electricity", "Transport", "Fuel",
  "Shopping", "Baby expenses", "Medical", "Mobile and Internet",
  "Family", "Travel", "Charity", "Bills", "Health", "Other"
];

const INITIAL_OPENING_MASTERS = {
  "2026-10": 0,
  "2026-11": 5751
};

const INITIAL_TRANSACTIONS = [
  { id: "tx1", dateTime: "2026-10-05T09:00", type: "Income", category: "Added to Master", note: "Bhaiya credited", amount: 10000, payment: "Bank Transfer" },
  { id: "tx2", dateTime: "2026-10-05T14:00", type: "Expense", category: "Other", note: "Imran Expenses", amount: 1000, payment: "UPI" },
  { id: "tx3", dateTime: "2026-10-06T11:30", type: "Expense", category: "Bills", note: "Ammi mobile bill", amount: 300, payment: "UPI" },
  { id: "tx4", dateTime: "2026-10-07T10:15", type: "Expense", category: "Health", note: "Ammi tablets", amount: 257, payment: "Cash" },
  { id: "tx5", dateTime: "2026-10-07T12:00", type: "Expense", category: "Health", note: "Abba cough tablets", amount: 172, payment: "Cash" },
  { id: "tx6", dateTime: "2026-10-07T18:00", type: "Expense", category: "Travel", note: "Petrol", amount: 150, payment: "UPI" },
  { id: "tx7", dateTime: "2026-10-08T13:00", type: "Expense", category: "Food", note: "Crab", amount: 500, payment: "Cash" },
  { id: "tx8", dateTime: "2026-10-09T10:00", type: "Expense", category: "Other", note: "Ethim madarasa-Parumbakkam", amount: 300, payment: "Cash" },
  { id: "tx9", dateTime: "2026-10-09T17:30", type: "Expense", category: "Health", note: "Abba hospital", amount: 600, payment: "Cash" },
  { id: "tx10", dateTime: "2026-10-11T09:30", type: "Expense", category: "Travel", note: "Petrol", amount: 150, payment: "UPI" },
  { id: "tx11", dateTime: "2026-10-11T11:00", type: "Expense", category: "Food", note: "Sunday fish", amount: 1150, payment: "Cash" },
  { id: "tx12", dateTime: "2026-10-11T12:15", type: "Expense", category: "Food", note: "Vegetables", amount: 510, payment: "Cash" },
  { id: "tx13", dateTime: "2026-10-12T18:30", type: "Expense", category: "Food", note: "Snacks", amount: 360, payment: "UPI" },
  { id: "tx14", dateTime: "2026-10-13T20:00", type: "Expense", category: "Food", note: "Chicken 65", amount: 350, payment: "UPI" },
  { id: "tx15", dateTime: "2026-10-16T16:00", type: "Expense", category: "Travel", note: "Petrol", amount: 100, payment: "UPI" },
  { id: "tx16", dateTime: "2026-10-20T14:00", type: "Expense", category: "Other", note: "Ammi expensed", amount: 2000, payment: "Cash" },
  { id: "tx17", dateTime: "2026-10-21T11:00", type: "Expense", category: "Other", note: "Bhabhi", amount: 1000, payment: "UPI" },
  { id: "tx18", dateTime: "2026-10-21T13:00", type: "Expense", category: "Food", note: "Beef", amount: 400, payment: "Cash" },
  { id: "tx19", dateTime: "2026-10-21T14:00", type: "Expense", category: "Food", note: "Vegetables", amount: 200, payment: "Cash" },
  { id: "tx20", dateTime: "2026-10-25T19:00", type: "Expense", category: "Food", note: "Lulu Auto", amount: 550, payment: "UPI" },
  { id: "tx21", dateTime: "2026-10-30T10:00", type: "Income", category: "Added to Master", note: "Ibrahim Added", amount: 15000, payment: "Bank Transfer" },
  { id: "tx22", dateTime: "2026-10-31T12:00", type: "Expense", category: "Food", note: "Bom Veg-Beef", amount: 1350, payment: "Cash" },
  { id: "tx23", dateTime: "2026-10-31T13:30", type: "Expense", category: "Food", note: "Vegetables", amount: 500, payment: "Cash" },
  { id: "tx24", dateTime: "2026-10-31T16:00", type: "Expense", category: "Other", note: "Gas stove Regulator", amount: 450, payment: "Cash" },
  { id: "tx25", dateTime: "2026-10-31T19:30", type: "Expense", category: "Food", note: "Groceries 5680+1220", amount: 6900, payment: "UPI" },
  { id: "tx26", dateTime: "2026-11-01T11:00", type: "Expense", category: "Food", note: "Fruits", amount: 840, payment: "Cash" },
  { id: "tx27", dateTime: "2026-11-01T12:30", type: "Expense", category: "Food", note: "Dry fish", amount: 250, payment: "Cash" },
  { id: "tx28", dateTime: "2026-11-03T15:00", type: "Expense", category: "Food", note: "Food expense", amount: 500, payment: "UPI" },
  { id: "tx29", dateTime: "2026-11-05T17:00", type: "Expense", category: "Other", note: "Camera recharge", amount: 400, payment: "UPI" },
  { id: "tx30", dateTime: "2026-11-06T13:30", type: "Expense", category: "Food", note: "Jamath", amount: 500, payment: "Cash" },
  { id: "tx31", dateTime: "2026-11-07T18:00", type: "Expense", category: "Food", note: "Groceries RANGA Rice,Harpic", amount: 1440, payment: "UPI" },
  { id: "tx32", dateTime: "2026-11-09T12:00", type: "Expense", category: "Travel", note: "Car jewellery purchase", amount: 600, payment: "UPI" },
  { id: "tx33", dateTime: "2026-11-09T19:30", type: "Expense", category: "Food", note: "Non veg-Boti", amount: 900, payment: "Cash" },
  { id: "tx34", dateTime: "2026-11-10T10:30", type: "Expense", category: "Travel", note: "Train ticket booking", amount: 312, payment: "UPI" }
];

const KEYS = {
  TX: "pwa_et_transactions",
  CAT: "pwa_et_categories",
  MASTER: "pwa_et_masters",
  THEME: "pwa_et_theme",
  DRAFT: "pwa_et_draft"
};

let transactions = JSON.parse(localStorage.getItem(KEYS.TX)) || [...INITIAL_TRANSACTIONS];
let categories = JSON.parse(localStorage.getItem(KEYS.CAT)) || [...DEFAULT_CATEGORIES];
let openingMasters = JSON.parse(localStorage.getItem(KEYS.MASTER)) || { ...INITIAL_OPENING_MASTERS };

const CHART_COLORS = [
  "#3b6e5c", "#c4843d", "#4f7cac", "#c25959", "#7b68a6",
  "#4c9a84", "#d17a52", "#5d8aa8", "#8f9779", "#b56576"
];

let toastTimer = null;
function notifySaved(label = "Auto-saved") {
  const now = new Date().toTimeString().slice(0, 8);
  const statusEl = document.getElementById("saveStatus");
  if (statusEl) statusEl.textContent = `${label} • ${now}`;

  const toast = document.getElementById("toast");
  if (toast) {
    toast.textContent = label;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 1800);
  }
}

function persistAll(msg = "Auto-saved") {
  localStorage.setItem(KEYS.TX, JSON.stringify(transactions));
  localStorage.setItem(KEYS.CAT, JSON.stringify(categories));
  localStorage.setItem(KEYS.MASTER, JSON.stringify(openingMasters));
  notifySaved(msg);
}

function applySavedTheme() {
  const saved = localStorage.getItem(KEYS.THEME) || "light";
  const isDark = saved === "dark";
  document.body.classList.toggle("dark-mode", isDark);
  document.getElementById("themeToggle").textContent = isDark ? "☀️ Light" : "🌙 Dark";
}

function toggleTheme() {
  const isDark = !document.body.classList.contains("dark-mode");
  document.body.classList.toggle("dark-mode", isDark);
  localStorage.setItem(KEYS.THEME, isDark ? "dark" : "light");
  document.getElementById("themeToggle").textContent = isDark ? "☀️ Light" : "🌙 Dark";
  renderDashboard();
  notifySaved("Theme saved");
}

function switchView(view) {
  document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
  document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
  document.getElementById("tab-" + view).classList.add("active");
  document.getElementById("nav-" + view).classList.add("active");
}

function formatINR(val) {
  const sign = val < 0 ? "-" : "";
  return sign + "₹" + Math.abs(val).toLocaleString("en-IN", { maximumFractionDigits: 2 });
}

function syncMasterInput() {
  const month = document.getElementById("monthFilter").value;
  document.getElementById("masterBudget").value = openingMasters[month] !== undefined ? openingMasters[month] : 0;
}

document.getElementById("monthFilter").addEventListener("change", () => {
  syncMasterInput();
  renderDashboard();
});

document.getElementById("masterBudget").addEventListener("input", (e) => {
  const month = document.getElementById("monthFilter").value;
  openingMasters[month] = parseFloat(e.target.value) || 0;
  persistAll("Master budget auto-saved");
  renderDashboard();
});

function populateCategories() {
  const type = document.getElementById("txType").value;
  const sel = document.getElementById("txCategory");
  const prevVal = sel.value;
  sel.innerHTML = "";

  const list = type === "Income"
    ? ["Added to Master", "Salary", "Bonus", "Refund", "Other Income"]
    : categories;

  list.forEach(cat => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat;
    sel.appendChild(opt);
  });

  if (list.includes(prevVal)) sel.value = prevVal;
}

function onTypeChange() {
  populateCategories();
  saveDraft();
}

function promptAddCategory() {
  const name = prompt("Enter new category name:");
  if (!name) return;
  const trimmed = name.trim();
  if (!trimmed) return;
  if (!categories.includes(trimmed)) {
    categories.push(trimmed);
    persistAll("Category added");
  }
  document.getElementById("txType").value = "Expense";
  populateCategories();
  document.getElementById("txCategory").value = trimmed;
  saveDraft();
}

function deleteSelectedCategory() {
  const type = document.getElementById("txType").value;
  if (type === "Income") {
    alert("Built-in income categories cannot be deleted.");
    return;
  }
  const sel = document.getElementById("txCategory");
  const target = sel.value;
  if (!target) return;
  if (categories.length <= 1) {
    alert("At least one category must remain.");
    return;
  }
  if (!confirm(`Delete category "${target}"?`)) return;
  categories = categories.filter(c => c !== target);
  persistAll("Category deleted");
  populateCategories();
  saveDraft();
}

function saveDraft() {
  if (document.getElementById("editTxId").value) return;
  const draft = {
    type: document.getElementById("txType").value,
    amount: document.getElementById("txAmount").value,
    category: document.getElementById("txCategory").value,
    note: document.getElementById("txNote").value,
    dateTime: document.getElementById("txDateTime").value,
    payment: document.getElementById("txPayment").value
  };
  localStorage.setItem(KEYS.DRAFT, JSON.stringify(draft));
  notifySaved("Draft auto-saved");
}

function restoreDraft() {
  const raw = localStorage.getItem(KEYS.DRAFT);
  if (!raw) return;
  try {
    const d = JSON.parse(raw);
    if (d.type) document.getElementById("txType").value = d.type;
    populateCategories();
    if (d.category) document.getElementById("txCategory").value = d.category;
    if (d.amount) document.getElementById("txAmount").value = d.amount;
    if (d.note) document.getElementById("txNote").value = d.note;
    if (d.dateTime) document.getElementById("txDateTime").value = d.dateTime;
    if (d.payment) document.getElementById("txPayment").value = d.payment;
  } catch (e) {}
}

function setDefaultDateTime() {
  const now = new Date();
  const localIso = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
  document.getElementById("txDateTime").value = localIso;
}

document.getElementById("txForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const editId = document.getElementById("editTxId").value;
  const entry = {
    id: editId || "tx_" + Date.now(),
    type: document.getElementById("txType").value,
    amount: parseFloat(document.getElementById("txAmount").value),
    category: document.getElementById("txCategory").value,
    note: document.getElementById("txNote").value.trim(),
    dateTime: document.getElementById("txDateTime").value,
    payment: document.getElementById("txPayment").value
  };

  if (editId) {
    const idx = transactions.findIndex(t => t.id === editId);
    if (idx !== -1) transactions[idx] = entry;
  } else {
    transactions.push(entry);
    localStorage.removeItem(KEYS.DRAFT);
  }

  persistAll(editId ? "Transaction updated" : "Transaction saved");
  cancelEdit();
  document.getElementById("monthFilter").value = entry.dateTime.slice(0, 7);
  syncMasterInput();
  renderDashboard();
  switchView("dashboard");
});

function editTx(id) {
  const tx = transactions.find(t => t.id === id);
  if (!tx) return;
  document.getElementById("editTxId").value = tx.id;
  document.getElementById("txType").value = tx.type;
  populateCategories();
  document.getElementById("txAmount").value = tx.amount;
  document.getElementById("txCategory").value = tx.category;
  document.getElementById("txNote").value = tx.note;
  document.getElementById("txDateTime").value = tx.dateTime;
  document.getElementById("txPayment").value = tx.payment || "UPI";

  document.getElementById("formHeading").textContent = "Edit Transaction";
  document.getElementById("saveTxBtn").textContent = "Update Transaction";
  document.getElementById("cancelEditBtn").hidden = false;
  switchView("add");
}

function deleteTx(id) {
  if (!confirm("Delete this transaction?")) return;
  transactions = transactions.filter(t => t.id !== id);
  persistAll("Transaction deleted");
  renderDashboard();
}

function cancelEdit() {
  document.getElementById("txForm").reset();
  document.getElementById("editTxId").value = "";
  document.getElementById("formHeading").textContent = "Add Transaction";
  document.getElementById("saveTxBtn").textContent = "Save Transaction";
  document.getElementById("cancelEditBtn").hidden = true;
  populateCategories();
  setDefaultDateTime();
}

function resetDefaultData() {
  if (!confirm("Restore default October & November 2026 data?")) return;
  transactions = [...INITIAL_TRANSACTIONS];
  categories = [...DEFAULT_CATEGORIES];
  openingMasters = { ...INITIAL_OPENING_MASTERS };
  localStorage.removeItem(KEYS.DRAFT);
  persistAll("Sample data restored");
  syncMasterInput();
  populateCategories();
  renderDashboard();
}

function getMonthSummary(monthStr) {
  const opening = openingMasters[monthStr] !== undefined ? Number(openingMasters[monthStr]) : 0;
  const list = transactions
    .filter(t => t.dateTime.startsWith(monthStr))
    .sort((a, b) => a.dateTime.localeCompare(b.dateTime));

  let running = opening;
  let addedIncome = 0;
  let totalExpenses = 0;

  const enriched = list.map(t => {
    if (t.type === "Income") {
      addedIncome += t.amount;
      running += t.amount;
    } else {
      totalExpenses += t.amount;
      running -= t.amount;
    }
    return { ...t, balanceAfter: running };
  });

  const totalIncome = opening + addedIncome;
  const remaining = totalIncome - totalExpenses;
  return {
    monthStr,
    totalIncome,
    totalExpenses,
    remaining,
    savings: Math.max(0, remaining),
    transactions: enriched
  };
}

function getAllSummary() {
  const sorted = [...transactions].sort((a, b) => a.dateTime.localeCompare(b.dateTime));
  const base = openingMasters["2026-10"] !== undefined ? Number(openingMasters["2026-10"]) : 0;
  let running = base;
  let totalIncome = base;
  let totalExpenses = 0;

  const enriched = sorted.map(t => {
    if (t.type === "Income") {
      totalIncome += t.amount;
      running += t.amount;
    } else {
      totalExpenses += t.amount;
      running -= t.amount;
    }
    return { ...t, balanceAfter: running };
  });

  return {
    totalIncome,
    totalExpenses,
    remaining: totalIncome - totalExpenses,
    transactions: enriched
  };
}

function renderDashboard() {
  const monthStr = document.getElementById("monthFilter").value;
  const data = getMonthSummary(monthStr);

  document.getElementById("statIncome").textContent = formatINR(data.totalIncome);
  document.getElementById("statExpenses").textContent = formatINR(data.totalExpenses);

  const balEl = document.getElementById("statBalance");
  balEl.textContent = formatINR(data.remaining);
  balEl.className = "metric-value " + (data.remaining >= 0 ? "text-green" : "text-red");

  document.getElementById("statSavings").textContent = formatINR(data.savings);

  const [yr, mo] = monthStr.split("-").map(Number);
  const days = monthStr === "2026-11" ? 10 : new Date(yr, mo, 0).getDate();
  document.getElementById("statDaily").textContent = formatINR(days > 0 ? data.totalExpenses / days : 0);

  const util = data.totalIncome > 0 ? (data.totalExpenses / data.totalIncome) * 100 : 0;
  document.getElementById("statUtil").textContent = util.toFixed(1) + "%";
  const bar = document.getElementById("utilBar");
  bar.style.width = Math.min(100, util) + "%";
  bar.style.background = util > 90 ? "var(--red)" : util > 75 ? "var(--amber)" : "var(--primary)";

  renderTxCards(data.transactions);
  renderCharts(data.transactions, yr, mo);
}

function renderTxCards(list) {
  const container = document.getElementById("txListContainer");
  if (list.length === 0) {
    container.innerHTML = `<div class="card" style="text-align:center; color:var(--muted);">No transactions for this month.</div>`;
    return;
  }

  container.innerHTML = [...list].reverse().map(t => `
    <div class="tx-item">
      <div>
        <div class="tx-title">${t.note || t.category}</div>
        <div class="tx-meta">
          <span class="badge ${t.type === "Income" ? "badge-in" : "badge-out"}">${t.type === "Income" ? "Added" : t.category}</span>
          <span>${t.dateTime.replace("T", " ")}</span>
          <span>• ${t.payment || "UPI"}</span>
        </div>
      </div>
      <div class="tx-right">
        <div class="tx-amount ${t.type === "Income" ? "text-green" : "text-red"}">
          ${t.type === "Income" ? "+" : "-"}${formatINR(t.amount)}
        </div>
        <div class="tx-bal">Bal: ${formatINR(t.balanceAfter)}</div>
        <div class="tx-actions">
          <button class="btn-xs btn-edit" onclick="editTx('${t.id}')">Edit</button>
          <button class="btn-xs btn-del" onclick="deleteTx('${t.id}')">Del</button>
        </div>
      </div>
    </div>
  `).join("");
}

function renderCharts(list, year, month) {
  const isDark = document.body.classList.contains("dark-mode");
  const mutedColor = isDark ? "#94a39d" : "#64746e";
  const cardBg = isDark ? "#1b2220" : "#ffffff";
  const gridColor = isDark ? "#2c3633" : "#dce3e0";

  const catCanvas = document.getElementById("catCanvas");
  const ctx = catCanvas.getContext("2d");
  ctx.clearRect(0, 0, catCanvas.width, catCanvas.height);

  const expenses = list.filter(t => t.type === "Expense");
  const totals = {};
  expenses.forEach(e => { totals[e.category] = (totals[e.category] || 0) + e.amount; });
  const entries = Object.entries(totals).sort((a, b) => b[1] - a[1]);
  const legend = document.getElementById("catLegend");
  legend.innerHTML = "";

  if (entries.length === 0) {
    ctx.fillStyle = mutedColor;
    ctx.font = "13px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("No expenses recorded", catCanvas.width / 2, catCanvas.height / 2);
  } else {
    const sum = entries.reduce((s, e) => s + e[1], 0);
    let angle = -Math.PI / 2;
    const cx = catCanvas.width / 2;
    const cy = catCanvas.height / 2;

    entries.forEach(([cat, val], i) => {
      const slice = (val / sum) * Math.PI * 2;
      const color = CHART_COLORS[i % CHART_COLORS.length];
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, 76, angle, angle + slice);
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();
      angle += slice;

      legend.innerHTML += `
        <div class="legend-item">
          <span class="legend-dot" style="background:${color}"></span>
          <span>${cat}: ${formatINR(val)}</span>
        </div>
      `;
    });

    ctx.beginPath();
    ctx.arc(cx, cy, 42, 0, Math.PI * 2);
    ctx.fillStyle = cardBg;
    ctx.fill();
  }

  const dCanvas = document.getElementById("dailyCanvas");
  const dCtx = dCanvas.getContext("2d");
  dCtx.clearRect(0, 0, dCanvas.width, dCanvas.height);

  const daysInMonth = new Date(year, month, 0).getDate();
  const daily = new Array(daysInMonth).fill(0);
  expenses.forEach(e => {
    const d = parseInt(e.dateTime.slice(8, 10), 10);
    if (d >= 1 && d <= daysInMonth) daily[d - 1] += e.amount;
  });

  const maxV = Math.max(...daily, 100);
  const padL = 42, padB = 22, padT = 12;
  const w = dCanvas.width - padL - 10;
  const h = dCanvas.height - padB - padT;
  const barW = Math.max(3, (w / daysInMonth) - 3);

  dCtx.strokeStyle = gridColor;
  dCtx.beginPath();
  dCtx.moveTo(padL, padT);
  dCtx.lineTo(padL, padTop + h);
  dCtx.lineTo(padL + w, padT + h);
  dCtx.stroke();

  dCtx.fillStyle = mutedColor;
  dCtx.font = "10px sans-serif";
  dCtx.textAlign = "right";
  dCtx.fillText("₹" + Math.round(maxV), padL - 4, padTop + 8);
  dCtx.fillText("₹0", padL - 4, padT + h);

  daily.forEach((v, i) => {
    const x = padL + i * (w / daysInMonth) + 1;
    const bh = (v / maxV) * h;
    dCtx.fillStyle = isDark ? "#5aa389" : "#3b6e5c";
    dCtx.fillRect(x, padT + h - bh, barW, bh);

    if ((i + 1) % 5 === 0 || i === 0) {
      dCtx.fillStyle = mutedColor;
      dCtx.textAlign = "center";
      dCtx.fillText(String(i + 1), x + barW / 2, padT + h + 14);
    }
  });
}

function handleExport() {
  const scope = document.getElementById("exportScope").value;
  const format = document.getElementById("exportFormat").value;
  const monthStr = document.getElementById("monthFilter").value;
  const data = scope === "monthly" ? getMonthSummary(monthStr) : getAllSummary();
  const title = scope === "monthly" ? `Monthly Expense Report (${monthStr})` : "Total Expense Report (All Months)";

  if (format === "html") exportStandaloneHTML();
  else if (format === "excel") exportExcel(data, title, scope === "monthly" ? monthStr : "Total");
  else if (format === "pdf") exportPDF(data, title);
  else if (format === "whatsapp") exportWhatsApp(data, title);
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

async function exportStandaloneHTML() {
  let jsCode = "";
  try {
    const res = await fetch("app.js");
    jsCode = await res.text();
  } catch (e) {
    alert("Run via a local or hosted web server to bundle app.js into the HTML export.");
    return;
  }

  jsCode = jsCode
    .replace(/const DEFAULT_CATEGORIES = \[[\s\S]*?\];/, `const DEFAULT_CATEGORIES = ${JSON.stringify(categories)};`)
    .replace(/const INITIAL_OPENING_MASTERS = \{[\s\S]*?\};/, `const INITIAL_OPENING_MASTERS = ${JSON.stringify(openingMasters)};`)
    .replace(/const INITIAL_TRANSACTIONS = \[[\s\S]*?\];/, `const INITIAL_TRANSACTIONS = ${JSON.stringify(transactions)};`);

  const docClone = document.documentElement.cloneNode(true);
  const appScriptTag = docClone.querySelector('script[src="app.js"]');
  if (appScriptTag) {
    appScriptTag.removeAttribute("src");
    appScriptTag.textContent = jsCode;
  }
  const html = "<!DOCTYPE html>
" + docClone.outerHTML;
  downloadBlob(new Blob([html], { type: "text/html;charset=utf-8" }), `Expense_Tracker_${new Date().toISOString().slice(0, 10)}.html`);
}

function exportExcel(data, title, suffix) {
  const rows = data.transactions.map(t => `
    <tr>
      <td>${t.dateTime.replace("T", " ")}</td>
      <td>${t.type === "Income" ? "Added to Master" : "Spent"}</td>
      <td>${t.category}</td>
      <td>${t.note}</td>
      <td>${t.payment || "UPI"}</td>
      <td>${t.type === "Income" ? t.amount : -t.amount}</td>
      <td>${t.balanceAfter}</td>
    </tr>
  `).join("");

  const html = `
    <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel">
    <head><meta charset="UTF-8"></head>
    <body>
      <h3>${title}</h3>
      <table border="1">
        <tr><th>Total Income (INR)</th><td>${data.totalIncome}</td></tr>
        <tr><th>Total Expenses (INR)</th><td>${data.totalExpenses}</td></tr>
        <tr><th>Remaining Balance (INR)</th><td>${data.remaining}</td></tr>
      </table><br/>
      <table border="1">
        <thead><tr><th>Date & Time</th><th>Type</th><th>Category</th><th>Description</th><th>Payment</th><th>Amount (INR)</th><th>Balance After (INR)</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </body></html>
  `;
  downloadBlob(new Blob([html], { type: "application/vnd.ms-excel;charset=utf-8" }), `Expense_Report_${suffix}.xls`);
}

function exportPDF(data, title) {
  const win = window.open("", "_blank");
  if (!win) { alert("Please allow pop-ups to save PDF."); return; }
  const rows = data.transactions.map(t => `
    <tr>
      <td>${t.dateTime.replace("T", " ")}</td>
      <td>${t.type === "Income" ? "Added" : "Spent"}</td>
      <td>${t.category}</td>
      <td>${t.note}</td>
      <td style="text-align:right; color:${t.type === "Income" ? "#2e7d5b" : "#c25959"};">${t.type === "Income" ? "+" : "-"}${formatINR(t.amount)}</td>
      <td style="text-align:right;">${formatINR(t.balanceAfter)}</td>
    </tr>
  `).join("");

  win.document.write(`
    <!DOCTYPE html><html><head><title>${title}</title>
    <style>
      body { font-family: Arial, sans-serif; padding: 20px; color: #1e2925; }
      .box { display: flex; gap: 20px; background: #f4f6f5; padding: 12px; border-radius: 8px; margin-bottom: 16px; }
      table { width: 100%; border-collapse: collapse; font-size: 13px; }
      th, td { border: 1px solid #dce3e0; padding: 8px; text-align: left; }
      th { background: #e6f0ec; }
    </style></head><body>
      <h2>${title}</h2>
      <div class="box">
        <div><strong>Income:</strong> ${formatINR(data.totalIncome)}</div>
        <div><strong>Expenses:</strong> ${formatINR(data.totalExpenses)}</div>
        <div><strong>Balance:</strong> ${formatINR(data.remaining)}</div>
      </div>
      <table><thead><tr><th>Date & Time</th><th>Type</th><th>Category</th><th>Note</th><th style="text-align:right;">Amount</th><th style="text-align:right;">Balance</th></tr></thead><tbody>${rows}</tbody></table>
      <script>window.onload = () => window.print();<\/script>
    </body></html>
  `);
  win.document.close();
}

function exportWhatsApp(data, title) {
  let text = `*${title}*
`;
  text += `Income: ${formatINR(data.totalIncome)}
`;
  text += `Expenses: ${formatINR(data.totalExpenses)}
`;
  text += `Remaining Balance: ${formatINR(data.remaining)}

`;
  text += `*Transactions:*
`;
  data.transactions.forEach(t => {
    const sign = t.type === "Income" ? "+" : "-";
    text += `• ${t.dateTime.slice(0, 10)} | ${t.note || t.category}: ${sign}${formatINR(t.amount)} (Bal: ${formatINR(t.balanceAfter)})
`;
  });
  window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
}

applySavedTheme();
syncMasterInput();
populateCategories();
setDefaultDateTime();
restoreDraft();
renderDashboard();
