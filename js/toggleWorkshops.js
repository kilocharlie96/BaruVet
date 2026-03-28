document.addEventListener('click', function (e) {
    // Nájdeme najbližšiu hlavičku
    const header = e.target.closest('.dropdown-header');
    if (!header) return;

    // Nájdeme zoznam, ktorý nasleduje po hlavičke
    const targetList = header.nextElementSibling;

    if (targetList && targetList.classList.contains('workshops')) {
        // 1. Prepne zobrazenie zoznamu (display: block/none)
        targetList.classList.toggle('show');

        // 2. Prepne triedu na hlavičke, čo spustí rotáciu span-u v CSS
        header.classList.toggle('active');
    }
});