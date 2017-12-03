  // ------------
  // IMPLEMENT ME
  // ------------
  
  // Debugging - console.logs run only when true
  debug = false;


  // Print function
  var print = function(input){
	if (debug === true){
		console.log(input);
	}
  }

  // Global datastore
  var listings;

  function openTab(evt, cityName) {
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  } 

  // Implement addListing()
  function addListing(){
	var newListing = {};
	
	console.log("hello");	
	var ai = $('#doctype-input').val();
	var pi = $('#data-input').val();
	
	newListing.doctype = ai;
	newListing.data = pi;
	newListing.date = new Date();

//	print(newListing);

	listings.push(newListing);
	window.add(ai, pi);
	refreshDOM();
	
	// Clear Inputs
	$('#doctype-input').val("");
	$('#data-input').val("");
  }
 

  // Implement refreshDOM()
  function refreshDOM(){
	if (listings === undefined) return;
	
	var container = $(".listings");
	container.html("");
    
	for (var i=0; i<listings.length; i++){
		var currentListing = listings[i];
		var listItem = $("<li>");
		// content
		listItem.append($("<h3>").html(currentListing.doctype));
		listItem.append("<h6>" + currentListing.date + "</h6>");
		listItem.append("<p>$" + currentListing.data + "</p>");
		
		if (currentListing.sold === true) {
			print("its sold already");
			listItem.addClass("sold");
		}
		
		
		// delete button
		//var delButton = $("<a class='del'>").attr("id", i).html("Delete");
		//listItem.append(delButton);
		//delButton.click(function(){
		//	var buttonClicked = $(this);
		//	var buttonID = buttonClicked.attr("id");
		//	print("delete");
		//	listings.splice(buttonID, 1);
		//	window.del(buttonID);
		//	refreshDOM();
		//});
		
		
		// listItem += "</li>";
		
		
		$(".listings").append(listItem);
	}
  }  
  
  // Implement the get() function
  function get() {
    $.ajax({
      type: "get",
      url: "/listings",
      success: function(data) {
        listings = data.listings;
        //console.log(listings);
        refreshDOM();
      }
    });
  }

  // Implement the add(desc, doctype, data) function
  function add(doctype, data) {
    $.ajax({
      type: "post",
      data: {"doctype": doctype, "data": data},
      url: "/listings",
      success: function(data) { }
    });
  }

  function edit(id, doctype, data, sold) {
    $.ajax({
      type: "put",
      data: {doctype: doctype, data: data, sold: sold},
      url: "/listings/" + id,
      success: function(data) { }
    });
  }

  function del(id) {
    $.ajax({
      type: "delete",
      url: "/listings/" + id,
      success: function(data) { 
        //console.log(data);
      }
    });
  }

  function delAll() {
    $.ajax({
      type: "delete",
      url: "/listings",
      success: function(data) { }
    });
  }

  $(document).ready(function() {
    get();
  });
