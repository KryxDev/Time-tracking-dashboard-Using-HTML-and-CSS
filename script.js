async function Userdata() {
    const response = await fetch('./data.json');
    const data = await response.json();
    console.log(data); 

    let currWork = document.getElementById("cwork");
    let currStudy = document.getElementById("cstudy");
    let currExercise = document.getElementById("cexercise");
    let currPlay = document.getElementById("cplay");
    let currSocial = document.getElementById("csocial");
    let currSelfCare = document.getElementById("cselfcare");

    let  prevWork = document.getElementById("pwork");
    let  prevStudy = document.getElementById("pstudy");
    let  prevExercise = document.getElementById("pexercise");
    let prevPlay = document.getElementById("pplay");
    let prevSocial = document.getElementById("psocial");
    let prevSelfCare = document.getElementById("pselfcare");

    let daily = document.getElementById("daily");
    window.addEventListener("load",()=>{
        
        currWork.innerText = data[0].timeframes.daily.current + "hrs";
        prevWork.innerText = data[0].timeframes.daily.previous + "hrs";

        currStudy.innerText = data[1].timeframes.daily.current + "hrs";
        prevStudy.innerText = data[1].timeframes.daily.previous + "hrs";

        currExercise.innerText = data[2].timeframes.daily.current + "hrs";
        prevExercise.innerText = data[2].timeframes.daily.previous + "hrs";

        currPlay.innerText = data[3].timeframes.daily.current + "hrs";
        prevPlay.innerText = data[3].timeframes.daily.previous + "hrs";

        currSocial.innerText = data[4].timeframes.daily.current + "hrs";
        prevSocial.innerText = data[4].timeframes.daily.previous + "hrs";

        currSelfCare.innerText = data[5].timeframes.daily.current + "hrs";
        prevSelfCare.innerText = data[5].timeframes.daily.previous + "hrs";

    })
    daily.addEventListener("click" ,()=>{

        currWork.innerText = data[0].timeframes.daily.current + "hrs";
        prevWork.innerText = data[0].timeframes.daily.previous + "hrs";

        currStudy.innerText = data[1].timeframes.daily.current + "hrs";
        prevStudy.innerText = data[1].timeframes.daily.previous + "hrs";

        currExercise.innerText = data[2].timeframes.daily.current + "hrs";
        prevExercise.innerText = data[2].timeframes.daily.previous + "hrs";

        currPlay.innerText = data[3].timeframes.daily.current + "hrs";
        prevPlay.innerText = data[3].timeframes.daily.previous + "hrs";

        currSocial.innerText = data[4].timeframes.daily.current + "hrs";
        prevSocial.innerText = data[4].timeframes.daily.previous + "hrs";

        currSelfCare.innerText = data[5].timeframes.daily.current + "hrs";
        prevSelfCare.innerText = data[5].timeframes.daily.previous + "hrs";

    })

    let weekly = document.getElementById("weekly");
    weekly.addEventListener('click',()=>{
        currWork.innerText = data[1].timeframes.weekly.current + "hrs";
        prevWork.innerText = data[1].timeframes.weekly.previous + "hrs";

        currStudy.innerText = data[1].timeframes.weekly.current + "hrs";
        prevStudy.innerText = data[1].timeframes.weekly.previous + "hrs";

        currExercise.innerText = data[2].timeframes.weekly.current + "hrs";
        prevExercise.innerText = data[2].timeframes.weekly.previous + "hrs";

        currPlay.innerText = data[3].timeframes.weekly.current + "hrs";
        prevPlay.innerText = data[3].timeframes.weekly.previous + "hrs";

        currSocial.innerText = data[4].timeframes.weekly.current + "hrs";
        prevSocial.innerText = data[4].timeframes.weekly.previous + "hrs";

        currSelfCare.innerText = data[5].timeframes.weekly.current + "hrs";
        prevSelfCare.innerText = data[5].timeframes.weekly.previous + "hrs";
        
    })

    let monthly = document.getElementById("monthly");
    monthly.addEventListener("click",()=>{

        currWork.innerText = data[0].timeframes.monthly.current + "hrs";
        prevWork.innerText = data[0].timeframes.monthly.previous + "hrs";

        currStudy.innerText = data[1].timeframes.monthly.current + "hrs";
        prevStudy.innerText = data[1].timeframes.monthly.previous + "hrs";

        currExercise.innerText = data[2].timeframes.monthly.current + "hrs";
        prevExercise.innerText = data[2].timeframes.monthly.previous + "hrs";

        currPlay.innerText = data[3].timeframes.monthly.current + "hrs";
        prevPlay.innerText = data[3].timeframes.monthly.previous + "hrs";

        currSocial.innerText = data[4].timeframes.monthly.current + "hrs";
        prevSocial.innerText = data[4].timeframes.monthly.previous + "hrs";

        currSelfCare.innerText = data[5].timeframes.monthly.current + "hrs";
        prevSelfCare.innerText = data[5].timeframes.monthly.previous + "hrs";

    })

  }
  Userdata();




