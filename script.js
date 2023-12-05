const apikey="87a3bb8ff37bf50b0fcf030a06e19ae6";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbtn = document.querySelector("button");
const searchinput = document.querySelector(".search input");
const weathericon=document.querySelector(".weather img");
async function checkweather(city){
	const response= await fetch(apiUrl + city +`&appid=${apikey}`);
	var data = await response.json();
	console.log(data);
	document.querySelector(".city").innerHTML= data.name;
	document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+"°C";
	document.querySelector(".humidity1 h2").innerHTML= data.main.humidity+"%";
	document.querySelector(".wind h2").innerHTML= data.wind.speed + "Km/h";
   if(data.weather[0].main=="Clouds"){
	weathericon.src="images/clouds.png";
   }
   else if(data.weather[0].main=="Clear"){  
   weathericon.src="images/clear.png";
}
 else if(data.weather[0].main=="Rain"){
	weathericon.src="images/rain.png";
}

else if(data.weather[0].main=="Humidity"){
	weathericon.src="images/humidity.png";
}
else if(data.weather[0].main=="Mist"){
	weathericon.src="images/mist.png";
}
else if(data.weather[0].main=="Snow"){
	weathericon.src="images/snow.png";
}
document.querySelector(".Hide").style.display="none";
document.querySelector(".block").style.display="block";



}
searchbtn.addEventListener("click", myFunction);

function myFunction() {
	checkweather(searchinput.value);
	

}


