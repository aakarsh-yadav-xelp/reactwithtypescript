export interface FeedModel {
  status: string;
  loading: boolean;
  feeds: Array<{
    id: number;
    title: string;
    description: string;
    imageUrl: string;
  }>;
}
export namespace FeedModel {
  export enum Filter {
    SHOW_All = "all",
    SHOW_ACTIVE = "active",
    SHOW_COMPLETED = "completed"
  }
}