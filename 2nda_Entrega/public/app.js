const socket = io()
const form_msg = document.getElementById("form-msg")
socket.on('mensajes', (data)=>{
    console.log(data)
    document.getElementById("messages").innerHTML = data
    .map(
      (entry) => `<div>
                    <strong>${entry.nombre}</strong>
                    <em>${entry.text}</em>
                  </div>`
    )
    .join(" ");
})

form_msg.addEventListener('submit', (e)=>{
    const message = {
            nombre: e.target.elements.username.value,
            text: e.target.elements.texto.value,
          };
          
          socket.emit("new-message", message);
        
          return false;
})
// ______________________________________
// eslint-disable-next-line no-undef