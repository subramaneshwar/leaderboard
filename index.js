const first = document.getElementById("first")
const last = document.getElementById("last")
const country = document.getElementById("country")
const score = document.getElementById("score")
const bottom = document.getElementById("scorecard")
const er = document.getElementById("er")
var fulldate
var i=0
setInterval(()=>{
    
    var  dt =new Date()
    var day = new Date().toLocaleTimeString('en-us', { day: "numeric", weekday: "long", month: 'short',year:"numeric"}).split(",")
    var  current=dt.getHours()+":"+dt.getMinutes(); 
    // console.log(current);
    // console.log(day);
    fulldate =day[1]+","+day[2]+" "+current
    // console.log(fulldate);
})

function addplayer(){
    document.getElementById("er").innerHTML=""
    console.log("hiis")
    let fi=false
    let lt=false
    let co=false
    let sc=false
    if(first.value===""){
        // confirm("valid details")
    }else{
        fi=true
    }
    if(last.value===""){
        // confirm("valid details")
    }else{
        lt=true
        
    }
    if(country.value===""){
        // confirm("valid details")
    }else{
        co=true
        
    }
    if(score.value===""){
        // confirm("valid details")
    }else{
        if(/^[0-9]+$/.test(score.value)==false){
            alert("Enter Number")
        }else{

            sc=true
        }

    }
    if(sc==true && lt==true&& sc==true &&co==true ){
        let Name=first.value+" "+last.value
        bottom.innerHTML +=`<div class="card" id="card${i}">
        <div class="name">
            <p> ${Name} </p>
            <p class="date">${fulldate}</p>
        </div>
        <div class="coutry">
            ${country.value}
        </div>
        <div class="scores" id="scores${i}">
            ${score.value}
        </div>
        <div class="buuton">
            <button  class="allbuts"  id="dele" onclick="del(${i})"><img src="bin.png" alt="" height="20" width="20">
            </button>
            <button  class="allbuts"  id="plus${i}" onclick="plus(${i})">+5</button>
            <button  class="allbuts"  id="minus${i}" onclick="minus(${i}) ">-5</button>
        </div>
    </div>`
    i++;
    // console.log(document.getElementById("scores"+i))
    }
    else{
        document.getElementById("er").innerHTML="All Fields are required"
    }


}
function plus(id){
    console.log(id)
    console.log(`scores${id}`)
    let valu=document.getElementById("scores"+id).innerHTML
    document.getElementById("scores"+id).innerHTML=+valu+5
}
function minus(id){
    console.log(id)
    console.log(`scores${id}`)
    let valu=document.getElementById("scores"+id).innerHTML
    document.getElementById("scores"+id).innerHTML=+valu-5
}
function del(val){
    console.log("card"+val)
    // document.removeChild("card"+val)
    let rem = document.getElementById("card"+val)
    rem.remove()

}