// Inicializa o armazenamento e os elementos do DOM para cadastro
import  Store from './storage.js';
 
const store = new Store();
 
const btnCadastrar = document.querySelector("#btn_1") as HTMLButtonElement;
 
btnCadastrar?.addEventListener("click", () => {
   
    store.cadastro({ id: 0, login: "", senha: "", nome: "", email: "" });
   
    alert("Cadastrado com sucesso!");
});
