import Map from 'core-js/es6/map';
import isObject from 'lodash/isObject';
import { isArrayLike } from 'mobx';
import { mobxGet, mobxRemove, mobxSet } from './MobxUtils';
import Field, { Fields } from '../data-set/Field';

export function get(obj: object, prop: string): any {
  const index = prop.indexOf('.');
  if (index !== -1) {
    const key = prop.slice(0, index);
    const restKey = prop.slice(index + 1);
    const value = mobxGet(obj, key);
    if (isArrayLike(value)) {
      return value.map(item => get(item, restKey)).filter(item => !!item);
    }
    if (value && typeof value === 'object') {
      return get(value, restKey);
    }
  } else {
    return mobxGet(obj, prop);
  }
}

export function set(data: object, prop: string, value: any, fields: Fields = new Map<string, Field>()): any {
  const index = prop.indexOf('.');
  if (index !== -1) {
    const key = prop.slice(0, index);
    if (!data[key] && value !== void 0) {
      const field = fields.get(key);
      if (field && field.get('multiple')) {
        mobxSet(data, key, []);
      } else {
        mobxSet(data, key, {});
      }
    }
    const obj = mobxGet(data, key);
    if (isArrayLike(obj)) {
      if (isArrayLike(value)) {
        value.forEach((item, i) => {
          if (!obj[i]) {
            obj.push({});
          }
          set(obj[i], prop.slice(index + 1), item);
        });
      }
    } else if (isObject(obj)) {
      set(obj, prop.slice(index + 1), value);
    }
  } else {
    mobxSet(data, prop, value);
  }
}

export function remove(obj: object, prop: string) {
  const index = prop.indexOf('.');
  if (index !== -1) {
    const key = prop.slice(0, index);
    const restKey = prop.slice(index + 1);
    const value = mobxGet(obj, key);
    if (isArrayLike(value)) {
      value.forEach(item => remove(item, restKey));
    } else if (typeof value === 'object') {
      remove(value, restKey);
    }
  } else {
    mobxRemove(obj, prop);
  }
}
