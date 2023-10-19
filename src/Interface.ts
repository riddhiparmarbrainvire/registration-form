export interface Theme {
  colors: {
    body: string;
  };
  mobile: string;
}

export interface Label {
  label?: string;
  placeholder?: string;
  icon?: any;
  type?: string;
  name?: string;
  selectedLabel?: string;
  setSelectedLabel?: (data: string) => void | undefined;
}
