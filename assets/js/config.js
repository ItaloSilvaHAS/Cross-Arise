
// Configuração de caminhos para o site Cross Arise
const CONFIG = {
  PATHS: {
    IMAGES: {
      BASE: '/assets/images/',
      CHARACTERS: '/assets/images/misc/',
      CLASSES: '/assets/images/classes/',
      RACES: '/assets/images/races/',
      SHOP: '/assets/images/shop/',
      MONARCHS: '/assets/images/monarchs/',
      ZANPAKUTOU: '/assets/images/zanpakutou/',
      CLANS: '/assets/images/clans/',
      DRAGONS: '/assets/images/dragons/',
      MAGES: '/assets/images/mages/',
      ZODIAC: '/assets/images/zodiac/',
      MISC: '/assets/images/misc/'
    },
    PAGES: {
      CLASSES: '/pages/classes/',
      RACES: '/pages/',
      SHOP: '/pages/shop/',
      HISTORY: '/pages/',
      MAP: '/pages/',
      SYSTEMS: '/pages/'
    }
  },
  
  // Função para obter caminho completo da imagem
  getImagePath: function(category, filename) {
    return this.PATHS.IMAGES[category.toUpperCase()] + filename;
  },
  
  // Função para obter caminho da página
  getPagePath: function(page, filename) {
    return this.PATHS.PAGES[page.toUpperCase()] + filename;
  }
};

// Exportar para uso global
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}
