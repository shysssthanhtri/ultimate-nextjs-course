export const ROUTES = {
  HOME: "/",
  COMMUNITY: "/community",
  COLLECTIONS: "/collections",
  FIND_JOBS: "/find-jobs",
  PROFILE: (id: string) => `/profile/${id}`,
  ASK_A_QUESTION: "/ask-a-question",

  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
} as const;
