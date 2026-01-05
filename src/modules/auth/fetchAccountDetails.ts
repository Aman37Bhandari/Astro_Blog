import type { Account } from "@/types/types";

import globalConfig from "@/config/globalConfig";

const fetchAccountDetails = async (): Promise<Account | null> => {
  try {
    const response = await fetch(`${globalConfig.authApiUrl}/account/details`, {
      method: "GET",
      cache: "no-store",
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
      },
      credentials: "include",
    });

    if (!response.ok) {
      console.log("Failed to fetch account details");

      return null;
    }

    const data = await response.json();

    if (data?.account_data?.id) {
      return data.account_data as Account;
    }
  } catch (error: unknown) {
    console.log(error);
  }

  return null;
};

export default fetchAccountDetails;
