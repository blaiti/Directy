const reverseGeocode = async (coordinates: { lat: string, long: string}) => {
    const address = await fetch(`https://geocode.maps.co/reverse?lat=${coordinates.lat}&${coordinates.long}`);

    return await address.json();
};

const forwardGeocode = async (address: string) => {
    const coordinates = await fetch(`https://geocode.maps.co/search?q==${address}`);

    return await coordinates.json();
};

const MapService = {
	reverseGeocode,
    forwardGeocode
};

export default MapService;