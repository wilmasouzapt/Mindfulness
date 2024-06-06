async function fetchadvice(){
    try{
        const response=await fetch('https://api.adviceslip.com/advice');
        const data=await response.json()
        const advice=data.slip.advice
        document.getElementById("advice").innerHTML=advice


    }catch(error){ 
        console.error('Error: ', error)
        document.getElementById("advice").innerHTML="Não foi possível carregar"


    }
}

function updateadvice(){
    fetchadvice()
    setInterval(fetchadvice,30000)
}

document.addEventListener('DOMContentLoaded',updateadvice)