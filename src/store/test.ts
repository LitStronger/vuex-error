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

const NAME = "TEST";
hotModuleUnregisterModule(NAME);
@Module({ dynamic: true, namespaced: true, store, name: NAME })
class MyModule extends VuexModule {
  wheels = 2;

  @Mutation
  incrWheels(extra: any) {
    debugger;
    this.wheels += 1;
  }

  get axles() {
    return this.wheels / 2;
  }
}

export { MyModule };
export const MyModuleStore = getModule<MyModule>(MyModule);
