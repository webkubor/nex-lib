// ObjectUtils.ts
// 该模块包含与对象操作相关的实用工具函数。

type AnyObject = Record<string, any>;

const ObjectUtils = {
  // 深度合并两个对象
  deepMerge<T extends AnyObject, S extends AnyObject>(target: T, source: S): T & S {
    const output = { ...target }; // 显式创建一个新对象作为输出
    if (Object.keys(source).length === 0) return output as T & S;

    // 遍历 source 对象的键
    for (const key of Object.keys(source)) {
      if (source[key] instanceof Object && key in target) {
        // 如果 source[key] 是对象，且 target 中有同样的 key，递归合并
        output[key] = this.deepMerge(target[key], source[key]);
      } else {
        // 否则直接赋值 source[key]
        output[key] = source[key];
      }
    }
    return output as T & S;
  },

  // 检查两个对象是否相等（深度比较）
  deepEqual(obj1: AnyObject, obj2: AnyObject): boolean {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  },

  // 获取对象的键数组
  keys(obj: AnyObject): string[] {
    return Object.keys(obj);
  },

  // 获取对象的值数组
  values(obj: AnyObject): any[] {
    return Object.values(obj);
  }
};

export default ObjectUtils;
