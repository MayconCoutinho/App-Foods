import api from "./api";

export const GetPokeman = async (setData, setLoading, setError) => {
  setLoading(true);

  try {
    const response = await api.get("/ability/?limit=20&offset=20");
    setData(response?.data);
    setLoading(false);
  } catch (err) {
    setError(true);
    setLoading(false);
  }
};
