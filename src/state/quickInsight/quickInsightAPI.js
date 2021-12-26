// A mock function to mimic making an async request for
import axios from "axios";
import { QUICK_INSIGHT_URI } from "../../utils/constant";

export function fetchProductData(url = "") {
  return new Promise((resolve, reject) =>
    axios
      .get(`${QUICK_INSIGHT_URI}${url}`)
      .then((result) => resolve({ data: result.data }))
      .catch((err) => reject({ error: "something went wrong!" }))
  );
}
