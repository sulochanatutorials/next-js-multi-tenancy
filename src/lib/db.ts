export const getHostnameDataBySubdomain = async () => {};
export const getSubdomainPaths = async () => {};
export const getHostnameDataOrDefault = async () => {};

export function getSubdomainFromHostName(hostname = "") {
  const split = hostname.split(".");
  const domain = split.length == 3 ? split[0] : false;
  return domain;
}
