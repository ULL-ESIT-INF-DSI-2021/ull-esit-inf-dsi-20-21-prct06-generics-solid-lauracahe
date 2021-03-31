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

![Error al cargar imagen del ejercicio 1](https://raw.githubusercontent.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct06-generics-solid-lauracahe/master/ejercicios/images/ej1.1P6.png?token=AKMQEBJVQHUCCEDUJHYA7HDANYKDG)

![Error al cargar imagen del ejercicio 1](https://raw.githubusercontent.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct06-generics-solid-lauracahe/master/ejercicios/images/ej1.2-P6.png?token=AKMQEBJGTET74ST32OIG7IDANYKEE)

![Error al cargar imagen del ejercicio 1](https://raw.githubusercontent.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct06-generics-solid-lauracahe/master/ejercicios/images/EJ1.3-p6.png?token=AKMQEBM3MQFFPXEXIX7ZS3DANYKFC)

![Error al cargar imagen del ejercicio 1](https://raw.githubusercontent.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct06-generics-solid-lauracahe/master/ejercicios/images/ej1.4-P6.png?token=AKMQEBPSF6LZJGITQFYYCBTANYKF6)

![Error al cargar imagen del ejercicio 1](https://raw.githubusercontent.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct06-generics-solid-lauracahe/master/ejercicios/images/ej1.5-P6.png?token=AKMQEBKJDQBZ5YWRX6U5WHLANYKGY)

![Error al cargar imagen del test 1](https://raw.githubusercontent.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct06-generics-solid-lauracahe/master/ejercicios/images/TEST1-P6.png?token=AKMQEBMEVQDHTEC7ZCQOZT3ANYKH4)

Como en la práctica anterior, he creado un tipo de dato denominado __BasicStatistics__ que contiene las propiedades de ataque, defensa, velocidad y daño máximo. Acto seguido, creé una clase abstracta __Fighter__ que será la superclase de las demás clases que explicaré a continuación. Esta permite hacer que un contendiente pueda luchar cuyo constructor tiene como atributos el nombre, peso, altura, las estadísticas básicas mencionadas anteriormente, el universo al que pertenece y por último, una frase típica del luchador. 

He realizado las clases Pokemon y Marvel. Estas se extienden de la clase Fighter, por tanto, utiliza los mismos atributos del constructor de la misma mediante super.

En cuanto a la clase Combat, utiliza dos parámetros de tipo genéricos que extienden de la clase abstracta __Fighter__ en el constructor para realizar el combate final. En esta clase, hay dos funciones diferenciadas que calculan el daño causado. La primera, se realiza desde el luchador uno al dos y la segunda en caso contrario. Cabe destacar que dependiendo del universo, tiene un efectividad diferente. Por último, la función start indica el resultado del combate por pantalla.

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

![Error al cargar el ejercicio 2](https://raw.githubusercontent.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct06-generics-solid-lauracahe/master/ejercicios/images/EJ2.1-P6.png?token=AKMQEBOAMNLWAZT5WBIOL43ANYKLE)

![Error al cargar el ejercicio 2](https://raw.githubusercontent.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct06-generics-solid-lauracahe/master/ejercicios/images/EJ2.2-P6.png?token=AKMQEBPJQMOXKMGHBJXTBYLANYKL2)

![Error al cargar el ejercicio 2](https://raw.githubusercontent.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct06-generics-solid-lauracahe/master/ejercicios/images/ej2.3-p6.png?token=AKMQEBILE2QB5NW7XP3LQ63ANYKMY)

![Error al cargar el test 2](https://raw.githubusercontent.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct06-generics-solid-lauracahe/master/ejercicios/images/TEST2-P6.png?token=AKMQEBNZPCOZBDFBY4LJ27DANYKNU)

En primer lugar, la interfaz genérica __isConvertible__ recibe una cantidad genérica de origen. Esta permite realizar conversiones entre sistemas para cada magnitud considerada. 

En cuanto a las clases que representan las diferentes unidades, implementan la interfaz detallada anteriormente. Cada uno de los constructores recibe la cantidad inicial y la unidad inicial. Y el método recibe como parámetro la unidad destino. Este devuelve el resultado de una regla de tres utilizando la tupla creada anterior a dicha clase. Esta tupla consta de dos arrays. El primero de tipo string que contiene las unidades y el segundo de tipo number que contiene las equivalencias. Todas las clases siguen el mismo procedimiento. 

### Ejercicio 3 - DSIflix

Imagine que tiene que diseñar el modelo de datos de una plataforma de vídeo en streaming. A través del catálogo de dicha plataforma se puede acceder a películas, series y documentales:

- Defina una interfaz genérica __Streamable__ que trate de especificar propiedades y métodos con los que debería contar una colección de emisiones concreta como, por ejemplo, una colección de series. Por ejemplo, deberían definirse métodos de búsqueda en dicha interfaz, que permitan obtener listados en función de diferentes términos de búsqueda: por año o por nombre, entre otros.
- Defina una clase abstracta genérica __BasicStreamableCollection__ que implemente dicha interfaz genérica. En este punto, podrá particularizar algunas de las propiedades y métodos de la interfaz __Streamable__, aunque otros tendrán que permanecer como abstractos para ser definidos más abajo en la jerarquía de clases. Todo dependerá del diseño que haya llevado a cabo.
- Tendrá que extender dicha clase abstracta para obtener subclases que modelen cada uno de los tres tipos de colecciones: series, películas y documentales.
- Trate de aplicar los principios SOLID. Preste especial atención al diseño de la interfaz __Streamable__. Si cree que debe dividirla en interfaces genéricas más pequeñas porque su diseño inicial es muy complejo, hágalo, con el objetivo de cumplir con el cuarto principio SOLID Interface segregation.

![Error al cargar el ejercicio 3](https://raw.githubusercontent.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct06-generics-solid-lauracahe/master/ejercicios/images/ej3.1-p6.png?token=AKMQEBNI6XUHAIXB6HCJGXLANYKSY)

![Error al cargar el ejercicio 3](https://raw.githubusercontent.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct06-generics-solid-lauracahe/master/ejercicios/images/ej3.2-p6.png?token=AKMQEBLFPMG7QCB5WM65J6LANYKTS)

![Error al cargar el ejercicio 3](https://raw.githubusercontent.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct06-generics-solid-lauracahe/master/ejercicios/images/ej3.3-p6.png?token=AKMQEBLJYTLIR2STWIBE4BLANYKUK)

![Error al cargar el ejercicio 3](https://raw.githubusercontent.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct06-generics-solid-lauracahe/master/ejercicios/images/ej3.4-p6.png?token=AKMQEBPICWDVN7Q4XNRAVWLANYKVG)

![Error al cargar el ejercicio 3](https://raw.githubusercontent.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct06-generics-solid-lauracahe/master/ejercicios/images/ej3.5-p6.png?token=AKMQEBPFEMT7XYIIZU5BW2TANYKV6)

![Error al cargar el ejercicio 3](https://raw.githubusercontent.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct06-generics-solid-lauracahe/master/ejercicios/images/ej3.7-p6.png?token=AKMQEBL7TS5TGZ4CQHJM2H3ANYKWY)

![Error al cargar el ejercicio 3](https://raw.githubusercontent.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct06-generics-solid-lauracahe/master/ejercicios/images/ej3.8-p6.png?token=AKMQEBJ6AYEVO4KJKH5736LANYKXS)

![Error al cargar el ejercicio 3](https://raw.githubusercontent.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct06-generics-solid-lauracahe/master/ejercicios/images/ej3.9-p6.png?token=AKMQEBJ7EUC7A4BQRUZTNVLANYKYI)

![Error al cargar el test 3](https://raw.githubusercontent.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct06-generics-solid-lauracahe/master/ejercicios/images/TEST3-P6.png?token=AKMQEBNKACTMLZSATTOFAV3ANYKZE)

![Error al cargar el test 3](https://raw.githubusercontent.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct06-generics-solid-lauracahe/master/ejercicios/images/TEST3.2-P6.png?token=AKMQEBLUUTMFNJ7BLEHRVU3ANYKZ4)

En este ejercicio he seguido los principios SOLID detallados en el guión de la práctica. Por ello, creé dos interfaces diferentes para detallar los diferentes métodos que iba a implementar la clase __BasicStreamableCollection__. Estos son los de añadir una emisión a una colección, obtener la colección y por otro lado, buscar en la misma mediante un tipo, ya sea el nombre, el año, el director, etc, y el atributo a buscar, es decir, el dato que se quiere obtener. Entonces, esta clase implementa estos tres métodos. 

En cuanto a los tipos de datos, he creado un tipo de dato denominado __Serie__, otro __Movie__ y por último, __Documentary__. Estos contienen las propiedades que definen a cada uno de ellos, por ejemplo, el nombre, el género, el año, etc. Luego, he creado tres clases muy similares que extienden de la clase abstracta __BasicStreamableCollection__ en la que el constructor recibe por parámetro una colección del tipo respectivo en cada una de ella. En la función de búsqueda, mediante un switch, según el tipo que se le pasa por parámetro, se realiza un push al resultado si el valor de la colección que esté recorriendo en el forEach coincide con el del atributo pasado por parámetro. 

## 4. Conclusiones y dificultades

A modo de conclusión, me ha resultado bastante interesante la realización de los ejercicios. Sobretodo, llevar a cabo la documentación de las pruebas mediante la herramienta Instanbul. Me han servido para profundizar sobre las clases e interfaces genéricas y me han quedado mucho más claro algunos conceptos. He tenido un problema con respecto a la configuración de __COVERALLS-TYPESCRIPT__ cuando he cambiado el repositorio a público. No he podido copiar el __repo_token__ ya que no me ha dejado, directamente salía esta pantalla que muestro a continuación y no como indicó el profesor en el video tutorial. 

![Error al cargar imagen de Coveralls]()

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2021/coveralls-typescript/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2021/coveralls-typescript?branch=main)

## 5. Referencias

1. [Práctica 6](https://ull-esit-inf-dsi-2021.github.io/prct06-generics-solid/).
2. [Práctica 5](https://ull-esit-inf-dsi-2021.github.io/prct05-objects-classes-interfaces/).
3. [Instanbul](https://istanbul.js.org/).
