document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.15 // 15% элемента видно — начинаем анимацию
    });

    document.querySelectorAll(".scroll-fade").forEach((el) => observer.observe(el));

    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const line1 = document.getElementById('line1');
    const line2 = document.getElementById('line2');
    const line3 = document.getElementById('line3');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    menuButton.addEventListener('click', toggleMenu);

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });

    function toggleMenu() {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('opacity-0');
        mobileMenu.classList.toggle('translate-y-[-10px]');

        line1.classList.toggle('rotate-45');
        line1.classList.toggle('translate-y-1.5');

        line3.classList.toggle('-rotate-45');
        line3.classList.toggle('-translate-y-1.5');

        line2.classList.toggle('opacity-0');

        // Меняем цвет линий
        const isOpen = line1.classList.contains('rotate-45');
        if (isOpen) {
            line1.classList.remove('bg-gray-700');
            line2.classList.remove('bg-gray-700');
            line3.classList.remove('bg-gray-700');

            line1.classList.add('bg-red-600');
            line2.classList.add('bg-red-600');
            line3.classList.add('bg-red-600');
        } else {
            line1.classList.remove('bg-red-600');
            line2.classList.remove('bg-red-600');
            line3.classList.remove('bg-red-600');

            line1.classList.add('bg-gray-700');
            line2.classList.add('bg-gray-700');
            line3.classList.add('bg-gray-700');
        }
    }


    function closeMenu() {
        if (!mobileMenu.classList.contains('hidden')) {
            toggleMenu();
        }
    }

    // Плавный скролл при клике на якорные ссылки
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // подстройка под высоту хедера
                    behavior: 'smooth'
                });
            }
        });
    });
});
