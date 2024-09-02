const getTextFromElement = (element) => {
    if (!element) return '';
    return Array.from(element.childNodes)
        .map(node => {
            if (node.nodeType === Node.TEXT_NODE) {
                return node.textContent;
            } else if (node.nodeType === Node.ELEMENT_NODE) {
                return getTextFromElement(node);
            }
            return '';
        })
        .join(' ');
};

const calculateReadingTime = (text, wordsPerMinute = 225) => {
    const words = text.trim().split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
};

const insertReadingTime = () => {
    const contentElement = document.getElementById('content_container');
    const readingTimeElement = document.getElementById('estimated_reading_time_container');

    const text = getTextFromElement(contentElement);
    // console.log(text);
    const readingTime = calculateReadingTime(text);
    // console.log(readingTime);

    readingTimeElement.textContent = `(Becsült olvasási idő kb. ${readingTime} perc.)`;
};

// Run the function on page load
document.addEventListener('DOMContentLoaded', insertReadingTime);