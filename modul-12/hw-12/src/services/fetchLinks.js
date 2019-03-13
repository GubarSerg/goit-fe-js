'use strict'

import axios from 'axios';

const key = '5c841c025961a62c9de9af192f34373edd0f0fe4e62cc';


export default function fetchLink (url) {
    const apiUrl = `https://api.linkpreview.net/?key=${key}&q=${url}`;
    return axios.get(apiUrl);
}
