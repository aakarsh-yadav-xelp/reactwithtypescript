const apiRootUrl = "https://secure-inlet-13076.herokuapp.com";
export async function get(url) {
  return await fetch(`{apiRootUrl}/url`, { method: "get" });
}
