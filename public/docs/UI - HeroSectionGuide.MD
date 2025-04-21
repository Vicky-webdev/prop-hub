# 📘 Hero Section - Usage Guide (Knowledge Transfer)

This guide explains how to  **create** ,  **use** , and **customize** the `HeroSection` UI component in the project. Follow the steps below to implement the hero section across any page easily.

---

## 🛠️ Step 1: Create the HeroSection Component

Create a new file at:

```
src/components/ui/HeroSection.tsx
```

Paste the following code:

```tsx
import React from 'react';
import { Link } from 'react-router-dom';

type CTA = {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary';
};

interface HeroSectionProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  ctaButtons?: CTA[];
  showSearchBar?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage,
  title,
  subtitle,
  ctaButtons = [],
  showSearchBar = false,
}) => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-[80vh] flex items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/50 dark:bg-black/60" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 w-full text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight drop-shadow-lg">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-4 text-lg md:text-xl text-gray-200">{subtitle}</p>
        )}

        {ctaButtons.length > 0 && (
          <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
            {ctaButtons.map((btn) => (
              <Link
                key={btn.href}
                to={btn.href}
                className={`px-6 py-3 rounded-full font-medium transition ${
                  btn.variant === 'secondary'
                    ? 'border border-white hover:bg-white hover:text-blue-600'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                {btn.label}
              </Link>
            ))}
          </div>
        )}

        {showSearchBar && (
          <div className="mt-10 max-w-xl mx-auto bg-white rounded-full p-2 flex shadow-lg overflow-hidden">
            <input
              type="text"
              placeholder="Search by location, city, or keyword..."
              className="flex-grow px-4 py-2 rounded-l-full text-gray-700 focus:outline-none"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition">
              Search
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
```

---

## 📥 Step 2: Import and Use the Component

In any page like `Home.tsx`, use it like this:

```tsx
import HeroSection from '../components/ui/HeroSection';
import bannerImage from '../assets/images/1.jpg';

const Home = () => {
  return (
    <>
      <HeroSection
        backgroundImage={bannerImage}
        title="Find Your Dream Property Today"
        subtitle="Buy, rent, or list your property hassle-free across India"
        showSearchBar
        ctaButtons={[
          { label: 'Search Properties', href: '/buy' },
          { label: 'Post Property FREE', href: '/post', variant: 'secondary' },
        ]}
      />

      {/* Other sections */}
    </>
  );
};

export default Home;
```

---

## 🧩 Props Reference

| Prop                | Type    | Description                                               |
| ------------------- | ------- | --------------------------------------------------------- |
| `backgroundImage` | string  | Path to the image shown in the background                 |
| `title`           | string  | Main headline in the hero                                 |
| `subtitle`        | string? | Optional subheading                                       |
| `ctaButtons`      | array   | Buttons with `label`,`href`, and optional `variant` |
| `showSearchBar`   | boolean | Whether to show the search input below CTAs               |

---

## ✅ Example Output

* Fullscreen banner image
* Dark overlay
* Title, subtitle
* CTA buttons
* Optional search bar

Responsive and ready for reuse.

---

## ✅ Reuse Anywhere

You can now reuse `<HeroSection />` on:

* Landing pages
* Search pages
* Campaign pages
* Project detail headers (with unique backgrounds)
