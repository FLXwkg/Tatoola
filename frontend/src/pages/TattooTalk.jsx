import React, { useState } from 'react';
import {
  Card, CardBody, CardFooter, CardHeader, Avatar, Button, Image, Input,
  Dropdown, DropdownSection, DropdownTrigger, DropdownMenu, DropdownItem
} from '@nextui-org/react';
import { HeartIcon } from './HeartIcon';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaShareNodes } from "react-icons/fa6";

const posts = [
  {
    id: 1,
    author: 'Alexis Remy',
    time: '1h',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    image: '/tatoomag/post.webp',
    likes: 50,
    shares: "Partager",
  },
  {
    id: 2,
    author: 'Chloé Dubois',
    time: '2h',
    content: 'Quisque velit nisi, pretium ut lacinia in, elementum id enim...',
    image: '/tatoomag/post1.webp',
    likes: 110,
    shares:"Partager",
  },
  // Ajoutez plus de posts ici
];

const TattooTalk = () => {
  const [likes, setLikes] = useState(posts.map(post => ({ id: post.id, liked: false, count: post.likes })));
  const [comments, setComments] = useState(posts.map(post => ({ id: post.id, comments: [] })));
  const [commentText, setCommentText] = useState("");

  const handleLike = (postId) => {
    setLikes((prevLikes) =>
      prevLikes.map((like) =>
        like.id === postId ? { ...like, liked: !like.liked, count: like.liked ? like.count - 1 : like.count + 1 } : like
      )
    );
  };

  const handleComment = (postId) => {
    if (commentText.trim() !== "") {
      setComments((prevComments) =>
        prevComments.map((comment) =>
          comment.id === postId ? { ...comment, comments: [...comment.comments, commentText] } : comment
        )
      );
      setCommentText("");
    }
  };

  return (
    <div>
      <header className="relative w-full h-64 overflow-hidden">
  <img src="/headers/tatootalk1.png" alt="Header Background" className="absolute w-full h-full object-cover top-0 left-0" />
  <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
    <h2 className="text-3xl font-bold text-white mb-4">TattooTalk</h2>
    <h1 className="text-2xl font-bold text-white text-center">Echanger avec la communauté</h1>
    <Button auto className="bg-white text-black">Commencer à échanger</Button>
  </div>
</header>
      <div className="my-8">
        <div className="max-w-[1200px] gap-6 grid grid-cols-1 mx-auto">
          {posts.map((post) => (
            <Card key={post.id} className="shadow-lg hover:shadow-2xl transition-shadow duration-300 max-w-md mx-auto mb-6">
              <CardHeader className="flex justify-between items-center p-4">
                <div className="flex items-center space-x-4">
                  <Avatar isBordered size="lg" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                  <div>
                    <strong>{post.author}</strong>
                    <p className="text-sm text-gray-500">{post.time}</p>
                  </div>
                </div>
                <Button auto size="sm" className="bg-zinc-500 text-white">Suivre</Button>
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
                <div className="mt-4">
                  {comments.find(comment => comment.id === post.id)?.comments.map((comment, index) => (
                    <p key={index} className="text-sm text-gray-600">{comment}</p>
                  ))}
                </div>
              </CardBody>
              <CardFooter className="flex justify-between items-center p-4">
                <div className="flex space-x-4">
                  <Button
                    auto
                    isIconOnly
                    className="text-default-900/60 data-[hover]:bg-foreground/10"
                    radius="full"
                    variant="light"
                    onPress={() => handleLike(post.id)}
                  >
                    <HeartIcon
                      className={likes.find(like => like.id === post.id)?.liked ? "[&>path]:stroke-transparent" : ""}
                      fill={likes.find(like => like.id === post.id)?.liked ? "currentColor" : "none"}
                    />
                    {likes.find(like => like.id === post.id)?.count}
                  </Button>
                  <Dropdown className="shadow-xl" placement="bottom">
                    <DropdownTrigger>
                      <Button>
                        {post.shares}
                        <FaShareNodes />
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                      closeOnSelect
                      aria-label="Actions"
                      color="default"
                      variant="flat"
                    >
                      <DropdownSection title="Share">
                        <DropdownItem
                          key="Facebook"
                          description="Share on Facebook"
                          startContent={<FontAwesomeIcon icon={faFacebookF} />}
                        >
                          Facebook
                        </DropdownItem>
                        <DropdownItem
                          key="twitter"
                          description="Share on Twitter"
                          startContent={<FontAwesomeIcon icon={faTwitter} />}
                        >
                          Twitter
                        </DropdownItem>
                        <DropdownItem
                          key="instagram"
                          description="Share on Instagram"
                          startContent={<FontAwesomeIcon icon={faInstagram} />}
                        >
                          Instagram
                        </DropdownItem>
                      </DropdownSection>
                    </DropdownMenu>
                  </Dropdown>
                </div>
                <div className="flex space-x-2 mx-2">
                  <Input
                    clearable
                    placeholder="Ajouter..."
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    className="w-full"
                  />
                  <Button auto onClick={() => handleComment(post.id)}>Commenter</Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TattooTalk;