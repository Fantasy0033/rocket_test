import { useHttp } from "../hooks/http";

const useRocketService = () => {
    const {loading, request, error, clearError} = useHttp();

    const _apiBase = 'https://api.spacexdata.com/v4/dragons';

    const getAllRocket = async () => {
        const res = await request(`${_apiBase}`);
        return res.flatMap(_transformCharacters); 
    };

    const getRocket = async () => {
        const res = await request(`${_apiBase}`);
        return _transformCharacter(res[0]); 
    }

    const _transformCharacters = (char) => {
        return char.flickr_images.map((image) => ({
            name: char.name,
            height: `${char.height_w_trunk.meters} M / ${char.height_w_trunk.feet} FT`,
            diameter: `${char.diameter.meters} M / ${char.diameter.feet} FT`,
            spacecraft: `${char.pressurized_capsule.payload_volume.cubic_meters} M³ / ${char.pressurized_capsule.payload_volume.cubic_feet} FT³`,
            trunk: `${char.trunk.trunk_volume.cubic_meters} M³ / ${char.trunk.trunk_volume.cubic_feet} FT³`,
            launchMass: `${char.launch_payload_mass.kg} KG / ${char.launch_payload_mass.lb} LB`,
            returnMass: `${char.return_payload_mass.kg} KG / ${char.return_payload_mass.lb} LB`,
            description: char.description,
            image: image,
        }));
    };

    const _transformCharacter = (char) => {
        return {
            name: char.name,
            height: `${char.height_w_trunk.meters} M / ${char.height_w_trunk.feet} FT`,
            diameter: `${char.diameter.meters} M / ${char.diameter.feet} FT`,
            spacecraft: `${char.pressurized_capsule.payload_volume.cubic_meters} M³ / ${char.pressurized_capsule.payload_volume.cubic_feet} FT³`,
            trunk: `${char.trunk.trunk_volume.cubic_meters} M³ / ${char.trunk.trunk_volume.cubic_feet} FT³`,
            launchMass: `${char.launch_payload_mass.kg} KG / ${char.launch_payload_mass.lb} LB`,
            returnMass: `${char.return_payload_mass.kg} KG / ${char.return_payload_mass.lb} LB`,
            image: char.flickr_images[0],
        }
    }


    return {loading, error,clearError, getAllRocket, getRocket}
}

export default useRocketService;