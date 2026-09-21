const grid = document.getElementById("assignmentGrid");
const search = document.getElementById("search");
const filter = document.getElementById("filter");

function formatDate(date) {
  return new Date(date + "T00:00:00").toLocaleDateString("en-IN", {
    day: "numeric", month: "short", year: "numeric"
  });
}

function render() {
  const q = search.value.toLowerCase().trim();
  const f = filter.value;

  const filtered = assignments.filter(a => {
    const matchesSearch =
      a.title.toLowerCase().includes(q) ||
      a.subject.toLowerCase().includes(q) ||
      a.description.toLowerCase().includes(q);
    const matchesFilter = f === "all" || a.status === f;
    return matchesSearch && matchesFilter;
  });

  grid.innerHTML = filtered.length
    ? filtered.map(a => `
      <article class="card">
        <div>
          <div class="subject">${a.subject}</div>
          <h3>${a.title}</h3>
          <p>${a.description}</p>
        </div>
        <div class="meta">
          <span>${a.due ? formatDate(a.due) : "No due date"}</span>
          <span class="status ${a.status === "submitted" ? "submitted" : ""}">
            ${a.status === "submitted" ? "Submitted" : "Upcoming"}
          </span>
        </div>
        ${a.link && a.link !== "#" ? `<a href="${a.link}" target="_blank" rel="noopener">Open assignment →</a>` : ""}
      </article>
    `).join("")
    : `<p>No assignments found.</p>`;
}

search.addEventListener("input", render);
filter.addEventListener("change", render);
render();
