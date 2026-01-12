# Selenium Practice Arena

<div align="center">
  <img src="https://img.shields.io/badge/Selenium-Practice-43B02A?style=for-the-badge&logo=selenium&logoColor=white" alt="Selenium" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
</div>

<br />

A premium, modern static website designed specifically for practicing **Selenium**, **Playwright**, **Cypress**, and **Puppeteer** automation scripts. 

The application runs purely on the client-side (HTML/CSS/JS), making it easy to deploy or run locally without complex backend dependencies.

## 🚀 Features & Challenges

This arena covers a wide range of automation scenarios, from basics to advanced edge cases:

- **📝 Forms & Validation** (`/pages/forms.html`)
  - Text, Password, Email inputs
  - Dropdowns (Select)
  - Checkboxes & Radio buttons
  - Date pickers
  - File Uploads
  - Form submission verification

- **🖱️ Advanced Interactions** (`/pages/interactions.html`)
  - Drag and Drop (HTML5)
  - Double Click events
  - Context Menus (Right-click)
  - Hover states and Tooltips
  - Keyboard inputs

- **⚠️ Alerts & Modals** (`/pages/alerts.html`)
  - Native Browser Alerts (`alert`, `confirm`, `prompt`)
  - New Windows and Tabs verification
  - Custom HTML/CSS Modals (handling overlays)

- **📊 Data Tables** (`/pages/tables.html`)
  - Parsing static tables
  - Dynamic sorting (JavaScript)
  - Client-side filtering/search
  - Status badges verification

- **⏳ Synchronization** (`/pages/sync.html`)
  - **Explicit Waits**: Elements loading after strict delays
  - **Dynamic States**: Buttons enabling after a timeout
  - **Changing Content**: Text updating periodically

- **🖼️ Frames & Iframes** (`/pages/frames.html`)
  - Switching context to direct children iframes
  - Handling Nested Iframes (Grandparent -> Parent -> Child)

- **👻 Shadow DOM** (`/pages/shadow.html`)
  - Accessing elements inside Open Shadow Roots
  - Handling Deeply Nested Shadow Roots

## 🛠️ Usage

### Running Locally
Since this is a static project, you can:
1.  Clone the repository.
2.  Open `index.html` directly in your browser.
3.  (Optional) Serve with VS Code Live Server or Python:
    ```bash
    python -m http.server 8000
    ```

### Automation Example (Python Selenium)

```python
from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()
driver.get("file:///path/to/generated/project/index.html")

# Click on Forms Card
driver.find_element(By.ID, "card-forms").click()

# Fill Login
driver.find_element(By.ID, "username").send_keys("admin")
driver.find_element(By.ID, "password").send_keys("password123")
driver.find_element(By.ID, "login-submit").click()

assert "Login Successful" in driver.page_source
driver.quit()
```

## 🎨 Design
Built with a modern "Dark Mode" aesthetic using vanilla CSS variables, glassmorphism effects, and the Inter font family.

---
*Built for educational purposes.*
