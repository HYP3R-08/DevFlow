import qs from "query-string";

interface UrlQueryParams {
  params: string;
  key: string;
  value: string;
}

interface RemoveUrlQueryParams {
  params: string;
  keysToRemove: string[];
}

export const formUrlQuery = ({ params, key, value }: UrlQueryParams) => {
  const queryString = qs.parse(params);

  queryString[key] = value;

  const stringifiedQuery = qs.stringify(queryString);
  return `${window.location.pathname}${stringifiedQuery ? `?${stringifiedQuery}` : ""}`;
};

export const removeKeysFromUrlQuery = ({
  params,
  keysToRemove,
}: RemoveUrlQueryParams) => {
  const queryString = qs.parse(params);

  keysToRemove.forEach((key) => {
    delete queryString[key];
  });

  const stringifiedQuery = qs.stringify(queryString, { skipNull: true });
  return `${window.location.pathname}${stringifiedQuery ? `?${stringifiedQuery}` : ""}`;
};
