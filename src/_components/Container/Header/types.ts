export interface IHeader {
  default?: boolean;
  searchBar?: ISearchBar;
  //headerNewPublication?: IHeaderNewPublication;
}

export interface IHeaderNewPublication {
  onPressCancel: () => void;
  onPressContinue: () => void;
  continueEnabled: boolean;
}

export interface ISearchBar {
  value: string;
  onChange: (value: string) => void;
}
