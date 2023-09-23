import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { PlaytimeMeterReport, PLAYTIME_METER_REPORT } from './playtime_meter_report';
import { ServiceDescriptor } from '@selfage/service_descriptor';
import { USER_SESSION } from '@phading/user_service_interface/user_session';
import { PlaytimeMeterReportRange, PLAYTIME_METER_REPORT_RANGE } from './playtime_meter_report_range';
import { AppType, APP_TYPE } from '@phading/product_service_interface/app_type';
import { SavedProductList, SAVED_PRODUCT_LIST } from './saved_product_list';

export interface GetPlaytimeMeterReportRequestBody {
/* If absent, return the current report. Otherwise, return the corresponding historical report. */
  reportId?: string,
}

export let GET_PLAYTIME_METER_REPORT_REQUEST_BODY: MessageDescriptor<GetPlaytimeMeterReportRequestBody> = {
  name: 'GetPlaytimeMeterReportRequestBody',
  fields: [
    {
      name: 'reportId',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface GetPlaytimeMeterReportResponse {
  playtimeMeterReport?: Array<PlaytimeMeterReport>,
}

export let GET_PLAYTIME_METER_REPORT_RESPONSE: MessageDescriptor<GetPlaytimeMeterReportResponse> = {
  name: 'GetPlaytimeMeterReportResponse',
  fields: [
    {
      name: 'playtimeMeterReport',
      messageType: PLAYTIME_METER_REPORT,
      isArray: true,
    },
  ]
};

export let GET_PLAYTIME_METER_REPORT: ServiceDescriptor = {
  name: "GetPlaytimeMeterReport",
  path: "/GetPlaytimeMeterReport",
  body: {
    messageType: GET_PLAYTIME_METER_REPORT_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: USER_SESSION
  },
  response: {
    messageType: GET_PLAYTIME_METER_REPORT_RESPONSE,
  },
}

export interface ListHistoryPlaytimeMeterReportsRequestBody {
}

export let LIST_HISTORY_PLAYTIME_METER_REPORTS_REQUEST_BODY: MessageDescriptor<ListHistoryPlaytimeMeterReportsRequestBody> = {
  name: 'ListHistoryPlaytimeMeterReportsRequestBody',
  fields: [
  ]
};

export interface ListHistoryPlaytimeMeterReportsResponse {
  playtimeMeterReportRange?: Array<PlaytimeMeterReportRange>,
}

export let LIST_HISTORY_PLAYTIME_METER_REPORTS_RESPONSE: MessageDescriptor<ListHistoryPlaytimeMeterReportsResponse> = {
  name: 'ListHistoryPlaytimeMeterReportsResponse',
  fields: [
    {
      name: 'playtimeMeterReportRange',
      messageType: PLAYTIME_METER_REPORT_RANGE,
      isArray: true,
    },
  ]
};

export let LIST_HISTORY_PLAYTIME_METER_REPORTS: ServiceDescriptor = {
  name: "ListHistoryPlaytimeMeterReports",
  path: "/ListHistoryPlaytimeMeterReports",
  body: {
    messageType: LIST_HISTORY_PLAYTIME_METER_REPORTS_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: USER_SESSION
  },
  response: {
    messageType: LIST_HISTORY_PLAYTIME_METER_REPORTS_RESPONSE,
  },
}

export interface IncrementPlaytimeRequestBody {
  productId?: string,
  playtime?: number,
}

export let INCREMENT_PLAYTIME_REQUEST_BODY: MessageDescriptor<IncrementPlaytimeRequestBody> = {
  name: 'IncrementPlaytimeRequestBody',
  fields: [
    {
      name: 'productId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'playtime',
      primitiveType: PrimitiveType.NUMBER,
    },
  ]
};

export interface IncrementPlaytimeResponse {
}

export let INCREMENT_PLAYTIME_RESPONSE: MessageDescriptor<IncrementPlaytimeResponse> = {
  name: 'IncrementPlaytimeResponse',
  fields: [
  ]
};

export let INCREMENT_PLAYTIME: ServiceDescriptor = {
  name: "IncrementPlaytime",
  path: "/IncrementPlaytime",
  body: {
    messageType: INCREMENT_PLAYTIME_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: USER_SESSION
  },
  response: {
    messageType: INCREMENT_PLAYTIME_RESPONSE,
  },
}

export interface RecordPlayHistoryRequestBody {
  productId?: string,
  playTimestamp?: number,
  progress?: number,
}

export let RECORD_PLAY_HISTORY_REQUEST_BODY: MessageDescriptor<RecordPlayHistoryRequestBody> = {
  name: 'RecordPlayHistoryRequestBody',
  fields: [
    {
      name: 'productId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'playTimestamp',
      primitiveType: PrimitiveType.NUMBER,
    },
    {
      name: 'progress',
      primitiveType: PrimitiveType.NUMBER,
    },
  ]
};

export interface RecordPlayHistoryResponse {
}

export let RECORD_PLAY_HISTORY_RESPONSE: MessageDescriptor<RecordPlayHistoryResponse> = {
  name: 'RecordPlayHistoryResponse',
  fields: [
  ]
};

export let RECORD_PLAY_HISTORY: ServiceDescriptor = {
  name: "RecordPlayHistory",
  path: "/RecordPlayHistory",
  body: {
    messageType: RECORD_PLAY_HISTORY_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: USER_SESSION
  },
  response: {
    messageType: RECORD_PLAY_HISTORY_RESPONSE,
  },
}

export interface SaveProductRequestBody {
  productId?: number,
  listId?: string,
}

export let SAVE_PRODUCT_REQUEST_BODY: MessageDescriptor<SaveProductRequestBody> = {
  name: 'SaveProductRequestBody',
  fields: [
    {
      name: 'productId',
      primitiveType: PrimitiveType.NUMBER,
    },
    {
      name: 'listId',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface SaveProductResponse {
}

export let SAVE_PRODUCT_RESPONSE: MessageDescriptor<SaveProductResponse> = {
  name: 'SaveProductResponse',
  fields: [
  ]
};

export let SAVE_PRODUCT: ServiceDescriptor = {
  name: "SaveProduct",
  path: "/SaveProduct",
  body: {
    messageType: SAVE_PRODUCT_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: USER_SESSION
  },
  response: {
    messageType: SAVE_PRODUCT_RESPONSE,
  },
}

export interface CreateSavedProductListRequestBody {
  appType?: AppType,
  name?: string,
}

export let CREATE_SAVED_PRODUCT_LIST_REQUEST_BODY: MessageDescriptor<CreateSavedProductListRequestBody> = {
  name: 'CreateSavedProductListRequestBody',
  fields: [
    {
      name: 'appType',
      enumType: APP_TYPE,
    },
    {
      name: 'name',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface CreateSavedProductListResponse {
  listId?: string,
}

export let CREATE_SAVED_PRODUCT_LIST_RESPONSE: MessageDescriptor<CreateSavedProductListResponse> = {
  name: 'CreateSavedProductListResponse',
  fields: [
    {
      name: 'listId',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export let CREATE_SAVED_PRODUCT_LIST: ServiceDescriptor = {
  name: "CreateSavedProductList",
  path: "/CreateSavedProductList",
  body: {
    messageType: CREATE_SAVED_PRODUCT_LIST_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: USER_SESSION
  },
  response: {
    messageType: CREATE_SAVED_PRODUCT_LIST_RESPONSE,
  },
}

export interface ListSavedProductListRequestBody {
  appType?: AppType,
}

export let LIST_SAVED_PRODUCT_LIST_REQUEST_BODY: MessageDescriptor<ListSavedProductListRequestBody> = {
  name: 'ListSavedProductListRequestBody',
  fields: [
    {
      name: 'appType',
      enumType: APP_TYPE,
    },
  ]
};

export interface ListSavedProductListResponse {
  savedProductList?: SavedProductList,
}

export let LIST_SAVED_PRODUCT_LIST_RESPONSE: MessageDescriptor<ListSavedProductListResponse> = {
  name: 'ListSavedProductListResponse',
  fields: [
    {
      name: 'savedProductList',
      messageType: SAVED_PRODUCT_LIST,
    },
  ]
};

export let LIST_SAVED_PRODUCT_LIST: ServiceDescriptor = {
  name: "ListSavedProductList",
  path: "/ListSavedProductList",
  body: {
    messageType: LIST_SAVED_PRODUCT_LIST_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: USER_SESSION
  },
  response: {
    messageType: LIST_SAVED_PRODUCT_LIST_RESPONSE,
  },
}
