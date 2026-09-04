# Harshhaa Vardhan Reddy - DevOps Engineer CV Portfolio

A modern, performant, and accessible CV/portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green)

## 📸 Preview

Visit the live site: [cv.harshhaareddy.com](https://cv.harshhaareddy.com)

---

## 🎯 Site Usage & Features

### Navigation

| Feature | Desktop | Mobile | Keyboard |
|---------|---------|--------|----------|
| **Section Navigation** | Floating pill menu at top center | Slide-out drawer menu | Click navigation items |
| **Active Section Highlight** | Auto-highlights current section while scrolling | Same behavior | - |
| **Smooth Scrolling** | Click any nav item to smooth scroll | Tap menu items | - |

### Interactive Features

#### 🎨 Theme Toggle
- **Location**: Top-left corner (mobile) / Top-right corner (desktop)
- **Function**: Switch between light and dark mode
- **Animation**: Smooth icon rotation transition
- **Persistence**: Theme preference saved to local storage

#### ⌘ Command Menu (Power User Feature)
- **Open**: Press `⌘K` (Mac) or `Ctrl+K` (Windows/Linux)
- **Mobile**: Tap the command icon button (bottom-right corner)
- **Features**:
  - 🔍 Search all links and contacts
  - 🌓 Toggle theme quickly
  - ⬆️ Scroll to top
  - 🖨️ Print page
  - 📋 Copy any link with one click
  - 📚 Recently visited links history

#### 📥 Download Resume
- **Location**: Header section, next to contact buttons
- **Function**: Downloads a formatted text resume instantly
- **Format**: Plain text (.txt) with all resume details

#### 📋 Copy Email Button
- **Location**: About section header
- **Function**: One-click copy email address to clipboard
- **Feedback**: Visual confirmation with checkmark icon

#### ⬆️ Scroll to Top
- **Location**: Bottom-left (mobile) / Bottom-right (desktop)
- **Visibility**: Appears after scrolling down 300px
- **Animation**: Smooth scroll with hover scale effect

### Content Sections

#### 👤 About Section
- Profile summary with avatar
- Online status indicator on avatar
- Quick stats cards showing:
  - Years of experience
  - Number of projects
  - Companies worked with
  - Skills count

#### 💼 Work Experience
- Timeline-based layout
- Company logos and details
- Multiple roles per company support
- Date ranges with descriptions
- Technology badges per role

#### 🎓 Education
- Card-based layout
- Degree and institution details
- Date ranges
- Description bullet points

#### 🛠️ Skills
- **Categorized Display**: Skills grouped by category (Cloud, DevOps, CI/CD, etc.)
- **Expandable Cards**: Click to expand/collapse categories
- **Hover Effects**: Interactive badges with scale animations
- **Auto-categorization**: Skills automatically sorted into relevant categories

#### 📁 Projects
- **Grid Layout**: Responsive card grid
- **Search & Filter**: 
  - Search by project name, description, or tech
  - Filter by technology tags
  - Real-time result count
- **Project Cards**:
  - Title and description
  - Technology stack badges
  - "New" badge for recent projects
  - Hover effects with shadow
  - Links to live demos and source code

### Accessibility Features

| Feature | Description |
|---------|-------------|
| **Keyboard Navigation** | Full keyboard support for all interactive elements |
| **ARIA Labels** | Screen reader friendly with proper ARIA attributes |
| **Focus Indicators** | Visible focus rings on all interactive elements |
| **Reduced Motion** | Respects `prefers-reduced-motion` setting |
| **High Contrast** | Works with high contrast mode |
| **Semantic HTML** | Proper heading hierarchy and landmarks |

### Print Support
- **Print-optimized layout**: Clean, professional resume format
- **Hidden elements**: Navigation, buttons, and interactive elements hidden when printing
- **Page breaks**: Smart page break handling for sections
- **Access**: Press `⌘P` / `Ctrl+P` or use Command Menu

### Responsive Design

| Breakpoint | Layout |
|------------|--------|
| **Mobile** (< 768px) | Single column, drawer navigation, optimized touch targets |
| **Tablet** (768px - 1024px) | Adaptive layout with floating navigation |
| **Desktop** (> 1024px) | Full layout with command menu hint in footer |

---

## 🚀 Features

### Performance Optimizations
- **React.memo** for component memoization
- **Font preloading** for faster text rendering
- **Image optimization** with Next.js Image component
- **Bundle analysis** with @next/bundle-analyzer
- **CSS optimization** with Tailwind CSS
- **Code splitting** and lazy loading
- **Console removal** in production builds

### Accessibility Improvements
- **ARIA labels** for screen readers
- **Keyboard navigation** support
- **Focus management** with visible focus indicators
- **Semantic HTML** structure
- **Reduced motion** support for users with vestibular disorders
- **High contrast** support

### SEO Enhancements
- **Comprehensive metadata** with Open Graph and Twitter cards
- **Sitemap generation** for better indexing
- **Robots.txt** optimization
- **Structured data** (JSON-LD) for search engines
- **Performance monitoring** with Vercel Analytics and Speed Insights

### Security Features
- **Content Security Policy (CSP)** headers
- **XSS Protection** headers
- **HSTS** for secure connections
- **Frame options** to prevent clickjacking
- **Referrer policy** for privacy

### Developer Experience
- **TypeScript** for type safety
- **ESLint** with Next.js rules
- **Prettier** for code formatting
- **Husky** for git hooks (optional)
- **Comprehensive scripts** for development workflow

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **UI Components** | Radix UI + shadcn/ui |
| **Icons** | Lucide React |
| **Fonts** | Geist Sans & Geist Mono |
| **Animations** | Framer Motion |
| **Deployment** | Vercel |
| **Analytics** | Vercel Analytics & Speed Insights |

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/NotHarshhaa/cv-portfolio.git
cd cv-portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🚀 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run type-check   # Run TypeScript type checking
npm run format       # Format code with Prettier
npm run format:check # Check code formatting

# Performance
npm run analyze      # Analyze bundle size
npm run clean        # Clean build cache
```

---

## 📁 Project Structure

```
cv-portfolio/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Main portfolio page
│   │   ├── loading.tsx         # Loading component
│   │   ├── error.tsx           # Error boundary
│   │   ├── sitemap.ts          # Sitemap generator
│   │   └── globals.css         # Global styles
│   ├── components/             # Reusable components
│   │   ├── ui/                 # shadcn/ui components
│   │   ├── icons/              # Custom icon components
│   │   ├── navigation-menu.tsx # Desktop & mobile navigation
│   │   ├── command-menu.tsx    # Command palette (⌘K)
│   │   ├── theme-toggle.tsx    # Dark/light mode toggle
│   │   ├── project-card.tsx    # Project display card
│   │   ├── project-filter.tsx  # Project search & filter
│   │   ├── projects-section.tsx# Projects grid with filtering
│   │   ├── skills-categorized.tsx # Categorized skills display
│   │   ├── stats-section.tsx   # Statistics cards
│   │   ├── work-timeline.tsx   # Work experience timeline
│   │   ├── copy-button.tsx     # Copy to clipboard button
│   │   ├── scroll-to-top.tsx   # Scroll to top button
│   │   └── download-resume-button.tsx
│   ├── data/                   # Data files
│   │   └── resume-data.tsx     # Resume content
│   ├── constants/              # App constants
│   └── lib/                    # Utility functions
├── public/                     # Static assets
├── next.config.js              # Next.js configuration
├── tailwind.config.js          # Tailwind CSS configuration
└── package.json                # Dependencies and scripts
```

---

## 🎨 Customization

### Updating Personal Information
Edit `src/data/resume-data.tsx` to update your personal information, work experience, education, skills, and projects.

### Styling
- Modify `src/app/globals.css` for global styles
- Update `tailwind.config.js` for theme customization
- Edit component styles in individual component files

### Adding New Sections
1. Create a new component in `src/components/`
2. Add the section to `src/app/page.tsx`
3. Update navigation in `src/components/navigation-menu.tsx`

### SEO
- Update metadata in `src/app/layout.tsx`
- Modify `public/site.webmanifest` for PWA settings
- Update `public/robots.txt` for search engine directives

---

## 📊 Performance Metrics

The site is optimized for:
- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: All metrics in the green
- **Bundle Size**: Optimized with tree shaking and code splitting
- **Loading Speed**: Sub-2 second initial load time

---

## 🔧 Recent Optimizations

### Performance
- ✅ Added React.memo for component memoization
- ✅ Implemented font preloading
- ✅ Optimized images with Next.js Image component
- ✅ Added bundle analyzer for performance monitoring
- ✅ Implemented code splitting and lazy loading
- ✅ Added console removal in production

### Accessibility
- ✅ Added comprehensive ARIA labels
- ✅ Implemented keyboard navigation support
- ✅ Added focus management with visible indicators
- ✅ Improved semantic HTML structure
- ✅ Added reduced motion support
- ✅ Enhanced color contrast

### SEO
- ✅ Comprehensive metadata with Open Graph and Twitter cards
- ✅ Automatic sitemap generation
- ✅ Optimized robots.txt
- ✅ Added structured data (JSON-LD)
- ✅ Implemented performance monitoring

### Security
- ✅ Content Security Policy headers
- ✅ XSS Protection headers
- ✅ HSTS for secure connections
- ✅ Frame options to prevent clickjacking
- ✅ Referrer policy for privacy

### Developer Experience
- ✅ TypeScript for type safety
- ✅ ESLint with Next.js rules
- ✅ Prettier for code formatting
- ✅ Comprehensive development scripts
- ✅ Error boundaries and loading states

---

## 🚀 Deployment

The site is optimized for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js and deploy
3. Environment variables are automatically handled
4. Analytics and Speed Insights are automatically enabled

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/NotHarshhaa/cv-portfolio)

---

## 📈 Monitoring

- **Vercel Analytics**: Track user behavior and performance
- **Speed Insights**: Monitor Core Web Vitals
- **Bundle Analyzer**: Analyze bundle size and composition
- **Error Tracking**: Automatic error reporting

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests and linting (`npm run lint && npm run type-check`)
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👤 Contact

| Platform | Link |
|----------|------|
| **Name** | Harshhaa Vardhan Reddy |
| **Email** | harshhaa03@gmail.com |
| **LinkedIn** | [harshhaa-vardhan-reddy](https://www.linkedin.com/in/harshhaa-vardhan-reddy) |
| **GitHub** | [NotHarshhaa](https://github.com/NotHarshhaa) |
| **Portfolio** | [harshhaareddy.com](https://harshhaareddy.com) |

---

<p align="center">
  Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
</p>
