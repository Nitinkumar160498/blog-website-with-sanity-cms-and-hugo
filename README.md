# Blog Website with Sanity CMS and Hugo

A responsive blog website built using Sanity Studio and Hugo. It allows users to manage blog posts in Sanity and display them on a fast, responsive website.

## Live Demo

https://blog-website-with-sanity-cms-and-hugo.netlify.app/

## Technologies Used

- Sanity Studio and TypeScript
- Hugo Static Site Generator
- JavaScript
- Sass (SCSS)
- HTML and CSS

## Features

- Create and manage blog posts, categories, and authors in Sanity
- Sync published blog posts from Sanity to Hugo
- Responsive homepage and blog article pages
- Category and author pages
- Automatic reading time calculation
- Table of contents
- Copy article link button
- Keyboard-friendly navigation and focus styles

## Prerequisites

- Node.js and npm
- Hugo Extended
- Sass CLI

## Getting Started

### 1. Clone the Repository

Clone the repository from GitHub and open the project folder.

### 2. Install Dependencies

```
npm install
```

### 3. Sync Blog Posts

```
npm run sync-sanity
```

### 4. Build the Website

```
npm run build
```

### 5. Start the Local Server

```
npm run dev
```

Open http://localhost:1313/ in your browser.

To build CSS separately, run:

```
npm run build:css
```

## Project Structure

- `content/posts/` – Generated blog posts
- `data/sanity/` – Data synced from Sanity
- `layouts/` – Hugo templates
- `assets/scss/` – SCSS source files
- `assets/css/` – Generated CSS files
- `scripts/` – Sanity synchronization script
- `video/` – Project walkthrough video

## Content Workflow

1. Create and publish a blog post in Sanity Studio.
2. Run `npm run sync-sanity` to sync the content.
3. Run `npm run build` to update the website.

## Deployment

The website is deployed on Netlify. The production URL and build settings are configured for deployment.
