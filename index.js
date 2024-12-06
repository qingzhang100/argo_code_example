// A simple greeting function
function greet() {
  console.log("Hello, Argo Workflows! 🌟");
  console.log("This is a simple JavaScript script running in a container.");
}

// A function to show the current date and time
function showDateTime() {
  const now = new Date();
  console.log(`Current Date and Time: ${now.toString()}`);
}

// Main function to execute the script
function main() {
  greet();
  showDateTime();
  console.log("Task completed successfully. 🎉");
}

// Run the main function
main();
