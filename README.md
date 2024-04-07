# Verse Venture

Verse Venture is a Vue.js web application designed for exploring and discovering poetry. It allows users to search for poems by author or title, leveraging axios to connect to an external API for fetching poem data and utilizing vue-router for smooth navigation.

## Features

- **Poem Search**: Users can search for poems by author or title.
- **Search Results**: Display search results with poem titles and authors.
- **Detailed View**: Click on a poem to view its detailed information.
- **Navigation**: Navigate between pages using vue-router.

## Installation

1. **Clone the Repository**:
```plaintext
git clone https://github.com/amfullmer/verse-venture.git
```

3. **Navigate to the Project Directory**:
```plaintext
cd verse-venture
```

5. **Install Dependencies**:
```plaintext
npm install
```

7. **Start the Development Server**:
```plaintext
npm run dev
```

9. **View the Application**:
```plaintext
Open your web browser and go to `http://localhost:5173`.
```

## Usage

1. **Search for Poems**:
- Select search by author or search by title.
- Enter input in the search bar.
- Press the "Search" button.

2. **View Search Results**:
- Poems matching the search query will be displayed.

3. **Navigate Between Pages**:
- Use the navigation links to explore different pages of the application.

## Credits

- This project uses the Vue.js framework.
- Poem data is fetched from the [PoetryDB API](https://github.com/thundercomb/poetrydb) using axios.
