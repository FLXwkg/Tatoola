// src/components/Tattootheque.jsx
import React, { useState } from 'react';
import { Card, CardBody, CardHeader, Image, Button, useDisclosure } from '@nextui-org/react';
import { Modal, ModalContent, ModalBody, ModalFooter } from '@nextui-org/react';

// Exemple de données de tatouages
const initialTattoos = [
  { id: 1, image: '/tatoos/tatoo1.webp' },
  { id: 2, image: '/tatoos/tatoo2.webp' },
  { id: 3, image: '/tatoos/tatoo3.webp' },
  { id: 4, image: '/tatoos/tatoo4.webp' },
  { id: 5, image: '/tatoos/tatoo5.webp' },
  { id: 6, image: '/tatoos/tatoo6.webp' },
  { id: 7, image: '/tatoos/tatoo7.webp' },
  { id: 8, image: '/tatoos/tatoo8.webp' },
  { id: 9, image: '/tatoos/tatoo9.webp' },
  { id: 10, image: '/tatoos/tatoo10.webp' },
  { id: 11, image: '/tatoos/tatoo11.webp' },
  { id: 12, image: '/tatoos/tatoo12.webp' },
  { id: 13, image: '/tatoos/tatoo13.webp' },
  { id: 14, image: '/tatoos/tatoo14.webp' },
  { id: 15, image: '/tatoos/tatoo15.webp' },
  { id: 16, image: '/tatoos/tatoo16.webp' },
  { id: 17, image: '/tatoos/tatoo17.webp' },
  { id: 18, image: '/tatoos/tatoo18.webp' },
  { id: 19, image: '/tatoos/tatoo19.webp' },
  { id: 20, image: '/tatoos/tatoo20.webp' },
  // Ajoutez plus d'images ici
];

const initialVisibleTattoos = 5;

const Tattootheque = () => {
  const [visibleCount, setVisibleCount] = useState(initialVisibleTattoos);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState(null);

  const loadMoreTattoos = () => {
    setVisibleCount(visibleCount + 5);
  };

  const loadLessTattoos = () => {
    setVisibleCount(Math.max(visibleCount - 5, initialVisibleTattoos));
  };

  const openModal = (image) => {
    setSelectedImage(image);
    onOpen();
  };

  const layoutClasses = [
    'col-span-12 sm:col-span-4 h-[300px] cursor-pointer', // Grande carte
    'col-span-12 sm:col-span-4 h-[300px] cursor-pointer', // Grande carte
    'col-span-12 sm:col-span-4 h-[300px] cursor-pointer', // Grande carte
    'col-span-12 sm:col-span-5 h-[300px] cursor-pointer', // Grande carte horizontale
    'col-span-12 sm:col-span-7 h-[300px] cursor-pointer'  // Grande carte horizontale
  ];

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-8 text-center">Notre Tattoothèque</h2>
      <div className="max-w-[1200px] gap-4 grid grid-cols-12 px-8 mx-auto">
        {initialTattoos.slice(0, visibleCount).map((tattoo, index) => (
          <div
            key={tattoo.id}
            className={`shadow-lg hover:shadow-2xl transition-shadow duration-300 ${layoutClasses[index % layoutClasses.length]}`}
            onClick={() => openModal(tattoo.image)}
          >
            <Card className="h-full p-0 m-0">
              <CardHeader className="absolute z-10 top-1 flex-col items-start"></CardHeader>
              <CardBody className="p-0 h-full">
                <Image
                  src={tattoo.image}
                  removeWrapper
                  alt={`Tattoo ${tattoo.id}`}
                  width="100%"
                  height="100%"
                  className="object-cover h-full"
                />
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8 space-x-4">
        {visibleCount < initialTattoos.length && (
          <Button onPress={loadMoreTattoos} auto>
            Voir plus
          </Button>
        )}
        {visibleCount > initialVisibleTattoos && (
          <Button onPress={loadLessTattoos} auto>
            Voir moins
          </Button>
        )}
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                {selectedImage && (
                  <Image
                    src={selectedImage}
                    alt="Tattoo zoomed"
                    width="100%"
                    height="auto"
                    className="object-cover"
                  />
                )}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Tattootheque;
