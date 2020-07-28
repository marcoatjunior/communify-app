// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: "http://localhost:8080",
  credentials: {
    client_id:
      "381111669074-rvva1jbtrjbf1mnfiqufutvgkc9gjl57.apps.googleusercontent.com",
    scopes: [
      "https://www.googleapis.com/auth/classroom.announcements",
      "https://www.googleapis.com/auth/classroom.announcements.readonly",
      "https://www.googleapis.com/auth/classroom.courses",
      "https://www.googleapis.com/auth/classroom.courses.readonly",
      "https://www.googleapis.com/auth/classroom.coursework.me",
      "https://www.googleapis.com/auth/classroom.coursework.me.readonly",
      "https://www.googleapis.com/auth/classroom.coursework.students",
      "https://www.googleapis.com/auth/classroom.coursework.students.readonly",
      "https://www.googleapis.com/auth/classroom.guardianlinks.me.readonly",
      "https://www.googleapis.com/auth/classroom.guardianlinks.students",
      "https://www.googleapis.com/auth/classroom.guardianlinks.students.readonly",
      "https://www.googleapis.com/auth/classroom.profile.emails",
      "https://www.googleapis.com/auth/classroom.profile.photos",
      "https://www.googleapis.com/auth/classroom.push-notifications",
      "https://www.googleapis.com/auth/classroom.rosters",
      "https://www.googleapis.com/auth/classroom.rosters.readonly",
      "https://www.googleapis.com/auth/classroom.student-submissions.me.readonly",
      "https://www.googleapis.com/auth/classroom.student-submissions.students.readonly",
      "https://www.googleapis.com/auth/classroom.topics",
      "https://www.googleapis.com/auth/classroom.topics.readonly",
    ],
  },
  validPublicKey:
    "BJNiS6G7XAAFDvgJwyVrgsK7V9eK2pDZ5OzjpJX-FQMfjoL4bx1r0DbPh8uPNB_uDQVH_XTbr4IURimz2h7JmYw",
};
