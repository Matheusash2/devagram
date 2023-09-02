export interface IButton {
  placeholder: string;
  onPress: () => void;
  style?: any;
  disabled?: boolean;
  loading?: boolean;
}
