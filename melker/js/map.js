function initMap() {
    var binkom = {
        lat: 50.870727,
        lng: 4.885123
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: binkom
    });
    var marker = new google.maps.Marker({
        position: binkom,
        map: map
    });
}
