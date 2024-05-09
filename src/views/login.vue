<script setup>
import {  RouterLink } from 'vue-router'
import { ref } from 'vue';

const valor = ref(true);
const rol = "";
function toggleInicio(asign_rol) {
    valor.value=false;
    rol.value="Como" + asign_rol;
    
}
</script>

<template>
    <body class="bg-[#6E9ABB]">
    <div class=" h-max bg-[#0C2733] text-[#0C2733]">0</div>
    <div class="container mx-auto py-[300px] ">
      <div class="cuadro max-w-md mx-auto bg-[#8C7F6C] rounded-lg shadow-md overflow-hidden ">
        <div class="px-20 py-20">
          <div class="text-center mb-8">
            <h2 class="text-xl font-semibold text-white">
              Iniciar Sesion
            </h2>
          </div>
          <div class="flex flex-col space-y-4">

            <a href="#" v-if="valor" @click="toggleInicio('Estudiante')"
              class="bg-[#B0966F] hover:shadow-2xl text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-center">
              Estudiante
            </a>


            <a href="#" v-if="valor" @click="toggleInicio('Experto')"
              class="bg-[#B0966F] hover:shadow-2xl text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-center">
              Experto
            </a>

            <a href="#" v-if="valor" @click="toggleInicio('Desarrollador')"
              class="bg-[#B0966F] hover:shadow-2xl text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-center">
              Desarrollador
            </a>

          </div>
        </div>
      </div>
    </div>
    <div class=" h-max bg-[#0C2733] text-[#0C2733]">0</div>   
  </body>
</template>