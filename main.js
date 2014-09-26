// playerList is the usable list of players and their data stored in one object/player
// playerList keys:
// 		username
// 		fullname
// 		region
// 		race
// 		wins
// 		losses


// Automatically populate table rows for each player in playerList


// Set sorting algorithms for each of the sorting options in the .sort-by
// 		Username
// 		Score
// 		Win %
// 		Wins
// 		Race
// 		Region


// Pagination

// Active page is already set up in index.html (as well as first, prev, next, last)
// Automatically populate 4 more data cells for 4 surrounding pages
// If current .active-nav is >= 3, populate .active-nav - 2, .active-nav -1, +1, +2
// If current page is 1, populate +1 through +4
// If current page is 2, populate -1, +1 through +3
// Use .before() and .after() to attach creates td elements


// Build the pagination bar
// This will be called in changePage and the new active page number will be activePage
var buildPagination = function(activePage) {

	// The table/row that holds our pagination td's
	var trPagination = $('.pagination-table tr');
	var insertLocation = $('.pagination-table tr td:nth-child(2)');

	// The template for each pagination element we'll add
	var tdPagination = $('<td class="pagination-num"><a href="#"></a></td>');
	// tdPagination.find('a').text('1').insertAfter(insertLocation);

	// How many pages of data are we working with?
	var numPages = 5;

	// Remove any current pagination numbers before we build the menu
	$('.pagination-num').length > 0 ? $('.pagination-num').remove() : null;


	for (var i = 5; i > 0; i--){
		// For first build on page load
		// TODO
		// Refactor this to the case for activePage == 1

		tdPagination.clone().insertAfter(insertLocation).find('a').text(i);

		if (i == activePage) {
			// tdPagination.clone().addClass('active-nav').insertAfter(trPagination, 'td:nth-child(2)');
		} else {
			// tdPagination.clone().appendTo(trPagination);
		}

		// tdPagination.clone().insertAfter('.active-nav').find('a').text(i);
		
		// Switch/case statements for possible pagination building
	}
}

// Build a "change page" event
// Page won't actually reload, will simply load new player date
//    and change pagination

// TODO flesh out this function
// Will need to add a click handler that passes the td.find('a').text() to this function
var changePage = function(pageNum) {

	// Clear out current pagination numbers
	$('.pagination-num').remove();

	// Set a totalPages variable
	totalPages = playerList.length / 20;
	console.log(totalPages);

	//   Generate 5 new .pagination-num td's
	//      if pageNum > 2 && < (totalPages - 2)
	// 			with .find('a').text(pageNum -2, -1, pageNum, +1, +2))
	// 		if pageNum == 1
	// 			with .find('a').text(pageNum, pageNum + 1, +2, +3, +4)
	// 		if pageNum == 2
	// 			with .text(pageNum -1, pageNum, pageNum +1, +2, +3)
	// 		if pageNum == totalPages - 1
	// 			with .find('a').text(pageNum -3, -2, -1, pageNum, +1)
	// 		if pageNum == totalPages
	// 			with .find('a').text(pageNum -4, -3, -2, -1, pageNum)
	//   addClass('.active-nav') to td.pagination-num with text of pageNum


	// Load new player data here
}






$(document).on('ready', function() {

// Populates the dynamic elements in pagination
	buildPagination(1);

	// changePage(5);
	
	console.log($('.pagination-num').length)
	


});