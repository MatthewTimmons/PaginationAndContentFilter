var students = $(".student-item");

// Create function to hide all students
function hideAll() {
	students.each(function () {
		this.style.display = 'none';
	});
}

// Create a function to display only the ten I want at any given time
function printPage(pageNumber) {
	hideAll();
	var init = pageNumber*10;
	var start = init - 10;

	// Show students
	for (var i=start; i < init; i++) {
		students[i].style.display = '';
	}
}

// Create a function to add the correct amount of buttons to the page
function paginate(students) {
	var pages = Math.ceil((students.length)/10);
	var paginationHTML = '<div class="pagination"><ul id="buttons"></ul></div>';
	var html = '';
	
	for (var i = 0; i < pages; i++) {
		html += generateButton(i+1);
	}
	$('.page').append(paginationHTML);
	$('#buttons').append(html);
}

function generateButton (input) {
	return `<li><a href="javascript:printPage(${input})">${input}</a></li>`;
}

// Start display at Page 1
printPage(1);

// Paginate all students
paginate(students);