require([
  "esri/config",
  "esri/Map",
  "esri/views/MapView",

  "esri/Graphic",
  "esri/layers/GraphicsLayer",
], function (esriConfig, Map, MapView, Graphic, GraphicsLayer) {
  esriConfig.apiKey = "YOUR_API_KEY";

  const map = new Map({
    basemap: "topo-vector", //Basemap layer service
  });

  const view = new MapView({
    map: map,
    center: [105.4832859281967, 10.310331309573266], //Longitude, latitude
    zoom: 14,
    container: "viewDiv",
  });

  const graphicsLayer = new GraphicsLayer();
  map.add(graphicsLayer);

  const point = {
    //Create a point
    type: "point",
    longitude: 105.18105044517749,
    latitude: 10.50917814002457,
  };
  const simpleMarkerSymbol = {
    type: "simple-marker",
    color: [226, 119, 40], // Orange
    outline: {
      color: [5, 100, 20],
      width: 0.5,
    },
  };

  const pointGraphic = new Graphic({
    geometry: point,
    symbol: simpleMarkerSymbol,
  });
  graphicsLayer.add(pointGraphic);

  // Create a line geometry

  // Hậu Giang - Vĩnh Long
  const polyline_HG_VL = {
    type: "polyline",
    paths: [
      [105.84496014156589, 9.982629774052233],
      [105.84943077127011, 9.977159290831755],
      [105.85619179538558, 9.970017277051445],
      [105.86983033912007, 9.957999086205326],
      [105.87544880268115, 9.952530184670582],
      [105.87814047355567, 9.950498545967873],
      [105.89672971174738, 9.938059822264224],
    ],
  };
  const simpleLineSymbol = {
    type: "simple-line",
    color: [226, 119, 40], // Orange
    width: 2,
  };

  const popupTemplate = {
    title: "{Name}",
    content: "{Description}",
  };
  const attributes = {
    Name: "Đường ranh giới",
    Description: "Đường ranh giới của Hậu Giang - Vĩnh Long",
  };

  const polylineGraphic = new Graphic({
    geometry: polyline_HG_VL,
    symbol: simpleLineSymbol,

    popupTemplate: popupTemplate,
    attributes: attributes,
  });
  graphicsLayer.add(polylineGraphic);

  // Create a polygon geometry
  /*const polygon = {
    type: "polygon",
    rings: [
        [-118.818984489994, 34.0137559967283], //Longitude, latitude
        [-118.806796597377, 34.0215816298725], //Longitude, latitude
        [-118.791432890735, 34.0163883241613], //Longitude, latitude
        [-118.79596686535, 34.008564864635],   //Longitude, latitude
        [-118.808558110679, 34.0035027131376]  //Longitude, latitude
    ]
 };

 const simpleFillSymbol = {
    type: "simple-fill",
    color: [227, 139, 79, 0.8],  // Orange, opacity 80%
    outline: {
        color: [255, 255, 255],
        width: 1
    }
 };

 const popupTemplate = {
    title: "{Name}",
    content: "{Description}"
 }
 const attributes = {
    Name: "Graphic",
    Description: "I am a polygon"
 }

 const polygonGraphic = new Graphic({
    geometry: polygon,
    symbol: simpleFillSymbol,

    attributes: attributes,
    popupTemplate: popupTemplate

 });
 graphicsLayer.add(polygonGraphic);*/
});
