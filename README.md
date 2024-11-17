#  Format text

Описание

Этот проект предоставляет возможность форматировать текст из HTML-элемента, разделяя его по ролям и добавляя структурированное форматирование. Также реализована функциональность переключения между исходным и обработанным текстом по нажатию кнопки.

Как работает

	1.	Изначальное состояние текста:
		Текст в элементе .story сохраняется в переменную initialText в виде строк.
		Также сохраняется начальная разметка текста (formattedText) для восстановления исходного состояния.
	2.	Обработка текста:
		Текст разбивается на строки и обрабатывается для выделения диалогов определённых ролей.
		Каждая строка проверяется на совпадение с именами ролей из массива roles.
		Если строка начинается с имени роли, она добавляется в блок, форматированный с помощью HTML:
		Имя роли выделяется тегом <strong>.
		Содержание строки добавляется с символом • перед текстом.
	3.	Переключение между состояниями:
		При первом нажатии на кнопку текст обрабатывается и выводится в отформатированном виде.
		При повторном нажатии текст возвращается в исходное состояние.
	4.	Функция кнопки:
		При переключении кнопка изменяет текст на “format text” или “return text”, чтобы обозначить текущее действие.
