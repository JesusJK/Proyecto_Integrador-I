<script>
import { Otrapagina } from "./components/Formulario.vue";
export default{
  methods:{
    redirectToOtraPagina() {
      this.$router.push('/otra-pagina');
    }
  }
}
</script>

<template>
  <body class="bg-[#6E9ABB]">
    <div class=" h-max bg-[#0C2733] text-[#0C2733]">0</div>
    <div class="container mx-auto py-[90px] ">

      <div class="cuadro max-w-md mx-auto bg-[#8C7F6C] rounded-lg shadow-md overflow-hidden ">
        <div class="px-20 py-20">
          <div class="text-center mb-8">
            <h2 class="text-xl font-semibold text-white">
              Iniciar Sesion
            </h2>
          </div>
          <div class="flex flex-col space-y-4">

            <button
              class="link-button bg-[#B0966F] hover:shadow-2xl text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Estudiante
            </button>

            <button
              class="bg-[#B0966F] hover:shadow-2xl text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Experto
            </button>

            <button
              class="bg-[#B0966F] hover:shadow-2xl text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Desarrollador
            </button>

            <a
              @click="redirectToOtraPagina"
              class="bg-[#B0966F] hover:shadow-2xl text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Prueba
          </a>

          </div>
        </div>
      </div>
    </div>
    <div class="h-max bg-[#0C2733] text-[#0C2733]">0</div>
  </body>
</template>
