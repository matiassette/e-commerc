
import fs from "fs";


class Archivo{
	constructor(nombreArchivo) {
		this.nombreArchivo = nombreArchivo;
	}
//----------------------------------------------------------------------------------------------------//
	async crear() {
		try {
			await fs.promises.writeFile('./productos.txt', '')
		} catch (error) {
			console.log(error)
		}
	}
//----------------------------------------------------------------------------------------------------//
	async leer () {
		try {
			let res;
			await fs.promises.readFile('./productos.txt', 'utf-8')
			.then((content) =>{
				if (content.length == 0){
					res = []
					console.log(res)
					return res
				}
				res =  JSON.parse(content)
				console.log(res)
				return res
			})
			return res
			
		} catch (error) {
			console.log(error)
		}
	} 
//----------------------------------------------------------------------------------------------------//
	async guardar (titulo, precio, foto) {
		try {
			let read = await this.leer()
			console.log(read.length)

			const producto = {
				id: read.length + 1,
				title: titulo,
				price: precio,
				thumbnail: foto
			}
			read.push(producto)
			fs.promises.writeFile('./productos.txt', JSON.stringify(read,null, "\t"))

		} catch (error) {
			console.log('error guardar', error)
		}
	}
//----------------------------------------------------------------------------------------------------//
	async borrar() {
		try {
			await fs.promises.unlink('./productos.txt')
			console.log('ARCHIVO ELIMINADO ✓');
		}
		catch (error) {
			console.log('ALGO SALIO MAL AL BORRAR! ❌' + error)
		}
	}
}

const archivoMio = new Archivo()

// await archivoMio.crear();
// await archivoMio.leer();
// await archivoMio.guardar('patito', 1234, 'patito.jpg')
// await archivoMio.guardar('gatito', 21435, 'gatito.png')
// await archivoMio.leer();
await archivoMio.borrar();