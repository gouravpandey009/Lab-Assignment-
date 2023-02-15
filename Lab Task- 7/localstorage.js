// Retrieve the number of times the page has been accessed from local storage
let pageAccessCount = localStorage.getItem("pageAccessCount");

// If this is the first time the page has been accessed, set the count to 1
if (pageAccessCount === null) {
  pageAccessCount = 1;
} 
// Otherwise, increment the count by 1
else {
  pageAccessCount = parseInt(pageAccessCount) + 1;
}

// Store the updated count in local storage
localStorage.setItem("pageAccessCount", pageAccessCount);

// Display the count to the user
console.log(`You have accessed this page ${pageAccessCount} time(s).`);
