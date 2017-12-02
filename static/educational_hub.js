function get_stats() {
	
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "http://data.oeconsortium.org/api/v1/courses/stats/", false);

	xhr.send();

	console.log(xhr.status);
	console.log(xhr.statusText);
	var response = xhr.response
	var arr = JSON.parse(response);

	document.getElementById("field1").value =  JSON.stringify(arr)

}

function get_languages() {

	var xhr = new XMLHttpRequest();
	xhr.open("GET", "http://data.oeconsortium.org/api/v1/languages/", false);

	xhr.send();

	console.log(xhr.status);
	console.log(xhr.statusText);
	var response = xhr.response
	var arr = JSON.parse(response);

	// document.getElementById("field2").value =  JSON.stringify(arr)

	console.log(arr)

	var cat_options = ""

	for (var field in arr) {
		 cat_options += "<option>" + arr[field] + "</option>";
	    // console.log(arr[field])        
    }
    document.getElementById("language_select").innerHTML = cat_options


}


function search() {

	var xhr = new XMLHttpRequest();
	xhr.open("GET", "http://data.oeconsortium.org/api/v1/courses/search/", false);

	xhr.send();

	console.log(xhr.status);
	console.log(xhr.statusText);
	var response = xhr.response
	var arr = JSON.parse(response);

	document.getElementById("field2").value =  JSON.stringify(arr)

	console.log(arr)

}