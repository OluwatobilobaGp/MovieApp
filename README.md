# 🎬 Movie Explorer App

A **React Native + TypeScript** mobile application for browsing, searching, and saving favorite movies using [The Movie Database (TMDb) API](https://www.themoviedb.org/documentation/api).  
Built with modern state management (**Zustand**), clean UI components, and offline persistence for favorites.  

---

## 📱 Features

- **Home Screen** – Browse a list of popular movies.  
- **Search Screen** – Search movies by name.  
- **Details Screen** – View detailed movie info (title, poster, overview, rating, release date).  
- **Favorites** – Mark/unmark movies as favorites (saved locally using AsyncStorage).  
- **Error, Loading, Empty States** for better UX.  
- **Offline support** (cached favorites).  

### 🚀 Optional / Bonus
- Dark mode toggle 🌙  
- Movie trailers (YouTube embed or TMDb video endpoint)  
- Basic animations using `LayoutAnimation` or `react-native-reanimated`  
- Push notification when new popular movie is available (local mock)  

---

## 🛠️ Tech Stack

- **React Native (TypeScript)** – App framework  
- **Zustand** – State management  
- **Axios** – API requests  
- **AsyncStorage** – Persistent local storage  
- **React Navigation** – Navigation between screens  
- **UI Library** – `react-native-paper` (clean and modern design system)  

---

## 📂 Project Structure

```
src/
 ├─ api/           # API services (TMDb)
 │   └─ tmdb.ts
 ├─ store/         # Zustand store (state management)
 │   └─ movieStore.ts
 ├─ screens/       # App screens (Home, Search, Details, Favorites)
 ├─ components/    # Reusable UI components (MovieCard, Loader, etc.)
 ├─ hooks/         # Custom React hooks (if needed)
 └─ utils/         # Helpers and constants
```

---

## ⚡ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/OluwatobilobaGp/MovieApp.git
cd movie-explorer
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Add TMDb API Key

- Create a free TMDb account → [TMDb API](https://www.themoviedb.org/documentation/api)  
- Get your API key  
- Open `src/api/tmdb.ts` and replace:

```ts
const API_KEY = "YOUR_TMDB_API_KEY";
```

### 4. Run the app

```bash
npm run android
# or
npm run ios
```

---

## 🧩 Usage Flow

1. **Home Screen** loads a list of **popular movies**.  
2. Tap a movie → Navigate to **Details Screen**.  
3. **Search Screen** → Search for a movie by title.  
4. Tap ❤️ → Add/remove movies from **Favorites** (saved locally).  
5. Favorites persist even after closing the app.  

---

## 📸 Demo

(Add screenshots or video link here once available)

---

## 📖 Architecture Choices

- **Zustand over Redux Toolkit** → lightweight, faster to set up, and sufficient for this app.  
- **Axios** → cleaner API handling with interceptors for TMDb.  
- **AsyncStorage** → simple persistence for favorites without extra database.  
- **React Navigation** → smooth navigation flow (stack + bottom tabs).  
- **react-native-paper** → gives clean UI and dark mode out-of-the-box.  

---

## ✅ Deliverables

- [x] GitHub repo with well-structured commits  
- [x] Instructions to run the project (this README)  
- [x] Brief explanation of architecture choices  
- [x] Video of the app running on iOS/Android  

---

## 🧑‍💻 Author

Built by **Asaolu Oluwatobiloba** 🚀  
For learning, portfolio, and real-world mobile app practice.  
