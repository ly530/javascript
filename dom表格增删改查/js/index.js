/*生成表格*/
function generate() {
	var div = document.querySelectorAll("#tbl_button");
	var tbl = document.querySelectorAll("#tbl");
	tbl[0].children[0].innerHTML = "";
	var input = document.querySelectorAll("#tbl_button input");
	var inputvalue1 = Number(input[0].value);
	var inputvalue2 = Number(input[1].value);
	var newrow = [];
	for(var i = 0; i < inputvalue1; i++) {
		newrow[i] = document.createElement("tr");
		var newtd;
		for(var j = 0; j < inputvalue2; j++) {
			newtd = document.createElement("td");
			newrow[i].appendChild(newtd);
			newtd.innerHTML = i + 1 + ":" + (j + 1);
		}
		tbl[0].firstElementChild.appendChild(newrow[i])
	}
}
/*重新排序*/
function sort() {
	var tbl = document.querySelectorAll("#tbl");
	var trlength = document.querySelectorAll("#tbl>tbody");
	var sorttrsum = trlength[0].children.length;
	var sorttdsum = trlength[0].children[0].children.length;
	tbl[0].children[0].innerHTML = "";
	var newrow = [];
	for(var i = 0; i < sorttrsum; i++) {
		newrow[i] = document.createElement("tr");
		var newtd;
		for(var j = 0; j < sorttdsum; j++) {
			newtd = document.createElement("td");
			newrow[i].appendChild(newtd);
			newtd.innerHTML = i + 1 + ":" + (j + 1);
		}
		tbl[0].firstElementChild.appendChild(newrow[i])
	}
}
/*更改内容*/
function InnerTextAlter() {
	var inputdiv = document.querySelectorAll("#text_innerone div");
	var inputvalue = [];
	for(var i = 0; i < inputdiv.length - 1; i++) {
		inputvalue[i] = inputdiv[i].childNodes[1].value;
	}
	var tr = document.querySelectorAll("#tbl tr")
	var td = tr[inputvalue[0] - 1].children[inputvalue[1] - 1];
	td.innerText = inputvalue[2];
}

/*删除一行*/
function removerow() {
	/*获取输入内容*/
	var inputdiv = document.querySelectorAll("#text_innertwo>form>div");
	var a = [];
	for(var i = 0; i < inputdiv.length; i++) {
		a[i] = inputdiv[i].children[1].children[0].value;
	}
	/*获取内容转换为数字类型*/
	var b = a[0];
	b = Number(b);
	var row = document.querySelectorAll("#tbl tr");
	if(b >= 1) {
		row[b - 1].remove();
	}
}
/*删除一列*/
function removelist() {
	/*获取输入内容*/
	var inputdiv = document.querySelectorAll("#text_innertwo>form>div");
	var a = [];
	for(var i = 0; i < inputdiv.length; i++) {
		a[i] = inputdiv[i].children[1].children[0].value;
	}
	/*获取内容转换为数字类型*/
	var b = a[1];
	b = Number(b);
	var row = document.querySelectorAll("#tbl tr");
	if(b >= 1) {
		for(var i = 0; i < row.length; i++) {
			row[i].children[b - 1].remove();
		}
	}
}
/*增加一行*/
function increaserow() {

	var input = document.querySelectorAll("#text_innerthree input");
	var set = document.querySelectorAll("#text_innerthree select");
	var tbl = document.querySelectorAll("#tbl");
	/*获取input值*/
	var a = Number(input[0].value);
	var setvalue = Number(set[0].value)
	/*生成tr*/
	var tdsum = document.querySelectorAll("#tbl tr");
	var tr = document.createElement("tr");
	for(var i = 0; i < tdsum[0].children.length; i++) {
		tr.appendChild(document.createElement("td"));
	}
	/*获取基准位置元素*/
	var pos = tdsum[a - 1];
	/*添加元素*/
	if(a != undefined && a >= 1) {
		if(setvalue == 0) {
			tbl[0].firstElementChild.insertBefore(tr, pos);
		} else {
			pos = tdsum[a];
			tbl[0].firstElementChild.insertBefore(tr, pos);
		}
	}
}
/*增加一列*/
function increaselist() {
	var input = document.querySelectorAll("#text_innerthree input");
	var set = document.querySelectorAll("#text_innerthree select");
	var tbl = document.querySelectorAll("#tbl");
	var inputvalue = Number(input[2].value);
	var setvalue = Number(set[1].value);
	var newtd;
	var tdsum = document.querySelectorAll("#tbl tr");
	var sta;
	if(set[1].value == 0) {
		for(var i = 0; i < tdsum.length; i++) {
			newtd = document.createElement("td");
			sta = tdsum[i].children[inputvalue - 1];
			tdsum[i].insertBefore(newtd, sta);
		}
	} else {
		for(var i = 0; i < tdsum.length; i++) {
			newtd = document.createElement("td");
			sta = tdsum[i].children[inputvalue];
			tdsum[i].insertBefore(newtd, sta);
		}
	}

}