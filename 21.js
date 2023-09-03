var pi = 3.1415926535897932384626433832795028841971;
var e = 2.7182818284590452353602874713526624977572;
// lim(n→∞) n^(-2) * [Σ(n , k = 1) k * ln(n + k)] - ((n + 1) / 2n) * ln(n)
function a(n){
	function b(k){
		var aa = k * Math.log(n + k);
		return aa
	}
	var ab = 0;
	for(var k = 1;k <= n;k = k + 1){
		ab = ab + b(k)
	}
	var ac = (n ** -2) * ab;
	function c(x){
		var ad = (n + 1) / (2 * n);
		var ae = Math.log(n);
		var af = ad * ae;
		return af
	}
	var sum1 = ac - c(n);
	console.log(sum1)
}
a(9999)