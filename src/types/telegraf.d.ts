import I18N from 'telegraf-i18n'
import { User } from '@/models'
import { DocumentType } from '@typegoose/typegoose'
import { Scenes } from '@/helpers/scenes'

declare module 'telegraf' {
  export class Context {
    dbuser: DocumentType<User>
    i18n: I18N
    scene: Scenes
  }
}
