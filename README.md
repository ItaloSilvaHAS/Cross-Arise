
# Cross Arise - RPG Website 🎲⚔️

## 🎮 Sobre o Projeto

**Cross Arise** nasceu da paixão por RPGs, animes e universos fantásticos! Este site é um projeto pessoal que combina elementos de diferentes mundos que amo: desde os clássicos RPGs de mesa até universos como Fairy Tail, Naruto, Bleach, Solo Leveling e muitos outros.

O que começou como uma simples ideia de criar um sistema de RPG customizado evoluiu para um site completo com sistema de personagens, classes únicas, raças diversas, itens mágicos e uma rica mitologia própria. Cada elemento foi cuidadosamente pensado para proporcionar uma experiência imersiva e divertida.

## ✨ Características Principais

- **Sistema de Login**: Acesso personalizado aos personagens
- **Classes Únicas**: Desde Mestres das Runas até Monarcas Sombrios
- **Raças Diversas**: Humanos, Demônios, Dragões, Vampiros e mais
- **Loja Interativa**: Sistema de compras com carrinho
- **Mitologia Rica**: História própria e ciclos de poder
- **Design Responsivo**: Funciona perfeitamente em qualquer dispositivo

## 🗂️ Estrutura do Projeto

```
Cross Arise/
├── 🎨 assets/                     # Recursos visuais e funcionais
│   ├── css/                      # Estilos customizados
│   │   └── main.css             # CSS principal com tema personalizado
│   ├── js/                      # Scripts interativos
│   │   ├── config.js            # Configurações de caminhos
│   │   └── main.js             # Funções principais
│   └── images/                  # Biblioteca de imagens organizadas
│       ├── characters/          # Personagens do universo
│       ├── classes/            # Imagens das classes
│       ├── races/              # Raças disponíveis
│       ├── shop/               # Itens da loja
│       ├── monarchs/           # Os poderosos Monarcas
│       ├── zanpakutou/         # Espadas espirituais
│       ├── clans/              # Clãs ninja
│       ├── dragons/            # Dragon Slayers
│       ├── mages/              # Magias e elementos
│       ├── zodiac/             # Cavaleiros do Zodíaco
│       └── misc/               # Imagens diversas
├── 📄 pages/                     # Páginas do site
│   ├── classes/                 # Páginas detalhadas das classes
│   │   ├── paginaMonarcas.html # Os 8 Monarcas Supremos
│   │   ├── MestreDasRunas.html # Sistema de runas mágicas
│   │   ├── DragonSlayerMagic.html # Matadores de dragões
│   │   ├── ClansNinjas.html    # Clãs ninja e elementos
│   │   ├── ZodiacosPage.html   # Cavaleiros do Zodíaco
│   │   └── [outras classes...]
│   ├── shop/                    # Sistema de loja
│   │   └── loja.html           # Loja interativa
│   ├── classes.html             # Hub das classes
│   ├── racas.html              # Página das raças
│   ├── historia.html           # Lore e mitologia
│   ├── mapa.html               # Mapa do mundo
│   └── sistemas.html           # Mecânicas de jogo
├── 🔧 components/               # Componentes reutilizáveis
├── 📊 data/                     # Dados estruturados
│   └── characters.json         # Base de personagens
├── 🏠 index.html               # Sistema de login
├── 🌟 index2.html              # Página principal (hub)
└── 📖 README.md                # Esta documentação
```

## 🎨 Identidade Visual

### Paleta de Cores
```css
🔴 --color-primary: #e03e36        /* Vermelho Cross Arise */
🟤 --color-primary-dark: #b32a23   /* Vermelho intenso */
🌸 --color-primary-light: #f0b1aa  /* Rosa suave */
⚫ --bg-dark: #0a0a0a              /* Fundo profundo */
🔵 --text-primary: #66fcf1         /* Ciano brilhante */
💎 --text-accent: #45a29e          /* Azul-esverdeado */
```

### Tipografia
- **Títulos**: Orbitron (futurística e impactante)
- **Corpo**: Sistema padrão otimizado para legibilidade

## 🚀 Navegação e Uso

### 🏠 Páginas Principais
1. **index2.html** - Hub principal com navegação para todas as seções
2. **index.html** - Sistema de login para acessar personagens
3. **pages/classes.html** - Galeria completa das classes disponíveis

### 🎭 Classes Disponíveis
- **🔥 Monarcas**: Os 8 seres supremos (Chamas, Gelo, Luz, Sombras, Vazio, Infinito, Destruição, Criação)
- **🔮 Mestre das Runas**: Manipuladores de símbolos mágicos ancestrais
- **🐉 Dragon Slayers**: Caçadores com poderes dracônicos
- **🥷 Ninjas**: Clãs com domínio elemental
- **⚔️ Shinigamis**: Portadores de Zanpakutou
- **🌟 Cavaleiros do Zodíaco**: Guerreiros das constelações
- E muitas outras!

### 🧬 Raças Jogáveis
- **👥 Humanos**: Versáteis e adaptáveis
- **😈 Demônios**: Poder sombrio e resistência
- **🐲 Dragões**: Força ancestral e magia
- **🧛 Vampiros**: Imortalidade e habilidades noturnas
- **🌊 Slimes**: Adaptabilidade extrema
- **🔀 Mestiços**: Combinações únicas

## 💻 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Estilização avançada com gradientes e animações
- **JavaScript**: Interatividade e funcionalidades dinâmicas
- **JSON**: Armazenamento estruturado de dados
- **Font Awesome**: Ícones profissionais
- **Google Fonts**: Tipografia personalizada

## 📱 Responsividade

Totalmente otimizado para todos os dispositivos:
- 📱 **Mobile**: < 768px (experiência touch-friendly)
- 📱 **Tablet**: 768px - 1024px (layout adaptado)
- 💻 **Desktop**: > 1024px (experiência completa)

## 🛠️ Configuração e Personalização

### Caminhos de Imagem
```javascript
// Use o sistema de configuração centralizada
CONFIG.getImagePath('CLASSES', 'warrior.jpg')
// Retorna: /assets/images/classes/warrior.jpg
```

### Customização Visual
Edite as variáveis CSS em `assets/css/main.css` para personalizar cores, fontes e espaçamentos.

### Adicionando Conteúdo
- **Novos personagens**: Edite `data/characters.json`
- **Novas classes**: Crie páginas em `pages/classes/`
- **Novas imagens**: Organize na estrutura de `assets/images/`

## 🎯 Recursos Únicos

### Sistema de Monarcas
Os 8 Monarcas representam o ápice do poder, cada um dominando um aspecto fundamental:
- 🔥 **Chamas** ↔️ ❄️ **Gelo** ↔️ 💡 **Luz** ↔️ 🌑 **Sombras** ↔️ 🕳️ **Vazio** ↔️ ♾️ **Infinito** ↔️ 💥 **Destruição** ↔️ ✨ **Criação**

### Sistema de Runas
Linguagem mágica ancestral com:
- Runas elementais básicas
- Combinações complexas
- Efeitos de transformação
- Grimórios para facilitar conjuração

### Loja Interativa
- Carrinho de compras funcional
- Categorias organizadas
- Sistema de moedas do jogo
- Itens únicos e raros

## 🌟 Próximas Atualizações

- [ ] 🔍 Sistema de busca avançada
- [ ] 💫 Mais animações e transições
- [ ] ❤️ Sistema de favoritos
- [ ] 🌓 Alternância entre tema claro/escuro
- [ ] 📱 Progressive Web App (PWA)
- [ ] 🎵 Trilha sonora ambiente
- [ ] 🎲 Sistema de dados virtuais
- [ ] 👥 Modo cooperativo

## 🤝 Contribuindo

Sinta-se à vontade para sugerir melhorias! Se você também é apaixonado por RPGs e quer contribuir:

1. **Mantenha a organização** das pastas
2. **Siga o padrão** de nomenclatura
3. **Teste a responsividade** em diferentes dispositivos
4. **Respeite a identidade visual** do projeto

## 💝 Agradecimentos

Este projeto é uma homenagem a todos os criadores dos universos que me inspiraram:
- Hiro Mashima (Fairy Tail)
- Masashi Kishimoto (Naruto)  
- Tite Kubo (Bleach)
- Chugong (Solo Leveling)
- E todos os mestres de RPG que tornaram a imaginação realidade!

---

**Cross Arise** - Onde a imaginação encontra a aventura! 🎮✨

*Desenvolvido com muito ❤️ e paixão por RPGs por Italo*

© 2024 Cross Arise. Feito para a comunidade RPG com amor e dedicação.
