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
  const polyline_AG_CT = {
    type: "polyline",
    paths: [
      [105.49544033678086, 10.325350678843142],
      [105.49495109115938, 10.325200588233876],
      [105.49132989702336, 10.32437035742844],
      [105.49046325209973, 10.324305306292919],
      [105.49002607744113, 10.32428250855005],
      [105.4895598423132, 10.324259590735352],
      [105.48914245116633, 10.324163191060963],
      [105.48865000873285, 10.324049629061326],
      [105.48809908655062, 10.324020771193291],
      [105.48797960243748, 10.323999775056386],
      [105.48755999760436, 10.323970825696936],
      [105.48727055989316, 10.323859768769033],
      [105.48712017211268, 10.32371968512507],
      [105.4868492818627, 10.323239661441182],
      [105.48599916070401, 10.320416572995295],
      [105.48543041398048, 10.318540045851115],
      [105.48502924899583, 10.317429972165703],
      [105.48478892050767, 10.316939476839027],
      [105.48458061093756, 10.316410849367951],
      [105.48392972511704, 10.315840145395681],
      [105.48337840845377, 10.315454301565776],
      [105.48339295348809, 10.315464524466378],
      [105.48291422876152, 10.315128181821349],
      [105.48264610427515, 10.314921110014204],
      [105.48119961142862, 10.313792251918024],
      [105.47939952477529, 10.312350417933803],
      [105.47853574891516, 10.311682198819137],
      [105.4770997493795, 10.310570599070244],
      [105.4768994717293, 10.310830485033934],
      [105.47688030199876, 10.310849632948516],
      [105.47654039787251, 10.311310486023547],
      [105.47615028857669, 10.311040480481203],
      [105.47619953778252, 10.310940233525532],
      [105.47591949508251, 10.310750044267477],
      [105.47536941239893, 10.310769920010257],
      [105.47524994620187, 10.310760499159825],
      [105.47393008323674, 10.310726401954101],
      [105.47307089895915, 10.310699909432639],
      [105.47238947683977, 10.310669575003212],
      [105.47205462962494, 10.310660523614409],
      [105.47179566019872, 10.310650047483069],
      [105.47128163171445, 10.310649305114774],
      [105.46925940275655, 10.310620868442928],
      [105.46901913726109, 10.310599490017077],
      [105.46888916473554, 10.310529564128394],
      [105.4686226402702, 10.310319350816513],
      [105.46837125575334, 10.310121321604512],
      [105.4682090389094, 10.310039913646172],
      [105.46815007213395, 10.310020353858436],
      [105.46796904932162, 10.309980840417433],
      [105.46778073157188, 10.309989318965096],
      [105.46752957725082, 10.310000679134728],
      [105.46707299805453, 10.309915614389277],
      [105.46381229197192, 10.309339583432784],
      [105.463470274826, 10.309279387406503],
      [105.46308536156886, 10.309214208024322],
      [105.46174973738111, 10.308997250033478],
      [105.46073063922765, 10.308819961361143],
      [105.46048362615494, 10.308754381813126],
      [105.46038979197387, 10.308729927666755],
      [105.45977207244324, 10.308649415544046],
      [105.4593993188961, 10.308600592993269],
      [105.4592135907334, 10.30855338969657],
      [105.45903898853204, 10.308509509997048],
      [105.45766986737172, 10.30828113333579],
      [105.45738709611669, 10.308234487010116],
      [105.45591980335075, 10.307989766033002],
      [105.45593015670934, 10.307910349948838],
      [105.4559997570501, 10.307620250494443],
      [105.45457991013109, 10.307050257371461],
      [105.45459977787664, 10.306960715092414],
      [105.45400029917374, 10.306659746203817],
      [105.45409930524191, 10.306419592965995],
      [105.45332963700201, 10.306100311720305],
      [105.45328948218729, 10.30620009125507],
      [105.45278960617604, 10.305969695949278],
      [105.45286978016955, 10.305829754090256],
      [105.45181978147697, 10.305410403955776],
      [105.45158818517504, 10.30616781219777],
      [105.45139457298299, 10.30682808857394],
      [105.4513103502616, 10.307130301308646],
      [105.45127917292938, 10.307189679877734],
      [105.45118973014571, 10.307479671448236],
      [105.45107005912597, 10.307709626009604],
      [105.45094929991104, 10.307603134027145],
      [105.45079757074096, 10.307468202876294],
      [105.45071643621887, 10.307396507580895],
      [105.45059901553643, 10.307289780009611],
      [105.45056131398225, 10.307251969565062],
      [105.45052905675567, 10.307219836761218],
      [105.4504344656419, 10.307152076648816],
      [105.45032063396621, 10.307070218243403],
      [105.44984972279379, 10.306960547782401],
      [105.44936022776966, 10.30675093626691],
      [105.4492962732233, 10.306696431541306],
      [105.4492056688671, 10.306616944929702],
      [105.44905933266047, 10.306479796624883],
      [105.44884306160142, 10.306248591616624],
      [105.44861999081687, 10.306010509111127],
      [105.44856777170283, 10.305974300107552],
      [105.44842124776746, 10.305873115606305],
      [105.44817286149984, 10.305698854475004],
      [105.4479293036734, 10.30552347683493],
      [105.44787961020637, 10.305490429921784],
      [105.44778908987831, 10.305359070167682],
      [105.44768071003223, 10.305165471403544],
      [105.44765022798595, 10.305110163059238],
      [105.44758041480996, 10.304829780963745],
      [105.44331064653805, 10.306200431557563],
      [105.44318039531613, 10.305930013537798],
      [105.44309036664936, 10.305820283433864],
      [105.43550207715306, 10.304518589324898],
      [105.43123041145573, 10.303820288939677],
      [105.43013813054333, 10.303700253774952],
      [105.42987952416571, 10.303660476295953],
      [105.42964998344476, 10.303569574460298],
      [105.42955958647649, 10.303529869250294],
      [105.42767875346789, 10.303187314964555],
      [105.42671003501538, 10.303010108990371],
      [105.43032985687849, 10.294780844023457],
      [105.43519616704566, 10.28394508413951],
      [105.43657003023824, 10.2808405921782],
      [105.4366797777393, 10.28053033936019],
      [105.43870932408622, 10.275863206635625],
      [105.44147035306842, 10.269919833617513],
      [105.43419998369625, 10.26704013808799],
      [105.43396001130253, 10.26700988790418],
      [105.43376045291417, 10.266970385379746],
      [105.43346590346253, 10.266841864608855],
      [105.43344042879133, 10.266830506650217],
      [105.43301020383288, 10.2666209088676],
      [105.43236763603561, 10.26637980166581],
      [105.43132487709364, 10.266052657089796],
      [105.43084410148779, 10.265901699031758],
      [105.43019886533911, 10.265698635433411],
      [105.42998915865668, 10.265489471356217],
      [105.42993969723395, 10.265500214453597],
      [105.42952995797695, 10.265310493675573],
      [105.4158574180529, 10.260039992150878],
      [105.41092706661243, 10.258136892417074],
      [105.40336241746984, 10.2552385822487],
      [105.39598042500006, 10.252520333010755],
      [105.39154946171546, 10.251254974356778],
      [105.38969356326494, 10.250751312578888],
      [105.38754826546388, 10.250099130725387],
      [105.38626883496374, 10.249640533860301],
      [105.38380623973185, 10.248935459481757],
      [105.38109598298988, 10.248103158924472],
      [105.37810554062214, 10.247194263243516],
      [105.3762510748055, 10.246606039005165],
      [105.37556879375444, 10.246389671044414],
      [105.37545102459876, 10.246359982556344],
      [105.37493782587379, 10.24618923269286],
      [105.37373912106337, 10.245800326897914],
      [105.37259068258683, 10.245433669670629],
      [105.37142002935212, 10.245059864451154],
      [105.37130014883536, 10.24503088147506],
      [105.37107118326456, 10.24493985156671],
      [105.37014680350102, 10.244662444815061],
      [105.3686161913587, 10.244203291148029],
      [105.36781108595652, 10.243961834611428],
      [105.3671272583933, 10.243756411893768],
      [105.3664784907262, 10.243561875234855],
      [105.3661394224643, 10.243460347632785],
      [105.36607835627032, 10.243439829400314],
      [105.3657850510099, 10.243357441955862],
      [105.3656884914294, 10.24332919698148],
      [105.36514270965239, 10.243181020433976],
      [105.36348745334881, 10.24267616487107],
      [105.36302222543182, 10.242534067619896],
      [105.3622448149321, 10.24229821462948],
      [105.36217841544709, 10.242279785816022],
      [105.36074598452242, 10.241840730507443],
      [105.35885512688444, 10.241261293883225],
      [105.35712062798956, 10.240731237093],
      [105.35638639488901, 10.24051865473223],
      [105.35623838429555, 10.240469464199101],
      [105.35569514603976, 10.240309558468546],
      [105.35514702695022, 10.240154092981173],
      [105.35483506934669, 10.240073732186723],
      [105.35459024898897, 10.240010523581297],
      [105.35447001059228, 10.239999779561987],
      [105.3539815018155, 10.239840620812751],
      [105.35357097588428, 10.239707094607125],
      [105.35269996785958, 10.239439287103792],
      [105.35228171176547, 10.239310951802775],
      [105.35179503145517, 10.239161479194673],
      [105.35159459945245, 10.23910007187984],
      [105.35120345117508, 10.238979854201094],
      [105.35071352612177, 10.238830373002086],
      [105.35029289895802, 10.23870314357044],
      [105.35005620891486, 10.238631765230737],
      [105.34980386495815, 10.238555496319183],
      [105.34865919505664, 10.238209402825918],
      [105.34775545904166, 10.237936329612007],
      [105.3464578430316, 10.237536356721854],
      [105.3420011509158, 10.236155440691498],
      [105.34147517459593, 10.23599216443528],
      [105.33932838653918, 10.23532693625299],
      [105.33815767640142, 10.234964137276707],
      [105.33728926899428, 10.234695033249215],
      [105.33679911561075, 10.234543140497657],
      [105.33636208891714, 10.234411140354696],
      [105.33631978174131, 10.234400087591515],
      [105.33620070541322, 10.234360524685941],
      [105.33449626296633, 10.237111187038497],
      [105.33379364430988, 10.238253632351991],
      [105.33359769028998, 10.238576077642687],
      [105.33276528660784, 10.239944918657718],
      [105.33236377650248, 10.240604989882732],
      [105.33223920836802, 10.240810122710949],
      [105.3320161361995, 10.241177530605242],
      [105.33187887745295, 10.24140250734825],
      [105.33174622544585, 10.241621137356093],
      [105.33165984488853, 10.241760133969747],
      [105.33146423011218, 10.24209091856108],
      [105.33119514084669, 10.242545585472142],
      [105.3309803954801, 10.242908763928915],
      [105.33082784821828, 10.243132268989857],
      [105.33051931104751, 10.243620141638598],
      [105.3276169669032, 10.248289428020005],
      [105.32488028814366, 10.252607707534377],
      [105.32389364533768, 10.254217568959968],
      [105.32129313433508, 10.258478246835976],
      [105.31992413212781, 10.260810174413114],
      [105.31942802005887, 10.261677988335537],
      [105.31862970457834, 10.263020729121417],
      [105.31757423691157, 10.264790013795078],
      [105.31714397994658, 10.265510834926765],
      [105.3166683538176, 10.266308058151358],
      [105.31545854915596, 10.268311087725943],
      [105.3148986129558, 10.269209522105937],
      [105.31456629418633, 10.269757730089893],
      [105.31391345031174, 10.270834004559465],
      [105.31352393920427, 10.271486995244993],
      [105.31204967177808, 10.273990430669862],
      [105.30661036776756, 10.26894990464036],
      [105.30424611464218, 10.272727325168859],
      [105.30146073062764, 10.27703991472219],
      [105.30135037921377, 10.277049400944712],
      [105.29765424562311, 10.273316571175464],
      [105.29625045707616, 10.271860036656298],
      [105.29614019141013, 10.271760431464962],
      [105.29584954520301, 10.271540205113862],
      [105.293108440238, 10.269011108390433],
      [105.29111950751532, 10.267169378006251],
      [105.29180233667287, 10.26655851432302],
      [105.29194922867121, 10.266409321999085],
      [105.28965544660457, 10.26417385528152],
      [105.28876160444936, 10.263302762350689],
      [105.28779499996104, 10.262360652321323],
      [105.28761119295193, 10.262181778325452],
      [105.28747975157246, 10.2620600110387],
      [105.28789238208849, 10.26138648500802],
      [105.288425456204, 10.260517401013463],
      [105.28869105487455, 10.260088646972495],
      [105.28874897397569, 10.259961102635401],
      [105.28876925644434, 10.259930205306702],
      [105.28870898289745, 10.25987973583606],
      [105.28822982521457, 10.259440013877533],
      [105.28781978960771, 10.25900989412982],
      [105.28355973669356, 10.255055048400918],
      [105.28302491716929, 10.254577047918968],
      [105.28274903968567, 10.254330083196919],
      [105.28187883138321, 10.253468399770377],
      [105.28177964308229, 10.253350220891036],
      [105.27822029047982, 10.249810344718895],
      [105.27790791550957, 10.249569124173993],
      [105.27649125996061, 10.248234629043363],
      [105.27478950716007, 10.246590132719332],
      [105.27468034468312, 10.246490330844606],
      [105.2745899488599, 10.246380646931067],
      [105.26725002446175, 10.238889794534373],
      [105.26716040192633, 10.23881059701412],
      [105.26271978901956, 10.24393008907589],
      [105.26094024770416, 10.245830088677641],
      [105.2582281416679, 10.24328671752501],
      [105.25460593285439, 10.239858623571877],
      [105.25335971675038, 10.238690122968816],
      [105.25326912093138, 10.238579578144416],
      [105.25325071772802, 10.238549668278608],
      [105.25321972005379, 10.2385204274423],
      [105.25315891777396, 10.238479209510098],
      [105.25310025225784, 10.238430570141384],
      [105.25306944818132, 10.238389602876662],
      [105.25304923262959, 10.238369817613043],
      [105.24762771515861, 10.231135885812401],
      [105.24285959104738, 10.224889687840998],
      [105.24283920988238, 10.224869694113151],
      [105.24276036441448, 10.224760642211589],
      [105.24319990528707, 10.224319781932083],
      [105.24313044573135, 10.224249676115821],
      [105.24309005370573, 10.224190274654042],
      [105.23824858707866, 10.217645590401812],
      [105.23322020606263, 10.211310565841558],
      [105.23318981189665, 10.211279487348577],
      [105.23313853573981, 10.21122043801995],
      [105.23292917311356, 10.210869381625242],
      [105.23132038025045, 10.208568986783082],
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
    Description: "Đường ranh giới của An Giang - Cần Thơ",
  };

  const polylineGraphic = new Graphic({
    geometry: polyline_AG_CT,
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