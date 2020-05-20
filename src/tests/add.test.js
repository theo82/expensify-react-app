const add = (a, b) => a + b;
const generateGreeting = (name) => `Hello ${name}`;

test('should ad two numbers', () => {
    const result = add(4, 3);
    expect(result).toBe(7);
});

test('should return a name', () => {
    const result = generateGreeting('Theo');
    expect(result).toBe('Hello Theo')
});