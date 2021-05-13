export interface UICommand {
  name: string;
  icon: any;
  disabled(): boolean;
  active(): boolean;
  onClick(args?: unknown): boolean;
}
