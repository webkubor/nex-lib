/**
 * 该模块包含与对象操作相关的实用工具函数。
 * @module ObjectUtils
 */

/**
 * 定义任意对象的类型。
 */
type AnyObject = Record<string, any>;

/**
 * 包含与对象操作相关的实用工具函数。
 */
const ObjectUtils = {
  /**
   * 深度合并两个对象。
   * @param target 要合并的目标对象。
   * @param source 要合并的源对象。
   * @returns 合并后的新对象。
   * @template T 目标对象的类型。
   * @template S 源对象的类型。
   */
  deepMerge<T extends AnyObject, S extends AnyObject>(target: T, source: S): T & S {
    const output: AnyObject = { ...target }; // 显式创建一个新对象作为输出
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

  /**
   * 检查两个对象是否相等（深度比较）。
   * @param obj1 第一个对象。
   * @param obj2 第二个对象。
   * @returns 如果两个对象相等则返回 true，否则返回 false。
   */
  deepEqual(obj1: AnyObject, obj2: AnyObject): boolean {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  },

  /**
   * 判断目标的类型。
   * @param target 要判断的目标。
   * @returns 目标的类型字符串string,number,boolean,object,function,date,regexp,error,null,undefined。
   */
  judgeTypes(target: any): string {
    return Object.prototype.toString.call(target)
      .replace(/^\[object\s(\w+)\]$/, '$1')
      .toLowerCase();
    // 或者使用 Reflect.apply (不影响功能，但稍显复杂)
    // return Reflect.apply(Object.prototype.toString, target, [])
    //   .replace(/^\[object\s(\w+)\]$/, '$1')
    //   .toLowerCase();
  },


  /**
 * @name: 按照条件过滤tree结构菜单
 * @param {Object} tree
 * @param {Function} func
 * @return {*}
 */
  treeFilter(tree: Object[], func: Function) {
    return tree
      .map((node) => ({ ...node }))
      .filter((node: any) => {
        node.children = node.children && this.treeFilter(node.children, func);
        return func(node) || node?.children?.length;
      });
  },



   filterAndRecurse: (arr, predicate) => {
    let that = ObjectUtils;
    return arr.reduce((acc, item) => {
      if (predicate(item)) {
        const newItem = {...item };
        if (newItem.children && newItem.children.length) {
          newItem.children = that.filterAndRecurse(newItem.children, predicate);
        }
        acc.push(newItem);
      }
      return acc;
    }, []);
  },

  /**
   * 获取对象的键数组。
   * @param obj 要获取键数组的对象。
   * @returns 对象的键数组。
   */
  keys(obj: AnyObject): string[] {
    return Object.keys(obj);
  },

  /**
   * 获取对象的值数组。
   * @param obj 要获取值数组的对象。
   * @returns 对象的值数组。
   */
  values(obj: AnyObject): any[] {
    return Object.values(obj);
  }
};

export default ObjectUtils;
