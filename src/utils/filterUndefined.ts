import {pickBy} from 'lodash';

const filterUndefined = (obj: any) => {
  return pickBy(obj, (value: any) => value !== undefined);
};

export default filterUndefined;
