        function desordenarLineas() {
            var inputTextarea = document.getElementById("inputTextarea");
            var outputTextarea = document.getElementById("outputTextarea");

            // Obtener las líneas del textarea de entrada y dividirlas en un array
            var lines = inputTextarea.value.split('\n');

            // Desordenar el array de líneas aleatoriamente
            for (var i = lines.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = lines[i];
                lines[i] = lines[j];
                lines[j] = temp;
            }

            // Unir las líneas desordenadas en un solo texto
            var shuffledText = lines.join('\n');

            // Mostrar el texto desordenado en el textarea de salida
            outputTextarea.value = shuffledText;
        }