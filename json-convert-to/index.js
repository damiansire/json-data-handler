const fs = require('fs');
const path = require('path');

// Directorio que deseas explorar
const directorio = './input';

// Función que deseas aplicar a cada archivo JSON
function parserJson(archivo) {
    // Aquí puedes realizar las operaciones que desees en el archivo JSON
    return Object.values(archivo)
}

function saveParsedJson(parsedJson, archivoName) {
    // Convertir el array de objetos a una cadena JSON
    const datosJSON = JSON.stringify(parsedJson, null, 2); // El segundo argumento (null) son las opciones de formato, el tercer argumento (2) es el número de espacios de indentación

    // Nombre del archivo donde se guardará la información
    const pathToSave = `output/${archivoName}`;

    // Escribir la cadena JSON en el archivo
    fs.writeFile(pathToSave, datosJSON, 'utf8', (err) => {
        if (err) {
            console.error(`Error al escribir en el archivo JSON: ${err}`);
            return;
        }
        console.log(`Datos guardados en ${pathToSave}`);
    });
}

// Obtener la lista de archivos en el directorio
fs.readdir(directorio, (err, archivosEnDirectorio) => {
    if (err) {
        console.error(`Error al leer el directorio: ${err}`);
        return;
    }

    // Iterar sobre los archivos y aplicar la función a los archivos JSON
    archivosEnDirectorio.forEach((archivo) => {
        // Obtener la ruta completa del archivo
        const rutaCompleta = path.join(directorio, archivo);

        // Verificar si es un archivo JSON
        if (path.extname(archivo) === '.json') {
            // Leer y analizar el contenido del archivo JSON
            fs.readFile(rutaCompleta, 'utf8', (err, data) => {
                if (err) {
                    console.error(`Error al leer el archivo JSON: ${err}`);
                    return;
                }

                try {
                    const jsonData = JSON.parse(data);
                    const parsedJson = parserJson(jsonData);
                    saveParsedJson(parsedJson, archivo)
                } catch (e) {
                    console.error(`Error al analizar el archivo JSON: ${e}`);
                }
            });
        }
    });
});
