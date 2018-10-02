window.onload = function() {
	var DivButton = document.querySelectorAll("#main_button div");
	var InputElement = document.querySelector("#main_input input");
	for(var i = 0; i < DivButton.length; i++) {
		var NumberButton = DivButton[i].innerText;
		if(!isNaN(NumberButton) || NumberButton == "." || NumberButton == "+" || NumberButton == "-" || NumberButton == "*" || NumberButton == "/") {
			DivButton[i].addEventListener("click", function(e) {
				if(InputElement.value == "存储器中无值") {
					InputElement.value = "";
				}
				InputElement.value += e.target.innerText;
				var LastNumber = InputElement.value.charAt(InputElement.value.length - 1);
				var LastTwoNumber = InputElement.value.charAt(InputElement.value.length - 2);
				if(isNaN(LastNumber)) {
					if(isNaN(LastTwoNumber)) {
						inputvaluebp();
					}
				}
				if(LastNumber == ".") {
					for(var i = InputElement.value.length - 2; i > 0; i--) {
						var Standard = InputElement.value.charAt(i);
						if(Standard == "+" || Standard == "-" || Standard == "*" || Standard == "/") {
							break;
						}
						if(InputElement.value.charAt(i) == ".") {
							bp();
							break;
						};
					};
				};
			});
		};
	};
};
var StoreInput = [];

/*存储*/
function store() {
	var InputElment = document.querySelector("#main_input input");
	StoreInput[StoreInput.length] = InputElment.value;
	console.log(StoreInput);
	InputElment.value = "";
}

/*存取*/
function getstore() {
	var InputValue = document.querySelector("#main_input input");
	if(StoreInput != "") {
		InputValue.value = StoreInput.pop();
	} else {
		InputValue.value = "存储器中无值";
	}
	console.log(StoreInput);
}

/*清除*/
function clearinput() {
	var InputElment = document.querySelector("#main_input input");
	InputElment.value = "";
}

/*退格*/
function bp() {
	var InputElement = document.querySelector("#main_input input");
	var back = "";
	if(InputElement.value == "存储器中无值") {
		InputElement.value = "";
	}
	for(var i = 0; i < InputElement.value.length - 1; i++) {
		back += InputElement.value.charAt(i);
	}
	InputElement.value = back;
}

/*运算*/
function eq() {
	var InputElment = document.querySelector("input");
	var inputvalue = InputElment.value;
	var Eq = [],
		j = 0;
	for(var i = 0; i < inputvalue.length; i++) {
		var InputValueCharat = inputvalue.charAt(i);
		if(InputValueCharat != "+" && InputValueCharat != "-" && InputValueCharat != "*" && InputValueCharat != "/") {
			if(Eq[j] == undefined) {
				Eq[j] = "";
			}
			Eq[j] += inputvalue.charAt(i);
		} else {
			j++;
			Eq[j] = inputvalue.charAt(i);
			j++;
		}
	}
	console.log(Eq)
	var EqTemporary = 0;
	for(var i = 0; i < Eq.length; i++) {
		if(Eq[i] == "*" || Eq[i] == "/") {
			if(Eq[i] == "/") {
				EqTemporary = Number(Eq[i - 1]) / Number(Eq[i + 1]);
				del(Eq, i, EqTemporary);
			}
			if(Eq[i] == "*") {
				EqTemporary = Number(Eq[i - 1]) * Number(Eq[i + 1]);
				del(Eq, i, EqTemporary);
			}
		}
	};
	var EqTemporaryArray = [],
		j = 0;
	for(var i = 0; i < Eq.length; i++) {
		if(Eq[i] != undefined) {
			EqTemporaryArray[j] = Eq[i];
			j++;
		}
	}
	Eq = EqTemporaryArray;
	for(var i = 0; i < Eq.length; i++) {
		if(Eq[i] == "+" || Eq[i] == "-") {
			if(Eq[i] == "-") {
				EqTemporary = Number(Eq[i - 1]) - Number(Eq[i + 1]);
				del(Eq, i, EqTemporary);
			}
			if(Eq[i] == "+") {
				EqTemporary = Number(Eq[i - 1]) + Number(Eq[i + 1]);
				del(Eq, i, EqTemporary);
			}
		}
	};
	var result = 0;
	for(var i = 0; i < Eq.length; i++) {
		if(Eq[i] != undefined) {
			result = Eq[i];
		}
	}
	console.log(Eq);
	minput.value = result;
}

/*运算符去重*/
function inputvaluebp() {
	var minput = document.querySelector("#main_input input");
	var minputtwo = minput.value.charAt(minput.value.length - 1);
	var Standard = "";
	for(var i = 0; i < minput.value.length - 2; i++) {
		Standard += minput.value.charAt(i);
	}
	Standard += minputtwo;
	minput.value = Standard;
}

/*运算删减*/
function del(Eq, i, EqTemporary) {
	delete Eq[i];
	delete Eq[i - 1];
	delete Eq[i + 1];
	Eq[i + 1] = EqTemporary;
}