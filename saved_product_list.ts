import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';

export interface SavedProductList {
  listId?: string,
  name?: string,
}

export let SAVED_PRODUCT_LIST: MessageDescriptor<SavedProductList> = {
  name: 'SavedProductList',
  fields: [
    {
      name: 'listId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'name',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};
