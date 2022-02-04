import { DbAddAccount } from './db-add-account'

describe('DbAddAccount usecase', () => {
  test('Should call Encrypter with correct password', () => {
    class EncrypterStub {
      async encrypt (value: string): Promise<string> {
        return await new Promise(resolve => resolve('hashed_password'))
      }
    }
    const encrypterStub = new EncrypterStub()
    const sut = new DbAddAccount(encrypterStub)
    const encryptSpy = jest.spyOn(encrypterStub, 'encrypt')
    const accountData = Object.create({
      name: 'valid_name',
      email: 'valid_email',
      password: 'valid_password'
    })
    void sut.add(accountData)

    expect(encryptSpy).toHaveBeenCalledWith('valid_password')
  })
})
