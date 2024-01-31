
# Basic Accordion

This project is a basic implementation of an accordion component using HTML, CSS, and JavaScript. An accordion is a user interface element that allows users to expand and collapse sections of content.


## Introduction

An accordion is a commonly used user interface pattern that consists of a list of items, each with a header and associated content. When a header is clicked, its associated content is revealed or hidden. This project demonstrates the implementation of a simple accordion component using HTML, CSS for styling, and JavaScript for dynamic behavior.

## Features

- **Accordion Creation**: The accordion is dynamically created based on the data provided in the JavaScript file.
- **Expand/Collapse Functionality**: Users can expand or collapse accordion items by clicking on their respective headers.
- **Interactive Design**: The accordion's design includes interactive icons to indicate the expand/collapse state of each item.

## Technologies Used

- **HTML**: Markup language for structuring the web page.
- **CSS**: Cascading Style Sheets for styling the accordion component.
- **JavaScript**: Programming language used for dynamic behavior and interactivity of the accordion.

Certainly! Here's a simplified explanation of the JavaScript functions used in your project:

### JavaScript Functions

1. **`creteAccordionData()`**:
   - This function creates the accordion items on the webpage based on the data provided in the `data` array.
   - It goes through each item in the `data` array and generates HTML markup for each accordion item, including the question and answer.
   - Finally, it adds this generated HTML markup to the `.accordion` wrapper element in the HTML document.

2. **Event Listener for Accordion Titles**:
   - This code snippet adds event listeners to each accordion title (`.accordion_tittle`).
   - When a title is clicked, the event listener triggers a function that handles the opening and closing of accordion items.

3. **Event Handling Logic**:
   - Inside the event listener function, it checks if the clicked accordion title is already active.
   - If the title is active, it collapses the associated content by removing the `active` class.
   - If the title is not active, it first collapses any other open accordion items by removing the `active` class from all other accordion titles.
   - Then, it adds the `active` class to the clicked accordion title, expanding its associated content.

These JavaScript functions enable the dynamic behavior of the accordion component, allowing users to interactively expand and collapse accordion items to view their content.


## Usage

1. Clone the repository to your local machine.
    ```bash
    git clone https://github.com/gkvgk2001/Basic-Accordion.git
    ```

2. Navigate to the project directory.
    ```bash
    cd basic-accordion
    ```

3. Open the `index.html` file in your preferred web browser.

4. Interact with the accordion:
    - Click on an accordion item's header to expand or collapse its content.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or improvements, feel free to open an issue or create a pull request.
