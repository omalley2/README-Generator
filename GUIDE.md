# README Generator - Quick Start Guide

## What I Completed

I've implemented the complete Professional README Generator challenge based on all the NodeJS concepts covered in folders 02-09 of the FullStackforBeginners course.

### Key Concepts Used:

1. **Node.js Fundamentals** (01-Ins_Node)
   - Running JavaScript outside the browser
   - Using Node.js built-in modules

2. **ES6 Features** (03-09 Activities)
   - Arrow functions for concise function syntax
   - Template literals for building the README string
   - Object destructuring in function parameters

3. **File System (fs) Module** (13-16 Activities)
   - `fs.writeFile()` to create the README.md file asynchronously
   - Error handling for file operations

4. **Modularization** (17-18 Activities)
   - Separated concerns: `index.js` handles user interaction, `generateMarkdown.js` handles content generation
   - Used `require()` and `module.exports` for importing/exporting

5. **NPM Package Management** (19-20 Activities)
   - Using `inquirer@8.2.4` package
   - Understanding `package.json` and dependencies

6. **Inquirer Package** (23-26 Activities)
   - Different question types: `input`, `list`
   - Input validation for required fields and email format
   - Using `.then()` and `.catch()` for promise handling

## How to Run

1. **Navigate to the Develop folder:**
   ```bash
   cd /Users/joeryanomalley/Desktop/fullstackforbeginners/09-NodeJS/02-Challenge/Develop
   ```

2. **Install dependencies (if not already installed):**
   ```bash
   npm install
   ```

3. **Run the application:**
   ```bash
   node index.js
   ```

4. **Answer all the prompts:**
   - Project title
   - Description
   - Installation instructions
   - Usage information
   - Contribution guidelines
   - Test instructions
   - License (choose from: MIT, Apache 2.0, GPL 3.0, BSD 3-Clause, None)
   - GitHub username
   - Email address

5. **Check the generated README.md** in the Develop folder

## Features Implemented

✅ **All Required Questions:**
- Project title with validation
- Description with validation
- Installation instructions (default: "npm install")
- Usage information with validation
- Contribution guidelines (with default message)
- Test instructions (default: "npm test")
- License selection from a list
- GitHub username with validation
- Email address with format validation

✅ **Professional README Structure:**
- Title with # heading
- License badge at the top (if license selected)
- Description section
- Table of Contents with working links
- Installation section with code block
- Usage section
- License section (only if license selected)
- Contributing section
- Tests section with code block
- Questions section with GitHub link and email

✅ **License Handling:**
- Badge URLs for MIT, Apache 2.0, GPL 3.0, and BSD 3-Clause
- Conditional rendering (no license content if "None" selected)
- License link only appears in Table of Contents if license is selected

✅ **Input Validation:**
- Required fields cannot be empty
- Email must be in valid format
- User-friendly error messages

✅ **Error Handling:**
- File write error handling
- Inquirer prompt error handling
- Console messages for success/failure

## Sample Usage

Here's what the prompts will look like:

```
? What is your project title? My Awesome Project
? Please provide a description of your project: This is a really cool project that does amazing things!
? What are the installation instructions? npm install
? What is the usage information? Run 'node index.js' to start the application
? What are the contribution guidelines? Please contact me if you would like to contribute to this project.
? What are the test instructions? npm test
? Choose a license for your project: MIT
? What is your GitHub username? yourusername
? What is your email address? your.email@example.com

Success! README.md has been generated!
```

## File Structure

```
Develop/
├── index.js                    # Main application file
├── utils/
│   └── generateMarkdown.js     # Markdown generation logic
├── package.json                # NPM configuration
└── README.md                   # Generated output (after running)
```

## Key Code Highlights

### index.js
- Imports `fs`, `inquirer`, and `generateMarkdown`
- Contains `questions` array with all prompts
- `writeToFile()` function uses `fs.writeFile()`
- `init()` function orchestrates the flow
- Input validation for email and required fields

### utils/generateMarkdown.js
- `renderLicenseBadge()` - Returns license badge markdown
- `renderLicenseLink()` - Returns TOC link (if license exists)
- `renderLicenseSection()` - Returns license section (if license exists)
- `generateMarkdown()` - Main function that builds the complete README using template literals

## Next Steps

After running the application, you can:
1. Open the generated README.md in VS Code's markdown preview
2. Verify all sections are present
3. Test that the Table of Contents links work
4. Check that the license badge appears (if you selected a license)

Enjoy your professional README generator! 🎉
