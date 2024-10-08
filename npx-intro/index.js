#!/usr/bin/env node
// Function to log your details in the terminal
function logDetails() {
    const message = "Hey there! I'm Abhishek Verma, a Senior DevOps Engineer by profession. Currently hacking with Kubernetes, building communities and public speaking!";
    const twitterLink = "https://twitter.com/AbAbhishekverma";
    const linkedinLink = "https://www.linkedin.com/in/abhiverma001/";
    const wesbiteLink = "https://abhitech.com";
  
    // Create a colorful box using ANSI escape codes
    const colorfulBox = `  \x1b[38;5;51m+---------------------------------------------------------------+
    |   \x1b[38;5;105m${message}\x1b[38;5;51m    |
    +---------------------------------------------------------------+
    | \x1b[38;5;93mTwitter:\x1b[0m \x1b[38;5;39m${twitterLink}                     \x1b[38;5;51m|
    | \x1b[38;5;93mLinkedIn:\x1b[0m \x1b[38;5;39m${linkedinLink}                 \x1b[38;5;51m|
    | \x1b[38;5;93mPortfolio:\x1b[0m  \x1b[38;5;39m${wesbiteLink}                      \x1b[38;5;51m|
    +----------------------------------------------------------------+\x1b[0m`;
  
    // Log the colorful box in the terminal
    console.log(colorfulBox);
  }
  // Call the function to log your details
  logDetails();