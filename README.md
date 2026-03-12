# � Takelu Systems - Portfólio Profissional

Bem-vindo ao seu site de portfólio! Este é um website **multi-páginas** moderno e responsivo desenvolvido com design profissional que destaca as múltiplas opções de paletas de cores para seus clientes escolherem.

## 🌐 Link do Site
**Visite o site em:** [https://takelusystems.github.io/Takelu.Systems/](https://takelusystems.github.io/Takelu.Systems/)

## 📌 Informação Importante
Este site foi desenvolvido para ser hospedado no **GitHub Pages**. Qualquer dúvida sobre como fazer deploy, consulte a seção "Publicar no GitHub Pages".

## � Estrutura do Projeto

```
Portifolio/
├── index.html              # Home (Landing Page)
├── sobre.html              # Página Sobre (Slogan + História)
├── trabalhos.html          # Página Trabalhos (Portfolio com filtros)
├── servicos.html           # Página Serviços (Paletas, Estilos, Configurador)
├── contato.html            # Página Contato (Formulário + Info)
├── assets/
│   ├── css/
│   │   └── style.css       # Estilo Profissional com Cores Personalizáveis
│   ├── js/
│   │   └── script.js       # Interatividades
│   └── images/
│       └── logo.png        # SUA LOGO
└── README.md               # Este arquivo
```

## 🎨 Paleta de Cores (PROFISSIONAL COM DESIGN MODERNO)

### Cores Principais
- **Rosa Primária**: #D84C6E (cor principal)
- **Rosa Escura**: #A83A54 (hover/acentos)
- **Rosa Clara**: #F5D9E8 (backgrounds claros)
- **Branco/Creme**: #FAFAFA (background principal)
- **Cinza Neutro**: #E8E8E8 (divisores)
- **Preto Suave**: #1A1A1A (textos)

### Design
- Paleta moderna e equilibrada
- Foco em acessibilidade e legibilidade
- Design profissional com acentos rose elegantes
- Compatível com múltiplas indústrias

## 📂 Como Usar

### 1. **Configurar Logo**
- Coloque seu arquivo `logo.png` em: `assets/images/logo.png`
- Tamanho recomendado: 200x200px (quadrado)
- Formatos aceitos: PNG, JPG, SVG

### 2. **Estrutura de Páginas**

#### 🏠 **HOME (index.html)**
- Seção hero com destaque
- Destaques de diferenciais
- CTA para conversão

#### 👩‍💼 **SOBRE (sobre.html)**
- Seu slogan ("Transformando ideias em experiências digitais memoráveis")
- História e criação da marca
- Valores e diferencial
- 4 cards com informações principais

#### 💼 **TRABALHOS (trabalhos.html)**
- Portfólio de projetos
- Filtros por categoria (Advocacia, Beleza)
- Cards com imagens e descrições
- Overlay ao passar mouse

#### 🎯 **SERVIÇOS (servicos.html)**
- 4 cards de serviços principais
  - Paleta de Cores (4 opções)
  - Estilos de Website (6 opções)
  - Funcionalidades
  - Diferenciais
- **Configurador Interativo** para testar cores e estilos em tempo real

#### 📧 **CONTATO (contato.html)**
- Links para redes sociais
- Formulário de contato completo
- Informações de contato direto
- Seção "Por que trabalhar comigo?"
- Horário de atendimento

## 🔧 Funcionalidades Implementadas

✅ Menu responsivo (mobile-friendly)
✅ Filtro de trabalhos por categoria
✅ Configurador de paleta de cores e estilos
✅ Formulário de contato funcional
✅ Animações suaves de scroll
✅ Design totalmente responsivo
✅ Integração com redes sociais

## 📱 Responsividade

O site funciona perfeitamente em:
- 💻 Desktop (1920px+)
- 📱 Tablet (768px a 1024px)
- 📱 Mobile (até 480px)

## 🚀 Como Abrir

1. Abra o arquivo `index.html` no navegador
2. Ou use um servidor local (recomendado):
   ```bash
   # Com Python 3
   python -m http.server 8000
   
   # Com Python 2
   python -m SimpleHTTPServer 8000
   
   # Com Node.js (se tiver instalado)
   npx http-server
   ```

3. Acesse `http://localhost:8000` no seu navegador

## 📝 Personalização

### Cores
- Edite as variáveis CSS em `assets/css/style.css` (linhas 1-8):
```css
:root {
    --primary-rose: #C4506B;
    --primary-black: #2B2B2B;
    --primary-green: #6B8E23;
    --primary-cream: #F5F1E8;
}
```

### Textos
- Edite o `index.html` para alterar títulos, descrições e conteúdos

### Links
- Atualize seus links de contato:
  - Email: `takelusystems@gmail.com`
  - Instagram: `@takelusystems`
  - GitHub: `takelusystems`

## 🎯 Design Profissional com Paletas Personalizáveis

✨ **Características Especiais**:
- Múltiplas paletas de cores para o cliente escolher
- Design limpo e profissional
- Cores pastéis sofisticadas
- Fontes elegantes (Playfair Display + Lora)
- Animações suaves e refinadas
- Totalmente responsivo (mobile, tablet, desktop)
- Foco em conversão e funcionalidade

## 🚀 Como Abrir Localmente

1. **Abra no navegador**:
   - Clique em qualquer arquivo `.html` → Abre no navegador padrão
   
2. **Ou use um servidor local** (recomendado):
   ```bash
   # Com Python 3
   python -m http.server 8000
   
   # Com Python 2
   python -m SimpleHTTPServer 8000
   
   # Com Node.js (se tiver instalado)
   npx http-server
   ```
   Depois acesse: `http://localhost:8000`

## 📱 Publicar no GitHub Pages

### Passo 1: Criar repositório no GitHub
1. Vá para [github.com](https://github.com)
2. Crie novo repositório chamado `takelusystems.github.io`
3. Escolha **Public**

### Passo 2: Enviar arquivos
```bash
# Navigate para a pasta do projeto
cd "c:\Users\flavi\Downloads\Portifolio"

# Iniciar git
git init

# Adicionar todos os arquivos
git add .

# Fazer commit
git commit -m "Portfólio Takelu Systems - Design Profissional"

# Adicionar remote
git remote add origin https://github.com/takelusystems/takelusystems.github.io.git

# Fazer push para main/master
git branch -M main
git push -u origin main
```

### Passo 3: Acessar seu site
Após alguns minutos, acesse: `https://takelusystems.github.io`

## 🎨 Customizações Sugeridas

### Mudar Cores Globais
Edite as variáveis CSS em `assets/css/style.css` (linhas 5-20):
```css
:root {
    --primary-rose: #E8A8C8;  /* Mude aqui */
    --primary-green: #A8D4A8;  /* Mude aqui */
    /* ... outras cores ... */
}
```

### Adicionar Mais Trabalhos
No `trabalhos.html`, copie um `.trabalho-card` e ajuste:
```html
<div class="trabalho-card" data-category="beleza">
    <div class="trabalho-image">
        <img src="sua-imagem.jpg" alt="Seu Projeto">
        <div class="trabalho-overlay">
            <a href="#" class="btn-view">Ver Projeto</a>
        </div>
    </div>
    <div class="trabalho-info">
        <h3>Seu Projeto</h3>
        <p>Descrição do projeto...</p>
        <div class="trabalho-tags">
            <span class="tag">Categoria</span>
        </div>
    </div>
</div>
```

### Editar Conteúdo das Páginas
Abra cada arquivo `.html` em um editor de texto e ajuste:
- Títulos
- Descrições
- Textos dos cards
- Links de redes sociais

## 💡 Dicas Profissionais

✅ Use imagens de alta qualidade (min. 800x600px)
✅ Mantenha descrições curtas e atrativas
✅ Atualize regularmente o portfólio
✅ Teste em diferentes dispositivos
✅ Use as redes sociais para promover seu site
✅ Coleta depoimentos de clientes satisfeitos

## 🌐 Informações de Contato

- **Email**: takelusystems@gmail.com
- **Instagram**: [@takelusystems](https://instagram.com/takelusystems)
- **GitHub**: [takelusystems](https://github.com/takelusystems)

---

**Desenvolvido com ❤️ para Takelu Systems**

Versão: 1.0
Data: Janeiro 2026
