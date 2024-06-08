import React from 'react';
import { Card, CardBody, CardFooter, CardHeader, Image, Link, Button, Divider } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';

const TattooDetails = ({ artist }) => {
  const navigate = useNavigate();

  const handleStyleClick = (style) => {
    navigate(`/style/${style}`);
  };

  return (
    <Card className="shadow-lg hover:shadow-2xl transition-shadow duration-300 my-4 mx-auto max-w-[600px]">
      <CardHeader className="flex justify-center items-center p-4">
        <h2 className="text-2xl font-bold text-center">{artist.name}</h2>
      </CardHeader>
      <CardBody className="p-4">
        <div className="my-4">
          <h3 className="text-xl font-bold mb-2">Styles disponibles :</h3>
          <div className="flex flex-wrap gap-2">
            {artist.styles.map((style) => (
              <Button
                key={style}
                auto
                size="sm"
                variant="light"
                className="text-primary-500"
                onClick={() => handleStyleClick(style)}
              >
                {style}
              </Button>
            ))}
          </div>
        </div>
        <Divider />
        <div className="my-4">
          <h3 className="text-xl font-bold mb-2">Galerie :</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {artist.images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Tattoo ${index + 1}`}
                className="object-cover h-32 w-full"
              />
            ))}
          </div>
        </div>
      </CardBody>
      <Divider />
      <CardFooter className="p-4 flex justify-center space-x-4">
        <Button className="bg-blue-500 text-white px-4 py-2">Contacter</Button>
        <Button className="bg-green-500 text-white px-4 py-2">Voir son profil</Button>
      </CardFooter>
    </Card>
  );
};

export default TattooDetails;