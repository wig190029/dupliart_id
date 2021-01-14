function imagePreview(){
		var imageBox = document.getElementById("imageBox");
		imageBox.src = URL.createObjectURL(event.target.files[0]);
		imageBox.style.display = "block";
		imageContainer.style.display = "block";
	}

$(document).ready(function(){
  $('#custom_size').change(function(){
    var custom_size = $(this).val();
    var image_width = $("#image_width");
    var image_height = $("#image_height");

    var pair = custom_size.split("|");
    var custom_width = pair[0];
    var custom_height = pair[1];
    image_width.val(custom_width);
    image_height.val(custom_height);
  });
});

function uploImg() {

	var imageBox = document.getElementById("imageBox");

	imageBox.innerHTML = "GOOGLE";

	function GFG_Fun() {
		// create anchor element (in this case, googleimage)
		var a = document.createElement('a');

		// create text for a
		var link = document.createTextNode("Find matches in Google");

		// append the text to anchor
		a.AppendChild(link);

		// set href property
		a.href = "https://www.google.com/searchbyimage?image_url="

	}

}
