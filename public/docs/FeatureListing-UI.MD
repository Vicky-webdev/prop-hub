✅ What is the FeaturedListings Component?

The FeaturedListings component is like a reusable slideshow box that shows property listings. You can use it anywhere on your website and show different listings by just passing some data (props) into it.


📁 Folder Structure

src/
└── components/
    └── FeaturedListings/
        ├── FeaturedListings.tsx  # Main reusable component
        └── types.ts              # Types used for props and listings


📦 Step-by-Step: How it Works

1️⃣ types.ts – Define the structure of the data

This file explains what kind of data we expect.


// src/components/FeaturedListings/types.ts

export interface Listing {
  id: string;
  title: string;
  by: string;
  location: string;
  type: string;
  priceRange: string;
  image: string;
  badge?: string; // Optional - could be "Hot", "Sold Out", etc.
}

export interface FeaturedListingsProps {
  listings: Listing[];     // List of properties
  title?: string;          // Optional heading
  subtitle?: string;       // Optional subheading
  autoplay?: boolean;      // Should the slider auto-scroll
  slidesToShow?: number;   // How many cards to show at once
  showWishlist?: boolean;  // Show heart icon for wishlist
  showBadges?: boolean;    // Show badges like "Hot", "Sold Out"
}



2️⃣ FeaturedListings.tsx – The Main Component


his file does the following:

✅ Uses a slider (carousel) to scroll properties
✅ Shows heart icon to add/remove from favorites
✅ Adds badge like “Hot” or “Sold Out”
✅ Uses props to make the UI reusable


3️⃣ How to Use It in a Page

Go to any page like Home.tsx or Landing.tsx, then:

import FeaturedListings from "@/components/FeaturedListings/FeaturedListings";
import { Listing } from "@/components/FeaturedListings/types";

const dummyListings: Listing[] = [
  {
    id: "1",
    title: "Urban Tree Villa Plots",
    by: "Urban Tree",
    location: "Tambaram, Chennai",
    type: "Villa Plot",
    priceRange: "₹24L - ₹42L",
    image: "/images/property1.jpg",
    badge: "Hot"
  },
  {
    id: "2",
    title: "Creative Township",
    by: "Creative Developers",
    location: "Guindy, Chennai",
    type: "Land/Plot",
    priceRange: "₹18L - ₹32L",
    image: "/images/property2.jpg",
    badge: "New Launch"
  },
];

<FeaturedListings
  listings={dummyListings}
  title="Featured Properties"
  subtitle="Best deals for you"
  autoplay={true}
  slidesToShow={4}
  showWishlist={true}
  showBadges={true}
/>


🧠 Concepts Explained


Concept	Explanation
Props	Props are like passing ingredients to a cooking recipe. You give the component some info, and it prepares the UI.
Reusable	You can use this FeaturedListings component anywhere and pass different data each time.
TypeScript Interface	This defines what the data should look like (like giving a rulebook).
Slider	This is like a slideshow for property cards.
Wishlist	Clicking on the heart saves the item to localStorage and shows a toast message.
Badges	Small labels that show "Hot", "Sold Out", etc., styled with different colors.
Equal Height Cards	All boxes/cards are the same height even if text is shorter/longer.
Autoplay	Slides automatically change every few seconds.
Looping	When you reach the end of the list, it starts again from the beginning.

🔄 Reusing Anywhere

You can reuse it in any page/component like this:

 <FeaturedListings
  listings={someListingsData}
  title="Recommended for You"
  subtitle="Hand-picked listings"
  slidesToShow={3}
  autoplay={false}
/>

🛠 Customize It Further
You can make the following changes by updating props:

What you want	Prop
Show 3 cards	slidesToShow={3}
Hide badges	showBadges={false}
Hide heart icon	showWishlist={false}
Autoplay off	autoplay={false}
Change title	title="Your Properties"

🧃 Tech Stack Used
Tech	Used For
React	Main frontend framework
TypeScript	Type safety and props checking
Framer Motion	Smooth animation for section
React Slick	Slider functionality
React Icons	Heart, arrow icons
Tailwind CSS	Styling the UI
localStorage	Saving wishlist locally
toastify/snackbar	Alerting user for wishlist added