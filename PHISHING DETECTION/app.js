document.addEventListener("DOMContentLoaded", function () {
    const phishingForm = document.getElementById("phishingForm");
    const result = document.getElementById("result");

    phishingForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const url = document.getElementById("url").value;
        const isPhishing = detectPhishing(url);
        
        displayResult(isPhishing);
        
    });

    function detectPhishing(url) {
        // Simulate a basic phishing detection logic here.
        // You would typically use more sophisticated methods.
        return url.startsWith("https://") ? false : true;
        

    }
    
    
    function displayResult(isPhishing) {
        result.innerHTML = isPhishing
            ? '<span style="color: red; font-weight:bold;">This URL might be a phishing website.</span>'
            : '<span style="color: white;font-weight:bold;">This URL appears to be safe.</span>';
    }
    
});