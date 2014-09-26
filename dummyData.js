// Code used to convert dummyData object of arrays into a usable player list object
// 		sorted by key:value for each player

// var zipItGood = function(valueArray) {
// 	return _.object(dummyData.cols, valueArray);
// }

// var playerList = _.map(dummyData.data, zipItGood);


// console.log(JSON.stringify(playerList));

// Dummy Data List

// var dummyData = {
// 	"cols": [
// 		"username",
// 		"fullname",
// 		"region",
// 		"race",
// 		"wins",
// 		"losses"
// 	],
// 	"data": [
// 		[
// 			"ridiculus",
// 			"Acton Williamson",
// 			"Europe",
// 			"Zerg",
// 			40,
// 			234
// 		],
// 		[
// 			"purus",
// 			"Felix Bennett",
// 			"Europe",
// 			"Zerg",
// 			152,
// 			380
// 		],
// 		[
// 			"interdum",
// 			"Stacy Ferrell",
// 			"Korea",
// 			"Zerg",
// 			22,
// 			136
// 		],
// 		[
// 			"Mauris",
// 			"Olivia Higgins",
// 			"Europe",
// 			"Terran",
// 			279,
// 			374
// 		],
// 		[
// 			"odio",
// 			"Addison Scott",
// 			"Europe",
// 			"Zerg",
// 			62,
// 			249
// 		],
// 		[
// 			"scelerisque",
// 			"Olivia Ruiz",
// 			"America",
// 			"Terran",
// 			283,
// 			24
// 		],
// 		[
// 			"varius",
// 			"Ulla Boyer",
// 			"Korea",
// 			"Protoss",
// 			362,
// 			437
// 		],
// 		[
// 			"nisi",
// 			"Giacomo Holden",
// 			"Korea",
// 			"Zerg",
// 			41,
// 			461
// 		],
// 		[
// 			"tempus",
// 			"Palmer Barton",
// 			"Korea",
// 			"Terran",
// 			489,
// 			249
// 		],
// 		[
// 			"Cras",
// 			"Quamar Benson",
// 			"Korea",
// 			"Protoss",
// 			451,
// 			27
// 		],
// 		[
// 			"Aliquam",
// 			"Ali Robbins",
// 			"Europe",
// 			"Zerg",
// 			445,
// 			306
// 		],
// 		[
// 			"non",
// 			"Alan Osborne",
// 			"Korea",
// 			"Terran",
// 			36,
// 			455
// 		],
// 		[
// 			"neque",
// 			"Martena Sykes",
// 			"Europe",
// 			"Zerg",
// 			94,
// 			426
// 		],
// 		[
// 			"Phasellus",
// 			"Lana Reed",
// 			"Europe",
// 			"Protoss",
// 			423,
// 			186
// 		],
// 		[
// 			"mauris",
// 			"Gil Dyer",
// 			"Korea",
// 			"Zerg",
// 			87,
// 			290
// 		],
// 		[
// 			"mi",
// 			"Basil Moses",
// 			"America",
// 			"Zerg",
// 			486,
// 			95
// 		],
// 		[
// 			"nisl",
// 			"Cullen Hale",
// 			"Korea",
// 			"Terran",
// 			372,
// 			359
// 		],
// 		[
// 			"sit",
// 			"Roary Martin",
// 			"Korea",
// 			"Protoss",
// 			406,
// 			111
// 		],
// 		[
// 			"ullamcorper",
// 			"Faith Hart",
// 			"Korea",
// 			"Terran",
// 			45,
// 			135
// 		],
// 		[
// 			"arcu",
// 			"Sacha Dodson",
// 			"Europe",
// 			"Terran",
// 			228,
// 			463
// 		],
// 		[
// 			"erat",
// 			"Jada Noel",
// 			"Europe",
// 			"Zerg",
// 			196,
// 			243
// 		],
// 		[
// 			"vulputate",
// 			"Rinah Foley",
// 			"Europe",
// 			"Terran",
// 			391,
// 			428
// 		],
// 		[
// 			"Fusce",
// 			"Noble Washington",
// 			"Europe",
// 			"Terran",
// 			174,
// 			492
// 		],
// 		[
// 			"malesuada",
// 			"Brynn Hopkins",
// 			"America",
// 			"Terran",
// 			162,
// 			66
// 		],
// 		[
// 			"enim",
// 			"Garth Larsen",
// 			"Europe",
// 			"Zerg",
// 			219,
// 			417
// 		],
// 		[
// 			"felis",
// 			"Zelda Mendez",
// 			"Europe",
// 			"Protoss",
// 			168,
// 			131
// 		],
// 		[
// 			"neque",
// 			"Tad Mcmillan",
// 			"Europe",
// 			"Protoss",
// 			426,
// 			307
// 		],
// 		[
// 			"turpis",
// 			"Jemima Walsh",
// 			"America",
// 			"Protoss",
// 			81,
// 			280
// 		],
// 		[
// 			"dapibus",
// 			"Amery Zamora",
// 			"Europe",
// 			"Terran",
// 			449,
// 			8
// 		],
// 		[
// 			"turpis",
// 			"Christopher Gonzalez",
// 			"Europe",
// 			"Protoss",
// 			165,
// 			72
// 		],
// 		[
// 			"metus",
// 			"Samson Yates",
// 			"Europe",
// 			"Zerg",
// 			373,
// 			21
// 		],
// 		[
// 			"facilisis",
// 			"Regan Cooper",
// 			"Korea",
// 			"Protoss",
// 			190,
// 			396
// 		],
// 		[
// 			"luctus",
// 			"Claudia Orr",
// 			"Korea",
// 			"Terran",
// 			386,
// 			81
// 		],
// 		[
// 			"nulla",
// 			"Remedios Keller",
// 			"America",
// 			"Zerg",
// 			470,
// 			271
// 		],
// 		[
// 			"lobortis",
// 			"Derek Fischer",
// 			"America",
// 			"Zerg",
// 			11,
// 			126
// 		],
// 		[
// 			"et",
// 			"Chaney Mitchell",
// 			"Europe",
// 			"Protoss",
// 			246,
// 			97
// 		],
// 		[
// 			"nec",
// 			"Abraham Whitney",
// 			"America",
// 			"Terran",
// 			325,
// 			162
// 		],
// 		[
// 			"felis",
// 			"Kennedy Ellis",
// 			"America",
// 			"Zerg",
// 			148,
// 			193
// 		],
// 		[
// 			"ut",
// 			"Tarik Hendrix",
// 			"America",
// 			"Terran",
// 			192,
// 			459
// 		],
// 		[
// 			"mi",
// 			"Nolan Hensley",
// 			"Europe",
// 			"Terran",
// 			158,
// 			87
// 		],
// 		[
// 			"egestas",
// 			"Charity Schmidt",
// 			"Korea",
// 			"Zerg",
// 			54,
// 			129
// 		],
// 		[
// 			"blandit",
// 			"Briar Macias",
// 			"Korea",
// 			"Terran",
// 			291,
// 			96
// 		],
// 		[
// 			"mollis",
// 			"Lael Mayo",
// 			"Korea",
// 			"Zerg",
// 			202,
// 			113
// 		],
// 		[
// 			"consectetuer",
// 			"Hasad Lloyd",
// 			"Korea",
// 			"Terran",
// 			100,
// 			51
// 		],
// 		[
// 			"sodales",
// 			"Keith Craft",
// 			"Europe",
// 			"Protoss",
// 			319,
// 			281
// 		],
// 		[
// 			"justo",
// 			"Elmo Carlson",
// 			"America",
// 			"Protoss",
// 			349,
// 			51
// 		],
// 		[
// 			"ornare",
// 			"Donovan Kline",
// 			"Korea",
// 			"Protoss",
// 			211,
// 			12
// 		],
// 		[
// 			"turpis",
// 			"Hiroko Daugherty",
// 			"Europe",
// 			"Protoss",
// 			178,
// 			74
// 		],
// 		[
// 			"a",
// 			"Karen Rodriguez",
// 			"Europe",
// 			"Zerg",
// 			458,
// 			307
// 		],
// 		[
// 			"Sed",
// 			"Ella French",
// 			"Europe",
// 			"Terran",
// 			424,
// 			423
// 		],
// 		[
// 			"pharetra",
// 			"Duncan England",
// 			"Korea",
// 			"Terran",
// 			346,
// 			214
// 		],
// 		[
// 			"Nam",
// 			"Camilla Rocha",
// 			"America",
// 			"Zerg",
// 			156,
// 			209
// 		],
// 		[
// 			"primis",
// 			"Rosalyn George",
// 			"Europe",
// 			"Terran",
// 			174,
// 			292
// 		],
// 		[
// 			"rhoncus",
// 			"Cassidy Holden",
// 			"Europe",
// 			"Protoss",
// 			313,
// 			73
// 		],
// 		[
// 			"pede",
// 			"Leo Shaw",
// 			"Europe",
// 			"Protoss",
// 			85,
// 			472
// 		],
// 		[
// 			"ligula",
// 			"Rowan Duke",
// 			"America",
// 			"Protoss",
// 			443,
// 			51
// 		],
// 		[
// 			"Quisque",
// 			"Kermit Howard",
// 			"America",
// 			"Terran",
// 			433,
// 			253
// 		],
// 		[
// 			"iaculis",
// 			"Cooper Callahan",
// 			"Korea",
// 			"Terran",
// 			353,
// 			15
// 		],
// 		[
// 			"massa",
// 			"Wallace Cook",
// 			"Europe",
// 			"Zerg",
// 			219,
// 			280
// 		],
// 		[
// 			"a",
// 			"Oliver House",
// 			"America",
// 			"Protoss",
// 			69,
// 			385
// 		],
// 		[
// 			"orci",
// 			"Armand Mooney",
// 			"America",
// 			"Terran",
// 			244,
// 			55
// 		],
// 		[
// 			"sed",
// 			"Blair Santana",
// 			"America",
// 			"Terran",
// 			137,
// 			123
// 		],
// 		[
// 			"Etiam",
// 			"Azalia Odonnell",
// 			"Europe",
// 			"Terran",
// 			473,
// 			24
// 		],
// 		[
// 			"eget",
// 			"Hamilton Coffey",
// 			"Europe",
// 			"Protoss",
// 			490,
// 			477
// 		],
// 		[
// 			"Nunc",
// 			"Mia Hopper",
// 			"Korea",
// 			"Terran",
// 			262,
// 			135
// 		],
// 		[
// 			"lobortis",
// 			"Carol Lott",
// 			"America",
// 			"Terran",
// 			18,
// 			298
// 		],
// 		[
// 			"interdum",
// 			"Nerea Lopez",
// 			"Korea",
// 			"Protoss",
// 			385,
// 			173
// 		],
// 		[
// 			"facilisis",
// 			"Samuel Gardner",
// 			"America",
// 			"Terran",
// 			386,
// 			40
// 		],
// 		[
// 			"erat",
// 			"Lynn Mclaughlin",
// 			"Europe",
// 			"Protoss",
// 			34,
// 			294
// 		],
// 		[
// 			"fringilla",
// 			"Lilah Meyers",
// 			"America",
// 			"Zerg",
// 			262,
// 			336
// 		],
// 		[
// 			"Duis",
// 			"Nehru Horne",
// 			"Korea",
// 			"Zerg",
// 			247,
// 			11
// 		],
// 		[
// 			"ultricies",
// 			"Faith Rosario",
// 			"America",
// 			"Zerg",
// 			160,
// 			314
// 		],
// 		[
// 			"consectetuer",
// 			"Julie Pace",
// 			"Europe",
// 			"Protoss",
// 			359,
// 			417
// 		],
// 		[
// 			"ridiculus",
// 			"Mercedes Graves",
// 			"Europe",
// 			"Zerg",
// 			374,
// 			86
// 		],
// 		[
// 			"tortor",
// 			"Eliana Nguyen",
// 			"America",
// 			"Terran",
// 			221,
// 			330
// 		],
// 		[
// 			"mauris",
// 			"Melanie Witt",
// 			"America",
// 			"Zerg",
// 			114,
// 			398
// 		],
// 		[
// 			"dolor",
// 			"Illiana Lancaster",
// 			"America",
// 			"Zerg",
// 			73,
// 			358
// 		],
// 		[
// 			"aliquam",
// 			"Rashad Irwin",
// 			"Europe",
// 			"Terran",
// 			318,
// 			290
// 		],
// 		[
// 			"pharetra",
// 			"Griffin Atkinson",
// 			"America",
// 			"Protoss",
// 			137,
// 			168
// 		],
// 		[
// 			"Suspendisse",
// 			"Paki Marks",
// 			"Korea",
// 			"Protoss",
// 			46,
// 			468
// 		],
// 		[
// 			"adipiscing",
// 			"Amelia Bolton",
// 			"Korea",
// 			"Terran",
// 			115,
// 			283
// 		],
// 		[
// 			"placerat",
// 			"Aubrey Cooper",
// 			"America",
// 			"Terran",
// 			191,
// 			37
// 		],
// 		[
// 			"sem",
// 			"Sharon Goff",
// 			"Europe",
// 			"Zerg",
// 			274,
// 			292
// 		],
// 		[
// 			"eget",
// 			"Robin Norris",
// 			"Europe",
// 			"Terran",
// 			209,
// 			385
// 		],
// 		[
// 			"arcu",
// 			"Amery Abbott",
// 			"Korea",
// 			"Protoss",
// 			198,
// 			486
// 		],
// 		[
// 			"ligula",
// 			"Harding Gould",
// 			"Korea",
// 			"Protoss",
// 			30,
// 			3
// 		],
// 		[
// 			"tempus",
// 			"Maggie Macias",
// 			"Korea",
// 			"Terran",
// 			337,
// 			310
// 		],
// 		[
// 			"molestie",
// 			"Daryl Barlow",
// 			"Europe",
// 			"Protoss",
// 			343,
// 			258
// 		],
// 		[
// 			"enim",
// 			"Tana Tyler",
// 			"Europe",
// 			"Protoss",
// 			253,
// 			173
// 		],
// 		[
// 			"Cras",
// 			"Nell Hebert",
// 			"America",
// 			"Protoss",
// 			416,
// 			107
// 		],
// 		[
// 			"nisi",
// 			"Guinevere Swanson",
// 			"Europe",
// 			"Protoss",
// 			324,
// 			408
// 		],
// 		[
// 			"justo",
// 			"Mikayla Kirk",
// 			"America",
// 			"Terran",
// 			424,
// 			28
// 		],
// 		[
// 			"purus",
// 			"Drew Marks",
// 			"America",
// 			"Zerg",
// 			275,
// 			117
// 		],
// 		[
// 			"mi",
// 			"Pascale Bernard",
// 			"Korea",
// 			"Terran",
// 			237,
// 			29
// 		],
// 		[
// 			"eu",
// 			"Myra Parsons",
// 			"America",
// 			"Zerg",
// 			399,
// 			77
// 		],
// 		[
// 			"nulla",
// 			"Katelyn Acevedo",
// 			"America",
// 			"Protoss",
// 			449,
// 			95
// 		],
// 		[
// 			"vel",
// 			"Melyssa Price",
// 			"Korea",
// 			"Terran",
// 			239,
// 			391
// 		],
// 		[
// 			"diam",
// 			"Hanna Duke",
// 			"Europe",
// 			"Protoss",
// 			134,
// 			464
// 		],
// 		[
// 			"ultrices",
// 			"Madeson Pickett",
// 			"Europe",
// 			"Zerg",
// 			90,
// 			392
// 		],
// 		[
// 			"commodo",
// 			"Kibo Oliver",
// 			"Korea",
// 			"Terran",
// 			18,
// 			407
// 		]
// 	]
// };


var playerList = [{"username":"ridiculus","fullname":"Acton Williamson","region":"Europe","race":"Zerg","wins":40,"losses":234},{"username":"purus","fullname":"Felix Bennett","region":"Europe","race":"Zerg","wins":152,"losses":380},{"username":"interdum","fullname":"Stacy Ferrell","region":"Korea","race":"Zerg","wins":22,"losses":136},{"username":"Mauris","fullname":"Olivia Higgins","region":"Europe","race":"Terran","wins":279,"losses":374},{"username":"odio","fullname":"Addison Scott","region":"Europe","race":"Zerg","wins":62,"losses":249},{"username":"scelerisque","fullname":"Olivia Ruiz","region":"America","race":"Terran","wins":283,"losses":24},{"username":"varius","fullname":"Ulla Boyer","region":"Korea","race":"Protoss","wins":362,"losses":437},{"username":"nisi","fullname":"Giacomo Holden","region":"Korea","race":"Zerg","wins":41,"losses":461},{"username":"tempus","fullname":"Palmer Barton","region":"Korea","race":"Terran","wins":489,"losses":249},{"username":"Cras","fullname":"Quamar Benson","region":"Korea","race":"Protoss","wins":451,"losses":27},{"username":"Aliquam","fullname":"Ali Robbins","region":"Europe","race":"Zerg","wins":445,"losses":306},{"username":"non","fullname":"Alan Osborne","region":"Korea","race":"Terran","wins":36,"losses":455},{"username":"neque","fullname":"Martena Sykes","region":"Europe","race":"Zerg","wins":94,"losses":426},{"username":"Phasellus","fullname":"Lana Reed","region":"Europe","race":"Protoss","wins":423,"losses":186},{"username":"mauris","fullname":"Gil Dyer","region":"Korea","race":"Zerg","wins":87,"losses":290},{"username":"mi","fullname":"Basil Moses","region":"America","race":"Zerg","wins":486,"losses":95},{"username":"nisl","fullname":"Cullen Hale","region":"Korea","race":"Terran","wins":372,"losses":359},{"username":"sit","fullname":"Roary Martin","region":"Korea","race":"Protoss","wins":406,"losses":111},{"username":"ullamcorper","fullname":"Faith Hart","region":"Korea","race":"Terran","wins":45,"losses":135},{"username":"arcu","fullname":"Sacha Dodson","region":"Europe","race":"Terran","wins":228,"losses":463},{"username":"erat","fullname":"Jada Noel","region":"Europe","race":"Zerg","wins":196,"losses":243},{"username":"vulputate","fullname":"Rinah Foley","region":"Europe","race":"Terran","wins":391,"losses":428},{"username":"Fusce","fullname":"Noble Washington","region":"Europe","race":"Terran","wins":174,"losses":492},{"username":"malesuada","fullname":"Brynn Hopkins","region":"America","race":"Terran","wins":162,"losses":66},{"username":"enim","fullname":"Garth Larsen","region":"Europe","race":"Zerg","wins":219,"losses":417},{"username":"felis","fullname":"Zelda Mendez","region":"Europe","race":"Protoss","wins":168,"losses":131},{"username":"neque","fullname":"Tad Mcmillan","region":"Europe","race":"Protoss","wins":426,"losses":307},{"username":"turpis","fullname":"Jemima Walsh","region":"America","race":"Protoss","wins":81,"losses":280},{"username":"dapibus","fullname":"Amery Zamora","region":"Europe","race":"Terran","wins":449,"losses":8},{"username":"turpis","fullname":"Christopher Gonzalez","region":"Europe","race":"Protoss","wins":165,"losses":72},{"username":"metus","fullname":"Samson Yates","region":"Europe","race":"Zerg","wins":373,"losses":21},{"username":"facilisis","fullname":"Regan Cooper","region":"Korea","race":"Protoss","wins":190,"losses":396},{"username":"luctus","fullname":"Claudia Orr","region":"Korea","race":"Terran","wins":386,"losses":81},{"username":"nulla","fullname":"Remedios Keller","region":"America","race":"Zerg","wins":470,"losses":271},{"username":"lobortis","fullname":"Derek Fischer","region":"America","race":"Zerg","wins":11,"losses":126},{"username":"et","fullname":"Chaney Mitchell","region":"Europe","race":"Protoss","wins":246,"losses":97},{"username":"nec","fullname":"Abraham Whitney","region":"America","race":"Terran","wins":325,"losses":162},{"username":"felis","fullname":"Kennedy Ellis","region":"America","race":"Zerg","wins":148,"losses":193},{"username":"ut","fullname":"Tarik Hendrix","region":"America","race":"Terran","wins":192,"losses":459},{"username":"mi","fullname":"Nolan Hensley","region":"Europe","race":"Terran","wins":158,"losses":87},{"username":"egestas","fullname":"Charity Schmidt","region":"Korea","race":"Zerg","wins":54,"losses":129},{"username":"blandit","fullname":"Briar Macias","region":"Korea","race":"Terran","wins":291,"losses":96},{"username":"mollis","fullname":"Lael Mayo","region":"Korea","race":"Zerg","wins":202,"losses":113},{"username":"consectetuer","fullname":"Hasad Lloyd","region":"Korea","race":"Terran","wins":100,"losses":51},{"username":"sodales","fullname":"Keith Craft","region":"Europe","race":"Protoss","wins":319,"losses":281},{"username":"justo","fullname":"Elmo Carlson","region":"America","race":"Protoss","wins":349,"losses":51},{"username":"ornare","fullname":"Donovan Kline","region":"Korea","race":"Protoss","wins":211,"losses":12},{"username":"turpis","fullname":"Hiroko Daugherty","region":"Europe","race":"Protoss","wins":178,"losses":74},{"username":"a","fullname":"Karen Rodriguez","region":"Europe","race":"Zerg","wins":458,"losses":307},{"username":"Sed","fullname":"Ella French","region":"Europe","race":"Terran","wins":424,"losses":423},{"username":"pharetra","fullname":"Duncan England","region":"Korea","race":"Terran","wins":346,"losses":214},{"username":"Nam","fullname":"Camilla Rocha","region":"America","race":"Zerg","wins":156,"losses":209},{"username":"primis","fullname":"Rosalyn George","region":"Europe","race":"Terran","wins":174,"losses":292},{"username":"rhoncus","fullname":"Cassidy Holden","region":"Europe","race":"Protoss","wins":313,"losses":73},{"username":"pede","fullname":"Leo Shaw","region":"Europe","race":"Protoss","wins":85,"losses":472},{"username":"ligula","fullname":"Rowan Duke","region":"America","race":"Protoss","wins":443,"losses":51},{"username":"Quisque","fullname":"Kermit Howard","region":"America","race":"Terran","wins":433,"losses":253},{"username":"iaculis","fullname":"Cooper Callahan","region":"Korea","race":"Terran","wins":353,"losses":15},{"username":"massa","fullname":"Wallace Cook","region":"Europe","race":"Zerg","wins":219,"losses":280},{"username":"a","fullname":"Oliver House","region":"America","race":"Protoss","wins":69,"losses":385},{"username":"orci","fullname":"Armand Mooney","region":"America","race":"Terran","wins":244,"losses":55},{"username":"sed","fullname":"Blair Santana","region":"America","race":"Terran","wins":137,"losses":123},{"username":"Etiam","fullname":"Azalia Odonnell","region":"Europe","race":"Terran","wins":473,"losses":24},{"username":"eget","fullname":"Hamilton Coffey","region":"Europe","race":"Protoss","wins":490,"losses":477},{"username":"Nunc","fullname":"Mia Hopper","region":"Korea","race":"Terran","wins":262,"losses":135},{"username":"lobortis","fullname":"Carol Lott","region":"America","race":"Terran","wins":18,"losses":298},{"username":"interdum","fullname":"Nerea Lopez","region":"Korea","race":"Protoss","wins":385,"losses":173},{"username":"facilisis","fullname":"Samuel Gardner","region":"America","race":"Terran","wins":386,"losses":40},{"username":"erat","fullname":"Lynn Mclaughlin","region":"Europe","race":"Protoss","wins":34,"losses":294},{"username":"fringilla","fullname":"Lilah Meyers","region":"America","race":"Zerg","wins":262,"losses":336},{"username":"Duis","fullname":"Nehru Horne","region":"Korea","race":"Zerg","wins":247,"losses":11},{"username":"ultricies","fullname":"Faith Rosario","region":"America","race":"Zerg","wins":160,"losses":314},{"username":"consectetuer","fullname":"Julie Pace","region":"Europe","race":"Protoss","wins":359,"losses":417},{"username":"ridiculus","fullname":"Mercedes Graves","region":"Europe","race":"Zerg","wins":374,"losses":86},{"username":"tortor","fullname":"Eliana Nguyen","region":"America","race":"Terran","wins":221,"losses":330},{"username":"mauris","fullname":"Melanie Witt","region":"America","race":"Zerg","wins":114,"losses":398},{"username":"dolor","fullname":"Illiana Lancaster","region":"America","race":"Zerg","wins":73,"losses":358},{"username":"aliquam","fullname":"Rashad Irwin","region":"Europe","race":"Terran","wins":318,"losses":290},{"username":"pharetra","fullname":"Griffin Atkinson","region":"America","race":"Protoss","wins":137,"losses":168},{"username":"Suspendisse","fullname":"Paki Marks","region":"Korea","race":"Protoss","wins":46,"losses":468},{"username":"adipiscing","fullname":"Amelia Bolton","region":"Korea","race":"Terran","wins":115,"losses":283},{"username":"placerat","fullname":"Aubrey Cooper","region":"America","race":"Terran","wins":191,"losses":37},{"username":"sem","fullname":"Sharon Goff","region":"Europe","race":"Zerg","wins":274,"losses":292},{"username":"eget","fullname":"Robin Norris","region":"Europe","race":"Terran","wins":209,"losses":385},{"username":"arcu","fullname":"Amery Abbott","region":"Korea","race":"Protoss","wins":198,"losses":486},{"username":"ligula","fullname":"Harding Gould","region":"Korea","race":"Protoss","wins":30,"losses":3},{"username":"tempus","fullname":"Maggie Macias","region":"Korea","race":"Terran","wins":337,"losses":310},{"username":"molestie","fullname":"Daryl Barlow","region":"Europe","race":"Protoss","wins":343,"losses":258},{"username":"enim","fullname":"Tana Tyler","region":"Europe","race":"Protoss","wins":253,"losses":173},{"username":"Cras","fullname":"Nell Hebert","region":"America","race":"Protoss","wins":416,"losses":107},{"username":"nisi","fullname":"Guinevere Swanson","region":"Europe","race":"Protoss","wins":324,"losses":408},{"username":"justo","fullname":"Mikayla Kirk","region":"America","race":"Terran","wins":424,"losses":28},{"username":"purus","fullname":"Drew Marks","region":"America","race":"Zerg","wins":275,"losses":117},{"username":"mi","fullname":"Pascale Bernard","region":"Korea","race":"Terran","wins":237,"losses":29},{"username":"eu","fullname":"Myra Parsons","region":"America","race":"Zerg","wins":399,"losses":77},{"username":"nulla","fullname":"Katelyn Acevedo","region":"America","race":"Protoss","wins":449,"losses":95},{"username":"vel","fullname":"Melyssa Price","region":"Korea","race":"Terran","wins":239,"losses":391},{"username":"diam","fullname":"Hanna Duke","region":"Europe","race":"Protoss","wins":134,"losses":464},{"username":"ultrices","fullname":"Madeson Pickett","region":"Europe","race":"Zerg","wins":90,"losses":392},{"username":"commodo","fullname":"Kibo Oliver","region":"Korea","race":"Terran","wins":18,"losses":407}] 