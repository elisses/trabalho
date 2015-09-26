var baseBinaria = 2;

var dados;


 function calculoBinario(dados){
 	var binario = "";
	do {

		var resto = dados % baseBinaria;
		binario = resto + binario;
		dados = Math.floor(dados / baseBinaria);

	} while (dados >= baseBinaria);
	binario = dados + binario;
	return binario;

};



function calculoBinarioDecimal(binario){
	
	var m = binario.toString().length;
	var valorBinario = 0;

	for(var j = 0 ;j < m ; j++ ){

		var digito = binario % Math.pow(10,j+1);
		digito = Math.floor(digito / Math.pow(10,j));

		valorBinario = valorBinario + (digito * Math.pow(2,j));
	};

	return valorBinario;


};






