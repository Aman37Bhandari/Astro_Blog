import globalConfig from "@/config/globalConfig";

const isAdmin = async (): Promise<boolean> => {
  try {
    const response = await fetch(`${globalConfig.authApiUrl}/admin`, {
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
  } catch (error: unknown) {
    console.log(error);
  }

  return false;
};

export default isAdmin;
