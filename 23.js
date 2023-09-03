var pi = 3.1415926535897932384626433832795028841971;
var e = 2.7182818284590452353602874713526624977572;
// lim(x→+∞) ∫(x , 0) sin(π / (x + t)) dt
function a1(a , x){
	function b1(t){
		var aa = pi / (x + t);
		var ab = Math.sin(aa);
		return ab
	}
	// 精确度
	var ac = 10 ** -a;
	var ad = 10 ** a;
	var ae = Math.abs(x - 0) * ad;
	var ag = 0;
	for(var i = 0;i <= ae;i = i + 1){
		var af = ac * Math.abs(b1(0 + i * ac));
		//af小面积
		ag = ag + af;
		// console.log(af)
	}
	console.log(ag)
}
a1(3 , 9999)