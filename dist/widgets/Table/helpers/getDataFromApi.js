import axios from "axios";

const getDataFromApi = async api => {
  const req = await axios(api);
  return req.data;
};

export default getDataFromApi;