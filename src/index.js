$(document).ready(function(){

$('#note-form').submit(function(event){
	event.preventDefault()
	const comment = $('#comment-input').val()
	$('#comment-list').append(comment)
	$('#comment-input').val('')

})



})
