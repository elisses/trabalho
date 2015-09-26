function controle(){
	var binario = document.getElementById("binario");
	var decimal = document.getElementById("decimal");
	var hexadecimal = document.getElementById("hexadecimal");

	if (binario.value=="" && decimal.value=="" && hexadecimal.value==""){
		alert("Digite um valor!");
		return;
	};

		if(binario.value!=""){
			var resultadoDecimal = calculoBinarioDecimal(binario.value);
			var resultadoHexadecimal = calculoDecimalHexadecimal(resultadoDecimal);
			decimal.value = resultadoDecimal;
			hexadecimal.value = resultadoHexadecimal;

		}else if(decimal.value!=""){
			var resultadoBinario = calculoBinario(decimal.value);
			var resultadoHexadecimal = calculoDecimalHexadecimal(decimal.value);
			binario.value = resultadoBinario;
			hexadecimal.value = resultadoHexadecimal;



		}else if(hexadecimal.value){			
			var resultadoDecimal = calculoHexadecimalDecimal(hexadecimal.value);
			var resultadoBinario = calculoBinario(resultadoDecimal);
			binario.value = resultadoBinario;
			decimal.value = resultadoDecimal;


		}


}