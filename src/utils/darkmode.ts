import { Ref, ref } from "vue";

const appEl = ref(document.querySelector("html") as HTMLHtmlElement);

export const switchTheme = (theme: Ref<string>): void => {
  if (choosen() == "light") {
    appEl.value.classList.add("dark");
  } else {
    appEl.value.classList.remove("dark");
  }
  theme.value = choosen();
};

export const choosen = (): "dark" | "light" => {
  return appEl.value.classList.contains("dark") ? "dark" : "light";
};
