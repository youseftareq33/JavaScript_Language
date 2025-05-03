
// DOM (Document Object Model): used to read, modify, add, or delete elements in html

// change title of page in html
document.title="hi";

// change text of paragraph by id
document.getElementById("p1").innerText="hello";

document.getElementById("p1").innerHTML="hello"; // but this also major used to add element inside that element
document.getElementById("p1").innerHTML="<h1>hello</h1>"; 
