import createHostComponent from '../../../createHostComponent';
import { BaseProps } from './baseTyping';

export interface SwiperItemProps extends BaseProps {
  itemId?: string;
}

const SwiperItem = createHostComponent<SwiperItemProps>('swiper-item');

export default SwiperItem;
