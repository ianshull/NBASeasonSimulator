let roster = new Map();
let freeAgents = new Map();
let okc = new Map();
let tradePieces;
const BLANK_PLAYER = "";
function Player(fName,lName,pos,age,salary,asset,num,url=BLANK_PLAYER, ntc=false) {
	this.first = fName;
	this.last = lName;
  this.position=pos;
	this.age = age;
	this.salary = salary;
	this.asset = asset;
	this.jNumber = num;
	this.photo = url;
	this.noTrade=ntc;
}


//create all Knicks players
const rj = new Player('R.J.','Barrett','W',20,8231760,8,9);
const tajGibson = new Player('Taj','Gibson','C',35,10290000,4,67);
const frenchFrank = new Player('Frank','Ntilikina','PG',22,6176578,11);
const knox = new Player('Kevin','Knox','SF',21,4588680,6,20);
const dennisSmith = new Player('Dennis','Smith Jr','G',22,5686677,4,4);
const braz = new Player('Ignas','Brazdeikis','W',21,1517981,3,17);
const bobbyPortis= new Player('Bobby','Portis','PF',28,15000000,-1,1);
const juliusRandle= new Player('Julius','Randle','PF',25,18900000,-1,30)
const elfridPayton= new Player('Elfrid','Payton','PG',26,8000000,-1,6);
const wayneEllington= new Player('Wayne','Ellington','W',32,8195122,-1,2);
const reggieBullock= new Player('Reggie','Bullock','W',29,4200000,-1,25);
const damyeanDotson= new Player('Damyean','Dotson','SG',26,2023150,-1,21);
const mitchellRobinson= new Player('Mitchell','Robinson','C',22,1663861,-1,23);
const theoPinson= new Player('Theo','Pinson','SF',24,1701593,-1,00);

//add all players to roster
roster.set(rj.jNumber,rj);
roster.set(tajGibson.jNumber,tajGibson);
roster.set(frenchFrank.jNumber,frenchFrank);
roster.set(knox.jNumber,knox);
roster.set(dennisSmith.jNumber,dennisSmith);
roster.set(braz.jNumber,braz);
roster.set(juliusRandle.jNumber,juliusRandle);
roster.set(elfridPayton.jNumber,elfridPayton);
roster.set(wayneEllington.jNumber,wayneEllington);
roster.set(reggieBullock.jNumber,reggieBullock);
roster.set(damyeanDotson.jNumber,damyeanDotson);
roster.set(mitchellRobinson.jNumber,mitchellRobinson);
roster.set(theoPinson.jNumber,theoPinson);
roster.set(bobbyPortis.jNumber,bobbyPortis);

//Dead cap
const deadCap = new Player('','Dead Cap','',0,6431666,-1,-1,BLANK_PLAYER,true);
roster.set(-1,deadCap);




console.log(roster);

//create freeAgents
const paulMillsap=new Player('Paul','Millsap','PF',35,-1,-1,4);
const marcGasol= new Player('Marc','Gasol','C',35,-1,-1,33);
const sergeIbaka= new Player('Serge', 'Ibaka','C',31,-1,-1,9);
const daniloGallinari= new Player('Danilo','Gallinari','SF',32,-1,-1,8);
const jeffTeague= new Player('Jeff','Teague','PG',32,-1,-1,00);
const rajonRando= new Player('Rajon','Rondo','PG',34,-1,-1,9);
const derrickFavors= new Player('Derrick', 'Favors','PF',29,-1,-1,22);
const kentBazemore= new Player('Kent', 'Bazemore','W',31,-1,-1,26);
const christianWood= new Player('Christian','Wood','PF',25,-1,-1,35);
const goranDragic= new Player('Goran','Dragic','PG',34,-1,-1,7);
const tristanThompson= new Player('Tristan', 'Thompson','PF',29,-1,-1,13);
const davisBertans= new Player('Davis','Bertans','PF',27,-1,-1,42);
const joeHarris=new Player('Joe','Harris','W',29,-1,-1,12);
const kellyOlynyk= new Player('Kelly','Olynyk','C',29,-1,-1,9);
const marcusMorris= new Player('Marcus','Morris','F',31,-1,-1,31);
const jordanClarkson= new Player('Jordan','Clarkson','G',28,-1,-1,00);
const andreRoberson= new Player('Andre','Roberson','W',28,-1,-1,21);
const joshJackson= new Player('Josh','Jackson','W',23,-1,-1,20);
const jamesEnnis= new Player('James','Ennis','W',3-,-1,-1,11);
const jahlilOkafor= new Player('Jahlil','Okafor','C',24,-1,-1,9);
const justinHoliday= new Player('Justin','Holiday','W',31,-1,-1,8);
const hassanWhiteside = new Player('Hassan','Whiteside','C',31,10000000,4,21);
const fredVanVleet = new Player('Fred','VanVleet','G',26,20000000,7,23);
const demarDeRozan = new Player('DeMar','DeRozan','W',30,23000000,7,10);
const masonPlumlee = new Player('Mason','Plumlee','C',30,8000000,6,7);
const jabariParker = new Player('Jabari','Parker','PF',25,4000000,5,33);
const harryGiles = new Player('Harry','Giles III','F/C',22,6000000,6,20);
const jeramiGrant = new Player('Jerami','Grant','F',26,14000000,7,9);

//RFA??
const darioSaric= new Player('Dario','Saric','PF',26,-1,-1,20);

//Add FA to FA map
freeAgents.set(paulMillsap.jNumber,paulMillsap);
freeAgents.set(marcGasol.jNumber,marcGasol);
freeAgents.set(sergeIbaka.jNumber,sergeIbaka);
freeAgents.set(daniloGallinari.jNumber,daniloGallinari);
freeAgents.set(jeffTeague.jNumber,jeffTeague);
freeAgents.set(rajonRando.jNumber,rajonRando);
freeAgents.set(derrickFavors.jNumber,derrickFavors);
freeAgents.set(kentBazemore.jNumber,Bazemore);
freeAgents.set(christianWood.jNumber,christianWood);
freeAgents.set(goranDragic.jNumber,goranDragic);
freeAgents.set(tristanThompson.jNumber,tristanThompson);
freeAgents.set(davisBertans.jNumber,davisBertans);
freeAgents.set(joeHarris.jNumber,joeHarris);
freeAgents.set(kellyOlynyk.jNumber,kellyOlynyk);
freeAgents.set(marcusMorris.jNumber,marcusMorris);
freeAgents.set(jordanClarkson.jNumber,jordanClarkson);
freeAgents.set(andreRoberson.jNumber,andreRoberson);
freeAgents.set(joshJackson.jNumber,joshJackson);
freeAgents.set(jamesEnnis.jNumber,jamesEnnis);
freeAgents.set(jahlilOkafor.jNumber,jahlilOkafor);
freeAgents.set(justinHoliday.jNumber,justinHoliday);
freeAgents.set(hassanWhiteside.jNumber,hassanWhiteside);
freeAgents.set(fredVanVleet.jNumber,fredVanVleet);
freeAgents.set(demarDeRozan.jNumber,demarDeRozan);
freeAgents.set(masonPlumlee.jNumber,masonPlumlee);
freeAgents.set(jabariParker.jNumber,jabariParker);
freeAgents.set(harryGiles.jNumber,harryGiles);
freeAgents.set(jeramiGrant.jNumber,jeramiGrant);
freeAgents.set(darioSaric.jNumber,darioSaric);

//Add CP3 and others to OKC Map

//Trade function
function reqTrade() {
	if (tradePieces[0].getTotVal() >= tradePieces[1].getTotVal()) {
		acceptTrade();
	} else {
		rejectTrade();
	}
} 