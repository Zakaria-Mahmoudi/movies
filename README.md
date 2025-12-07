# 🎬 Movie App (React + TMDB API)

This project is a simple movie search application built with **React**, using the **TMDB API** to fetch movie data.  
It also includes a **Favorites system** implemented using **Context API + LocalStorage**, allowing users to save and manage their favorite movies.

---

## 🚀 Features

### 🔍 Search Movies
- Users can search for movies using the TMDB API.
- Results display movie title, poster, and release year.

### ❤️ Favorites System
- Add or remove movies from favorites.
- Favorites are saved in **localStorage** so they remain after page refresh.
- Context API is used to manage global favorite state.

### 🎴 Movie Cards
- Each movie is displayed inside a beautiful card layout.
- A heart button (♥) lets the user toggle favorites.

### 📁 Routing
- `/` → Home page (search + results)
- `/favorites` → Page showing user’s saved movies

---

## 🧰 Technologies Used

- React (Hooks)
- React Router
- Context API
- LocalStorage
- TMDB API
- CSS Modules
