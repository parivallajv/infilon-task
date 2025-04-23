// selectors

export const selectUsers = (state) => state?.userData?.users;
export const selectIsLoading = (state) => state?.userData?.loading;
export const selectError = (state) => state?.userData?.error;
