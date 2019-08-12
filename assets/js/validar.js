function esCampoVacio(campo){
	if(campo.value=='') return false;
	else return true;	
}

function comprobarMail(m){
	arroba = m.indexOf('@');
	
	if(arroba==-1) return false;
	else if(m.indexOf('.', arroba)==-1) return false;
	else return true;	
}

function limpiar(txt){
	txt= txt.split('.').join('');
	txt= txt.split(' ').join('');
	txt= txt.split('-').join('');
	txt= txt.split('/').join('');
	txt= txt.split(',').join('');
	txt= txt.split('\n').join('');
	txt= txt.split('\r').join('');
	txt= txt.split('\t').join('');
	txt= txt.split('\\').join('');
	txt= txt.split('$').join('');
	return txt;
}

function gestionarError(campo, mensaje){
	alert(mensaje);
	campo.focus();
	campo.select();
}