export type AppearancesType = {
  outline?: boolean;
  cart?: boolean;
  add?: boolean;
  circle?: boolean;
  black?: boolean;
};

export interface IButtonProps {
  onClick?: () => void;
  addClass?: string;
  appearance?: AppearancesType;
}
