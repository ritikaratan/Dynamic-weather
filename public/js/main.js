const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');

const getInfo = async(event) =>{
    event.preventDefault();
    let cityVal = cityName.value;

   
    if(cityVal === ""){ 
       city_name.innerText =`Plz write the name before search`;
    }
    else{
        try{
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=e3cb1fcd57bd24bb94ac6b10f2ac1687`
        const response = await fetch(url);
        const data= await response.json();
        
        const arrData = [data];
        city_name.innerText=`${arrData[0].name}, ${arrData[0].sys.country}`;
        temp.innerText = arrData[0].main.temp;
        // temp_status.innerText = arrData[0].weather[0].main;
        const tempMood = arrData[0].weather[0].main;
        if(tempMood == 'Clear'){
            temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
        }
        else if(tempMood == "Clouds"){
            temp_status.innerHTML = "<i class='fas fa-cloud' style:'color:#f1f2f6;'></i>";
        }
        else if(tempMood == "Rain"){
            temp_status.innerHTML ="<i class='fas fa-cloud-rain' style:'color:#a4b0be;'></i>";
        }
        else{
            temp_status.innerHTML ="<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
        }
        }
        catch{
            city_name.innerText =`Plz enter the city name properly`;
        }
    }
}
submitBtn.addEventListener('click', getInfo);