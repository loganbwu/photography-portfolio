# Photos by Logan Wu

**Note:** The `index.html` file is automatically generated from `index.html.template`. Do not modify `index.html` directly; instead, edit `index.html.template` and run `build.js` to regenerate the `index.html` file.

This is the source code for my photography portfolio website, hosted on [photosby.loganwu.co.nz](https://photoswy.loganwu.co.nz) via GitHub Pages. It showcases my work with pole dance and aerial arts studios, where I do event photography and run photoshoots. The site is lightweight, static, and easy to maintain.

---

## 🧭 Development Plan

__Phase 1: Basic Structure__

- [x] Set up repo and GitHub Pages configuration (This is assumed to be done)

- [x] Create folder structure: (Completed)

  ```javascript
  /
  ├── index.html
  ├── about.html
  ├── contact.html
  ├── photos/
  │   └── [album-name]/
  ├── assets/
  │   ├── css/
  │   └── js/
  └── README.md
  ```

__Phase 2: Static Album Viewer__
- Adobe Portfolio style layout: Maximum of 3 images per row, new row only if previous row is full. Images retain original aspect ratio. All images in a row have equal heights. Width (and scaling factor) is determined by scaling the entire row to fill the page or content div width. Consistent margins/padding between all photos.

- [ ] Albums are exported from Lightroom into `photos/[album-name]/` (User needs to provide the images)
- [ ] JavaScript scans folders and renders thumbnails + clicking an image should display it in fullscreen or full window
- [ ] Responsive grid layout for albums using CSS Grid or Flexbox

- [ ] Implement fullscreen or full window viewer

__Phase 3: Styling__

- [ ] Clean, minimal UI using CSS only (no frameworks)
- [ ] Font pairing and consistent color palette for a professional look
- [ ] Mobile-friendly and retina-optimized

__Phase 4: Hosting and Deployment__

- [ ] Deploy via GitHub Pages
- [ ] Use `photosby.loganwu.co.nz` as custom domain (via CNAME file)
- [ ] Push to `main` branch triggers deployment

Here's a more detailed plan with specific steps:

1. __Phase 2: Static Album Viewer__

   - __Provide Sample Images:__ The user needs to export sample images from Lightroom into the `photos/example-album/` directory so I can work on the JavaScript functionality.

   - __Implement JavaScript Logic:__ Write JavaScript code in `assets/js/script.js` to:

     - Scan the `photos` directory for album folders.
     - For each album folder, scan for image files (e.g., `.jpg`, `.jpeg`, `.png`).
     - Create thumbnail elements for each image.
     - Append the thumbnails to the `#album-viewer` div in `index.html`.

   - __Implement Fullscreen Image Display:__ Add functionality to display the full-size image in fullscreen or full window when a thumbnail is clicked.

   - __Implement Responsive Grid Layout:__ Use CSS Grid or Flexbox in `assets/css/style.css` to create a responsive grid layout for the album thumbnails.

2. __Phase 3: Styling__

   - __Choose Font Pairing:__ Select appropriate font pairings for headings and body text.

   - __Define Color Palette:__ Define a consistent color palette for the website.

   - __Implement CSS Styles:__ Add CSS styles to `assets/css/style.css` to:

     - Create a clean, minimal UI.
     - Apply the chosen font pairings and color palette.
     - Make the website mobile-friendly using media queries.
     - Optimize for retina displays.

3. __Phase 4: Hosting and Deployment__

   - __Configure GitHub Pages:__ Ensure GitHub Pages is configured to deploy the website from the `main` branch.
   - __Set Up Custom Domain:__ Add a CNAME file to the repository with the custom domain `photosby.loganwu.co.nz`.
   - __Deploy Website:__ Push the code to the `main` branch to trigger deployment.

I need to ask the user to provide sample images for Phase 2.

Okay, I've created a detailed development plan for your website based on the 'README.md' file.

Here's the plan:

__Phase 1: Basic Structure__

- [x] Set up repo and GitHub Pages configuration (This is assumed to be done)
- [x] Create folder structure: (Completed)

__Phase 2: Static Album Viewer__

- [ ] Albums are exported from Lightroom into `photos/[album-name]/` (User needs to provide the images)
- [ ] JavaScript scans folders and renders thumbnails + clicking an image should display it in fullscreen or full window
- [ ] Responsive grid layout for albums using CSS Grid or Flexbox

__Phase 3: Styling__

- [ ] Clean, minimal UI using CSS only (no frameworks)
- [ ] Font pairing and consistent color palette for a professional look
- [ ] Mobile-friendly and retina-optimized

__Phase 4: Hosting and Deployment__

- [ ] Deploy via GitHub Pages
- [ ] Use `photosby.loganwu.co.nz` as custom domain (via CNAME file)
- [ ] Push to `main` branch triggers deployment

Here's a more detailed plan with specific steps:

1. __Phase 2: Static Album Viewer__

   - __Provide Sample Images:__ You need to export sample images from Lightroom into the `photos/example-album/` directory so I can work on the JavaScript functionality.

   - __Implement JavaScript Logic:__ Write JavaScript code in `assets/js/script.js` to:

     - Scan the `photos` directory for album folders.
     - For each album folder, scan for image files (e.g., `.jpg`, `.jpeg`, `.png`).
     - Create thumbnail elements for each image.
     - Append the thumbnails to the `#album-viewer` div in `index.html`.

   - __Implement Fullscreen Image Display:__ Add functionality to display the full-size image in fullscreen or full window when a thumbnail is clicked.

   - __Implement Responsive Grid Layout:__ Use CSS Grid or Flexbox in `assets/css/style.css` to create a responsive grid layout for the album thumbnails.

2. __Phase 3: Styling__

   - __Choose Font Pairing:__ Select appropriate font pairings for headings and body text.

   - __Define Color Palette:__ Define a consistent color palette for the website.

   - __Implement CSS Styles:__ Add CSS styles to `assets/css/style.css` to:

     - Create a clean, minimal UI.
     - Apply the chosen font pairings and color palette.
     - Make the website mobile-friendly using media queries.
     - Optimize for retina displays.

3. __Phase 4: Hosting and Deployment__

   - __Configure GitHub Pages:__ Ensure GitHub Pages is configured to deploy the website from the `main` branch.
   - __Set Up Custom Domain:__ Add a CNAME file to the repository with the custom domain `photosby.loganwu.co.nz`.
   - __Deploy Website:__ Push the code to the `main` branch to trigger deployment.


---

## 🧰 Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- GitHub Pages (static hosting)

---

## 🧑‍💻 Developer Workflow

1. Clone the repo:
 ```bash
 git clone https://github.com/loganbu/photos-site.git
 cd photos-site

2.  Implement a build script to generate the file list dynamically:

    *   Install Node.js and npm: Ensure that Node.js and npm are installed on your Mac.
    *   Create a `package.json` file: Create a `package.json` file in the root of your project by running `npm init -y`.
    *   Create a build script: Create a JavaScript file (e.g., `build.js`) in the root of your project with the following code:

        ```javascript
        const fs = require('fs');
        const path = require('path');

        const directoryPath = path.join(__dirname, 'photos', 'polefolio');

        fs.readdir(directoryPath, function (err, files) {
            if (err) {
                return console.log('Unable to scan directory: ' + err);
            }

            const imageFiles = files.filter(file => file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png'));

            fs.writeFile(path.join(directoryPath, 'filelist.json'), JSON.stringify(imageFiles), function (err) {
                if (err) {
                    return console.log('Error writing file: ' + err);
                }

                console.log('filelist.json created successfully!');
            });
        });
        ```

    *   Add a build script to `package.json`: Add a `build` script to the `package.json` file:

        ```json
        {
          "name": "photos-site",
          "version": "1.0.0",
          "description": "",
          "main": "index.js",
          "scripts": {
            "build": "node build.js"
          },
          "keywords": [],
          "author": "",
          "license": "ISC"
        }
        ```

    *   Create a GitHub Actions workflow: Create a GitHub Actions workflow file (e.g., `.github/workflows/deploy.yml`) with the following code:

        ```yaml
        name: Deploy to GitHub Pages

        on:
          push:
            branches: [ main ]

        jobs:
          deploy:
            runs-on: ubuntu-latest
            steps:
              - uses: actions/checkout@v2
              - name: Set up Node.js
                uses: actions/setup-node@v2
                with:
                  node-version: '16'
              - name: Install dependencies
                run: npm install
              - name: Build website
                run: npm run build
              - name: Deploy to GitHub Pages
                uses: peaceiris/actions-gh-pages@v3
                with:
                  github_token: ${{ secrets.GITHUB_TOKEN }}
                  publish_dir: ./
