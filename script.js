let roster = new Map();
let freeAgents = new Map();
let okc = new Map();
let tradePieces;
const BLANK_PLAYER = "";
let prospects= new Map();
let positions = new Map();
positions.set(1,"PG");
positions.set(1.5,"G");
positions.set(2,"SG");
positions.set(2.5,"W");
positions.set(3,"SF");
positions.set(3.5,"F");
positions.set(4,"PF");
positions.set(4.5,"F/C");
positions.set(5,"C");
const SALARY_CAP = 109115000;
function Player(fName,lName,pos,age,salary,asset,num,url=BLANK_PLAYER, ntc=false) {
	this.first = fName;
	this.last = lName;
  this.position=pos;
	this.age = age;
	this.salary = salary;
	this.asset = asset;
	this.jNumber = num;
	if (url === BLANK_PLAYER) {
		this.photo = "https://nba-players.herokuapp.com/players/" + this.last.toLoweCase().replace(" ","_") + "/" + this.first.toLowerCase().replace(" ","_");
	} else {
		this.photo = url;
	}
	this.noTrade=ntc;
	this.toString = function() {
		var str = "";
		str+= "Name: " + this.first + " " + this.last+"\n";
		str+= "Position: " + positions.get(this.position) + "\n";
		str+= "Age: " + this.age + "\n";
		str+= "Number: " + this.jNumber +"\n";
		str+= "Salary: " + this.salary + "\n";
		return str;
	}
}

function Team(city,nickname,abbr,rosterMap) {
	this.city = city;
	this.name = nickname;
	this.abbr = abbr;
	this.roster = rosterMap;
	this.capSpace = function() {
		var teamSal = 0;
		for (let player of Array.from(roster.values())) {
			teamSal+= player.salary;
		}
		return SALARY_CAP - teamSal;
	}
}

function DraftBoard() {
	var board;
	var size = 0;
	this.add = new function(player) {
		board[size] = player;
		size++;
	}
	this.rem = function(ind) {
		for (var i = ind; i < board.size - 1;i++) {
			board[i] = board[i+1];
		}
		board[size-1] = null;
		size--;
	}
	
}

/*POSITION CODES:
*		1: PG
*		1.5: G
*		2: SG
*		2.5: W
*		3: SF
*		3.5: F
*		4: PF
*		4.5: F/C
*		5: C
*		*/

//create all Knicks players
const rj = new Player('R.J.','Barrett',2.5,20,8231760,9,9,"https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4395625.png&w=350&h=254");
const tajGibson = new Player('Taj','Gibson',4.5,35,10290000,4,67,"https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3986.png&w=350&h=254");
const frenchFrank = new Player('Frank','Ntilikina',1,22,6176578,6,11,"https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4230547.png&w=350&h=254");
const knox = new Player('Kevin','Knox',3,21,4588680,6,20,"https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4278075.png&w=350&h=254");
const dennisSmith = new Player('Dennis','Smith Jr',1.5,22,5686677,4,4,"https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4065697.png&w=350&h=254");
const braz = new Player('Ignas','Brazdeikis',2.5,21,1517981,3,17,"https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4397205.png&w=350&h=254");
const bobbyPortis= new Player('Bobby','Portis',4,28,15000000,5,1,"https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3064482.png&w=350&h=254");
const juliusRandle= new Player('Julius','Randle',4,25,18900000,6,30,"https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3064514.png&w=350&h=254")
const elfridPayton= new Player('Elfrid','Payton',1,26,8000000,2,6,"https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2583639.png&w=350&h=254");
const wayneEllington= new Player('Wayne','Ellington',2.5,32,8195122,7,2,"https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3981.png&w=350&h=254");
const reggieBullock= new Player('Reggie','Bullock',2.5,29,4200000,5,25,"https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2528779.png&w=350&h=254");
const damyeanDotson= new Player('Damyean','Dotson',2,26,2023150,5,21,"https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2991149.png&w=350&h=254");
const mitchellRobinson= new Player('Mitchell','Robinson',5,22,1663861,8,23,"https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4351852.png&w=350&h=254");
const theoPinson= new Player('Theo','Pinson',3,24,1701593,1,00,"https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3138154.png&w=350&h=254");

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
const paulMillsap=new Player('Paul','Millsap',4,35,7000000,5,4,"https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3015.png&h=96&w=96&scale=crop");
const marcGasol= new Player('Marc','Gasol',5,35,5000000,7,33);
const sergeIbaka= new Player('Serge', 'Ibaka',4.5,31,12000000,6,9);
const daniloGallinari= new Player('Danilo','Gallinari',3.5,32,16000000,7,8);
const jeffTeague= new Player('Jeff','Teague',1,32,8000000,7,00);
const derrickFavors= new Player('Derrick', 'Favors',4,29,7000000,3,22);
const kentBazemore= new Player('Kent', 'Bazemore',2.5,31,5000000,4,26);
const christianWood= new Player('Christian','Wood',4,25,16000000,8,35,"https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3058254.png&w=350&h=254");
const goranDragic= new Player('Goran','Dragic',1,34,13000000,7,7);
const tristanThompson= new Player('Tristan', 'Thompson',4.5,29,10000000,4,13);
const davisBertans= new Player('Davis','Bertans',4,27,15000000,7,42);
const joeHarris=new Player('Joe','Harris',2.5,29,15000000,5,12);
const kellyOlynyk= new Player('Kelly','Olynyk',4.5,29,4000000,4,9);
const marcusMorris= new Player('Marcus','Morris',3.5,31,12000000,6,31);
const jordanClarkson= new Player('Jordan','Clarkson',1.5,28,9000000,6,00);
const andreRoberson= new Player('Andre','Roberson',2.5,28,2700000,2,21);
const joshJackson= new Player('Josh','Jackson',2.5,23,2700000,4,20);
const jamesEnnis= new Player('James','Ennis III',2.5,30,2700000,6,11);
const jahlilOkafor= new Player('Jahlil','Okafor',5,24,2700000,3,9);
const justinHoliday= new Player('Justin','Holiday',2.5,31,5000000,5,8);
const hassanWhiteside = new Player('Hassan','Whiteside',5,31,10000000,4,21);
const fredVanVleet = new Player('Fred','VanVleet',1.5,26,20000000,7,23);
const masonPlumlee = new Player('Mason','Plumlee',5,30,8000000,6,7);
const harryGiles = new Player('Harry','Giles',4.5,22,6000000,6,20);
const jeramiGrant = new Player('Jerami','Grant',3.5,26,14000000,7,9);

//Add FA to FA map
freeAgents.set(paulMillsap.jNumber,paulMillsap);
freeAgents.set(marcGasol.jNumber,marcGasol);
freeAgents.set(sergeIbaka.jNumber,sergeIbaka);
freeAgents.set(daniloGallinari.jNumber,daniloGallinari);
freeAgents.set(jeffTeague.jNumber,jeffTeague);
freeAgents.set(derrickFavors.jNumber,derrickFavors);
<<<<<<< HEAD
freeAgents.set(kentBazemore.jNumber,kentBazemore);
=======
freeAgents.set(kentBazemore.jNumber,kentBazemore);
>>>>>>> 62ccc68f5052f5941b2b940d70b0911fdbed022d
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
freeAgents.set(masonPlumlee.jNumber,masonPlumlee);
freeAgents.set(jabariParker.jNumber,jabariParker);
freeAgents.set(harryGiles.jNumber,harryGiles);
freeAgents.set(jeramiGrant.jNumber,jeramiGrant);
freeAgents.set(darioSaric.jNumber,darioSaric);

//Add CP3 and others to OKC Map
const chrisPaul = new Player('Chris','Paul',1,35,41358814,10,3);
const stevenAdams = new Player('Steven','Adams',5,27,27528090,6,12);
const dennisSchroder= new Player ('Dennis','Schröder',1,27,15500000,7,17);
const shaiGA = new Player('Shai','Gilgeous-Alexander',1.5,22,4141320,9,2,"https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4278073.png&w=350&h=254");
const terranceFerguson= new Player('Terrance','Ferguson',2.5,22,3944013,4,23);
const dariusBazley= new Player('Darius','Bazley',3.5,20,2399160,6,7,"https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4423545.png&w=350&h=254");
const mikeMoose = new Player('Mike','Muscala',29,4.5,2283034,2,31);
const dort = new Player('Luguentz','Dort',2,21,1517981,5,5,"https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4397020.png&w=350&h=254");
const abdelNader= new Player('Abdel','Nader',3.5,27,1752950,2,11);
const hamidouDiallo= new Player('Hamidou','Diallo',2,22,1663861,4,6,"https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4080610.png&w=350&h=254");
const deonteBurton= new Player('Deonte','Burton',3,26,1663861 ,3,30,"https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3059358.png&w=350&h=254");
const isaiahRoby= new Player('Isaiah','Roby',4,22,1517981,3,22,"https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4066392.png&w=350&h=254");

//Add okc players to Map 
okc.set(chrisPaul.jNumber,chrisPaul);
okc.set(dennisSchroder.jNumber,dennisSchroder);
okc.set(terranceFerguson.jNumber,terranceFerguson);
okc.set(dariusBazley.jNumber,dariusBazley);
okc.set(abdelNader.jNumber,abdelNader);
okc.set(deonteBurton.jNumber,deonteBurton);
okc.set(dort.jNumber,dort);
okc.set(stevenAdams.jNumber,stevenAdams);
okc.set(shai.jNumber,shai);
okc.set(mikeMoose.jNumber,mikeMoose);
okc.set(hamidouDiallo.jNumber,hamidouDiallo);
okc.set(isaiahRoby.jNumber,isaiahRoby);

//Create draft prospect class 
let pickCap = new Map();

function Prospect(first,last,frm,pos,age,url) {
	this.first = first;
	this.last = last;
	this.pos = pos;
  this.age=age;
	this.frm = frm;
	this.photo = url;
	this.drafted = function(pick) {
		roster.set(null,new Player(first,last,pos,age,pickCap.get(pick),7,null,photo));
	}
}


//Create draft prospects
const lameloBall= new Prospect('LaMelo','Ball','Illawrra Hawks (AU)',1.5,19,"https://cdn.nba.net/nba-drupal-prod/2020-05/ball219.jpg");
const anthonyEdwards=new Prospect('Anthony','Edwards','Georgia',2,19,"https://a1.espncdn.com/combiner/i?img=/i/headshots/nbadraft/players/full/104250.png&h=96&w=96&scale=crop");
const jamesWiseman=new Prospect('James','Wiseman','Memphis',5,19,"https://a1.espncdn.com/combiner/i?img=/i/headshots/nbadraft/players/full/104249.png&h=96&w=96&scale=crop");
const deniAvdija= new Prospect('Deni','Avdija','Israel',3,19,"https://a1.espncdn.com/combiner/i?img=/i/headshots/nbadraft/players/full/104253.png&h=96&w=96&scale=crop");
const onyekaOkongwu= new Prospect('Onyeka','Okongwu','USC',5,19,"https://a1.espncdn.com/combiner/i?img=/i/headshots/nbadraft/players/full/104352.png&h=96&w=96&scale=crop");
const obiToppin = new Prospect('Obi','Toppin','Dayton',3.5,22,'https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/4278355.png&w=350&h=254');

const isaacOkoro= new Prospect('Isaac','Okoro','Auburn',3,19,"https://a1.espncdn.com/combiner/i?img=/i/headshots/nbadraft/players/full/104298.png&h=96&w=96&scale=crop");
const tyreseHaliburton=new Prospect('Tyrese','Haliburton','Iowa St',1,20,'https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/4396993.png&w=350&h=254');
const patrickWilliams= new Prospect('Patrick','Williams','Florida State',3,19,"https://a1.espncdn.com/combiner/i?img=/i/headshots/nbadraft/players/full/104269.png&h=96&w=96&scale=crop");
const killianHayes= new Prospect('Killian','Hayes','France',1,19,"https://a1.espncdn.com/combiner/i?img=/i/headshots/nbadraft/players/full/104266.png&h=96&w=96&scale=crop");
const devinVassell = new Prospect('Devin','Vassell','Florida St',2.5,20,'https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/4395630.png');
const preciousAchiuwa= new Prospect('Precious','Achiuwa','Memphis',4,21,"https://a1.espncdn.com/combiner/i?img=/i/headshots/nbadraft/players/full/104262.png&h=96&w=96&scale=crop");
const aaronNesmith = new Prospect('Aaron','Nesmith','Vanderbilt',2.5,21,'https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/4396909.png');
const tyreseMaxey= new Prospect('Tyrese','Maxey','Kentucky',2,20,"https://a1.espncdn.com/combiner/i?img=/i/headshots/nbadraft/players/full/104261.png&h=96&w=96&scale=crop");
const rjHampton= new Prospect('RJ','Hampton','Breakers (NZ)',1,"http://insider.espn.com/nba/draft/player/_/id/104254");
const kiraLewis = new Prospect('Kira','Lewis Jr.','Alabama',1,19,'https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/4395698.png');
const saddiqBey= new Prospect('Saddiq','Bey','Villanova',4,21,"http://insider.espn.com/nba/draft/player/_/id/104414");

const serbianDude = new Prospect('Alexsej','Pokusevski','Serbia',3.5,18,'https://id-prospects.com/wp-content/uploads/2020/09/pixlr-bg-result-11.png');
const coleAnthony= new Prospect('Cole','Anthony','North Carolina',1,20,"https://a1.espncdn.com/combiner/i?img=/i/headshots/nbadraft/players/full/104252.png&h=96&w=96&scale=crop");
const jalenSmith= new Prospect('Jalen','Smith','Maryland',4,20,"https://a1.espncdn.com/combiner/i?img=/i/headshots/nbadraft/players/full/104279.png&h=96&w=96&scale=crop");
const joshGreen= new Prospect('Josh','Green','Arizona',2,20,"http://insider.espn.com/nba/draft/player/_/id/104270");
const leandroBolmaro= new Prospect('Leandro','Bolmaro','Argentina',2,20,"http://insider.espn.com/nba/draft/player/_/id/104306");
const jadenMcDaniels = new Prospect('Jaden','McDaniels','Washington',4,20,'https://a.espncdn.com/i/headshots/mens-college-basketball/players/full/4397158.png');
const theoMaledon= new Prospect('Theo','Maledon','France',1,19,"http://insider.espn.com/nba/draft/player/_/id/104255");
const nicoMannion = new Prospect('Nico','Mannion','Arizona/Italy',1,19,'https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/4431672.png&w=350&h=254');
const robertWoodardII= new Prospect('Robert','Woodard II','Mississippi State',3,21,"https://a1.espncdn.com/combiner/i?img=/i/headshots/nbadraft/players/full/104364.png&h=96&w=96&scale=crop");
const isaiahStewart = new Prospect('Isaiah','Stewart','Washington',5,19,'https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/4432810.png');
const tylerBey= new Prospect('Tyler','Bey','Colorado',4,22,"https://a1.espncdn.com/combiner/i?img=/i/headshots/nbadraft/players/full/104342.png&h=96&w=96&scale=crop");
const treJones = new Prospect('Tre','Jones','Duke',1,20,'https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/4395626.png');
const cassiusWinston= new Prospect('Cassius','Winston','Michigan State',1,22,"https://a1.espncdn.com/combiner/i?img=/i/headshots/nbadraft/players/full/104283.png&h=96&w=96&scale=crop");
const vernonCarey = new Prospect('Vernon','Carey Jr.','Duke',5,19,'https://a.espncdn.com/i/headshots/mens-college-basketball/players/full/4431669.png');
const tyrellTerry= new Prospect('Tyrell','Terry','Stanford',1,20,"https://a1.espncdn.com/combiner/i?img=/i/headshots/nbadraft/players/full/104631.png&h=96&w=96&scale=crop");
//To be continued after draft

//Add Prospects to prospect map
prospects.set(lameloBall);
prospects.set(anthonyEdwards);
prospects.set(jamesWiseman);
prospects.set(deniAvdija);
prospects.set(onyekaOkongwu);
prospects.set(obiToppin);
prospects.set(isaacOkoro);
prospects.set(tyreseHaliburton);
prospects.set(patrickWilliams);
prospects.set(killianHayes);
prospects.set(devinVassell);
prospects.set(preciousAchiuwa);
prospects.set(aaronNesmith);
prospects.set(tyreseMaxey);
prospects.set(rjHampton);
prospects.set(kiraLewis);
prospects.set(saddiqBey);
prospects.set(serbianDude);
prospects.set(coleAnthony);
prospects.set(jalenSmith);
prospects.set(joshGreen);
prospects.set(leandroBolmaro);
prospects.set(jadenMcDaniels);
prospects.set(theoMaledon);
prospects.set(nicoMannion);
prospects.set(robertWoodardII);
prospects.set(isaiahStewart);
prospects.set(tylerBey);
prospects.set(cassiusWinston);
prospects.set(treJones);
prospects.set(vernonCarey);
prospects.set(tyrellTerry);








//Trade function
function reqTrade() {
	if (tradePieces[0].getTotVal() >= tradePieces[1].getTotVal()) {
		acceptTrade();
	} else {
		rejectTrade();
	}
} 