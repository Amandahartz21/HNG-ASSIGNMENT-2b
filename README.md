This is a Responsive Accessible Profile Card component built with semantic HTML, modern CSS, and vanilla JavaScript.

Features

-   Semantic HTML5: Built using `<article>`, `<figure>`, `<nav>`, and `<section>` for optimal SEO and screen reader support.
-   Real-time Epoch Display: Dynamically updates the current time in milliseconds using `Date.now()`.
-   Fully Responsive: Fluid layout using CSS Flexbox and Grid that transitions from a mobile-stacked view to a desktop side-by-side layout.
-   A11y Compliant: 
    -   WCAG AA color contrast.
    -   Visible focus indicators for keyboard navigation.
    -   Descriptive `alt` text for imagery.
    -   Targeted `rel="noopener noreferrer"` for external social links.

Tech Stack

-   HTML (Semantic Structure)
-   CSS (Flexbox, Grid, Custom Properties)
-   Vanilla JavaScript 

Testing Strategy

| Element | Test ID |
| Root Card | `test-profile-card` |
| Avatar Image | `test-user-avatar` |
| User Name | `test-user-name` |
| Current Time (ms) | `test-user-time` |
| Social Links Container | `test-user-social-links` |
| Hobbies List | `test-user-hobbies` |
| Dislikes List | `test-user-dislikes` |

How to Run this Code

1.  Clone the repository:
    ```bash
    git clone https://github.com
    ```
2.  Navigate to the folder:
    ```bash
    cd profile-card
    ```
3.  Launch:
    Since this project uses no external dependencies, simply open `index.html` in any modern web browser or use a "Live Server" extension in VS Code.

Limitation and Mitigation

1. Performance Overload (The "Timer" Issue)
* The Limitation: Frequent DOM updates (500 times per second) can cause high CPU usage, especially on mobile devices or older browsers.
* Result: It may lead to "jank" (stuttering) if other heavy animations or scripts are running simultaneously.

2. Screen Reader "Noise"

* The Limitation: Because the time updates every 500ms, if you set aria-live="polite" or "assertive" on the time element, a screen reader would attempt to announce the time constantly.
* The Fix: In the code provided, I set aria-live="off". This means the user must manually navigate to the time to hear it, rather than being bombarded by updates.

3. Image Loading & Layout Shift

* The Limitation: The avatar uses a placeholder URL. If the image is large or the connection is slow, the card might "jump" or shift its height once the image finally loads (Cumulative Layout Shift).
* Mitigation: To fix this, you would need to add explicit width and height attributes to the <img> tag or a pre-defined aspect ratio in CSS.

4. Browser Compatibility

* The Limitation: The CSS uses CSS Grid and Flexbox.
* Result: While supported by 98%+ of modern browsers, it will not render correctly on very old browsers (like Internet Explorer 11) without significant polyfills or fallback styling.

5. Client-Side Time Drift

* The Limitation: Date.now() relies on the user's local system clock.
* Result: If a user’s computer clock is set incorrectly (e.g., 5 minutes fast), the "Current Time" displayed on the card will also be incorrect. It does not reflect a centralized "Server Time."

6. No Persistent State

* The Limitation: If you add a "File Upload" for the avatar (as discussed earlier), the image will disappear as soon as the page is refreshed because there is no Backend or LocalStorage implementation to save the data.

