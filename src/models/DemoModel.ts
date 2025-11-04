export interface DemoModel {
  pageId: number;
  pagePkId: string;
  parentId: number;
  industryId: string;
  label: string;
  url: string;
  imageUrl: string;
  menuGroup: string;
  menuCode: string;
  pageTypeId: number;
  hasVertical: boolean;
  hasChildren: string;
  industries: DemoModel[];
  isSelected: boolean;
  isPaid: boolean;
  isVisible: boolean;
  description: string;
}
