export const getVideos = async () => {
  const response = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=25&q=Disney&key=${process.env.YOUTUBE_API_KEY}`
  );
  const videos = await response.json();

  return videos.items.map((item) => {
    return {
      title: item.snippet.title,
      imgUrl: item.snippet.thumbnails.high.url,
      id: item?.id?.videoId,
    };
  });
};
