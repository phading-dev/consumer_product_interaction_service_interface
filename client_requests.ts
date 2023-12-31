import { WebServiceClientInterface } from '@selfage/service_descriptor/web_service_client_interface';
import { GetPlaytimeMeterReportRequestBody, GetPlaytimeMeterReportResponse, GET_PLAYTIME_METER_REPORT, ListHistoryPlaytimeMeterReportsRequestBody, ListHistoryPlaytimeMeterReportsResponse, LIST_HISTORY_PLAYTIME_METER_REPORTS, IncrementPlaytimeRequestBody, IncrementPlaytimeResponse, INCREMENT_PLAYTIME, RecordPlayHistoryRequestBody, RecordPlayHistoryResponse, RECORD_PLAY_HISTORY, SaveProductRequestBody, SaveProductResponse, SAVE_PRODUCT, CreateSavedProductListRequestBody, CreateSavedProductListResponse, CREATE_SAVED_PRODUCT_LIST, ListSavedProductListRequestBody, ListSavedProductListResponse, LIST_SAVED_PRODUCT_LIST } from './interface';

export function getPlaytimeMeterReport(
  client: WebServiceClientInterface,
  body: GetPlaytimeMeterReportRequestBody,
): Promise<GetPlaytimeMeterReportResponse> {
  return client.send({
    descriptor: GET_PLAYTIME_METER_REPORT,
    body,
  });
}

export function listHistoryPlaytimeMeterReports(
  client: WebServiceClientInterface,
  body: ListHistoryPlaytimeMeterReportsRequestBody,
): Promise<ListHistoryPlaytimeMeterReportsResponse> {
  return client.send({
    descriptor: LIST_HISTORY_PLAYTIME_METER_REPORTS,
    body,
  });
}

export function incrementPlaytime(
  client: WebServiceClientInterface,
  body: IncrementPlaytimeRequestBody,
): Promise<IncrementPlaytimeResponse> {
  return client.send({
    descriptor: INCREMENT_PLAYTIME,
    body,
  });
}

export function recordPlayHistory(
  client: WebServiceClientInterface,
  body: RecordPlayHistoryRequestBody,
): Promise<RecordPlayHistoryResponse> {
  return client.send({
    descriptor: RECORD_PLAY_HISTORY,
    body,
  });
}

export function saveProduct(
  client: WebServiceClientInterface,
  body: SaveProductRequestBody,
): Promise<SaveProductResponse> {
  return client.send({
    descriptor: SAVE_PRODUCT,
    body,
  });
}

export function createSavedProductList(
  client: WebServiceClientInterface,
  body: CreateSavedProductListRequestBody,
): Promise<CreateSavedProductListResponse> {
  return client.send({
    descriptor: CREATE_SAVED_PRODUCT_LIST,
    body,
  });
}

export function listSavedProductList(
  client: WebServiceClientInterface,
  body: ListSavedProductListRequestBody,
): Promise<ListSavedProductListResponse> {
  return client.send({
    descriptor: LIST_SAVED_PRODUCT_LIST,
    body,
  });
}
