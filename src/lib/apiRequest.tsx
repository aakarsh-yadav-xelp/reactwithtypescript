const apiRootUrl : string = "https://secure-inlet-13076.herokuapp.com";
export async function get(url:string) {
  return await fetch(`${apiRootUrl}/url`, { method: "get" });
}
