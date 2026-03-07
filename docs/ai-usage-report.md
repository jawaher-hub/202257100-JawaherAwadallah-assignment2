# AI Usage Report

## Tools Used
1. **ChatGPT**
2. **Gemini**

## How AI was Used:

### 1. Project Filtering Logic (JavaScript)
**Goal:** Implement a feature where clicking buttons would show or hide specific project cards based on their category.
**AI Assistance:** I asked ChatGPT: *"How can I implement a simple project filter in js using data attributes?"*
**My Contribution:** I took the provided logic, adapted it to match my specific HTML structure (using `data-category`).

### 2. Form Validation & Feedback
**Goal:** The contact form needed to provide feedback to the user ("Sending..." or "Success")
**AI Assistance:** I used gemini, the event listener for the form submit event. It suggested using `preventDefault()` and basic validation checks.
**My Contribution:** I modified the code to include a simulated delay (using `setTimeout`) and added logic to save the user's name to `localStorage` as suggested.

### 3. Dark Mode Persistence
**Goal:** Ensure the user's theme preference is remembered when they refresh the page.
**AI Assistance:** I asked for a snippet to save the theme preference to `localStorage` and retrieve it on page load.
**My Contribution:** I integrated this into the existing theme toggle code and ensured the button icon updates correctly based on the saved state.

### 4. Documentation
**AI Assistance:** document formating and flow suggestions.
## Reflection
Using AI helped me implement features like filtering and local storage much and understood how to implement the logic correctly.
