import { ServiceHandlerInterface } from '@selfage/service_descriptor/service_handler_interface';
import { GET_CURRENT_METER, GetCurrentMeterRequestBody, GetCurrentMeterResponse, INCREMENT_PLAYTIME, IncrementPlaytimeRequestBody, IncrementPlaytimeResponse, RECORD_PLAY_HISTORY, RecordPlayHistoryRequestBody, RecordPlayHistoryResponse, SAVE_PRODUCT, SaveProductRequestBody, SaveProductResponse, CREATE_SAVED_PRODUCT_LIST, CreateSavedProductListRequestBody, CreateSavedProductListResponse, LIST_SAVED_PRODUCT_LIST, ListSavedProductListRequestBody, ListSavedProductListResponse } from './interface';
import { UserSession } from '@phading/user_service_interface/user_session';

export abstract class GetCurrentMeterHandlerInterface implements ServiceHandlerInterface {
  public descriptor = GET_CURRENT_METER;
  public abstract handle(
    requestId: string,
    body: GetCurrentMeterRequestBody,
    auth: UserSession,
  ): Promise<GetCurrentMeterResponse>;
}

export abstract class IncrementPlaytimeHandlerInterface implements ServiceHandlerInterface {
  public descriptor = INCREMENT_PLAYTIME;
  public abstract handle(
    requestId: string,
    body: IncrementPlaytimeRequestBody,
    auth: UserSession,
  ): Promise<IncrementPlaytimeResponse>;
}

export abstract class RecordPlayHistoryHandlerInterface implements ServiceHandlerInterface {
  public descriptor = RECORD_PLAY_HISTORY;
  public abstract handle(
    requestId: string,
    body: RecordPlayHistoryRequestBody,
    auth: UserSession,
  ): Promise<RecordPlayHistoryResponse>;
}

export abstract class SaveProductHandlerInterface implements ServiceHandlerInterface {
  public descriptor = SAVE_PRODUCT;
  public abstract handle(
    requestId: string,
    body: SaveProductRequestBody,
    auth: UserSession,
  ): Promise<SaveProductResponse>;
}

export abstract class CreateSavedProductListHandlerInterface implements ServiceHandlerInterface {
  public descriptor = CREATE_SAVED_PRODUCT_LIST;
  public abstract handle(
    requestId: string,
    body: CreateSavedProductListRequestBody,
    auth: UserSession,
  ): Promise<CreateSavedProductListResponse>;
}

export abstract class ListSavedProductListHandlerInterface implements ServiceHandlerInterface {
  public descriptor = LIST_SAVED_PRODUCT_LIST;
  public abstract handle(
    requestId: string,
    body: ListSavedProductListRequestBody,
    auth: UserSession,
  ): Promise<ListSavedProductListResponse>;
}
