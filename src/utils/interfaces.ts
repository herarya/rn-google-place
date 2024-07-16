export interface IPlace {
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
  };
  description: string;
  placeId: string;
}

export interface ISuccessResponse<T> {
  statusCode: number;
  data?: T | null;
}
