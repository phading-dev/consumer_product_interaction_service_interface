import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';

export interface PlaytimeMeterReportRange {
  reportId?: string,
  startTimestamp?: number,
  endTimestamp?: number,
}

export let PLAYTIME_METER_REPORT_RANGE: MessageDescriptor<PlaytimeMeterReportRange> = {
  name: 'PlaytimeMeterReportRange',
  fields: [
    {
      name: 'reportId',
      primitiveType: PrimitiveType.STRING,
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
