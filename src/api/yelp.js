import axios from 'axios';

export default axios.create(
    {
        baseURL: 'https://api.yelp.com/v3/businesses',
        headers: {
            Authorization: 'Bearer SSuV8PVehzIHIYH6-mHgdA7EAEUcTnVUQJaO2dKKgPb419sQzhZIyCLVEIHEBuZD8EASvpWTIe7WMfAMZW9prUGXAQX3yLHjUc9p8KC_UjxtcNBMMc79zx54bJzWZXYx',

        }
    }
);