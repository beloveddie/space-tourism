import { reslugify } from "./reslugify";

export const findData = (data: [], searchString: string): unknown => {
  return data.find(
    (item: { name: string }) =>
      item.name.toLowerCase() === reslugify(searchString.toLowerCase())
  );
};
