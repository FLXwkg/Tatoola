import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

function BecomeArtist() {
  const navigate = useNavigate()
  const handleSubmit = () => {
    navigate('/artist_forms')
  }
  return (
    <div className='flex flex-col items-center'>
    <div className="w-full bg-zinc-500">
      <h1 className='text-4xl font-bold pt-16'>Vous êtes Tatoueur ?</h1>
      <h2 className='text-2xl font-bold pt-5'>Inscrivez vous sur notre site pour augmenter votre visibilité !</h2>
      <div className='flex flex-row justify-center pt-8 pb-24'>
        <Button
          variant="ghost"
          onClick={handleSubmit}
          className='border-zinc-900 text-zinc-900 bg-zinc-50 px-24'>
          S'inscrire
        </Button>
      </div>
    </div>
    <div className="w-full bg-zinc-50">
      <h2 className='text-2xl font-bold pt-5'>Ce que nous pouvons vous apporter</h2>
      <h3 className='pt-5'>
        Découvrez les nombreux avantages d'être inscrit sur notre plateforme et comment nous pouvons vous aider à développer votre activité de tatoueur.
      </h3>
      <div className="flex flex-row py-5 px-8">
        <div className="w-1/5 p-3">
          <Image
          className="rounded-full p-3"
          src="/public/features/finder.webp"
           />
          <p>
            Augmentez votre visibilité et atteignez une large audience de passionnés de tatouage à la recherche d’artistes talentueux.
          </p>
        </div>
        <div className="w-1/5 p-3">
          <Image
          className="rounded-full p-3"
          src="/public/features/talk.webp"
           />
          <p>
            Rejoignez une communauté de professionnels et bénéficiez de recommandations et d’avis positifs pour renforcer votre crédibilité.
          </p>
        </div>
        <div className="w-1/5 p-3">
          <Image
          className="rounded-full p-3"
          src="/public/features/view.webp"
           />
          <p>
            Présentez votre portfolio de créations uniques et montrez vos compétences artistiques à travers des galeries photo.
          </p>
        </div>
        <div className="w-1/5 p-3">
          <Image
          className="rounded-full p-3"
          src="/public/features/mag.webp"
           />
          <p>
            Accédez à des ressources exclusives telles que des guides, tutoriels et articles sur les dernières tendances et techniques de tatouage.
          </p>
        </div>
        <div className="w-1/5 p-3">
          <Image
          className="rounded-full p-3"
          src="/public/tatoos/tatoo6.webp"
           />
          <p>
            Gérez facilement vos rendez-vous grâce à notre système de réservation en ligne et simplifiez votre emploi du temps.
          </p>
        </div>
      </div>
      <div className="flex flex-row py-5 px-8 gap-4 items-center">
        <div className="w-1/2">
          <Image src="/public/tatoomag/news1.webp" />
        </div>
        <div className="flex flex-col w-1/2 text-start ps-3">
        <h4 className="text-2xl font-bold pb-6">Augmentez vos revenus</h4>
        <p>
        Rejoignez notre plateforme et profitez de promotions exclusives pour les membres inscrits. 
        Bénéficiez de réductions sur les fournitures de tatouage et les formations.
        En tant que membre de notre communauté, vous aurez accès à des offres spéciales et à des réductions sur une gamme de produits et services liés au tatouage. 
        Maximisez vos profits en réduisant vos coûts opérationnels grâce à nos partenariats exclusifs.
        </p>
        </div>
      </div>
      <div className="flex flex-row py-5 px-8 gap-4 items-center">
        <div className="flex flex-col w-1/2 text-start ps-3">
        <h4 className="text-2xl font-bold pb-6">Renforcez votre réputation</h4>
        <p>
        Recevez des avis et recommandations de vos clients satisfaits. 
        Les témoignages peuvent grandement influencer de nouveaux clients à choisir vos services.
        Les témoignages et avis de clients satisfaits sont essentiels pour bâtir votre réputation. 
        Notre plateforme permet à vos clients de laisser des commentaires et des évaluations, ce qui peut attirer plus de nouveaux clients et renforcer la confiance en vos compétences.
        </p>
        </div>
        <div className="w-1/2">
          <Image src="/public/tatoomag/news4.webp" />
        </div>
        
      </div>
      <Image
        src="/public/tatoomag/news3.webp" 
        className="px-40 py-16"
        />
       <h2 className='text-2xl font-bold pt-5'>Inscrivez vous en moins de 5 minutes !</h2>
       <div className='flex flex-row justify-center pt-8 pb-24'>
        <Button
          variant="ghost"
          onClick={handleSubmit}
          className='border-zinc-900 text-zinc-900 bg-zinc-50 px-24'>
          S'inscrire
        </Button>
      </div>
    </div>
    </div>
  );
}

export default BecomeArtist;