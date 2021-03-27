var tempo = new Date()
var now = tempo.getFullYear()

function clicou(){
var born = document.getElementById('born_time')
var get_value_born = born.value
var idade = ""
var genero = ""
var sex = document.getElementsByName('sexo')
var resposta = document.getElementById('res')
var img = document.createElement('img')
    img.setAttribute('id', 'foto')

        


if(get_value_born > now || get_value_born < 1900){
    alert("[ERRO] UM DOS VALORES INSERIDOS NÃO É VALIDO")
}
else{
    

    //variavel idade
    idade = now - get_value_born

    //verificação para saber o sexo
    if(sex[0].checked){
         genero = "homem"
         //criança
         if(idade >= 0 && idade <= 14){
             img.setAttribute('src','criança-masculina.png')
        }
         //jovem
         else if(idade < 30){
             img.setAttribute('src','homem-jovem.png')
        }
         //adulto(a)
         else if(idade < 55){
            img.setAttribute('src','homem-meia-idade.png') 
        }
         //velho(a)
         else {
            img.setAttribute('src','homem-velho.png')
         }
         
       
    }
    else if(sex[1].checked){
         genero = "mulher"
        //criança
        if(idade >= 0 && idade <= 14){
            img.setAttribute('src','criança-fem.png')
       }
        //jovem
        else if(idade < 30){
            img.setAttribute('src','mulher-jovem.png')
       }
        //adulto(a)
        else if(idade < 55 ){
           img.setAttribute('src','mulher-meia.png') 
       }
        //velho(a)
        else {
           img.setAttribute('src','mulher-velha.png')
         
     }

    
 }
     resposta.innerHTML = `detectamos um(a) ${genero} de ${idade} anos `
     resposta.appendChild(img)
}

}

