var N = "Disabled",Y = "Enabled"
class Core{
	constructor(type , clock , quan){
		this.type = type,
		this.clock = clock + "GHz",
		this.quan = quan
	}
}
function pixel(a){
	return (a + "million")
}
var phone_pad = {
	V30pro:null,
	M6:null,
	nova5pro:null,
	enjoy7:null
}
var obj1 = phone_pad;
obj1.V30pro = {
	manu:"HUAWEI",
	brand:"HONOR",
	name:"HONOR V30 Pro 5G",
	type:"OXF-AN10",
	size:{
		length:162.7,
		width:75.8,
		height:8.8
	},
	weight:206.0,
	SD:N,
	publi:"2019-11",
	safety:{
		finger:"right side",
		face:"2D",
		IP:N
	},
	SOC:{
		type:"kirin 990 5G",
		cores:8,
		CPU:{
			a:new Core("cortex-a76" , 2.86 , 2),
			b:new Core("cortex-a76" , 2.36 , 2),
			c:new Core("cortex-a55" , 1.95 , 4)
		},
		GPU:"Mali-G76 MP16",
	},
	screen:{
		RES:"1080*2400",
		material:"IPS LCD",
		fps:60
	},
	back_camera:{
		a:pixel(40),
		b:pixel(8),
		c:pixel(12),
		video:"4k 60fps"
	},
	front_camera:{
		a:pixel(32),
		b:pixel(8)
	},
	ear:"type-C",
	battery:{
		capa:"4100mAh",
		power:"40w",
		wl:"27w",
		wl_out:Y
	},
	network:{
		DN:"5G",
		interface:"type_C",
		WIFI:"2.4G+5G",
		blue:5.1,
		NFC:Y,
		infrared:N
	}
}
obj1.M6 = {
	manu:"HUAWEI",
	brand:"HUAWEⅠ",
	name:"HUAWEI MediaPad 10.8 WⅠFⅠ",
	type:"SCM-W09",
	size:{
		length:257,
		width:170,
		height:7.2
	},
	weight:498.0,
	SD:Y,
	publi:"2019-06",
	safety:{
		finger:"front",
		face:"2D",
		IP:N
	},
	SOC:{
		type:"kirin 980",
		cores:8,
		CPU:{
			a:new Core("cortex-a76" , 2.6 , 2),
			b:new Core("cortex-a76" , 1.92 , 2),
			c:new Core("cortex-a55" , 1.8 , 4)
		},
		GPU:"Mali-G76 MP10",
	},
	screen:{
		RES:"2560*1600",
		material:"IPS LCD",
		fps:60
	},
	back_camera:{
		a:pixel(13),
		video:"1080p 30fps"
	},
	front_camera:{
		a:pixel(8)
	},
	ear:"3.5mm",
	battery:{
		capa:"7500mAh",
		power:"18w",
		wl:N,
		wl_out:N
	},
	network:{
		DN:"WⅠFI",
		interface:"type-C",
		WIFI:"2.4G+5G",
		blue:5.0,
		NFC:N,
		infrared:N
	}
}
obj1.nova5pro = {
	manu:"HUAWEI",
	brand:"HUAWEⅠ",
	name:"HUAWEI nova 5 Pro",
	type:"SEA-AL10",
	size:{
		length:157.4,
		width:74.8,
		height:7.3
	},
	weight:171.0,
	SD:Y,
	publi:"2019-06",
	safety:{
		finger:"under screen",
		face:"2D",
		IP:N
	},
	SOC:{
		type:"kirin 980",
		cores:8,
		CPU:{
			a:new Core("cortex-a76" , 2.6 , 2),
			b:new Core("cortex-a76" , 1.92 , 2),
			c:new Core("cortex-a55" , 1.8 , 4)
		},
		GPU:"Mali-G76 MP10",
	},
	screen:{
		RES:"1080*2340",
		material:"OLED",
		fps:60
	},
	back_camera:{
		a:pixel(48),
		b:pixel(16),
		c:pixel(2),
		d:pixel(2),
		video:"4k 30fps"
	},
	front_camera:{
		a:pixel(32)
	},
	ear:"type-C",
	battery:{
		capa:"3500mAh",
		power:"40w",
		wl:N,
		wl_out:N
	},
	network:{
		DN:"4G",
		interface:"type-C",
		WIFI:"2.4G+5G",
		blue:5.0,
		NFC:Y,
		infrared:N
	}
}
obj1.enjoy7 = {
	manu:"HUAWEI",
	brand:"HUAWEⅠ",
	name:"HUAWEI Enjoy 7",
	type:"SLA-AL00",
	size:{
		length:143.5,
		width:71,
		height:8.1
	},
	weight:145.0,
	SD:Y,
	publi:"2017-07",
	safety:{
		finger:"back",
		face:"2D",
		IP:N
	},
	SOC:{
		type:"snapdragon 425",
		cores:4,
		CPU:{
			a:new Core("cortex-a53" , 1.4 , 4),
		},
		GPU:"Adreno 308",
	},
	screen:{
		RES:"720*1280",
		material:"IPS LCD",
		fps:60
	},
	back_camera:{
		a:pixel(13),
		video:"1080p 30fps"
	},
	front_camera:{
		a:pixel(5)
	},
	ear:"3.5mm",
	battery:{
		capa:"3020mAh",
		power:"5w",
		wl:N,
		wl_out:N
	},
	network:{
		DN:"4G",
		interface:"Micro-USB",
		WIFI:"2.4G",
		blue:4.1,
		NFC:N,
		infrared:N
	}
}
var arr1 = [],ac = "";
function Output(){
	// 数组arr1包含s1,s2… 循环输出arr[i]
	arr1[0] = ab.name;
	arr1[2] = "manufacturer:" + ab.manu;
	arr1[4] = "brand:" + ab.brand;
	arr1[6] = "type:" + ab.type;
	arr1[8] = "size:" + ab.size.length + "*" + ab.size.width + "*" + ab.size.height;
	arr1[10] = "weight:" + ab.weight + "g";
	var str1 = ab.weight.toString();
	if(str1.charAt(3) != "."){
		arr1[10] = "weight:" + str1 + ".0" + "g"
	}
	arr1[12] = "SDcard-extention:" + ab.SD;
	arr1[14] = "publish-time:" + ab.publi;
	arr1[16] = "safety:";
	var ab1 = ab.safety;
	arr1[18] = "fingerprint:" + ab1.finger;
	arr1[20] = "face-unlocker:" + ab1.face;
	arr1[22] = "lP-grade:" + ab1.IP;
	arr1[24] = "SOC:";
	var ab2 = ab.SOC;
	arr1[26] = "type:" + ab2.type;
	arr1[28] = "cores:" + ab2.cores;
	arr1[30] = "CPU:"
	var ab3 = ab2.CPU;
	arr1[32] = ab3.a.quan + "x" + " " + ab3.a.clock + " " + ab3.a.type;
	if(ab3.b != undefined){
		arr1[34] = ab3.b.quan + "x" + " " + ab3.b.clock + " " + ab3.b.type
	}
	else{
		arr1[34] = ""
	}
	if(ab3.c != undefined){
		arr1[34] += "\n" + ab3.c.quan + "x" + " " + ab3.c.clock + " " + ab3.c.type;
	}
	arr1[36] = "GPU:" + ab2.GPU;
	arr1[38] = "screen:"
	var ab4 = ab.screen;
	arr1[40] = "RES:" + ab4.RES;
	arr1[42] = "material:" + ab4.material;
	arr1[44] = "fps:" + ab4.fps + "Hz";
	arr1[46] = "back-camera:";
	var ab5 = ab.back_camera;
	arr1[48] = "camera1:" + ab5.a;
	if(ab5.b != undefined){
		arr1[48] += "\n" + "camera2:" + ab5.b
	}
	if(ab5.c != undefined){
		arr1[48] += "\n" + "camera3:" + ab5.c
	}
	if(ab5.d != undefined){
		arr1[48] += "\n" + "camera4:" + ab5.d
	}
	arr1[50] = "front_camera:";
	var ab6 = ab.front_camera;
	arr1[52] = "camera1:" + ab6.a;
	if(ab6.b != undefined){
		arr1[52] += "\n" + "camera2:" + ab6.b
	}
	if(ab6.c != undefined){
		arr1[52] += "\n" + "camera3:" + ab6.c
	}
	arr1[54] = "earphone:" + ab.ear;
	arr1[56] = "battery:";
	var ab7 = ab.battery;
	arr1[58] = "capacity:" + ab7.capa;
	arr1[60] = "power:" + ab7.power;
	arr1[62] = "wireless:" + ab7.wl;
	arr1[64] = "wireless-output:" + ab7.wl_out;
	arr1[66] = "network_connection:";
	var ab8 = ab.network;
	arr1[68] = "DN:" + ab8.DN;
	arr1[70] = "interface:" + ab8.interface;
	arr1[72] = "WIFI:" + ab8.WIFI;
	arr1[74] = "bluetooth:" + ab8.blue;
	arr1[76] = "NFC:" + ab8.NFC;
	arr1[78] = "infrared:" + ab8.infrared;
	for(var i = 1;i < arr1.length; i += 2){
		if(arr1[i - 1] != ""){
			arr1[i] = "\n"
		}
		else{
			arr1[i] = ""
		}
	}
	ac = "";
	for(var i = 0;i < arr1.length;i += 1){
		ac += arr1[i]
	}
	console.log(ac)
}
for(var i in phone_pad){
	var ab = phone_pad[i];
	Output();
	console.log("\n")
}


