import React from 'react';
import { Card, CardBody, CardFooter, CardHeader, Avatar, Button, Link, Image, } from '@nextui-org/react';
import Footer from '../components/footer/Footer';

const posts = [
  {
    id: 1,
    author: 'Alexis Remy',
    time: '1h',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    image: '/public/tatootalk/post1.webp',
    likes: 50,
    comments: 30,
    shares: 10,
  },
  {
    id: 2,
    author: 'Chloé Dubois',
    time: '2h',
    content: 'Quisque velit nisi, pretium ut lacinia in, elementum id enim...',
    image: '/public/tatootalk/post2.webp',
    likes: 110,
    comments: 15,
    shares: 50,
  },
  // Ajoutez plus de posts ici
];

const TattooTalk = () => {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-8 text-center">TattooTalk</h2>
      <div className="flex justify-center mb-4">
        <Button auto>Commencez à échanger</Button>
      </div>
      <div className="max-w-[1200px] gap-6 grid grid-cols-1 mx-auto">
        {posts.map((post) => (
          <Card key={post.id} className="shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <CardHeader className="flex justify-between items-center p-4">
              <div className="flex items-center space-x-4">
                <Avatar isBordered size="lg" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                <div>
                  <strong>{post.author}</strong>
                  <p className="text-sm text-gray-500">{post.time}</p>
                </div>
              </div>
              <Button auto size="sm" className="bg-primary-500 text-white">Suivre</Button>
            </CardHeader>
            <CardBody className="p-4">
              <p>{post.content}</p>
              {post.image && (
                <Image
                  src={post.image}
                  alt={`Post by ${post.author}`}
                  width="100%"
                  height="auto"
                  className="object-cover mt-4 rounded-lg"
                />
              )}
            </CardBody>
            <CardFooter className="flex justify-between items-center p-4">
              <div className="flex space-x-4">
                <Button auto icon={<i className="fas fa-heart"></i>}>
                  {post.likes}
                </Button>
                <Button auto icon={<i className="fas fa-comment"></i>}>
                  {post.comments}
                </Button>
                <Button auto icon={<i className="fas fa-share"></i>}>
                  {post.shares}
                </Button>
              </div>
              <Link href="#" className="text-primary-500 hover:text-primary-700">
                Commenter
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
      <Footer />
    </div>
    
  );
};

export default TattooTalk;
