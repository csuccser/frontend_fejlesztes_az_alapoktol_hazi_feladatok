

function appendAuthorToHTML() {
    getRandomAuthor((randomAuthor) => {
        const authorName = randomAuthor.name;
        const authorMail = randomAuthor.email;
        const authorPhoneNumber = randomAuthor.phone;
        const companyName = randomAuthor.company.name;

        const authorContainer = document.querySelector("#author_container");

        const authorNameParagraph = document.createElement("p");
        authorNameParagraph.textContent = `Author: ${authorName}`;
        authorNameParagraph.className = "author_field_item";
        authorContainer.appendChild(authorNameParagraph);

        const emailLabel = document.createTextNode("Email: ")
        const authorMailAnchor = document.createElement("a");
        authorMailAnchor.className = "link";
        authorMailAnchor.href = `mailto:${authorMail}`;
        authorMailAnchor.textContent = authorMail;

        const span = document.createElement("span");
        span.className = "author_field_item";
        span.appendChild(emailLabel);
        span.appendChild(authorMailAnchor);
        authorContainer.appendChild(span);

        const authorPhoneNumberParagraph = document.createElement("p");
        authorPhoneNumberParagraph.textContent = `Phone Number: ${authorPhoneNumber}`;
        authorPhoneNumberParagraph.className = "author_field_item";
        authorContainer.appendChild(authorPhoneNumberParagraph);

        const companyNameParagraph = document.createElement("p");
        companyNameParagraph.textContent = `Company: ${companyName}`;
        companyNameParagraph.className = "author_field_item";
        authorContainer.appendChild(companyNameParagraph);
    }).then();

}

async function getRandomAuthor(callback) {
    const authors = await fetchAuthors((authors) => {
        const randomIndex = Math.floor(Math.random() * authors.length);
        const randomAuthor = authors[randomIndex];
        callback(randomAuthor);
    });
}


async function fetchAuthors(callback) {
    try {
        const url = "https://jsonplaceholder.typicode.com/users";
        const response = await fetch(url);

        // Check if the response is ok (status 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parse the JSON from the response
        const data = await response.json();

        // Log the data
        console.log(data);

        // callback
        callback(data);
    } catch (error) {
        // Handle errors
        console.error('Error fetching data:', error);
    }
}

// Run the function on page load
document.addEventListener('DOMContentLoaded', appendAuthorToHTML);