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

  // Cần Thơ - Vĩnh Long
  const polyline_CT_VL = {
    type: "polyline",
    paths: [
      [105.68244944000621, 10.134620544096807],
      [105.69911583660013, 10.124597020788109],
      [105.70846009420127, 10.118109979903807],
      [105.715154170089, 10.113100739292825],
      [105.72662818189711, 10.104514364407569],
      [105.73515998193518, 10.098150008199541],
      [105.75178980397165, 10.09006013580063],
      [105.76040970502717, 10.082949570686205],
      [105.7641988683205, 10.078530556650565],
      [105.76816267377951, 10.076154581046355],
      [105.77846987912503, 10.071360500957635],
      [105.78142950453667, 10.069740543515206],
      [105.78714012397306, 10.064000562691865],
      [105.79562900155916, 10.052380568631659],
      [105.80354061444051, 10.041620180979928],
      [105.80939009804555, 10.032310655878858],
      [105.8217896996885, 10.012538609178304],
      [105.82613043359288, 10.005379242918309],
      [105.83502956470284, 9.994120228193866],
      [105.83771993724052, 9.990709699816524],
      [105.84496014156589, 9.982629774052233],
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
    Description: "Đường ranh giới của Cần Thơ - Vĩnh Long",
  };

  const polylineGraphic = new Graphic({
    geometry: polyline_CT_VL,
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
