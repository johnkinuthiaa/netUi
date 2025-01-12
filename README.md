fetching images prefix the poster path with this https://image.tmdb.org/t/p/original/ ...then image id

const options = {
method: 'GET',
headers: {
accept: 'application/json',
Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTFjNDU0M2QxOWQ3YjcyMDkzODYyZjM2ZWE0OTU3ZCIsIm5iZiI6MTcxNjQ3MjQzOC41Niwic3ViIjoiNjY0ZjRhNzZhYmQ4OWYyMDg3ZWMxNzY2Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.OYWG_dE1lWmPQcCzumYeMN9Oedst8puAZZn59GMnnFQ'
}
};

fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
.then(res => res.json())
.then(res => console.log(res))
.catch(err => console.error(err));

