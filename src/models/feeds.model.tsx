enum STATUS {
REQUEST = "REQUEST",
SUCCESS = "SUCCESS",
ERROR = "ERROR"
}
export interface Feed {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}
export interface FeedModel {
  loading: boolean;
  status: STATUS;
  feeds: Feed[];
}
export namespace FeedModel {
  export enum Filter {
    SHOW_All = "all",
    SHOW_ACTIVE = "active",
    SHOW_COMPLETED = "completed"
  }
}