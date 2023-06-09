export interface IPerson {
  name: string;
  type: string;
  email: string;
  phoneNo: string;
  companyName: string;
  address: string;
  children?: IPerson[];
  expanded?: boolean;
  selected?: boolean;
}
