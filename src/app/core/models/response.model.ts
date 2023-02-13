export interface Response<T> {
  body: T[],
  currentPage: number,
  totalItems: number,
  totalPages: number,
}
