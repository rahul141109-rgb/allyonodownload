const apps = Array.from({ length: 53 }, (_, i) => ({
    name: `Android App ${i + 1}`,
    category: "Useful App",
    version: "Latest",
    logo: "logo.png",
    link: "#"
}));

const appsPerPage = 9;

let currentPage = 1;
let filteredApps = [...apps];

const appList = document.getElementById("appList");
const pagination = document.getElementById("pagination");
const searchInput = document.getElementById("searchInput");
const noResults = document.getElementById("noResults");
const appCount = document.getElementById("appCount");

function renderApps() {
    appList.innerHTML = "";

    const start = (currentPage - 1) * appsPerPage;
    const pageApps = filteredApps.slice(start, start + appsPerPage);

    if (pageApps.length === 0) {
        noResults.style.display = "block";
        return;
    }

    noResults.style.display = "none";

    pageApps.forEach(app => {
        const card = document.createElement("div");
        card.className = "app-card";

        card.innerHTML = `
            <div class="app-image">
                <img src="${app.logo}" alt="${app.name}">
            </div>

            <div class="app-info">
                <h3>${app.name}</h3>
                <p>${app.category}</p>

                <div class="app-meta">
                    <span>Version</span>
                    <strong>${app.version}</strong>
                </div>

                <a class="download-btn"
                   href="${app.link}"
                   target="_blank"
                   rel="noopener noreferrer">
                    ⬇ Download
                </a>
            </div>
        `;

        appList.appendChild(card);
    });

    renderPagination();
}

function renderPagination() {
    pagination.innerHTML = "";

    const totalPages = Math.ceil(filteredApps.length / appsPerPage);

    if (totalPages <= 1) return;

    const previous = document.createElement("button");
    previous.innerHTML = "‹";
    previous.disabled = currentPage === 1;

    previous.onclick = () => {
        if (currentPage > 1) {
            currentPage--;
            renderApps();
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    pagination.appendChild(previous);

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement("button");
        button.textContent = i;

        if (i === currentPage) {
            button.classList.add("active");
        }

        button.onclick = () => {
            currentPage = i;
            renderApps();
            window.scrollTo({ top: 0, behavior: "smooth" });
        };

        pagination.appendChild(button);
    }

    const next = document.createElement("button");
    next.innerHTML = "›";
    next.disabled = currentPage === totalPages;

    next.onclick = () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderApps();
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    pagination.appendChild(next);
}

searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase().trim();

    filteredApps = apps.filter(app =>
        app.name.toLowerCase().includes(query) ||
        app.category.toLowerCase().includes(query)
    );

    currentPage = 1;

    appCount.textContent = `${filteredApps.length} APPS`;

    renderApps();
});

renderApps();
