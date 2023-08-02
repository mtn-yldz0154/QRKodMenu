import { React, useEffect, useState } from "react";
import axios from "axios";

const FetchProduct = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get(url);
    setData(response.data);
  };

  return { data };
};

export default FetchProduct;
