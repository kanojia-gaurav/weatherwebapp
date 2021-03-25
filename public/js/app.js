const submitbtn  = document.getElementById('submitbtn');
const cityname = document.getElementById('cityname');
const city_name = document.getElementById('city_name');

const temp_val = document.getElementById('temp_val');
const temp_status = document.getElementById('temp_status');

const datahide = document.querySelector(".middle_layer")



const getinfo=async(event)=>{
    event.preventDefault();
    let cityval = cityname.value;
    
    if(cityval === ""){

        city_name.innerHTML = '<p class="bg-danger">Plz write the name before u search</p>'
        datahide.classList.add("data_hide");
        // city_name.innerText = 'Plz write the name before u search';

    }else{
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=5a4ef63708a1f7d0ecbb0a363a193969`;
            const response = await fetch(url);
            // console.log(response);
            const data = await response.json();
            console.log(data)
            const arrdata = [data];
            city_name.innerText = `${arrdata[0].name}, ${arrdata[0].sys.country}`
            temp_val.innerText = arrdata[0].main.temp
            temp_status.innerText = arrdata[0].weather[0].main
            datahide.classList.remove("data_hide");
            
        } catch (error) {
            city_name.innerHTML = '<p class="bg-warning" style="color:black">Plz enter the city name properly</p>'
            // city_name.innerText = 'Plz enter the city name properly';
            datahide.classList.add("data_hide");
        }
       
    }


}
submitbtn.addEventListener("click",getinfo);