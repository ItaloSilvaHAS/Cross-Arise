
// Cross Arise - Funções Principais

class CrossArise {
  constructor() {
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.initializeComponents();
  }

  setupEventListeners() {
    // Event listeners globais
    document.addEventListener('DOMContentLoaded', () => {
      this.setupNavigation();
      this.setupModals();
      this.setupAnimations();
    });
  }

  setupNavigation() {
    // Configurar navegação responsiva
    const menuBtns = document.querySelectorAll('[id*="menu-btn"]');
    const menus = document.querySelectorAll('[id*="menu"]');

    menuBtns.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        const menu = menus[index];
        if (menu) {
          menu.classList.toggle('hidden');
          const expanded = btn.getAttribute('aria-expanded') === 'true';
          btn.setAttribute('aria-expanded', !expanded);
        }
      });
    });

    // Fechar menu em telas pequenas ao clicar em links
    menus.forEach(menu => {
      const links = menu.querySelectorAll('a');
      links.forEach(link => {
        link.addEventListener('click', () => {
          if (window.innerWidth < 768) {
            menu.classList.add('hidden');
          }
        });
      });
    });
  }

  setupModals() {
    // Configurar modais
    const modals = document.querySelectorAll('[id*="Modal"]');
    
    modals.forEach(modal => {
      const openBtns = document.querySelectorAll(`[aria-controls="${modal.id}"]`);
      const closeBtns = modal.querySelectorAll('[aria-label*="Fechar"], [aria-label*="fechar"]');

      openBtns.forEach(btn => {
        btn.addEventListener('click', () => this.openModal(modal));
      });

      closeBtns.forEach(btn => {
        btn.addEventListener('click', () => this.closeModal(modal));
      });

      // Fechar modal com ESC
      modal.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          this.closeModal(modal);
        }
      });

      // Fechar modal clicando fora
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          this.closeModal(modal);
        }
      });
    });
  }

  openModal(modal) {
    modal.classList.remove('hidden');
    modal.focus();
    document.body.style.overflow = 'hidden';
  }

  closeModal(modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  setupAnimations() {
    // Configurar animações de entrada
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observar elementos com classe 'animate-on-scroll'
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
  }

  initializeComponents() {
    // Inicializar componentes específicos
    this.initializeTabs();
    this.initializeCarrousel();
  }

  initializeTabs() {
    const tabGroups = document.querySelectorAll('.tabs');
    
    tabGroups.forEach(tabGroup => {
      const tabs = tabGroup.querySelectorAll('.tab');
      const contents = document.querySelectorAll('.tab-content');

      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          // Remove active de todas as tabs
          tabs.forEach(t => {
            t.classList.remove('active');
            t.setAttribute('aria-selected', 'false');
            t.tabIndex = -1;
          });
          
          // Remove active de todos os conteúdos
          contents.forEach(content => content.classList.remove('active'));

          // Ativa a tab clicada
          tab.classList.add('active');
          tab.setAttribute('aria-selected', 'true');
          tab.tabIndex = 0;

          // Ativa o conteúdo correspondente
          const contentId = tab.getAttribute('aria-controls');
          const content = document.getElementById(contentId);
          if (content) {
            content.classList.add('active');
            content.focus();
          }
        });
      });
    });
  }

  initializeCarrousel() {
    // Configurar carrosséis se existirem
    const carousels = document.querySelectorAll('.carousel');
    
    carousels.forEach(carousel => {
      let currentSlide = 0;
      const slides = carousel.querySelectorAll('.slide');
      const totalSlides = slides.length;

      if (totalSlides === 0) return;

      const nextBtn = carousel.querySelector('.carousel-next');
      const prevBtn = carousel.querySelector('.carousel-prev');

      const showSlide = (index) => {
        slides.forEach((slide, i) => {
          slide.classList.toggle('active', i === index);
        });
      };

      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          currentSlide = (currentSlide + 1) % totalSlides;
          showSlide(currentSlide);
        });
      }

      if (prevBtn) {
        prevBtn.addEventListener('click', () => {
          currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
          showSlide(currentSlide);
        });
      }

      // Auto-play opcional
      if (carousel.dataset.autoplay === 'true') {
        setInterval(() => {
          currentSlide = (currentSlide + 1) % totalSlides;
          showSlide(currentSlide);
        }, 5000);
      }
    });
  }

  // Utilitários
  updateImagePaths() {
    // Atualizar caminhos de imagem baseado na nova estrutura
    const images = document.querySelectorAll('img[src*="Imagens"]');
    
    images.forEach(img => {
      let src = img.src;
      
      // Mapear caminhos antigos para novos
      const pathMappings = {
        'Imagens/': 'assets/images/misc/',
        'Imagens-Loja/': 'assets/images/shop/',
        'Imagens-classes/': 'assets/images/classes/',
        'Imagens-racas/': 'assets/images/races/',
        'Telas Hyper/ImagensMonarcas/': 'assets/images/monarchs/',
        'Telas Hyper/ImagensZanpakutou/': 'assets/images/zanpakutou/',
        'Telas Hyper/ClansElementosNinjasImagens/': 'assets/images/clans/',
        'Telas Hyper/ImagensDragonSlayer/': 'assets/images/dragons/',
        'Telas Hyper/MagoMagias/': 'assets/images/mages/',
        'Telas Hyper/ZodiacosImagens/': 'assets/images/zodiac/'
      };

      Object.entries(pathMappings).forEach(([oldPath, newPath]) => {
        if (src.includes(oldPath)) {
          img.src = src.replace(oldPath, newPath);
        }
      });
    });
  }
}

// Inicializar aplicação
const app = new CrossArise();

// Exportar para uso global
window.CrossArise = CrossArise;
