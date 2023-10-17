export interface IHeader {
  default?: boolean;
  searchBar?: ISearchBar;
  //headerNewPublication?: IHeaderNewPublication;
  profileHeader?: IProfileHeader;
  editProfileHeader?: IEditProfileHeader;
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

export interface IProfileHeader {
  userName: string;
  isExternalProfile: boolean;
}

export interface IEditProfileHeader {
  submit: () => void;
}
