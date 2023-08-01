import { api, queryMethod } from '..';
import { getToken } from '../../services/token';
import { APIRoute } from '../../utils/constants';

export interface IBonusesResponse {
  resultOperation: {
    status: number;
    message: string;
    messageDev: string;
    codeResult: number;
    duration: number;
    idLog: string;
  },
  data: {
    typeBonusName: string;
    currentQuantity: number;
    forBurningQuantity: number;
    dateBurning: string;
  }
}

export const BonusesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBonuses: builder.mutation<IBonusesResponse, null>({
      query: () => ({
        url: `${APIRoute.Bonuses}/${getToken()}`,
        method: queryMethod.GET,
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useGetBonusesMutation } = BonusesApi;
