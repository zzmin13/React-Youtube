import axios from "axios";

class Youtube {
  constructor(key) {
    this.key = key;
  }
  async getMostPopular() {
    const response = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&regionCode=KR&key=${this.key}`
    );
    const videos = response.data.items;
    return videos;
  }
  async getCategoryVideos(categoryId) {
    const response = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&regionCode=KR&videoCategoryId=${categoryId}&key=${this.key}`
    );
    const videos = response.data.items;
    return videos;
  }
  async getVideoDetail() {}
  async getSearch(terms) {
    const response = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=25&q=${terms}&key=${this.key}`
    );
    let results = response.data.items;
    results = results.map((item) => ({ ...item, id: item.id.videoId }));
    console.log(results);
    return results;
  }
}

export default Youtube;
