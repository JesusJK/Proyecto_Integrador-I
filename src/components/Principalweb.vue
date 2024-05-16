<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue';
</script>

<template>

    <body class="font-semibold bg-gray-100">
        <!-- Cabecera -->
        <header class="bg-[#0C2733] text-white p-5  ">
            <div class="barra_menu mb-3 flex justify-between items-center">
                <div class="">
                    <img src="../img/logo2.jpg" alt="Logo" class="w-[95px] h-[37px]">
                </div>
                <div class="flex  ">
                    <a href="#" class="mx-4 hover:text-gray-300">Politicas</a>
                    <a href="#" class="mx-4 hover:text-gray-300">Acerda de </a>
                    <a href="#" class="mx-4 hover:text-gray-300">Preguntas</a>
                    <a href="#">
                        <img class="mx-4" src="../assets/lupa.svg" alt="search">
                    </a>
                    <a href="#">
                        <img class="mx-4" src="../assets/user.svg" alt="">
                    </a>
                </div>
            </div>

            <h1 class="text-2xl">Registro y medicion de temperaturas</h1>
            <nav>
                <ul class="flex flex-col ml-2 justify-center mt-4">
                    <li>
                        <RouterLink to="/form" class="text-white hover:text-gray-300">Encuesta</Routerlink>
                    </li>
                    <li><a href="#datos" class="text-white hover:text-gray-300">Datos</a></li>
                    <li><a href="#consejos" class="text-white hover:text-gray-300">Consejos</a></li>
                    <li><a href="#alertas" class="text-white hover:text-gray-300">Alertas</a></li>
                    <li><a href="#contacto" class="text-white hover:text-gray-300">Contacto</a></li>
                </ul>
            </nav>
        </header>
        <!-- Cuerpo de la página -->
        <main class="p-4">
            <div class="border mx-[100px] border-gray-400 text-black px-4 py-3 rounded relative" role="info">
                <span class="">Los científicos dedicados a las cuestiones climáticas han demostrado que las personas
                    somos responsables del calentamiento global de los últimos 200 años. Las actividades humanas, tales
                    como las mencionadas arriba, generan gases de efecto invernadero que elevan la temperatura del
                    planeta al ritmo más rápido de los 2000 años pasados.
                    La temperatura media de la Tierra es ahora 1,1 °C más elevada que a finales del siglo XIX, antes de
                    la revolución industrial, y más elevada en términos absolutos que en los últimos 100 000 años. La
                    última década (2011-2020) fue la más cálida registrada. En esa línea, cada una de las cuatro décadas
                    útlimas ha sido más caliente que cualquier otra década desde 1850. </span>
            </div>
            <div class="flex justify-between my-7">
                <div class="border-black w-[33%] border mx-1 pt-[50px] p-3 text-center justify-center"><strong>Las personas se ven
                        afectadas por el cambio
                        climático de diversas maneras</strong>
                    <p>El cambio climático puede afectar a nuestra salud, a la capacidad de cultivar alimentos, a la
                        vivienda, a la seguridad y al trabajo. Algunos de nosotros ya somos más vulnerables a los
                        impactos climáticos, como las personas que viven en pequeñas naciones insulares y otros países
                        en desarrollo. Condiciones como el aumento del nivel del mar y la intrusión de agua salada han
                        avanzado hasta el punto de que comunidades enteras han tenido que reubicarse, y las prolongadas
                        sequías están creando un riesgo de hambruna. Se prevé que en el futuro aumente el número de
                        «refugiados climáticos».</p>
                </div>
                <div class="border-black w-[33%] border mx-1 p-3 text-center justify-center"><strong>Cada aumento del
                        calentamiento global es importante</strong>
                    <p>Según los últimos informes de la ONU (inglés), miles de científicos y revisores gubernamentales
                        coincidieron en que limitar el aumento de la temperatura global a no más de 1,5 °C nos ayudaría
                        a evitar los peores impactos climáticos y a mantener un clima habitable. Sin embargo, las
                        políticas actuales apuntan a un aumento de la temperatura de 2,8 °C para finales de siglo.
                        Las emisiones que provocan el cambio climático proceden de todas las partes del mundo y afectan
                        a todos, pero algunos países generan mucho más que otros. Los siete mayores emisores - China,
                        Estados Unidos, India, la Unión Europea, Indonesia, Rusia y Brasil - fueron los causantes de la
                        mitad de las emisiones de gases de efecto invernadero a nivel mundial en 2020. Todo el mundo
                        debe tomar medidas en lo que respecta al clima, pero las personas y los países que crean más
                        problemas tienen una mayor responsabilidad para actuar primero.</p>
                </div>
                <div class="border-black w-[33%] border mx-1 p-3 pt-[50px] text-center justify-center"><strong>Nos enfrentamos a un gran
                        reto, pero ya conocemos muchas soluciones</strong>
                    <p>Muchas soluciones al cambio climático pueden aportar beneficios económicos al tiempo que mejoran
                        nuestras vidas y protegen el medio ambiente. También contamos con marcos y acuerdos globales
                        para guiar el progreso, como los Objetivos de Desarrollo Sostenible, la Convención Marco de las
                        Naciones Unidas sobre el Cambio Climático y el Acuerdo de París. Hay tres amplias categorías de
                        acción: reducir las emisiones, adaptarse a los impactos climáticos y financiar los ajustes
                        necesarios.
                        </p>
                </div>
            </div>

        </main>

        <!-- Pie de página -->
        <footer class="bg-[#0C2733] text-white p-4">
            <div class="footer-links">
                <ul class="flex justify-center">
                    <li><a href="#privacidad" class="text-white hover:text-gray-300">Privacidad</a></li>
                    <li><a href="#terminos" class="text-white hover:text-gray-300">Términos y Condiciones</a></li>
                    <li><a href="#contacto" class="text-white hover:text-gray-300">Contacto</a></li>
                </ul>
            </div>
            <div class="social-media flex justify-center mt-4">
                <a href="#" class="social-icon"><img src="" alt="Facebook" class="w-6 h-6"></a>
                <a href="#" class="social-icon"><img src="" alt="Twitter" class="w-6 h-6"></a>
                <a href="#" class="social-icon"><img src="" alt="Instagram" class="w-6 h-6"></a>
            </div>
            <p class="mt-4">&copy; 2024 Registro de Sensación Térmica</p>
        </footer>
    </body>

</template>