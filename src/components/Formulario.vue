<script>

</script>


<template>

    <body>
        <div class="flex justify-center text-3xl bg-[#3C6E84] py-2">Encuestas De Sensasión Térmica</div>

        <div class="flex-col columns-1 border border-slate-950 pb-6 pt-1 ">
            <p class="flex justify-center font-semibold p-2">1.¿Cual es la sensacion termica que usted siente en este momento?</p>
            <form class="flex flex-col columns-1 items-left text-xl ml-[730px]">
                <div><input type="radio" name="sensacion" value="muy_alta" class="font-semibold"> Mucha calor</div>
                <div><input type="radio" name="sensacion" value="alta" class="font-semibold"> Calor</div>
                <div><input type="radio" name="sensacion" value="media" class="font-semibold"> Templado</div>
                <div><input type="radio" name="sensacion" value="baja" class="font-semibold"> Frio</div>
                <div> <input type="radio" name="sensacion" value="muy_baja" class="font-semibold"> Muy frio
                </div>
            </form>
        </div>

        <div class="flex-col columns-1 border border-slate-950 pt-4 pb-6 content-center">
            <div class="flex justify-center font-semibold">2.¿Que dia y a que hora esta respondiendo esta Encuesta?</div>
            <div class="flex justify-center font-semibold p-6"><input class="text-center rounded border border-slate-900" type="datetime-local" name="datetime" id="datetime"></div>
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
            <div class="flex justify-center font-semibold">4.¿?</div>
            <div class="flex justify-center font-semibold p-6">
                
            </div>
        </div>
        
        

    </body>
</template>