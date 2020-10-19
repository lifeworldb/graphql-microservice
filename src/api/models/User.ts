import { prop, getModelForClass, modelOptions } from '@typegoose/typegoose'

@modelOptions({ options: { customName: 'Users' } })
class UserSchema {
  @prop()
  name?: string
}

const User = getModelForClass(UserSchema)

export { User, UserSchema }