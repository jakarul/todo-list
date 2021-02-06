const title = document.getElementById("title");
const author = document.getElementById("author");
const year = document.getElementById("year");
const bookList = document.getElementById("book-list");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function(event){
	event.preventDefault();
	if ((title.value == "" && author.value == "" && year.value == "") ||
		(title.value == "") ||
		(author.value == "")||
		( year.value == "")){
		alert("Please Fill The All Information!")
	}
	else{
		const newRow =document.createElement("tr");
		
		const newTitle =document.createElement("th");
		newTitle.appendChild(document.createTextNode(title.value));
		newRow.appendChild(newTitle);
		
		const newAuthor =document.createElement("th");
		newAuthor.appendChild(document.createTextNode(author.value));
		newRow.appendChild(newAuthor);
		
		const newYear =document.createElement("th");
		newYear.appendChild(document.createTextNode(year.value));
		newRow.appendChild(newYear);
		
		bookList.appendChild(newRow);
		title.value ="";
		author.value ="";
		year.value ="";
}
});