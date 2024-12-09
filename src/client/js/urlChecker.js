function checkForURL(inputText) {
    console.log("::: Running checkForUrl :::", inputText);
    try {
        new URL(inputText);
        document.getElementById('error').innerHTML = '';
        document.getElementById('error').style.cssText = '';
        console.log("URL validated");

    } catch (error) {
        console.log('Error:', error);
        document.getElementById('error').innerHTML = `Error: Please input a valid url!`;
        document.getElementById('error').style.cssText = "text-align: center; padding: 10px; background-color: #294531; color: white;"
        alert("Please enter a valid URL."); 
    }
};
    
export { checkForURL };
