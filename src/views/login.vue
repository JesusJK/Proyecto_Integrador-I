<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue';

const valor = ref(true);
const rol = ref("");
const valor2 = ref(false);

function elInicio(asignrol) {
    valor.value = false;
    rol.value = "Como " + asignrol;
    valor2.value = true;

}
console.log(valor);
</script>

<template>

    <body class="bg-[#6E9ABB]">
        <div class=" h-max bg-[#0C2733] text-[#0C2733]">0</div>
        <div class="container mx-auto py-[400px] ">
            <div class="cuadro max-w-md mx-auto bg-[#8C7F6C] rounded-lg shadow-md overflow-hidden ">
                <div class="px-20 py-20">
                    <div class="mb-5"> 
                        <h2 class="text-xl font-semibold text-white text-center">
                            Iniciar Sesión
                        </h2>
                        <p class="text-[#0C2733] font-semibold text-center m-1">
                            {{ rol }}
                        </p>
                    </div>

                    <div class="flex flex-col space-y-4">

                        <a href="#" v-if="valor" @click="elInicio('Estudiante')"
                            class="bg-[#B0966F] hover:shadow-2xl text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-center">
                            Estudiante
                        </a>


                        <a href="#" v-if="valor" @click="elInicio('Experto')"
                            class="bg-[#B0966F] hover:shadow-2xl text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-center">
                            Experto
                        </a>

                        <a href="#" v-if="valor" @click="elInicio('Desarrollador')"
                            class="bg-[#B0966F] hover:shadow-2xl text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-center">
                            Desarrollador
                        </a>

                        <p class="text-center">
                            <input type="email" name="" id="" placeholder="Correo"
                            class="mt-8 border-b-2 border-gray-300 p-1 outline-none" v-if="valor2">
                            <input type="password" name="" placeholder="Contraseña"
                            class="mt-8 border-b-2 border-gray-300 p-1 outline-none" v-if="valor2">
                            <br>
                            <br>
                            <RouterLink to="/form" class="font-semibold text-xl">
                               Iniciar
                            </RouterLink>
                        </p>
                            

                    </div>
                </div>
            </div>
        </div>
        <div class=" h-max bg-[#0C2733] text-[#0C2733]">0</div>
    </body>
</template>