import {ISuccessResponse} from '../utils/interfaces';
import {api} from './base-api';

const BASE_URL = 'https://maps.googleapis.com/maps/api/place';

export interface GooglePlaceQuery {
  language: string;
  key: string;
  components?: string;
  input?: string; // this for place input
  placeid?: string;
}

export interface GoogleLocationResults {
  description: string;
  id: string;
  matched_substrings: Array<{
    length: number;
    offset: number;
  }>;
  place_id: string;
  reference: string;
  structured_formatting: {
    main_text: string;
    secondary_text: string;
    main_text_matched_substrings: Array<{
      length: number;
    }>;
  };
  terms: Array<{
    offset: number;
    value: string;
  }>;
  types: string[];
}

export interface GooglePlaceResponse {
  predictions: GoogleLocationResults[];
  status?: string;
  error_message?: string;
}

export interface GoogleLocationDetailResult {
  adr_address: string;
  formatted_address: string;
  icon: string;
  id: string;
  name: string;
  place_id: string;
  scope: string;
  reference: string;
  url: string;
  utc_offset: number;
  vicinity: string;
  types: string[];
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
    viewport: {
      [type: string]: {
        lat: number;
        lng: number;
      };
    };
  };
  address_components: Array<{
    long_name: string;
    short_name: string;
    types: string[];
  }>;
}

export interface GoogleDetailResponse {
  result: GoogleLocationDetailResult;
  status?: string;
  error_message?: string;
}

export const googlePlaceApi = api.injectEndpoints({
  endpoints: build => ({
    fetchPlaces: build.query<
      ISuccessResponse<GooglePlaceResponse>,
      GooglePlaceQuery
    >({
      query: (params: GooglePlaceQuery) => ({
        baseURL: BASE_URL,
        method: 'get',
        url: 'autocomplete/json',
        params,
      }),
    }),
    fetchPlaceDetails: build.query<
      ISuccessResponse<GoogleDetailResponse>,
      GooglePlaceQuery
    >({
      query: (params: GooglePlaceQuery) => ({
        baseURL: BASE_URL,
        method: 'get',
        url: 'details/json',
        params,
      }),
    }),
  }),
  overrideExisting: true,
});

export const {useLazyFetchPlacesQuery, useLazyFetchPlaceDetailsQuery} =
  googlePlaceApi;
