function openLink(url) {
    window.open(url, '_blank', 'noopener,noreferrer');
}

// Дополнительные анимации при загрузке
document.addEventListener('DOMContentLoaded', function() {
    // Анимация для аватара при загрузке
    const avatar = document.querySelector('.avatar');
    if (avatar) {
        setTimeout(() => {
            avatar.style.animation = 'pulse 2s infinite, fadeIn 0.8s ease-out 0.8s both';
        }, 800);
    }
    
    // Добавление эффекта ripple на кнопки
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Создаем эффект волны
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(0, 0, 0, 0.1);
                transform: scale(0);
                animation: ripple-animation 0.6s linear;
                width: ${size}px;
                height: ${size}px;
                top: ${y}px;
                left: ${x}px;
                pointer-events: none;
                z-index: 0;
            `;
            
            this.appendChild(ripple);
            
            // Удаляем элемент после анимации
            setTimeout(() => {
                if (ripple.parentNode === this) {
                    this.removeChild(ripple);
                }
            }, 600);
        });
    });
    
    // Добавляем стили для ripple эффекта
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Плавное появление страницы
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    // Анимация заголовка при скролле
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header h1');
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.5;
        
        if (header) {
            header.style.transform = `translateY(${Math.min(rate, 20)}px)`;
        }
    });
});

// Эффект параллакса для фона
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.buttons');
    
    if (parallax) {
        parallax.style.backgroundPosition = `center ${scrolled * 0.05}px`;
    }
});