import globalConfig from "@/config/globalConfig";

const isMaintainer = async (): Promise<boolean> => {
  try {
    const response = await fetch(`${globalConfig.apiUrl}/maintainer`, {
      method: "GET",
      cache: "no-store",
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
      },
      credentials: "include",
    });

    if (response?.ok) {
      return true;
    }

    return false;
  } catch (error: unknown) {
    console.log(error);

    return false;
  }
};

export default isMaintainer;
