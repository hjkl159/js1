var pi = 3.1415926535897932384626433832795028841971;
var e = 2.7182818284590452353602874713526624977572;
// (x * sin(ⅹ - 2)) / (x * (x - 1)(x - 2)^(2))
// f(x) = 0
function a1(a){
	var aa = a * Math.sin(a - 2);
	var ab = a * (a - 1) * (a - 2) ** 2;
	var ac = aa / ab;
	return ac
}
function b1(a , z1 , z2 , y){
	var aa = 10 ** -a,ab = 10 ** a;
	var ac = (z2 - z1) * ab,arr1 = [],b = 0;
	for(var i = 1;i <= ac;i += 1){
		var ad = z1 + aa * (i - 1);
		var ae = Math.round(ad * ab) / ab;
		var af = Math.abs(a1(ad) - y);
		if(af < 10 ** -2){
			arr1[b] = ae;
			b += 1
		}
	}
	for(var i = 0;i < arr1.length;i += 1){
		if(i == 0){
			console.log("(" + arr1[i] + "," + y + ")")
		}
		else{
			if(arr1[i] - arr1[i - 1] > 10 ** -3){
				console.log("(" + arr1[i] + "," + y + ")")
			}
		}
	}
	console.log(b)
}
b1(5 , -10 , 10 , -30)