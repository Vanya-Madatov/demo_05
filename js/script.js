$(document).ready(function() {
    // Обробка табів
    $('.list-btn-item').click(function() {
        let tabId = $(this).index();
        $('.list-btn-item').removeClass('active');
        $(this).addClass('active');
        $('.list-content-item').fadeOut(0);
        $('.list-content-item').eq(tabId).fadeIn(200);
    });

    // Ініціалізація datepicker
    document.querySelectorAll('.date-box').forEach(function(box) {
        const input = box.querySelector('.date-picker');
        // Шукаємо кнопки всередині .header-block-date-input-object
        const objectWrapper = box.querySelector('.header-block-date-input-object');
        
        if (!objectWrapper) {
            console.warn('Не знайдено .header-block-date-input-object');
            return;
        }
        
        const clear = objectWrapper.querySelector('.clear-date');
        const btn = objectWrapper.querySelector('.calendar-btn');

        // Перевіряємо, чи всі елементи знайдені
        if (!input) {
            console.warn('Не знайдено .date-picker');
            return;
        }
        if (!btn) {
            console.warn('Не знайдено .calendar-btn');
            return;
        }

        // Створюємо picker
        const picker = datepicker(input, {
            formatter: function(input, date) {
                const day = String(date.getDate()).padStart(2, '0');
                const month = String(date.getMonth() + 1).padStart(2, '0');
                const year = date.getFullYear();
                input.value = day + '_' + month + '_' + year;
            }
        });

        // Клік по кнопці календаря
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Кнопка календаря натиснута');
            picker.show();
        });

        // Клік по кнопці очищення
        if (clear) {
            clear.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                input.value = '';
                console.log('Дата очищена');
            });
        }
    });
});