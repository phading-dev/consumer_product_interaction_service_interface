import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { AppType, APP_TYPE } from '@phading/product_service_interface/app_type';

export interface PlaytimeMeterPerApp {
  appType?: AppType,
  playtime?: number,
}

export let PLAYTIME_METER_PER_APP: MessageDescriptor<PlaytimeMeterPerApp> = {
  name: 'PlaytimeMeterPerApp',
  fields: [
    {
      name: 'appType',
      enumType: APP_TYPE,
    },
    {
      name: 'playtime',
      primitiveType: PrimitiveType.NUMBER,
    },
  ]
};

export interface PlaytimeMeterReport {
  totalPlaytime?: number,
  playtimeMetersPerApp?: Array<PlaytimeMeterPerApp>,
  startTimestamp?: number,
  endTimestamp?: number,
}

export let PLAYTIME_METER_REPORT: MessageDescriptor<PlaytimeMeterReport> = {
  name: 'PlaytimeMeterReport',
  fields: [
    {
      name: 'totalPlaytime',
      primitiveType: PrimitiveType.NUMBER,
    },
    {
      name: 'playtimeMetersPerApp',
      messageType: PLAYTIME_METER_PER_APP,
      isArray: true,
    },
    {
      name: 'startTimestamp',
      primitiveType: PrimitiveType.NUMBER,
    },
    {
      name: 'endTimestamp',
      primitiveType: PrimitiveType.NUMBER,
    },
  ]
};
