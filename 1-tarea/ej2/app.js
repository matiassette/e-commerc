function Usuario(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = [];
    this.mascotas = [];
  
    this.getFullName = function () {
      var fullname = `Nombre: ${this.nombre}, Apellido: ${this.apellido}`;
      return fullname;
    };
  
    this.addMascota = function (mascota) {
      this.mascotas.push(mascota);
    };
  
    this.getMascota = function () {
      return this.mascotas.length;
    };
  
    this.addBook = function (book, author) {
      var libro = {
        nombre: book,
        autor: author
      };
      this.libros.push(libro);
    };
  
    this.getBooks = function () {
      var libros = this.libros.map((libro) => libro.nombre);
      return libros;
    };
  }
  var brian = new Usuario("brian", "lopez");
  
  console.log(brian);
  
  brian.addMascota("Pepe");
  brian.addMascota("Panchito");
  brian.addMascota("Juan");
  
  console.log(brian.getMascota());
  
  brian.addBook("Los 10 negritos", "Agatha Christy");
  brian.addBook("Artusamak", "Juancito Pecado");
  
  console.log(brian.getBooks());
  