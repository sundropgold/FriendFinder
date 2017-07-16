$('#submitForm').on("click", function(event) {

	// prevent page refresh
	event.preventDefault();

	var newFriend = {
		name:$("#name").val().trim(),
		photo:$("#profilepic").val().trim(),
		score:[
			parseInt($("input[name=radio-buttons-1-options]:checked", "#friendForm").val()),
			parseInt($("input[name=radio-buttons-2-options]:checked", "#friendForm").val()),
			parseInt($("input[name=radio-buttons-3-options]:checked", "#friendForm").val()),
			parseInt($("input[name=radio-buttons-4-options]:checked", "#friendForm").val()),
			parseInt($("input[name=radio-buttons-5-options]:checked", "#friendForm").val()),
			parseInt($("input[name=radio-buttons-6-options]:checked", "#friendForm").val()),
			parseInt($("input[name=radio-buttons-7-options]:checked", "#friendForm").val()),
			parseInt($("input[name=radio-buttons-8-options]:checked", "#friendForm").val()),
			parseInt($("input[name=radio-buttons-9-options]:checked", "#friendForm").val()),
			parseInt($("input[name=radio-buttons-10-options]:checked", "#friendForm").val())
		]
	}
	console.log(newFriend);

	$.post("/api/friends", newFriend).done(function(data){
		console.log(data);

		alert("Friend Finder profile submitted!");
	});
});