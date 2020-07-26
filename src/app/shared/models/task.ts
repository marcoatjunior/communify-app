import { TaskOriginEnum } from "@shared/enums/task-origin-enum";

export interface Task {
  id?: string;
  description?: string;
  link?: string;
  returnDate?: Date;
  origin?: TaskOriginEnum;
}
