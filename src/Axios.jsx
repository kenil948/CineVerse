import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
      headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjU2NzJmMzZhNzBlMGQ0YjYxNGZkNzdkYWI2YzU3YSIsIm5iZiI6MTc4MjgyNjgzMy4wNiwic3ViIjoiNmE0M2M3NTFiOWIwOGMxNWUyMWRjZWI5Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.qwOxWDVxaAhk4HoYnXS0jjzvFacQu0R6rz4B7TicM_U'
  }
});

export default instance