const menuItems = [
    {
        name: 'Manqoushe',
        description: 'Traditional Lebanese baked flatbread topped with fresh herbs, cheese, and zaatar.',
        price: 'L.L 4,500',
        category: 'breakfast',
        icon: 'fas fa-bread-slice'
    },
    {
        name: 'Kaak',
        description: 'Crunchy sesame bread rings, perfect with tea, cheese, or jam.',
        price: 'L.L 3,000',
        category: 'breads',
        icon: 'fas fa-bread-slice'
    },
    {
        name: 'Croissant',
        description: 'Buttery, flaky pastry baked fresh every morning.',
        price: 'L.L 2,500',
        category: 'pastries',
        icon: 'fas fa-croissant'
    },
    {
        name: 'Sfiha',
        description: 'Savory Lebanese minced meat pie with aromatic spices.',
        price: 'L.L 5,500',
        category: 'breakfast',
        icon: 'fas fa-utensils'
    },
    {
        name: 'Baguette',
        description: 'Crusty artisan bread with a soft center, great for sandwiches.',
        price: 'L.L 2,000',
        category: 'breads',
        icon: 'fas fa-bread-slice'
    },
    {
        name: 'Baklava',
        description: 'Sweet layers of pastry and nuts glazed with syrup.',
        price: 'L.L 6,000',
        category: 'pastries',
        icon: 'fas fa-cookie-bite'
    }
];

const menuGrid = document.getElementById('menuGrid');
const filterButtons = document.querySelectorAll('.filter-btn');

function renderMenu(category = 'all') {
    menuGrid.innerHTML = '';

    const filteredItems = category === 'all'
        ? menuItems
        : menuItems.filter(item => item.category === category);

    filteredItems.forEach(item => {
        const card = document.createElement('article');
        card.className = 'menu-item';
        card.innerHTML = `
            <div class="menu-item-icon">
                <i class="${item.icon}"></i>
            </div>
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div class="item-meta">
                    <span class="item-price">${item.price}</span>
                    <span class="item-tag">${item.category}</span>
                </div>
            </div>
        `;
        menuGrid.appendChild(card);
    });
}

function filterMenu(category) {
    filterButtons.forEach(button => {
        button.classList.toggle('active', button.textContent.toLowerCase().includes(category) || (category === 'all' && button.textContent.toLowerCase() === 'all'));
    });
    renderMenu(category);
}

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for contacting Nasrallah Bake House. We will get back to you soon!');
    this.reset();
});

renderMenu();
