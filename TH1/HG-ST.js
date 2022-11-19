


require([
    "esri/config",
    "esri/Map",
    "esri/views/MapView",

    "esri/Graphic",
    "esri/layers/GraphicsLayer"

    ], function(esriConfig,Map, MapView, Graphic, GraphicsLayer) {

  esriConfig.apiKey = "YOUR_API_KEY";

  const map = new Map({
    basemap: "topo-vector" //Basemap layer service
  });

  const view = new MapView({
    map: map,
    center: [105.55279050784692, 9.5973808570781], //Longitude, latitude
    zoom: 12,
    container: "viewDiv"
 });

 const graphicsLayer = new GraphicsLayer();
 map.add(graphicsLayer);

 const point = { //Create a point
    type: "point",
    longitude: 105.18105044517749,
    latitude: 10.50917814002457
 };
 const simpleMarkerSymbol = {
    type: "simple-marker",
    color: [226, 119, 40],  // Orange
    outline: {
        color: [5, 100, 20], 
        width: 0.5
    }
 };

 const pointGraphic = new Graphic({
    geometry: point,
    symbol: simpleMarkerSymbol
 });
 graphicsLayer.add(pointGraphic);

    // Create a line geometry


   // Hậu Giang - Sóc Trăng
 const polyline_HG_ST = {
    type: "polyline",
    paths: [
        [105.89672971174738, 9.938059822264224],
        [105.89535942252982, 9.935300860001881],
        [105.89440989551157, 9.93383038451285],
        [105.8921093130511, 9.931219626173718],
        [105.89145890221162, 9.930328955953614],
        [105.89091996444161, 9.929430202484955],
        [105.89042048996885, 9.929640225490813],
        [105.89022005991582, 9.929710039594601],
        [105.89013951522539, 9.929760456740283],
        [105.8898595591155, 9.929830489346525],
        [105.88956968716974, 9.929710135559302],
        [105.88911032377801, 9.929161464946137],
        [105.88809105238259, 9.928091359444396],
        [105.88777013021506, 9.927910040476627],
        [105.88700913831673, 9.927839592046613],
        [105.88676815604057, 9.927850252295645],
        [105.88626955090025, 9.927900533079765],
        [105.88590007508742, 9.927860626322465],
        [105.88568996177275, 9.927870062384576],
        [105.88539007718181, 9.927930596081431],
        [105.88522032348891, 9.928010015585036],
        [105.88505833796242, 9.928020546516773],
        [105.8848806110315, 9.92802042602118], 
        [105.88397923773137, 9.92783954424649],
        [105.88358054628424, 9.927830329224648],
        [105.88341930911216, 9.92787011391974],
        [105.88332032022144, 9.927880556876596],
        [105.88323045945303, 9.927830497695004],
        [105.88329995510658, 9.925730136694291],
        [105.88363015421922, 9.925160043525308],
        [105.88376021286432, 9.924860721411592],
        [105.88378009069294, 9.924730287942403],
        [105.8837693059923, 9.92455037720766],
        [105.88348031793562, 9.92462015363264],
        [105.88325043824842, 9.924620304379406],
        [105.88271960084285, 9.924421000552876],
        [105.88258087874354, 9.92433027092736],
        [105.88231078113593, 9.924090896289147],
        [105.8813494265964, 9.923479779581811],
        [105.8809509007129, 9.923150304318863],
        [105.88085016882638, 9.923030240532682],
        [105.88051994298067, 9.921939793800014],
        [105.88019961735729, 9.921550068419473],
        [105.88023029712791, 9.92142986810335],
        [105.88036032960157, 9.920841217850654],
        [105.88102945178127, 9.918729906394022],
        [105.88063944964746, 9.918670151210861],
        [105.88069947601441, 9.918379755834785],
        [105.88003991628388, 9.918040171450158],
        [105.87999942547046, 9.91818023472805],
        [105.87845987032703, 9.91786049391838],
        [105.87791934102982, 9.91758939593634],
        [105.87553024949169, 9.916009596804574],
        [105.87576964077583, 9.915709676166127],
        [105.87544041785459, 9.915041022793067],
        [105.87511010506891, 9.914240920367849],
        [105.87510066622742, 9.913240714261816],
        [105.8751592909403, 9.912840221199222],
        [105.87480049896675, 9.912809957216895],
        [105.87497978663674, 9.911730762250784],
        [105.87498942235607, 9.911431082925372],
        [105.87445058682773, 9.911380489980676],
        [105.87438985153064, 9.911151053168712],
        [105.87450000048418, 9.910619490543805],
        [105.87458045404287, 9.910459245480823],
        [105.87465945122345, 9.910229607558025],
        [105.87473953874876, 9.909840048458152],
        [105.87460037288979, 9.909860099911871],
        [105.87447985835793, 9.909859823190956],
        [105.87441057139327, 9.909840402871648],
        [105.87434011971015, 9.909800674297406],
        [105.87427036696656, 9.909739731677883],
        [105.87410920454413, 9.90954033185692],
        [105.87388128285349, 9.909420637624235],
        [105.87372061052035, 9.909319571170547],
        [105.87349034351148, 9.909020124811047],
        [105.87341009458959, 9.908960653629448],
        [105.87309052281138, 9.908899363549338],
        [105.87313048667046, 9.907630014328106],
        [105.87326984498648, 9.90706059524877],
        [105.87340957666966, 9.906909377505631],
        [105.87346956240424, 9.90678029915521],
        [105.87342962532011, 9.906560148458947],
        [105.87346055629993, 9.90643029614151],
        [105.87353968490207, 9.90626004086658],
        [105.87362941755505, 9.90589014791797],
        [105.87372995393231, 9.905760531606418],
        [105.87524904408646, 9.905119766348855],
        [105.87418041608505, 9.90397980507292],
        [105.87356027666509, 9.903180963758562],
        [105.87322989839016, 9.902850435544476],
        [105.87264931007391, 9.902429592465412],
        [105.87204005264516, 9.902049467417386],
        [105.8719302333107, 9.901920377896909],
        [105.87184062896259, 9.901771016254772],
        [105.87241927190539, 9.901539734467553],
        [105.8728001341079, 9.90132052817661],
        [105.87305960424419, 9.901199915128153],
        [105.8733396687239, 9.901120980240155],
        [105.87361988417682, 9.901000776748988],
        [105.87381010645103, 9.900860888132032],
        [105.87400009321587, 9.90065918685893],
        [105.87425941694616, 9.900270010847136],
        [105.87421956759454, 9.900250322493173],
        [105.87416048791705, 9.900190308892082],
        [105.87412011225632, 9.900090582223811],
        [105.874099921671, 9.899900200606712],
        [105.87412007366609, 9.899499582335885],
        [105.8740600170927, 9.899350492653525],
        [105.87388955388921, 9.899130098191499],
        [105.87323994743596, 9.89847024545936],
        [105.87298933312302, 9.898289470870381],
        [105.87274977415554, 9.898179974171555],
        [105.87237949251174, 9.896110181856313],
        [105.86928964321727, 9.892119655564267],
        [105.86902967566168, 9.890979857559891],
        [105.87223963338782, 9.889880239422174],
        [105.86886981265502, 9.8845708734495],
        [105.86961008388204, 9.88421025399504],
        [105.87002960199082, 9.884040721419968],
        [105.87022930410026, 9.884041025406686],
        [105.87057053937608, 9.884110735578956],
        [105.87063979060737, 9.884080611757325],
        [105.87090006361949, 9.883719513031721],
        [105.87096057952827, 9.88346057879523],
        [105.87099927282844, 9.883139651566285],
        [105.87099007608079, 9.882970639498312],
        [105.87173950664527, 9.882740644612193],
        [105.87182940050421, 9.882579423267368],
        [105.87145008346747, 9.881290223296066],
        [105.87175032406283, 9.881169894349343],
        [105.87186029385104, 9.88102959897046],
        [105.87186980185562, 9.88060966002017],
        [105.87059008997338, 9.88098983487483],
        [105.87031004460795, 9.880080024813905],
        [105.86953999900382, 9.880329182307563],
        [105.86884974942313, 9.876980277399571],
        [105.86905994811934, 9.87671998336452],
        [105.8695897322391, 9.876550426067517],
        [105.86945059389893, 9.876160023913169],
        [105.86967013558979, 9.876030054142198],
        [105.86971981178255, 9.875699883078793],
        [105.87002974363425, 9.875299641273914],
        [105.87026018879234, 9.875189772202603],
        [105.87007939168885, 9.874579479588778],
        [105.87013026820806, 9.874410469244793],
        [105.87011968836538, 9.874310177172166],
        [105.87004044703544, 9.874220143419432],
        [105.86987006832695, 9.874180573544105],
        [105.86978057057361, 9.874189789447],
        [105.86963027401235, 9.874230881592984],
        [105.86950013591758, 9.874200533872006],
        [105.86891923696236, 9.873659816902327],
        [105.86860958620044, 9.87348972323217],
        [105.86832914085713, 9.873230693534142],
        [105.86816961943939, 9.87311953872692],
        [105.86807968506923, 9.873110149027731],
        [105.86619968126578, 9.863759978604502],
        [105.86619965179896, 9.863580161704787],
        [105.86599015217777, 9.863190333131033],
        [105.86578893203863, 9.861409588331533],
        [105.86389933369881, 9.852350203189344],
        [105.86201029316598, 9.853050250815715],
        [105.86168946768007, 9.85321044969082],
        [105.86159971504728, 9.853219649155337],
        [105.86148045713422, 9.853190340529437],
        [105.86139945351917, 9.85312012595071],
        [105.86135927347858, 9.85305045633732],
        [105.86104989954691, 9.85222076748793],
        [105.86095990439776, 9.85210046430089],
        [105.8607191100639, 9.851569151915092],
        [105.85679998444454, 9.841339913587579],
        [105.85675928018547, 9.84119024150216],
        [105.85677030995204, 9.841050460704036],
        [105.85646037786505, 9.840830534268989],
        [105.85650991492749, 9.840550572350113],
        [105.85631963598928, 9.839929941796372],
        [105.85419000681725, 9.828809986261774],
        [105.85336936237893, 9.82596927960638],
        [105.85305008573464, 9.82429112782009],
        [105.85127001841254, 9.81880978806706],
        [105.84897973593283, 9.808749875501608],
        [105.84884953650366, 9.808040295812512],
        [105.8486499302186, 9.807590063359449],
        [105.84851978507186, 9.807160468049503],
        [105.85224778825213, 9.806219953150903],
        [105.85504066493608, 9.8054700744891],
        [105.85558971150249, 9.805299582402805],
        [105.85399929951988, 9.802130905461809],
        [105.8538104230813, 9.801480884157716],
        [105.85373941971488, 9.801271001461593],
        [105.85347919094467, 9.801309980265222],
        [105.85346054155528, 9.80118984595669],
        [105.8534404102499, 9.801100213532543],
        [105.85335037526403, 9.800549823218638],
        [105.85320021936086, 9.799900558816804],
        [105.84866968776383, 9.77733934273146],
        [105.84849030943715, 9.776220468076156],
        [105.84841915395825, 9.775521393026334],
        [105.84836952329127, 9.775330327379185],
        [105.84827988249977, 9.775180018108744],
        [105.84786018105487, 9.774840108730016],
        [105.8479496374163, 9.774689421028567],
        [105.84777245690914, 9.774611315379671],
        [105.84746966932002, 9.774430575511879],
        [105.84807984836274, 9.773710068365276],
        [105.84784907205068, 9.773410036832797],
        [105.84768960266673, 9.773129691679612],
        [105.84744921295238, 9.77256863112504],
        [105.84485982391234, 9.7640608635107],
        [105.84469964816145, 9.76373813875381],
        [105.84460992646927, 9.7635088667136],
        [105.84455974744942, 9.763399905658488],
        [105.84453943241986, 9.763250532500352],
        [105.84455947656107, 9.763139133083591],
        [105.8442202275914, 9.760669056233532],
        [105.8438996885129, 9.757809968870303],
        [105.84372952938753, 9.753341939818041],
        [105.8434503869745, 9.748820522631641],
        [105.84340993046776, 9.748780233473619],
        [105.84327997836257, 9.74883991912699],
        [105.84319985563768, 9.748809656837773],
        [105.83572948481661, 9.743259229113702],
        [105.82559073782554, 9.737030851591014],
        [105.81080942090807, 9.728119762822274],
        [105.81071959190919, 9.728090838873928],
        [105.81049932430179, 9.72804965320736],
        [105.80023999512852, 9.721999861913599],
        [105.80017015164462, 9.721849925533768],
        [105.79789970600233, 9.720509854409766],
        [105.79782983624072, 9.72036958058381],
        [105.79758935864696, 9.720189621630574],
        [105.79400004372408, 9.71808968652397],
        [105.79384995964259, 9.718040896996536],
        [105.79375964578054, 9.71806981538681],
        [105.78830114640333, 9.714760095443458],
        [105.78473953641408, 9.712720334685875],
        [105.77969026320515, 9.709720696695763],
        [105.77827933197337, 9.71027094107106],
        [105.77801028817144, 9.710310476983077],
        [105.77765965402656, 9.7102601661762],
        [105.77742914884803, 9.710080435547415],
        [105.77733861512401, 9.71004017223187],
        [105.76056242287854, 9.69995538966877],
        [105.75703928490455, 9.697869041289124],
        [105.75302906019485, 9.695342144567862],
        [105.74051923356586, 9.68731638530586],
        [105.73125502052216, 9.681536081945172],
        [105.7132313589318, 9.67032142885189],
        [105.71262066430583, 9.66989014211663],
        [105.71027880353337, 9.668549839484836],
        [105.70883900166469, 9.66761927255473],
        [105.70662560313457, 9.66603762389463],
        [105.70193996919528, 9.662990030609162],
        [105.70073200459775, 9.662112330405526],
        [105.6979594523365, 9.660270440848588],
        [105.69657870856581, 9.65920946953324],
        [105.69597893255751, 9.65867901394204],
        [105.69487846135134, 9.65753855609465],
        [105.66893941293755, 9.633260544814567],
        [105.66888025792043, 9.633510165698894],
        [105.66820054194991, 9.635309185197476],
        [105.6677295941653, 9.636660388832349],
        [105.66761935105595, 9.63705038491214],
        [105.66711012548151, 9.638460605393842],
        [105.66708043703706, 9.638509639122457],
        [105.66662079204058, 9.639860138733725],
        [105.66662995432853, 9.63992941848928],
        [105.66669972216084, 9.6399995892458],
        [105.66708055609801, 9.640159495765058],
        [105.66743053266018, 9.640251059073103],
        [105.66762977218177, 9.640360612980501],
        [105.66765873901501, 9.640417959915633],
        [105.66767965481462, 9.640479834104507],
        [105.66764071216915, 9.640616951365764],
        [105.66749844590399, 9.641195231949727],
        [105.66728930718291, 9.641929755736411],
        [105.66607763504075, 9.64147960126953],
        [105.66466740934598, 9.641019323423373],
        [105.66323991763659, 9.64049000620861],
        [105.66272990681966, 9.6402598409451],
        [105.66165115032167, 9.63966037157651],
        [105.6615095321271, 9.639499836834638],
        [105.66141030209204, 9.639100636408141],
        [105.66123989467823, 9.637950064750607],
        [105.66062989787964, 9.636929739997704],
        [105.65983972103184, 9.635820191889882],
        [105.65951923066652, 9.635550427055671],
        [105.65919000103122, 9.63539983040691],
        [105.65885034043195, 9.635329819559288],
        [105.65832482029369, 9.63537946516225],
        [105.65604157553322, 9.63544054438287],
        [105.65460929599557, 9.635340124173531],
        [105.65354962937121, 9.635090096149655],
        [105.65172769736684, 9.634800215480222],
        [105.65003820168651, 9.63465973560777],
        [105.64954032542659, 9.634549503906204],
        [105.64936057369076, 9.634470007931707],
        [105.64910012957243, 9.634299461587311],
        [105.64899985843803, 9.63415053885826],
        [105.64890950185075, 9.633659390372314],
        [105.64889289974222, 9.631982465585521],
        [105.64890967779426, 9.631439704868436],
        [105.64882945958995, 9.63040106680883],
        [105.64873974773893, 9.630020056018463],
        [105.64859997997239, 9.629750223801336],
        [105.64833220889085, 9.629332421546676],
        [105.6480297899689, 9.628929928791546],
        [105.64781936379688, 9.628529621133662],
        [105.64753912588556, 9.627790010803404],
        [105.64733939078326, 9.62651071608222],
        [105.64702962875405, 9.626000370438984],
        [105.64669010007162, 9.625660253675953],
        [105.64660053230706, 9.625590299101619],
        [105.64641934834454, 9.625489618346405],
        [105.64630048027604, 9.62546101772035],
        [105.64602897951757, 9.625490136156916],
        [105.64579045898302, 9.625500362020025],
        [105.64564905243576, 9.62546044589388],
        [105.6442668361383, 9.624902693841038],
        [105.64373914190132, 9.624780832263664],
        [105.64368053981659, 9.624751984075864],
        [105.64331746958673, 9.62476013416407],
        [105.64320151515146, 9.624771985504317],
        [105.64270166522088, 9.624900169510052],
        [105.64255109710416, 9.62492008859495],
        [105.64246985371545, 9.62492003333243],
        [105.64222961958552, 9.624849548591028],
        [105.64166939083741, 9.62454069638354],
        [105.64107020808979, 9.624290476835148],
        [105.63994815775744, 9.623978950260877],
        [105.63940860689911, 9.623729528221075],
        [105.63917979115544, 9.623589679535195],
        [105.63896031260202, 9.623379853831038],
        [105.63859932409046, 9.622879719205647],
        [105.63789941992704, 9.621630465213977],
        [105.63585043260368, 9.6192612257142],
        [105.6356803188279, 9.619110626523133],
        [105.63526944290152, 9.618820592292463],
        [105.63497014702565, 9.618739675850987],
        [105.63476946633, 9.618739758485285],
        [105.6346297391279, 9.618780708476173],
        [105.63272963780429, 9.620199701506102],
        [105.63254899115736, 9.62021026171678],
        [105.63236981872288, 9.620179600746903],
        [105.6322198699575, 9.620120282080217],
        [105.63086962512921, 9.6189106132792],
        [105.63059075152081, 9.618750635918863],
        [105.62980952489067, 9.618489695694143],
        [105.62921104784435, 9.61822046586014],
        [105.62759024241758, 9.617220398687337],
        [105.62640987148713, 9.61660036287969],
        [105.6257308794893, 9.61635072616125],
        [105.62542046842128, 9.616280465187161],
        [105.62510963638806, 9.616260532956103],
        [105.62475044128615, 9.616389958035837],
        [105.62431412769408, 9.61674476712465],
        [105.62389898609196, 9.617050346523673],
        [105.6236901466453, 9.617179519962884],
        [105.62341927920994, 9.617190051065174],
        [105.62023975588612, 9.616810542946352],
        [105.61916841929586, 9.616310116307021],
        [105.6179893479137, 9.615601018285298],
        [105.61784070646692, 9.615539938082334],
        [105.61742995231144, 9.615550673656786],
        [105.61714998151498, 9.615690840694256],
        [105.61704947732476, 9.615889973731488],
        [105.61701053149477, 9.616080671167897],
        [105.61697034652238, 9.617178972292015],
        [105.6170605671643, 9.61784168183604],
        [105.61713008216363, 9.61811027946821],
        [105.6172896287807, 9.618300633214222],
        [105.61778946693057, 9.619030339156712],
        [105.61793035828512, 9.619420509474768],
        [105.61795998081584, 9.619648863667761],
        [105.61798021116564, 9.619920315989356],
        [105.61763967172172, 9.620439829327971],
        [105.61516889382052, 9.622220506492976],
        [105.61478919094046, 9.622259449216124],
        [105.61441040420254, 9.62215017237884],
        [105.6140599954941, 9.621869535570802],
        [105.61340957599059, 9.621229994044516],
        [105.61324146615236, 9.62101114375928],
        [105.61209014762485, 9.619789841087844],
        [105.61153006767303, 9.61948076581807],
        [105.61108049950829, 9.619280808301195],
        [105.61072067857724, 9.619219920214533],
        [105.61023989487316, 9.619370803599494],
        [105.6088295777186, 9.620060605096974],
        [105.60819008383817, 9.620300044889067],
        [105.60761013284271, 9.62035033500945],
        [105.60713557747758, 9.62033095618717],
        [105.60680094515662, 9.620268596843875],
        [105.60654074214459, 9.620100863144872],
        [105.60637971618468, 9.61996016828771],
        [105.60630046831075, 9.619810921755992],
        [105.60617987405965, 9.619321457491456],
        [105.60599057043272, 9.617959603638587],
        [105.60594085808988, 9.617871594772087],
        [105.60582902526592, 9.617710120620872],
        [105.60405077927177, 9.61638084416304],
        [105.60025493176617, 9.612345906332667],
        [105.5999198603917, 9.612000848446467],
        [105.59668000158466, 9.609900497970997],
        [105.59610273077973, 9.609543538367403],
        [105.59557967141889, 9.609151382232499],
        [105.59527048837427, 9.60875075908125],
        [105.59512010213355, 9.608500611496863],
        [105.59504959084124, 9.608239241932857],
        [105.59502971281701, 9.607809486321276],
        [105.59524034063492, 9.605479328875077],
        [105.59506061858661, 9.60320083794743],
        [105.59496010022283, 9.60291108213599],
        [105.5948005664458, 9.602850341427912],
        [105.59455015400644, 9.602970237615349],
        [105.59377743754247, 9.603161333356004],
        [105.59285964228025, 9.603439496373596],
        [105.59255056713951, 9.60362960170993],
        [105.5923592888077, 9.603950078928882],
        [105.59230051845468, 9.604149936682036],
        [105.59230999310897, 9.604510359174528],
        [105.59252992895222, 9.605479279321068],
        [105.59259019457508, 9.605928840901374],
    [105.59250983268025, 9.606590516312167],
    [105.59237986035838, 9.606840568460385],
    [105.59145345150387, 9.607557489424082],
    [105.59083985074521, 9.607980710720913],
    [105.59049009693732, 9.608140262379438],
    [105.58973974961135, 9.608300599955212],
    [105.58878097720276, 9.608370449394888],
    [105.58786947906002, 9.608539754077606],
    [105.58723007013771, 9.609019665629717],
    [105.58702991492795, 9.609269960801102],
    [105.58683021365819, 9.60970988790205],
    [105.58676065402437, 9.6101806033628],
    [105.58681055238505, 9.610380064126918],
    [105.58718963393903, 9.611280201820238],
    [105.58731976763555, 9.611759676519448],
    [105.58729021188104, 9.612260814821143],
    [105.58718042008827, 9.61249977262385],
    [105.58690021676765, 9.612659891222037],
    [105.58628985047017, 9.612640140319286],
    [105.58470983125913, 9.61203074362315],
    [105.5838303139902, 9.611930255142683],
    [105.58329003965919, 9.612050373830657],
    [105.5828798114539, 9.612229955650855],
    [105.57833007540994, 9.614529550802398],
    [105.57745041189544, 9.614829751165058],
    [105.57683334856746, 9.61499883284896],
    [105.57630284610698, 9.614999473089362],
    [105.57597392728691, 9.614950375191658],
    [105.57573116832293, 9.614880574179999],
    [105.57541867631387, 9.614641581673306],
    [105.57520224904297, 9.614370121853833],
    [105.57503904361023, 9.61408600694161],
    [105.57485937040552, 9.61359974221837],
    [105.57469189618361, 9.613291587917555],
    [105.57476971152457, 9.61274963548820],
    [105.57474943229577, 9.61245987182854],
    [105.57480994358937, 9.611879291706876],
    [105.57490002629368, 9.61148835188827],
    [105.5750694381027, 9.610913415673686],
    [105.57516009846188, 9.61045073871998],
    [105.57511036098408, 9.610149907548891],
    [105.57484990632423, 9.609599973524729],
    [105.57454900074515, 9.609259965007576],
    [105.57399071781676, 9.608809250804534],
    [105.5736792131658, 9.608600223990804],
    [105.57300004169213, 9.60828972629474],
    [105.57159981357229, 9.607738928738696],
    [105.57124017574182, 9.607559888707604],
    [105.57106018803265, 9.607430374597056],
    [105.57045898698186, 9.606680136532805],
    [105.5696104721555, 9.60423023539024],
    [105.56918933828668, 9.60361055988715],
    [105.56876875844863, 9.603390277311616],
    [105.5686185209911, 9.603340508414021],
    [105.56838949726526, 9.603310050358026],
    [105.56824068390883, 9.603329768022352],
    [105.56782125438983, 9.603489505546081],
    [105.56766943705622, 9.60357984076157],
    [105.56744985341403, 9.603800690249003],
    [105.56722087587094, 9.604070380525048],
    [105.56661748951953, 9.605154426180587],
    [105.56589960850839, 9.606249417344118],
    [105.56508928901673, 9.606729386264936],
    [105.56431035139582, 9.606880352204108],
    [105.56354035016582, 9.606820543669905],
    [105.56155961379922, 9.606260354314944],
    [105.56011021022374, 9.605650201946673],
    [105.55925661644557, 9.605027934342788],
    [105.55846872617857, 9.604388590913572],
    [105.55827036267732, 9.604119665805246],
    [105.55809141303226, 9.603690551293239],
    [105.55806005310299, 9.603369582224008],
    [105.55813970931736, 9.602671260478983],
    [105.558530199956, 9.600890377181988],
    [105.5584404173579, 9.599919660741673],
    [105.55835978922622, 9.599419294214647],
    [105.55811054341844, 9.598400234016763],
    [105.55781906657302, 9.59757991258117],
    [105.55765008163272, 9.597170076533757],
    [105.55725992395263, 9.596570480531586],
    [105.5570900874503, 9.596449978134816],
    [105.55699109502783, 9.596390758635941],
    [105.5568698940518, 9.596350835123124],
    [105.5562192213378, 9.596370596905738],
    [105.5558299012357, 9.596421232512462],
    [105.55474059606536, 9.596679730252466],
    [105.55425023461639, 9.596839523090049],
    [105.55279050784692, 9.5973808570781],
    [105.55198904354567, 9.597460314903763],
    [105.54937787792595, 9.597380645117005],
    [105.54814933735346, 9.597249619236123],
    [105.5477599713712, 9.597190423782472],
    [105.54742050957888, 9.597100716224805],
    [105.54716892343168, 9.597010349559826],
    [105.54692056773038, 9.596890076215486],
    [105.54674999625597, 9.59658115969521],
    [105.5467204442696, 9.59632952853748],
    [105.5467591226525, 9.59614233063222],
    [105.54679023667634, 9.595960945476206],
    [105.54737980827156, 9.5951299243254],
    [105.54812097057697, 9.594228861629656],
    [105.54854035208874, 9.593650114923523],
    [105.54880982818361, 9.593170270006578],
    [105.54898120641519, 9.592707494110485],
    [105.54907923171196, 9.592480353156985],
    [105.54908980094223, 9.592109842982973],
    [105.54896921193257, 9.591711045905173],
    [105.54878008143424, 9.591280841651011],
    [105.5483610394498, 9.590670683176038],
    [105.54699929307304, 9.588850211065893],
    [105.5459799717506, 9.586489941842034],
    [105.5460295727347, 9.586239812562743],


    ]
 };
 const simpleLineSymbol = {
    type: "simple-line",
    color: [226, 119, 40], // Orange
    width: 2
 };

 const popupTemplate = {
    title: "{Name}",
    content: "{Description}"
 }
 const attributes = {
    Name: "Đường ranh giới",
    Description: "Đường ranh giới của Hậu Giang - Sóc Trăng"
 }

 const polylineGraphic = new Graphic({
    geometry: polyline_HG_ST,
    symbol: simpleLineSymbol,

    popupTemplate: popupTemplate,
    attributes: attributes
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