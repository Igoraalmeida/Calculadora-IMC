const btnVoltar = document.querySelector('.btnVoltar')



btnVoltar.addEventListener("click", function(){
    location.href = "https://central-ferramentas.vercel.app"
})







function calcular(){

    var peso = document.querySelector('#peso');
    var alt = document.querySelector('#altura');

    var imc_result = document.querySelector('#imc-result')
    var msg = document.querySelector('#msg');
    var span = document.querySelector('#span')
    
    var $peso = peso.value
    var $alt = alt.value

    var soma 
    var media
   
    soma = $alt*$alt
    media = $peso / soma
    media = media.toFixed(2)

    imc_result.innerHTML = media

    if($peso <= 0 || $peso >= 350 || $peso =='' && $alt <= 0 || $alt >= 3 || $alt ==''){
        alert('Preencha os campos solicitados')
        span.innerHTML = ''
        imc_result.innerHTML = ''
        msg.innerHTML = ''
    } else {

    if(media < 18.5){

        msg.innerHTML = 'Abaixo do peso'
        imc_result.style.color = '#892BE2'

    } else if(media >= 18.5 && media <24.9){

        msg.innerHTML = 'Você está no Peso Ideal' 
        imc_result.style.color = '#892BE2' 
         
    } else if(media >= 25 && media <29.9){

        msg.innerHTML = 'Levemente acima do peso'  
        imc_result.style.color = 'darkgoldenrod' 

    } else if(media >= 30 && media <39.9){

        msg.innerHTML = 'Obesidade' 

        imc_result.style.color = 'brown' 

    } else if(media >= 40){

        msg.innerHTML = 'Obesidade Grave'
           
        imc_result.style.color = 'red'
    }

    span.innerHTML = 'Seu IMC'
    
    }
}

