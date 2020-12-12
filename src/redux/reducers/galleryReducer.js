import {galleryAPI} from "../../api/api";
const SET_IMAGES = 'gallery/SET_IMAGES'




const initialState = {
    images: [],
}

const GalleryReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_IMAGES:
            return {
                ...state,
                images:action.images
            }
        default:
            return state
    }
}

const setImages = images => ({type: SET_IMAGES, images})

export const setImagesTC = () => {
    return dispatch => {
        galleryAPI.getImages()
            .then(response => {
                dispatch(setImages(response.data))
            })
    }
}


export default GalleryReducer