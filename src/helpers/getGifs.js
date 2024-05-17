export const getGifs = async (dato) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=Ke6lAVldNgWBxYFf2Xi9bQmF5dfkLOlX&q=${dato}&limit=10`;
  const res = await fetch(url);
  const { data } = await res.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
};
