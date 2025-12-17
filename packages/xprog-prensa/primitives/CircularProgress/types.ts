import { PrensaEngineTypeof } from '@atexbrasil/prensa-system/types'

type PrensaEngineColorTokens = keyof PrensaEngineTypeof['config']['theme']['colors']

export interface CircularProgressProps {
  dataTestid?: string;
  color?: PrensaEngineColorTokens;
  backgroundColor?: PrensaEngineColorTokens;
  percentage?: number;
  size?: number;
  strokeWidth?: number;
}
