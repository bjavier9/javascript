var err = 0;
var ie = 0;
var ifn = 0;


function RefrescaProducto() {
	var ip = [];
	var i = 0;
	$('#guardar').attr('disabled', 'disabled'); //Deshabilito el Boton Guardar
	$('.iProduct').each(function (index, element) {
		i++;
		ip.push({
			id_pro: $(this).val()
		});
	});
	// Si la lista de Productos no es vacia Habilito el Boton Guardar
	if (i > 0) {
		$('#guardar').removeAttr('disabled', 'disabled');
	}
	var ipt = JSON.stringify(ip); //Convierto la Lista de Productos a un JSON para procesarlo en tu controlador
	$('#ListaPro').val(encodeURIComponent(ipt));
}

function agregarProducto() {

	var sel = $('#pro_id').find(':selected').val(); //Capturo el Value del Producto
	var text = $('#pro_id').find(':selected').text(); //Capturo el Nombre del Producto- Texto dentro del Select
	if (sel == 1) {
		sel = "Error leve";
		err = 1;
	} else if (sel == 2) {
		sel = "Error moderado";
		err = 3;
	} else {
		sel = "Error grave";
		err = 10;
	}
	var sptext = text.split();

	var newtr = '<tr class="item"  data-id="' + sel + '">';
	newtr = newtr + '<td class="iProduct" >' + sel + '</td>';
	newtr = newtr + '<td><select class="form-control"  id="cantidad[]" name="lista[]" onChange="Calcular(this);"><option value="1">Diseño y codificación</option><option value="2">Justo antes de pruebas</option><option value="3">Durante la prueba</option><option value="4">Pos Implementación 47%</option><option value="5">Pos Implementación 48%</option><option value="6">Pos Implementación 49%</option><option value="7">Pos Implementación 50%</option><option value="8">Pos Implementación 51%</option><option value="9">Pos Implementación 52%</option><option value="10">Pos Implementación 53%</option><option value="11">Pos Implementación 54%</option><option value="12">Pos Implementación 55%</option><option value="13">Pos Implementación 56%</option><option value="14">Pos Implementación 57%</option><option value="15">Pos Implementación 58%</option><option value="16">Pos Implementación 59%</option><option value="17">Pos Implementación 60%</option></select></td><td><input class="form-control" type="number" id="precunit[]" name="lista[]" onChange="Calcular(this);" value="0"/></td><td><input class="form-control" type="text" id="totalitem[]" name="lista[]" readonly /></td><td><input class="form-control" type="text" id="resultado[]" name="lista[]" readonly /></td>';
	newtr = newtr + '<td><button type="button" class="btn btn-danger btn-xs remove-item" ><i class="fa fa-times"></i></button></td></tr>';

	$('#ProSelected').append(newtr); //Agrego el Producto al tbody de la Tabla con el id=ProSelected

	RefrescaProducto(); //Refresco Productos

	$('.remove-item').off().click(function (e) {
		var total = document.getElementById("total");
		total.innerHTML = parseFloat(total.innerHTML) - parseFloat(this.parentNode.parentNode.childNodes[4].childNodes[0].value);
		$(this).parent('td').parent('tr').remove(); //En accion elimino el Producto de la Tabla
		if ($('#ProSelected tr.item').length == 0)
			$('#ProSelected .no-item').slideDown(300);
		RefrescaProducto();

		Calcular(e.target);
	});
	$('.iProduct').off().change(function (e) {
		RefrescaProducto();

	});
}


function Calcular(ele) {
	var cldc = document.getElementById("cldc").value;
	var etp;
	var con=0;
	var cantidad = 0,
		precunit = 0,
		totalitem = 0;
	var tr = ele.parentNode.parentNode;
	var nodes = tr.childNodes;

	for (var x = 0; x < nodes.length; x++) {

		if (nodes[x].firstChild.id == 'cantidad[]') {
			cantidad = nodes[x].firstChild.value;
			etp = cantidad;
			//etapas
			if(etp==1){
				etp=1;
			}else if(etp==2){
				etp=2;
			}else if(etp==3){
				etp=3;
			}else{
				etp=4;
			}			
			
			//cantidades
			if (cantidad == 1) {
				cantidad = parseFloat(0.01);
			} else if (cantidad == 2) {
				cantidad = parseFloat(0.065)
			} else if (cantidad == 3) {
				cantidad = parseFloat(0.15)
			} else if (cantidad == 4) {
				cantidad = parseFloat(0.47)
			} else if (cantidad == 5) {
				cantidad = parseFloat(0.48)
			} else if (cantidad == 6) {
				cantidad = parseFloat(0.49)
			} else if (cantidad == 7) {
				cantidad = parseFloat(0.50)
			} else if (cantidad == 8) {
				cantidad = parseFloat(0.51)
			} else if (cantidad == 9) {
				cantidad = parseFloat(0.52)
			} else if (cantidad == 10) {
				cantidad = parseFloat(0.53)
			} else if (cantidad == 11) {
				cantidad = parseFloat(0.54)
			} else if (cantidad == 12) {
				cantidad = parseFloat(0.55)
			} else if (cantidad == 13) {
				cantidad = parseFloat(0.56)
			} else if (cantidad == 14) {
				cantidad = parseFloat(0.57)
			} else if (cantidad == 15) {
				cantidad = parseFloat(0.58)
			} else if (cantidad == 16) {
				cantidad = parseFloat(0.59)
			} else if (cantidad == 17) {
				cantidad = parseFloat(0.60)
			}

			console.log(cantidad);

		}
		if (nodes[x].firstChild.id == 'precunit[]') {
			precunit = nodes[x].firstChild.value;
		}
		if (nodes[x].firstChild.id == 'totalitem[]') {
			anterior = nodes[x].firstChild.value;
			totalitem = err * (precunit / etp);
			nodes[x].firstChild.value = totalitem;
			
		}
		if (nodes[x].firstChild.id == 'resultado[]') {
			anterior2 = nodes[x].firstChild.value;
			con = precunit * cantidad * cldc;
			nodes[x].firstChild.value = con;
		}

	}
	// Resultado final de cada fila ERROR, al editar o eliminar una fila
	var total = document.getElementById("total");
	var result = document.getElementById("result");
	result.innerHTML = parseFloat(result.innerHTML) + parseFloat(con) - anterior2; 
	total.innerHTML = parseFloat(total.innerHTML) + parseFloat(totalitem) - anterior;
	
	
	}





function proceso() {
	
	cdt = document.getElementById('cdt').value;
	ifn = document.getElementById('ifn').value;
	console.log(ifn);
	ifn= parseFloat(ifn);
	var r=0 ;
	var i;
	//parte 2
	var msd = document.getElementById('msd').value; //cantidad de pasos
	var ps = document.getElementById("ps").value;
	for (i = 1; i <= msd; i++) {

		r = r + (i * ifn)
	}

	r = (r / ps);
	r = r.toFixed(2);
	console.log(r);
	document.getElementById('acum').innerHTML =ifn;
	document.getElementById('cdd').innerHTML = cdt;
	document.getElementById('ie').innerHTML = r;
}

//parte3
function respuesta() {
	var tmdf = document.getElementById('tmdf').value;
	var tmdr = document.getElementById('tmdr').value;
	var tmp = document.getElementById('tmp').value;
	var fbl;
	var dsp;
	document.getElementById('m1').innerHTML = tmdf;
	document.getElementById('m2').innerHTML = tmp;
	document.getElementById('m3').innerHTML = tmdr;
	document.getElementById('m4').innerHTML = tmp;
	tmdf = parseInt(tmdf);
	tmdr = parseInt(tmdr);
	tmp = parseInt(tmp);
	tmdf = (tmdf / tmp);
	tmdf1 = tmdf.toFixed(2);
	document.getElementById('m6').innerHTML = tmdf1;
	document.getElementById('m7').innerHTML = tmdf1;
	tmdr = (tmdr / tmp);
	tmdr1 = tmdr.toFixed(2);
	document.getElementById('m8').innerHTML = tmdr1;
	tmef = tmdf + tmdr;
	tmef = tmef.toFixed(2)
	document.getElementById('m5').innerHTML = tmef;
	document.getElementById('r1').innerHTML = tmef;
	fbl = (1 - tmef) * 100;
	fbl = parseInt(fbl)
	document.getElementById('r2').innerHTML = fbl;
	dsp = 100 * (tmdf / (tmdf + tmdr));
	dsp = parseInt(dsp);
	document.getElementById('r3').innerHTML = dsp;
}