function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah')
                .attr('src', e.target.result)
                .width(150)
                .height(200);
        };

        reader.readAsDataURL(input.files[0]);
    }
    var map = new L.Map('map', {center: new L.LatLng(36.1352, -80.2763), zoom: 16});

            //map types
        var roadMutant = L.gridLayer.googleMutant({
          maxZoom: 24,
          type:'roadmap'
        }).addTo(map);
        var hybridMutant = L.gridLayer.googleMutant({
          maxZoom: 24,
          type:'hybrid'
        });

        L.control.layers({
          Roadmap: roadMutant,
          Hybrid: hybridMutant,
        }, {}, {
          collapsed: false
        }).addTo(map);

        var xhttp = new XMLHttpRequest();
        var x = document.getElementById('infoBar');

        // markers
        for(var i = 0; i < data.Trees.length; i++){
          var a = data.Trees[i].Longitude;
          var lon = parseFloat(a);
          var b = data.Trees[i].Latitude;
          var lat = parseFloat(b);
          L.marker([lat,lon]).addTo(map).bindPopup("My treeID is "+data.Trees[i].Name+".");
        }

        function displayInfo(m){
          
        }
}