# GBSB Global AI Summer School - Lead Magnet Quiz

Interactive AI Readiness Quiz to capture leads for the GBSB Global AI Summer School program in Barcelona (July 6-24, 2026).

## 🎯 What This Does

- **10-question personality quiz** that determines a user's AI learning style
- **4 unique personas** with personalized program recommendations
- **HubSpot integration** for lead capture
- **Social sharing** functionality (Instagram, LinkedIn, WhatsApp)
- **Fully branded** with GBSB Global colors and typography

## 📁 Project Structure

```
ai-quiz/
├── index.html          # Welcome/landing page
├── quiz.html           # 10-question quiz interface
├── email-capture.html  # HubSpot form integration
├── results.html        # Personalized results page
├── styles.css          # GBSB Global branded styling
├── script.js           # Quiz logic and scoring system
└── README.md           # This file
```

## 🚀 Deployment to GitHub Pages

### Step 1: Create a GitHub Account (if you don't have one)
1. Go to [github.com](https://github.com)
2. Click "Sign up"
3. Follow the registration process

### Step 2: Create a New Repository
1. Once logged in, click the **"+"** icon in the top right
2. Select **"New repository"**
3. Name it: `ai-summer-quiz` (or any name you prefer)
4. Make it **Public**
5. DO NOT initialize with README (we already have files)
6. Click **"Create repository"**

### Step 3: Upload Your Files
**Option A: Using GitHub Web Interface (Easiest)**
1. On your new repository page, click **"uploading an existing file"** link
2. Drag and drop ALL files:
   - index.html
   - quiz.html
   - email-capture.html
   - results.html
   - styles.css
   - script.js
3. Scroll down and click **"Commit changes"**

**Option B: Using Git Command Line**
```bash
cd ai-quiz
git init
git add .
git commit -m "Initial commit - AI Readiness Quiz"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/ai-summer-quiz.git
git push -u origin main
```

### Step 4: Enable GitHub Pages
1. In your repository, click **"Settings"** (top menu)
2. Scroll down and click **"Pages"** in the left sidebar
3. Under "Source", select **"main"** branch
4. Click **"Save"**
5. Wait 2-3 minutes for deployment

### Step 5: Get Your Live URL
Your quiz will be live at:
```
https://YOUR-USERNAME.github.io/ai-summer-quiz/
```

Example: If your username is "sergey-marketing", the URL will be:
```
https://sergey-marketing.github.io/ai-summer-quiz/
```

## 🔗 Embedding on WordPress

### Option 1: iFrame Embed (Recommended)
Add this code to your WordPress landing page:

```html
<iframe 
  src="https://YOUR-USERNAME.github.io/ai-summer-quiz/" 
  width="100%" 
  height="800px" 
  frameborder="0"
  style="border: none; overflow: hidden;">
</iframe>
```

### Option 2: Direct Link Button
Add a button on your landing page that links to the quiz:

```html
<a href="https://YOUR-USERNAME.github.io/ai-summer-quiz/" 
   class="quiz-button" 
   target="_blank">
   Take the AI Readiness Quiz
</a>
```

## 🎨 Customization

### Adding Your Logo
1. Save your GBSB Global logo as `logo.png`
2. Upload it to your GitHub repository
3. Edit `index.html`, `quiz.html`, `email-capture.html`, and `results.html`
4. Replace this line:
```html
<div class="logo-placeholder">
    <h1>GBSB Global</h1>
</div>
```

With:
```html
<div class="logo-placeholder">
    <img src="logo.png" alt="GBSB Global" style="max-width: 250px;">
</div>
```

### Updating Colors
All colors are in `styles.css` at the top:
```css
:root {
    --primary-red: #C63228;
    --secondary-orange: #F6B661;
    --light-yellow: #FEF6BE;
    /* ... */
}
```

### Changing the Application Link
In `results.html`, find this line and update the URL:
```html
<a href="#" class="btn-primary btn-large">Apply Now - 25% Discount Available</a>
```

Change `href="#"` to your actual application page URL.

## 📊 HubSpot Integration

The quiz is already configured with your HubSpot form:
- **Portal ID:** 48585497
- **Form ID:** e857ed2b-897d-43c9-ab9a-af1031ad2ad3

### To View Leads in HubSpot:
1. Log in to HubSpot
2. Go to **Contacts** → **Contacts**
3. All quiz submissions will appear here automatically

### To Customize the Form:
1. Log in to HubSpot
2. Go to **Marketing** → **Forms**
3. Find your form and edit fields as needed
4. The form will auto-update on your quiz (no code changes needed)

## 🔧 Testing Locally

To test before deploying:

1. Open `index.html` in your web browser
2. Navigate through the quiz
3. Note: HubSpot form will work even in local testing

## 📱 Mobile Responsive

The quiz is fully responsive and works on:
- ✅ Desktop computers
- ✅ Tablets
- ✅ Mobile phones

## 🎯 Lead Flow

1. User lands on welcome page (`index.html`)
2. User takes 10-question quiz (`quiz.html`)
3. User submits email via HubSpot form (`email-capture.html`)
4. User sees personalized results (`results.html`)
5. Lead is captured in HubSpot automatically

## 📈 Analytics Tracking

### Adding Google Analytics (Optional)
Add this code to the `<head>` section of all HTML files:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

Replace `GA_MEASUREMENT_ID` with your actual Google Analytics ID.

## 🐛 Troubleshooting

### Quiz not loading?
- Check browser console for errors (F12)
- Make sure all files are uploaded to GitHub
- Verify GitHub Pages is enabled

### HubSpot form not showing?
- Check that the script tag is loading
- Verify your HubSpot Portal ID and Form ID
- Check browser console for errors

### Results page is blank?
- Make sure you completed the quiz (all 10 questions)
- Check if JavaScript is enabled in your browser
- Try clearing browser cache

## 📞 Support

For technical issues:
- Check browser console (F12) for error messages
- Verify all files are uploaded correctly
- Ensure GitHub Pages is active

## 🎉 Launch Checklist

Before going live:

- [ ] All files uploaded to GitHub
- [ ] GitHub Pages enabled
- [ ] Test complete quiz flow (start to finish)
- [ ] Verify HubSpot form captures leads
- [ ] Update application link in results page
- [ ] Add your GBSB Global logo
- [ ] Test on mobile device
- [ ] Share URL with team for review
- [ ] Embed or link from WordPress landing page

## 📊 Personas Overview

The quiz identifies 4 personas:

1. **The Technical Architect** - Hands-on coders who love building
2. **The Business Strategist** - Strategic thinkers focused on ROI
3. **The Visionary Thinker** - Interested in AI's societal impact
4. **The Entrepreneur** - Ready to build and launch startups

Each persona gets customized curriculum recommendations based on the program structure.

---

**Built for GBSB Global AI Summer School Barcelona 2026**
🎓 July 6-24, 2026 | Ages 16-20 | 25% Early Bird Discount until December 22, 2025
