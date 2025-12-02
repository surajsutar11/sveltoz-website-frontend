export interface NavItem {
  label: string;           // display text
  id: string;              // analytics id & fragment
  description?: string;    // left-column teaser (mega-menu)
  children?: NavItem[];    // sub-menu (max depth = 1)
}