let horizontScroll = document.querySelector('.containerL');
let RightBtn = document.getElementById('RightBtn');
let LeftBtn = document.getElementById('LeftBtn');

RightBtn.addEventListener('click', () => {
    horizontScroll.scrollTo({
        left: horizontScroll.scrollLeft + 420,
        behavior: 'smooth'
    });
});

LeftBtn.addEventListener('click', () => {
    horizontScroll.scrollTo({
        left: horizontScroll.scrollLeft - 420,
        behavior: 'smooth'
    });
});
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }



// Получаем все кнопки курсов
const courseButtons = document.querySelectorAll('.btn');

// Добавляем обработчик события клика на каждую кнопку
courseButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Убираем класс .active у всех кнопок
        courseButtons.forEach(btn => {
            btn.classList.remove('active');
        });

        // Добавляем класс .active к выбранной кнопке
        this.classList.add('active');

        // Здесь можно добавить код для отображения соответствующего курса
    });
});


//ВОПРОСЫ
document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const checkbox = item.querySelector('input[type="checkbox"]');
        const desc = item.querySelector('.accordion-item-desc');

        // Initialize the max-height based on the checkbox state
        if (checkbox.checked) {
            desc.style.maxHeight = desc.scrollHeight + 'px';
        } else {
            desc.style.maxHeight = '0';
        }

        checkbox.addEventListener('change', function () {
            if (checkbox.checked) {
                // Ensure smooth transition
                desc.style.transition = 'max-height 0.6s ease, padding 0.4s ease';
                desc.style.maxHeight = desc.scrollHeight + 'px';
            } else {
                // Ensure smooth transition
                desc.style.transition = 'max-height 0.6s ease, padding 0.6s ease';
                desc.style.maxHeight = '0';
            }
        });

        // Observe changes in the content and adjust max-height accordingly
        const observer = new ResizeObserver(entries => {
            for (let entry of entries) {
                if (checkbox.checked) {
                    desc.style.maxHeight = desc.scrollHeight + 'px';
                }
            }
        });

        observer.observe(desc);
    });
});


