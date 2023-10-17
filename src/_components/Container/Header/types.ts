export interface IHeader {
  default?: boolean;
  searchBar?: ISearchBar;
  headerPublication?: IHeaderPublication;
  profileHeader?: IProfileHeader;
  editProfileHeader?: IEditProfileHeader;
}

export interface IHeaderPublication {
  submit: () => void;
  submitEnable?: boolean;
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
  submitEnable?: boolean;
}
