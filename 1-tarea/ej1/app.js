class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.libros = [];
      this.mascotas = [];
    }
    getFullName() {
      const fullname = `Nombre: ${this.nombre}, Apellido: ${this.apellido}`;
      return fullname;
    }
  
    addMascota(mascota) {
      this.mascotas.push(mascota);
    }
  
    getMascotas() {
      return this.mascotas.length;
    }
  
    addBook(book, author) {
      const libro = {
        nombre: book,
        autor: author
      };
      this.libros.push(libro);
    }
    getBooks() {
      const libros = this.libros.map((libro) => libro.nombre);
      return libros;
    }
  }
  
  var brian = new Usuario("brian", "lopez");
  
  console.log(brian);
  
  brian.addMascota("Pepe");
  brian.addMascota("Panchito");
  brian.addMascota("Juan");
  
  console.log(brian.getMascotas());
  
  brian.addBook("Los 10 negritos", "Agatha Christy");
  brian.addBook("Artusamak", "Juancito Pecado");
  
  console.log(brian.getBooks());
  