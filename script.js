/*menu*/
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        menu.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    const menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            menu.classList.remove('active');
        });
    });
});

// Futuras testimonials
document.addEventListener('DOMContentLoaded', () => {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    testimonialCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.03)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });
});

//servicos

function scheduleWhatsApp(button) {
    // Número de WhatsApp (substitua pelo seu número)
    const whatsappNumber = '5534992383282'; // Formato internacional sem o '+' 
    
    // Recupera o nome do serviço do atributo data
    const serviceName = button.getAttribute('data-service');
    
    // Mensagem personalizada
    const message = `Gostaria de agendar uma sessão de ${serviceName}.`;
    
    // Codifica a mensagem para URL
    const encodedMessage = encodeURIComponent(message);
    
    // Monta o link do WhatsApp
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Abre o WhatsApp
    window.open(whatsappLink, '_blank');
}


function openModal() {
    document.getElementById('modal').style.display = 'flex';
}
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}


document.querySelectorAll('.faq-question').forEach(item => {
            item.addEventListener('click', () => {
                const parent = item.parentNode;
                parent.classList.toggle('active');
                const icon = item.querySelector('.faq-icon');
                icon.textContent = parent.classList.contains('active') ? '-' : '+';
            });
        });


        document.getElementById('youtubeBtn').addEventListener('click', function() {
            this.classList.remove('animate-pulse');
            setTimeout(() => {
                this.classList.add('animate-pulse');
            }, 100);
        });