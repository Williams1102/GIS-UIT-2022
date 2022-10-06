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

  // An Giang - Cần Thơ
  const polyline_CT_DT = {
    type: "polyline",
    paths: [
      [105.49544033678086, 10.325350678843142],
      [105.50042050616132, 10.319989014547692],
      [105.50398526821724, 10.316766906324252],
      [105.50909051337425, 10.31211906304231],
      [105.51136957769651, 10.309460080322946],
      [105.51214851582311, 10.308638972304832],
      [105.51275025381587, 10.308008818053263],
      [105.5135694992939, 10.307279646959222],
      [105.51515931940395, 10.306390906450764],
      [105.5174290356065, 10.305569737482013],
      [105.52038952584896, 10.305160826808502],
      [105.52125834482665, 10.304899672231214],
      [105.5320286544184, 10.29894481254295],
      [105.54208058238093, 10.292739843949395],
      [105.54975524063889, 10.286143118263137],
      [105.55394855108217, 10.28264685894603],
      [105.55948025245188, 10.278109873956124],
      [105.56292095903773, 10.276038878047936],
      [105.56495896772073, 10.274560913221991],
      [105.56690008167713, 10.272339327616478],
      [105.5693304918347, 10.268909665070481],
      [105.57550169444401, 10.26268941143371],
      [105.5811901925547, 10.25639868267299],
      [105.58376144366632, 10.253949476540985],
      [105.58954984807687, 10.249620565892135],
      [105.60457889154725, 10.233039996616066],
      [105.61067114128106, 10.223287710018715],
      [105.61592917998901, 10.213580216894323],
      [105.61972997388622, 10.204610423411888],
      [105.622799399955, 10.194370926153011],
      [105.62335113799669, 10.191446259127787],
      [105.6239797322628, 10.187880512201605],
      [105.62525915776882, 10.185740680213732],
      [105.63697926305062, 10.174870520282079],
      [105.6480992303458, 10.165790267265265],
      [105.65340361212826, 10.157853591578693],
      [105.6569790099276, 10.152619667271814],
      [105.66390959265331, 10.14562992936179],
      [105.67238932167484, 10.140649636138773],
      [105.67576725382447, 10.138628588162778],
      [105.68244944000621, 10.134620544096807],
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
    Description: "Đường ranh giới của Cần Thơ - Đồng Tháp",
  };

  const polylineGraphic = new Graphic({
    geometry: polyline_CT_DT,
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
