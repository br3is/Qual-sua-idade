function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('idade')
    var res = document.getElementById('resposta')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('Algo deu errado, tente novamente')
    }else{
        var gender = document.getElementsByName('genero')
        var idade = ano - Number(fano.value)
        var genderID = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(gender[0].checked){
            genderID = 'homem'
            if(idade >= 0 && idade < 15){
                //criança
                img.setAttribute('src', './assets/criança-m.png') 
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', './assets/jovem-m.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', './assets/audlto-m.png')
            }else{
                //idoso
                img.setAttribute('src', './assets/idoso-m.png')
            }
        }else if(gender[1].checked){
            genderID = 'mulher'
            if(idade >= 0 && idade < 15){
                //criança 
                img.setAttribute('src', './assets/criança-f.png') 
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', './assets/jovem-f.png') 
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', './assets/audlto-f.png') 
            }else{
                //idoso
                img.setAttribute('src', './assets/idoso-f.png') 
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<br><br>Detectamos ${genderID} com ${idade} anos.`
        res.appendChild(img)
        
    }
    
}