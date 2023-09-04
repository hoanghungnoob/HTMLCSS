// An array of names
var names = ["John", "Jane", "Jack", "Alice", "Bob"];

// Loop over each name in the array
for (var i = 0; i < names.length; i++) {
  // Get the current name
  var name = names[i];

  // Convert the first letter to lowercase for easy comparison
  var firstLetter = name.charAt(0).toLowerCase();

  // Check if the first letter is 'j'
  if (firstLetter === 'j') {
    // If it starts with 'j', say goodbye
    console.log("Goodbye " + name);
  } else {
    // If it starts with any other letter, say hello
    console.log("Hello " + name);
  }
}
