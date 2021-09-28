import { getURL } from "../paths";

export async function getLaunches(startDate: string, endDate: string) {
  try {
    const url = getURL(startDate, endDate);
    const response = await fetch(url);
    const launches: any = await response.json();

    return launches.results;
  } catch (e) {
    throw Error('Exception during data fetching');
  }
}