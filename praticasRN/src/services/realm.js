import Realm from 'realm';

import RepositorySchema from '~/schemas/RepositorySchema';


export default function getReal() {
  return Realm.open({
    schema: [RepositorySchema],
  });
}
