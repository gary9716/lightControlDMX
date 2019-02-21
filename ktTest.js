
// inlets and outlets
inlets = 1;
outlets = 1;

// bang -- post the current population to the max window
function bang()
{
	post("test bang");
}

function list() {
	var myArray = arguments; 
	a = patcher.newdefault(122,90,"testList", myArray[0], myArray[1], myArray[2]);
}