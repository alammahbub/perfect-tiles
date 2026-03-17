# Perfect Concrete Products
![Perfect Concrete Hero](src/assets/gallery/paving_stones.jpg)

A modern, high-performance, and visually stunning landing page for **Perfect Concrete Products**, a leading manufacturer of premium interlocking pavers, wall blocks, and theme-based concrete tiles. Built from the ground up to showcase exactly what makes their hydraulic-pressure products the industry standard.

---

## ✨ Features

- **Dynamic Tile Rendering Engine**
  Instead of using static images, the product catalog uses a custom-built, lightweight SVG engine that mathematically draws top-down geometric representations of every single paver style (e.g., Century Button, Shapla, Grass Parking, Double Interlocking, Hexagonal) perfectly accurately.
- **Auto-populating Project Showcase Gallery**
  A highly responsive, scroll-snapping slider that automatically indexes and displays any images dropped into the `src/assets/gallery/` folder without requiring a single line of code to be updated. Supported formats: `.jpg, .png, .webp, .svg`.
- **Cost-Effective Analysis**
  A beautifully styled, interactive data table comparing the savings and spatial advantages of Perfect Concrete hollow blocks against traditional brick walls.
- **Modern & Premium Design Aesthetic**
  Leverages deep slate and vibrant teal color palettes, smooth hover micro-animations, glassmorphism overlays, and robust typography to exude a premium manufacturing brand identity.
- **Fully Responsive**
  Flawless layout behavior across massive desktop monitors down to mobile touchscreen devices, complete with touch-swipe slider support and clean mobile navigation.

## 🛠 Tech Stack

- **Framework:** React 19 (via Vite 8)
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Module Bundler:** Vite

---

## 🚀 Getting Started

To run this project locally, ensure you have **Node.js** and **Yarn** installed on your machine.

### 1. Clone the repository
```bash
git clone https://github.com/your-username/perfect-tiles-website.git
cd perfect-tiles-website
```

### 2. Install dependencies
```bash
yarn install
```

### 3. Start the development server
```bash
yarn dev
```

The application will be running at `http://localhost:5173/`.

### 4. Build for Production
```bash
yarn build
```
This will generate optimized, minified static files inside a `dist/` directory.

### 5. Deploying to PHP/Apache
The project is pre-configured with `base: './'` and an `.htaccess` file for seamless deployment on standard PHP/Apache hosting environments.

1. Run the build command as shown above.
2. Upload the entire content of the **`dist/`** folder to your server's root (e.g., `public_html`).
3. The `.htaccess` file will handle routing and ensure assets load correctly even if installed in a subdirectory.

---

## 📂 Project Structure highlights

```
├── public/                 # Static assets like favicons
├── src/                    
│   ├── assets/             # Images and global files
│   │   ├── gallery/        # Drop new gallery images here to auto-update the slider!
│   ├── App.jsx             # Main application and component logic
│   ├── index.css           # Global entry styles and Tailwind v4 imports
│   └── main.jsx            # React root injection point
├── package.json            # Project dependencies and scrips
├── vite.config.js          # Vite and Tailwind compiler configurations
└── README.md
```

---

## 📧 Contact Information

**Brand:** Perfect Concrete Products  
**Unit 1:** Gabtoli Beribadh, Mirpur, Dhaka.  
**Unit 2:** Bakchar, Singair, Manikganj.  
**Phone:** +88 01731 403 368 / +88 01743 673 648  
**Email:** mamunsobhan@gmail.com 

All rights reserved © 2024 Perfect Concrete Products.
