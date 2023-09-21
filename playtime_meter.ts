import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { AppType, APP_TYPE } from '@phading/product_service_interface/app_type';

export interface PlaytimeMeter {
  appType?: AppType,
  productId?: string,
  playtime?: number,
  startTimestamp?: number,
}

export let PLAYTIME_METER: MessageDescriptor<PlaytimeMeter> = {
  name: 'PlaytimeMeter',
  fields: [
    {
      name: 'appType',
      enumType: APP_TYPE,
    },
    {
      name: 'productId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'playtime',
      primitiveType: PrimitiveType.NUMBER,
    },
    {
      name: 'startTimestamp',
      primitiveType: PrimitiveType.NUMBER,
    },
  ]
};
