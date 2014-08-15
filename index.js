//计算日期差
	function DayCount(){
			var sDate=getNowFormatDate();
			var uDate=getUserDate();
			var cDate=uDate-sDate;
			return cDate;
	}
//获取当天日期并格式化
function getNowFormatDate(){
	var day=new Date();
	var Year=0;
	var Month=0;
	var Day=0;
	var currentDate="";
	Year=day.getFullYear();
	Month=day.getMonth()+1;
	Day=day.getDate();
	currentDate+=Year;
	if (Month>=10) {
		currentDate+=Month;
	} else{
		currentDate += "0" + Month;
	}
	if (Day>=10) {
		currentDate+=Day;
	} else{
		currentDate += "0" + Day;
	}
	return currentDate;
}
//获取用户填写的日期
function getUserDate(){
	var date=document.getElementById("date").value;
	return date;
}

