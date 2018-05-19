const allStudents = $('.student-item');
let searchResults = [];
let lastButton;

// Create a function to hide all students
function hideAllStudents() {
	allStudents.each(function () {
		this.style.display = 'none';
	});
}

//Create a function to generate the html that will hold the button element
function generateButton (number, list) {
	return `<li><a>${number}</a></li>`;
}

// Create a function to display only the ten I want at any given time
function printPage(pageNumber, array) {
	hideAllStudents();
	let init = pageNumber * 10;
	let start = init - 10;

	// If user clicks last button, present only the remaining students
	if (pageNumber == lastButton) {
		let remainder = (array.length % 10) + start; 
		for (let i = start; i < remainder; i++) {
			searchResults[i].style.display = '';
		}

	// Print 10 students, as long as the last button is not clicked
	} else {
		// Show 10 students 
		for (let i = start; i < init; i++) {
			searchResults[i].style.display = '';
		}
	}
}

// Create a function to add the correct amount of functioning buttons to the page
function paginate(array) {
	let numberOfPages = Math.ceil((array.length)/10);
	let paginationHTML = '<div class="pagination"><ul id="buttons"></ul></div>';
	let html = '';
	searchResults = array;

	// Generate all page buttons
	for (let i=0; i < numberOfPages; i++) {
		html += generateButton((i+1));
	}

	// Add all html to index.html
	$('.page').append(paginationHTML);
	$('#buttons').append(html);
	lastButton = $('#buttons li').length;

	// Print page when button is clicked
	$('li').on('click', () => {
		let num = $(event.target).text();
		printPage(num, searchResults);
	});
}


// Initialize page by showing first 10 students
searchResults = allStudents;
printPage(1, searchResults);
paginate(searchResults);

