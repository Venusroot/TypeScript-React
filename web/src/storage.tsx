// Iniciando o Storage para armazenar os dados do usuario
//Modo padrão e correto

interface IForms{
    id:number;
    login:string;
    senha:string;
    nome:string;
    email:string;
}

export default class Store{

    // Inicializa o storage com os dados padrão
    constructor(){
        this.dados();
    }

    dados() : void {

        //Declarando os dados que iremos armazenar
        let meusdados: IForms[] = [
                                        {id:1, login:"ringo", senha:"1234", nome:"Ringo", email:"ringo@gmail.com"},
                                        {id:2, login:"john", senha:"123@", nome:"John", email:"john@gmail.com"},
                                        {id:3, login:"paul", senha:"1233", nome:"Paul", email:"paul@gmail.com"}  
                                  ]; 

        //Busca os dados e transforma em Script
        localStorage.setItem("banco", JSON.stringify(meusdados));

    }

    //Carregamos os dados de cima e voltamos para o cadastro para podermos fazer um novo
    cadastro(mf: { login: string; senha: string; nome: string; email: string; }):void{
        
        let meusdados = localStorage.getItem("banco");

        let ds = JSON.parse(meusdados!) as IForms[];

        mf.login = (document.querySelector("#login") as HTMLInputElement).value; 
        mf.senha = (document.querySelector("#senha") as HTMLInputElement).value; 
        mf.nome =  (document.querySelector("#nome") as HTMLInputElement).value;
        mf.email = (document.querySelector("#email") as HTMLInputElement).value;  



        let cad = {id:Date.now(), login:mf.login, senha:mf.senha, nome:mf.nome, email:mf.email};
        
        //let md:IForms[] = [{id:Date.now(), login:mf.login, senha:mf.senha, nome:mf.nome, email:mf.email};]; Modo para usar como matriz

        ds.push(cad);
        localStorage.setItem("banco", JSON.stringify(ds));
    }

}