const btn=document.getElementsByClassName("but")
const res=document.getElementById("result")
console.log(typeof(btn))
console.log(btn)
console.log(res)
for(let key of btn){
    key.addEventListener("click",function(){
        val=key.value
        console.log(val)
        if(val==="AC"){
            res.innerHTML=""
        }
        else if(val==="DEL"){
            res.innerHTML=res.innerHTML.slice(0,-1)
        }
        else if(val==="="){
            res.innerHTML=eval(res.innerHTML)
        }
        else if(val==="+/-"){
            res.innerHTML*=-1
        }
        else{
            res.innerHTML+=val
        }
    })
}