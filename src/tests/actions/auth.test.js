import  { login, logout } from '../../actions/auth';

test('test should generate login action object', () => {
    const uid = 'abc123';
    const action = login(uid);
    expect(action).toEqual({
        type:'LOGIN',
        uid
    });
});

test('test should generate logout action object', () => {
    const action = logout();
    expect(action).toEqual({
        type:'LOGOUT'
    });
});