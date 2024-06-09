import React from 'react';
import { Card, CardBody, CardFooter, CardHeader, Image, Link, Button, Divider } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';

const TattooDetails = ({ artist }) => {
  const navigate = useNavigate();

  const handleStyleClick = (style) => {
    navigate(`/style/${style}`);
  };

  return (
    <Card className="bg-zinc-900 text-zinc-50 shadow-lg hover:shadow-2xl transition-shadow duration-300 my-4 mx-auto max-w-[450px]">
      <CardHeader className="flex justify-center items-center p-3">
        <h2 className="text-xl font-bold text-center">{artist.name}</h2>
      </CardHeader>
      <CardBody className="p-3">
        <div className="my-3">
          <h3 className="text-lg font-bold mb-2">Styles disponibles :</h3>
          <div className="flex flex-wrap gap-2">
            {artist.styles.map((style) => (
              <Button
                key={style}
                auto
                size="sm"
                variant="light"
                className="text-zinc-900 bg-zinc-50"
                onClick={() => handleStyleClick(style)}
              >
                {style}
              </Button>
            ))}
          </div>
        </div>
        <Divider />
        <div className="my-3">
          <h3 className="text-lg font-bold mb-2">Galerie :</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {artist.images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Tattoo ${index + 1}`}
                className="object-cover h-24 w-full rounded-md"
              />
            ))}
          </div>
        </div>
      </CardBody>
      <Divider />
      <CardFooter className="p-3 flex justify-center space-x-4">
        <Button className="bg-zinc-50 text-zinc-900 px-4 py-2">Contacter</Button>
        <Button className="bg-zinc-50 text-zinc-900 px-4 py-2">Voir son profil</Button>
      </CardFooter>
    </Card>
  );
};

export default TattooDetails;