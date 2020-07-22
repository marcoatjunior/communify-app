import { TaskOriginEnum } from "@shared/enums/TaskOriginEnum";

export interface Task {
  id: string;
  name: string;
  returnDate: string;
  origin: TaskOriginEnum;
}
