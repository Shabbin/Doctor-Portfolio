document.addEventListener('DOMContentLoaded', function() {
    // Text to be typed
    const text = `Hello I'm Shahed
    A new world have arrived and I'm a doctor space`;
    
    // Target element to type the text
    const targetElement = document.getElementById('typing-text');
    
    // Function to simulate typing effect
    function typeText() {
        // Split the text into characters
        const characters = text.split('');
        
        // Loop through each character
        characters.forEach(function(char, index) {
            // Create a span element for each character
            const span = document.createElement('span');
            span.textContent = char;
            
            // Calculate delay for each character
        const delay = index * 100; // Adjust as needed
            
            // Set delay for typing effect
            setTimeout(function() {
                targetElement.appendChild(span);
            }, delay);
        });
    }
    
    // Call the function to start typing effect
    typeText();
});
