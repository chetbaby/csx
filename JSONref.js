// pure JS method to get local JSON file
function loadJSON(filePath, success, error)
{
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function()
	{
		if (xhr.readyState === XMLHttpRequest.DONE) {
			if (xhr.status === 200) {
				if (success)
					success(JSON.parse(xhr.responseText));
		} else {
			if (error)
				error(xhr);
			}
		}
	};
	xhr.open("GET", filePath, true);
	xhr.send();
}

// using Promise
fetch("my.json")
	.then(response => response.json())
	.then(parsed => /* parsed contains the parsed json object */);
 
// or if you can use async/await
let response = await fetch("my.json");
let parsed = await response.json();

//jQuery
$.getJSON("sample.json", function (data) {
    $.each(data, function (index, value) {
       console.log(value);
    });
});