import createHostComponent from '../../../createHostComponent';
import { BaseProps } from './baseTyping';

export interface ViewProps extends BaseProps {
  slot?: string;
  hoverClass?: string;
  hoverStartTime?: number;
  hoverStayTime?: number;
  hoverStopPropagation?: boolean;
}

const View = createHostComponent<ViewProps>('view');

export default View;
