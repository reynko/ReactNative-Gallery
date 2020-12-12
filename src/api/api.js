import * as axios from 'axios'




export const galleryAPI = {
    getImages() {
        return axios.get(`https://api.unsplash.com/photos/random?count=20&client_id=uc3zmpOd2-vLUH6OSNdZFgu7JSjpiLYIEmBHIf2T_a4`)
            .then(response => response)
    }
}

