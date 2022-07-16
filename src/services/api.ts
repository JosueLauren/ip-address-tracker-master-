import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_OwjN9xuWrkAwj6aj2V7GpNwJHjzWZ&ipAddress='
})