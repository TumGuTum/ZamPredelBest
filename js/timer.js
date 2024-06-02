(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    // Устанавливаем дату на 1 сентября текущего года
    const targetDate = new Date();
    targetDate.setMonth(8); // 8 - индекс месяца, считая с 0 (0 - январь, 1 - февраль, ..., 8 - сентябрь)
    targetDate.setDate(1);
    targetDate.setHours(0);
    targetDate.setMinutes(0);
    targetDate.setSeconds(0);
    targetDate.setMilliseconds(0);
  
    const countDown = targetDate.getTime(),
          countdownElement = document.getElementById("countdown"),
          priceElement = document.querySelector(".btn-course_img_Price"),
          discountInfoElement = document.querySelector(".discount-info"); // Элемент с информацией о скидке
  
    let timerStarted = false; // Переменная для отслеживания начала таймера
    let timer; // Переменная для хранения интервала
  
    // Функция для остановки таймера и скрытия элементов
    function stopTimer() {
      clearInterval(timer);
      countdownElement.style.display = "none";
      priceElement.innerHTML = "390₽ / за весь курс"; // Изменение содержимого элемента с ценой
      if (discountInfoElement) {
        discountInfoElement.style.display = "none"; // Скрыть элемент с информацией о скидке, если он существует
      }
    }
  
    // Запускаем таймер
    function startTimer() {
      timerStarted = true; // Устанавливаем флаг начала таймера
      timer = setInterval(function() {    
        const now = new Date().getTime(),
              distance = countDown - now;
  
        if (distance < 0) {
          stopTimer();
          return;
        }
  
        const days = Math.floor(distance / day);
        const hours = Math.floor((distance % day) / hour);
        const minutes = Math.floor((distance % hour) / minute);
        const seconds = Math.floor((distance % minute) / second);
  
        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
        document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;
      }, 0);
    }
  
    // Запускаем таймер
    startTimer();
  
  }());