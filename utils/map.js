function initMap() {
  //   var e = [
  //       { stylers: [{ hue: "#0971ce" }, { lightness: 5 }] },
  //       {
  //         featureType: "road.highway",
  //         elementType: "geometry",
  //         stylers: [{ color: "#fa9e25" }, { visibility: "simplified" }],
  //       },
  //     ],
  //     o = { lat: 6.5244, lng: 3.3792 },
  //     t = new google.maps.Map(document.getElementById("map"), {
  //       mapTypeControl: !1,
  //       center: o,
  //       zoom: 15,
  //       streetViewControl: !1,
  //       scrollwheel: !1,
  //     }),
  //     n = new google.maps.StyledMapType(e, { name: "Styled Map" });
  //   t.mapTypes.set("map_style", n), t.setMapTypeId("map_style"), t.panBy(-200, 0);
  //   var a = {
  //       url: "img/office.png",
  //       size: new google.maps.Size(25, 25),
  //       scaledSize: new google.maps.Size(25, 25),
  //     },
  //     l =
  //       (new google.maps.Marker({ position: o, map: t, icon: a }),
  //       document.getElementById("pickup_location")),
  //     i = { types: ["geocode"], componentRestrictions: { country: "ng" } };
  //   new google.maps.places.Autocomplete(l, i);
}

module.exports = initMap;
