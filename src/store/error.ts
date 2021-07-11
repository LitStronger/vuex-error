import store from "./index";
import {
  VuexModule,
  getModule,
  Module,
  Mutation,
} from "vuex-module-decorators";

function hotModuleUnregisterModule(name: string) {
  if (!name) return;
  if ((store.state as any)[name]) {
    store.unregisterModule(name);
  }
}

export enum ErrorTypeEnum {
  VUE = "vue",
  SCRIPT = "script",
  RESOURCE = "resource",
  AJAX = "ajax",
  PROMISE = "promise",
}

export type ErrorInfo = {
  type: ErrorTypeEnum;
  file: string;
  name?: string;
  message: string;
  stack?: string;
  detail: string;
  url: string;
  time?: string;
};
export type ErrorState = {
  errorInfoState: any[] | null;
  errorListCountState: any;
};

const NAME = "error";
hotModuleUnregisterModule(NAME);
@Module({ dynamic: true, namespaced: true, store, name: NAME })
class Error extends VuexModule implements ErrorState {
  errorInfoState: any[] = [];
  errorListCountState = 0;

  get getErrorInfoState() {
    return this.errorInfoState;
  }

  get getErrorListCountState() {
    return this.errorListCountState;
  }

  @Mutation
  commitErrorInfoState(info: any): void {
    this.errorInfoState.push(info);
    console.log(this.errorInfoState, this.errorListCountState);
  }

  @Mutation
  commitErrorListCountState(count: any): void {
    this.errorListCountState = count;
    console.log(count);
    debugger;
  }
}
export { Error };
export const errorStore = getModule<Error>(Error);
