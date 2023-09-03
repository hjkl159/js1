var pi = 3.1415926535897932384626433832795028841971;
var e = 2.7182818284590452353602874713526624977572;
// f(x) = ┊(x + 1)^(x^(-1)) - e + (ex)/2
// 	  	┊							/ x^(2)
// g(x) =┊ (x + 1)^(x^(-1)) - (1 + 2x)^((2x)^(-1))
//           ┊    					  / sin(x)
// h(x) = g(f(x)) 反算
function a(a){
	var aa = a ** -1;
	var sum1 = (a + 1) ** aa;
	return sum1
}
function g(b){
    var b2 = 2 * b;
	var ab = a(b) - a(b2);
	var ac = Math.sin(b);
	var sum2 = ab / ac;
	return sum2
}
function f(c){
	var ad = (e * c) / 2;
	var ae = c ** 2;
	var sum3 = (a(c) - e + ad) / ae;
	return sum3
}
function h(d){
	var sum4 = g(f(d));
	return sum4
}
function b(f , z1 , z2){
	// x定义域[z1 , z2]
	var i = -1;
	var arr1 = [];
	var arr2 = [];
	for(var x = z1;x <= z2;x = x + 10 ** -f){
		i = i + 1;
		var af = 10 ** f;
		x = Math.round(x * af) / af;
		arr1[i] = x;
		arr2[i] = h(x)
	}
	var sum5 = arr2[0];
	for(var g = 0;g < arr2.length;g = g + 1){
		if(sum5 > arr2[g]){
			sum5 = arr2[g];
			sum6 = arr1[g]
		}
	}
	console.log("(" + sum6 + "," + sum5 +")")
}
b(5 , -0.4 , -0.2)