## Project Overview

**Project Name**: EEG  
**Purpose**: EEG is a Next.js application ["an interactive commodity exchange marketplace"].

---

## Technology Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **UI Components**: Radix UI (for accessible and customizable components)
- **Styling**:
  - **Tailwind CSS**: Utility-first CSS framework for custom styling
  - **shadcn**: Pre-configured Tailwind components for a cohesive design system
- **Form Handling**: React Hook Form with @hookform/resolvers for validation
- **State Management**: Zustand
- **Data Fetching and Caching**: TanStack React Query
- **Schema Validation**: Zod for defining and validating schema-based data
- **Icons**: Lucide Icons and Radix UI Icons for custom and accessible icons
- **Utilities**: 
  - `clsx` for conditional className management
  - `tailwind-merge` for merging Tailwind classes
- **Linting and Formatting**: ESLint with Next.js configuration
- **Type Definitions**: TypeScript with support for React and Node.js types


---

## Folder Structure

```
/src
├── /actions           # Server actions for data handling
├── /app               # Next.js app directory for routing
│   ├── /account       # Profile page
│   ├── /auth          # Authentication routes (login, register)
│   ├── /category      # Category page route
│   ├── /fonts         # Local font files
│   ├── /product       # Individual product pages for the marketplace
│   ├── /product-request # Page for requesting specific products
│   ├── /search        # Search results page listing products
│   ├── /shop          # Discounted products page
│   └── global.css, layout.tsx, page.tsx # Global styles, layout, and main entry page
├── /components        # Reusable UI components and page-specific components
├── /config            # Configuration files, such as navigation settings
├── /data              # Data-fetching files for React Query using server actions
├── /lib               # Utility functions
├── /public            # Static assets (images, icons in formats like SVG, PNG, JPG)
├── /schemas           # Zod schemas for data validation
└── /store             # Zustand files for global state management
```

### Directory Breakdown

- **/actions**: Contains server-side actions necessary for data processing, ensuring efficient communication with the backend.

- **/app**: Next.js's App Router is used here for managing routes. Subdirectories include:
  - **/account**: Profile page for user account management.
  - **/auth**: Handles login and registration routes.
  - **/category**: Category page, displaying products by category.
  - **/fonts**: Houses local font files for custom typography.
  - **/product**: Individual product pages, displaying detailed information for each product on the platform.
  - **/product-request**: Page where users can request specific products.
  - **/search**: Displays search results and lists relevant products.
  - **/shop**: Page highlighting discounted products on the platform.
  - Main files include `global.css` for global styles, `layout.tsx` for layout configuration, and `page.tsx` as the primary entry page.

- **/components**: Contains reusable UI components as well as components specific to each page, promoting reusability and modularity.

- **/config**: Holds configuration files for navigation and other settings that drive application behavior.

- **/data**: Consists of data-fetching files using React Query, which leverage server actions to retrieve data efficiently.

- **/lib**: Utility files, providing helper functions used across different parts of the application.

- **/public**: Stores static assets, such as images and icons, available directly at runtime.

- **/schemas**: Contains Zod schemas for validating data structures, enhancing type safety and reliability.

- **/store**: Manages global state via Zustand, centralizing state logic across the app.

---

## Setup and Installation

### Prerequisites

To get started, ensure you have the following installed:

- **Node.js** (version 14 or later)
- **npm** or **yarn** for package management

### Installation Steps

1. **Clone the Repository**  
   Clone the EEG project repository to your local machine:
   
   ```bash
   git clone https://github.com/repo-name
   cd eeg-website-nextjs
   ```
   Or:

   ```bash
    clone the source code from the azure repo
   ```

2. **Install Dependencies**  
   Install the project’s dependencies by running:

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set Up Environment Variables**  
   Create a `.env.local` file in the root directory and configure it with the necessary environment variables. These variables typically include:

   ```plaintext
   BACKEND_URL=
   NEXTAUTH_SECRET=
   ```

   - `BACKEND_URL`: The base URL for backend API requests.
   - `NEXTAUTH_SECRET`: A secret key for managing authentication sessions securely with `next-auth`.

4. **Run the Development Server**  
   Start the development server with:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   The application will be accessible at `http://localhost:3000`.

5. **Build for Production**  
   To build the project for production:

   ```bash
   npm run build
   # or
   yarn build
   ```

6. **Linting**  
   To run the linter and check for code style issues:

   ```bash
   npm run lint
   ```

---


## Core Functionality and Key Features

EEG provides a dynamic marketplace platform where users can browse, request, and interact with various products. Below are some of the key features:

1. **User Authentication**  
   - Allows users to create accounts, log in, and manage their profiles.
   - Securely handles authentication through `next-auth` and manages sessions with `NEXTAUTH_SECRET`.

2. **Product Management**  
   - **Product Pages**: Users can view individual product details, including descriptions, pricing, and specifications.
   - **Product Requests**: If users can’t find a specific product, they can request it through the dedicated product request page.
   - **Discounted Products**: A “shop” section highlights products currently available at discounted rates.

3. **Category Browsing and Search**  
   - **Category Pages**: Users can browse products by category, making it easier to locate specific types of items.
   - **Search Functionality**: A powerful search tool allows users to quickly find products based on keywords.

4. **Global State Management**  
   - Manages global application state using Zustand, providing a centralized and efficient state management solution that supports user sessions, product information, and other key data.

5. **Server-Side Data Fetching**  
   - Utilizes React Query and server actions to fetch data on the server side, ensuring fast and reliable data retrieval.

6. **Accessible UI**  
   - Uses Radix UI for accessibility-focused components, ensuring that all features are available to a wide range of users.

7. **Schema Validation**  
   - Validates all data structures with Zod schemas, enhancing type safety and reliability of form inputs and server responses.

---


## Known Issues and Limitations

While EEG is a robust application, there are some known issues and limitations that developers and users should be aware of:

1. **Authentication Not Fully Implemented**  
   - The authentication flow is currently in development. Users cannot yet log in or register through the application. This feature is a priority for future updates to ensure secure access to user-specific functionalities.

2. **Search by Category Using Dummy Data**  
   - The functionality to search products by category is currently relying on dummy data saved on the frontend. There is no real data fetching or server-side action implemented yet for category searches. This is planned for a future release to improve product discovery and user interaction.


---

## Good Wishes for Upcoming Developers

Wishing you all the best as you dive into the EEG project! Embrace challenges, stay curious, and enjoy the journey of coding. Your contributions will make a difference—happy developing!

