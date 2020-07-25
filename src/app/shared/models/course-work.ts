import { CourseWorkOriginEnum } from "@shared/enums/course-work-origin-enum";

export interface CourseWork {
  id?: string;
  description?: string;
  link?: string;
  returnDate?: string;
  origin?: CourseWorkOriginEnum;
}
