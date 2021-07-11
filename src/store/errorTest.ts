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

const NAME = "error";
hotModuleUnregisterModule(NAME);
@Module({ dynamic: true, namespaced: true, store, name: NAME })
class Error extends VuexModule {
  errorList: any[] = [];
  count = 2;
  wheels = 2;

  get getErrorInfoState() {
    return this.errorList;
  }

  get getCount() {
    return this.count;
  }
  get getWheels() {
    return this.wheels;
  }

  @Mutation
  commitErrorInfoState(info: any): void {
    this.errorList.push(info);
    debugger;
  }
  @Mutation
  commitCount(extra: any) {
    this.count += extra;
    debugger;
  }
  @Mutation
  incrWheels(extra: number) {
    debugger;
    this.wheels += extra;
  }
}
export { Error };
export const errorStore = getModule<Error>(Error);
