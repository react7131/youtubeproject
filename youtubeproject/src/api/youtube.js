import axios from "axios";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        key: "AIzaSyDYNr2SLf9WqRgZDVsVGCoKEw8cvrnEN2M",
    }
})