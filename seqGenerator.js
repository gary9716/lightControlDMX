inlets = 1
outlets = 0


function list(value) {
	var myArray = arguments;
	var p = this.patcher;
	
	var a = p.newdefault(100, 100 + myArray[0] * 30,"ktCtrlerSingle", myArray[1], myArray[2], myArray[3]);
	var s = p.getnamed("lightValCtrler");
	if(s) p.connect(a,0,s,0);
}