const sqlEl = document.getElementById('sql');
const runBtn = document.getElementById('run');
const clearBtn = document.getElementById('clear');
const resultEl = document.getElementById('result');

function renderTable(rows) {
    if (!Array.isArray(rows)) return JSON.stringify(rows, null, 2);
    if (rows.length === 0) return '<div class="empty">Sin resultados</div>';
    const cols = Object.keys(rows[0]);
    const thead = '<tr>' + cols.map(c => `<th>${c}</th>`).join('') + '</tr>';
    const body = rows.map(r => '<tr>' + cols.map(c => `<td>${String(r[c] === null ? 'NULL' : r[c])}</td>`).join('') + '</tr>').join('');
    return `<table><thead>${thead}</thead><tbody>${body}</tbody></table>`;
}

async function run() {
    const sql = sqlEl.value.trim();
    if (!sql) return alert('Escribe una consulta SQL.');
    resultEl.innerHTML = '<div class="loading">Ejecutando...</div>';
    try {
        const res = await fetch('/query', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sql })
        });
        const data = await res.json();
        if (!res.ok) {
            resultEl.innerHTML = `<pre class="error">${data.error}</pre>`;
            return;
        }
        resultEl.innerHTML = renderTable(data.rows);
    } catch (err) {
        resultEl.innerHTML = `<pre class="error">${err.message}</pre>`;
    }
}

runBtn.addEventListener('click', run);
clearBtn.addEventListener('click', () => { sqlEl.value = ''; resultEl.innerHTML = ''; });

// Allow Ctrl+Enter to run
sqlEl.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'Enter') run();
});
