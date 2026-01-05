import globalConfig from "@/config/globalConfig";

const verifySession = async (idToken?: string): Promise<boolean> => {
  let success = false;

  if (!idToken) {
    try {
      const response = await fetch(
        `${globalConfig.authApiUrl}/account/verify-session`,
        {
          method: "GET",
          cache: "no-store",
          headers: {
            "Cache-Control": "no-cache, no-store, must-revalidate",
          },
          credentials: "include",
        }
      );

      if (response?.ok) {
        success = true;
      } else {
        success = false;
      }
    } catch (error: unknown) {
      console.log(error);

      success = false;
    }

    return success;
  }

  try {
    const response = await fetch(
      `${globalConfig.authApiUrl}/account/social-login`,
      {
        method: "POST",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-cache, no-store, must-revalidate",
        },
        body: JSON.stringify({
          id_token: idToken,
        }),
        credentials: "include",
      }
    );

    if (response?.ok) {
      success = true;
    } else {
      success = false;
    }
  } catch (error: unknown) {
    console.log(error);

    success = false;
  }

  return success;
};

export default verifySession;
