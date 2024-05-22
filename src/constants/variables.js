import { getVisibleScreenHeight } from '../utils/getVisibleScreenHeight';

export const headerHeight = 90;
export const imageHeight = 360;
export const newsBodyRadius = 30;
export const newsBodyHeight =
  getVisibleScreenHeight() - headerHeight - imageHeight + newsBodyRadius;
