const apps = [
    { name: "Yono Vip", category: "High Bonus", version: "1.0.4", logo: "logo.png", link: "https://uonovipplay.vip/?code=3CRUNXZYBK4&t=1786231255" },
    { name: "789 Jackpot", category: "High Bonus", version: "2.3.1", logo: "logo.png", link: "https://join789jackpots2.com/?code=J7Z1V5MF7Z5&t=1786221787" },
    { name: "Ind Rummy", category: "High Bonus", version: "4.1.0", logo: "logo.png", link: "https://rummyjoys.com/?code=R9A87SA849B&t=1786221848" },
    { name: "Yono Slots", category: "High Bonus", version: "3.8.2", logo: "logo.png", link: "https://yonoslotsjackwin.com/?code=59YC58TCXQ6&t=1786221904" },
    { name: "Yono Rummy", category: "High Bonus", version: "1.7.6", logo: "logo.png", link: "https://yonorummy052.com/?code=VIPS2CEDZJF&t=1786221962" },
    { name: "Yono Games", category: "High Bonus", version: "5.0.3", logo: "logo.png", link: "https://yonogames8.com/?code=P6RXQSS6&t=1786222058" },
    { name: "JaiHo Rummy", category: "High Bonus", version: "2.9.4", logo: "logo.png", link: "https://jaihorummycode.com/?code=E747C347KC5&t=1786222143" },
    { name: "Jaiho91", category: "High Bonus", version: "6.2.0", logo: "logo.png", link: "https://jaiho91.cc/?code=C42HWMFCG4L&t=1786222196" },
    { name: "Win Rummy", category: "High Bonus", version: "3.4.7", logo: "logo.png", link: "https://www.winrummy45.com/?code=8JTWAC2TH39&t=1786230282" },

    { name: "Spin Gold", category: "High Bonus", version: "1.9.2", logo: "logo.png", link: "https://spingolda.com/?code=HLTV44URKRF&t=1786230489" },
    { name: "DhanWin", category: "High Bonus", version: "4.6.1", logo: "logo.png", link: "https://dhanwinagent.com/?code=47TEPCPM18S&t=1786230547" },
    { name: "Bingo101", category: "High Bonus", version: "2.1.8", logo: "logo.png", link: "https://bin4go101.com/?code=6YFXW27QWHY&t=1786827706" },
    { name: "Jaihoarcade", category: "High Bonus", version: "7.0.2", logo: "logo.png", link: "https://www.jaihoarcade19.com/?code=AZDRPMX51TQ&t=1786827773" },
    { name: "JaihoSlots", category: "High Bonus", version: "3.2.5", logo: "logo.png", link: "https://www.jaihoslots29.com/?code=EGPKGRTYTS5&t=1786827820" },
    { name: "Jaihospin", category: "High Bonus", version: "5.4.9", logo: "logo.png", link: "https://5jaihospinwin.com/?code=7TA9KZQV7LJ&t=1786827857" },
    { name: "Joy Rummy", category: "High Bonus", version: "2.8.3", logo: "logo.png", link: "https://www.joyrummyworld.com/?code=J5KPE7JJUGN&t=1786827911" },
    { name: "Mahagames", category: "High Bonus", version: "4.0.6", logo: "logo.png", link: "https://p-mahagames.com/?code=J24SZK83LAG&t=1786827965" },
    { name: "Rumble Rummy", category: "High Bonus", version: "1.6.4", logo: "logo.png", link: "https://www.rumblerummy111.net/?code=UC0SGGC41C6&t=1786828021" },

    { name: "Rummy91", category: "High Bonus", version: "3.7.1", logo: "logo.png", link: "https://www.rummy91cc.com/?code=4KT7Q2MMUAY&t=1786828064" },
    { name: "Rummy888", category: "High Bonus", version: "6.1.5", logo: "logo.png", link: "https://rummy888vip34.com/?code=TPUVPTKSPWQ&t=1786828131" },
    { name: "ShareSlots", category: "High Bonus", version: "2.4.0", logo: "logo.png", link: "https://share577.com/?code=YAZEH62P3T8&t=1786828181" },
    { name: "Slots Spin", category: "High Bonus", version: "5.8.2", logo: "logo.png", link: "https://www.slotsspinh.com/?code=XJBBC3QTQKE&t=1786828247" },
    { name: "Slots Winner", category: "High Bonus", version: "1.3.9", logo: "logo.png", link: "https://slotswinneri.com/?code=K4EZCJZ7UUV&t=1786828304" },
    { name: "Spin101", category: "High Bonus", version: "4.5.7", logo: "logo.png", link: "https://spin101-f.com/?code=P4CN5MHJSNQ&t=1786828351" },
    { name: "SpinCrush", category: "High Bonus", version: "2.7.1", logo: "logo.png", link: "https://cklfjeselfs.safelyearnmillionsbysharingonepersonaqfxzqyj9.com/?code=ADEHMXZNFXF&t=1786828443" },
    { name: "Spin Winner", category: "High Bonus", version: "8.0.4", logo: "logo.png", link: "https://spinwinner-m.com/?code=SDNR8L8M58L&t=1786828473" },
    { name: "Spin777", category: "High Bonus", version: "3.1.6", logo: "logo.png", link: "http://spin777-t.com/?code=YLWTTF6GDA2&t=1786828541" },

    { name: "567Slots", category: "High Bonus", version: "5.2.8", logo: "logo.png", link: "https://join567slots3.com/?code=4NYPUFRNU4X&t=1784436996" },
    { name: "Yono Arcade", category: "High Bonus", version: "1.8.5", logo: "logo.png", link: "https://yonoarcade.game/?code=F55B9YXT3ZN&t=1786828693" },
    { name: "Yono 777", category: "High Bonus", version: "4.3.2", logo: "logo.png", link: "https://uonocode777.vip/?code=F9M5HQTCR9L&t=1786828753" },
    { name: "Game Rummy", category: "High Bonus", version: "2.6.9", logo: "logo.png", link: "https://gamesrummy.vip/?code=Q6W1UHF26Q4&t=1786829178" },
    { name: "Gogo Rummy", category: "High Bonus", version: "6.4.1", logo: "logo.png", link: "https://www.gogorummyfun.com/?code=8FWK5A4XC53&t=1786829070" },
    { name: "Hi Rummy", category: "High Bonus", version: "3.9.0", logo: "logo.png", link: "https://joinhirummy.cc/?code=RX3G3K6RKAN&t=1786829350" },
    { name: "Boss Rummy", category: "High Bonus", version: "1.5.3", logo: "logo.png", link: "https://www.bossrummyxx.com/?code=9HFS3SWHV17&t=1786827373" },
    { name: "Hindi777", category: "High Bonus", version: "7.2.6", logo: "logo.png", link: "https://www.hindi777agent5.com/?code=7LF2BNVLM76&t=1786829531" },
    { name: "Ind Club", category: "High Bonus", version: "4.8.4", logo: "logo.png", link: "http://indclub95.com/?code=34UWXNU7HM4&t=1786829663" },

    { name: "Ind Slots", category: "High Bonus", version: "2.5.7", logo: "logo.png", link: "https://www.indslotsgame.com/?code=EYMJJ4BPA6H&t=1786830646" },
    { name: "Inr Rummy", category: "High Bonus", version: "5.1.3", logo: "logo.png", link: "https://inrrummy.club/?code=JMQWTRET225&t=1786830856" },
    { name: "Jaiho777", category: "High Bonus", version: "1.4.8", logo: "logo.png", link: "https://jaiho777agent3.com/?code=KZMLB9Z8AUK&t=1786830962" },
    { name: "Love Rummy", category: "High Bonus", version: "3.6.2", logo: "logo.png", link: "https://www.3loverummy.com/?code=AFC3G8WG874&t=1786831074" },
    { name: "Jaiho Win", category: "High Bonus", version: "6.0.7", logo: "logo.png", link: "https://www.jaihowin5.com/?code=1XNHMVKJC37&t=1786831195" },
    { name: "Mbm Bet", category: "High Bonus", version: "2.2.4", logo: "logo.png", link: "https://www.mbmbet8.com/?code=UPHHAUCTU1N&t=1786831309" },
    { name: "Neta Vip", category: "High Bonus", version: "4.7.9", logo: "logo.png", link: "https://www.neta1.vip/?code=DR0RXLKPGE4&t=1786831505" },
    { name: "Ok Rummy", category: "High Bonus", version: "1.2.6", logo: "logo.png", link: "https://www.okrummy28.com/?code=H2GZEY7Z7NA&t=1786831628" },
    { name: "Saga Slots", category: "High Bonus", version: "5.6.0", logo: "logo.png", link: "https://www.sagaslots6.com/?code=41L7A6AKX5D&t=1786831787" },

    { name: "Abc Rummy", category: "High Bonus", version: "3.3.5", logo: "logo.png", link: "https://www.abcrummy8.com/?code=75CKGPMLLCF&t=1786831872" },
    { name: "Top Rummy", category: "High Bonus", version: "7.1.8", logo: "logo.png", link: "https://www.toprummy.xyz/?code=7K9J48XWHYT&t=1786831948" },
    { name: "Yn777", category: "High Bonus", version: "2.0.9", logo: "logo.png", link: "https://www.yn077.com/?code=4SW5U6RYC42&t=1786832038" },
    { name: "Yono Games", category: "High Bonus", version: "4.2.7", logo: "logo.png", link: "http://youonogamesluckydraw.com/?code=P6RXQSS6&t=1786832248" },
    { name: "Rummy 77", category: "High Bonus", version: "1.7.2", logo: "logo.png", link: "https://rummy77bet.net/?code=F3VGDT5U6QA&t=1787312679" },
    { name: "Mqm Bet", category: "High Bonus", version: "5.3.6", logo: "logo.png", link: "https://5mqmshare.vip?pid=336805888&channel=2070983&pkg=com.mqmrfkfsxwas.vva" },
    { name: "Gold Rummy", category: "High Bonus", version: "3.0.8", logo: "logo.png", link: "https://goldrummy27.com/?code=JLX8SN6VVWL&t=1788172885" },
    { name: "DiwaX", category: "High Bonus", version: "6.5.1", logo: "logo.png", link: "https://diwaxshare.net?pid=344576272&channel=2010002&t=pdd2&pkg=com.diwax002.app" }
];
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
