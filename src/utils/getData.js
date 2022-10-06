const getData = async (api) => {
  try {
        const response = await fetch(api);
        const response_1 = await response.json();
        return response_1;
    } catch (error) {
        return error;
    }
};

export default getData;
