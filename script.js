const roles = [
  `ЄВГЕН СЕРГІЙОВИЧ`,
  `КОСТЯНТИН ГЕОРГІЙОВИЧ`,
  `ЛАРИСА`,
  `АНАСТАСІЯ`,
  `НАДІЯ`,
  `ЖІНОЧИЙ ГОЛОС`,
];

// Выбираем текстовый элемент
const textElement = document.querySelector(".story");
const btn = document.querySelector(".button");

// Сохраняем начальное состояние текста
const initialText = textElement.textContent;
const formattedText = textElement.innerHTML;
const btnText = btn.textContent;
console.log(btnText);
// Извлекаем строки из текста
const text = initialText.split("\n").map((line) => line.trim()); // Убираем лишние пробелы

let isProcessed = false; // Флаг состояния текста

btn.addEventListener("click", () => {
  if (isProcessed) {
    // Если текст был обработан, возвращаем оригинал текст
    btn.textContent = "return text";
    textElement.innerHTML = formattedText; // Выводим результат
    isProcessed = false; // Возвращаем флаг в исходное состояние
  } else {
    // Если текст не обработан, генерируем результат
      let result = ""; // Переменная для результата
       btn.textContent = "format text";
    roles.forEach((role) => {
      let temp = `<strong>${role}:</strong><br>`; // Используем HTML для форматирования
      text.forEach((line) => {
        if (line.startsWith(role + ":")) {
          const content = line.slice(role.length + 1).trim(); // Убираем имя роли и пробелы
          temp += `&bull; ${content}<br>`; // Добавляем строку с её содержимым
        }
      });
      if (temp.trim() !== `<strong>${role}:</strong><br>`) {
        result += temp + "<br>"; // Добавляем блок только если есть строки
      }
    });
    textElement.innerHTML = result; // Выводим результат в текстовый блок
    isProcessed = true; // Устанавливаем флаг, что текст обработан
  }
});
