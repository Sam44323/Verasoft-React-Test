import axios from "axios";

export const getSummary = async () => {
  try {
    const response = await axios.get(
      "https://evoteam-verasoft.github.io/data/summary.json"
    );
    return response;
  } catch (err) {
    return err;
  }
};

export const getOrders = async () => {
  try {
    const response = await axios.get(
      "https://evoteam-verasoft.github.io/data/orders.json"
    );
    return response;
  } catch (err) {
    return err;
  }
};
