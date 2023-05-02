import { createPinia, defineStore } from "pinia";
import { useUserStore } from "./modules/user";

const pinia = createPinia();

export { pinia, useUserStore };
