function enviar() {
  var name = document.getElementById("nome");
  var sobrenome = document.getElementById("sobrenome");

  if (nome.value == "") {
    alert("Faltando nome");
    nome.focus();
  }
  if (sobrenome.value == "") {
    alert("Faltando sobrenome");
    sobrenome.focus();
  }

  if (email.value == "") {
    alert("Faltando email");
    email.focus();
  }

  document.getElementById("result-nome").innerHTML = name.value;
  document.getElementById("result-sobrenome").innerHTML = sobrenome.value;
  document.getElementById("result-email").innerHTML = email.value;

 

}
function esconderCampoPesquisa() {
  document.getElementById('olho').addEventListener('mousedown', function() {
    document.getElementById('pass').type = 'text';
  });
  
  document.getElementById('olho').addEventListener('mouseup', function() {
    document.getElementById('pass').type = 'password';
  });
  
  // Para que o password não fique exposto apos mover a imagem.
  document.getElementById('olho').addEventListener('mousemove', function() {
    document.getElementById('pass').type = 'password';
  });
}

function gerarLogin() {
  var login = document.getElementById("email").value;

  document.getElementById("login").value = login
    .normalize("NFD")
    .replace(/@([\u0300@#-\u036f]|[^0-9a-zA-Z])/g)

    .substring(0, 16);
}
