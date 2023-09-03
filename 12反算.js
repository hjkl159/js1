var pi = 3.1415926535897932384626433832795028841971;
var e = 2.7182818284590452353602874713526624977572;
// lim(x→0) (x + 1)^(x^(-1)) - e + (ex)/2
// 										/ x^(2)
// 反算
function f(a){
	var aa = a ** -1;
	var ab = (a + 1) ** aa;
	var ac = (e * a) / 2;
	var ad = a ** 2;
	var sum1 = (ab - e + ac) / ad;
	return sum1
}
function a(b , z1 , z2 , y){
	// x定义域[z1 , z2]
	var i = 0;
	var arr1 = [];
	var arr2 = [];
	for(var x = z1;x <= z2;x = x + 10 ** -b){
		i = i +1;
		var ae = 10 ** b;
		x = Math.round(x * ae) / ae;
		// x f(x) y 
		var af = Math.abs(f(x) - y);
		arr1[i] = x;
		arr2[i] = af;
		// console.log(x , af)
	}
	var sum2 = 1;
	for(var c = 0;c < arr2.length;c = c + 1){
		if(sum2 > arr2[c]){
			sum2 = arr2[c];
			var sum3 = arr1[c];
			}
		// console.log(c)
	}
	console.log("(" + sum3 + "," + f(sum3) + ")")
}
a(5 , -0.99999 , 0 , 100)