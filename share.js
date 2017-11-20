(function(){
    // Verify support
    if(navigator.share) {
        // Saving the button in the variable $buttonShare
        let $buttonShare = document.getElementById("button-share");

        // Event click to the button
        $buttonShare.addEventListener("click", (e) => {
            e.preventDefault();

            // Saving the URL of the link
            const URL = this.href;

            // navigator.share is a function/method that receives
            // an object with the following parameters:
            navigator.share({
                title: "Web share API example",
                text: "Example of the use of web share api",
                url: URL // The url that is going to share is the url of the href
            })
            .then(() => console.log("Successful share")) // if everything goes well
            .catch((err) => console.log(`Error sharing ${err}`)); // if there is an error

            return false;
        });
    }

    // alert, if it is not the browser is not compatible
    else {
        alert("Your browser is not compatible with Web share API")
    }

}());