// 打印圆

// 半圆

var aa = "",ab = "",ba = 0.125;

// 上半圆总行数bb

var bb = 1 / ba - 1 % ba;

function a1(a){

	var ac = (1 - (1 - ba * a) ** 2) ** (1 / 2);
	var ad = Math.round(ac * 10);

	var ae = (1 - (1 % ba + (bb - a) * ba) ** 2) ** (1 / 2);

	var af = Math.round(ae * 10);

	if(a <= bb){

		return ad

	}

	else{

		return af

	}

}

// 行数

for(var b = 1;b <= bb * 2;b += 1){

	aa = "";

	ab = "";

	for(var c = 1;c <= 2 * (a1(bb) - a1(b));c += 1){

		aa += " "

	}

	// *数

	for(var d = 1;d <= 2 * a1(b) * 2;d += 1){

		ab += "*"

	}

	console.log(aa , ab)

}
