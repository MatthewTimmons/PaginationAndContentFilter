var searchBarHTML = '';



searchBarHTML += '<div class="student-search">';
searchBarHTML += '<input id="search-terms" type="text" placeholder="Search for students...">';
searchBarHTML += '<button type="submit">Submit</button></div>';

$('.page-header').append(searchBarHTML);

var searchTerms = $('#search-terms').val();


function search(input, students) {
			console.log(searchTerms);
	for (var i=0; i < students.length; i++) {
		console.log(document.getElementsByTagName('h3')[i].innerHTML.includes(searchTerms));

		// if (students[i].getElementsByTagName('h3')[0].innerHTML) {
		// 	students[i].style.display = '';
		// }
	}
}

$('button').on('click', () => {
	search(searchTerms, students);
})