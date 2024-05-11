window.addEventListener('scroll', function () {
    try {
        const scrollPercentage = (window.scrollY / document.body.scrollHeight) * 100;
        console.log('Scroll Percentage:', scrollPercentage);

        const main = document.querySelector('body');
        const footer = document.querySelector('.footer');
        const footerTop = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const distanceToFooter = footerTop - windowHeight;

        // Check if scrolled over the footer
        if (distanceToFooter <= 0) {
            console.log('Scrolled over the footer');
            main.style.backgroundImage = 'none';
        } else if (scrollPercentage >= 15) { // Apply custom background image properties if scrolled past 15%
            console.log('Applying custom background image properties');
            main.style.backgroundImage = 'url("b71f31fb-5156-452c-871c-94bed775d424-removebg-preview (1).png")';
            main.style.backgroundRepeat = 'no-repeat';
            main.style.backgroundPosition = '50% 50%';
            main.style.backgroundSize = '30% 60%';
        } else { // Revert to original background image properties
            console.log('Reverting to original background image properties');
            main.style.backgroundImage = 'url("b71f31fb-5156-452c-871c-94bed775d424-removebg-preview (1).png")';
            main.style.backgroundRepeat = '';
            main.style.backgroundColor = '';
            main.style.backgroundPosition = '';
            main.style.backgroundSize = '';
            main.style.opacity = '1';
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search-input');
    const searchByDropdown = document.getElementById('search-by');
    const submitButton = document.getElementById('search-button');
    const loader = document.querySelector('.loader');
    const accountNo = document.querySelector('.Account_No p');
    const bookName = document.querySelector('.Book_Name p');
    const author = document.querySelector('.Author p');
    const status_parent = document.querySelector('.Status');
    const tableRes = document.querySelector('.tableres');
    const tableHeader = document.querySelector('.table_header');


    submitButton.addEventListener('click', searchData);
    searchInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            searchData();
        }
    });
    function searchData() {
        const searchTerm = searchInput.value.trim();
        const selectedCategory = searchByDropdown.value;

        // Check if searchTerm is empty
        if (searchTerm === '') {
            // Show "Please enter a search term" message
            const emptyInputMessage = document.createElement('div');
            emptyInputMessage.textContent = "Please enter a search term";
            emptyInputMessage.classList.add('error-message');
            document.body.appendChild(emptyInputMessage);

            // Automatically remove the error message after 5 seconds
            setTimeout(function () {
                emptyInputMessage.remove();
            }, 5000);

            return; // Exit the function
        }

        // Show loader
        loader.style.display = 'block';

        // Simulate search duration
        setTimeout(function () {
            // Simulated search results
            const searchResult = {
                '0001': { // Account_No
                    Book_Name: 'Sample Book',
                    Author: 'John Doe'
                },
                '0005': { // Account_No
                    Book_Name: 'Harry Potter',
                    Author: 'Cj'
                }
            };
            // Check if searchTerm exists in searchResult keys or values
            let foundExactMatch = false;
            let foundInSelectedCategory = false;
            let foundInOtherCategory = false;
            
            for (const key in searchResult) {
                const book = searchResult[key];
                if (key === searchTerm) { // Check for exact key match first
                    foundExactMatch = true;
                    // Display search result
                    accountNo.textContent = key;
                    bookName.textContent = searchResult[key].Book_Name;
                    author.textContent = searchResult[key].Author;
            
                    status_parent.style.display = 'block';
                    tableRes.style.display = 'block';
                    tableHeader.style.display = 'flex';
                    loader.style.display = 'none';
                    break;
                } else if (book.Book_Name === searchTerm || book.Author === searchTerm) {
                    foundExactMatch = true; // Not an exact key match, but found in values
                    break;
                }
                foundInSelectedCategory = selectedCategory === key;
                if (!foundInSelectedCategory) {
                    foundInOtherCategory = true;
                }
            }
            
            // If searchTerm not found, show "The book doesn't exist." message
            if (!foundExactMatch) {
                const errorMessage = document.createElement('div');
                errorMessage.textContent = "The book doesn't exist.";
                errorMessage.classList.add('error-message');
                document.body.appendChild(errorMessage);
            
                // Automatically remove the error message after 5 seconds
                setTimeout(function () {
                    errorMessage.remove();
                }, 5000);
                loader.style.display = 'none';
            } else if (foundInOtherCategory) {
                const errorMessage2 = document.createElement('div');
                errorMessage2.textContent = "The book is found in another category.";
                errorMessage2.classList.add('error-message');
                document.body.appendChild(errorMessage2);
            
                // Automatically remove the error message after 5 seconds
                setTimeout(function () {
                    errorMessage2.remove();
                }, 5000);
                loader.style.display = 'none';
            }
        }, 1000);
    }
});            
