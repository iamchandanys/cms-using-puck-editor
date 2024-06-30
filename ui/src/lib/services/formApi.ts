import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Form = {
  id: number;
};

/**
 * The formApi object provides methods to interact with the form API.
 */
export const formApi = createApi({
  reducerPath: "formApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://briisk-i-dev-api.azure-api.net/bl/Channel/Details/kotak-sampoornabima-dev.demoinsurance.com",
    prepareHeaders: (headers) => {
      headers.set(
        "Ocp-Apim-Subscription-Key",
        "6aeeca623d274b61bd75b25cd28d2cb8"
      );
      headers.set("My-Host", "kotak-sampoornabima-dev.demoinsurance.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    /**
     * Retrieves the channel settings.
     * @returns A promise that resolves to an array of Form objects.
     */
    getChannelSettings: builder.query<Form[], null>({
      query: () => "/",
    }),
  }),
});

export const { useGetChannelSettingsQuery } = formApi;
