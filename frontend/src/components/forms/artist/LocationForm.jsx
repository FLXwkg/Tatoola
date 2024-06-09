import Map from "../../map/Map";

function LocationForm() {
  return (
    <div className="flex flex-col justify-center items-start ">
      <div className="ps-80 pt-40 pb-24">
        <h1 className="text-3xl">Ou êtes-vous situé ?</h1>
      </div>
      <div className="w-full">
        <Map />
      </div>
      
    </div>
  );
}

export default LocationForm;