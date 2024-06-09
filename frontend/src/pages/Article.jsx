import React from 'react';
import { Card, CardBody, CardHeader, Image, Text, Divider } from '@nextui-org/react';

const article = {
  id: 1,
  title: 'Les tendances de tatouage en 2024',
  content: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
    sunt in culpa qui officia deserunt mollit anim id est laborum.
  `,
  image: '/tatoomag/news1.webp',
  categories: ['Tendances', '2024'],
  relatedArticles: [
    { id: 2, title: 'Tatouages et significations', link: '/tattoomag/article-2', categories: ['Symboles', 'Significations'] },
    { id: 3, title: 'Entretien de votre tatouage', link: '/tattoomag/article-3', categories: ['Entretien'] },
  ],
};

const Article = () => {
  return (
    <div className="my-8 max-w-4xl mx-auto">
      <Card className="shadow-lg">
        <CardHeader className="p-4">
          <Text h2>{article.title}</Text>
          <div className="flex space-x-2 mt-2">
            {article.categories.map((category, index) => (
              <Button key={index} auto size="sm" variant="light" className="text-primary-500">
                {category}
              </Button>
            ))}
          </div>
        </CardHeader>
        <Image src={article.image} alt={article.title} className="object-cover w-full h-64" />
        <CardBody className="p-4">
          <Text>{article.content}</Text>
        </CardBody>
        <Divider />
        <CardBody className="p-4">
          <Text h3>Articles qui pourraient vous plaire</Text>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {article.relatedArticles.map((related) => (
              <Card key={related.id} className="shadow-sm">
                <CardHeader className="p-4">
                  <Text h4>{related.title}</Text>
                </CardHeader>
                <Divider />
                <CardBody className="p-4">
                  <div className="flex space-x-2">
                    {related.categories.map((category, index) => (
                      <Button key={index} auto size="sm" variant="light" className="text-primary-500">
                        {category}
                      </Button>
                    ))}
                  </div>
                  <Link href={related.link} className="text-primary-500 hover:text-primary-700 mt-4 block">
                    En savoir plus
                  </Link>
                </CardBody>
              </Card>
            ))}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Article;
