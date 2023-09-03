// 打印"等边"三角形
var aa = "" , ab = "";
for(var a = 1;a <= 7;a++){
	aa = "";
	ab = "";
	for(var b = 3 * a;b < 7 * 3;b++){
		aa += " "
		// aa += "."
	}
	for(var c = 0;c < 4 * a - 3;c++){
		ab += "*";
	}
	console.log(aa , ab)
}