import { TaskOriginEnum } from "@shared/enums/task-origin-enum";

export interface Task {
  id?: string;
  description?: string;
  course?: string;
  link?: string;
  returnDate?: Date;
  origin?: TaskOriginEnum;
}
