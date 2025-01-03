import axios from "axios";
import { Meal } from "../types";

export const api = axios.create({
  baseURL: "https://www.themealdb.com/api/json/v1/1/",
});

export async function fetchMealByName(name: string = ""): Promise<Meal[]> {
  try {
    const response = await api.get<{ meals: Meal[] }>("search.php", {
      params: { s: name },
    });
    console.log("Response : ", response);
    return response.data.meals || [];
  } catch (error) {
    console.error("Error fetching meal:", error);
    throw error;
  }
}
