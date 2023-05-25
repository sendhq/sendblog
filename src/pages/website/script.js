// const initMap = () => {
//   const google = window.google_tag_data;
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
// };
// $(function () {
//   var e = new URL(window.location.href),
//     o = e.searchParams.get("ref_code");
//   o &&
//     (function (e, o, t) {
//       var n = "";
//       if (t) {
//         var a = new Date();
//         a.setTime(a.getTime() + 24 * t * 60 * 60 * 1e3),
//           (n = "; expires=" + a.toUTCString());
//       }
//       document.cookie = e + "=" + (o || "") + n + "; path=/";
//     })("_referral", o, 20),
//     $("._anchor").click(function () {
//       var e = $(this).attr("href");
//       return (
//         (e = e.replace("/", "")),
//         $("html, body").animate({ scrollTop: $(e).offset().top }, 1e3),
//         !1
//       );
//     }),
//     $(".mobile_nav").click(function (e) {
//       e.preventDefault(), $(".navbar").addClass("open");
//     }),
//     $(".close_close_btn").click(function (e) {
//       e.preventDefault(), $(".navbar").removeClass("open");
//     });
// });
