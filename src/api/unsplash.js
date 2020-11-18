import axios from 'axios';


export default axios.create({
    baseURL:'https://api.unsplash.com/',
    headers: {
        Authorization:
            'Client-ID hPLWmFF8yyM1pULH4Uyv7WfHmkKisB59iz1BCWyFMEA',
    },
})