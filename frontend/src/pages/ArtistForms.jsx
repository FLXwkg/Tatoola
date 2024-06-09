import { useEffect, useState } from "react";
import StyleForm from "../components/forms/artist/StyleForm";
import WorkplaceForm from "../components/forms/artist/WorkPlaceForm";
import { Button } from "@nextui-org/button";
import LocationForm from "../components/forms/artist/LocationForm";
import SiretForm from "../components/forms/artist/SiretForm";
import RegisterPart from "../components/forms/RegisterPart";
import { useAuth } from "../contexts/authContext";
import { useNavigate } from "react-router-dom";

function ArtistForms() {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    workPlace: '',
    style: '',
    location: '',
    siret: '',
    user: {
      email: 'test@tattoola.fr',
      password: 'password'
    }
    // Add more steps if needed
  });
  const { register, state: {user, jwt} } = useAuth()

  useEffect(() => {
    if (user && jwt) {
      navigate('/dashboard')
    }
  }, [user])

  const handleNextStep = () => {
    setCurrentStep(prevStep => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep(prevStep => prevStep - 1);
  };

  const handleFormDataChange = (key, value) => {
    setFormData(prevData => ({
      ...prevData,
      [key]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    register(formData.user)
  }
  return (
    <div className="flex items-center justify-center bg-gray-50 w-full min-h-96">
      <div className="bg-white rounded shadow-md w-full">
        {currentStep === 1 && (
          <WorkplaceForm data={formData.workPlace} onChange={value => handleFormDataChange('workPlace', value)} />
        )}
        {currentStep === 2 && (
          <StyleForm data={formData.style} onChange={value => handleFormDataChange('style', value)} />
        )}
        {currentStep === 3 && (
          <LocationForm data={formData.location} onChange={value => handleFormDataChange('location', value)} />
        )}
        {currentStep === 4 && (
          <SiretForm data={formData.siret} onChange={value => handleFormDataChange('siret', value)} />
        )}
        {currentStep === 5 && (
          <div className="flex flex-col p-5 gap-5">
            <RegisterPart data={formData.user} onChange={value => handleFormDataChange('user', value)} />
          </div>
        )}
        <div className="mt-4 flex justify-between p-20">
          <Button
              variant="ghost"
              isDisabled={currentStep === 1 }
              onClick={handlePreviousStep}
              className='border-zinc-900 text-zinc-900 bg-zinc-50 px-24'>
              Précedent
            </Button>
          {currentStep < 5 ? (
            <Button
              variant="ghost"
              onClick={handleNextStep}
              className='border-zinc-900 text-zinc-900 bg-zinc-50 px-24'>
              Suivant
            </Button>
          ) : (
            <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleSubmit}>Soumettre</button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ArtistForms;