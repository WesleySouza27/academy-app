import { academyApi } from "../http-config";

export async function logout(token: string): Promise<boolean> {
  try {
    await academyApi.post("/logout", undefined, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}
