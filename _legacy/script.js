// script.js - Código com animações para mobile

// Declaração de funções globais
function adjustSectionHeights() {
  if (window.innerWidth < 768) {
    document.querySelectorAll('.section').forEach(section => {
      section.style.minHeight = 'auto';
      section.style.padding = '3rem 0';
    });
    
    // Garantir que o hero section tenha altura suficiente
    const hero = document.getElementById('hero');
    if (hero) {
      hero.style.minHeight = '100vh';
    }
  } else {
    document.querySelectorAll('.section').forEach(section => {
      section.style.minHeight = '100vh';
      section.style.padding = '';
    });
  }
}

function isMobileDevice() {
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

function optimizeForMobile() {
  if (isMobileDevice() || window.innerWidth < 768) {
    // Manter animações no mobile, apenas ajustar performance
    const particlesContainer = document.getElementById('particles-js');
    if (particlesContainer && typeof particlesJS !== 'undefined') {
      // Configurar menos partículas para mobile
      particlesJS('particles-js', {
        particles: {
          number: {
            value: 30, // Menos partículas para mobile
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: ["#1d976c", "#93f9b9", "#ffffff"]
          },
          shape: {
            type: "circle"
          },
          opacity: {
            value: 0.3, // Opacidade reduzida
            random: true,
            anim: {
               enable: true,
               speed: 1,
               opacity_min: 0.05,
               sync: false
             }
          },
          size: {
            value: 2, // Tamanho reduzido
            random: true,
            anim: {
               enable: true,
               speed: 2,
               size_min: 0.1,
               sync: false
             }
          },
          line_linked: {
            enable: true,
            distance: 120, // Distância reduzida
            color: "#1d976c",
            opacity: 0.2, // Opacidade reduzida
            width: 0.8 // Largura reduzida
          },
          move: {
            enable: true,
            speed: 0.5, // Velocidade reduzida
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
             onhover: {
               enable: false // Desativar interação no mobile
             },
             onclick: {
               enable: false // Desativar clique no mobile
             },
             resize: true
         }
        },
        retina_detect: true
      });
    }
  }
}

// Inicialização das partículas e configuração do site
document.addEventListener('DOMContentLoaded', function() {
  // Configuração das partículas (configuração padrão para desktop)
  if (typeof particlesJS !== 'undefined' && window.innerWidth >= 768) {
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: ["#1d976c", "#93f9b9", "#ffffff"]
        },
        shape: {
          type: "circle"
        },
        opacity: {
          value: 0.4,
          random: true,
          anim: {
             enable: true,
             speed: 1,
             opacity_min: 0.1,
             sync: false
           }
        },
        size: {
           value: 2.5,
           random: true,
           anim: {
             enable: true,
             speed: 2,
             size_min: 0.1,
             sync: false
           }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#1d976c",
          opacity: 0.25,
          width: 1
        },
        move: {
          enable: true,
          speed: 0.6,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
             enable: false,
             rotateX: 600,
             rotateY: 1200
           }
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "grab"
          },
          onclick: {
            enable: true,
            mode: "push"
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 1
            }
          },
          push: {
            particles_nb: 4
          }
        }
      },
      retina_detect: true
    });
  }

  // Atualizar ano no footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Animação de contagem para estatísticas
  const counters = document.querySelectorAll('.stat-number');
  const speed = 200;

  const startCounterAnimation = () => {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-count');
      const count = +counter.innerText;
      const increment = Math.ceil(target / speed);
      
      if (count < target) {
        counter.innerText = Math.min(count + increment, target);
        setTimeout(() => startCounterAnimation(), 1);
      }
    });
  };

  // Animação ao scroll com Intersection Observer para melhor performance
  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Adiciona um pequeno delay baseado no index para efeito em cascata (staggered)
        setTimeout(() => {
          entry.target.classList.add('animated');
          
          if (entry.target.classList.contains('hero-stats')) {
            startCounterAnimation();
          }
        }, index * 100);
        
        // Opcional: parar de observar depois de animar
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });

  // Iniciar animações ao carregar e ao scroll


  // Navegação fixa ao scrollar
  const nav = document.querySelector('.nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  // Menu mobile
  const menuToggle = document.getElementById('menu-toggle');
  if (menuToggle) {
    menuToggle.addEventListener('change', function() {
      if (this.checked) {
        document.body.style.overflow = 'hidden';
        document.querySelector('.nav-links').classList.add('active');
      } else {
        document.body.style.overflow = 'auto';
        document.querySelector('.nav-links').classList.remove('active');
      }
    });
  }

  // Fechar menu ao clicar em um link
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (menuToggle) {
        menuToggle.checked = false;
      }
      document.body.style.overflow = 'auto';
      const navLinksElement = document.querySelector('.nav-links');
      if (navLinksElement) {
        navLinksElement.classList.remove('active');
      }
    });
  });

// URL do webhook
const WEBHOOK_URL = 'https://dashboard.neotimeai.com/webhook-test/lp';

// Formulário de contato
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('button[type="submit"]');
        const successMessage = document.getElementById('successMessage');
        const errorMessage = document.getElementById('errorMessage');
        
        // Ocultar mensagens anteriores
        successMessage.style.display = 'none';
        errorMessage.style.display = 'none';
        
        // Mostrar estado de carregamento
        submitBtn.classList.add('sending');
        
        try {
            // Coletar dados do formulário
            const formData = {
                nome: this.nome.value,
                email: this.email.value,
                telefone: this.telefone.value,
                clinica: this.clinica.value,
                mensagem: this.mensagem.value,
                timestamp: new Date().toISOString(),
                origem: 'landing-page'
            };
            
            // Enviar dados para o webhook
            const response = await fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            
            if (response.ok) {
                // Sucesso
                successMessage.style.display = 'block';
                contactForm.reset();
            } else {
                // Erro do servidor
                throw new Error('Erro na resposta do servidor');
            }
        } catch (error) {
            // Erro de rede ou outros
            console.error('Erro ao enviar para o webhook:', error);
            errorMessage.style.display = 'block';
        } finally {
            // Restaurar estado normal do botão
            submitBtn.classList.remove('sending');
            
            // Esconder mensagens após 5 segundos
            setTimeout(() => {
                successMessage.style.display = 'none';
                errorMessage.style.display = 'none';
            }, 5000);
        }
    });
}

  // Adicionar classe ativa aos links de navegação conforme a rolagem
  const sections = document.querySelectorAll('section');
  
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (window.scrollY >= (sectionTop - 200)) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === current) {
        link.classList.add('active');
      }
    });
  });

  // Otimizar para mobile
  optimizeForMobile();
  adjustSectionHeights();
  
  // Re-ajustar quando a janela for redimensionada
  window.addEventListener('resize', function() {
    optimizeForMobile();
    adjustSectionHeights();
  });
});