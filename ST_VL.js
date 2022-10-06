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

  // Sóc Trăng - Vĩnh Long
  const polyline_ST_VL = {
    type: "polyline",
    paths: [
      [105.89672971174738, 9.938059822264224],
      [105.90480986092211, 9.932530397769884],
      [105.90656040810012, 9.931769124686207],
      [105.9079998973552, 9.931430219746876],
      [105.90941978917296, 9.9313902374577],
      [105.91092087152667, 9.931557972314653],
      [105.91249971386499, 9.931779964592128],
      [105.91334041871674, 9.931950572801009],
      [105.91469980814824, 9.932070761896249],
      [105.91581050612639, 9.932090329031219],
      [105.91710993843532, 9.931989594656828],
      [105.91922011665991, 9.931460142256965],
      [105.92012074818764, 9.931059772761046],
      [105.92141122728258, 9.93020952993367],
      [105.92538940712559, 9.927149564325681],
      [105.92891770588808, 9.924079872140869],
      [105.92902863088437, 9.923983377258534],
      [105.92927879165772, 9.923769359619286],
      [105.93306134969053, 9.92060828208536],
      [105.93876067325351, 9.916289142608733],
      [105.9391515170682, 9.916029926455241],
      [105.94022502074256, 9.915249285155491],
      [105.9450237102513, 9.911732190526953],
      [105.9469387710627, 9.91024100332464],
      [105.94849126650378, 9.909158726887668],
      [105.9507623592297, 9.907709147022445],
      [105.95471125786918, 9.905449140619092],
      [105.9587598825494, 9.90337989746164],
      [105.96051038284742, 9.902039691537881],
      [105.9615803850754, 9.90107043937475],
      [105.96280031990884, 9.899699477533519],
      [105.96542145586308, 9.89635850593733],
      [105.96673975074843, 9.89448022717295],
      [105.97071051000104, 9.889600178196929],
      [105.97183989874326, 9.888540582737665],
      [105.97262994357045, 9.887919293235678],
      [105.9755411520328, 9.886029719990935],
      [105.98044925398077, 9.883850603093856],
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
    Description: "Đường ranh giới của Sóc Trăng - Vĩnh Long",
  };

  const polylineGraphic = new Graphic({
    geometry: polyline_ST_VL,
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
