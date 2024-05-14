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

    <body class=" bg-gradient-to-b from-red-400 via-orange-300 to-gray-200">
    <div class=" h-max bg-[#0C2733] text-[#0C2733]">0</div>
        <div class="container mx-auto py-[400px] ">
            <div class="cuadro max-w-md mx-auto shadow-xl bg-white rounded-lg overflow-hidden ">
                <div class="px-20 py-5 pb-9">
                    <div class="mb-8"> 
                        <img class="h-30 w-35 mx-auto mb-5"src="../img/Logotemperatura.jpg" alt="">
                        <h2 class="text-2xl font-semibold text-[#0C2733] text-center">
                            Inicio Sesión
                        </h2>
                        <p class="text-[#0C2733] font-semibold text-center m-1">
                            {{ rol }}
                        </p>
                    </div>

                    <div class="flex flex-col space-y-4">

                        <a href="#" v-if="valor" @click="elInicio('Estudiante')"
                            class="bg-[#D3D3D3] hover:bg-slate-300 text-[#474747] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-center">
                            Estudiante
                        </a>


                        <a href="#" v-if="valor" @click="elInicio('Experto')"
                            class="bg-[#D3D3D3] hover:bg-slate-300 text-[#474747] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-center">
                            Experto
                        </a>

                        <a href="#" v-if="valor" @click="elInicio('Desarrollador')"
                            class="bg-[#D3D3D3] hover:bg-slate-300 text-[#474747] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-center">
                            Desarrollador
                        </a>

                        <p class="text-center">
                            <input type="email" name="" id="" placeholder="Correo"
                            class="mb-[40PX] border-b-2 border-gray-300 p-1 outline-none" v-if="valor2">
                            <input type="password" name="" placeholder="Contraseña"
                            class="mb-5 border-b-2 border-gray-300 p-1 outline-none" v-if="valor2">
                            <br>
                            <br>
                                <RouterLink to="/web" class="font-semibold text-xl text-[#0C2733]" v-if="valor2">
                                    Iniciar Sesión
                                </RouterLink>
                        </p>
                            

                    </div>
                </div>
            </div>
        </div>
        <div class=" h-max bg-[#0C2733] text-[#0C2733]">0</div>
    </body>
</template>