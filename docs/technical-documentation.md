## 1. Feature Implementation Details

### 1.1 Project Filtering

#### How It Works

- **HTML Structure:** Each project card has a `data-category` attribute (`design` or `tech`).
- **Filter Buttons:** Each button has a `data-filter` attribute matching the project categories.
- **JavaScript Logic:** Event listeners detect button clicks, compare filter values, and toggle CSS classes to show or hide projects.

#### Code Logic
When a filter button is clicked, the script reads the `data-filter` value and compares it with the `data-category` of each project. Projects that match remain visible, while others are hidden by applying a CSS class.

---

### 1.2 Dark/light Theme

#### How It Works

- **Persistence:** When the page loads, the script checks `localStorage` for a saved theme preference.
- **Toggle:** When the toggle button is clicked, the script adds or removes the `.dark` class on the `<body>` element.
- **Storage Update:** The selected theme is stored again in `localStorage` so it saves for future visits.

---

### 1.3 Form validation

#### Validation Rules

- **Name / message:** The script checks whether these fields are empty.
- **Feedback:** If the form is valid, a success message is displayed and the form is cleared.

---

### 1.4 Greeting 

If a name has been saved in `localStorage` from a previous form submission, the website greets the user by name on the next visit.  
Example:

> Welcome back, Name!

---

## 2. CSS 

- **Transitions:** Interactive elements such as buttons and project cards use `transition: 0.2s` to create smooth visual effects.

---

## 3. Browser Compatibility & Performance

- **Compatibility:** The website was tested on Chrome, Firefox, and Safari. 
- **Performance:** No external libraries (such as Bootstrap) were used, resulting in a lightweight page.

---

## 4. Conclusion

This project successfully integrates several core web development concepts:

- **Dynamic Content:** A project filtering system that updates the visible content.
- **Data Handling:** Storage of theme preference and user name using `localStorage`.
- **Error Handling:** Form validation to prevent incorrect submissions.
- **User Experience:** Smooth transitions and persistent theme preferences.
