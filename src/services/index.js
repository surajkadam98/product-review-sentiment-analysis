import axios from "axios";
import { TEST_MODEL_URI, TRAIN_MODEL_URI, RESET_MODEL_URI } from "../utils/constant";

export async function testModel(payload) {
  return axios.post(TEST_MODEL_URI, payload);
}

export async function trainModel(payload) {
  return axios.post(TRAIN_MODEL_URI, payload);
}

export async function resetModel() {
  return axios.get(RESET_MODEL_URI);
}

