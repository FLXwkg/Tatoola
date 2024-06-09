import React, { useState } from 'react';
import { Input, Button, Card, Image, CardHeader } from '@nextui-org/react';
import { SearchIcon } from './SearchIcon';


const sampleResults = [
  { id: 1, title: 'Tattoo Artist 1', image: '/tatoos/jap.webp', premium: true, styles: ['Japonais'] },
  { id: 2, title: 'Tattoo Artist 2', image: '/tatoos/tribal.webp', premium: false, styles: ['Polynésien'] },
  { id: 3, title: 'Tattoo Artist 3', image: '/tatoos/nb.webp', premium: true, styles: ['Noir et Blanc'] },
  { id: 4, title: 'Tattoo Artist 4', image: '/tatoos/mini.webp', premium: false, styles: ['Minimaliste'] },
  { id: 5, title: 'Tattoo Artist 5', image: '/tatoos/pop.webp', premium: true, styles: ['Pop Culture'] },
  { id: 6, title: 'Tattoo Artist 6', image: '/tatoos/nb1.webp', premium: false, styles: ['Noir et Blanc'] },
  { id: 7, title: 'Tattoo Artist 7', image: '/tatoos/mini2.webp', premium: true, styles: ['Minimaliste'] },
  { id: 8, title: 'Tattoo Artist 8', image: '/tatoos/marin.webp', premium: false, styles: ['Marin'] },
  { id: 9, title: 'Tattoo Artist 9', image: '/tatoos/jap1.webp', premium: false, styles: ['Japonais'] },
  { id: 10, title: 'Tattoo Artist 10', image: '/tatoos/tribal1.webp', premium: false, styles: ['Polynésien'] },
  { id: 11, title: 'Tattoo Artist 11', image: '/tatoos/marin2.webp', premium: true, styles: ['Marin'] },
  { id: 12, title: 'Tattoo Artist 12', image: '/tatoos/pop1.webp', premium: false, styles: ['Pop Culture'] },
  { id: 13, title: 'Tattoo Artist 13', image: '/tatoos/jap2.webp', premium: false, styles: ['Japonais'] },
{ id: 14, title: 'Tattoo Artist 14', image: '/tatoos/nb2.webp', premium: false, styles: ['Noir et Blanc'] },
{ id: 15, title: 'Tattoo Artist 15', image: '/tatoos/mini3.webp', premium: true, styles: ['Minimaliste'] },
{ id: 16, title: 'Tattoo Artist 16', image: '/tatoos/marin3.webp', premium: false, styles: ['Marin'] },
{ id: 17, title: 'Tattoo Artist 17', image: '/tatoos/pop2.webp', premium: false, styles: ['Pop Culture'] },
{ id: 18, title: 'Tattoo Artist 18', image: '/tatoos/nb3.webp', premium: false, styles: ['Noir et Blanc'] },
{ id: 19, title: 'Tattoo Artist 19', image: '/tatoos/mini4.webp', premium: true, styles: ['Minimaliste'] },
{ id: 20, title: 'Tattoo Artist 20', image: '/tatoos/marin4.webp', premium: false, styles: ['Marin'] },
{ id: 21, title: 'Tattoo Artist 21', image: '/tatoos/jap3.webp', premium: false, styles: ['Japonais'] },
{ id: 22, title: 'Tattoo Artist 22', image: '/tatoos/pop3.webp', premium: false, styles: ['Pop Culture'] },
];

const Tattoofinder = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [results, setResults] = useState(sampleResults);

  const handleSearch = () => {
    const query = searchQuery.toLowerCase();
    const filteredResults = sampleResults.filter(result =>
      result.title.toLowerCase().includes(query) ||
      result.styles.some(style => style.toLowerCase().includes(query))
    );
    setResults(filteredResults);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    const filteredResults = sampleResults.filter(result =>
      result.styles.includes(category)
    );
    setResults(filteredResults);
  };

  const handleFilterPremium = () => {
    const filteredResults = sampleResults.filter(result => result.premium);
    setResults(filteredResults);
  };

  const handleReset = () => {
    setSearchQuery('');
    setSelectedCategory(null);
    setResults(sampleResults);
  };

  const categories = [
    'Japonais', 'Polynésien', 'Pop Culture', 'Marin', 'Minimaliste', 'Noir et Blanc'
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-zinc-700 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold">
            <span>Quelle Tatoueur ? Une idée ?</span>
            <br />
            <span>Quelle Style ? Quoi choisir ?</span>
          </h1>
          <Button className="mt-4 bg-black text-white py-3 px-8 rounded-full">
            Trouve grâce à notre TattooFinder !
          </Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8 text-center">
          <div className="relative inline-block w-full max-w-2xl">
            <Input
              clearable
              fullWidth
              placeholder="Un tatoueur, un style, une idée..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              classNames={{
                input: [
                  "bg-transparent",
                  "text-black/90 dark:text-white/90",
                  "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                ],
                innerWrapper: "bg-transparent",
                inputWrapper: [
                  "shadow-xl",
                  "bg-default-200/50",
                  "dark:bg-default/60",
                  "backdrop-blur-xl",
                  "backdrop-saturate-200",
                  "hover:bg-default-200/70",
                  "dark:hover:bg-default/70",
                  "group-data-[focus=true]:bg-default-200/50",
                  "dark:group-data-[focus=true]:bg-default/60",
                  "!cursor-text",
                ],
              }}
              startContent={
                <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
              }
            />
          </div>
        </div>
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((category, index) => (
            <Button
              key={index}
              auto
              className={`bg-gray-600 text-white rounded-full px-4 py-2 text-xs sm:text-sm md:text-base ${selectedCategory === category ? 'bg-gray-800' : ''}`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </Button>
          ))}
          <Button className="bg-gray-500 text-white rounded-full px-4 py-2 text-xs sm:text-sm md:text-base" onClick={handleReset}>
            Réinitialiser
          </Button>
        </div>

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Trouver l'inspiration !</h2>
          <Button className="bg-gray-200 text-gray-800 rounded-full px-4" onClick={handleFilterPremium}>
            Filtrer Premium
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((result) => (
            <Card key={result.id} className="shadow-lg hover:shadow-2xl transition-shadow duration-300 relative">
              {result.premium && (
                <CardHeader className="absolute z-10 top-2 right-2 flex justify-end w-full">
                  <Button
                    size="xs"
                    className="bg-zinc-500 text-white rounded-full px-3 py-1"
                  >
                    PREMIUM
                  </Button>
                </CardHeader>
              )}
              <Image
                removeWrapper
                src={result.image}
                alt={result.title}
                className={`z-0 w-full h-full object-cover rounded-lg ${result.premium ? 'filter blur-sm' : ''}`}
              />
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Tattoofinder;