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

  // Implement addListing()
  function addListing(){
	var newListing = {};
	
	console.log("hello");	
	var ai = $('#author-input').val();
	var di = $('#desc-input').val();
	var pi = $('#price-input').val();
	
	newListing.author = ai;
	newListing.desc = di;
	newListing.price = pi;
	newListing.date = new Date();

	print(newListing);
	
	listings.push(newListing);
	window.add(di, ai, pi);
	refreshDOM();
	
	// Clear Inputs
	$('#author-input').val("");
	$('#desc-input').val("");
	$('#price-input').val("");
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
		listItem.append($("<h3>").html(currentListing.author));
		listItem.append("<h6>" + currentListing.date + "</h6>");
		listItem.append("<p>" + currentListing.desc + "</p>");
		listItem.append("<p>$" + currentListing.price + "</p>");
		
		if (currentListing.sold === true) {
			print("its sold already");
			listItem.addClass("sold");
		}
		
		
		// delete button
		var delButton = $("<a class='del'>").attr("id", i).html("Delete");
		listItem.append(delButton);
		delButton.click(function(){
			var buttonClicked = $(this);
			var buttonID = buttonClicked.attr("id");
			print("delete");
			listings.splice(buttonID, 1);
			window.del(buttonID);
			refreshDOM();
		});
		
		// sold button
		var soldButton = $("<a>").attr("id", i).html("Sold!");
		listItem.append(soldButton);
		soldButton.click(function(){
			var buttonClicked = $(this);
			var buttonID = buttonClicked.attr("id");

			buttonClicked.parent().addClass("sold");
			listings[buttonID].sold = true;//!(listings[buttonID].sold);
			
			/* edit(id, desc, author, price, sold) */
			window.edit(buttonID, l.desc, l.author, undefined, true );
			// refreshDOM();
		});
		
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

  // Implement the add(desc, author, price) function
  function add(desc, author, price) {
    $.ajax({
      type: "post",
      data: {"desc": desc, "author": author, "price": price},
      url: "/listings",
      success: function(data) { }
    });
  }

  function edit(id, desc, author, price, sold) {
    $.ajax({
      type: "put",
      data: {desc: desc, author: author, price: price, sold: sold},
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