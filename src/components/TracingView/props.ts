export interface StateProps {
  src: string;
  brightness?: number;
  contrast?: number;
  isInverted?: boolean;
  isFlippedX?: boolean;
  isFlippedY?: boolean;
  canvasHeight: number;
  canvasWidth: number;
  imageHeight: number;
  imageWidth: number;
  scale: number;
  scaleOriginX: number | null;
  scaleOriginY: number | null;
  landmarks: { [symbol: string]: GeometricalObject } | { };
  highlightedLandmarks: { [symbol: string]: GeometricalObject } | { };
  activeTool: (dispatch: DispatchFunction) => EditorTool;
};

export interface DispatchProps {
  dispatch: DispatchFunction;
};

export type AdditionalPropsToMerge = EditorTool;

export type ConnectableProps = StateProps & DispatchProps & AdditionalPropsToMerge;

export interface OwnProps {
  stageId: string;
  className?: string;
};

export type Props = ConnectableProps & OwnProps;

export default Props;