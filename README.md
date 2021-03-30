# Práctica 6: Clases e interfaces genéricas. Principios SOLID


## 1. Introducción

A modo de introducción, se detallará un informe de la sexta práctica de la asignatura Desarrollo de Sistemas Informáticos del grado de Ingeniería Informática sobre los ejercicios de programación sobre clases e interfaces genéricas utilizando los Principios SOLID.

## 2. Estructura del proyecto

A la estructura de las prácticas anteriores, se le añade la documentación de [Instanbul](https://istanbul.js.org/), una herramienta que permite obtener informes sobre el código fuente de las pruebas unitarias diseñadas.

Para ello, instalé los paquetes como dependencia de desarrollo, __npm install --save-dev nyc coveralls__ donde nyc es un editor de comandos de Instanbul y coveralls ayuda a entregar código con confianza al mostrar qué partes del código no están cubiertas por el conjunto de pruebas. 

Por otro lado, creé un nuevo script en el fichero __package.json__ que ejecuta los test mediante nyc de la siguiente manera: `<"coverage": "nyc npm test && nyc report --reporter=text-lcov | coveralls && rm -rf .nyc_output>`. Acto seguido, inicié sesión en la herramienta Coveralls con la cuenta de GitHub. Como los repositorios son privados, tuve que cambiarlo a público para poder añadir a la entrega la documentación generada en el repositorio correspondiente a esta práctica.

Cuando accedemos al repositorio desde Coveralls, nos sale la configuración y debemos copiar la línea que pone __repo_token__ en un fichero de configuración denominado __.coveralls.yml__ que he creado en la raíz de la estructura del proyecto de esta práctica el cual es totalmente diferente para cada repositorio. Esto lo que permite es que cuando ejecutemos el comando coveralls desde el proyecto, los informes que genera Instanbul del cubrimiento de código del mismo, se asocie al repositorio marcado en la herramienta detallada anteriormente. 

## 3. Ejercicios

### Ejercicio 1 - El combate definitivo

Partiendo del desarrollo realizado para el Ejercicio 1 de la [Práctica 5](https://ull-esit-inf-dsi-2021.github.io/prct05-objects-classes-interfaces/), supongamos que ahora queremos incluir distintos tipos de contendientes a la pelea. Por ejemplo, podríamos incluir personajes del universo Marvel, DC Comics, Star Wars o Dragon Ball entre otros. Puede incluir otros universos y/o personajes que desee. Para extender el desarrollo anterior se pide:

- Desarrolle una clase abstracta llamada __Fighter__ que permita hacer que un contendiente pueda luchar. Esta clase se considerará la superclase del resto de clases a implementar. Para cada universo, desarrolle la clase que lo represente (Pokemon, Marvel, DC, Star Wars, Dragon Ball, etc).
- Cada contendiente debe ser descendiente de su clase universo. Además, para cada contendiente se debe poder acceder a la información requerida para la clase __Pokemon__ de la práctica anterior (nombre, altura, peso, etc). Puede incluir información extra que considere oportuna según el universo.
- La clase __Combat__ ahora permitará que los combates se disputen entre contendientes de distintos universos. Todas las combinaciones deben ser posibles, incluso contendientes del mismo universo. Asimismo, la simulación de los combates debe ser similar a la realizada en la práctica anterior. Sin embargo, ahora con cada ataque los contendientes deberán mostrar alguna catching phrase representativa de su personaje.
- Actualice los valores de efectividad de los movimientos de los nuevos contendientes de la forma que considere oportuna. Contendientes de un universo son más fuertes que los de otro, personajes concretos son más fuertes que otros sin importar el universo o una mezcla de ambas. Puede basarse en un criterio similar al empleado en las prácticas anteriores sobre los tipos de Pokemon.
- La clase __Pokedex__ deberá actualizarse para incluir también el resto de contendientes. Esto es, deberá ser capaz de almacenar personajes de todos los universos considerados dentro de una misma estructura de datos. Además, deberá ofrecer todas las funcionalidades previamente requeridas para los nuevos contendientes.
- Por último, desarrolle este ejercicio empleando los principios SOLID Single Responsability y Open-Closed.

### Ejercicio 2 - Conversor de unidades

Considere una herramienta que nos permita realizar las conversiones de unidades o sistemas de medición para distintas magnitudes físicas. Las más comunes pueden ser:

- Velocidad
- Masa
- Longitud
- Tiempo
- Temperatura
- Fuerza
- Volumen

Diseñe una interfaz genérica __isConvertible__ que permita realizar conversiones entre sistemas para cada magnitud considerada. La interfaz debe definirse de modo que, aquellas clases que la implementen, ofrezcan la posibilidad de hacer cambios entre, al menos, dos sistemas o unidades diferentes como, por ejemplo, en el caso de la velocidad, de millas por horas a kilómetros por hora. A continuación, diseñe diferentes clases, una por magnitud física, que implementen dicha interfaz. El desarrollo propuesto deberá incluir las siguientes funcionalidades:

- Una clase para cada magnitud considerada.
- Se pide ser capaz de poder cambiar, al menos, entre dos unidades o sistemas de medición por cada magnitud.
- El software deberá seguir los principios SOLID Single Responsability and Open-Closed.

### Ejercicio 3 - DSIflix

Imagine que tiene que diseñar el modelo de datos de una plataforma de vídeo en streaming. A través del catálogo de dicha plataforma se puede acceder a películas, series y documentales:

- Defina una interfaz genérica __Streamable__ que trate de especificar propiedades y métodos con los que debería contar una colección de emisiones concreta como, por ejemplo, una colección de series. Por ejemplo, deberían definirse métodos de búsqueda en dicha interfaz, que permitan obtener listados en función de diferentes términos de búsqueda: por año o por nombre, entre otros.
- Defina una clase abstracta genérica __BasicStreamableCollection__ que implemente dicha interfaz genérica. En este punto, podrá particularizar algunas de las propiedades y métodos de la interfaz __Streamable__, aunque otros tendrán que permanecer como abstractos para ser definidos más abajo en la jerarquía de clases. Todo dependerá del diseño que haya llevado a cabo.
- Tendrá que extender dicha clase abstracta para obtener subclases que modelen cada uno de los tres tipos de colecciones: series, películas y documentales.
- Trate de aplicar los principios SOLID. Preste especial atención al diseño de la interfaz __Streamable__. Si cree que debe dividirla en interfaces genéricas más pequeñas porque su diseño inicial es muy complejo, hágalo, con el objetivo de cumplir con el cuarto principio SOLID Interface segregation.

## 4. Conclusiones y dificultades

A modo de conclusión, me han resultado bastante interesante la realización de los ejercicios. Sobretodo, llevar a cabo la documentación de las pruebas mediante la herramienta Instanbul.

## 5. Referencias

1. [Práctica 6](https://ull-esit-inf-dsi-2021.github.io/prct06-generics-solid/).
2. [Práctica 5](https://ull-esit-inf-dsi-2021.github.io/prct05-objects-classes-interfaces/).
3. [Instanbul](https://istanbul.js.org/).
