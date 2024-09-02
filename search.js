// Function to reset previous highlights
const resetHighlights = () => {
    const highlightedElements = document.querySelectorAll('.highlight');
    highlightedElements.forEach((element) => {
        element.outerHTML = element.innerHTML; // Replace the span with its inner content
    });
};


function searchAndHighlight() {
    // Get the search term
    const searchTerm = document.getElementById('search_input').value.trim();
    console.log(searchTerm);

    // If the search term is empty, reset any previous highlights and return
    if (!searchTerm) {
        resetHighlights();
        return;
    }

    // Clear previous highlights before starting a new search
    resetHighlights();

    // Perform the search and highlight
    const contentElement = document.getElementById('content_container');
    console.log(contentElement);
    const content = contentElement.innerHTML;
    console.log(content);
    const regex = new RegExp(`(?<!/)(\\b${searchTerm}\\b)`, 'gi');
    console.log(regex);
    contentElement.innerHTML = content.replace(regex, '<span class="highlight">$1</span>');
    console.log(contentElement.innerHTML);
}