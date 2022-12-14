const GOOGLE_API = "https://google-search3.p.rapidapi.com/api/v1";
const GOOGLE_API_SEARCH = `${GOOGLE_API}/search`;
const GOOGLE_API_IMAGE = `${GOOGLE_API}/image`;
const GOOGLE_API_NEWS = `${GOOGLE_API}/news`;
const GOOGLE_API_VIDEO = `${GOOGLE_API}/video`;
const GOOGLE_API_SCHOLAR = `${GOOGLE_API}/scholar`;
const GOOGLE_API_CRAWL = `${GOOGLE_API}/crawl`;
const X_RapidAPI_KEY = process.env.NEXT_PUBLIC_API_KEY;

export {
  GOOGLE_API,
  GOOGLE_API_SEARCH,
  GOOGLE_API_IMAGE,
  GOOGLE_API_NEWS,
  GOOGLE_API_VIDEO,
  GOOGLE_API_SCHOLAR,
  GOOGLE_API_CRAWL,
  X_RapidAPI_KEY,
};
