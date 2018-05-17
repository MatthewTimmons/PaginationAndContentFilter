let searchBarHTML = '';

// Dynamically insert HTML for the search bar
searchBarHTML += '<div class="student-search"><input id="search-terms" type="text" placeholder="Search for students..."><button type="submit">Submit</button></div>';
$('.page-header').append(searchBarHTML);

// Create a function that searches all student names and emails
function search(input, allStudents) {
	searchResults = [];

	// Pushes all search results to the searchResults array
	for (var i=0; i < allStudents.length; i++) {
		if ($('h3')[i].innerHTML.includes(input) || $('.email')[i].innerHTML.includes(input)) {
			searchResults.push(allStudents[i]);
		}
	}

	// If search results exist, displays those results and adds page buttons
	if (searchResults.length != 0) {

		// Clear buttons and then display search results
		$('#buttons').html('');
		$('.student-list').removeClass('empty');
		paginate(searchResults);
		printPage(1);

	// If no search results exist, displays message, "No results"		
	} else {
		hideAllStudents();
		$('#buttons').html('');
		$('.student-list').addClass('empty');
	}
}

// Run search() whenever Submit button is clicked
$('button').on('click', () => {
	let searchTerms = $('#search-terms').val();
	search(searchTerms, allStudents);
});

// Run search() as user types in search bar
$('input').keyup(function(){
	let searchTerms = $('#search-terms').val();
	search(searchTerms, allStudents);
});