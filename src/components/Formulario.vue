<script setup>
import { ref } from 'vue';

let sensacion = ref(" ");


function send_sensacion() {
    if (sensacion_cheked1 = true) {
        sensacion = "halo";
    }

    console.log('El estado de sensacion es ', sensacion.value)
}



</script>


<template>

    <body>
        <div class="flex justify-center text-3xl text-white bg-[#0C2733] py-2">Encuestas De Sensasión Térmica</div>
        <div class="flex-col columns-1 border border-slate-950 pb-6 pt-1">
            <p class="flex justify-center font-semibold p-2 ">1.¿Cual es la sensacion termica que usted siente en este
                momento?</p>
            <form class="flex flex-col columns-1  items-center text-xl">
                <div><input type="checkbox" @click="send_sensacion" name="sensacion" v-model="sensacion_cheked1"
                        value="muy_alta" class="font-semibold"> Mucha calor</div>
                <div><input type="checkbox" @click="send_sensacion" name="sensacion" v-model="sensacion_cheked2"
                        value="alta" class="font-semibold"> Calor</div>
                <div><input type="checkbox" @click="send_sensacion" name="sensacion" v-model="sensacion_cheked3"
                        value="media" class="font-semibold"> Templado</div>
                <div><input type="checkbox" @click="send_sensacion" name="sensacion" v-model="sensacion_cheked4"
                        value="baja" class="font-semibold"> Frio</div>
                <div> <input type="checkbox" @click="send_sensacion" name="sensacion" v-model="sensacion_cheked5"
                        value="muy_baja" class="font-semibold"> Muy frio
                </div>
            </form>
        </div>

        <div class="flex-col columns-1 border border-slate-950 pt-4 pb-6 content-center">
            <div class="flex justify-center font-semibold">2.¿Que dia y a que hora esta respondiendo esta Encuesta?
            </div>
            <div class="flex justify-center font-semibold p-6"><input
                    class="text-center rounded border border-slate-900" type="datetime-local" name="datetime"
                    id="datetime"></div>
        </div>

        <div class="flex-col columns-1 border border-slate-950 pt-4 pb-6 content-center">
            <div class="flex justify-center font-semibold">3.¿En que lugar esta usted ubicado en la UFPSO?</div>
            <div class="flex justify-center font-semibold p-6">
                <select name="Lugares de la UFPSO" id="" class="border font-semibold text-center">
                    <option class="font-semibold" value="">Entrada de la Universidad</option>
                    <option class="font-semibold" value="">La Casona</option>
                    <option class="font-semibold" value="">Parqueaderos de Estudiantes</option>
                    <option class="font-semibold" value="">Edificio Administrativo</option>
                    <option class="font-semibold" value="">Biblioteca</option>
                    <option class="font-semibold" value="">La Granja</option>
                    <option class="font-semibold" value="">Parqueaderos para Administrativos</option>
                    <option class="font-semibold" value="">El Bunker</option>
                    <option class="font-semibold" value="">Polideportivo</option>
                    <option class="font-semibold" value="">El Gimnasio</option>
                    <option class="font-semibold" value="">Salones de planta A</option>
                </select>
            </div>
        </div>

        <div class="flex-col columns-1 border border-slate-950 pt-4 pb-6 content-center">
            <div class="flex justify-center font-semibold">4.¿Qué edad tiene usted?</div>
            <div class="flex justify-center font-semibold p-6">
                <input type="number" class="border font-sans" placeholder="Edad">
            </div>
        </div>
        <footer class="bg-[#0C2733] h-max">0</footer>


    </body>
</template>