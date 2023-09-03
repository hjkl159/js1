var pi = 3.1415926535897932384626433832795028841971;
var e = 2.7182818284590452353602874713526624977572;
// y = e^(x) / x^(2)
function F(x){
   var aa = e ** x;
   var ab = x ** 2;
   var sum1 = aa / ab;
   console.log(sum1)
}
// y = e^(x) / x^(2) 反算
function a(a ,z1, z2){
	var aa = 10 ** (-a);
	var ab =10 ** (a);
	for(var x = z1;x <= z2;x = x + aa){
	    x = Math.round(x * ab) / ab;
// 函数本体
		var ac = e ** x;
		var ad = x ** 2;
		var y = ac / ad;
	    if(y != 2){
			var ae = Math.abs(y - 2);
	    	console.log(x , ae);
		}
		else{
			console.log(x)
		}
	}
}
// x定义域[z1 , z2]
a(2 , -1 , 3)