#Weather App (API)
WeatherApp es una aplicación sencilla que te proporciona el pronóstico del tiempo actual, incluyendo la temperatura, humedad y velocidad del viento, utilizando la API de la página OpenWeatherMap.

##Instrucciones
1) Escribe el nombre de la ciudad que deseas consultar en el campo de texto proporcionado.
2) Haz clic en el botón de búsqueda (icono de lupa) para iniciar la búsqueda.
3) Se mostrará el pronóstico del tiempo actual y otros detalles para la ciudad ingresada.

##Detalles de creacion:
Para la creación de esta aplicación se utilizó una "async function" que alberga un if que se cumple solo cuando se escribe una ciudad/país inexistente y un else que alberga el código que permite la funcionalidad de la app. Como se dijo anteriormente, se utilizó una API proporcionada por OpenWeatherMap donde se utilizó los elementos 'name', 'temp', 'humidity' y 'speed' para mostrar en la app junto a pequeñas modificaciones de estos:
1) En "temp" estaba en Kelvin y fue pasado a Celsius con la expresión (Math.round(data.main.temp - 273.15)) para así obtener la temperatura en °C y redondeada a un número entero.
2) En "humidity" se utilizó (data.main.humidity.toFixed(1)) para redondear a 1 solo decimal.
Por último, para reducir el código, en el caso de las imágenes, se utilizó la expresión (weatherIcon.src = /images/${data.weather[0].main}.png;) junto con imágenes .png con el mismo nombre del elemento proporcionado por la API. Dime qué podría mejorar (solo muéstrame lo mejorable o corregible).
