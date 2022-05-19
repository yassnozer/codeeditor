let codes=document.getElementById('code_here')
let start = document.getElementById('Start')
let rem = document.getElementById('Delete')
let result = document.getElementById('result')
start.onclick=()=>{
result.innerHTML=codes.value
localStorage.setItem('lastCode',codes.value)
}
rem.onclick=()=>{
    result.innerHTML=''
    codes.value=""
    }
onload=()=>{
    if(localStorage.getItem('lastCode') != null){
        var lastCode = localStorage.getItem('lastCode')
        codes.value =lastCode
        result.innerHTML=codes.value
    }

}