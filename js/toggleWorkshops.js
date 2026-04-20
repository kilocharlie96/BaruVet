document.addEventListener('click', function (e) {
    const header = e.target.closest('.dropdown-header');
    if (!header) return;

    // Nájdeme kontajner .dropdown-content, ktorý je hneď za hlavičkou
    const content = header.nextElementSibling;

    if (content && content.classList.contains('dropdown-content')) {
        // Prepneme triedu show pre animáciu výšky
        content.classList.toggle('show');

        // Prepneme triedu active pre rotáciu šípky
        header.classList.toggle('active');
    }
});