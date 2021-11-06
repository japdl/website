import { RouteRecordRaw } from "vue-router";

export const makeRoute = (path: string, name?: string): RouteRecordRaw => {
  const upperCaseFirstLetter = (str: string): string => {
    const splitted = str.split("");
    splitted[0] = splitted[0].toUpperCase();
    return splitted.join("");
  };
  const vueModuleName = `${upperCaseFirstLetter(path)}`;
  const routeName = name ? name : vueModuleName;
  return {
    path: "/" + path,
    name: routeName,
    component: () => import(`../views/${vueModuleName}.vue`),
  } as RouteRecordRaw;
};
