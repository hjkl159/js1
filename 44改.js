// 面向对象编程嵌套
// 3200/4800 or 4267/6400
function front(str){
	var aa = str.toString,ab = str.indexOf("/"),ac = "",ad = "";
	for(var i = 4;i >= 1; i -= 1){
		ac += str.charAt(ab - i);
	}
	return parseFloat(ac)
}
function back(str){
	var aa = str.toString,ab = str.indexOf("/"),ac = "",ad = "";
	for(var i = 1;i <= 4; i  += 1){
		ac += str.charAt(ab + i);
	}
	return parseFloat(ac)
}
class Core{
	constructor(name , thread , quan , basic , highest){
		this.name = name,
		this.thread = thread,
		this.quan = quan,
		this.allthr = thread * quan,
		this.basic = basic,
		this.highest = highest
	}
}
class Pack{
	constructor(num , size){
		this.slot = num,
		this.size = size
	}
}
class Gpu{
	constructor(type , basic , monitor , RES , units){
		this.type = type,
		this.basic = basic,
		this.monitor = monitor,
		this.RES = RES,
		this.units = units
	}
}
class Basic{
	constructor(tech , publi){
		this.tech = tech,
		this.publi = publi
	}
}
class Perfor{
	constructor(L2 , L3 , TDP , accel){
		this.L2 = L2,
		this.L3 = L3,
		this.TDP = TDP,
		this.accel_power = accel
	}
}
class Memory{
	constructor(max , DDR , LPDDR , way , bandwidth , ECC){
		var d3 = "",d4 = "",d5 = "",ld4 = "",ld5 = "";
		if(DDR != "/"){
			if(typeof DDR == "string"){
				var num1 = front(DDR),num2 = back(DDR);
				if(num1 <= 2133){
					d3 = num1
				}
				else{
					d4 = num1
				}
				if(num2 < 4400){
					d4 = num2
				}
				else{
					d5 = num2
				}
			}
			else{
				var aa = DDR;
				if(aa <= 2133){
					d3 = aa
				}
				else{
					if(aa < 4400){
						d4 = aa
					}
					else{
						d5 = aa
					}
				}
			}
		}
		if(LPDDR != "/"){
			if(LPDDR.indexOf("/") == Number){
				var aa = LPDDR;
				if(aa < 4400){
					ld4 = aa
				}
				else{
					ld5 = aa
				}
			}
		}
		this.max = max,
		this.freq = {
			D3:d3,
			D4:d4,
			D5:d5,
			LD4:ld4,
			LD5:ld5
		},
		this.way = way,
		this.bandwidth = bandwidth,
		this.ECC = ECC
	}
}
class Cpu{
	constructor(a1 , a2 , b1 , b2 , b3 , b4 , c1 , c2 , c3 , c4 , c5 , c6 , GPU , highest , units , pack , temp){
		var aa = "",ab = "";
		if(highest != "/"){
			if(typeof(highest) == "string"){
				aa = front(highest),ab = back(highest);
			}
			else{
				ab = highest
			}
		}
		this.basic = new Basic(a1 , a2),
		this.perfor = new Perfor(b1 , b2 , b3 , b4),
		this.memory = new Memory(c1 , c2 , c3 , c4 , c5 , c6),
		this.GPU = {
			type:GPU,
			basic:aa,
			highest:ab,
			units:units
		},
		this.package = pack,
		this.temp = temp
	}
}
var Y = "Enabled",N = "Disabled";
var intel_7 = "intel_7 10nm";
var Ald = "Alder Lake",Rap = "Raptor Lake",Ivy = "Ivy Bridge",Gem = "Gemini Lake";
var Jas = "Jasper Lake",Ice = "Ice Lake",Sky = "Skylake",San = "Sandy Bridge",Has = "Haswel";
var Bro = "Broadwell",Yor ="Yorkfield",Lyn = "Lynnfield",Wes = "Westmere",Neh = "Nehalem",Com = "Comet Lake";
var Roc = "Rocket Lake",Cas = "CasCade Lake",Sap = "Sapphire Rapis";
var GPU = {
	H_600:new Gpu(600 , 0.25 , 4 , "7680*4320" , 12),
	U_P630:new Gpu("UHD P630" , 0.35 , 3 , "4096*2304" , "/"),
	U_P750:new Gpu("UHD P750" , 0.35 , 3 , "5120*3200" , 32),
	U_710:new Gpu(710 , 0.3 , 3 , "4096*2160" , 16),
	U_730:new Gpu(730 , 0.3 , 4 , "7680*4320" , 24),
	U_770:new Gpu(770 , 0.3 , 4 , "7680*4320" , 32),
	HD:new Gpu("HD" , "/" , 3 , "/" , "/"),
	UHD4k:new Gpu("UHD4k" , "/" , 4 , "4096*2304" , "/"),
	UHD:new Gpu("UHD" , "/" , 4 , "/" , "/"),
	Iris_Xe:new Gpu("Iris_Xe" , "/" , 4 , "/" , "/"),
}
var package = {
	LGA:{
		type:"LGA",
		"775":new Pack(775 , "/"),
		"1150":new Pack(1150 , "37.5*37.5"),
		"1155":new Pack(1155 , "37.5*37.5"),
		"1156":new Pack(1156 , "37.5*37.5"),
		"1200":new Pack(1200 , "37.5*37.5"),
		"1366":new Pack(1366 , "42.5*45"),
		"1700":new Pack(1700 , "45*37.5"),
		"2011_1":new Pack(2011 , "52.5*45.0"),
		"2011_2":new Pack(2011 , "52.5*51"),
		"2011_3":new Pack(2011 , "52*45"),
		"2066":new Pack(2066 , "52.5*45"),
		"3647":new Pack(3647 , "76*56.5"),
		"4189":new Pack(4189 , "77.5*56.5"),
		"4677":new Pack(4677 , "77.5*56.5")
	},
	BGA:{
		type:"BGA",
		"1090":new Pack(1090 , "25*24"),
		"1338":new Pack(1338 , "35*24"),
		"1744":new Pack(1744 , "50*24"),
		"1964":new Pack(1964 , "45*37.5"),
		"2227":new Pack(2227 ,"45*45"),
		"2518":new Pack(2518 , "/"),
		"2579":new Pack(2579 , "52.5*45")
	}
}
var ca = package,cb = ca.LGA,cc = ca.BGA;
var cpu = {
	intel:{
		Core:{
			desktop:{
				"13th":{
					basic:new Basic(intel_7 , "Q1_23"),
					package:cb[1700],
					i3_13100:{},
					i5_13400:{},
					i5_13490F:{},
					i5_13500:{},
					i5_13600:new Cpu("/" , "/" , 11.5 , 24 , 65 , 154 , 128 , "3200/4800" , "/" , 2 , 76.8 , Y , "U_770" , 1.55 , "/" , "/" , "/"),
					i5_13600K:{},
					i7_13700:{},
					i7_13700K:{},
					i7_13790F:{},
					i9_13900:{},
					i9_13900K:{},
					i9_13900KS:{}
				},
			},
			laptop:{
				"13th":{
					basic:{},
					package:{
						H:{},
						HX:{},
					},
					i5_13420H:{},
					i5_13500H:{},
					i5_13600H:{},
					i7_13620H:{},
					i7_13700H:{},
					i7_13800H:{},
					i9_13900H:{},
					i5_13450HX:{},
					i5_13500HX:{},
					i5_13600HX:{},
					i7_13650HX:{},
					i7_13700HX:{},
					i7_13850HX:{},
					i9_13900HX:{},
					i9_13950HX:{},
					i9_13980HX:{}
				},
			}
		},
		Pentium:{
			G2030T:new Cpu(22 , "Q2_13" , "/" , 3 , 35 , "/" , 32 , 1600 , "/" , 2 , 21 , Y , "HD" , "0.65/1.05" , "/" , cb[ 1155] , "/"),
			G7400:new Cpu(10 , "Q1_22" , "/" , 6 , 46 , "/" , 128 , "3200/4800" , "/" , 2 , 76.8 , "/" , "U_710" , 1.35 , 16 , cb[1700] , 100),
		},
		Celeron:{
			J4125:new Cpu(14 , "Q4_19" , "/" , 4 , 10 , "/" , 8 , 2400 , "/" , 2 , "/" , N , "H_600" , 0.75 , "/" , cc[1090] , 105),
			N5105:new Cpu(10 , "Q1_21" , "/" , 4 , 10 , "/" , 16 , 2933 , "/" , 2 , "/" , N , "UHD4k" , "0.45/0.8" , 24 , cc[1338] , 105)
		},
		Xeon:{
			D_1748TE:new Cpu(10 , "Q1_22" , "/" , 15 , 65 , "/" , 256 , 2400 , "/" , 2 , "/" , Y , "/" , "/" , "/" , cc[2227] , "/"),
			D_2177NT:new Cpu(14 , "Q1_18" , "/" , 19 , 105 , "/" , 512 , 2667 , "/" , 4 , "/" , Y , "/" , "/" , "/" , cc[2518] , "/"),
			D_2738:new Cpu(10 , "Q1_22" , "/" , 15 , 88 , "/" , 1024 , 2933 , "/" , 4 , "/" , Y , "/" , "/" , "/" , cc[2579] , "/" ),
			D_2776NT:new Cpu(10 , "Q1_22" , "/" , 25 , 117 , "/" , 1024 , 2933 , "/" , 4 , "/" , Y , "/" , "/" , "/" , cc[2579] , "/"),
			D_2799:new Cpu(10 , "Q1_22" , "/" , 30 , 129 , "/" , 1024 , 3200 , "/" , 4 , "/" , Y , "/" , "/" , "/" , cc[2579] , "/"),
			E3_1240:new Cpu(32 , "Q2_11" , "/" , 8 , 80 , "/" , 32 , 1333 , "/" , 2 , 31 , Y , "/" , "/" , "/" , cb[1155] , 69.1),
			E3_1245v2:new Cpu(22 , "Q2_12" , "/" , 8 , 77 , "/" , 32 , 1600 , "/" , 2 , 25.6 , Y , "HD" , "0.65/1.25" , "/" , cb[1155] , "/"),
			E3_1290v2:new Cpu(22 , "Q2_12" , "/" , 8 , 87 , "/" , 32 , 1600 , "/" , 2 , 25.6 , Y , "/" , "/" , "/" , cb[1155] , "/"),
			E3_1280v3:new Cpu(22 , "Q2_13" , "/" ,  8 , 82 , "/" , 32 , 1600 , "/" , 2 , 25.6 , Y , "/" , "/" , "/" , cb[1150] , "/"),
			E5_2643:new Cpu(32 , "Q1_12" , "/" , 10 ,130 , "/" , 384 , 1600 , "/" , 4 , 51.2 , Y , "/" , "/" , "/" , cb["2011_1"] , 73.0),
			E5_2650v2:new Cpu(22 , "Q3_13" , "/" , 20 , 95 , "/" , 768 , 1866 , "/" , 4 , 59.7 , Y , "/" , "/" , "/" , cb["2011_1"] , 75),
			E5_2660v3:new Cpu(22 , "Q3_14" , "/" , 25 , 105 , "/" , 768 , 2133 , "/" , 4 , 68 , Y , "/" , "/" , "/" , cb["2011_2"] , 79),
			E5_2696v4:new Cpu(14 , "Q2_16" , "/" , 55 , 145 , "/" , 1536 , 2400 , "/" , 4 , "/" , Y , "/" , "/" , "/" , cb["2011_1"] , "/"),
			E7_4850v2:new Cpu(22 , "Q1_14" , "/" , 24 , 105 , "/" , 1536 , 1600 , "/" , 4 , 68 , Y , "/" , "/" , "/" , cb["2011_3"] , 68),
			E7_8880v4:new Cpu(14 , "Q2_16" , "/" , 55 , 150 , "/" , 3072 , 1866 , "/" , 4 , 85 , Y , "/" , "/" , "/"  , cb["2011_1"] , 77),
			X_3320:new Cpu(45 , "Q1_08" , "/" , 6 , 95 , "/" , "/" , 1333 , "/" , "/" , "/" , "/" , "/" , "/" , "/" , cb[775] , 71.4),
			X_3460:new Cpu(45 , "Q3_09" , "/" , 8 , 95 , "/" , 32 , 1333 , "/" , 2 , 21 , Y , "/" , "/" , "/" , cb[1156] , 72.7),
			X_5647:new Cpu(32 , "Q1_11" , "/" , 12 , 130 , "/" , 288 , 1066 , "/" , 3 , 25.6 , Y , "/" , "/" , "/" , cb[1366] , 80.4),
			X_5675:new Cpu(32 , "Q1_11" , "/" , 12 , 95 , "/" , 288 , 1333 , "/" , 3 , 32 , Y , "/" , "/" , "/" , cb[1366] , 81.3),
			X_5690:new Cpu(32 , "Q1_11" , "/" , 12 , 130 , "/" , 288 , 1333 , "/" , 3 , 32 , Y , "/" , "/" , "/" , cb[1366] , 78.5),
			W_1250:new Cpu(14 , "Q2_20" , "/" , 12 , 80 , "/" , 128 , 2666 , "/" , 2 , 41.6 , Y , "U_P630" , 1.2 , "/" , cb[1200] , "/"),
			W_1290P:new Cpu(14 , "Q2_20" , "/" , 20 , 125 , "/" , 128 , 2933 , "/", 2 , 45.8 , Y , "U_P630" , 1.2 , "/" , cb[1200] , "/"),
			W_1350:new Cpu(14 , "Q2_21" , "/" , 12 , 80 , "/" , 128 , 3200 , "/" , 2 , 50 , Y , "U_P750" , 1.3 , "/" , cb[1200] , "/"),
			W_2123:new Cpu(14 , "Q3_17" , "/" , 8.25 , 120 , "/" , 512 , 2666 , "/" , 4 , 85.3 , Y , "/" , "/" , "/" , cb[2066] , 65),
			W_2195:new Cpu(14 , "Q3_17" , "/" , 24.75 , 140 , "/" , 512 , 2666 , "/" , 4 , 85.3 , Y , "/" , "/" , "/" , cb[2066] , 66),
			W_2245:new Cpu(14 , "Q4_19" , "/" , 16.5 , 155 , "/" , 1024 , 2933 , "/" , 4 , 93.85 , Y , "/" , "/" , "/" , cb[2066] , 59),
			W_3265:new Cpu(14 , "Q2_19" , "/" , 33 , 205 , "/" , 1024 , 2933 , "/" , 6 , "/" , Y , "/" , "/" , "/" , cb[3647] , 78),
			W_3245:new Cpu(14 , "Q2_19" , "/" , 22 , 205 , "/" , 1024 , 2933 , "/" , 6 , "/" , Y , "/" , "/" , "/" , cb[3647] , 77),
			W_3365:new Cpu(10 , "Q3_21" , "/" ,48 ,  270 , "/" , 4096 , 3200 , "/" , 8 , "/" , Y , "/" , "/" , "/" , cb[4189] , 77),
			W_3670:new Cpu(32 , "Q3_10" , "/" , 12 , 130 , "/" , 24 , 1066 , "/" , 3 , 25.6 , Y , "/" , "/" , "/" , cb[1366] , 67.9),
			W3_2423:new Cpu(10 , "Q1_23" , "/" , 15 , 120 , 144 , 2048 , 4400 , "/" , 4 , "/" , Y , "/" , "/" , "/" , cb[4677] , 62),
			W3_2425:new Cpu(10 , "Q1_23" , "/" , 15 , 130 , 156 , 2048 , 4400 , "/" , 4 , "/" , Y , "/" , "/" , "/" , cb[4677] , 64),
			W3_2435:new Cpu(10 , "Q1_23" , "/" , 22.5 , 165 , 198 , 2048 , 4400 , "/" , 4 , "/" , Y , "/" , "/" , "/" , cb[4677] , 70),
			W5_2445:new Cpu(10 , "Q1_23" , "/" , 26.25 , 175 , 210 , 2048 , 4800 , "/" , 4 , "/" , Y , "/" , "/" , "/" , cb[4677] , 72),
			W5_2455X:new Cpu(10 , "Q1_23" , "/" , 30 , 200 , 240 , 2048 , 4800 , "/" , 4 , "/" , Y , "/" , "/" , "/" , cb[4677] , 77),
			W5_2465X:new Cpu(10 , "Q1_23" , "/" , 33.75 , 200 , 240 , 2048 , 4800 , "/" , 4 , "/" , Y , "/" , "/" , "/" , cb[4677] , 78),
			W7_2475X:new Cpu(10 , "Q1_23" , "/" , 37.5 , 225 , 270 , 2048 , 4800 , "/" , 4  ,"/" , Y , "/" , "/" , "/" , cb[4677] , 76),
			W7_2495X:new Cpu(10 , "Q1_23" , "/" , 45 , 225 , 270 , 2048 , 4800 , "/" , 4 , "/" , Y , "/" , "/" , "/" , cb[4677] , 77),
			W5_3425:new Cpu(10 , "Q1_23" , "/" , 30 , 270 , 324 , 4096 , 4800 , "/" , 8 , "/" , Y , "/" , "/" , "/" , cb[4677] , 72),
			W5_3435X:new Cpu(10 , "Q1_23" , "/" , 45 , 270, 324 , 4096 , 4800 , "/" , 8 , "/" , Y , "/" , "/" , "/", cb[4677] , 72),
			W7_3445:new Cpu(10 , "Q1_23" , "/" , 52.5 , 270 , 324 , 4096 , 4800 , "/" , 8 , "/" , Y , "/" , "/" , "/" , cb[4677] , 72),
			W7_3455:new Cpu(10  ,"Q1_23" , "/" , 67.5 , 270 , 324 , 4096 , 4800 , "/" , 8 , "/" , Y , "/" , "/" , "/" , cb[4677] , 72),
			W7_3465X:new Cpu(10 , "Q1_23" , "/" , 75 , 200 , 260 , 4096 , 4800 , "/" , 8 , "/" , Y , "/" , "/" , "/" , cb[4677] , 75),
			W9_3475X:new Cpu(10 , "Q1_23" , "/" , 82.5 , 300 , 360 , 4096 , 4800 , "/" , 8 , "/" , Y , "/" , "/" , "/" , cb[4677] , 74),
			W9_3495X:new Cpu(10 , "Q1_23" , "/" , 105 , 350 , 420 , 4096 , 4800 , "/" , 8 , "/" , Y , "/" , "/" , "/" , cb[4677] , 81),
			Gold:{
				"5416S":new Cpu(10 , "Q1_23" , "/" , 30 , 150 , "/" , 4096 , 4400 , "/" , 8 , "/" , Y , "/" , "/" , "/" , cb[4677] , 79),
				"5420+":new Cpu(10 , "Q1_23" , "/" , 52.5 , 205 , "/" , 4096 , 4400 , "/" , 8 , "/" , Y , "/" , "/" , "/" , cb[4677] , 84),
				"6434H":new Cpu(10 , "Q1_23" , "/" , 22.5 , 195 , "/" , 4096 , 4800 , "/" , 8 , "/" , Y , "/" , "/" , "/" , cb[4677] , 64),
			},
			Platinum:{
				"8160":new Cpu(14 , "Q3_17" , "/" , 33 , 150 , "/" , 768 , 2666 , "/" , 6 , "/" , Y , "/" , "/" , "/" , cb[3647] , 85),
				"8280":new Cpu(14 , "Q2_19" , "/" , 38.5 , 205 , "/" , 1024 , 2933 , "/" , 6 , "/" , Y , "/" , "/" , "/" , cb[3647] , 84),
				"8380":new Cpu(10 , "Q2_21" , "/" , 60 , 270 , "/" , 6144 , 3200 , "/", 8 , "/" , Y , "/" , "/" , "/" , cb[4189] , 83),
				"8460Y+":new Cpu(10 , "Q1_23" , "/" , 105 , 300 , "/" , 4096 , 4800 , "/" , 8 , "/" , Y , "/" , "/" , "/" , cb[4677] , 76),
				"8480+":new Cpu(10 , "Q1_23" , "/" , 105 , 350 , "/" , 4096 , 4800 , "/" , 8 , "/" , Y , "/" , "/" , "/" , cb[4677] , 79),
				"8490H":new Cpu(10 , "Q1_23" , "/" , 112.5 , 350 , "/" , 4096 , 4800 , "/" , 8 , "/" , Y , "/" , "/" , "/" , cb[4677] , 79),
				"9242":new Cpu(14 , "Q2_19" , "/" , 71.5 , 350 , "/" , "/" , 2933 , "/" , 12 , "/" , Y , "/" , "/" , "/" , "/" , "/"),
			}
		}
	}
}
var aa = cpu.intel,ab = aa.Core.desktop["13th"],ac = aa.Core.laptop["13th"];
var ad = aa.Pentium,ae = aa.Celeron,af = aa.Xeon,ag = af.Gold,ah = af.Platinum;
for(var i in ab){
	if(i != "basic" & i != "package"){
		ab[i].basic = ab.basic;
		ab[i].package = ab.package
	}
}
ab.i5_13600.perfor.p = new Core(Ald , 2 , 6 , 2.7 , 5.0);
ab.i5_13600.perfor.e = new Core(Ald , 1 , 8 , 2.0 , 3.7);
ad.G2030T.perfor.p = new Core(Ivy , 1 , 2 , 2.6 , "/");
ad.G7400.perfor.p = new Core(Ald , 2 , 2 , 3.7 , "/");
ae.J4125.perfor.p = new Core(Gem , 1 , 4 , 2.0 , 2.7);
ae.N5105.perfor.p = new Core(Jas , 1 , 4 , 2.0 , 2.9);
af.D_1748TE.perfor.p = new Core(Ice , 2 , 10 , 2.5 , 3.4);
af.D_2177NT.perfor.p = new Core(Sky , 2 , 14 , 1.9 , 3.0);
af.D_2738.perfor.p = new Core(Ice , 2 , 8 , 2.5 , 3.5);
af.D_2776NT.perfor.p = new Core(Ice , 2 , 16 , 2.1 , 3.2);
af.D_2799.perfor.p = new Core(Ice , 2 , 20 , 2.1 , 3.4);
af.E3_1240.perfor.p = new Core(San , 2 , 4 , 3.3 , 3.7);
af.E3_1245v2.perfor.p = new Core(Ivy , 2 , 4 , 3.4 , 3.8);
af.E3_1290v2.perfor.p = new Core(Ivy , 2 , 4 , 3.7 , 4.1);
af.E3_1280v3.perfor.p = new Core(Has , 2 , 4 , 3.6 , 4.0);
af.E5_2643.perfor.p = new Core(San , 4 , 8 , 3.3 , 3.5);
af.E5_2650v2.perfor.p = new Core(Ivy , 2 , 8 , 2.6 , 3.4);
af.E5_2660v3.perfor.p = new Core(Has , 2 , 10 , 2.6 , 3.3);
af.E5_2696v4.perfor.p = new Core(Bro , 2 , 22 , 2.2 , 3.6);
af.E7_4850v2.perfor.p = new Core(Ivy , 2 , 12 , 2.3 , 2.8);
af.E7_8880v4.perfor.p = new Core(Bro , 2 , 22 , 2.2 , 3.3);
af.X_3320.perfor.p = new Core(Yor , 1 , 4 , 2.5 , "/");
af.X_3460.perfor.p = new Core(Lyn , 2 , 4 , 2.8 , 3.46);
af.X_5647.perfor.p = new Core(Wes , 2 , 4 , 2.93 , 3.2);
af.X_5675.perfor.p = new Core(Wes , 2 , 6 , 3.06 , 3.46);
af.X_5690.perfor.p = new Core(Wes , 2 , 6 , 3.46 , 3.73);
af.W_1250.perfor.p = new Core(Com , 2 , 6 , 3.3 , 4.7);
af.W_1290P.perfor.p = new Core(Com , 2 , 10 , 3.7 , 5.3);
af.W_1350.perfor.p = new Core(Roc , 2 , 6 , 3.3 , 5.0);
af.W_2123.perfor.p = new Core(Sky , 2 , 4 , 3.6 , 3.9 );
af.W_2195.perfor.p = new Core(Sky , 2 , 18 , 2.3 , 4.3);
af.W_2245.perfor.p = new Core(Cas , 2 , 8 , 3.9 , 4.7);
af.W_3265.perfor.p = new Core(Cas , 2 , 24 , 2.7 , 4.6);
af.W_3245.perfor.p = new Core(Cas , 2 , 16 , 3.2 , 4.6);
af.W_3365.perfor.p = new Core(Ice , 2 , 32 , 2.7 , 4.0);
af.W_3670.perfor.p = new Core(Wes , 2 , 6 , 3.2 , 3.46);
af.W3_2423.perfor.p = new Core(Sap , 2 , 6 , 2.1 , 4.2);
af.W3_2425.perfor.p = new Core(Sap , 2 , 6 , 2.0 , 4.4);
af.W3_2435.perfor.p = new Core(Sap , 2 , 8 , 3.1 , 4.5);
af.W5_2445.perfor.p = new Core(Sap , 2 , 10 , 3.1 , 4.6);
af.W5_2455X.perfor.p = new Core(Sap , 2 , 12 , 3.2 , 4.6);
af.W5_2465X.perfor.p = new Core(Sap , 2 , 16 , 3.1 , 4.7);
af.W7_2475X.perfor.p = new Core(Sap , 2 , 20 , 2.6 , 4.8);
af.W7_2495X.perfor.p = new Core(Sap , 2 , 24 , 2.5 , 4.8);
af.W5_3425.perfor.p = new Core(Sap , 2 , 12 , 3.2 , 4.6);
af.W5_3435X.perfor.p = new Core(Sap , 2 , 16 , 3.1 , 4.7);
af.W7_3445.perfor.p = new Core(Sap , 2 , 20 , 2.6 , 4.8);
af.W7_3455.perfor.p = new Core(Sap , 2 , 24 , 2.5 , 4.8);
af.W7_3465X.perfor.p = new Core(Sap , 2 , 28 , 2.5 , 4.8);
af.W9_3475X.perfor.p = new Core(Sap , 2 , 36 , 2.2 , 4.8);
af.W9_3495X.perfor.p = new Core(Sap , 2 , 56 , 1.9 , 4.8);
ag["5416S"].perfor.p = new Core(Sap  , 2 , 16 , 2.0 , 4.0);
ag["5420+"].perfor.p = new Core(Sap , 2 , 28 , 2.0 , 4.1);
ag["6434H"].perfor.p = new Core(Sap , 2 , 8 , 3.7 , 4.1);
ah[8160].perfor.p = new Core(Sky , 2 , 24 , 2.1 , 3.7);
ah[8280].perforp = new Core(Cas , 2 , 28 , 2.7 , 4.0);
ah[8380].perfor.p = new Core(Ice , 2 , 40 , 2.3 , 3.4);
ah["8460Y+"].perforp = new Core(Sap , 2 , 40 , 2.0 , 3.7);
ah["8480+"].perfor.p = new Core(Sap , 2 , 56 , 2.0 , 3.8);
ah["8490H"].perfor.p = new Core(Sap , 2 , 60 , 1.9 , 3.5);
ah[9242].perfor.p = new Core(Cas , 2 , 48 , 2.3 , 3.8);
function Output(){
	var arr1 = [],d_ = inputcpu,da = {};
	var obj_ = {
		"1":ab,
		"2":ac,
		"3":ad,
		"4":ae,
		"5":af,
		"6":ag,
		"7":ah
	}
	for(var obj1 in obj_){
		for(var obj2 in obj_[obj1]){
			if(obj_[obj1][obj2] == obj_[obj1][d_]){
				// da = obj_[obj1][d_]
			}
		}
	}
	da = d_;
	arr1[0] = d_;
	arr1[1] = "basic:";
	var db = da.basic;
	var db1 = db.tech;
	if(db1 == Number){
		db1 += "nm"
	}
	arr1[2] = "tech: " + db1 + "nm";
	arr1[3] = "published-time: " + db.publi;
	var dc = da.perfor,dd = dc.p,de = dc.e;
	if(de == undefined){
		df = dd.quan + "+0" + "/" + dd.allthr
	}
	else{
		df = dd.quan + "+" + de.quan	 + "/" + (dd.allthr + de.allthr)
	}
	arr1[4] = "cores: " + df;
	var dd1 = dd.basic;
	if(dd1 == "/"){
		dd1 = " "
	}
	arr1[5] = "P-cores: " + dd.name + " " + dd1 + "~" + dd.highest + "GHz";
	if(de == undefined){
		arr1[6] = ""
	}
	else{
		var de1 = de.basic;
		if(de1 == "/"){
			de1 = " "
		}
		arr1[6] = "E-cores: " + de.name + " " + de1 + "~" + de.highest + "GHz";
	}
	if(dc.L2 == "/"){
		arr1[7] = "cache:" + "  " + "/" + dc.L3
	}
	else{
		arr1[7] = "cache:" + " " + dc.L2 + "/" + dc.L3;
	}
	if(dc.accel_power == "/"){
		arr1[8] = "power:" + " " + dc.TDP + "/" + " "
	}
	else{
		arr1[8] = "power:" + " " +  dc.TDP + "/" + dc.accel_power;
	}
	arr1[9] = "memory:";
	var dg = da.memory,dh = dg.freq;
	var dh1 = "";
	if(dh.D3 != undefined && dh.D3 != ""){
		dh1 += "D3: " + dh.D3 + "MHz "
	}
	if(dh.D4 != undefined && dh.D4 != ""){
		dh1 += "D4: " + dh.D4 + "MHz "
	}
	if(dh.D5 != undefined && dh.D5 != ""){
		dh1 += "D5: " + dh.D5 + "MHz "
	}
	if(dh.LD4 != undefined && dh.LD4!= ""){
		dh1 += "LD4: " + dh.LD4 + "MHz "
	}
	if(dh.LD5 != undefined && dh.LD5 != ""){
		dh1 += "LD5: " + dh.LD5 + "MHz "
	}
	var dg1 = dg.max + "GB";
	if(dg.max >= 1024){
		dg1 = dg.max / 1024 + "TB"
	}
	arr1[10] = "max: " + dg1 + " " + dh1 + dg.way + " ways";
	if(dg.bandwidth != "/"){
		arr1[11] = "bandwidth: " + dg.bandwidth + "GB/s";
	}
	arr1[12] = "ECC: " + dg.ECC;
	var dj = GPU[da.GPU.type],di = da.GPU,dj1 = "",dj2 = "",dj3 = "";
	if(di.type != "/"){
		dj2 = (di.basic == "") ? ((dj.basic = "/") ? " " : dj.basic) : di.basic;
		dj3 = (di.units == "") ? dj.units : di.units;
		(dj3 == "/") ? (dj3 = "") : (dj3 += "EU");
		if(typeof(dj.type) == "number"){
			if(dj.type > 600){
				dj1 = "UHD" + dj.type
			}
			if(dj.type <= 600){
				dj1 = "HD" + dj.type
			}
			arr1[13] = "GPU: " + dj1 + " " + dj2 + "~" + di.highest + "GHz " + dj3;
		}
		else{
			dj1 = dj.type;
			arr1[13] = "GPU: " + dj1 + " " + dj2 + "~" + di.highest + "GHz " + dj3;
		}
		if(dj.RES !="/"){
			arr1[14] = "RES: " + dj.RES;
		}
		arr1[15] = "monitor: " + dj.monitor
	}
	var dk = da.package;
	if(dk == undefined){
		for(var obj1 in ab){
			if(da == ab[obj1]){
				dk = ab.package
			}
		}
		if(dk == undefined){
			for(obj1 in ac){
				if(da == ac[obj1]){
					dk = ac.package[da.type]
				}
			}
		}
	}
	for(var obj1 in ca){
		for(var obj2 in ca[obj1]){
			if(ca[obj1][obj2] == dk){
				dk1 = ca[obj1].type  + " " + dk.slot
			}
		}
	}
	arr1[16] = "package: " + dk1 + " " + dk.size + "mm";
	var da1 = da.temp;
	if(da1 != undefined && da1 != "/"){
		arr1[17] = "temp: " + da1 + "℃";
	}
	var str1 = "";
	for(var i = 0;i < arr1.length;i += 1){
		if(arr1[i] != "" && arr1[i] != undefined){
			str1 += (arr1[i] +"\n")
		}
	}
	str1 += "\n";
	console.log(str1)
}
var input = {
	"1":ad,
	"2":ae
}
var arr2 = ["W_1250" , "W_1290P" , "W9_3475X"];
// for(var i = 0;i < arr2.length;i += 1){
for(var obj1 in input){
	for(var obj2 in input[obj1]){
	// var inputcpu = arr2[i];
	var inputcpu = input[obj1][obj2];
	Output()
	// console.log(ab.i7_13700.toString)
	}
}
// console.log(ad.G7400)
