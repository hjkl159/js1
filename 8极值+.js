// lim(x → 0) (x + 1)^(x^(-1)) - (1 + 2x)^((2x)^(-1))
//          								   / sin(x)
//   					反算
var pi = 3.1415926535897932384626433832795028841971;
var e = 2.7182818284590452353602874713526624977572;
function f(b){
	var ac = b ** -1;
	var sum1 = (b + 1) ** ac;
	return sum1
}
function a(a , z1 , z2){
	// x定义域[z1 . z2]
	var aa = 10 ** -a;
	var ab = 10 ** a;
	var i = -1;
	var arr1 = [];
	var arr2 = [];
	for(var x = z1;x <= z2;x = x + aa){
		i = i + 1;
		// 函数本体
		x = Math.round(x * ab) / ab;
		var x2 =2 * x;
		var ad = f(x) - f(x2);
		var sum2 = ad / Math.sin(x);
		// console.log(x , sum2)
		// console.log(i);
		arr1[i] = x;
		arr2[i] = sum2;
	}
	var sum3 = arr2[0];
	for(var c = 0;c < arr2.length;c = c + 1){
		if(sum3 > arr2[c]){
			sum3 = arr2[c];
			sum4 = arr1[c]
		}
	}
	console.log("(" + sum4 + "," + sum3 + ")")
}
a(5 , 1.7 , 1.73)
