// ValidationUtils.ts
// 该模块包含与常用输入验证相关的实用工具函数。

const ValidationUtils = {
    // 验证邮箱是否有效
    isValidEmail(email: string): boolean {
      // 使用正则表达式验证邮箱格式
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
    },
  
    // 验证是否为有效的 URL
    isValidURL(url: string): boolean {
      try {
        // 使用 URL 构造函数验证 URL 是否有效
        new URL(url);
        return true;
      } catch (_) {
        return false;
      }
    },
  
    // 验证是否为有效的电话号码（简单的正则匹配）
    isValidPhoneNumber(phone: string): boolean {
      // 匹配 10 到 12 位的纯数字
      const re = /^[0-9]{10,12}$/;
      return re.test(phone);
    },
  
    // 验证是否为有效的日期字符串
    isValidDate(date: string): boolean {
        const [year, month, day] = date.split('-').map(Number);
        
        // 检查日期格式是否正确
        if (isNaN(year) || isNaN(month) || isNaN(day) || month < 1 || month > 12 || day < 1 || day > 31) {
          return false;
        }
        
        // 创建日期对象
        const parsedDate = new Date(year, month - 1, day);
        
        // 验证日期是否匹配原始日期字符串
        return (
          parsedDate.getFullYear() === year &&
          parsedDate.getMonth() === month - 1 &&
          parsedDate.getDate() === day
        );
      },
  
    // 验证是否为有效的邮政编码（中国大陆邮政编码）
    isValidPostalCode(postalCode: string): boolean {
      // 邮政编码通常是 6 位数字
      const re = /^[0-9]{6}$/;
      return re.test(postalCode);
    },
  
    // 验证是否为有效的身份证号码（中国大陆身份证号码）
    isValidIDCard(idCard: string): boolean {
      // 简单的正则表达式匹配身份证号码（18位数字）
      const re = /^[1-9]\d{5}(18|19|20)?\d{2}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}(\d|X)$/;
      return re.test(idCard);
    }
  };
  
  export default ValidationUtils;
  