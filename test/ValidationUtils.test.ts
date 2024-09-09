import ValidationUtils from '../src/ValidationUtils'; // 假设 Time 类所在的文件路径

describe('ValidationUtils', () => {
    // 测试 isValidEmail 函数
    test('isValidEmail should correctly validate email addresses', () => {
        expect(ValidationUtils.isValidEmail('test@example.com')).toBe(true);
        expect(ValidationUtils.isValidEmail('invalid-email')).toBe(false);
        expect(ValidationUtils.isValidEmail('another.test@domain.co')).toBe(true);
    });

    // 测试 isValidURL 函数
    test('isValidURL should correctly validate URLs', () => {
        expect(ValidationUtils.isValidURL('https://www.example.com')).toBe(true);
        expect(ValidationUtils.isValidURL('invalid-url')).toBe(false);
        expect(ValidationUtils.isValidURL('http://localhost:3000')).toBe(true);
    });

    // 测试 isValidPhoneNumber 函数
    test('isValidPhoneNumber should correctly validate phone numbers', () => {
        expect(ValidationUtils.isValidPhoneNumber('1234567890')).toBe(true);
        expect(ValidationUtils.isValidPhoneNumber('12345')).toBe(false);
        expect(ValidationUtils.isValidPhoneNumber('123456789012')).toBe(true);
        expect(ValidationUtils.isValidPhoneNumber('1234567890123')).toBe(false);
    });

    // 测试 isValidDate 函数
    test('isValidDate should correctly validate date strings', () => {
        // 测试有效日期
        expect(ValidationUtils.isValidDate('2024-09-09')).toBe(true);
        expect(ValidationUtils.isValidDate('2024-02-29')).toBe(true); // 闰年日期
        expect(ValidationUtils.isValidDate('2000-01-01')).toBe(true);
        expect(ValidationUtils.isValidDate('1900-12-31')).toBe(true);

        // 测试无效日期
        expect(ValidationUtils.isValidDate('2024-02-30')).toBe(false); // 非存在日期
        expect(ValidationUtils.isValidDate('invalid-date')).toBe(false);
        expect(ValidationUtils.isValidDate('2024-13-01')).toBe(false); // 无效月份
        expect(ValidationUtils.isValidDate('2024-01-32')).toBe(false); // 无效日期
    });

    // 测试 isValidPostalCode 函数
    test('isValidPostalCode should correctly validate postal codes', () => {
        expect(ValidationUtils.isValidPostalCode('100000')).toBe(true);
        expect(ValidationUtils.isValidPostalCode('99999')).toBe(false);
        expect(ValidationUtils.isValidPostalCode('123456')).toBe(true);
        expect(ValidationUtils.isValidPostalCode('1234567')).toBe(false);
    });

    // 测试 isValidIDCard 函数
    test('isValidIDCard should correctly validate ID card numbers', () => {
        expect(ValidationUtils.isValidIDCard('620402199511133413')).toBe(true);
        expect(ValidationUtils.isValidIDCard('1101011990030778')).toBe(false);
        expect(ValidationUtils.isValidIDCard('11010119900307781XX')).toBe(false);
    });
});