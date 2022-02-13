$(document).ready(function(){
	$('body').on('click', '.editarReparto', function(){
	    $('#id').val($(this).attr('id'));
	    $('#txtFecha').val($(this).attr('param2'));
	    
	    $('#cboPedido option:selected').removeAttr('selected');
	    $('#cboPedido option[value='+$(this).attr('param1')+']').attr("selected", true);
	    
	    $('#modalReparto').modal({show: true});
	    return false;
	 });
});