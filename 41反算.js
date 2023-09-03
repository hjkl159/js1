var pi = 3.1415926535897932384626433832795028841971;
var e = 2.7182818284590452353602874713526624977572;
// [x  sinx * arctan(e^(x))] / (1 + cos^(2)(x))
function a1(a){
	var aa = a * Math.sin(a) * Math.atan(e ** a);
	var ab = 1 + Math.cos(a) ** 2;
	var ac = aa / ab;
	return ac
}
function b1(a , z1 , z2 , y){
	var aa = 10 ** -a,ab = 10 ** a;
	var ac = (z2 - z1) * ab,arr1 = [],b = 0;
	for(var i = 1;i <= ac;i += 1){
		var ad = z1 + aa * (i - 1);
		var ae = Math.round(ad * ab) / ab;
		var af = Math.abs(a1(ae) - y);
		if(af < 10 ** -2){
			arr1[b] = ae;
			b += 1
		}
	}
	console.log(b);
	var arr2 = [],arr3 = [];
	b = 0;
	for(var i = 1;i <= arr1.length;i += 1){
		if(arr1[i] - arr1[i - 1] < 10 ** -3){
			// 这些值对应的△y写入数组,求最值
			ag = Math.abs(a1(arr1[i - 1]) - y);
			arr2[b] = ag; // △y
			arr3[b] = arr1[i - 1]; 
			b += 1
		}
		else{
			var ah = arr2[0];
			for(var c = 0;c < arr2.length;c += 1){
				if(ah >= arr2[c]){
					ah = arr2[c];
					var ai = arr3[c]
				}
			}
			console.log("(" + ai + "," + y + ")");
			// console.log(b , c)
			b = 0;
			arr2 = [];
			arr3 = [];
		}
	}
}
b1(5 , 0 , 50 , 0)