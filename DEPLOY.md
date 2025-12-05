# Deploying to GitHub Pages

## Step 1: Create the Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **+** icon in the top right → **New repository**
3. Repository name: `webpage` (or any name you prefer)
4. Description: "Personal webpage"
5. Set to **Public** (required for free GitHub Pages)
6. **Don't** initialize with README, .gitignore, or license
7. Click **Create repository**

## Step 2: Enable GitHub Pages

1. Go to your repository settings
2. Navigate to **Pages** in the left sidebar
3. Under **Source**, select **GitHub Actions**
4. Save

## Step 3: Push Your Code

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Personal webpage"

# Add your GitHub repository as remote
git remote add origin https://github.com/ze-alves-figueiroa/webpage.git

# Push to main branch
git branch -M main
git push -u origin main
```

## Step 4: Wait for Deployment

GitHub Actions will automatically:
1. Build your site
2. Deploy it to GitHub Pages

The site will be available at:
- `https://ze-alves-figueiroa.github.io/webpage/`

## Note on Static Generation

Your page currently uses server-side features (cookies, headers). For GitHub Pages, you'll need to enable static generation. The workflow is set up, but you may need to adjust the `prerender` setting in `src/pages/index.astro` if you encounter issues.

