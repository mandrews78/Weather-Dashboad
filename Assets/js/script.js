var API_KEY = '2d6a004b9873e7e195e89bd1de4c9df4';

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(pos){
        //'pos' return object has many properties we can grab
        console.log(pos)
        var geoLat = pos.coords.latitude.toFixed(5);
        var geoLng = pos.coords.longitude.toFixed(5);
        var geoAcc = pos.coords.accuracy.toFixed(1);
        console.log(geoLat)
        console.log(geoLng)
        console.log(geoAcc)

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${geoLat}&lon=${geoLng}&exclude=hourly,minutely,&units=metric&appid=${API_KEY}`)
        .then(response => response.json())
        .then(data => console.log(data));
            document.querySelector('#data-output');
            

      });
  }

        // navigator.geolocation.getCurrentPosition(gotPosition);


