import {toast} from "react-toastify";
import WarningIcon from '@material-ui/icons/Warning';
import axiosApi from "../../axiosApi";

export const FETCH_MAIN_REQUEST = 'FETCH_MAIN_REQUEST';
export const FETCH_MAIN_SUCCESS = 'FETCH_MAIN_SUCCESS';
export const FETCH_MAIN_FAILURE = 'FETCH_MAIN_FAILURE';

export const FETCH_ALBUMS_REQUEST = 'FETCH_ALBUMS_REQUEST';
export const FETCH_ALBUMS_SUCCESS = 'FETCH_ALBUMS_SUCCESS';
export const FETCH_ALBUMS_FAILURE = 'FETCH_ALBUMS_FAILURE';

export const FETCH_TRACKS_REQUEST = 'FETCH_TRACKS_REQUEST';
export const FETCH_TRACKS_SUCCESS = 'FETCH_TRACKS_SUCCESS';
export const FETCH_TRACKS_FAILURE = 'FETCH_TRACKS_FAILURE';
// export const CREATE_PRODUCT_REQUEST = 'CREATE_PRODUCT_REQUEST';
// export const CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS';
// export const CREATE_PRODUCT_FAILURE = 'CREATE_PRODUCT_FAILURE';

export const fetchMainRequest = () => ({type: FETCH_MAIN_REQUEST});
export const fetchMainSuccess = data => ({type: FETCH_MAIN_SUCCESS, payload: data});
export const fetchMainFailure = () => ({type: FETCH_MAIN_FAILURE});

export const fetchAlbumsRequest = () => ({type: FETCH_ALBUMS_REQUEST});
export const fetchAlbumsSuccess = data => ({type: FETCH_ALBUMS_SUCCESS, payload: data});
export const fetchAlbumsFailure = () => ({type: FETCH_ALBUMS_FAILURE});

export const fetchTracksRequest = () => ({type: FETCH_TRACKS_REQUEST});
export const fetchTracksSuccess = data => ({type: FETCH_TRACKS_SUCCESS, payload: data});
export const fetchTracksFailure = () => ({type: FETCH_TRACKS_FAILURE});

// export const createProductRequest = () => ({type: CREATE_PRODUCT_REQUEST});
// export const createProductSuccess = () => ({type: CREATE_PRODUCT_SUCCESS});
// export const createProductFailure = () => ({type: CREATE_PRODUCT_FAILURE});


export const fetchArtists = () => {
    return async dispatch => {
        try {
            dispatch(fetchMainRequest());
            const response = await axiosApi.get('/artists');
            dispatch(fetchMainSuccess(response.data));
        } catch (e) {
            dispatch(fetchMainFailure());
            toast.error('Could not fetch products!', {
                theme: 'colored',
                icon: <WarningIcon/>
            });
        }
    };
};

export const fetchAlbums = id => {
    return async dispatch => {
        let response = null;
        try {
            dispatch(fetchAlbumsRequest());
            if (id) {
                response = await axiosApi.get('/albums?artist=' + id);
            } else {
                response = await axiosApi.get('/albums');
            }
            dispatch(fetchAlbumsSuccess(response.data));
        } catch (e) {
            dispatch(fetchAlbumsFailure());
        }
    };
};

export const fetchTracks = (id, token) => {
    return async dispatch => {
        let response = null;
        try {
            dispatch(fetchTracksRequest());
            if (id) {
                response = await axiosApi.get('/tracks?album=' + id, {
                    headers: {
                        'Authorization': token,
                    }
                });
            } else {
                response = await axiosApi.get('/tracks');
            }
            dispatch(fetchTracksSuccess(response.data));
        } catch (e) {
            dispatch(fetchTracksFailure());
            if (e.response.status === 401) {
                toast.warning('You are not authorized');
            } else {
                toast.error('Could not fount tracks', {
                    theme: 'colored',
                    icon: <WarningIcon/>,
                });
            }
        }
    };
};
