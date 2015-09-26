var baseHexadecimal = 16;


 function calculoDecimalHexadecimal(dados){
	//var decimal = calculoBinarioDecimal(dados);
	var hexadecimal = "";

	do {

		var resto = dados % baseHexadecimal;
		
		switch(resto){

			case 10:
				resto = "A";
				break;
			case 11:
				resto = "B";
				break;
			case 12:
				resto = "C";
				break;
			case 13:
				resto = "D";
				break;
			case 14:
				resto = "E";
				break;
			case 15:
				resto = "F";
				break;

		}

		hexadecimal = resto + hexadecimal;
		dados = Math.floor(dados / baseHexadecimal);
		
		
	} while (dados >= baseHexadecimal);
	hexadecimal = dados + hexadecimal;

	return hexadecimal;
	

};
	



function calculoHexadecimalDecimal(hexadecimal){
var m = hexadecimal.toString().length;

	
	var valorHexadecimal = 0;
	var baseDecimal = 16;

	for(var j = m ;j > 0 ; j-- ){

		var digito = hexadecimal.charAt(j-1);

		switch(digito){

			case "A" :
			case "a":
				digito = 10;
				break;
			case "B" :
			case "b" :
				digito = 11;
				break;
			case "C" :
			case "c" :
				digito = 12;
				break;
			case "D" :
			case "d" :
				digito = 13;
				break;
			case "E" :
			case "e" :
				digito = 14;
				break;
			case "F" :
			case "f" :
				digito = 15;
				break;
			
		};



		valorHexadecimal = valorHexadecimal + (digito * Math.pow(baseDecimal,m-j));

	};
	return valorHexadecimal;
	
}
	


