type ClassLike = { new (...args: any): any };
type FunctionLike = (...args: any) => any;

type PropertyLikeKeys<T> = {
  [K in keyof T]: T[K] extends FunctionLike
    ? never
    : T[K] extends ClassLike
    ? never
    : K;
}[keyof T];

export const spyOn = <T extends object, M extends PropertyLikeKeys<T>>(
  obj: TemplateStringsArray,
  propertyName: M,
  accessType: "get" | "set" = "get"
) => {
  let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);
  let proto = Object.getPrototypeOf(obj);

  while (!descriptor && proto !== null) {
    descriptor = Object.getOwnPropertyDescriptor(proto, propertyName);
    proto = Object.getPrototypeOf(proto);
  }

  if (!descriptor) {
    throw new Error("// TODO");
  }

  if (!descriptor.configurable) {
    throw new Error("// TODO");
  }

  if (!descriptor[accessType]) {
    throw new Error("// TODO");
  }

  const original = descriptor[accessType];
};
