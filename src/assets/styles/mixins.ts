import { PixelRatio } from 'react-native';
import { DIMENSIONS } from './dimensions';

const WINDOW_WIDTH = DIMENSIONS.windowWidth;
const guidelineBaseWidth = 375;

export const scaleSize = (size: number) => size * (WINDOW_WIDTH / guidelineBaseWidth);

export const scaleFont = (size: number) => size * PixelRatio.getFontScale();