// ===== MOBILE MENU TOGGLE =====
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle?.addEventListener('click', () => {
    navMenu?.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu?.classList.remove('active');
    });
});

// ===== FILTRO DE TRABALHOS =====
const filtroButtons = document.querySelectorAll('.filtro-btn');
const trabalhoCards = document.querySelectorAll('.trabalho-card');

filtroButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove classe active de todos os botões
        filtroButtons.forEach(btn => btn.classList.remove('active'));
        // Adiciona classe active ao botão clicado
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        // Filtra os cards
        trabalhoCards.forEach(card => {
            const category = card.getAttribute('data-category');
            
            if (filterValue === 'todos' || category === filterValue) {
                card.classList.remove('hidden');
                setTimeout(() => {
                    card.style.opacity = '1';
                }, 10);
            } else {
                card.classList.add('hidden');
                card.style.opacity = '0';
            }
        });
    });
});

// ===== VISUALIZADOR DE PALETAS ===== 
const paletteVisualizer = {
    'rosa-moderno': {
        name: 'Rosa Moderno',
        description: 'Sofisticação contemporânea. Transmite criatividade, elegância e confiança.',
        colors: [
            { name: 'Primário', hex: '#D4909E' },
            { name: 'Escuro', hex: '#B87584' },
            { name: 'Acentuado', hex: '#E0ACBE' },
            { name: 'Claro', hex: '#FFFBF7' }
        ]
    },
    'rosa-preto': {
        name: 'Rosa & Preto',
        description: 'Contraste profissional. Comunica força, profissionalismo e modernidade.',
        colors: [
            { name: 'Preto', hex: '#1F1F1F' },
            { name: 'Rosa', hex: '#D4909E' },
            { name: 'Rosa Claro', hex: '#E0ACBE' },
            { name: 'Fundo', hex: '#FFFBF7' }
        ]
    },
    'rosa-suave': {
        name: 'Rosa Suave',
        description: 'Delicadeza aconchegante. Traz leveza, acessibilidade e autenticidade.',
        colors: [
            { name: 'Castanho', hex: '#C8A894' },
            { name: 'Rosa Claro', hex: '#E0ACBE' },
            { name: 'Bege', hex: '#D8C4B0' },
            { name: 'Cream', hex: '#EBE0D0' }
        ]
    },
    'rosa-premium': {
        name: 'Rosa Premium',
        description: 'Exclusividade elegante. Comunica sofisticação, prestígio e alto padrão.',
        colors: [
            { name: 'Preto', hex: '#1F1F1F' },
            { name: 'Rosa Dourado', hex: '#D4909E' },
            { name: 'Rosa Escuro', hex: '#B87584' },
            { name: 'Cream', hex: '#F5EDE0' }
        ]
    },
    'azul-marino': {
        name: 'Azul Marinho',
        description: 'Confiança e estabilidade. Perfeito para finanças, tecnologia e corporativo.',
        colors: [
            { name: 'Azul Marinho', hex: '#1B3A6B' },
            { name: 'Azul Real', hex: '#2E5C8A' },
            { name: 'Azul Claro', hex: '#5B8AC5' },
            { name: 'Branco', hex: '#F8F9FA' }
        ]
    },
    'verde-natureza': {
        name: 'Verde Natureza',
        description: 'Crescimento e sustentabilidade. Ideal para eco-friendly e wellness.',
        colors: [
            { name: 'Verde Escuro', hex: '#2D5016' },
            { name: 'Verde Médio', hex: '#4A7C3C' },
            { name: 'Verde Claro', hex: '#8AC34A' },
            { name: 'Off-White', hex: '#F4F7F1' }
        ]
    },
    'laranja-quente': {
        name: 'Laranja Quente',
        description: 'Energia e criatividade. Ótimo para alimentos, startups e eventos.',
        colors: [
            { name: 'Laranja Escuro', hex: '#D84315' },
            { name: 'Laranja', hex: '#FF7043' },
            { name: 'Laranja Claro', hex: '#FFAB91' },
            { name: 'Branco', hex: '#FFFFFF' }
        ]
    },
    'roxo-elegante': {
        name: 'Roxo Elegante',
        description: 'Criatividade e misticismo. Perfeito para beleza, design e inovação.',
        colors: [
            { name: 'Roxo Escuro', hex: '#512DA8' },
            { name: 'Roxo', hex: '#7E57C2' },
            { name: 'Roxo Claro', hex: '#B39DDB' },
            { name: 'Branco Cremoso', hex: '#F5F5F5' }
        ]
    },
    'cinza-minimalista': {
        name: 'Cinza Minimalista',
        description: 'Simplicidade e elegância. Para arquitetura, moda e design limpo.',
        colors: [
            { name: 'Cinza Escuro', hex: '#424242' },
            { name: 'Cinza Médio', hex: '#757575' },
            { name: 'Cinza Claro', hex: '#BDBDBD' },
            { name: 'Branco Puro', hex: '#FFFFFF' }
        ]
    },
    'turquesa-tropical': {
        name: 'Turquesa Tropical',
        description: 'Frescor e vitalidade. Ideal para viagens, turismo e lifestyle.',
        colors: [
            { name: 'Turquesa Escuro', hex: '#00695C' },
            { name: 'Turquesa', hex: '#009688' },
            { name: 'Turquesa Claro', hex: '#80CBC4' },
            { name: 'Branco', hex: '#FFFFFF' }
        ]
    },
    'vermelho-luxo': {
        name: 'Vermelho Luxo',
        description: 'Paixão e sofisticação. Para marcas de luxo, restaurantes e fashion.',
        colors: [
            { name: 'Vermelho Escuro', hex: '#991C1C' },
            { name: 'Vermelho', hex: '#D32F2F' },
            { name: 'Vermelho Claro', hex: '#E57373' },
            { name: 'Off-White', hex: '#FAF8F6' }
        ]
    },
    'amarelo-dourado': {
        name: 'Amarelo Dourado',
        description: 'Otimismo e riqueza. Perfeito para serviços premium e joias.',
        colors: [
            { name: 'Dourado Escuro', hex: '#B8860B' },
            { name: 'Dourado', hex: '#FFD700' },
            { name: 'Dourado Claro', hex: '#FEE8C3' },
            { name: 'Branco Quente', hex: '#FFFEF5' }
        ]
    },
    'magenta-vibrante': {
        name: 'Magenta Vibrante',
        description: 'Energia e modernidade. Perfeito para agências criativas e tecnologia.',
        colors: [
            { name: 'Magenta Escuro', hex: '#C2185B' },
            { name: 'Magenta', hex: '#E91E63' },
            { name: 'Magenta Claro', hex: '#F48FB1' },
            { name: 'Branco', hex: '#FFFFFF' }
        ]
    },
    'coral-vivo': {
        name: 'Coral Vivo',
        description: 'Entusiasmo e diversão. Ideal para startups, social media e eventos.',
        colors: [
            { name: 'Coral Escuro', hex: '#FF5252' },
            { name: 'Coral', hex: '#FF6E40' },
            { name: 'Coral Claro', hex: '#FFAB91' },
            { name: 'Branco', hex: '#FFF5F4' }
        ]
    },
    'indigo-profundo': {
        name: 'Índigo Profundo',
        description: 'Autoridade e confiança. Excelente para financeiro e consultoria.',
        colors: [
            { name: 'Índigo Escuro', hex: '#283593' },
            { name: 'Índigo', hex: '#3F51B5' },
            { name: 'Índigo Claro', hex: '#7986CB' },
            { name: 'Branco', hex: '#F5F5F5' }
        ]
    },
    'marrom-rustico': {
        name: 'Marrom Rústico',
        description: 'Calidez e autenticidade. Perfeito para cafés, artesanato e lifestyle.',
        colors: [
            { name: 'Marrom Escuro', hex: '#5D4E37' },
            { name: 'Marrom', hex: '#8B6F47' },
            { name: 'Marrom Claro', hex: '#D2B48C' },
            { name: 'Bege Quente', hex: '#FFF8F3' }
        ]
    },
    'ciano-moderno': {
        name: 'Ciano Moderno',
        description: 'Inovação e tecnologia. Ideal para startups tech e software.',
        colors: [
            { name: 'Ciano Escuro', hex: '#0097A7' },
            { name: 'Ciano', hex: '#00BCD4' },
            { name: 'Ciano Claro', hex: '#80DEEA' },
            { name: 'Branco', hex: '#FFFFFF' }
        ]
    },
    'paleta-vintage': {
        name: 'Vintage Clássico',
        description: 'Nostalgia e elegância. Perfeito para moda retrô e antigos.',
        colors: [
            { name: 'Marrom Vintage', hex: '#704214' },
            { name: 'Cobre', hex: '#B87333' },
            { name: 'Bege Vintage', hex: '#D4A574' },
            { name: 'Creme Rosa', hex: '#FFF0F5' }
        ]
    },
    'paleta-verde-jade': {
        name: 'Verde Jade',
        description: 'Serenidade e equilíbrio. Perfeito para wellness, spa e saúde.',
        colors: [
            { name: 'Jade Escuro', hex: '#1B7B5C' },
            { name: 'Jade', hex: '#2DA881' },
            { name: 'Jade Claro', hex: '#A8D8C8' },
            { name: 'Branco Suave', hex: '#F5F9F8' }
        ]
    },
    'paleta-laranja-tropical': {
        name: 'Laranja Tropical',
        description: 'Energia e diversão. Ideal para turismo, viagens e lazer.',
        colors: [
            { name: 'Laranja Escuro', hex: '#E65100' },
            { name: 'Laranja', hex: '#FF7043' },
            { name: 'Laranja Claro', hex: '#FFAB91' },
            { name: 'Branco Quente', hex: '#FFF3E0' }
        ]
    },
    'paleta-roxo-regalia': {
        name: 'Roxo Regalia',
        description: 'Criatividade e luxo. Excelente para moda, beleza e eventos premium.',
        colors: [
            { name: 'Roxo Escuro', hex: '#4A148C' },
            { name: 'Roxo', hex: '#7B1FA2' },
            { name: 'Roxo Claro', hex: '#CE93D8' },
            { name: 'Branco Rosa', hex: '#F3E5F5' }
        ]
    },
    'paleta-turquesa-premium': {
        name: 'Turquesa Premium',
        description: 'Sofisticação moderna. Perfeito para luxo, joias e alta moda.',
        colors: [
            { name: 'Turquesa Escuro', hex: '#00695C' },
            { name: 'Turquesa', hex: '#009688' },
            { name: 'Turquesa Claro', hex: '#80CBC4' },
            { name: 'Branco', hex: '#FFFFFF' }
        ]
    },
    'paleta-vermelho-vino': {
        name: 'Vermelho Vinho',
        description: 'Sofisticação clássica. Ideal para restaurantes, vinícolas e gastro.',
        colors: [
            { name: 'Vinho Escuro', hex: '#78002E' },
            { name: 'Vinho', hex: '#B71C1C' },
            { name: 'Vinho Claro', hex: '#EF5350' },
            { name: 'Branco Quente', hex: '#FFF5F6' }
        ]
    },
    'paleta-cinza-elegante': {
        name: 'Cinza Elegante',
        description: 'Minimalismo e sofisticação. Perfeito para arquitetura e design.',
        colors: [
            { name: 'Cinza Escuro', hex: '#424242' },
            { name: 'Cinza Médio', hex: '#757575' },
            { name: 'Cinza Claro', hex: '#BDBDBD' },
            { name: 'Branco Off', hex: '#FAFAFA' }
        ]
    },
    'paleta-lima-fresco': {
        name: 'Lima Fresco',
        description: 'Vitalidade e natureza. Ideal para alimentos saudáveis e orgânicos.',
        colors: [
            { name: 'Lima Escuro', hex: '#558B2F' },
            { name: 'Lima', hex: '#9CCC65' },
            { name: 'Lima Claro', hex: '#C6FF00' },
            { name: 'Branco', hex: '#FFFFFF' }
        ]
    },
    'paleta-tons-terra': {
        name: 'Tons de Terra',
        description: 'Natureza e autenticidade. Perfeito para construção e imóveis.',
        colors: [
            { name: 'Marrom Terra', hex: '#6D4C41' },
            { name: 'Areia ', hex: '#A1887F' },
            { name: 'Barro', hex: '#D7CCC8' },
            { name: 'Bege Terra', hex: '#EFEBE9' }
        ]
    },
    'paleta-pastel-delicado': {
        name: 'Pastel Delicado',
        description: 'Leveza e ternura. Ideal para maternidade, infantil e lifestyle.',
        colors: [
            { name: 'Rosa Pastel', hex: '#F8BBD0' },
            { name: 'Azul Pastel', hex: '#BBDEFB' },
            { name: 'Amarelo Pastel', hex: '#FFF9C4' },
            { name: 'Verde Pastel', hex: '#C8E6C9' }
        ]
    },
    'paleta-neon-futurista': {
        name: 'Neon Futurista',
        description: 'Energia e inovação. Perfeito para gamers, tech e música.',
        colors: [
            { name: 'Rosa Neon', hex: '#FF00FF' },
            { name: 'Ciano Neon', hex: '#00FFFF' },
            { name: 'Amarelo Neon', hex: '#FFFF00' },
            { name: 'Preto Profundo', hex: '#0A0E27' }
        ]
    },
    'paleta-azul-marinho': {
        name: 'Azul Marinho',
        description: 'Confiança e estabilidade. Excelente para financeiro e B2B.',
        colors: [
            { name: 'Azul Marinho Escuro', hex: '#0D47A1' },
            { name: 'Azul Marinho', hex: '#1565C0' },
            { name: 'Azul Marinho Claro', hex: '#42A5F5' },
            { name: 'Branco Azulado', hex: '#E3F2FD' }
        ]
    },
    'paleta-ouro-luxuoso': {
        name: 'Ouro Luxuoso',
        description: 'Prestígio e elegância. Perfeito para boutiques e produtos premium.',
        colors: [
            { name: 'Ouro Escuro', hex: '#8B7355' },
            { name: 'Ouro', hex: '#D4AF37' },
            { name: 'Ouro Claro', hex: '#F4E8D8' },
            { name: 'Branco Creme', hex: '#FFFEF0' }
        ]
    }
};

// Renderizar visualizador de paletas
function renderPaletteVisualizer(paletteKey) {
    const palette = paletteVisualizer[paletteKey];
    if (!palette) return;

    // Atualizar nome e descrição
    document.getElementById('paletteName').textContent = palette.name;
    document.getElementById('paletteDesc').textContent = palette.description;

    // Renderizar barras de cores
    const paletteDisplay = document.getElementById('paletteDisplay');
    paletteDisplay.innerHTML = '';
    
    palette.colors.forEach(color => {
        const bar = document.createElement('div');
        bar.className = 'palette-color-bar';
        bar.style.backgroundColor = color.hex;
        bar.title = `${color.name} - ${color.hex}`;
        bar.addEventListener('click', () => copyToClipboard(color.hex, bar));
        paletteDisplay.appendChild(bar);
    });

    // Renderizar cards de cores
    palette.colors.forEach((color, index) => {
        const card = document.getElementById(`color${index + 1}`);
        if (card) {
            const colorBox = card.querySelector('.color-box');
            const h4 = card.querySelector('h4');
            const code = card.querySelector('code');
            
            colorBox.style.backgroundColor = color.hex;
            h4.textContent = color.name;
            code.textContent = color.hex;
            
            // Adicionar evento de click para copiar
            card.addEventListener('click', () => copyToClipboard(color.hex, code));
            
            // Copiar no clique do botão
            card.querySelector('.copy-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                copyToClipboard(color.hex, code);
            });
        }
    });
}

// Copiar para clipboard
function copyToClipboard(text, element) {
    navigator.clipboard.writeText(text).then(() => {
        const originalText = element.textContent;
        element.textContent = '✓ Copiado!';
        setTimeout(() => {
            element.textContent = originalText;
        }, 2000);
    });
}

// Evento para botões de seleção de paleta
document.querySelectorAll('.palette-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.palette-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const paletteKey = btn.getAttribute('data-palette');
        renderPaletteVisualizer(paletteKey);
    });
});

// Inicializar com a primeira paleta
renderPaletteVisualizer('rosa-moderno');

// ===== CONFIGURADOR DE CORES E ESTILOS =====
const colorPaletteSelect = document.getElementById('colorPalette');
const styleSelect = document.getElementById('styleSelect');
const previewBox = document.getElementById('previewBox');

const palettes = {
    rose: {
        primary: '#D97BA9',
        secondary: '#1F1F1F',
        accent: '#E89BB7',
        light: '#FFFBF7',
        name: 'Rosa Moderno'
    },
    forest: {
        primary: '#1F1F1F',
        secondary: '#D97BA9',
        accent: '#E89BB7',
        light: '#FFFBF7',
        name: 'Rosa & Preto'
    },
    earthy: {
        primary: '#E89BB7',
        secondary: '#1F1F1F',
        accent: '#F4A5C4',
        light: '#FAE8F0',
        name: 'Rosa Suave'
    },
    luxury: {
        primary: '#1F1F1F',
        secondary: '#E89BB7',
        accent: '#D97BA9',
        light: '#F5D5E8',
        name: 'Rosa Premium'
    }
};

const styles = {
    minimal: {
        name: 'Minimalista Elegante',
        description: 'Design limpo com mucho espaço em branco'
    },
    sofisticado: {
        name: 'Sofisticado',
        description: 'Design elegante e profissional com detalhes refinados'
    },
    modern: {
        name: 'Corporativo Moderno',
        description: 'Layout profissional e contemporâneo'
    },
    zen: {
        name: 'Zen Moderno',
        description: 'Inspiração minimalista e funcionalidade'
    }
};

function updatePreview() {
    const selectedPalette = colorPaletteSelect.value;
    const selectedStyle = styleSelect.value;
    
    const paletteData = palettes[selectedPalette];
    const styleData = styles[selectedStyle];

    const previewContent = document.querySelector('.preview-content');
    
    // Criar preview visual
    previewContent.innerHTML = `
        <div style="text-align: center; color: white; padding: 20px;">
            <div style="
                background: linear-gradient(135deg, ${paletteData.primary}, ${paletteData.secondary});
                padding: 30px;
                border-radius: 8px;
                margin-bottom: 20px;
            ">
                <h3 style="margin: 0 0 10px 0; font-size: 20px;">Seu Website</h3>
                <p style="margin: 0; opacity: 0.9;">${styleData.name}</p>
            </div>
            <p style="color: #333; margin-bottom: 10px; font-weight: 600;">Paleta: ${paletteData.name}</p>
            <p style="color: #666; margin: 0; font-size: 14px;">${styleData.description}</p>
        </div>
    `;

    // Aplicar cores ao preview box
    previewBox.style.background = `linear-gradient(135deg, ${paletteData.light}, white)`;
    previewBox.style.borderTop = `4px solid ${paletteData.primary}`;
}

colorPaletteSelect?.addEventListener('change', updatePreview);
styleSelect?.addEventListener('change', updatePreview);

// Inicializar preview
updatePreview();

// ===== FORMULÁRIO DE CONTATO =====
const contactForm = document.getElementById('contactForm');

contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;

    // Preparar mensagem para enviar via mailto
    const subject = `Novo Projeto - ${service}`;
    const body = `
Nome: ${name}
Email: ${email}
Serviço: ${service}

Mensagem:
${message}
    `.trim();

    // Redirecionar para mailto
    window.location.href = `mailto:takelu.systems@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Limpar formulário
    setTimeout(() => {
        contactForm.reset();
    }, 100);
});

// ===== SMOOTH SCROLL PARA NAVEGAÇÃO =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== ANIMAÇÃO DE ENTRADA PARA ELEMENTOS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar cards
document.querySelectorAll('.servico-card, .about-card, .info-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// ===== ATIVAR LINK ATIVO NA NAVEGAÇÃO =====
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu a');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===== MOBILE MENU TOGGLE - CSS CLASS =====
const style = document.createElement('style');
style.textContent = `
    @media (max-width: 768px) {
        .nav-menu.active {
            display: flex !important;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background-color: var(--primary-cream);
            padding: 20px;
            gap: 15px;
            box-shadow: var(--shadow-md);
        }

        .nav-menu a.active::after {
            width: 100%;
        }
    }
`;
document.head.appendChild(style);

// ===== EFEITOS DE HOVER =====
document.querySelectorAll('.filtro-btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// ===== ANIMAÇÃO DE SCROLL SUAVE PARA NAVBAR =====
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        // Scrolling down
        navbar.style.boxShadow = 'var(--shadow-md)';
    } else {
        // Scrolling up
        navbar.style.boxShadow = 'var(--shadow-sm)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

console.log('✨ Takelu Systems - Website carregado com sucesso!');
