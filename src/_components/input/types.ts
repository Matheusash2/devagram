import { ImageSourcePropType } from "react-native";

export interface IInput {
  /**
   * Ícone no formato PNG para o campo de entrada.
   */
  iconPNG?: ImageSourcePropType;
  /**
   * Ícone no formato SVG para o campo de entrada.
   * Para utilizar o ícone SVG, você deve criar um componente
   * usando o arquivo SVG e importá-lo conforme o exemplo abaixo:
   *
   * Exemplo:
   * 
   * import KeyIcon from "../../_assets/images/Key.svg";
   * 
   * < input
   * 
   *  iconSVG={ < KeyIcon  /> }
   * 
   * />
   */
  iconSVG?: any;
  placeholder: string;
  style?: any;
  secureTextEntry?: boolean;
  value: string;
  onChangeText: (e: string) => void;
}
