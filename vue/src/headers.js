export function getRandomHeaderPhrase() {
    const headerPhrases = [
      "Explore Poetry",
      "Discover Poetic Treasures",
      "Embark on Your Literary Journey",
      "Find New Favorite Verses",
      "Journey into Poetry",
      "Navigate Through the Canon",
      "Search for Poetic Inspiration",
      "Dive into the World of Verse",
      "Uncover Lyrical Gems",
      "Traverse the Realm of Verse"
    ];
    
    const randomIndex = Math.floor(Math.random() * headerPhrases.length);
    return headerPhrases[randomIndex];
  }
  