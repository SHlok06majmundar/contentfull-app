# Landing Page Builder

Landing Page Builder is a visual editor for marketing teams to create, manage, and publish landing pages without writing code. Built as a Contentful integration, it powers responsive landing pages with a modern tech stack.

## What is this?

A drag-and-drop landing page editor that connects with Contentful CMS. Design teams can quickly assemble pages from pre-built components, preview them in real-time, and publish to production with zero developer involvement.

The project has two main parts:
1. An editor interface that runs within Contentful
2. A Next.js frontend that renders the published landing pages

## Getting Started

### Prerequisites
- Node.js 18+ and npm
- A Contentful account with API access
- Git

### Setup Process

First, clone the repo and install dependencies:

```bash
git clone https://github.com/your-username/landing-page-builder.git
cd landing-page-builder
npm install
```

Create your environment file:

```bash
cp .env.example .env.local
```

Add your Contentful credentials:
```
CONTENTFUL_SPACE_ID=abc123
CONTENTFUL_ACCESS_TOKEN=your-delivery-token
CONTENTFUL_PREVIEW_ACCESS_TOKEN=your-preview-token
CONTENTFUL_MANAGEMENT_TOKEN=your-mgmt-token
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Start the development server:

```bash
npm run dev
```

Visit http://localhost:3000 to see the app in action.

## Key Features

### For Marketers
- Visual page builder with drag-and-drop components
- Real-time preview of changes
- No coding required to create new landing pages
- Mobile-responsive designs out of the box

### For Developers
- Clean component architecture for easy expansion
- Redux-managed state with undo/redo history
- Automatic saving of draft content
- Server-side rendering for SEO optimization

## Available Pages

Currently, the system includes:

- **Home**: `/` - Main entry point and explanation
- **Editor**: `/contentful-app` - The drag-and-drop editor
- **Example Pages**:
  - `/landing/page-1` - Business Solutions 
  - `/landing/page-2` - Creative Design
  - `/landing/page-3` - Technology Hub
- **Preview**: `/landing/preview` - Live preview of current editor state
- **User Management**: 
  - `/signup` - Create an account
  - `/login` - Login to existing account
- **Support**: `/contact` - Contact form
- **Innovation Hub**: `/innovation` - Featured technology showcase

## Tech Stack

This project uses:

- Next.js for the frontend with App Router
- Redux for state management
- CSS Modules for styling
- Contentful as the content backend
- Jest for testing

## Project Structure

```
/app                     # Next.js app directory
  /contentful-app        # Editor interface
  /landing               # Landing page routes
  /login                 # Authentication
  /signup                # User registration
/components              # Reusable React components
  /blocks                # Landing page components
  /layout                # Layout components
  /ui                    # UI components
/lib                     # Utilities and helpers
/store                   # Redux store setup
  /slices                # Redux slices
  /middleware            # Custom middleware
```

## Development Workflow

1. Create components in the `/components` directory
2. Add new component types to the editor palette
3. Update Contentful models if needed
4. Test the editor and preview functionality
5. Deploy when ready

## Testing

Run the test suite with:

```bash
npm test
```

To run tests in watch mode:

```bash
npm run test:watch
```

## Deployment

The app is configured for Vercel deployment. Connect your GitHub repository to Vercel for automatic deployments on push.

Make sure to add all environment variables in the Vercel dashboard.

#### Landing Page
```typescript
interface LandingPage {
  title: string;
  slug: string;
  layoutConfig: LayoutConfig;
  heroBlock?: HeroBlockData;
  twoColumnRow?: TwoColumnRowData;
  imageGrid?: ImageGridData;
}
```

#### Component Types
- **Hero Block**: Full-width hero with heading, subtitle, CTA, and background image
- **Two Column Row**: Content on left, image on right
- **Image Grid**: 2x2 grid of optimized images

## 🧪 Testing

Run the test suite:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:watch
```

Tests cover:
- Component rendering
- Redux state management
- User interactions
- Layout operations

## 📊 Performance

The application is optimized for:
- **Core Web Vitals**: LCP, FID, CLS optimization
- **Image Optimization**: next/image with WebP/AVIF support
- **Static Generation**: Pre-rendered pages for fast loading
- **Bundle Optimization**: Code splitting and tree shaking

## 🎨 Styling

- **CSS Modules**: Scoped styling for components
- **Responsive Design**: Mobile-first approach
- **Animations**: Smooth transitions and micro-interactions
- **Design System**: Consistent colors, typography, and spacing

## 🚀 Deployment

The application is configured for Vercel deployment:

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard:
   ```
   CONTENTFUL_SPACE_ID=your_space_id_here
   CONTENTFUL_ACCESS_TOKEN=your_delivery_access_token_here
   CONTENTFUL_PREVIEW_ACCESS_TOKEN=your_preview_access_token_here
   CONTENTFUL_MANAGEMENT_TOKEN=your_management_token_here
   NEXT_PUBLIC_SITE_URL=your_production_url_here
   ```
3. Deploy automatically on push to main branch
4. Ensure your project has been built at least once locally with `npm run build` before deploying

For manual deployment:
```bash
npm run build
vercel --prod
```

## 📝 Contentful Setup

### Content Models Required

1. **Landing Page**
   - Title (Short text)
   - Slug (Short text, unique)
   - Layout Config (JSON object)

2. **Asset Management**
   - Upload images to Contentful Media Library
   - Use Contentful's image optimization features

### GraphQL Schema
The application uses Contentful's GraphQL API to fetch:
- Landing page configurations
- Associated media assets
- Component data

## 🔧 Development

### Adding New Components
1. Create component in `components/blocks/`
2. Add component type to TypeScript definitions
3. Update component palette
4. Add rendering logic to page templates

### Extending Redux State
1. Update layout slice with new actions
2. Add middleware for complex operations
3. Update TypeScript interfaces
4. Add unit tests for new functionality

## 📞 Support

For questions or issues, please open an issue on GitHub or contact the development team.

## 🏷️ Version

Current version: v1.0.0


This project is licensed under the MIT License.