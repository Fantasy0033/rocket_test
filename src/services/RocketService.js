import { useHttp } from "../hooks/http";

const useRocketService = () => {
    const {loading, request, error, clearError} = useHttp();

    const _apiBase = 'https://api.spacexdata.com/v4/dragons';

    const getAllRocket = async (page = _page) => {
        const res = await request(`${_apiBase}character?page=${page}&limit=4`);
        const dataArray = Object.values(res.characters);
        return dataArray.map(_transformCharacter);
    }

    const _transformCharacter = (char) => {
        return {
            id: char.id,
            name: char.name,
            family: char.family && char.family['lover'] ? char.family['lover'] : 'Unknown',
            anime: char.debut && char.debut.anime ? char.debut.anime : 'Unknown',
            affiliation: char.personal & char.personal.affiliation ? char.personal.affiliation : 'Unknown',
            rank: char.rank && char.rank.ninjaRank && char.rank.ninjaRank['Part II'] ? char.rank.ninjaRank['Part II'] : 'Unknown',
            image: char.images && char.images.length > 0 ? char.images[0] : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-lHyO3kuG60PHcbkfkDemnvp6pPkRxmnaYXqc8SOKqg&s',
            jutsu: char.jutsu && char.jutsu[0] ? char.jutsu[0] : 'Unknown',
            imageStyle: imageStyle
        }
    }


    return {loading, error,clearError, getAllRocket}
}

export default useRocketService;