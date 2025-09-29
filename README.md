# 📱 scriptsApp

`scriptsApp` is a React Native mobile project built with
**TypeScript**.\
It demonstrates a simple app structure with **top tab navigation** and
**custom cards** that display horizontally scrollable content.

------------------------------------------------------------------------

## 🚀 Features

-   **React Native + TypeScript** setup
-   **Top Tab Navigation** with two main screens:
    -   🏠 Home
    -   🧾 Smart Script
-   **Custom Card Component** with:
    -   Background image
    -   Title and subtitle text
    -   Scrollable horizontally
-   **Global Font Support** (customizable in `App.tsx`)
-   Simple and scalable **file structure**

------------------------------------------------------------------------

## 📂 File Structure

    scriptsApp/
    │
    ├── App.tsx                # Entry point of the app
    ├── package.json           # Project dependencies & scripts
    │
    ├── src/
    │   ├── navigation/
    │   │   └── TopNavigator.tsx    # Top tab navigation setup
    │   │
    │   ├── screens/
    │   │   ├── Home.tsx            # Home screen
    │   │   └── SmartScript.tsx     # Smart Script screen with horizontal cards
    │   │
    │   ├── components/
    │   │   ├── CustomCard.tsx      # Reusable card component
    │   │   └── AppText.tsx         # (Optional) Custom Text wrapper for fonts
    │   │
    │   ├── assets/
    │   │   ├── bg1.jpg
    │   │   ├── bg2.jpg
    │   │   └── bg3.jpg             # Example background images
    │   │
    │   └── styles/
    │       └── global.ts           # (Optional) shared/global styles
    │
    └── README.md

------------------------------------------------------------------------

## 📦 Installation

### 1. Clone the repository

``` bash
git clone https://github.com/your-username/scriptsApp.git
cd scriptsApp
```

### 2. Install dependencies

``` bash
npm install
# or
yarn install
```

### 3. Start the development server

If you're using **Expo**:

``` bash
npx expo start
```

For bare React Native:

``` bash
npx react-native run-android
npx react-native run-ios
```

------------------------------------------------------------------------

## ⚡ Usage

-   The app opens with a **Top Tab Navigator**.
-   Navigate between **Home** and **Smart Script** tabs.
-   Inside **Smart Script**, scroll horizontally to explore **custom
    cards**.

------------------------------------------------------------------------

## 🖼️ Screenshots (Example)

  ---------------------------------------------------------------------------
  Home Screen                    Smart Script Screen
  ------------------------------ --------------------------------------------
  ![Home                         ![Smart Script
  Screenshot](./docs/home.png)   Screenshot](./docs/smartscript.png)

  ---------------------------------------------------------------------------

------------------------------------------------------------------------

## 🛠️ Dependencies

-   [React Native](https://reactnative.dev/)
-   [React Navigation](https://reactnavigation.org/)
    (`@react-navigation/native`, `@react-navigation/material-top-tabs`)
-   [React Native Gesture
    Handler](https://docs.swmansion.com/react-native-gesture-handler/)
-   [React Native
    Reanimated](https://docs.swmansion.com/react-native-reanimated/)

------------------------------------------------------------------------

## 🎨 Custom Fonts

To apply a **global font family**:

``` tsx
// App.tsx
import { Text } from "react-native";

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.style = { fontFamily: "Poppins-Regular" };
```

To add fonts:

``` bash
expo install expo-font
```

Then load in `App.tsx`.

------------------------------------------------------------------------

## 📌 Roadmap

-   [ ] Add carousel snapping for cards
-   [ ] Dark mode support
-   [ ] More navigation screens
-   [ ] API integration for dynamic content

------------------------------------------------------------------------

## 🤝 Contributing

1.  Fork the repo
2.  Create a new branch (`feature/amazing-feature`)
3.  Commit changes
4.  Push and create a Pull Request

------------------------------------------------------------------------

## 📄 License

This project is licensed under the **MIT License**.
