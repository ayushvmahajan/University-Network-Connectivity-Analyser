
/* =========================================
   UNIVERSITY NETWORK CONNECTIVITY ANALYSER
   ========================================= */


/* ---------- NAVIGATION ---------- */

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item => item.classList.remove("active"));

        this.classList.add("active");

    });

});


function scrollToSection(id) {

    const section = document.getElementById(id);

    if (section) {
        section.scrollIntoView({
            behavior: "smooth"
        });
    }

}


/* ---------- TOAST ---------- */

function showToast(message) {

    const toast = document.getElementById("toast");
    const toastMessage = document.getElementById("toastMessage");

    toastMessage.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);

}


/* ---------- NOTIFICATIONS ---------- */

function showNotifications() {

    showToast("3 network alerts require your attention.");

}


/* ---------- THEME ---------- */

function toggleTheme() {

    document.body.classList.toggle("light-mode");

    showToast("Theme preference updated.");

}


/* ---------- DEVICE MODAL ---------- */

function showDevice(name, type, status) {

    const modal = document.getElementById("deviceModal");

    document.getElementById("modalDeviceName").textContent = name;

    document.getElementById("modalDeviceType").textContent = type;

    document.getElementById("modalStatus").textContent = status;

    if (status === "Unstable") {

        document.getElementById("modalStatus").style.color = "#f5c451";

    } else if (status === "Disconnected") {

        document.getElementById("modalStatus").style.color = "#ff5d67";

    } else {

        document.getElementById("modalStatus").style.color = "#27d3a2";

    }

    modal.classList.add("show");

}


function closeModal() {

    document.getElementById("deviceModal")
        .classList.remove("show");

}


document.getElementById("deviceModal")
    .addEventListener("click", function(e) {

        if (e.target === this) {
            closeModal();
        }

    });


/* ---------- CONNECTIVITY ANALYSIS ---------- */

function analyzeConnection() {

    const source =
        document.getElementById("sourceIP").value.trim();

    const destination =
        document.getElementById("destinationIP").value.trim();

    if (!source || !destination) {

        showToast("Please enter both source and destination.");

        return;
    }


    const result =
        document.getElementById("analysisResult");

    result.classList.remove("hidden");


    const latency =
        Math.floor(Math.random() * 25) + 10;

    document.getElementById("resultLatency")
        .textContent = latency + " ms";


    showToast("Connectivity analysis completed.");

}


/* ---------- TOPOLOGY ---------- */

function refreshTopology() {

    showToast("Network topology refreshed.");

}


/* ---------- DEVICE SCAN ---------- */

function scanDevices() {

    showToast("Scanning university network...");

    setTimeout(() => {

        showToast("Scan completed. 1,284 devices detected.");

    }, 1800);

}


/* ---------- FAULT INVESTIGATION ---------- */

function resolveFault(button) {

    button.textContent = "Investigating...";

    button.disabled = true;

    setTimeout(() => {

        button.textContent = "Investigation Complete";

        button.style.color = "#27d3a2";

        showToast("Fault investigation completed.");

    }, 1500);

}


/* ---------- REPORT ---------- */

function generateReport() {

    const report = [
        "UNIVERSITY NETWORK CONNECTIVITY ANALYSER",
        "========================================",
        "",
        "NETWORK HEALTH REPORT",
        "",
        "Overall Network Health: 98.6%",
        "Connected Devices: 1,284",
        "Network Latency: 18 ms",
        "Bandwidth Usage: 68%",
        "Packet Loss: 0.2%",
        "Network Uptime: 99.8%",
        "",
        "----------------------------------------",
        "",
        "DEVICE STATUS",
        "",
        "Routers: 12/12 Online",
        "Switches: 48/50 Online",
        "Wi-Fi Access Points: 74/76 Online",
        "Servers: 18/18 Online",
        "",
        "----------------------------------------",
        "",
        "ACTIVE ISSUES",
        "",
        "1. Switch CS-02 - Critical",
        "2. Mechanical Department - High Latency",
        "3. Hostel Block A - Wi-Fi Congestion",
        "",
        "----------------------------------------",
        "",
        "RECOMMENDATIONS",
        "",
        "• Inspect Switch CS-02 power and network connection.",
        "• Check Mechanical Department router configuration.",
        "• Increase Wi-Fi capacity in Hostel Block A.",
        "• Monitor bandwidth usage during peak hours.",
        "",
        "----------------------------------------",
        "",
        "Generated by:",
        "University Network Connectivity Analyser",
        "",
        "Date: " + new Date().toLocaleString(),
        ""
    ].join("\n");

    const blob = new Blob([report], {
        type: "text/plain"
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "University-Network-Health-Report.txt";
    link.click();

    URL.revokeObjectURL(url);
    showToast("Network report generated.");

}


/* ---------- LIVE DATA SIMULATION ---------- */

setInterval(() => {

    const latency =
        Math.floor(Math.random() * 15) + 12;

    document.getElementById("latencyValue")
        .textContent = latency + " ms";


    const bandwidth =
        Math.floor(Math.random() * 15) + 60;

    document.getElementById("bandwidthValue")
        .textContent = bandwidth + "%";


    const deviceCount =
        1270 + Math.floor(Math.random() * 30);

    document.getElementById("deviceCount")
        .textContent =
        deviceCount.toLocaleString();

}, 5000);


/* ---------- SEARCH ---------- */

document.getElementById("globalSearch")
    .addEventListener("keyup", function () {

        const searchValue =
            this.value.toLowerCase();

        const rows =
            document.querySelectorAll("#deviceTable tr");

        rows.forEach(row => {

            const text =
                row.textContent.toLowerCase();

            row.style.display =
                text.includes(searchValue)
                    ? ""
                    : "none";

        });

    });


/* ---------- ACTIVE SECTION ON SCROLL ---------- */

const sections =
    document.querySelectorAll(".page-section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.id;
        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


/* ---------- INITIAL MESSAGE ---------- */

window.addEventListener("load", () => {

    setTimeout(() => {

        showToast(
            "University network monitoring system is online."
        );

    }, 1000);

});
