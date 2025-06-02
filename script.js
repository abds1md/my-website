// JavaScript pour les landing pages ModedForU
document.addEventListener('DOMContentLoaded', function() {
  // Menu mobile toggle
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      
      // Animer les barres du menu hamburger
      const spans = menuToggle.querySelectorAll('span');
      spans.forEach(span => span.classList.toggle('active'));
    });
  }
  
  // Smooth scroll pour les liens d'ancrage
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
        
        // Fermer le menu mobile si ouvert
        if (navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
        }
      }
    });
  });
  
  // FAQ toggle
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      // Fermer tous les autres items
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
        }
      });
      
      // Toggle l'item actuel
      item.classList.toggle('active');
    });
  });
  
  // Modal de téléchargement
  const downloadBtns = document.querySelectorAll('.btn-download, #download-btn, #download-cta');
  const downloadModal = document.getElementById('downloadModal');
  const closeModal = document.querySelector('.close-modal');
  const androidBtn = document.getElementById('androidBtn');
  const iosBtn = document.getElementById('iosBtn');
  const downloadInfo = document.getElementById('downloadInfo');
  const progressFill = document.getElementById('progressFill');
  const progressText = document.getElementById('progressText');
  
  // Ouvrir le modal
  downloadBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      downloadModal.style.display = 'block';
      document.body.style.overflow = 'hidden';
    });
  });
  
  // Fermer le modal
  if (closeModal) {
    closeModal.addEventListener('click', function() {
      downloadModal.style.display = 'none';
      document.body.style.overflow = 'auto';
      resetDownloadState();
    });
  }
  
  // Fermer le modal en cliquant en dehors
  window.addEventListener('click', function(e) {
    if (e.target === downloadModal) {
      downloadModal.style.display = 'none';
      document.body.style.overflow = 'auto';
      resetDownloadState();
    }
  });
  
  // Gestion des boutons OS
  if (androidBtn && iosBtn) {
    [androidBtn, iosBtn].forEach(btn => {
      btn.addEventListener('click', function() {
        downloadInfo.style.display = 'block';
        simulateDownload();
        
        // Ici, vous pouvez intégrer votre content locker
        // Exemple: window.location.href = 'https://votre-content-locker-url.com';
      });
    });
  }
  
  // Simuler le téléchargement (à remplacer par votre content locker)
  function simulateDownload() {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 5;
      progressFill.style.width = `${progress}%`;
      progressText.textContent = `Préparation du téléchargement... ${progress}%`;
      
      if (progress >= 100) {
        clearInterval(interval);
        progressText.textContent = 'Vérification humaine requise...';
        
        // Rediriger vers le content locker après 1.5 secondes
        setTimeout(() => {
          // Remplacer par votre URL de content locker
          // window.location.href = 'https://votre-content-locker-url.com';
          
          // Pour la démo, on affiche juste un message
          progressText.textContent = 'Redirection vers la vérification...';
        }, 1500);
      }
    }, 100);
  }
  
  function resetDownloadState() {
    if (downloadInfo) downloadInfo.style.display = 'none';
    if (progressFill) progressFill.style.width = '0%';
    if (progressText) progressText.textContent = 'Préparation du téléchargement...';
  }
  
  // Notifications aléatoires
  function showRandomNotification() {
    const notification = document.getElementById('notification');
    if (!notification) return;
    
    const games = ['GTA San Andreas', 'Assetto Corsa', 'Naruto Ultimate Ninja Storm 4', 'GTA 5 Mobile'];
    const times = ['Il y a quelques instants', 'Il y a 2 minutes', 'Il y a 5 minutes', 'Il y a 1 minute'];
    
    const randomGame = games[Math.floor(Math.random() * games.length)];
    const randomTime = times[Math.floor(Math.random() * times.length)];
    
    const notificationText = notification.querySelector('.notification-text p');
    const notificationTime = notification.querySelector('.notification-text span');
    
    if (notificationText && notificationTime) {
      notificationText.textContent = `Quelqu'un vient de télécharger ${randomGame}`;
      notificationTime.textContent = randomTime;
    }
    
    notification.style.display = 'block';
    
    setTimeout(() => {
      notification.style.display = 'none';
    }, 5000);
  }
  
  // Afficher des notifications aléatoires
  setTimeout(() => {
    showRandomNotification();
    
    setInterval(() => {
      showRandomNotification();
    }, 30000); // Toutes les 30 secondes
  }, 10000); // Première notification après 10 secondes
  
  // Animation des éléments au scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.content-card, .feature-card, .step-card');
    
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight - 100 && elementBottom > 0) {
        element.classList.add('fade-in');
      }
    });
  };
  
  // Exécuter une fois au chargement
  animateOnScroll();
  
  // Puis à chaque scroll
  window.addEventListener('scroll', animateOnScroll);
});

// Intégration du content locker
function initContentLocker() {
  // Remplacer par votre code de content locker
  console.log('Content locker initialized');
  
  // Exemple d'intégration de content locker
  // const script = document.createElement('script');
  // script.src = 'https://votre-content-locker-url.com/script.js';
  // document.body.appendChild(script);
}

// Initialiser le content locker
initContentLocker();
