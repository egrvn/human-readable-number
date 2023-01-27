module.exports = function toReadable (number) {
    let num = ['', 'one','two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
	'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	let th = ['','','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	let strNumber = String(number);
	if(number === 0) {
		return 'zero';
	}
	if (number < 20) {
		return num[number];
	}
	if (strNumber.length === 2) {
		if(strNumber[1] == '0') {
			return th[strNumber[0]];
		} else
				return th[strNumber[0]] + ' ' + num[strNumber[1]];
	}
	if(strNumber.length === 3) {
		if(strNumber[1] == '0' && strNumber[2] == '0') {
			return num[strNumber[0]] + ' hundred';
		}
		else
			return num[strNumber[0]] + ' hundred ' + toReadable( + (strNumber[1] + strNumber[2]));
	}
}
