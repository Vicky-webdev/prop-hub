**== FeaturesSection Component Guide ==**

1. #### Purpose:


   - Displays key benefits or highlights of the platform.
   - Built with Tailwind CSS and Lucide icons.
   - Supports animations with Framer Motion.
2. #### Location:


   - File Path: src/components/home/FeaturesSection.tsx
3. #### How to Use:

   a. Import:
   import FeaturesSection from '@/components/home/FeaturesSection';

   b. Use in your JSX:
   `<FeaturesSection />`
4. #### To Add/Reduce Features:


   - Pass custom features as props:
     const features = [
     { icon: ..., title: "...", description: "..." },
     ...
     ];

     <FeaturesSection features={features} />
   - If no props passed, the default list of 4 features will render.
5. #### Scroll Animation:


   - Built-in fade-in on scroll using Framer Motion.
   - Adjust animation by editing motion.section in FeaturesSection.tsx
6. #### Responsive Layout:


   - Mobile: 1 column
   - Tablet: 2 columns
   - Desktop: 4 columns

## ✅ What is the FeaturesSection?

The `FeaturesSection` is a **reusable component** that shows 4 important reasons why someone should trust or choose your real estate website (like Verified Listings, 24/7 Support, etc.).



## ✨ What are we using in this section?


| Concept                   | What It Does                      | Easy Explanation                                       |
| ------------------------- | --------------------------------- | ------------------------------------------------------ |
| **React Component** | Makes this feature block reusable | Like making a LEGO piece that you can place anywhere   |
| **Props**           | Sends custom features (optional)  | You can send different features later if needed        |
| **Lucide Icons**    | Adds icons for each feature       | Gives small images to visually explain each feature    |
| **Tailwind CSS**    | Styling tool                      | Helps us write styles quickly using class names        |
| **Framer Motion**   | Adds scroll and hover animations  | Makes the section appear smoothly and feel interactive |


## 🧱 Code Breakdown (Step-by-step)

### 1. 🧩 `features` Array (List of Benefits)


const defaultFeatures: Feature[] = [
  {
    icon: ShieldCheck,
    title: 'Verified Listings',
    description: 'Every property is verified to ensure accuracy and trust.',
  },
  ...
];



## 🎨 Layout using Tailwind

`<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"> `


This line creates a  **responsive grid** :

* 1 column on mobile phones
* 2 columns on tablets
* 4 columns on big screens

Each feature is a  **box with icon + title + text** .


## * 🎞️ Animations with Framer Motion


`<motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} /> `


* `motion.section` is like a normal `<section>` but animated
* It starts invisible and slightly lower (`opacity: 0, y: 30`)
* When it appears on screen, it moves up and fades in (`opacity: 1, y: 0`)

This gives a **"scroll reveal"** effect!



## ✅ Reusability


const FeaturesSection: React.FC `<FeaturesSectionProps>` = ({ features = defaultFeatures })


This means:

* If no `features` are passed, use `defaultFeatures`.
* But later, you can show **custom benefits** for different pages if needed.



# 📘 Summary


 **Component** : `FeaturesSection.tsx`

 **Location** : `src/components/home/`

### ✅ Purpose:

To display 4 key benefits with icons, text, and animations in a responsive grid.

### 🚀 Features:

* Reusable for any page
* Uses Tailwind for styling
* Lucide icons for visuals
* Framer Motion for scroll reveal + hover animation

### 📦 Dependencies:

* `lucide-react`
* `framer-motion`
* `react`

### 📥 Usage:

 `import FeaturesSection from '@/components/home/FeaturesSection';

<FeaturesSection />
`


### 🛠 To Add or Remove Features:

* Go to `defaultFeatures` array
* Add new objects with `icon`, `title`, and `description`
* Or pass a custom `features` prop from a page
